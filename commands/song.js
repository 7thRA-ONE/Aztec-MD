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
function vorterx_0x4267(){const _0x145494=['url','1595070NYzSrB','562rLTdzK','6PkyjLH','771105wZJMlY','4496aJTZqn','709oTkSZm','1209166NDOrBO','664887SIYFNa','230872MgXBZO','mp3'];vorterx_0x4267=function(){return _0x145494;};return vorterx_0x4267();}const vorterx_0x413457=vorterx_0x1a34;(function(_0x58addc,_0x2de596){const _0x4979dd=vorterx_0x1a34,_0x387b18=_0x58addc();while(!![]){try{const _0xa2f600=parseInt(_0x4979dd(0x160))/0x1*(parseInt(_0x4979dd(0x15c))/0x2)+-parseInt(_0x4979dd(0x162))/0x3+-parseInt(_0x4979dd(0x163))/0x4+parseInt(_0x4979dd(0x15e))/0x5*(-parseInt(_0x4979dd(0x15d))/0x6)+parseInt(_0x4979dd(0x161))/0x7+-parseInt(_0x4979dd(0x15f))/0x8+parseInt(_0x4979dd(0x15b))/0x9;if(_0xa2f600===_0x2de596)break;else _0x387b18['push'](_0x387b18['shift']());}catch(_0x561209){_0x387b18['push'](_0x387b18['shift']());}}}(vorterx_0x4267,0x1c17b));function vorterx_0x1a34(_0x4288fa,_0x3f8e7b){const _0x426718=vorterx_0x4267();return vorterx_0x1a34=function(_0x1a3433,_0x43881e){_0x1a3433=_0x1a3433-0x159;let _0x158d5d=_0x426718[_0x1a3433];return _0x158d5d;},vorterx_0x1a34(_0x4288fa,_0x3f8e7b);}const pl=await xeonplaymp3[vorterx_0x413457(0x159)](anup3k[vorterx_0x413457(0x15a)]);
await vorterx.sendMessage(m.from,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mpeg',
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: "©VORTERX TEAM",
            renderLargerThumbnail: true,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
    };
