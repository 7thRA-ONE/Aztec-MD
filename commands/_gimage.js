const axios = require("axios");

module.exports = {
  name: "gimage",
  description: "Google images",
  category: "Download",
  start: async(vorterx, m, { prefix, toReact }) => {

    if(!text) { await toReact("⭕"); return m.reply("*Give me image name mate*");
              }
        let vorterxi = await axios.get(`https://api.akuari.my.id/search/googleimage?query=${text}`);

        n = vorterxi.result

        images = n[Math.floor(Math.random() * n.length)]


        vorterx.sendMessage(m.from, { image: { url: images}, caption: `*-------「 GIMAGE SEARCH 」-------*\n*🌲Query* : ${text}\n*🌲Media* : ${images}`}, { quoted: m })
        }
};
