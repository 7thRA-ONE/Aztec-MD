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
const fs = require("fs");
const chalk = require("chalk");
const pino = require("pino");
const yargs = require("yargs");
const path = require("path");
const qrcode = require("qrcode");
const { Boom } = require("@hapi/boom");
const { Collection, Simple } = require("./lib");
const Welcome = require("./lib/vorterx/aztec");
const { serialize, WAConnection } = Simple;
const FileType = require("file-type");
const Commands = new Collection();
const cfonts = require("cfonts");
const mongoose = require("mongoose");
Commands.prefix = prefix;
const user = require("./connection/owner");
const express = require("express");
const axios = require("axios");
const session = `./tokens/test.json`;
const { QuickDB } = require("quick.db");
global.db = new QuickDB();
const Auth = require("./lib/mongodb");
const { fetchLatestBaileysVersion } = require("@whiskeysockets/baileys");
const readCommands = () => {
  let dir = path.join(__dirname, "./commands");
  let dirs = fs.readdirSync(dir);
  let cmdlist = {};
  try {
    dirs.forEach(async (res) => {
      let groups = res.toLowerCase();
      Commands.category = dirs.filter((v) => v !== "_").map((v) => v);
      cmdlist[groups] = [];
      let files = fs
        .readdirSync(`${dir}/${res}`)
        .filter((file) => file.endsWith(".js"));
      for (const file of files) {
        const command = require(`${dir}/${res}/${file}`);
        cmdlist[groups].push(command);
        Commands.set(command.name, command);
        delay(100);
      }
    });
    Commands.list = cmdlist;
  } catch (e) {
    console.error(e);
  }
};

const store = makeInMemoryStore({
  logger: pino().child({ level: "silent", stream: "store" }),
});

readCommands();
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
  const client = new WAConnection(WASocket(connOptions));
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
    align: "center", // define text alignment
    colors: [randomHex, randomHexs], // define all colors
    background: "transparent", // define the background color, you can also use `backgroundColor` here as key
    letterSpacing: 2, // define letter spacing
    lineHeight: 2, // define the line height
    space: true, // define if the output text should have empty lines on top and on the bottom
    maxLength: "0", // define how many character can be on one line
    gradient: [randomHex, randomHexs, randomHexx], // define your two gradient colors
    independentGradient: false, // define if you want to recalculate the gradient for each new line
    transitionGradient: true, // define if this is a transition between colors directly
    env: "node", 
  });
  await console.log("[SERVER STARTED]");
  store.bind(client.ev);

  Vorterx.ev.on("creds.update", () => {
    saveState();
  });

  Vorterx.ev.on("connection.update", async (update) => {
    const { lastDisconnect, connection, qr } = update;
    status = connection;
    if (connection) {
      await console.info(`Connection Status : ${connection}`);
    }

    if (connection == "close") {
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      if (reason === DisconnectReason.badSession) {
        console.log(`Bad Session File, Please Delete Session and Scan Again`);
        Vorterx.logout();
      } else if (reason === DisconnectReason.connectionClosed) {
        console.log("Connection closed, reconnecting....");
        connect();
      } else if (reason === DisconnectReason.connectionLost) {
        console.log("Connection Lost from Server, reconnecting...");
        connect();
      } else if (reason === DisconnectReason.connectionReplaced) {
        console.log(
          "Connection Replaced, Another New Session Opened, Please Close Current Session First"
        );
        Vorterx.logout();
      } else if (reason === DisconnectReason.loggedOut) {
        clearState();
        console.log(`Device Logged Out, Please Scan Again And Run.`);
        process.exit();
      } else if (reason === DisconnectReason.restartRequired) {
        console.log("Restart Required, Restarting...");
        connect();
      } else if (reason === DisconnectReason.timedOut) {
        console.log("Connection TimedOut, Reconnecting...");
        connect();
      } else Vorterx.end(`Unknown DisconnectReason: ${reason}|${connection}`);
    }
    if (qr) {
      QR_GENERATE = qr;
    }
  });

  Vorterx.ev.on("group-participants.update", async (m) => {
    Welcome(Vorterx, m);
  });

  Vorterx.ev.on("messages.upsert", async (chatUpdate) => {
    m = serialize(Vorterx, chatUpdate.messages[0]);

    if (!m.message) return;
    if (m.key && m.key.remoteJid == "status@broadcast") return;
    if (m.key.id.startsWith("BAE5") && m.key.id.length == 16) return;

    require("./lib/vorterx/vorterx")(Vorterx, m, Commands, chatUpdate);
  });
  Vorterx.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (
        (decode.user && decode.server && decode.user + "@" + decode.server) ||
        jid
      );
    } else return jid;
  };

  Vorterx.ev.on("contacts.update", async (update) => {
    for (let contact of update) {
      let id = Vorterx.decodeJid(contact.id);
      user.findOne({ id: id }).then((usr) => {
        if (!usr) {
          new user({ id: id, name: contact.notify }).save();
          console.log("user added");
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
  Vorterx.sendText = (jid, text, quoted = "", options) =>
    Vorterx.sendMessage(jid, { text: text, ...options }, { quoted });
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
  Vorterx.sendFile = async (
    jid,
    path,
    fileName = "",
    caption = "",
    quoted = "",
    options = {}
  ) => {
    let types = await client.getFile(path, true);
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
        author: options.author ? options.author : global.author,
        categories: options.categories ? options.categories : [],
      });
      await fs.promises.unlink(filename);
      type = "sticker";
      mimetype = "image/webp";
    } else if (/image/.test(mime)) type = "image";
    else if (/video/.test(mime)) type = "video";
    else if (/audio/.test(mime)) type = "audio";
    else type = "document";
    await client.sendMessage(
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
  Vorterx.downloadAndSaveMediaMessage = async (
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
    // save to file
    await fs.writeFileSync(trueFileName, buffer);
    return trueFileName;
  };

 Vorterx.downloadMediaMessage = async (message) => {
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
  Vorterx.username = async (jid) => {
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
  app.get("/qr", async (req, res) => {
  const { session } = req.query;
  if (!session)
    return void res
      .status(404)
      .setHeader("Content-Type", "text/plain")
      .send("Provide the session id to connect")
      .end();
  if (sessionId !== session)
    return void res
      .status(404)
      .setHeader("Content-Type", "text/plain")
      .send("Invalid session")
      .end();
  if (status == "open")
    return void res
      .status(404)
      .setHeader("Content-Type", "text/plain")
      .send("Session already exist need new")
      .end();
res.setHeader("content-type", "image/png");
  res.send(await qrcode.toBuffer(QR_GENERATE));
});

app.listen(PORT, () => {
  console.log(`This Server is running on PORT ${PORT}`);
});
