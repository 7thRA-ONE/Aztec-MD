modul.exports = {
  name: "batman",
  description: "Textpro batman",
  category: "Textpro",
  start: async(vorterx,m,{ prefix, toReact,text }) => {

    if(!text) { await toReact("⛔"); return m.reply("*Provide me a query ex batman aztec*");
              }
    const axios = require("axios");
    const config = require("../config");
    await toReact("💘")
    maker.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html",[
      `${text}`,]).then((data) =>
                  vorterx.sendMessage(m.from, { image: {url: data}, Config.caption}, { quoted: m});
  }
};
