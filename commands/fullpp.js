module.exports = {
    name: "fullpp",
    description: "set full profile picture",
    category: "user",
start: async(vorterx, m, { quoted,toReact }) => {
		if (!quoted)
			if (!message.reply_message || !message.reply_message.image)
				return await m.reply('_Reply to a image._')
	const media = await vorterx.reply_message.downloadAndSaveMedia()
	await vorterx.updateProfilePicture(message.user_id, media)
	await m.reply('_Successfully Profile Picture Updated_')
	}
}
