module.exports = {
name:"mute",
description: "To close the group",
category: "Group",
start: async(vorterx, m, { toReact, isAdmin, isBotAdmin, isGroup }) =>{

if(isGroup) { 
await toReact("❌"); return m.reply("*👋 Sorry this command is for groups only*");
}
await toReact("🔉");
return await vorterx.groupSettingUpdate(m.from, "announcement");
  m.reply(`*🔉Group has been closed by ${pushName}*`);
  }
};

module.exports = {
name:"unmute",
description: "To Open the group",
category: "Group",
start: async(vorterx, m, { toReact, isAdmin, isBotAdmin, isGroup }) =>{

if(isGroup) { 
await toReact("❌"); return m.reply("*👋 Sorry this command is for groups only*");
}
await toReact("🔉");
  return m.reply(`*🔉Group has been opened by ${pushName}*`);
return await vorterx.groupSettingUpdate(m.from, "not_announcement");
  }
};
