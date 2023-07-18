const config = require("../config");

require ("../config");
module.exports = {
	name: "kick",
	alias: ["remove", "sick"],
	description: "remove Member from group",
	category: "Group",
	start: async(vorterx, m, { text, prefix, toReact, isBotAdmin, isAdmin, mentionByTag, pushName}) => {
		// if(!isAdmin) { await toReact("⭕"); return m.reply(`*🔌This is admin only command*`);
  //       }
		// if(!isBotAdmin) { await toReact("😭"); return m.reply(`*🔌I need to be an admin in order to use this command*`);
  //       }
		// const mention = await mentionByTag
		// if(!mention[0]) { await toReact("❌"); return m.reply(`*🤔No user found*`);
  //       }
		// await toReact("🎊");
		// await vorterx.groupParticipantsUpdate(m.from, [mention[0]], "remove")
		// await vorterx.sendMessage(m.from,{text:`*🎊User has been removed by ${pushName}*`},{quoted:m})
		async (message, match) => {
		const participants = await message.groupMetadata(message.jid)
		const isImAdmin = await isAdmin(participants, message.client.user.jid)
		if (!isImAdmin) return await message.send(`_I'm not admin._`)
		let user = message.mention[0] || message.reply_message.jid
		if (!user && match != 'all') return await message.send(`_Give me a user_`)
		const isUserAdmin = match != 'all' && (await isAdmin(participants, user))
		if (isUserAdmin) return await message.send(`_User is admin._`)
		if (match == 'all') {
			user = participants
				.filter((member) => !member.admin == true)
				.map(({ id }) => id)
			await message.send(
				`_kicking everyone(${user.length})_\n*Restart bot if u wanna stop.*`
			)
		}
		return await message.Kick(user)
	}
	},
};
