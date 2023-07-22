module.exports = {
  name: "forggy",
  description: "Textpro forggy",
  category: "Textpro",
  start: async(vorterx,m,{ prefix, toReact,text }) => {

    if(!text) { await toReact("⛔"); return m.reply("*Provide me a query ex forggy aztec*");
              }
    const maker = require('mumaker');
    const config = require("../config");
    await toReact("💘");
    maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html",[
      `${text}`,]).then((data) =>
                  vorterx.sendMessage(m.from, { image: {url: data}, caption: `Cʀᴇᴀᴛᴇᴅ Bʏ: ${process.env.BOTNAME}`}, { quoted: m}));
  }
};
