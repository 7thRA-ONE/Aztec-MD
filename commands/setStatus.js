module.exports = {
  name: "setstus",
  description: "To set status",
  category: "Owner",
  start: async(vorterx,m,{prefix,toReact, text}) => {

               if(!text) { await toReact("⛔"); return m.reply("*Please give me  a query*");
                         }
      await toReact("💘");
    await vorterx.setStatus(m.from,text)
       return m.reply(`*Successfully Wa Status has been set*`);
  }
               };
