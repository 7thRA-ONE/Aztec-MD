const axios = require("axios");

module.exports = {
  name: "neko",
  description: "Ambitious ki rider waves",
  category: "Anime",
  start: async(vorterx, m, { prefix, toReact }) => {

  await toReact("💘")
    let vorterxi = await axios.get('https://api.waifu.pics/sfw/neko');
        vorterx.sendMessage(m.from, {image:{url:vorterxi.data.url}, caption: `«Gᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴠᴏʀᴛᴇʀx`}, {
            quoted: m
        })
  }
};
