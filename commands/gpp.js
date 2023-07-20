if (!isAdmin) {
          await doReact("❌");
          return m.reply(`*You* must be *Admin* in order to use this Command!`);
        }
        if (!isBotAdmin) {
          await doReact("❌");
          return m.reply(`*Bot* must be *Admin* in order to use this Command!`);
        }

        if (!/image/.test(mime)) {
          await doReact("❌");
          return Atlas.sendMessage(
            m.from,
            {
              text: `Send/reply Image With Caption ${
                prefix + "setgcpp"
              } to change the Profile Pic of this group.`,
            },
            { quoted: m }
          );
        }
        await doReact("🎴");

        let quotedimage = await Atlas.downloadAndSaveMediaMessage(quoted);
        var { preview } = await generatePP(quotedimage);

        await Atlas.query({
          tag: "iq",
          attrs: {
            to: m.from,
            type: "set",
            xmlns: "w:profile:picture",
          },
          content: [
            {
              tag: "picture",
              attrs: { type: "image" },
              content: preview,
            },
          ],
        });
        fs.unlinkSync(quotedimage);

        ppgc = await Atlas.profilePictureUrl(m.from, "image");

        Atlas.sendMessage(
          m.from,
          {
            image: { url: ppgc },
            caption: `\nGroup Profile Picture has been updated Successfully by @${
              messageSender.split("@")[0]
            } !`,
            mentions: [messageSender],
          },
          { quoted: m }
        );
