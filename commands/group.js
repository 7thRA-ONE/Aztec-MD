module.exports = {
    name: "tagall",
    description: "tag members",
    category: "Group",
    start: async (vorterx, m, { text, prefix, toReact, isBotAdmin, isAdmin, isMedia, participants }) => {
        //if (!isAdmin) {
         //   await toReact("⭕");
           // return m.reply(`*🔌This command is for admin only*`);
      //  }
      //  if (!isBotAdmin) {
      //      await toReact("😭");
      //      return m.reply(`*🔌I need to be an admin in order to use this command*`);
      //  }
        if (!isMedia) {
            var message2 = m.quoted
                ? m.quoted.msg
                : text || "No message";
        } else {
            message2 = "Check this Out!";
        }

        let mess = `╭─❮❮| Tᴀɢɢɪɴɢ Aʟʟ |❯❯\n`;
        for (let mem of participants) {
            mess += `│ @${mem.id.split("@")[0]}\n`;
        }
        mess += `╰────────────⦿\n\n`;

        await toReact("💘");
        vorterx.sendMessage(
            m.from,
            { text: mess, mentions: participants.map((a) => a.id) },
            { quoted: m }
        );
    },
};
