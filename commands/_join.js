require("../lib/vorterx/vorterx.js");
module.exports = {
    name: "join",
    description: "join the group",
    category: "Owner",
    start: async(vorterx, m,{pushName,iscreator,text,args,isGroup,isAdmin}) => {
        if(!iscreator) return vorterx.sendMessage(m.from,{text:'*This command is for my ownr only*'},{quoted:m})

const {isUrl}=require("../lib/module/function.js");
if (!text) return m.reply("🔍 Please provide the group link");
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply("*Please provide the group link*");
let result = args[0].split('https://chat.whatsapp.com/')[1]
await vorterx.groupAcceptInvite(result)
  m.reply(`*successfully joined the group*`).catch((e)=>{
  m.reply('Unknown Error Occured');
})
    }
};
