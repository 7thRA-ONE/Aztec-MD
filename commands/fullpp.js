module.exports = {
    name: "fullpp",
    description: "set full profile picture",
    category: "user",
start: async(vorterx, m, { quoted,toReact }) => {
		if (!quoted)
			if (!m.reply_message || !m.reply_message.image)
				return await toReact("🔖"); m.reply('_Reply to a image._');
	const media = await vorterx.reply_message
	await vorterx.updateProfilePicture(message.user_id, media)
	await toReact("👜"); m.reply('_Successfully Profile Picture Updated_');
	}
}
