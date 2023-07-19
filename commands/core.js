const fs = require("fs")
const { tiny, fancyText } = require("../lib/fonts.js");

module.exports = {
  name: "menu",
  alias: ["list"],
  description: "The list of all command",
  category: "General",
  start: async (vorterx, m, { commands, args, prefix, toReact, text,  toUpper }) => {
    await toReact("🛸");
  let aztec = fs.readFileSync("./lib/connect/vorterx.png");
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
      let amarok = `┏━━⟪ ${process.env.BOTNAME} ⟫━⦿
┃ ✗ User: ${pushName}
┃ ✗ Botname: ${process.env.BOTNAME}
┃ ✗ Prefix: ${prefix}
┗━━━━━━━━━━⦿\n\n`;

const keys = Object.keys(category);
      for (const key of keys) {
        amarok += `*┌─『${tiny(key.toUpperCase)()}*』─❖\n\n${category[key]
          .map((cmd) => ` |${fancyText(prefix + cmd.name)}`)
          .join("\n")}\n\n└─────────◉\n\n`;
      }
      amarok += `*©VORTERX*`;
await vorterx.sendMessage(m.from, { image: aztec, caption: amarok }, { quoted: m});
   }
},
};
