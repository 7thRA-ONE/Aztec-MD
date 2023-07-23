module.exports = {
name: "status",
description: "Status",
category: "Owner",
  start: async(vorterx,m,{prefix,toReact,text}) => {

  if (!isCreator) { await toReact("👩‍🚀"); return m.reply("*Sorry but this cmd is for my owner*");
  }
if (!text) { await toReact("⛔"); return m.reply("*Provide me with a text ex aztec md*");
           }
  await toReact("📍");
    await vorterx.updateProfileStatus(text)
    m.reply(`*📍Bio of the bot has been successfully changed*`);
    }
};
