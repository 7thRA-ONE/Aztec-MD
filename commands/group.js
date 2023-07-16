require ("../config");
module.exports = {
	name: "kick",
	alias: ["remove"],
	description: "remove Member from group",
	category: "Group",
	start: async(vorterx, m, { text, prefix, toReact, isBotAdmin, isAdmin, mentionByTag, pushName}) => {
		if(!isAdmin) { await toReact("⭕"); return m.reply(`*🔌This command is for admin only*`);
        }
		if(!isBotAdmin) { await toReact("😭"); return m.reply(`*🔌I need to be an admin in order to use this command*`);
        }
		const mention = await mentionByTag
		if(!mention[0]) { await toReact("❌"); return m.reply(`*🤔No user found*`);
        }
		await toReact("🎊");
		await vorterx.groupParticipantsUpdate(m.from, [mention[0]], "remove")
		await vorterx.sendMessage(m.from,{text:`*🎊User has been removed by ${pushName}*`},{quoted:m})
	},
}

module.exports = {
	name: "group",
	description: "To close the group",
	category: "Group",
	 start: async(vorterx, m, { text, prefix, isBotAdmin,isAdmin,args, pushName}) => {
            if(!isAdmin) { await toReact("🔇"); return m.reply("*🔇This command can only be used by Admin*");
		 }
            if(!isBotAdmin) { await toReact("🔇"); return m.reply("*😥I need to be admin inorder to use this command*");
			 }
    
             if (args[0] === 'open'){
		     await toReact("🕳️");
                await vorterx.groupSettingUpdate(m.from, 'not_announcement').then((res) => m.reply(`*🔇Group Has Been Opened By ${pushName}*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){ await toReact("💣");
                await vortex.groupSettingUpdate(m.from, 'announcement').then((res) => m.reply(`*🔇Group Has been Closed By ${pushName}*`)).catch((err) => m.reply(jsonformat(err))),{quoted:m})
			
		}} };
