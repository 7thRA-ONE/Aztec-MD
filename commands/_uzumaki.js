const { Function } = require('../lib/module/function')
const config = require ('../config')
const fs = require('fs')
module.exports = {
  name: "narto",
  description: "To see uzumakis status",
  category: "Anime",
  start: async(vorterx, m, { prefix}) => {
let image = ["https://i.imgur.com/4kPEgHh.jpeg", "https://i.imgur.com/MaMCnH8.jpeg", "https://i.imgur.com/wh29vo9.jpeg", "https://i.imgur.com/8bF8725.jpeg", "https://i.imgur.com/GtO16It.jpeg", "https://i.imgur.com/lnihPKO.jpeg", "https://i.imgur.com/qLnxuwi.jpeg", "https://i.imgur.com/XBJaAyB.jpeg", "https://i.imgur.com/nLgL6lc.jpeg", "https://i.imgur.com/0RQSzlW.jpeg", "https://i.imgur.com/QMsuVBy.jpeg", "https://i.imgur.com/oZoddMX.jpeg", "https://i.imgur.com/dtcwOMg.jpeg", "https://i.imgur.com/9l1RG1f.jpeg", "https://i.imgur.com/bR7vupu.jpeg", "https://i.imgur.com/svmh1Kw.jpeg", "https://i.imgur.com/9iHdELa.jpeg", "https://i.imgur.com/MijFzDm.jpeg", "https://i.imgur.com/clz2998.jpeg", "https://i.imgur.com/9SVxlEC.jpeg", "https://i.imgur.com/Qm1z2HY.jpeg", "https://i.imgur.com/OI4sNkL.jpeg", "https://i.imgur.com/X43Oy5g.jpeg", "https://i.imgur.com/PY9vJmi.jpeg", "https://i.imgur.com/4xYoEAc.jpeg", "https://i.imgur.com/n2F80hh.jpeg", "https://i.imgur.com/RLoILJF.jpeg", "https://i.imgur.com/VIJptvK.jpeg", "https://i.imgur.com/5dO1CSi.jpeg", "https://i.imgur.com/x3jSsuA.jpeg", "https://i.imgur.com/8k5ADS1.jpeg", "https://i.imgur.com/sydIjJL.jpeg", "https://i.imgur.com/Vg67Zf8.jpeg", "https://i.imgur.com/k3JgRKH.jpeg", "https://i.imgur.com/O33hnHh.jpeg", "https://i.imgur.com/puMyN27.jpeg", "https://i.imgur.com/KbFvQQ7.jpeg", "https://i.imgur.com/HB34zou.jpeg", "https://i.imgur.com/WSK7HKd.jpeg", "https://i.imgur.com/eCcquJj.jpeg", "https://i.imgur.com/ZA7l1LD.jpeg"]

const loki = image[Math.floor(Math.random()*image.length)]
let media = await message.vorterx.sendImageAsSticker(message.jid, loki, message.data, { packname: config.STICKER_DATA.split(';')[0], author: config.STICKER_DATA.split(';')[1] })
await fs.unlinkSync(media)
return;

});
