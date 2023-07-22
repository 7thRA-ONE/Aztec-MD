module.exports = {
  name: "setgcname",
  description: "Group",
  category: "Owner",
  start: async(vorterx, m, { prefix, toReact, text}) => {

  if(!text) { await toReact("⭕"); return m.reply("*give the name*");
                }
    await toReact("✔️");
    await vorterx.updateProfileName(text)
    m.reply(`Success in changing the name of the bot number`);
    }
};
