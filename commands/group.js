require("../config");

module.exports = {
  name: "kick",
  alias: ["remove"],
  description: "remove Member from group",
  category: "Group",
  start: async (vorterx, m, { text, prefix, toReact, isBotAdmin, isAdmin, mentionByTag }) => {
    if (!isAdmin) {
      await toReact("⭕");
      return m.reply(`*🔌This is admin only command*`);
    }
    if (!isBotAdmin) {
      await toReact("😭");
      return m.reply(`*🔌I need to be an admin in order to use this command*`);
    }
    const mention = await mentionByTag;
    if (!isAdmin) {
      await toReact("⭕");
      return m.reply(`*🔌This is admin only command*`);
    }
    const users = mention.length > 0 ? mention.map((m) => m.id) : [m.sender];
    if (!users) {
      await toReact("❌");
      return m.reply(`*🤔No user ld found*`);
    }
    await toReact("🎊");
    await vorterx.groupParticipantsUpdate(m.from, users, "remove");
    const pushName = m.sender.pushname || "Unknown";
    await vorterx.sendMessage(m.from, { text: `*🎊User has been removed by ${pushName}*` }, { quoted: m });
  },
};
