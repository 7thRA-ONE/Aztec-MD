const fs = require("fs");

module.exports = {
  name: "gpp",
  description: "To change the group profile",
  category: "Group",
  start: async (vorterx, m, { toReact, isAdmin, isBotAdmin, isGroup, pushName, prefix }) => {
    if (!isAdmin) {
      await toReact("❌");
      return m.reply(`*You* must be *Admin* in order to use this Command!`);
    }

    if (!isBotAdmin) {
      await toReact("❌");
      return m.reply(`*Bot* must be *Admin* in order to use this Command!`);
    }

    const mime = m.quotedMsg ? m.quotedMsg.mimetype : "";
    if (!/image/.test(mime)) {
      await toReact("❌");
      return vorterx.sendMessage(
        m.from,
        {
          text: `Send/reply Image With Caption ${prefix}gpp to change the Profile Pic of this group.`,
        },
        { quoted: m }
      );
    }

    await toReact("🎴");

    const quoted = m.quotedMsg ? m.quotedMsgObj : m;
    const quotedimage = await vorterx.downloadAndSaveMediaMessage(quoted);
    const { preview } = await generatePP(quotedimage);

    await vorterx.query({
      tag: "iq",
      attrs: {
        to: m.from,
        type: "set",
        xmlns: "w:profile:picture",
      },
      content: [
        {
          tag: "picture",
          attrs: { type: "image" },
          content: preview,
        },
      ],
    });

    fs.unlinkSync(quotedimage);

    const ppgc = await vorterx.getProfilePicture(m.from, "image");
    const messageSender = pushName || m.sender.name;

    await vorterx.sendMessage(
      m.from,
      {
        image: { url: ppgc.imgUrl },
        caption: `\nGroup Profile Picture has been updated Successfully by @${messageSender}!`,
        mentions: [{ tag: messageSender, id: ppgc.id }],
      },
      { quoted: m }
    );
  },
};
