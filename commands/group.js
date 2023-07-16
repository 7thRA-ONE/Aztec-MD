const config = require("../config");

module.exports = {
  module.exports = {
 name: "kick",
 alias: ["remove"],
 description: "remove Member from group",
 category: "Group",
 start: async(vorterx, m, { text, prefix, toReact, isBotAdmin, isAdmin, mentionByTag}) => {
  if(!isAdmin) { await toReact("⭕"); return m.reply(`*🔌This is admin only command*`);
        }
  if(!isBotAdmin) { await toReact("😭"); return m.reply(`*🔌I need to be an admin in order to use this command*`);
        }
  const mention = await mentionByTag
  if(!mention[0]) { await toReact("❌"); return m.reply(`*🤔No user found*`);
        }
  await toReact("🎊");
  await vorterx.groupParticipantsUpdate(m.from, [mention[0]], "remove")
  await vorterx.sendMessage(m.from,{text:`*🎊User has been removed by ${m.sender.pushname}*`},{quoted:m})
 },
}

module.exports = {
  name: "group",
  description: "To close/open the group", 
  category: "Group",
  start: async (vorterx, m, { text, prefix, isBotAdmin, isAdmin, args, pushName, toReact }) => {
    if (!isAdmin) {
      await toReact("🔇");
      return m.reply(`*🔇 This command can only be used by Admin*`);
    }
    
    if (!isBotAdmin) {
      await toReact("🔇");
      return m.reply(`*😥 I need to be admin in order to use this command*`);
    }

    if (args[0] === "open") {
      await toReact("🕳️");
      try {
        await vorterx.groupSettingUpdate(m.from, "not_announcement");
        await m.reply(`*🔇 Group has been opened by ${pushName}*`);  
      } catch (err) {
        console.error(err);
        await m.reply(`Failed to open group: ${err}`);
      }
    } else if (args[0] === "close") {
      await toReact("💣");
      try {
        await vorterx.groupSettingUpdate(m.from, "announcement");
        await m.reply(`*🔇 Group has been closed by ${pushName}*`);
      } catch (err) {
        console.error(err);
        await m.reply(`Failed to close group: ${err}`);
      }
    }
  }
};

module.exports = {
  name: "tagall",
  alias: ["taga"],
  description: "Tag all members",
  category: "Group",
  start: async (vorterx, m, { text, prefix, toReact, isBotAdmin, isAdmin, isMedia, participants }) => {
    if (!isAdmin) {
      await toReact("⭕");
      return m.reply(`*🔌 This is admin only command*`);
    }
    
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

  //---------------[GROUP LEAVE]---

module.exports = {
  name: "leave",
  description: "To leave the gc",
  category: "group",
  start: async(vorterx, m, { prefix, toReact }) => {    

    if(isAdmin) { await toReact("🚫"); return m.reply("*😐This cmd was prommamed for owner only*");
    }
    await toReact("👋");
    await vorterx.groupLeave(m.from)}};
