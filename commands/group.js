async function kick(vorterx, m, { text, prefix, isBotAdmin, isAdmin, mentionByTag }) {
  if (!isAdmin) {
    await toReact("⭕");
    return m.reply(`*🔌This command is for admin only*`);
  }
  if (!isBotAdmin) {
    await toReact("😭");
    return m.reply(`*🔌I need to be an admin in order to use this command*`);
  }
  const mention = await mentionByTag();
  if (!mention[0]) {
    await toReact("❌");
    return m.reply(`*🤔No user found*`);
  }
  await toReact("🎊");
  await vorterx.groupParticipantsUpdate(m.from, [mention[0]], "remove");
  await vorterx.sendMessage(m.from, { text: `*🎊User has been removed by ${pushName}*` }, { quoted: m });
}

async function group(vorterx, m, { text, prefix, isBotAdmin, isAdmin, args }) {
  if (!isAdmin) {
    await toReact("🔇");
    return m.reply("*🔇This command can only be used by Admin*");
  }
  if (!isBotAdmin) {
    await toReact("🔇");
    return m.reply("*😥I need to be admin inorder to use this command*");
  }

  if (args[0] === "open") {
    await toReact("🕳️");
    await vorterx.groupSettingUpdate(m.from, "not_announcement")
      .then((res) => m.reply(`*🔇Group Has Been Opened By ${pushName}*`))
      .catch((err) => m.reply(jsonformat(err)), { quoted: m });
  } else if (args[0] === "close") {
    await toReact("💣");
    await vorterx.groupSettingUpdate(m.from, "announcement")
      .then((res) => m.reply(`*🔇Group Has been Closed By ${pushName}*`))
      .catch((err) => m.reply(jsonformat(err)), { quoted: m });
  }
}

async function tagall(vorterx, m, { text, prefix, isBotAdmin, isAdmin }) {
  if (!isAdmin) {
    await toReact("⭕");
    return m.reply(`*🔌This is admin only command*`);
  }
  if (!isBotAdmin) {
    await toReact("😭");
    return m.reply(`*🔌I need to be an admin in order to use this command*`);
  }
  const participants = await vorterx.groupMetadata(m.chat).participants;
  if (!participants) {
    await toReact("❌");
    return m.reply(`*🤔No user found*`);
  }
  if (!isMedia) {
    var message2 = m.quoted ? m.quoted.msg : text || "No message";
  } else {
    message2 = "Check this Out!";
  }

  let mess = `『 *Attention Everybody* 』

*⚜️ Tagged by:* @${m.sender.split("@")[0]}

*🧩 Message:* ${message2}
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
}

async function unmute(vorterx, m, { toReact, isAdmin, isBotAdmin, isGroup, pushName }) {
name:"unmute",
alias: ["un"],
description: "To Open the group",
category: "Group",

if(isGroup) { 
await toReact("❌"); return m.reply("*👋 Sorry this command is for groups only*");
}
await toReact("🔉");
  m.reply(`*🔉Group has been opened by ${pushName}*`);
return await vorterx.groupSettingUpdate(m.from, "not_announcement");
  };

async function mute(vorterx, m, { toReact, isAdmin, isBotAdmin, isGroup, pushName }) {
name:"mute",
description: "To close the group",
category: "Group",

if(isGroup) { 
await toReact("❌"); return m.reply("*👋 Sorry this command is for groups only*");
}
await toReact("🔉");
    m.reply(`*🔉Group has been closed by ${pushName}*`);
return await vorterx.groupSettingUpdate(m.from, "announcement");
  };

module.exports = {
  kick,
  group,
  tagall,
  unmute,
  mute
};
