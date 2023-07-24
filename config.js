const fs = require("fs");
const chalk = require("chalk");
require("dotenv").config();
let vorterx = process.env.MODS;
if (!vorterx) {
  vorterx = "27686881509"; //add your number here 
}

global.owner = vorterx.split(",");
global.mongodb = process.env.MONGODB || "none";
global.mods = process.env.MODS || "27686881509";
global.botName = process.env.BOTNAME || "Aᴢᴛᴇᴄ-Mᴅ"; // change botName
global.prefix = process.env.PREFIX || "-";
global.menu = process.env.MENU || "", //kindly choose the menu style you want [1] default AZTEC-MD menu] [2] SECTOR BOT menu _available as well 
global.sessionId = process.env.SESSION_ID || "vorterx"; //change session
global.port = process.env.PORT || 8081;

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
