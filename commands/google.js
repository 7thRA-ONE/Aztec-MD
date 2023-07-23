const google = require('google-it');

module.exports = {
   name: "google",
   description: "Search random stuff",
   category: "Search",
   start: async(vorterx,m,{prefix,toReact, text}) => {


google({'query': text}).then(res => {
let aztec = `*乂 GOOGLE SEARCH TERM* : ${text}\n\n`
for (let g of res) {
aztec += `⭔ *Title* : ${g.title}\n`
aztec += `⭔ *Description* : ${g.snippet}\n`
aztec += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(aztec)
     } 
                             }
};
