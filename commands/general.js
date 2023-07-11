 module.exports = {
   name: 'alive',
   alias: ['alv'],
   category: 'Mics',
   description: 'Some virous commands in one',
   start: async(client, m, { prefix, botName, toReact }) => {
       let msg = `Hey ${pushName} This is ${botName} developed by Diegoson\n\n*👾Descripto: Whats script bot\n*🚦Botname: ${botName}\n*👾Prefix: ${prefix}\n*📲Version: 3.0.0\n\n\n*©️VORTERX`;
     await client.sendMessage(m.from, { image: pic, caption: msg }, { quoted: m});
        }
      }
