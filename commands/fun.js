const path = require("path");
const axios =  require("axios");

module.exports = {
  name: "fact",
  description: "To tell facts but as a game",
  category: "Games",
  start: async(vorterx, m, { prefix, pushName, toReact }) => {

  await toReact("🙂");
    const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return m.reply(`*乂 F A C T- G A M E R\n\n**❤️Note*: ${data.fact}\n\n\n*©AZTEC-MD*`)   
    }

};
