module.exports = {
  name: "bokeh",
  description: "Textpro bokeh",
  category: "Textpro",
  start: async(vorterx,m,{ prefix, toReact,text }) => {

    if(!text) { await toReact("⛔"); return m.reply("*Provide me a query ex bokeh aztec*");
              }
    const maker = require('mumaker');
    const config = require("../config");
    await toReact("💘");
    maker.textpro("https://textpro.me/bokeh-text-effect-876.html",[
      `${text}`,]).then((data) =>
                  vorterx.sendMessage(m.from, { image: {url: data}, caption: `Cʀᴇᴀᴛᴇᴅ Bʏ: ${process.env.BOTNAME}`}, { quoted: m}));
  }
};
