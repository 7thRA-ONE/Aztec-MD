const axios = require("axios");

module.exports = {
name: "quote",
description: "Same as dare and truth",
category: "Games",
start: async(vorterx, m, { prefix, toReact }) => {

await toReact("😘");
let vorterxi = await axios.get(`https://favqs.com/api/qotd`);
const reply = `
📝 *Content:* ${quoo.data.quote.body}
*✍️ Author:* ${quoo.data.quote.author}
              `
vorterx.sendMessage(m.from, {image: amarok },  {quoted:m});
  }
};
