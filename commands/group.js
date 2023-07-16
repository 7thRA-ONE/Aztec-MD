require("../config");
module.exports = {
    name: "kick",
    alias: ["remove"],
    description: "remove Member from group",
    category: "Group",
    start: async (vorterx, m, { text, prefix, toReact, isBotAdmin, isAdmin, mentionByTag, pushName }) => {
        if (!isAdmin) {
            await toReact("⭕"); return m.reply(`*🔌This command is for admin only*`);
        }
        if (!isBotAdmin) {
            await toReact("😭"); return m.reply(`*🔌I need to be an admin in order to use this command*`);
        }
        const mention = await mentionByTag
        if (!mention[0]) {
            await toReact("❌"); return m.reply(`*🤔No user found*`);
        }
        await toReact("🎊");
        await vorterx.groupParticipantsUpdate(m.from, [mention[0]], "remove")
        await vorterx.sendMessage(m.from, { text: `*🎊User has been removed by ${pushName}*` }, { quoted: m })
    },
}

//--------------------------------------------------------------------------

//--------------------------------------------------------------------------

module.exports = {
    name: "tagall",
    alias: ["taga"],
    description: "tag members",
    category: "Group",
    start: async (vorterx, m, { text, prefix, toReact, isBotAdmin, isAdmin }) => {
        if (!isAdmin) {
            await toReact("⭕");
            return m.reply(`*🔌This is admin only command*`);
        }
        if (!isBotAdmin) {
            await toReact("😭");
            return m.reply(`*🔌I need to be an admin in order to use this command*`);
        }
        if (!isMedia) {
            var message2 = m.quoted
                ? m.quoted.msg
                : args[0]
                    ? args.join(" ")
                    : "No message";
        } else {
            message2 = "Check this Out !";
        }

        let mess = `            『 *Attention Everybody* 』
    
*⚜️ Tagged by:* @${m.sender.split("@")[0]}
            
*🧩 Message:* ${message2};
│\n`;
        for (let mem of participants) {
            mess += `┟ @${mem.id.split("@")[0]}\n`;
        }
        mess += `╰────────────⊰\n\n                    *Thank You*\n`;

        await toReact("〽️");
        vorterx.sendMessage(
            m.from,
            { text: mess, mentions: participants.map((a) => a.id) },
            { quoted: m }
        );
    },
}
