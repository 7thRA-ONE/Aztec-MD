const fs = require("fs");
const chalk = require("chalk");
require("dotenv").config();
let vorterx = process.env.MODS;
if (!vorterx) {
  vorterx = "27686881509","989389383634";
}

global.owner = vorterx.split(",");
global.mongodb = process.env.MONGODB || "none";
global.botName = process.env.BOTNAME || "Aᴢᴛᴇᴄ-Mᴅ";
global.prefix = process.env.PREFIX || ".";
global.chatGpT = process.env.ChatGpT || ""; //chatgpt api key here so it will respond
global.sessionId = process.env.SESSION_ID || "vorterx";
global.port = process.env.PORT || 8081;

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
