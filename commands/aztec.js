const axios = require("axios");

module.exports = {
  name: "sc",
  alias: ["script"],
  description: "To see aztec information",
  category: "Extra",
  start: async(vorterx, m, { prefix, toReact, pushNme }) => {
    
    await toReact("🛸");
    let axios = await axios.get(`https://api.github/repos/Vorterx/Aztec-MD`);
    let git = `Hey ${pushName}` 
     git+= ` *乂 A Z T E C  M D- R E P O 乂*\n\n*🌟Total Stars*: ${data.stargazers_count}\n\n*🛸Users* ${data.forks_count}\n\n*🌲Repo*: ${data.html_url}\n\n*🌲Whatsapp group*: none\n\n*🌲Owner*: _27686881509_`,
       return await vorterx.sendMessage(m.from, {image: url, Caption: git}, {quoted: m});
  }
};
