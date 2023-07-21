const { fetchBuffer } = require("../lib/module/function.js");
                            
module.exports = {
  name: "owner",
  description: "Owner",
  category: "User",
  start: async(vorterx, m, { prefix, toReact, pushName }) => {

    await toReact("✔️");
  
const config = require('../config');
        const thmb = await fetchBuffer(global.IMAGE_URL)
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + config.vorterx + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + config.vorterx + ':+' + config.vorterx + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: config.vorterx, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: config.vorterx,
                    body: 'Aztec MD.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: thmb,
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + vorterx + '?text=Hii+bro,I+am+' + pushName,
                },
            },
        };
        return await vorterx.sendMessage(m.from, buttonMessaged, {
            quoted: m,
        });

              }
};
