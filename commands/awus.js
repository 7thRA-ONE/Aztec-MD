const axios = require("axios");

module.exports = {
name: "quote",
description: "Same as dare and truth",
category: "Games",
start: async(vorterx, m, { prefix, toReact }) => {

await toReact("😘");
  aztec = "https://i.ibb.co/ZmxJ3Sr/20230720-172644.png",
let vorterxi = await axios.get(`https://favqs.com/api/qotd`);
const reply = ` *乂 Q U O T E S - S E N S E*\n\n
*🌲Content*: ${vorterxi.data.quote.body}\n\n
*🌲Owner*: ${vorterxi.data.quote.author}\n\n\n*©vorterx-team*
              `
vorterx.sendMessage(m.from, {image: { url: aztec }, caption: reply},{quoted:m});
  }
};
