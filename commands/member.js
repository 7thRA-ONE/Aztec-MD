module.exports = {
  name: "add",
  description: "To add a user to a group",
  category: "Group",
  start: async(vorterx, m, { prefix, isAdmin, isBotAdmin, isGroup, toReact }) => {

  if(isBotAdmin) { await toReact("❌"); return m.reply("*👮Sorry but you cannot use this cmd as you are not an admn*");
                 }   			
  if (isGroup) { await toReact("❌"); return m.reply("*💔This command is for Admins only*");}
 	
 let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
 if (users.length == 0) return m.reply(`*🔉 Give a number you want to add to the group*`)
  await vorterx.groupParticipantsUpdate(m.from, [users], 'add').then((res) => m.reply(`🔉A member has been added successfully*`)).catch((err) => replay(`*❌Error occurred while adding a member*`))
 }
    };
