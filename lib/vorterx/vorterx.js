require("../../core.js");
require("../../config.js");
const {
  generateWAMessage,
  areJidsSameUser,
  proto,
} = require("@whiskeysockets/baileys");
const { Function } = require("../module/function.js");
const { Collection, Simple } = require("../../mangoes");
const { isUrl, isNumber } = require("../module/function.js");
const Func = require("../module/function.js");
const { Insta } = require("../module/function.js");
const { getJson } = require("../insta.js");
const { dare, truth, random_questions } = require("../double-dr.js");
const { bytesToSize,
    getSizeMedia } = require("../module/function.js");
const fs = require("fs");
const moment = require("moment-timezone");
const chalk = require("chalk");
const cool = new Collection();
const { table } = require("console");
const Mongo_URL = mongodb;
global.Levels = require("discord-xp");
Levels.setURL(Mongo_URL);
console.log(chalk.blue.bold("👨‍💻You have connected to the database"));
const Prefix = prefix;
const mongoose = require("mongoose");
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(Mongo_URL);
}
global.user = require("../connection/owner.js");

module.exports = async (vorterx, m, commands, chatUpdate) => {
  try {
    let { type, isGroup, sender, from } = m;
    let body =
      type == "buttonsResponseMessage"
        ? m.message[type].selectedButtonId
        : type == "listResponseMessage"
        ? m.message[type].singleSelectReply.selectedRowId
        : type == "templateButtonReplyMessage"
        ? m.message[type].selectedId
        : m.text;
    let prat =
      type === "conversation" && body?.startsWith(prefix)
        ? body
        : (type === "imageMessage" || type === "videoMessage") &&
          body &&
          body?.startsWith(prefix)
        ? body
        : type === "extendedTextMessage" && body?.startsWith(prefix)
        ? body
        : type === "buttonsResponseMessage" && body?.startsWith(prefix)
        ? body
        : type === "listResponseMessage" && body?.startsWith(prefix)
        ? body
        : type === "templateButtonReplyMessage" && body?.startsWith(prefix)
        ? body
        : "";
    let metadata = isGroup ? await vorterx.groupMetadata(from) : {};
    let pushname = m.pushName || "NO name";
    let participants = isGroup ? metadata.participants : [sender];
    const groupName = isGroup ? metadata.subject : "";
    const iscreator = [...global.owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
    let groupAdmin = isGroup
      ? participants.filter((v) => v.admin !== null).map((v) => v.id)
      : [];
    const botNumber = await vorterx.decodeJid(vorterx.user.id);
    let isBotAdmin = isGroup ? groupAdmin.includes(botNumber) : false;
    let isAdmin = isGroup ? groupAdmin.includes(sender) : false;
    //////////Database\\\\\\\\\\\\\\\\
    const _mods = await db.get("mods");
    global.mods = _mods || [];
    const _ban = await db.get("ban");
    global.ban = _ban || [];
    let wel = await db.get("events");
    global.wlc = wel || [];
    let isCmd = body.startsWith(prefix);
    let quoted = m.quoted ? m.quoted : m;
    let mime = (quoted.msg || m.msg).mimetype || " ";
    let isMedia = /image|video|sticker|audio/.test(mime);
    let budy = typeof m.text == "string" ? m.text : "";
    let args = body.trim().split(/ +/).slice(1);
    let ar = args.map((v) => v.toLowerCase());
    let text = (q = args.join(" "));
    const cmdName = prat
      .slice(prefix.length)
      .trim()
      .split(/ +/)
      .shift()
      .toLowerCase();
    const cmd =
      commands.get(cmdName) ||
      Array.from(commands.values()).find((v) =>
        v.alias.find((x) => x.toLowerCase() == cmdName)
      ) ||
      "";
    const icmd =
      commands.get(cmdName) ||
      Array.from(commands.values()).find((v) =>
        v.alias.find((x) => x.toLowerCase() == cmdName)
      );

    const mentionByTag =
      type == "extendedTextMessage" &&
      m.message.extendedTextMessage.contextInfo != null
        ? m.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    const flags = args.filter((arg) => arg.startsWith("--"));
    if (body.startsWith(prefix) && !icmd) { await toReact("🛑"); {
      let txtt = `*Sorry but ${prefix}${cmdName}* cannot be found*`;
      vorterx.sendMessage(m.from, {caption:txtt}, { quoted: m });
      }
                                          }
                                           

    if (m.message && isGroup && cmd) {
      console.log(
        "" + "\n" + chalk.blue.bold(chalk.blue.bold("[ GRUP ]")),
        chalk.blue.bold(
          chalk.blue.bold(isGroup ? metadata.subject : m.pushName)
        ) +
          "\n" +
          chalk.blue.bold(chalk.blue.bold("[ TIME ]")),
        chalk.blue.bold(chalk.blue.bold(new Date())) +
          "\n" +
          chalk.blue.bold(chalk.blue.bold("[ FROM ]")),
        chalk.blue.bold(
          chalk.blue.bold(m.pushName + " @" + m.sender.split("@")[0])
        ) +
          "\n" +
          chalk.blue.bold(chalk.blue.bold("[ BODY ]")),
        chalk.blue.bold(chalk.blue.bold(body || type)) + "\n" + ""
      );
    }
    if (m.message && !isGroup) {
      console.log(
        "" + "\n" + chalk.black(chalk.blue.bold("[ PRIV ]")),
        chalk.blue.bold(chalk.blue.bold("PRIVATE CHAT")) +
          "\n" +
          chalk.blue.bold(chalk.blue.bold("[ TIME ]")),
        chalk.blue.bold(chalk.blue.bold(new Date())) +
          "\n" +
          chalk.blue.bold(chalk.blue.bold("[ FROM ]")),
        chalk.blue.bold(
          chalk.blue.bold(m.pushName + " @" + m.sender.split("@")[0])
        ) +
          "\n" +
          chalk.blue.bold(chalk.blue.bold("[ BODY ]")),
        chalk.blue.bold(chalk.blue.bold(body || type)) + "\n" + ""
      );
    }
     if (isGroup && iscreator ) {
     await toReact("🐤");
    }
    
    if (isGroup && mods.includes(`${m.from}`)) {
      if (body.includes("://chat.whatsapp.com/")) {
        if (iscreator) {
          return m.reply("*currently you are sudo*");
        } else if (isAdmin) {
          return m.reply("*currently your an admin*");
        } else {
          let key;
          key = {
            remoteJid: m.from,
            fromMe: false,
            id: m.id,
            participant: m.sender,
          };
          await vorterx.sendMessage(m.from, { delete: key });
          await vorterx.groupParticipantsUpdate(m.from, [m.sender], "remove");
        }
      }
    }
    let [date, time] = new Date()
        .toLocaleString("en-IN", { timeZone: "Africa/Johannesburg" })
        .split(",");
 //------[Auto Bio For The Bot]------//
    let aztec = `Aᴢᴛᴇᴄ Mᴅ ᴡᴀ ʙᴏᴛ: 📆ᴅᴀᴛᴇ: ${date} <=> 🕛ᴛɪᴍᴇ: ${time} ʙʏ ᴠᴏʀᴛᴇx`;
    vorterx.updateProfileStatus(aztec);
    
    if (isGroup && mods.includes(`${m.from}`)) {
      if (body.includes("://api.whatsapp.com/")) {
        if (iscreator) {
          return m.reply("*currently you are sudo*");
        } else if (isAdmin) {
          return m.reply("*currently you are an admin*");
        } else {
          let key;
          key = {
            remoteJid: m.from,
            fromMe: false,
            id: m.id,
            participant: m.sender,
          };
          await vorterx.sendMessage(m.from, { delete: key });
          await vorterx.groupParticipantsUpdate(m.from, [m.sender], "remove");
        }
      }
    }
    if (cmd) {
      const randomXp = Math.floor(Math.random() * 3) + 1; 
      const haslUp = await Levels.appendXp(m.sender, "bot", randomXp);
    }    
    if (!isGroup && !iscreator)
      return m.reply("*Using commands in inbox is not allowed*");
    if (cmd) {
      if (ban.includes(`${m.sender}`))
        return m.reply(`You are banned from using cmd`);
    }
   async function toReact(emoji) {
      const reactm = {
        react: {
          text: emoji,
          key: m.key,
        },
      };
      await vorterx.sendMessage(m.from, reactm);
    } 
    cmd.start(vorterx, m, {
      name: "vorterx",
      metadata,
      pushName: pushname,
      participants,
      body,
      ban,
      toReact,
      args,
      ar,
      isAdmin,
      groupAdmin,
      groupName,
      text,
      wlc,
      Insta,
      bytesToSize,
      getSizeMedia,
      mods,
      quoted,
      getJson,
      flags,
      mentionByTag,
      mime,
      isBotAdmin,
      prefix,
      iscreator,
      dare,
      truth,
      random_questions,
      command: cmd.name,
      commands,
      Function: Func,
      toUpper: function toUpper(query) {
        return query.replace(/^\w/, (c) => c.toUpperCase());
      },
    });
  } catch (e) {
    e = String(e);
    if (!e.includes("cmd.start")) console.error(e);
  }
};
