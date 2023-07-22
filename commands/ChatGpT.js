const { fetchJson } = require("../lib/module/function.js");
module.exports = {
  name: "gpt",
  alias: ["ai"],
  description: "Gpt",
  category: "User",
  start: async(vorterx,m, {prefix,toReact,text}) => {
    
var fetch = require('node-fetch');
    if!(text) return m.reply("*Give me a  query*");
    await toReact("🤖");
  var apii = await fetchJson(`https://api.botcahx.live/api/search/openai-chat?text=${text}&apikey=${btc}`)
  var res = await apii.json()
  await m.reply(res.m);
  }
};

