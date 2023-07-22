const axios = require("axios");

module.exports = {
  name: "chat",
  description: "Chat with Ai",
  category: "user",
  start: async(vorterx, m, { prefix, toReact, text, pushName }) => {
    await toReact("🤖");

  let {data} = await axios.get(`http://api.brainshop.ai/get?bid=175685&key=Pg8Wu8mrDQjfr0uv&uid=[${m.sender.split("@")[0]}]&msg=[${text}]`);
            return m.reply(data.cnt);  
   }
};
