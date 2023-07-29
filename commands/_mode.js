module.exports = {
  name: "public",
  description: "To change to public or private",
  category: "owner",
  start: async(vorterx,m,{prefix,iscreator,toReact,text}) => {

                if (!iscreator) { await toReact("🛑"); return m.reply("*this cmd is for my owner only*");
                                }
    await toReact("🔒");
                vorterx.public = true
                m.reply('*Bot has been set to public mode⚙️*');
break:
  case 'private':
    if(!iscreator) { await toReact("🔒"); return m.reply("*This cmd is for my owner only*");
                   }
    await toReact("🔒");
    vorterx.public = false
    m.reply("*Bot has been set to private mode*");

  break:
  default;
  }
};
