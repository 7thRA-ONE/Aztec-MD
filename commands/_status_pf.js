module.exports = {
name: "status",
description: "Status",
category: "Owner",
  start: async(vorterx,m,{prefix,isCreator,toReact,text}) => {
if (!isCreator) { await toReact("⛔"); return vorterx.sendMessage(m.from, {text: '*This command is only for my owner*'}, {quoted: m});
                }
  
if (!text) { await toReact("⛔"); return m.reply("*Provide me with a text ex aztec md*");
           }
  await toReact("📍");
    await vorterx.updateProfileStatus(text)
    m.reply(`*📍Bio of the bot has been successfully changed*`);
    }
};
