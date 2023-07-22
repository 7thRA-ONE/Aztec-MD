module.exports = {
  name: "genshin",
  description: "Anime lovers",
  category: "Anime",
  start: async(vorterx,m, { prfix, toReact, pushName, text}) => {

const genshin = require("genshin-api");
a = text.toLowerCase();
    await toReact("🔥");
const anime = await genshin.Characters(text)
let txt = " *乂 A N  I M E - G E N S H I N*\n\n"
txt += `🎀 *Name:* ${anime.name}\n`
txt += `🌲 *Title:* ${anime.title}\n`
txt += `💠 *Vision:* ${anime.vision}\n`
txt += `🏹 *Weapon:* ${anime.weapon}\n`
txt += `💮 *Gender:* ${anime.gender}\n`
txt += `🌏 *Nation:* ${anime.nation}\n`
txt += `💘 *Affiliation:* ${anime.affiliation}\n`
txt += `🌟 *Rarity:* ${anime.rarity}\n`
txt += `❄️ *Constellation:* ${anime.constellation}\n`
txt += `📖 *Description:* ${anime.description}\n`
urll = `https://api.genshin.dev/characters/${a}/portrait`
await vorterx.sendMessage(m.from,{image:{url:urll}, caption:txt},{quoted:m});
} catch (err) {
console.log(err)
return m.reply('Error');
}
  };
   

