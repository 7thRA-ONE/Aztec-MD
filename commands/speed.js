module.exports = {
  name: "ping",
  description: "TO chek bot speeed",
  category: "General",
  start: async(vorterx, m, { prefix }) => {
  await toReact("🏇");
    
  var new = new Date().getTime();
  const {amarok} = vorterx.sendMessage(m.from, {text: "*Responding to speed"*});
    var end = new Date().getTime();
    return await vorterx.sendMessage(m.from,{text: "*Response* "+ (end - new) *", m:amarok});
         }
                          );           
