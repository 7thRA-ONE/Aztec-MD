module.exports = {
  name: "igstalker",
  description: "Instagram",
  category: "Search",
  start: async(vorterx,m,{prefix,toReact,args, text}) => {
    
if (!args[0]) { await toReact("⛔"); return m.reply("*Please give me use ig id*");
              }
               const fg = require('api-dylux');
    await toReact("📍");
    try {
    let res = await fg.igStalk(args[0])
    let aztec = `
*乂 I G S T A L K E R*\n\n
▢ *🧕Name:* ${res.name} 
▢ *👩‍🚀Username:* ${res.username}
▢ *👥Followers:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📍Bio:* ${res.description}
▢ *📥Posts:* ${res.postsH}
▢ *📩Email:* ${res.email}
`
     await vorterx.sendMessage(m.from, {image: { url: res.profilePic }, caption: aztec }, {quoted: m});
      } catch {
      return m.reply(`*Provide me a valid ig user name*`);
    }
  }
};
