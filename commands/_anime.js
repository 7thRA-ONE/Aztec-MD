const { tiny } = require("@viper-x/fancytext");

module.exports = { 
  name: "anime",
  description: "Randomly anime background",
  category: "Anime",
  start: async(vorterx, m, { prefix, toReact, pushName, text}) => {

  if (!text) { await toReact("⭕"); return m.reply("*Give anime name you want to search*");
             } 
const malScraper = require('mal-scraper');
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) { await toReact("⭕"); return m.reply("*Sorry couldnt find the Anime server error*");
                    }
    await toReact("🔥");
let animetxt = `
🎀 Title: ${anime.title}
🌲 Type: ${anime.type}
🎐 Premiered on: ${anime.premiered}
💠 Total Episodes: ${anime.episodes}
📈 Status: ${anime.status}
💮 Genres: ${anime.genres}
📍 Studio: ${anime.studios}
🌟 Score: ${anime.score}
♻️ Rating: ${anime.rating}
🏅 Rank: ${anime.ranked}
💫 Popularity: ${anime.popularity}
♦️ Trailer: ${anime.trailer}
🌵 Description: ${anime.synopsis}\n\n\n*©vrterx-team*`
               await vorterx.sendMessage(m.from,{image:{url:anime.picture}, caption: tiny(animetxt)},{quoted:m});
                }
};
