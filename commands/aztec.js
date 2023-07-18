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
     git+= ` *A Z T E C  M D- R E P O*\n\n*🌟Total Stars*: ${data.stargazers_count} stars\n\n*🍽️Forks* ${data.forks_count} forks\n\n*🌲Repo*: _https://github.com/Diegoson/AMAROK-MD_\n\n*🌲Whatsapp group*: _https://chat.whatsapp.com/I3aOiLY2Ydc258VkV7p0Md_\n\n*🌲Owner*: _http://wa.me/27686881509_`,
