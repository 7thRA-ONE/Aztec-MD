module.exports = {
  name: "desc",
  description: "To change group description",
  category: "Group",
  start: async(vorterx,m,{prefix, isGroup, isBotAdmin, text, toReact}) => {

     if(!m.isGroup) { await toReact("⛔"); return m.reply("*This command is for admins only*");
                    }
    if(!isBotAdmin) { await toReact("⛔"); return m.reply("*I need to be admin inorder to respond*");
                    }
    if(!text) { await toReact("⛔"); return m.reply("*Give me a query for that*");
              }
    await toReact("🔉");
  await vorterx.groupUpdateDescription(m.from, text)
                await m.reply(`*🔉 Successfully Group description updated*`);
            }
       };
