const axios = require("axios");

module.exports = {
  name: "iguser",
  description: "To check user on Instagram",
  category: "Search",
  start: async(vorterx, m, {prefix, text, toReact, pushName }) => {
    
if (!text) { await toReact("❌"); return m.reply("*Please provide me a valid instagram ID*");
    }
let vorterxi = await axios.get(`https://api.popcat.xyz/instagram?user=${text}`);
            await toReact("🌲");
const reply = ` *乂 I N S T A G R A M E R- F I N D E R*\n\n
*🌲Username*: ${vorterxi.data.username}
*🌲Name*: ${vorterxi.data.full_name}
*🌲Mode*: ${vorterxi.data.private}
*🌲Followers*: ${vorterxi.data.followers}
*🌲Following*: ${vorterxi.data.following}
*🌲Reels*: ${vorterxi.data.reels}
*🌲Bio*: ${vorterxi.data.biography}\n\n\n*©vorterx-team*
              `
vorterx.sendMessage(m.from, {image: { url: vorterxi.data.profile_pic }, caption:reply}, {quoted:m});
   } 
};

