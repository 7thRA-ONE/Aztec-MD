//©by vorterx team
//@diegoson
//@aztec

module.exports = {
  name: "removepp",
  description: "To remove group profile picture",
  category: "Group",
  start: async(vorterx,m,{prefix,text,isGroup,isBotAdmin,isAdmin,toReact}) => {

    if (!m.isGroup) { await toReact("⛔"); return m.reply("*Sorry this feature is for Admins only*");
  }
if (!isBotAdmin) { await toReact("⛔"); return m.reply("*I need to be admin first*");
  }
    await toReact("✅");
    await vorterx.removeProfilePicture(from)
}
};
