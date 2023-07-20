module.exports = {
    name: "fullpp",
    description: "set full profile picture",
    category: "user",
start: async(vorterx, m, { quoted,toReact }) => {
			if (!/image/.test(mime)) {
				return await toReact("🔖"); m.reply('_Reply to a image._');
			}else{
	const media = await vorterx.reply_message
	await vorterx.updateProfilePicture(m.user_id, media)
	await toReact("👜"); m.reply('_Successfully Profile Picture Updated_');
	}
}
};
