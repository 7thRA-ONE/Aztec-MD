const ChatGpT = require("../config");

module.exports = {
  name: "gpt",
  alias:["ai"],
  description: "To search anonymous act",
  category: "Search",
  start: async(vorterx, m, {prefix, toReact, pushName }) => {

  if(!process.env.ChatGpT) { await toReact("⛔"); return m.reply("⛔Error no gpt api has been excuted yet");
                           }
    await toReact("🤖");
    if(!process.env.ChatGpT) return
    const api = new ChatGpT({
      apiKey: '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'
    })
  
    const res = await api.sendMessage(match)

  
  
 return await vorterx.sendMessage(m.from, {text: res.text}));


    }
};
