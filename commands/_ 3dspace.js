module.exports = {
  name: "space3d",
  description: "Textpro space3d",
  category: "Textpro",
  start: async(vorterx,m,{ prefix, toReact,text }) => {

    if(!text) { await toReact("⛔"); return m.reply("*Provide me a query ex space3d aztec*");
              }
    const maker = require('mumaker');
    const config = require("../config");
    await toReact("💘");
    maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html",[
      `${text}`,]).then((data) =>
                  vorterx.sendMessage(m.from, { image: {url: data}, caption: `Cʀᴇᴀᴛᴇᴅ Bʏ: ${process.env.BOTNAME}`}, { quoted: m}));
  }
};
