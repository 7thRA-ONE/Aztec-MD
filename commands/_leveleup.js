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
╭────────────
│   *Congratulations* 
│      *Level Up🥳*
│
│ *📍Level* *${before}* ‣  *${user.level}*
│ *🐉Role*: *${user.role}*
│ *Have A Good Day🎯*
╰────────────
	`.trim())
    }
};
