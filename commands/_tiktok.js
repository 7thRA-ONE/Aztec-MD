module.exports = {
  name: "tiktok",
  description: "To download tiktok videos",
  category: "Download",
  start: async(vorterx,m,{prefix,toReact,text,args}) => {


  const fg = require("api-dylux");
const { tiktokdl } = require("@bochilteam/scraper");
  if (!args[0]) { await toReact("🛑"); return m.reply("*Provide me with an tiktok video link*");
                }
    await toReact("📍");

    let aztec = await fg.tiktok(args[0]) 
    let toxic = `
┌─⊷ *乂TIKTOK - DWNLD*
❲❒❳ *Username:* ${aztec.unique_id}
❲❒❳ *Duration:* ${aztec.duration}
❲❒❳ *Description:* ${aztec.description}\n\nᴡʜᴀᴛs-ʙᴏᴛ ʙʏ ᴅɪᴇɢᴏsᴏɴ`
    vorterx.sendMessage(m.from, {caption:toxic},{quoted: m});
} 
  };
