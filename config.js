const fs = require("fs");
const chalk = require("chalk");
require("dotenv").config();
let vorterx = process.env.MODS;
if (!vorterx) {
  vorterx = "27686881509";
}

global.owner = vorterx.split(",");
global.mongodb = process.env.MONGODB || "none";
global.prefix = process.env.PREFIX || ".";
global.sessionId = process.env.SESSION_ID || "vorterx";
global.port = process.env.PORT || 1200;

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});