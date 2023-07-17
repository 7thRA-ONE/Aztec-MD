const YT = require('../lib/ytdl-core')
const { isUrl, fetchBuffer } = require('../lib/module/function')
const fs=require("fs")
const yts= require("yt-search")
require ('../config')
module.exports={
    name:"song",
    description:"To search a song play with",
    category:"Download",
    start: async(vorterx,m,{command,prefix,toReact,text,args})=>{
               
if(!text) { await toReact("⛔"); return m.reply("*🎶Provide me with a query*");
          }
      await toReact("🎶");
    let search = await yts(text)
    let anu = search.videos[0]
    const ytmp3play = await YT.mp3(anu.url)
    
 await vorterx.sendMessage(m.from, {audio: fs.readFileSync(ytmp3play.path),fileName: anu.title + '.mp3',mimetype: 'audio/mpeg',}, {quoted:m})
 }
};
