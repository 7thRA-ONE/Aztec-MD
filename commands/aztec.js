require("../config")
const axios = require("axios")

module.exports = {
  name: "sc",
  alias: ["script"],
  description: "To see aztec information",
  category: "Extra",
  start: async(vorterx, m, { prefix, toReact, pushNme }) => {
    
    await toReact("🛸");
    src = `https://i.ibb.co/6WV7wbc/20230718-084726.png`;
    let vorterxi = await axios.get(`https://api.github/repos/Vorterx/Aztec-MD`);
    let git = `Hey ${pushName}` 
     git+= ` *乂 A Z T E C  M D- R E P O 乂*\n\n*🌟Total Stars*: ${vorterxi.stargazers_count}\n\n*🛸Users* ${vorterxi.forks_count}\n\n*🌲Repo*: ${vorterxi.html_url}\n\n*🌲Whatsapp group*: none\n\n*🌲Owner*: _27686881509_`,
        await vorterx.sendMessage(m.from, {image: {url: src}, caption: git}, {quoted: m});
  }
};
