module.exports = {
name:"mute",
description: "To close the group",
category: "Group",
start: async(vorterx, m, { isAdmin, toReact, isBotAdmin, isGroup }) =>{

if(isAdmin) {
await toReact("❌"); return m.reply("*👮This command is only for my owner*");
}
if(isBotAdmin) {
 await toReact("❌"); return m.reply("*😭Im not an admin so l can't procedure*");
}
if(isGroup) { 
await toReact("❌"); return m.reply("*👋 Sorry this command is for groups only*");
}
await toReact("🔉");
return await vorterx.groupSettingUpdate(m.from, "announcement");
  }
);
