module.exports = {
name:"unmute",
description: "To Open the group",
category: "Group",
start: async(vorterx, m, { toReact, isAdmin, isBotAdmin, isGroup, pushName }) =>{

if(m.isGroup) { 
await toReact("❌"); return m.reply("*👋 Sorry this command is for admins only*");
}
await toReact("🔉");
  m.reply(`*🔉Group has been opened by ${pushName}*`);
return await vorterx.groupSettingUpdate(m.from, "not_announcement");
  }
};
