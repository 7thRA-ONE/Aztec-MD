module.exports = {
name:"close",
alias: ["mute"],
description: "To close the group",
category: "Group",
start: async(vorterx, m, { toReact, isAdmin, isBotAdmin, isGroup, pushName }) =>{

if(m.isGroup) { 
await toReact("❌"); return m.reply("*👋 Sorry this command is for admins only*");
}
await toReact("🔉");
    m.reply(`*🔉Group has been closed by ${pushName}*`);
return await vorterx.groupSettingUpdate(m.from, "announcement");
  }
};
