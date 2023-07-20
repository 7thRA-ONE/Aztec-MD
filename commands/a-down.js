const axios = require("axios");
const fs = require("fs");

module.exports = {
  name: "apk",
  alias: ["app"],
  description: "To download apk randomly",
  category: "Download",
  start: async(vorterx, m, { prefix, toReact, text }) => {
    if (typeof text !== 'string') {
      await toReact("⛔");
      return m.reply("*Provide me with an app name*");
    }

    const getRandom = (ext) => {
      return `${Math.floor(Math.random() * 10000)}${ext}`;
    };
    let randomName = getRandom(".apk");
    const filePath = `./${randomName}`;
    const { search, download } = require("aptoide-scraper");
    let searc = await search(text);
    let data = {};
    if (searc.length) {
      data = await download(searc[0].id);
    } else {
      return m.reply("*Apk could not be found*");
    }

    const apkSize = parseInt(data.size);
    if (apkSize > 100) {
      return m.reply(`⛔This App is too much large.`);
    }
    await toReact("♻️");

    const url = data.dllink;
    let inf = "*乂 A P P R A N D M - D O W N L O A D E R*";
  }
}
