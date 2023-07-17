const fs = require("fs");
const prefix = global.prefix;
const Collection = require("
                           
const readCommands = () => {
  let dir = path.join(__dirname, "./commands");
  let dirs = fs.readdirSync(dir);
  let cmdlist = {};
  try {
    dirs.forEach(async (res) => {
      let groups = res.toLowerCase();
      Commands.category = dirs.filter((v) => v !== "_").map((v) => v);
      cmdlist[groups] = [];
      let files = fs
        .readdirSync("./commands")
        .filter((file) => file.endsWith(".js"));
      for (const file of files) {
        const command = require(`../commands/${file}`);
        cmdlist[groups].push(command);
        Commands.set(command.name, command);
        delay(100);
      }
    });
    Commands.list = cmdlist;
  } catch (e) {
    console.error(e);
  }
};
