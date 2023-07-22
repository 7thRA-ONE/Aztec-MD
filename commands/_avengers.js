module.exports = {
  name: "avengers",
  description: "Textpro avengers",
  category: "Textpro",
  start: async(vorterx,m,{ prefix, toReact,text }) => {

    if(!text) { await toReact("⛔"); return m.reply("*Provide me a query ex avengers aztec*");
              }
    const maker = require('mumaker');
    const config = require("../config");
    await toReact("💘");
    maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",[
      `${text}`,]).then((data) =>
                  vorterx.sendMessage(m.from, { image: {url: data}, caption: `Cʀᴇᴀᴛᴇᴅ Bʏ: ${process.env.BOTNAME}`}, { quoted: m}));
  }
};
