const axios = require("axios");

module.exports = {
name: "quote",
description: "Same as dare and truth",
category: "Games",
start: async(vorterx, m, { prefix, toReact }) => {

await toReact("😘");
  aztec = "https://i.ibb.co/ZmxJ3Sr/20230720-172644.png",
let vorterxi = await axios.get(`https://favqs.com/api/qotd`);
const reply = `
📝 *Content:* ${quoo.data.quote.body}
*✍️ Author:* ${quoo.data.quote.author}
              `
vorterx.sendMessage(m.from, {image: { url: aztec }}, {quoted:m});
  }
};
