const fbInfoVideo = require('fb-info-video'); 

module.exports = {
  name: "fb",
  alias: ["facebook"],
  description: "To download Facebook videos",
  category: "Download",
  start: async(vorterx, m, { prefix, toReact, pushName }) => {
    
if(!text) { await toReact("⛔"); return m.reply(`*Give me fb url link*`);
          }
fbInfoVideo.getInfo(text)
  .then(info =>{
let vurl=info.video.url_video;


  let data  ="*Name     :* "+  info.video.title;
	data +="\n*Views    :* "+  info.video.view;
	data +="\n*Likes    :* "+info.video.reaction.Like ;

	data +=config.caption ;
                        let buttonMessage = {
                        video: {url:vurl},
                        mimetype: 'video/mp4',
                        fileName: info.video.title+`.mp4`,
                        caption :"     *FACEBOOK DOWNLOADER*  \n"+data
                        
                    }
                 message.client.sendMessage(message.jid, buttonMessage, { quoted: m });



})
  .catch(err => {message.reply("Error, Video Not Found\n *Please Give Me A Valid Url*");
			console.error(err);})
}
)
