const ChatGpT = require("../config");

module.exports = {
  name: "gpt",
  alias:["ai"],
  description: "To search anonymous act",
  category: "Search",
  start: async(vorterx, m, {prefix, toReact, text, getJson, pushName }) => {

    if(!process.env.ChatGpT) { await toReact("⛔"); return m.reply("⛔ Error no Chat gpt api has been executed yet");
  }
    if (!text) { await toReact("⛔"); return m.reply("*🤖need text example ai who is diegoson*");
               }
    await toReact("🤖");
let response  = await getJson(`https://api.botcahx.live/api/search/openai-chat?text=${process.env.ChatGpT}&apikey=${ChatGpT}`)

await m.reply(response.data);

  }
};

  /*if(!process.env.ChatGpT) { await toReact("⛔"); return m.reply("⛔Error no gpt api has been excuted yet");
                           }
    await toReact("🤖");
    if(!process.env.ChatGpT) return
    const api = new chatGPTAPI({
      apiKey: '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'
    })
  
    const res = await api.sendMessage(match)

  
  
 return await vorterx.sendMessage(m.from, {text: res.text});


    }
};*/
