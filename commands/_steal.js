const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')

module.exports = {
    name: "steal",
    alias: ["take"],
    description: "steals the sticker",
   category: "Converter",
    start: async(vorterx, m,{pushName,args,mime,quoted}) => {
        if (!quoted) { await toReact("⛔"); return m.reply(`*no sticker context found*`);
                     }
        if (q) {
   anu = args.join(' ').split('|')
   author = anu[1] !== '' ? anu[1] : 'Vᴏʀᴛᴇʀx ᴛᴇᴀᴍ'
   } else {
       
       author = 'Vᴏʀᴛᴇx ᴛᴇᴀᴍ'
       }
if(/webp/.test(mime)) {
let media = await quoted.download()
let sticker = new Sticker(media, {
   author: author, 
   type: StickerTypes.FULL, 
   categories: ['🤩', '🎉'], 
   id: '12345', 
   quality: 75, 
   background: 'transparent' })
  await toReact("💗");

const buffer = await sticker.toBuffer()
vorterx.sendMessage(m.from, {sticker: buffer}, {quoted: m})
}
    }
};
