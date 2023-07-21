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
};
