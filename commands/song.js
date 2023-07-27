  module.exports = {
    name: "song",
    description: "To download songs",
    category: "Download",
    start: async(vorterx,m,{prefix,toReact,args,text}) => {
    const fs = require("fs");

const ytdl = require('ytdl-core');
const yts = require('yt-search');
const { pipeline } = require('stream');
      const { promisify } = require('util');
const os = require('os');
      const { fetchBuffer } = require("./lib/module/function.js");

const streamPipeline = promisify(pipeline);
if(!text) { await toReact("⛔"); return m.reply("*Provide me a song name ex Banyana by Daliwonga*");
          }
  let search = await yts(text);
  let vid = search.videos[Math.floor(Math.random() * search.videos.length)];
  if (!search) { await toReact("⛔");  return m.reply('*Song not found try another name Mnike by Tyler lcu*');
               }
      await toReact ("🔘");
  let { title, thumbnail, timestamp, views, ago, url } = vid;
  let toxic = 'aztec wa bot';

  let amarok = `┌───⭓『S O N G - D O W N 』
 ❒  Title: ${title}
 ❒  Duration: ${timestamp}
 ❒  Views: ${views}
└──────────⭓`;

  vorterx.sendMessage(m.from, { image: { url: thumbnail }, caption: amarok }, { quoted: m });


  const audioStream = ytdl(url, {
    filter: 'audioonly',
    quality: 'highestaudio',
  });
  const tmpDir = os.tmpdir();
  const writableStream = fs.createWriteStream(`${tmpDir}/${title}.mp3`);
  await streamPipeline(audioStream, writableStream);

  let doc = {
    audio: {
      url: `${tmpDir}/${title}.mp3`
    },
    mimetype: 'audio/mp4',
    fileName: `${title}`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: url,
        title: title,
        body: toxic,
        sourceUrl: url,
        thumbnail: await (await vorterx.fetchBuffer(thumbnail)).data
      }
    }
  };

  await vorterx.sendMessage(m.from, doc, { quoted: m });
  fs.unlink(`${tmpDir}/${title}.mp3`, (err) => {
    if (err) {
      console.error(`Failed to delete audio file: ${err}`);
    } else {
      console.log(`Deleted audio file: ${tmpDir}/${title}.mp3`);
    }
  });
}
                                         };
