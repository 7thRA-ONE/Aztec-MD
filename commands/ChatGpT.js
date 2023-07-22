module.exports = {
  name: "gpt",
  alias: ["ai"],
  description: "Gpt",
  category: "User",
  start: async(vorterx,m, {prefix,toReact,text}) => {
    
var fetch = require('node-fetch');
    await toReact("🤖");
  var apii = await fetch(`https://api.botcahx.live/api/search/openai-chat?text=${text}&apikey=${btc}`)
  var res = await apii.json()
  await m.reply(res.m);
  }
};

