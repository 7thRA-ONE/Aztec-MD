const path = require("path");
const axios =  require("axios");

module.exports = {
  name: "fact",
  description: "To tell facts but as a game",
  category: "Games",
  start: async(vorterx, m, { prefix, pushName, toReact }) => {

  await toReact("🙂");
    const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return m.reply(`*Fact:* ${data.fact}\n\n*Powered by Secktor*`)   
    }

)
