module.exports = {
    name:"bc",
    alias:["bct"],
    description:"Broadcast messages to the groups",
    category:"Owner",

    start:async(vorterx,m,{command,prefix,text,pushName,toReact,participants,args,iscreator,body,quoted,mime})=>{
        const fs = require("fs");
        let aztec = fs.readFileSync("./lib/connect/vorterx.png")
      /*  if(!iscreator) { await toReact("⛔"); return m.reply('*This command is for my owner only*');}
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
};*/
        if (!iscreator) {await toReact("🚫"); return m.reply("*This command is for my owner only*");
                        }
        if(!text) { await toReact("🚫"); return m.reply("*Provide me with a message please*");
                  }
        let getGroups = await vorterx.groupFetchAllParticipating();
        let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
        let anu = groups.map((v) => v.id);
        m.reply(`*Sending Broadcast To ${anu.length} Group Chat*`);
        for (let i of anu) {
            await toReact("📢");
            let txt = `  *乂 B R  O  A D C A S T*\n\n *■Owner:* ${pushName}\n\n${text}`;
            let buttonMessaged = {
                image: aztec,
                caption: txt,
                footer: pushName,
                headerType: 1,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: false,
                    externalAdReply: {
                        title: 'Broadcast by ' + pushName,
                        body: 'vorterx',
                        thumbnail: aztec,
                        mediaUrl: '',
                        mediaType: 2,
                        sourceUrl: `https://github.com`,
                        showAdAttribution: true,
                    },
                },
            };
            await vorterx.sendMessage(i, buttonMessaged, {
                quoted: m,
            });
        }
        m.reply(`*Successfully Sending Broadcast To ${anu.length} Groups*`);
    }
      };
