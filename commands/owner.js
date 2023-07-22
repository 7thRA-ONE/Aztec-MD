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
            'FN:' + global.mods + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + global.mods + ':+' + global.mods + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: global.mods, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: config.mods,
                    body: 'Aztec MD.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: logo,
                    thumbnail: logo,
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + mods + '?text=Hii+bro,I+am+',
                },
            },
        };
        return await vorterx.sendMessage(m.from, buttonMessaged, {
            quoted: m,
        });

              }
};
