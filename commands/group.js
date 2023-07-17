module.exports = {
    name: "tagall",
    alias: ["taga"],
    description: "Tag all members",
    category: "Group",
    start: async (vorterx, m, { text, prefix, toReact, isBotAdmin, isAdmin, isMedia, participants }) => {
        // if (!isAdmin) {
        //     await toReact("⭕");
        //     return m.reply(`*🔌 This is admin only command*`);
        // }

        if (!isBotAdmin) {
            await toReact("😭");
            return m.reply(`*🔌 I need to be an admin in order to use this command*`);
        }

        let message2 = isMedia ? "Check this out!" : m.quoted ? m.quoted.msg : text || "No message";

        let mess = `『 *Attention Everybody* 』\n\n*⚜️ Tagged by:* @${m.sender.split("@")[0]}\n\n*🧩 Message:* ${message2}\n`;

        for (let mem of participants) {
            mess += `┟ @${mem.id.split("@")[0]}\n`;
        }

        mess += `╰────────────⊰\n\n                    *Thank You*\n`;

        try {
            await toReact("〽️");
            await vorterx.sendMessage(m.from, {
                text: mess,
                mentions: participants.map(a => a.id)
            }, {
                quoted: m
            });
        } catch (err) {
            console.error(err);
            await m.reply(`Failed to tag all members: ${err}`);
        }
    },
};
