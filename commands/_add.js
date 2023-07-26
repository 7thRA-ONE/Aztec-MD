module.exports = {
  name: "add",
  description: "To add members",
  category: "Group",
  start: async(vorterx,m,{prefix,toReact,isGroup,isBotAdmin,isAmin}) => {
    
if (!m.isGroup) { await toReact("🚫"); return m.reply("*This cmd isfor the group admins only*");
  }
if (!isBotAdmin) { await toReact("🚫"); return m.reply("*Im not an admin l cant procedure*");
  }
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await vorterx.groupParticipantsUpdate(m.from, [users], 'add')
await m.reply(`*💠User has been added successfully*`);
  }
     };
