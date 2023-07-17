module.exports = {
  name: "leave",
  description: "To leave the group you are on",
  category: "Group",
  start: async(vorterx, m, { isAdmin, isGroup, toReact, isBotAdmin}) => {

  if(isAdmim){ await toReact("❌"); return m.reply("*📢 Sorry this cmd is for my owner only*");} if(iGroup) { await toReact("❌"); return m.reply("*🤔Weres you heading cz this is group cmd*");} return await vorterx.groupLeave(m.from,{ quoted: m });
  }
};
