const config = require('../config')
const fs = require("fs");

module.exports = {
   name: 'ping',
   category: 'user',
   description: 'to check ping',
start: async(vorterx, m, { prefix, toReact }) => {
  await toReact("💘");
        var start = new Date().getTime();
	var msg = await m.reply('*𝆺𝅥 ʀᴜɴɪɴɢ 𝆺𝅥*');
	var end = new Date().getTime();
	var responseTime = end - start;
	setTimeout(function (){
	await vorterx.send(`*☇ ꜱᴩᷨᴇͦᴇͭᴅ ☁ : ${responseTime}ms*`);
},100);
}
  };
  
