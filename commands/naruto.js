const axios = require("axios");

module.exports = {
  name: "naruto",
  description: "To see uzumakis status",
  category: "Anime",
  start: async(vorterx, m, { prefix, toReact, getJson}) => {

      await toReact("👲");
  let vorterxi = await axios.get("https://raw.githubusercontent.com/mask-sir/api.mask-ser/main/Naruto.json")
        let url =  vorterxi.data.result[Math.floor(Math.random() * vorterxi.data.result.length)];
        return await vorterx.sendMessage(m.from,{video :{url : url } , caption: "«Gᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴠᴏʀᴛᴇx" }, { quoted: m })
}
};
