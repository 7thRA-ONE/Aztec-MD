const config = require("../config");

async function toReact(emoji) {
    const reactm = {
        react: {
            text: emoji,
            key: m.key,
        },
    };
    await vorterx.sendMessage(m.from, reactm);
}


module.exports = {
    name: "kick",
    alias: ["remove"],
    description: "remove Member from group",
    category: "Group",
    start: async (vorterx, m, { text, prefix, toReact, isBotAdmin, isAdmin, mentionByTag }) => {
        if (!isAdmin) {
            await toReact("⭕"); return m.reply(`*🔌This is admin only command*`);
        }
        if (!isBotAdmin) {
            await toReact("😭"); return m.reply(`*🔌I need to be an admin in order to use this command*`);
        }
        const mention = await mentionByTag
        if (!mention[0]) {
            await toReact("❌"); return m.reply(`*🤔No user found*`);
        }
        await toReact("🎊");
        await vorterx.groupParticipantsUpdate(m.from, [mention[0]], "remove")
        await vorterx.sendMessage(m.from, { text: `*🎊User has been removed by ${m.sender.pushname}*` }, { quoted: m })
    }
};

module.exports = {
    name: "group",
    description: "To close/open the group",
    category: "Group",
    start: async (vorterx, m, { text, prefix, isBotAdmin, isAdmin, args, pushName, toReact }) => {
        if (!isAdmin) {
            await toReact("🔇");
            return m.reply(`*🔇 This command can only be used by Admin*`);
        }

        if (!isBotAdmin) {
            await toReact("🔇");
            return m.reply(`*😥 I need to be admin in order to use this command*`);
        }

        if (args[0] === "open") {
            await toReact("🕳️");
            try {
                await vorterx.groupSettingUpdate(m.from, "not_announcement");
                await m.reply(`*🔇 Group has been opened by ${pushName}*`);
            } catch (err) {
                console.error(err);
                await m.reply(`Failed to open group: ${err}`);
            }
        } else if (args[0] === "close") {
            await toReact("💣");
            try {
                await vorterx.groupSettingUpdate(m.from, "announcement");
                await m.reply(`*🔇 Group has been closed by ${pushName}*`);
            } catch (err) {
                console.error(err);
                await m.reply(`Failed to close group: ${err}`);
            }
        }
    }
};
//-------------------[TAGINH ALL----
function vorterx_0x4da6(_0x49af70,_0x19de29){const _0x3710e0=vorterx_0x3710();return vorterx_0x4da6=function(_0x4da6df,_0x5d0b29){_0x4da6df=_0x4da6df-0x119;let _0x5a9ca8=_0x3710e0[_0x4da6df];return _0x5a9ca8;},vorterx_0x4da6(_0x49af70,_0x19de29);}const vorterx_0x5d892d=vorterx_0x4da6;function vorterx_0x3710(){const _0x345e09=['reply','1662636EpAyHP','╭─❮❮|\x20Tᴀɢɢɪɴɢ\x20Aʟʟ\x20|❯❯\x0a','*🔌This\x20command\x20is\x20for\x20admin\x20only*','4457720fYxKkv','1787890XKZaVI','80BgXJCp','862ynPazE','tagall','Group','msg','quoted','split','map','11YeNMmB','141028kmfJRC','7azuhNl','╰────────────⦿\x0a\x0a','544347gaYZmP','from','tag\x20members','exports','│\x20@','Check\x20this\x20Out!','572070EVBlSJ','248tnvypI'];vorterx_0x3710=function(){return _0x345e09;};return vorterx_0x3710();}(function(_0x11a24a,_0x304bc3){const _0x2c3021=vorterx_0x4da6,_0x537569=_0x11a24a();while(!![]){try{const _0x2692df=parseInt(_0x2c3021(0x12a))/0x1*(parseInt(_0x2c3021(0x132))/0x2)+parseInt(_0x2c3021(0x12c))/0x3+parseInt(_0x2c3021(0x120))/0x4+-parseInt(_0x2c3021(0x130))/0x5+parseInt(_0x2c3021(0x129))/0x6*(-parseInt(_0x2c3021(0x121))/0x7)+-parseInt(_0x2c3021(0x131))/0x8*(-parseInt(_0x2c3021(0x123))/0x9)+parseInt(_0x2c3021(0x12f))/0xa*(-parseInt(_0x2c3021(0x11f))/0xb);if(_0x2692df===_0x304bc3)break;else _0x537569['push'](_0x537569['shift']());}catch(_0x37adc1){_0x537569['push'](_0x537569['shift']());}}}(vorterx_0x3710,0x6243c),module[vorterx_0x5d892d(0x126)]={'name':vorterx_0x5d892d(0x119),'description':vorterx_0x5d892d(0x125),'category':vorterx_0x5d892d(0x11a),'start':async(_0x9631ac,_0x405f51,{text:_0x3d2405,prefix:_0x2d0f60,toReact:_0x1885f8,isBotAdmin:_0x3c4203,isAdmin:_0x2216d0,isMedia:_0x5c6826,participants:_0x4176d8})=>{const _0xafe575=vorterx_0x5d892d;if(!_0x2216d0)return await _0x1885f8('⭕'),_0x405f51[_0xafe575(0x12b)](_0xafe575(0x12e));if(!_0x3c4203)return await _0x1885f8('😭'),_0x405f51[_0xafe575(0x12b)]('*🔌I\x20need\x20to\x20be\x20an\x20admin\x20in\x20order\x20to\x20use\x20this\x20command*');if(!_0x5c6826)var _0x14aaee=_0x405f51['quoted']?_0x405f51[_0xafe575(0x11c)][_0xafe575(0x11b)]:_0x3d2405||'No\x20message';else _0x14aaee=_0xafe575(0x128);let _0x3a316a=_0xafe575(0x12d);for(let _0xb9385b of _0x4176d8){_0x3a316a+=_0xafe575(0x127)+_0xb9385b['id'][_0xafe575(0x11d)]('@')[0x0]+'\x0a';}_0x3a316a+=_0xafe575(0x122),await _0x1885f8('💘'),_0x9631ac['sendMessage'](_0x405f51[_0xafe575(0x124)],{'text':_0x3a316a,'mentions':_0x4176d8[_0xafe575(0x11e)](_0x453747=>_0x453747['id'])},{'quoted':_0x405f51});}});
//---------------[GROUP LEAVE]---

module.exports = {
    name: "leave",
    description: "To leave the gc",
    category: "group",
    start: async (vorterx, m, { prefix, toReact }) => {

        if (isAdmin) {
            await toReact("🚫"); return m.reply("*😐This cmd was prommamed for owner only*");
        }
        await toReact("👋");
        await vorterx.groupLeave(m.from)
    }
};
