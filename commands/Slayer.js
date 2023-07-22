const axios = require("axios");
const { fetchJson } = require("../lib/module/function.js");

module.exports = {
  name: "da",
  description: "random demon slayer video",
  category: "Anime",
  start: async(vorterx, m, { prefix, toReact}) => {

      await toReact("🫀");
  let loki = await axios.get("https://gist.github.com/lokixjs/3e582b8cbb5068f5294fe14d26528940/raw");
        let url =  loki.data.result[Math.floor(Math.random() * loki.data.result.length)];
        return await vorterx.sendMessage(m.from,{video :{url : url } , caption: "𝐃𝐞𝐦𝐨𝐧 𝐒𝐥𝐚𝐲𝐞𝐫" }, { quoted: m })
   }
};

