  module.exports = {
    name: "song",
    description: "To download songs",
    category: "Download",
    start: async(vorterx,m,{prefix,toReact,args,text}) => {
    
 /*  const fs = require("fs");
      const { fetchBuffer } = require('../lib/module/function.js');
if (!text) { await toReact("⛔"); return m.reply("*Provide me a song name ex hope by xxx*");
}
function vorterx_0x2662(){const _0x5e8712=['359169eStIal','18GmboKU','40GJfbRs','5340293xXRdrB','43857RXjnDI','282jMGdlL','1313900WmQMhS','43067610quGErh','25325AvBhCI','4752376JGHyqJ','../lib/ytdl2'];vorterx_0x2662=function(){return _0x5e8712;};return vorterx_0x2662();}const vorterx_0x1ab3bf=vorterx_0x21a5;function vorterx_0x21a5(_0x197439,_0x206a23){const _0x26628e=vorterx_0x2662();return vorterx_0x21a5=function(_0x21a58b,_0x40946e){_0x21a58b=_0x21a58b-0x6b;let _0x428871=_0x26628e[_0x21a58b];return _0x428871;},vorterx_0x21a5(_0x197439,_0x206a23);}(function(_0x1f7159,_0x52a159){const _0x2c27be=vorterx_0x21a5,_0x1dc5af=_0x1f7159();while(!![]){try{const _0x4ea788=-parseInt(_0x2c27be(0x6f))/0x1+-parseInt(_0x2c27be(0x71))/0x2+-parseInt(_0x2c27be(0x6b))/0x3*(parseInt(_0x2c27be(0x6d))/0x4)+-parseInt(_0x2c27be(0x73))/0x5*(-parseInt(_0x2c27be(0x70))/0x6)+-parseInt(_0x2c27be(0x6e))/0x7+parseInt(_0x2c27be(0x74))/0x8*(-parseInt(_0x2c27be(0x6c))/0x9)+parseInt(_0x2c27be(0x72))/0xa;if(_0x4ea788===_0x52a159)break;else _0x1dc5af['push'](_0x1dc5af['shift']());}catch(_0x1b76e5){_0x1dc5af['push'](_0x1dc5af['shift']());}}}(vorterx_0x2662,0xa9dea));const xeonplaymp3=require(vorterx_0x1ab3bf(0x75));
await toReact("🎶");
let yts = require("youtube-yts")
        let search = await yts(text)
        function vorterx_0x2681(){const _0x39d344=['2957040XUidqx','3248816xwhxie','936778JwJumy','videos','481582DcgLGb','3188630sJnotE','5962383aHrMXJ','6pYaWPh','28151720TzNkPt'];vorterx_0x2681=function(){return _0x39d344;};return vorterx_0x2681();}function vorterx_0x1ac4(_0x74b2d1,_0x4702a7){const _0x26818b=vorterx_0x2681();return vorterx_0x1ac4=function(_0x1ac410,_0x2c64e7){_0x1ac410=_0x1ac410-0x8b;let _0x4f7f95=_0x26818b[_0x1ac410];return _0x4f7f95;},vorterx_0x1ac4(_0x74b2d1,_0x4702a7);}const vorterx_0x15f225=vorterx_0x1ac4;(function(_0x257621,_0x4ce81d){const _0x1629ca=vorterx_0x1ac4,_0x4129d1=_0x257621();while(!![]){try{const _0x3042bc=-parseInt(_0x1629ca(0x8c))/0x1+-parseInt(_0x1629ca(0x93))/0x2+-parseInt(_0x1629ca(0x91))/0x3+-parseInt(_0x1629ca(0x92))/0x4+parseInt(_0x1629ca(0x8d))/0x5+-parseInt(_0x1629ca(0x8f))/0x6*(parseInt(_0x1629ca(0x8e))/0x7)+parseInt(_0x1629ca(0x90))/0x8;if(_0x3042bc===_0x4ce81d)break;else _0x4129d1['push'](_0x4129d1['shift']());}catch(_0x511422){_0x4129d1['push'](_0x4129d1['shift']());}}}(vorterx_0x2681,0x8800b));let anup3k=search[vorterx_0x15f225(0x8b)][0x0];
function vorterx_0x4267(){const _0x145494=['url','1595070NYzSrB','562rLTdzK','6PkyjLH','771105wZJMlY','4496aJTZqn','709oTkSZm','1209166NDOrBO','664887SIYFNa','230872MgXBZO','mp3'];vorterx_0x4267=function(){return _0x145494;};return vorterx_0x4267();}const vorterx_0x413457=vorterx_0x1a34;(function(_0x58addc,_0x2de596){const _0x4979dd=vorterx_0x1a34,_0x387b18=_0x58addc();while(!![]){try{const _0xa2f600=parseInt(_0x4979dd(0x160))/0x1*(parseInt(_0x4979dd(0x15c))/0x2)+-parseInt(_0x4979dd(0x162))/0x3+-parseInt(_0x4979dd(0x163))/0x4+parseInt(_0x4979dd(0x15e))/0x5*(-parseInt(_0x4979dd(0x15d))/0x6)+parseInt(_0x4979dd(0x161))/0x7+-parseInt(_0x4979dd(0x15f))/0x8+parseInt(_0x4979dd(0x15b))/0x9;if(_0xa2f600===_0x2de596)break;else _0x387b18['push'](_0x387b18['shift']());}catch(_0x561209){_0x387b18['push'](_0x387b18['shift']());}}}(vorterx_0x4267,0x1c17b));function vorterx_0x1a34(_0x4288fa,_0x3f8e7b){const _0x426718=vorterx_0x4267();return vorterx_0x1a34=function(_0x1a3433,_0x43881e){_0x1a3433=_0x1a3433-0x159;let _0x158d5d=_0x426718[_0x1a3433];return _0x158d5d;},vorterx_0x1a34(_0x4288fa,_0x3f8e7b);}const pl=await xeonplaymp3[vorterx_0x413457(0x159)](anup3k[vorterx_0x413457(0x15a)]);
await vorterx.sendMessage(m.from,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mpeg',
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: "vorterx",
            renderLargerThumbnail: true,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
    };*/

      const YT = require("../lib/ytdl-core.js");
const fs = require("fs");
const yts = require("youtube-yts");

try {
      if (!args[0]) { await toReact("🚫"); return m.reply(`*Provide me a song  name..*`);
    }
      const songSearchTerm = args.join(" ");
      const songInfo = await yts(songSearchTerm);
      const song = songInfo.videos[0];
      let songUrl = song.url;
      let songId = songUrl.split("v=")[1];      
      const result = await yts(songId);
      const length = result.seconds;

      if (length >= 1800) {
        return m.reply(
          "The video is more than 30 minutes long "
        );
      } else {
        const ytaud = await YT.mp3(songUrl);
        await toReact("💠");
        vorterx.sendMessage(
          m.from,
          {
            video: { url: ytaud.songUrl },
            caption:`  *乂 V I D E O S  - D O W  N L O A D*\n\n
 *🌲Name*: ${song.title}\n\n
 *🌲Views*: atc\n\n
 *🌲Botname*: ${process.env.BOTNAME}`,
          },
          { quoted: m }
        );
      }
    } catch (err) {
      console.error(err);
     vorterx.sendMessage(
        m.from,
        { text: `*Failed to play the video*: ${err.message}` },
        { quoted: m }
      );
    }
  },
};
