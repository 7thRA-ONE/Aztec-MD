module.exports = {
  name: "invite",
  description: "Group link",
  category: "Group",
  start: async(vorterx, m, { prefix, toReact, isAdmin, isBoAdmin, isGroup }) => {

  await toReact("✔️");
    let response = await vorterx.groupInviteCode(m.from)
                vorterx.sendText(m.from, `https://chat.whatsapp.com/${response}\n\n*乂Group* : ${groupMetadata.subject}`, m, { detectLink: true });
            }
    };
