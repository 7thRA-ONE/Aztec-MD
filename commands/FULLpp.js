const Jimp = require("jimp");

module.exports = { 
  name: "fullpp",
  description: "Set fullpp on your dp",
  category: "Owner",
  start:async(vorterx,m,{prefix,text,toReact,pushName}) => {

    await toReact("✔️");
    let media = await vorterx.downloadAndSaveMediaMessage();
    await updateProfilePicture(m.user, media, m);
    return await m.reply("*Profile picture updated successfully*");
  }
  };

async function updateProfilePicture(user, imag, m) {
  await vorterx.query();
  const { img } = await generateProfilePicture(imag);
  await query({
    tag: "iq",
    attrs: {
      to: jid,
      type: "set",
      xmlns: "w:profile:picture",
    },
    content: [
      {
        tag: "picture",
        attrs: { type: "image" },
        content: img,
      },
    ],
  });
}

async function generateProfilePicture(buffer) {
  const jimp = await Jimp.read(buffer);
  const min = jimp.getWidth();
  const max = jimp.getHeight();
  const cropped = jimp.crop(0, 0, min, max);
  return {
    img: await cropped.scaleToFit(324, 720).getBufferAsync(Jimp.MIME_JPEG),
    preview: await cropped.normalize().getBufferAsync(Jimp.MIME_JPEG),
  };
         }
