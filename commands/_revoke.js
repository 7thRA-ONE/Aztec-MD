module.exports = {
  name: "revoke",
  description: "To reset group link",
  category: "Group",
  start: async(vorterx,m,{prefix,toReact,isGroup}) => {

  if(!isGroup) { await toReact("⛔"); return vorterx.sendMessage(m.from,{text: '*This command is for Admins only*'}, {quoted:m});
               }
    await toReact("✅");
    await vorterx.groupRevokeInvite(m.from).then((res) => {
            m.reply(`*🔉Group link has been reserted successfully*`);
    })
              }
};
