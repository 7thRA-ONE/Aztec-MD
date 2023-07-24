module.exports = {
name: "status",
description: "Status",
category: "Owner",
  start: async(vorterx,m,{prefix,iscreator,toReact,text}) => {
if (!iscreator) { await toReact("⛔"); return vorterx.sendMessage(m.from, {text: '*This command is only for my owner*'}, {quoted: m});
                }
  await toReact("📍");
    await vorterx.updateProfileStatus(text)
    m.reply(`*📍Bio of the bot has been successfully changed*`);
    }
};
