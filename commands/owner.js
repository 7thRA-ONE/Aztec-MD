const { fetchBuffer } = require("../lib/module/function.js");
                            
module.exports = {
  name: "owner",
  description: "Owner",
  category: "user",
  start: async(vorterx, m, { prefix, toReact, pushName }) => {

    await toReact("✔️");
logo = `https://i.ibb.co/v47d4BL/IMG-20230429-WA0021.jpg`; 
const config = require('../config');
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + config.owner + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + config.owner + ':+' + config.owner + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: global.owner, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: config.owner,
                    body: 'Aztec MD.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: logo,
                    thumbnail: logo,
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner + '?text=Hii+bro,I+am+',
                },
            },
        };
        return await vorterx.sendMessage(m.from, buttonMessaged, {
            quoted: m,
        });

              }
};
