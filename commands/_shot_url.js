module.exports = {
  name: "linkpoi",
  description: "To shorten the long link",
  category: "Extra",
  start: async(vorterx,m,{prefix, command, toReact,text,args}) => {

 const { fetchJson } = require("../lib/module/function.js");
  if(!text) { await toReact("🛑"); return m.reply("*Provide me with a link to convert");
            }
    await toReact("👍");
  let aztec = await fetchJson(`https://linkpoi.ga/api.php?url=${text}`)
                vorterx.sendMessage(m.from, { text: aztec.shorturl + `\nby aztec`}, { quoted: m });
  }
            };
