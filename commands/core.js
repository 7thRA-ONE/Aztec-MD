module.exports = {
  name: "menu",
  alias: ["h"],
  desc: "List all command",
  category: "General",
  react: "⚕️",
  start: async (vorterx, m, { commands, args, prefix, text, toUpper }) => {
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
        if (!info.category || info.category === "private") continue;
        )
          continue;
        if (Object.keys(category).includes(info.category))
          category[info.category].push(info);
        else {
          category[info.category] = [];
          category[info.category].push(info);
        }
      }
      let amarok = `*┏━━⟪ AZTEC-MD ⟫━⦿
┃ ✗ USER: ${pushName}
┃ ✗ BOTNAME: AZTEC-MD 
┃ ✗ PREFIX: ${prefix}
┗━━━━━━━━━━⦿\n\n*`;

const keys = Object.keys(category);
      for (const key of keys) {
        txt += `*${key.toUpperCase()} ${
          emo[keys.indexOf(key)]
        } :-*  \n\`\`\`${category[key]
          .map((cmd) => cmd.name)
          .join(", ")}\`\`\`\n\n`;
      }
