const axios = require("axios");

module.exports = {
  name: "github",
  description: "Search an username on github",
  category: "Search",
  start: async (vorterx, m, { text, prefix, pushName, args,mime }) => {
    if (!args[0]) { await toReact ("🚀"); return m.reply("*Missing a query github username*");
                  }
    var newGCdesc = args.join(" ");

    let vorterxi = await axios
      .get(`https://api.github.com/users/${newGCdesc}`)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
    await toReact("🗽");
    let GhUserPP = vorterxi.avatar_url;
    let resText = `        *乂 G I T H U B - U S E R N M E*\n\n*🌲Name*: ${vorterxi.name}*\n\n*🗽Followers*: ${vorterxi.followers}\n\n*🌲Repos*: ${vorterxi.public_repos}\n\n*♻️Website*: ${vorterxi.blog}\n\n*📗Bio*: ${vorterxi.bio}\n\n\n*©vorterx-team*`;

    await vorterx.sendMessage(
      m.from,
      {
        image: { url: GhUserPP, mimetype: "image/jpeg" },
        caption: resText,
      },
      { quoted: m }
    );
  },
};
