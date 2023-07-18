module.exports = {
  name: "htag",
  description: "Hide tag to all members",
  category: "Group",
  start: async (vorterx, m, { text, prefix, toReact, isBotAdmin, isAdmin, isMedia, participants }) => {
    
    let message2;
    if (!isMedia) {
      message2 = m.quoted
        ? m.quoted.msg
        : text
        ? text.trim()
        : "乂 *L I S T E N - E V E R Y O N E* 乂";
    } else {
      message2 =
        " 乂 * L I S T E N - E V E R Y O N E* 乂\n\n*◦Note:* Take a look";
    }

    await toReact("🛸");
    vorterx.sendMessage(
      m.from,
      { text: message2, mentions: participants.map((a) => a.id) },
      { quoted: m }
    );
  },
};
