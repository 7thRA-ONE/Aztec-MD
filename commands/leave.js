module.exports = {
  name: "leave",
  description: "To leave the group you are on",
  category: "Group",
  start: async(vorterx, m, { isAdmin, isGroup, toReact, isBotAdmin}) => {

  if(m.isGroup) { await toReact("❌"); return m.reply("*🤔Weres you heading cz this is group cmd*");} await toReact("👋"); m.reply("*👋Later mates until we meet again*"); return await vorterx.groupLeave(m.from,{ quoted: m });
  }
};
