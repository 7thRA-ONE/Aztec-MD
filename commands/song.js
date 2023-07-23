  module.exports = {
    name: "song",
    description: "To download songs",
    category: "Download",
    start: async(vorterx,m,{prefix,toReact,text}) => {
    
   const fs = require("fs");
      const { fetchBuffer } = require('../lib/module/function.js');
if (!text) { await toReact("⛔"); return m.reply("*Provide me a song name ex hope by xxx*");
}
const xeonplaymp3 = require('../lib/ytdl2');
await toReact("🎶");
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await xeonplaymp3.mp3(anup3k.url)
await vorterx.sendMessage(m.from,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mpeg',
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: "©VORTERX TEAM",
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
    };
