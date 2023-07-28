const { canLevelUp } = require('../lib/levelup.js')

export async function before(m, { vorterx }) {
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
               *❲❒❳ Triple* : ${user.level}
               *❲❒❳ Role* : ${user.role}\n\n
               *What an Angel of Super Saiyan*
	       ╰────────────⭓
	`.trim())
    }
};
