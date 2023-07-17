require("./lib/vorterx/vorterx");
require("./config");
const {
  default: WASocket,
  DisconnectReason,
  downloadContentFromMessage,
  makeInMemoryStore,
  useMultiFileAuthState,
  jidDecode,
  delay,
  jidNormalizedUser,
  makeWALegacySocket,
  useMultiFileLegacyAuthState,
  DEFAULT_CONNECTION_CONFIG,
  DEFAULT_LEGACY_CONNECTION_CONFIG,
} = require("@whiskeysockets/baileys");
const mongoose = require('mongoose');
const express = require('express');
const fs = require("fs");
const kg = require("./lib/vorterx/vorterx");
const chalk = require("chalk");
const pino = require("pino");
const yargs = require("yargs");
const vorterx = require("./lib/vorterx/vorterx");
const path = require("path");
const qrcode = require("qrcode");
const { Boom } = require("@hapi/boom");
const { Collection, Simple } = require("./mangoes");
const Welcome = require("./lib/vorterx/aztec");
const { serialize, WAConnection } = Simple;
const FileType = require("file-type");
const Commands = new Collection();
const cfonts = require("cfonts");
Commands.prefix = prefix;
const user = require("./lib/connection/owner");
const session = './tokens/test.json';
const { QuickDB } = require("quick.db");
global.db = new QuickDB();
const Auth = require('./mangoes/mongodb');
const { fetchLatestBaileysVersion } = require("@whiskeysockets/baileys");

const store = makeInMemoryStore({
  logger: pino().child({ level: "silent", stream: "store" }),
});

const PORT = port;
const app = express();
let QR_GENERATE = "invalid";
let status;
const connect = async () => {
  await mongoose.connect(mongodb);

  const { getAuthFromDatabase } = new Auth(sessionId);

  const { saveState, state, clearState } = await getAuthFromDatabase();

  let { version, isLatest } = await fetchLatestBaileysVersion();
  let connOptions = {
    printQRInTerminal: true,
    browser: ["Aztec", "Firefox", "105.0.1343.42"],
    logger: pino({ level: "silent" }),
    defautQueryTimeoutMs: undefined,
    auth: state,
    version,
  };
  const vorterx = new WAConnection(WASocket(connOptions));
  const randomHexs = `#${((Math.random() * 0xffffff) << 0)
    .toString(16)
    .padStart(6, "0")}`;
  const randomHex = `#${((Math.random() * 0xffffff) << 0)
    .toString(16)
    .padStart(6, "0")}`;
  const randomHexx = `#${((Math.random() * 0xffffff) << 0)
    .toString(16)
    .padStart(6, "0")}`;

  await cfonts.say("AZTEC\n\nBY\n\nVORTERX", {
    font: "block", 
    align: "center", 
    colors: [randomHex, randomHexs], 
    background: "transparent",
    letterSpacing: 2, 
    lineHeight: 2, 
    space: true, 
    maxLength: "0",
    gradient: [randomHex, randomHexs, randomHexx], 
    independentGradient: false,
    transitionGradient: true, 
    env: "node", 
  });
  await console.log("[🚀SERVER HAS STARTED TO LAUNCH]");
  store.bind(vorterx.ev);

  vorterx.ev.on("creds.update", () => {
    saveState();
  });

  vorterx.ev.on("connection.update", async (update) => {
    const { lastDisconnect, connection, qr } = update;
    status = connection;
    if (connection) {
      await console.info(`Connection Status : ${connection}`);
    }

    if (connection == "close") {
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      if (reason === DisconnectReason.badSession) {
        console.log(` ♻️ Bad Session File, Please Delete Session and Scan Again`);
        vorterx.logout();
      } else if (reason === DisconnectReason.connectionClosed) {
        console.log(" ⚕️ Connection closed reconnecting please wait....");
        connect();
      } else if (reason === DisconnectReason.connectionLost) {
        console.log(" 👮 Connection Lost from Server reconnecting please wait...");
        connect();
      } else if (reason === DisconnectReason.connectionReplaced) {
        console.log(
          " 🔐 Connection Replaced, Another New Session Opened, Please Close Current Session First"
        );
        vorterx.logout();
      } else if (reason === DisconnectReason.loggedOut) {
        clearState();
        console.log(` 🏊 Device Logged Out, Please Scan Again.`);
        process.exit();
      } else if (reason === DisconnectReason.restartRequired) {
        console.log(" ♻️ Restarting please hold on...");
        connect();
      } else if (reason === DisconnectReason.timedOut) {
        console.log(" 🔌 Connection TimedOut Reconnecting please wait...");
        connect();
      } else vorterx.end(`Unknown DisconnectReason: ${reason}|${connection}`);
    }
    if (qr) {
      QR_GENERATE = qr;
    }
  });

  vorterx.ev.on("group-participants.update", async (m) => {
    Welcome(vorterx, m);
  });

  vorterx.ev.on("messages.upsert", async (chatUpdate) => {
    m = serialize(vorterx, chatUpdate.messages[0]);

    if (!m.message) return;
    if (m.key && m.key.remoteJid == "status@broadcast") return;
    if (m.key.id.startsWith("BAE5") && m.key.id.length == 16) return;

    require("./lib/vorterx/vorterx")(vorterx, m, Commands, chatUpdate);
  });
  vorterx.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (
        (decode.user && decode.server && decode.user + "@" + decode.server) ||
        jid
      );
    } else return jid;
  };

  vorterx.ev.on("contacts.update", async (update) => {
    for (let contact of update) {
      let id = vorterx.decodeJid(contact.id);
      user.findOne({ id: id }).then((usr) => {
        if (!usr) {
          new user({ id: id, name: contact.notify }).save();
          console.log("member has been added successfully");
        } else {
          user.updateOne({ id: id }, { name: contact.notify });
        }
      });
    }
  });
  /**
   *
   * @param {*} jid
   * @param {*} text
   * @param {*} quoted
   * @param {*} options
   * @returns
   */
  vorterx.sendText = (jid, text, quoted = "", options) =>
    vorterx.sendMessage(jid, { text: text, ...options }, { quoted });
  /**
   *
   * @param {*} jid
   * @param {*} path
   * @param {*} filename
   * @param {*} caption
   * @param {*} quoted
   * @param {*} options
   * @returns
   */
  vorterx.sendFile = async (
    jid,
    path,
    fileName = "",
    caption = "",
    quoted = "",
    options = {}
  ) => {
    let types = await vorterx.getFile(path, true);
    let { mime, ext, res, data, filename } = types;
    if ((res && res.status !== 200) || file.length <= 65536) {
      try {
        throw { json: JSON.parse(file.toString()) };
      } catch (e) {
        if (e.json) throw e.json;
      }
    }
    let type = "",
      mimetype = mime,
      pathFile = filename;
    if (options.asDocument) type = "document";
    if (options.asSticker || /webp/.test(mime)) {
      let { writeExif } = require("./lib/exif");
      let media = { mimetype: mime, data };
      pathFile = await writeExif(media, {
        packname: options.packname ? options.packname : global.packname,
        categories: options.categories ? options.categories : [],
      });
      await fs.promises.unlink(filename);
      type = "sticker";
      mimetype = "image/webp";
    } else if (/image/.test(mime)) type = "image";
    else if (/video/.test(mime)) type = "video";
    else if (/audio/.test(mime)) type = "audio";
    else type = "document";
    await vorterx.sendMessage(
      jid,
      { [type]: { url: pathFile }, caption, mimetype, fileName, ...options },
      { quoted, ...options }
    );
    return fs.promises.unlink(pathFile);
  };
  /**
   *
   * @param {*} message
   * @param {*} filename
   * @param {*} attachExtension
   * @returns
   */
 vorterx.downloadAndSaveMediaMessage = async (
    message,
    filename,
    attachExtension = true
  ) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, "")
      : mime.split("/")[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    let type = await FileType.fromBuffer(buffer);
    trueFileName = attachExtension ? filename + "." + type.ext : filename;
    await fs.writeFileSync(trueFileName, buffer);
    return trueFileName;
  };

 vorterx.downloadMediaMessage = async (message) => {
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, "")
      : mime.split("/")[0];
    const stream = await downloadContentFromMessage(message, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }

    return buffer;
  };
  /**
   *
   * @param {*} jid
   * @returns
   */
  vorterx.username = async (jid) => {
    let name = await user.findOne({ id: jid });
    if (!name) {
      unme = "user";
    } else {
      unme = name.name;
    }
    return unme;
  };
};

connect();
app.get('/', (req, res) => {
        res.send(qrcode.toBuffer(QR_GENERATE))
    });
app.listen(PORT);
