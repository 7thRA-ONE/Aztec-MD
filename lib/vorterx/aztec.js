const fs = require("fs");
require("./vorterx");
module.exports = async (vorterx, m) => {
  try {
    let metadata = await vorterx.groupMetadata(m.id);
    let participants = m.participants;
    const myID = vorterx.user.id.split(":")[0] + "@s.whatsapp.net";
    let wel = await db.get("events");
    const wlc = wel || [];
    for (let num of participants) {
      try {
        ppuser = await vorterx.profilePictureUrl(num, "image");
      } catch {
        ppuser = "https://wallpapercave.com/wp/wp6960556.jpg";
      }

      if (m.action == "add" && wlc.includes(`${m.id}`)) {
        capt = `
*@${num.split("@")[0]}* *WELCOME MATE* ${metadata.subject}
       
*DESCRIPTION:*
        
${metadata.desc}`;

        vorterx.sendMessage(m.id, {
          image: { url: ppuser },
          mentions: [num],
          caption: capt,
        });
      } else if (m.action == "remove" && wlc.includes(`${m.id}`)) {
        vorterx.sendMessage(m.id, {
          text: `@${num.split("@")[0]} thanks for being in ${metadata.subject} but until we meet again`,
          mentions: [num],
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};
