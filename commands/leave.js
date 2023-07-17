module.exports = {
  name: "leave",
  description: "To leave the group you are on",
  category: "Group",
  start: async(vorterx, m, { isAdmin, isGroup, toReact, isBotAdmin}) => {

  if(isGroup) { await toReact("❌"); return m.reply("*🤔Weres you heading cz this is group cmd*");} return await vorterx.groupLeave(m.from,{ quoted: m });
  }
};
