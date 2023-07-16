const axios = require("axios");

module.exports = {
  name: "script",
  alias: ["sc"],
  category: "Mics",
  description: "the repo of the bot",
  start: async(vorterx, m, { prefix, pushName }) => {
  let aztec = fs.readFileSync("./lib/connect/vorterx.png");
    
  let axios = await axios.get("https://api.github/repos/Vorterx/Aztec-MD");
  let vorterx = `*💖Hey ${pushName} this is Aztec repo\n
  ╭─❮❮| Aztec Script Bot|❯❯
│
│⚕️Rated: ${response.stargazers_count}
│
│⚕️Forks: ${response.forks_count}
│
│⚕️Update: ${response.updated_at}
│
│⚕️Repo: ${response.html_url}
│
│⚕️Branch: ${response.branch}
│
│────────────────⦿   
│ *© VORTERX*
╰────────────────⦿`;
 await vorterx.sendMessage(m.from, { image: aztec, caption: vorterx }, { quoted: m});
 }
};

