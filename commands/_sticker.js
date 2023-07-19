const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')

module.exports = {
    name: "sticker",
    alias: ["s"],
    description: "makes stickers",
    category: "Converter",
    start: async(vorterx, m,{pushName,toReact,body,quoted,mime,text,args,flags}) => {
       if(!quoted) { await toReact("⛔"); return m.reply("*Please reply to a photo or video*");
                   }
       flags.forEach((flag) => (text = text.replace(flag, '')))
 
       author = ''
        
       
           
        if (/image/.test(mime)) {
    
            let media = await quoted.download()
       
        let sticker = new Sticker(media, {
            author: author, 
            type: flags.includes('--c') || flags.includes('--crop') || flags.includes('--cropped')
            ? 'crop'
            : flags.includes('--s') || flags.includes('--stretch') || flags.includes('--stretched')
            ? 'default'
            : flags.includes('--circle')
            ? 'circle'
            : 'full' ,
            categories: ['🤩', '🎉'], 
            id: '12345', 
            quality: 75, 
            background: 'transparent' })
       
        const buffer = await sticker.toBuffer()
        vorterx.sendMessage(m.from, {sticker: buffer}, {quoted: m})
    
        } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 20) { await toReact("⛔"); return m.reply('Cannot fetch videos longer than *12 Seconds*');
                                                     }
            let media = await quoted.download()
        let sticker = new Sticker(media, {
            author: author, 
            type: body.includes("#c")|| body.includes("#crop")? StickerTypes.CROPPED: StickerTypes.FULL, 
            categories: ['🤩', '🎉'], 
            id: '12345', 
            quality: 30, 
            background: 'transparent' })
    await toReact("💗");
        const stikk = await sticker.toBuffer()
    
    
        vorterx.sendMessage(m.from, {sticker: stikk}, {quoted: m})
        } else {
            vorterx.sendMessage(m.from,{text:"*no  context or other text found*"},{quoted:m})
            }
    }
};
