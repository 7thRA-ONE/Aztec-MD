const { Insta } = require("../lib");

module.exports = {
  name: "insta",
  alias: ["ig"],
  description: "To download Instagramer videos",
  category: "Download",
  start: async(vorterx, m, {prefix, pushName, toReact, isCreator, text }) => {   
        const { Insta } = require('../lib')
if(text) { await toReact("⛔"); return m.reply("*🔌Need an Instagram Url*");
         }
    await toReact("📹");
let response = await Insta(text)
for (let i=0;i<response.length;i++) {
await vorterx.sendFileUrl(m.from, response[i], `*Downloaded Media from instagram.*`, vorterx)
});
    }};
