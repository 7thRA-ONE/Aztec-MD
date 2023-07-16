module.exports = {
  name: "ping",
  description: "TO chek bot speeed",
  category: "General",
  start: async(vorterx, m, { prefix, toReact }) => {
  await toReact("🏇");
    
  var start = new Date().getTime();
  await vorterx.sendMessage("*Responding to speed*");
    var end = new Date().getTime();
    return await vorterx.sendMessage("*Response* " + (end - start));
         }
};
                          
