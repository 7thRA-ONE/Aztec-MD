module.exports = {
    name:"bc",
    alias:["bct"],
    description:"Broadcast messages to the groups",
    category:"Owner",

    start:async(vorterx,m,{command,prefix,text,pushName,toReact,participants,args,iscreator,body,quoted,mime})=>{
        if(!iscreator) { await toReact("⛔"); return m.reply('*This command is for my owner only*');}
        if (!text) { await toReact("⛔"); return m.reply("Provide me a text");
                   }
        const bct=body.slice(4)
        let getGroups = await vorterx.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let anu = groups.map(v => v.id)
        m.reply(` Broadcast is in ${anu.length} Group Chat in ${anu.length * 1.5} seconds`)
        for (let i of anu) {
          await toReact("👨‍💻");

let txt = `*乂 B R O A D C A S T I  N G*\n\n*♲︎︎︎Owner*:${pushName}\n\n*♲︎︎︎Mess*: ${bct}`

if(/image/.test(mime)) {
let media = await quoted.download()

await vorterx.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await vorterx.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        m.reply(`*Broadcast has been send to ${anu.length} groups*`);
    }
}
case "owner": {
   await toReact("✔️");

    const config = require('../config');
        const thmb = await getBuffer(global.THUMB_IMAGE)
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
                    sourceUrl: `https://wa.me/+` + owner + '?text=Hii+bro,I+am+' + pushName,
                },
            },
        };
        return await vorterx.sendMessage(m.from buttonMessaged, {
            quoted: m,
        });

break;
      default:
        break;
    }
  },
};
