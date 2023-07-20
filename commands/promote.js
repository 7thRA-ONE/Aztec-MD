module.exports = {
  name: "promote",
  description: "To promote a member",
  category: "Group",
  start: async(vorterx, m, { prefix, toReact, mentionByTag, text }) => {
    
if (!isGroup) { await toReact("❌"); return m.reply("*Sorry its a group command.Couldn't process the request*");
	      }
if (!isAdmin) { await toReact("❌"); return m.reply("*This is an Admin command only*");
              }
if (!isBotAdmin) { await toReact("❌"); return m.reply("*Cannot execute without being admin*");
                 }
	try {
                            let mention = mentionByTag
      let users = await (mention[0]) || m.msg.contextInfo.participant
	  if (!users) return m.reply("*Couldn't find any userID in context*")
    await toReact("👮");
        await vorterx.groupParticipantsUpdate(m.from, [users], 'promote')
         vorterx.sendMessage(m.from,{text:`@${users.split("@")[0]}has been promoted to be an admin member`,contextInfo: { mentionedJid: [users] }})
        } catch { 
		return m.reply(`*Sorry failed to promote user could not be found*`);
    }
         }
