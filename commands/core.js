const fs = require("fs")
const os = require('os');
const {runtime} = require("../lib/module/function.js");
const moment = require("moment-timezone");
//const { tiny } = require("../lib/fonts.js");
const { tiny } = require("@viper-x/fancytext");

module.exports = {
  name: "menu",
  description: "The list of all command",
  category: "General",
  start: async (vorterx, m, { commands, args, prefix, toReact, text,  toUpper }) => {
    await toReact("🛸");
  let aztec = fs.readFileSync("./lib/connect/vorterx.png");
    const time = moment(moment()).format('HH:mm:ss')
                moment.tz.setDefault('Africa/Johannesburg').locale('id')
                const date = moment.tz('africa/johannesburg').format('DD/MM/YYYY');
    const { pushName, sender } = m;
    if (args[0]) {
      let data = [];
      let name = args[0].toLowerCase();
      let cmd =
        commands.get(name) ||
        Array.from(commands.values()).find((v) => v.alias.includes(name));
} else {
      const { pushName, sender } = m;
      let cm = commands.keys();
      let category = [];

      for (let cmd of cm) {
        let info = commands.get(cmd);
        if (!cmd) continue;
        if (!info.category || info.category === "private")
           continue;
        if (Object.keys(category).includes(info.category))
          category[info.category].push(info);
        else {
          category[info.category] = [];
          category[info.category].push(info);
        }
      }
//-----------------------------------------------------------------------
       var up_up, up_mid, up_btm, ctgry_L, ctgry_R, cmd_L, ctgry_end
            let default_menu = 0 ;
            if (Config.menu === '') { default_menu = Math.floor(Math.random() * 3) + 1;      }
            
            if (default_menu == 1 || Config.menu.trim().startsWith("1") || Config.menu.toLowerCase().includes("aztec")) {            
              up_up =  `┏━━⟪ ${tiny(process.env.BOTNAME)} ⟫━━⦿`
              up_mid = `┃ ✗`
              up_btm = `┗━━━━━━━━━━━━━━━⦿`
              ctgry_L  = `┌──『`
              ctgry_R  = `』──❖\n`
              cmd_L =    ` | `
              ctgry_end =`\n└──────────────◉`
              
            }





      
      let amarok = `${up_up}
${up_mid} User: ${tiny(pushName)}
${up_mid} Botname: ${tiny(process.env.BOTNAME)}
${up_mid} Prefix: ${tiny(prefix)}
${up_mid} Runtime: ${tiny(runtime(process.uptime()))}
${up_mid} Time: ${tiny(time)}
${up_mid} Date: ${tiny(date)}
${up_btm}\n
`;

const keys = Object.keys(category);
      for (const key of keys) {
        amarok += `${ctgry_L} ${tiny(key.toLowerCase())} ${ctgry_R}  \n\n${category[key]
          .map((cmd) => ` ${cmd_L}${prefix + cmd.name}`)
          .join("\n")}\n${ctgry_end}\n`;
      }
      amarok += `*©vorterx-team*`;
await vorterx.sendMessage(m.from, { image: aztec, caption: tiny(amarok )}, { quoted: m});
   }
},
};
