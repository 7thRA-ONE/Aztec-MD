const { formatp, runtime } = require("../lib/module/function.js");

module.exports = {
  name: "system",
  description: "To Check the system status",
  category: "user",
  start: async(vorterx,m,{prefix,text,toReact}) => {

  const os = require('os');
  const speed = require('performance-now');
  const latensi = speed() - speed();
    await toReact("📟");
  let aztec =  `*乂 SYSTEM - STATUS*\n\n`;
  aztec += `❲❒❳ *BotName :* ${process.env.BOTNAME}\n`;
  aztec += `❲❒❳ *Version :* 3.0.0`;
  aztec += `❲❒❳ *RAM :* _${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}_\n`;
  aztec += `❲❒❳ *Speed : _${latensi.toFixed(4)}sec_*\n`;
  aztec += `❲❒❳ *Runtime :* _${runtime(process.uptime())}_\n`;
  aztec += `❲❒❳ *Platform :* ${os.platform()}.com\n`;
  aztec += `❲❒❳ *Platform ID :* ${os.hostname()}\n\n\n*©vorterx-team*`;
m.reply(aztec)
      }
};
  
