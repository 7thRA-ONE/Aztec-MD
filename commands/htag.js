module.exports = {
  name: "htag",
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
};
