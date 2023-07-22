module.exports = {
  name: "gcname",
  description: "change gc name",
  category: "Group",
  start: async(vorterx,m,{ prefix,isBotAdmin,isGroup, toReact, pushName}) => {

                if (!m.isGroup) { await toReact("⛔"); return m.reply("*This command is only for admins*");
                                }
                if (!isBotAdmin) { await toReact("⛔");return m.reply("*I need to be admin inorder to use this cmd*")
  }
                if (!text) { await toReact("⛔"); return m.reply("*Give  a name you wnt to update to*");
  }
    await toReact("🔉");
              
    await vorterx.groupUpdateSubject(m.from, text)
                await m.reply(`*🔉Group name successfully changed*`);
            }
};
