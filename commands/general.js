const fs = require("fs");

module.exports = {
   name: 'alive',
   alias: ['alv'],
   category: 'Mics',
   description: 'An cmd to test if its on',
   start: async(vorterx, m, { prefix, pushName, botName }) => {
      await toReact("💗");
   let aztec = fs.readFileSync("./lib/connect/vorterx.png");
      let msg = `*Hey ${pushName} This is ${botName} developed by Diegoson*\n\n*👾Descripto*: Whats script bot by vorterx\n*🚦Botname*: AZTEC-MD\n*👾Prefix*: ${prefix}\n*📲Version*: 3.0.0\n\n\n*©️AZTEC-MD BY VORTERX*`;
     await vorterx.sendMessage(m.from, { image: aztec, caption: msg }, { quoted: m});

   }
};
