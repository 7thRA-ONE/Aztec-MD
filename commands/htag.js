/*const mention = await mentionByTag
		if(!mention[0]) { await toReact("❌"); return m.reply(`*🤔No user found*`);
        }
		await toReact("🎊");
		await vorterx.groupParticipantsUpdate(m.from, [mention[0]], "remove")
		await vorterx.sendMessage(m.from,{text:`*🎊User has been removed by ${m.sender.pushname}*`},{quoted:m})
	},

                              }module.exports = {
  name: "hidetag",
  alias: ["h"],
  description: "Hide tag all members",
  category: "Group",
  start: async (vorterx, m, { text, prefix, toReact, isBotAdmin, isAdmin, isMedia, participants }) => {
    // if (!isAdmin) {
    //   await toReact("❌");
    //   return m.reply(`*You* must be *Admin* in order to use this Command!`);
    // }
    let message2;
    if (!isMedia) {
      message2 = m.quoted
        ? m.quoted.msg
        : text
        ? text.trim()
        : "『 *Attention Everybody* 』";
    } else {
      message2 =
        "『 *Attention Everybody* 』\n\n*🎀 Message:* Check this out!";
    }

    await toReact("🎌");
    vorterx.sendMessage(
      m.from,
      { text: message2, mentions: participants.map((a) => a.id) },
      { quoted: m }
    );
  },
};*/
