const config = require("../config");

module.exports = {
    name: "kick",
    alias: ["remove"],
    description: "remove Member from group",
    category: "Group",
    start: async(vorterx, m, { 
        toReact,
        isBotAdmin, 
        isAdmin, 
        mentionByTag,
        pushName
    }) => {
        try {
            if (!isAdmin) { 
                await toReact("⭕️"); 
                return m.reply("*🔌 This command is for admin only*");
            }
    
            if (!isBotAdmin) { 
                await toReact("😭"); 
                return m.reply("*🔌I need to be an admin in order to use this command*");
            }
    
            const users = (await mentionByTag)[0] || m.msg.contextInfo.participant;
            
            if (!users) { 
                await toReact("❌"); 
                return m.reply("*🤔No user ld found*");
            }
    
            await toReact("🎊");
            await vorterx.groupParticipantsUpdate(m.from, [users], "remove");
            await vorterx.sendMessage(m.from,{
                text: `*🎊User has been removed by ${pushName}*`}, {
                quoted: m
            });
        } catch (e) {
            console.log(e);
        }
    }
}
