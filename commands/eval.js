require ('../config')
module.exports={
    name:"eval",
    react:"✅",
    description:"evaluates js codes",
    category:"Owner",
    start:async(vorterx,m,{text,ban,pushName,toReact,mentionByTag,iscreator,args,body,quoted,mime})=>{
    if(!iscreator) {await toReact("⛔"); return vorterx.sendMessage(m.from,{text:'*THIS cmd is for my owner only*'},{quoted:m});
                   }
      await toReact("✅");
        let out
        try {
            const result = eval(text)
            out = JSON.stringify(result, null, '\t') || 'Evaluated JavaScript'
        } catch (error) {
          m.reply(error.message)
        }
        return m.reply(out)
    
    }
      };
