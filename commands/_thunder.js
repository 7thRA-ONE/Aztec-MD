module.exports = {
  name: "thunder",
  description: "Textpro",
  category: "Textpro",
  start: async(vorterx,m,{ prefix, toReact,text }) => {

    if(!text) { await toReact("⛔"); return m.reply("*Provide me a query ex thunder aztec*");
              }
    const maker = require('mumaker');
    const config = require("../config");
    await toReact("💘");
maker.textpro("https://textpro.me/create-thunder-text-effect-online-881.html",[
      `${text}`,]).then((data) =>
                  vorterx.sendMessage(m.from, { image: {url: data}, caption: `Cʀᴇᴀᴛᴇᴅ Bʏ: ${process.env.BOTNAME}`}, { quoted: m}));
  }
};
