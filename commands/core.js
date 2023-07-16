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
