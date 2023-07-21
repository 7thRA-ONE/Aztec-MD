const { ar } = require("../lib/vorterx/vorterx.js");

module.exports = {
  name: "join",
  description: "To join the invite link gc",
  category: "Group",
  start: async(vorterx, m, { prefix, toReact, isUrl, isAdmin, isCreator, isBotAdmin }) => {

 if (!isUrl(ar) && !ar.includes('whatsapp.com')) return m.reply("*📢Please provide the group link📢");
                m.reply("*processing your request*");
    await toReact("💠");
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await vorterx.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) =>m.reply(`Invalid group link`));
            }
};
