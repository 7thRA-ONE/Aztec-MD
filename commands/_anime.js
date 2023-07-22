module.exports = { 
  name: "anime",
  description: "Randomly anime background",
  category: "Anime",
  start:async(vorterx,m,{prefix,toReact,pushName,text}) => {

  if (!text) { await toReact("⭕"); return m.reply(`*Give anime name you want to search*`);
             }
const malScraper = require('mal-scraper');
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) { await toReact("⭕"); return m.reply(`*Sorry couldnt find the Anime server error*`);
                    }
    await toReact("🔥");
let animetxt = `
🎀 Title: ${tiny(anime.title)}
🌲 Type: ${tiny(anime.type)}
🎐 Premiered on: ${tiny(anime.premiered)}
💠 Total Episodes: ${tiny(anime.episodes)}
📈 Status: ${tiny(anime.status)}
💮 Genres: ${tiny(anime.genres)}
📍 Studio: ${tiny(anime.studios)}
🌟 Score: ${tiny(anime.score)}
♻️ Rating: ${tiny(anime.rating)}
🏅 Rank: ${tiny(anime.ranked)}
💫 Popularity: ${tiny(anime.popularity)}
♦️ Trailer: ${tiny(anime.trailer)}
🌵Description: ${tiny(anime.synopsis)}\n\n\n*©vorterx-team*`,
                await vorterx.sendMessage(m.from,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                }
};
