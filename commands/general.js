const fs = require("fs");

module.exports = {
   name: 'both',
   alias: ['alv'],
   category: 'Mics',
   description: 'Some virous commands in one',
   start: async(vorterx, m, { prefix, botName, toReact }) => {
   let aztec = fs.readFileSync("../lib/connect/aztec.png");
      let msg = `Hey ${pushName} This is ${botName} developed by Diegoson\n\n*👾Descripto: Whats script bot\n*🚦Botname: ${botName}\n*👾Prefix: ${prefix}\n*📲Version: 3.0.0\n\n\n*©️VORTERX`;
     await vorterx.sendMessage(m.from, { image: aztec, caption: msg }, { quoted: m});

   }
};
