require ("../config");
module.exports = {
	name: "kick",
	alias: ["remove"],
	description: "remove Member from group",
	category: "Group",
	start: async(vorterx, m, { text, prefix,  isBotAdmin,isAdmin,mentionByTag}) => {
		if(!isAdmin) { await react:("⭕"); return m.reply(`*🔌This is admin only command*`);
                 }
		if(!isBotAdmin) { await react:("😭"); return m.reply(`*🔌I need to be an admin in order to use this command*`);
                    }
		const mention= await mentionByTag
		if(!isAdmin) { await react:("⭕"); return m.reply(`*🔌This is admin only command*`);
  }
		let users = await (mention[0]) || m.msg.contextInfo.participant
		if (!users) { await react:("❌"); return m.reply(`*🤔No user ld found*`);
                }
              await react:("🎊");
			await vorterx.groupParticipantsUpdate(m.from, [users], "remove")
			await vorterx.sendMessage(m.from,{text:`*🎊User has been removed by ${pushName}*`},{quoted:m})
	},
    
}
