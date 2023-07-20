module.exports = {
    name: "fullpp",
    description: "set full profile picture",
    category: "User",
start: async(vorterx, m, { toReact }) => {
		if (!quoted)
			return await m.reply('*Reply to a image.*')
		await vorterx.updateProfilePicture(
			await vorterx.reply_message.downloadMediaMessage(),
			vorterx.client.user.jid
		)
		return await m.reply('_Profile Picture Updated_')
	}

}
