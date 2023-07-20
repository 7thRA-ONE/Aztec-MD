module.exports = {
    name: "fullpp",
    description: "set full profile picture",
    category: "User",
start: async(vorterx, m, { toReact }) => {
		if (!vorterx.reply_message || !vorterx.reply_message.image)
			return await vorterx.sendMessage('*Reply to a image.*')
		await vorterx.updateProfilePicture(
			await vorterx.reply_message.downloadMediaMessage(),
			vorterx.client.user.jid
		)
		return await vorterx.sendMessage('_Profile Picture Updated_')
	}

}
