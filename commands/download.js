const YT = require('../lib/ytdl-core')
const { isUrl, fetchBuffer } = require('../lib/module/function')
const fs=require("fs")
const yts= require("yt-search")
require ('../config')
module.exports={
    name:"song",
    description:"To search a song play with",
    category:"Download",
    start:async(vorterx,m,{command,prefix,toReact,text,args})=>{
               
if(!text) { await toReact("⛔"); return m.reply("*🎶Provide me with a query*");
          }
      await toReact("🎶");
    let yts = require("yt-search")
        let search = await yts(text)
        let anu = search.videos[0]
const pl= await YT.mp3(anu.url)
await vorterx.sendMessage(m.from,{
    audio: fs.readFileSync(pl.path),
    fileName: anu.title + '.mp3',
    mimetype: 'audio/mpeg',
    contextInfo:{
        externalAdReply:{
            title:"♪𝐴𝑍𝑇𝐸𝐶-𝑀𝐷",
            body: "♪Vᴏʀᴛᴇʀx Tᴇᴀᴍ♪",
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anu.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
    }
}
