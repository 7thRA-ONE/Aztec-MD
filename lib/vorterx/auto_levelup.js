const Config = require("../../config.js");
const axios = require("axios");
//This is an auto_level_msg_
//Krpyton bot
//aztec wa bot
//recoded by @diegoson

const ranks = [
    '🌸 Citizen',
    '🔎 Cleric',
    '🔮 Wizard',
    '♦️ Mage',
    '🎯 Noble',
    '🎯 Noble II',
    '✨ Elite',
    '✨ Elite II',
    '✨ Elite III',
    '🔶️ Ace',
    '🔶️ Ace II',
    '🔶️ Ace III',
    '🔶️ Ace IV',
    '☣ Knight',
    '☣ Knight II',
    '☣ Knight III',
    '☣ Knight IV',
    '☣ Knight V',
    '🌀 Hero',
    '🌀 Hero II',
    '🌀 Hero III',
    '🌀 Hero IV',
    '🌀 Hero V',
    '💎 Supreme',
    '💎 Supreme II',
    '💎 Supreme III',
    '💎 Supreme IV',
    '💎 Supreme V',
    '❄️ Mystic',
    '❄️ Mystic II',
    '❄️ Mystic III',
    '❄️ Mystic IV',
    '❄️ Mystic V',
    '🔆 Legendary',
    '🔆 Legendary II',
    '🔆 Legendary III',
    '🔆 Legendary IV',
    '🔆 Legendary V',
    '🛡 Guardian',
    '🛡 Guardian II',
    '🛡 Guardian III',
    '🛡 Guardian IV',
    '🛡 Guardian V',
    '♨ Aztec'
    '■ Son Goku',
    '■ Prince Vegeta',
    '■ Lord Berrus',
    '■ Super Saiyan blue',
    '■ Ultra Instinct',
]

/**
 * @param {number} level
 * @returns {{requiredXpToLevelUp: number, rank: string}}
 */

const getStats = (level) => {
    let required = 100
    for (let i = 1; i <= level; i++) required += 5 * (i * 50) + 100 * i * (i * (i + 1)) + 300
    const rank = level > ranks.length ? ranks[ranks.length - 1] : ranks[level - 1]
    return {
        requiredXpToLevelUp: required,
        rank
    }
}
const level = (await vorterx.DB.get(`${sender}_LEVEL`)) || 0
    const experience = await vorter.exp.get(sender)
    const { requiredXpToLevelUp } = getStats(level)
    if (requiredXpToLevelUp > experience) return null
    await vorterx.DB.add(`${sender}_LEVEL`, 1)
if (Config.levelupmessage !== 'false') {
    vorterx.sendMessage(m.
        from,
        {
            video: {
                url: 'https://media.tenor.com/msfmevhmlDAAAAPo/anime-chibi.mp4'
            },
            caption: `
            *┌───⭓『
               *You just got leveled up*\n\n
               *❲❒❳ Name* : ${pushName}\n
               *❲❒❳ Level* : ${level}\n
               *❲❒❳ Triple* : ${level + 1}
               *❲❒❳ Role* : ${ranks}\n\n
               *What an Angle of Super Saiyan*`,
            gifPlayback: true
        }, { quoted: m });
};

