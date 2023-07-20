const fs = require("fs");

module.exports = {
   name: 'alive',
   category: 'General',
   description: 'An cmd to test if its on',
   start: async(vorterx, m, { prefix, pushName, toReact }) => {
      await toReact("💗");
   let aztec = fs.readFileSync("./lib/connect/aztec.png");
      let msg = `*Hey ${pushName} This is ${process.env.BOTNAME} developed by Diegoson*\n\n*👾Descripto*: WhatsApp user bot\n\n*🚦Botname*: ${process.env.BOTNAME}\n\n*👾Prefix*: ${prefix}\n\n*📲Version*: 3.0.0\n\n\n*©vorterx-team*`;
     await vorterx.sendMessage(m.from, { image: aztec, caption: msg }, { quoted: m});

   }
};
