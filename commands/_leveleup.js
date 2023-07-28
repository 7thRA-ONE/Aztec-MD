const { canLevelUp } = require('../lib/levelup.js');

await toReact("😯");
start: async(vorterx,m,{text,toReact,pushName,prefix}) => {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++
    user.role = global.rpg.role(user.level).name
    if (before !== user.level) {
        m.reply(`
       *┌───⭓『
               *You just got leveled up😯*\n\n
               *❲❒❳ Name* : ${pushName}\n
               *❲❒❳ Level* : ${before}\n
               *❲❒❳ Triple* : ${user.level}\n
               *❲❒❳ Role* : ${user.role}\n\n
               *What an Angel of Super Saiyan*
	       ╰────────────⭓
	`.trim())
    }
};
