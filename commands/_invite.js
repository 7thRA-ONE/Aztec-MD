module.exports = {
  name: "invite",
  description: "Group link",
  category: "Group",
  start: async(vorterx, m, { prefix, groupMetadata, toReact, isAdmin, isBoAdmin, isGroup }) => {

  await toReact("✔️");
    let response = await vorterx.groupInviteCode(m.from)
                return vorterx.sendMessage(m.from, `https://chat.whatsapp.com/${response}\n\n*乂Group* : ${metadata.subject}`, m, { detectLink: true });
            }
    };
