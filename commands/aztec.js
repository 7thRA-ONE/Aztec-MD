require("../config")
const axios = require("axios")

module.exports = {
  name: "sc",
  alias: ["script"],
  description: "To see aztec information",
  category: "Extra",
  start: async(vorterx, m, { prefix, toReact, pushName }) => {
    
    await toReact("🛸");
    src = `https://i.ibb.co/6WV7wbc/20230718-084726.png`;
    let vorterxi = await axios.get(`https://api.github.com/repos/Vorterx/Aztec-MD`);
    let git = ` *乂 A Z T E C  M D- R E P O 乂*\n\n*🌟Total Stars*: ${vorterxi.data.stargazers_count}\n\n*🛸Users*: ${vorterxi.data.forks}\n\n*🌲Update*: ${vorterxi.data.updated_at}\n\n*🌲Repo*: ${vorterxi.data.html_url}\n\n*🌲Whatsapp group*: none\n\n*🌲Owner*: _27686881509_`
    let buttonMessage = {
            image: {url: src},
            caption: git,
            footer: 'vorterx team',
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "aztec github",
                    body: "multi bot v",
                    thumbnail: pp,
                    mediaType: 4,
                    mediaUrl: 'wa.me/27686881509',
                    sourceUrl: `https://vorterx.com/`,
                },
            },
        };
        await vorterx.sendMessage(m.from, buttonMessage, {quoted: m});
  }
};
