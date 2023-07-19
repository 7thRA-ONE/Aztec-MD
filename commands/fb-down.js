const config = require("../config");
const fbInfoVideo = require('fb-info-video'); 

module.exports = {
  name: "fb",
  alias: ["facebook"],
  description: "To download Facebook videos",
  category: "Download",
  start: async(vorterx, m, { prefix, toReact, pushName, text }) => {
    
if(!text) { await toReact("⛔"); return m.reply(`*Give me fb url link*`);
          }
	  await toReact("📹");
fbInfoVideo.getInfo(text)
  .then(info =>{
let vurl=info.video.url_video;


      let data  ="*♲︎︎︎Views    :* "+  info.video.view;
	data +="\n*♲︎︎︎Likes    :* "+info.video.reaction.Like\n\n\n*©AZTEC-MD*;

	data +=config.caption ;
                        let buttonMessage = {
                        video: {url:vurl},
                        mimetype: 'video/mp4',
                        fileName: info.video.title+`.mp4`,
                        caption :"     *乂 F A C E B O K - D O W  N D*  \n\n"+data
                        
                    }
                 vorterx.sendMessage(m.from, buttonMessage, { quoted: m });



})
  .catch(err => {m.reply("*NO video found Error*\n *Provide a valid  Url*");
			console.error(err);})
}};
