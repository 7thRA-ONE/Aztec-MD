const fs = require("fs")
const moment = require("moment-timezone");
//const { tiny } = require("../lib/fonts.js");
const { tiny } = require("@viper-x/fancytext");

module.exports = {
  name: "menu",
  description: "The list of all command",
  category: "General",
  start: async (vorterx, m, { commands, args, prefix, toReact, text,  toUpper }) => {
    await toReact("🛸");
  let aztec = fs.readFileSync("./lib/connect/vorterx.png");
    const time = moment(moment()).format('HH:mm:ss')
                moment.tz.setDefault('Africa/Johannesburg').locale('id')
                const date = moment.tz('africa/johannesburg').format('DD/MM/YYYY');
    const { pushName, sender } = m;
    if (args[0]) {
      let data = [];
      let name = args[0].toLowerCase();
      let cmd =
        commands.get(name) ||
        Array.from(commands.values()).find((v) => v.alias.includes(name));
} else {
      const { pushName, sender } = m;
      let cm = commands.keys();
      let category = [];

      for (let cmd of cm) {
        let info = commands.get(cmd);
        if (!cmd) continue;
        if (!info.category || info.category === "private")
           continue;
        if (Object.keys(category).includes(info.category))
          category[info.category].push(info);
        else {
          category[info.category] = [];
          category[info.category].push(info);
        }
      }
      let amarok = `┏━━⟪ ${tiny(process.env.BOTNAME)} ⟫━⦿
┃ ✗ User: ${tiny(pushName)}
┃ ✗ Botname: ${tiny(process.env.BOTNAME)}
┃ ✗ Prefix: ${tiny(prefix)}
┗━━━━━━━━━━⦿\n\n`;

const keys = Object.keys(category);
      for (const key of keys) {
        amarok += `*┌─『${tiny(key.toLowerCase())}*』─❖\n\n${category[key]
          .map((cmd) => ` |${prefix + cmd.name}`)
          .join("\n")}\n\n└─────────◉\n\n`;
      }
      amarok += `*©vorterx-team*`;
await vorterx.sendMessage(m.from, { image: aztec, caption: tiny(amarok )}, { quoted: m});
   }
},
};
