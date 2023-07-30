module.exports = {
  name: "dice",
  description: "Funny game",
  category: "Games",
  start: async(vorterx,m,{prefix,toReact,text,args}) => {

  await toReact("🎲");
let vorterxi = ['⚀','⚁','⚂','⚃','⚄','⚅','⚁','⚁']
                let aztec = vorterxi[Math.floor(Math.random() * vorterxi.length)]
            	m.reply(aztec)
            	}
};
