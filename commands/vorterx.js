const axios = require("axios");

module.exports = {
  name: "script",
  alias: ["sc"],
  category: "Mics",
  description: "the repo of the bot",
  start: async(vorterx, m { prefix, pushName }) => {

  const axios = await axios.get("https://api.github/repos/Vorterx/Aztec-MD");
    .then(response) => {
  let vorterx= `*💖Hey ${pushName} this is Aztec repo\n
  ╭─❮❮| Aztec Script Bot|❯❯
│
│⚕️Rated: ${response.stargazers}
│
│⚕️Size: ${response.size}
│
│⚕️
│
│
│
│
│
│
│
│────────────────⦿   
│ *© VORTERX*
╰────────────────⦿
