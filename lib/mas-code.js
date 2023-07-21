/* Copyright (C) 2022 Amarok-MD.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Diegoson - Amarok-MD
*/

module.exports = new StyleText();
function StyleText() {
  this.tools = {
    flip: {
      init: function () {
        for (i in this.map) {
          this.map[this.map[i]] = i;
        }
      },

      encode: function (text) {
        var ret = [],
          ch;

        for (var i = 0, len = text.length; i < len; i++) {
          ch = text.charAt(i);
          if (
            i > 0 &&
            (ch == "\u0324" ||
              ch == "\u0317" ||
              ch == "\u0316" ||
              ch == "\u032e")
          ) {
            ch = this.map[text.charAt(i - 1) + ch];
            ret.pop();
          } else {
            ch = this.map[ch];
            if (typeof ch == "undefined") {
              ch = text.charAt(i);
            }
          }

          ret.push(ch);
        }

        return ret.reverse().join("");
      },

      decode: function (text) {
        var ret = [],
          ch;

        for (var i = 0, len = text.length; i < len; i++) {
          ch = text.charAt(i);
          if (
            i > 0 &&
            (ch == "\u0324" ||
              ch == "\u0317" ||
              ch == "\u0316" ||
              ch == "\u032e")
          ) {
            ch = this.map[text.charAt(i - 1) + ch];
            ret.pop();
          } else {
            ch = this.map[ch];
            if (typeof ch == "undefined") {
              ch = text.charAt(i);
            }
          }

          ret.push(ch);
        }
        return ret.reverse().join("");
      },

      map: {
        a: "\u0250",
        b: "q",
        c: "\u0254",
        d: "p",
        e: "\u01DD",
        f: "\u025F",
        g: "\u0253",
        h: "\u0265",
        i: "\u0131",
        j: "\u027E",
        k: "\u029E",
        l: "\u006C",
        m: "\u026F",
        n: "u",
        r: "\u0279",
        t: "\u0287",
        v: "\u028C",
        w: "\u028D",
        y: "\u028E",
        A: "\u2200",
        B: "ᙠ",
        C: "\u0186",
        D: "ᗡ",
        E: "\u018e",
        F: "\u2132",
        G: "\u2141",
        J: "\u017f",
        K: "\u22CA",
        L: "\u02e5",
        M: "W",
        P: "\u0500",
        Q: "\u038C",
        R: "\u1D1A",
        T: "\u22a5",
        U: "\u2229",
        V: "\u039B",
        Y: "\u2144",
        1: "\u21c2",
        2: "\u1105",
        3: "\u0190",
        4: "\u3123",
        5: "\u078e",
        6: "9",
        7: "\u3125",
        "&": "\u214b",
        ".": "\u02D9",
        '"': "\u201e",
        ";": "\u061b",
        "[": "]",
        "(": ")",
        "{": "}",
        "?": "\u00BF",
        "!": "\u00A1",
        "'": ",",
        "<": ">",
        "\u203E": "_",
        "\u00AF": "_",
        "\u203F": "\u2040",
        "\u2045": "\u2046",
        "\u2234": "\u2235",
        "\r": "\n",
        ß: "ᙠ",

        "\u0308": "\u0324",
        ä: "ɐ" + "\u0324",
        ö: "o" + "\u0324",
        ü: "n" + "\u0324",
        Ä: "\u2200" + "\u0324",
        Ö: "O" + "\u0324",
        Ü: "\u2229" + "\u0324",

        "´": " \u0317",
        é: "\u01DD" + "\u0317",
        á: "\u0250" + "\u0317",
        ó: "o" + "\u0317",
        ú: "n" + "\u0317",
        É: "\u018e" + "\u0317",
        Á: "\u2200" + "\u0317",
        Ó: "O" + "\u0317",
        Ú: "\u2229" + "\u0317",

        "`": " \u0316",
        è: "\u01DD" + "\u0316",
        à: "\u0250" + "\u0316",
        ò: "o" + "\u0316",
        ù: "n" + "\u0316",
        È: "\u018e" + "\u0316",
        À: "\u2200" + "\u0316",
        Ò: "O" + "\u0316",
        Ù: "\u2229" + "\u0316",

        "^": " \u032E",
        ê: "\u01DD" + "\u032e",
        â: "\u0250" + "\u032e",
        ô: "o" + "\u032e",
        û: "n" + "\u032e",
        Ê: "\u018e" + "\u032e",
        Â: "\u2200" + "\u032e",
        Ô: "O" + "\u032e",
        Û: "\u2229" + "\u032e",
      },
    },

    mirror: {
      init: function () {
        for (i in this.map) {
          this.map[this.map[i]] = i;
        }
      },

      encode: function (text) {
        var ret = [],
          ch,
          newLines = [];

        for (var i = 0, len = text.length; i < len; i++) {
          ch = text.charAt(i);

          if (
            i > 0 &&
            (ch == "\u0308" ||
              ch == "\u0300" ||
              ch == "\u0301" ||
              ch == "\u0302")
          ) {
            ch = this.map[text.charAt(i - 1) + ch];
            ret.pop();
          } else {
            ch = this.map[ch];
            if (typeof ch == "undefined") {
              ch = text.charAt(i);
            }
          }

          if (ch == "\n") {
            newLines.push(ret.reverse().join(""));
            ret = [];
          } else {
            ret.push(ch);
          }
        }
        newLines.push(ret.reverse().join(""));
        return newLines.join("\n");
      },

      decode: function (text) {
        var ret = [],
          ch,
          newLines = [];

        for (var i = 0, len = text.length; i < len; i++) {
          ch = text.charAt(i);

          if (
            i > 0 &&
            (ch == "\u0308" ||
              ch == "\u0300" ||
              ch == "\u0301" ||
              ch == "\u0302")
          ) {
            ch = this.map[text.charAt(i - 1) + ch];
            ret.pop();
          } else {
            ch = this.map[ch];
            if (typeof ch == "undefined") {
              ch = text.charAt(i);
            }
          }

          if (ch == "\n") {
            newLines.push(ret.reverse().join(""));
            ret = [];
          } else {
            ret.push(ch);
          }
        }

        newLines.push(ret.reverse().join(""));
        return newLines.join("\n");
      },

      map: {
        a: "ɒ",
        b: "d",
        c: "ɔ",
        e: "ɘ",
        f: "Ꮈ",
        g: "ǫ",
        h: "ʜ",
        j: "ꞁ",
        k: "ʞ",
        l: "|",
        n: "ᴎ",
        p: "q",
        r: "ɿ",
        s: "ꙅ",
        t: "ƚ",
        y: "ʏ",
        z: "ƹ",
        B: "ᙠ",
        C: "Ɔ",
        D: "ᗡ",
        E: "Ǝ",
        F: "ꟻ",
        G: "Ꭾ",
        J: "Ⴑ",
        K: "⋊",
        L: "⅃",
        N: "Ͷ",
        P: "ꟼ",
        Q: "Ọ",
        R: "Я",
        S: "Ꙅ",
        Z: "Ƹ",
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        "&": "",
        ";": "",
        "[": "]",
        "(": ")",
        "{": "}",
        "?": "⸮",
        "<": ">",

        ä: "ɒ" + "\u0308",
        ß: "ᙠ",

        "´": "`",
        é: "ɘ" + "\u0300",
        á: "ɒ" + "\u0300",
        ó: "ò",
        ú: "ù",
        É: "Ǝ" + "\u0300",
        Á: "À",
        Ó: "Ò",
        Ú: "Ù",

        "`": "´",
        è: "ɘ" + "\u0301",
        à: "ɒ" + "\u0301",
        È: "Ǝ" + "\u0301",

        ê: "ɘ" + "\u0302",
        â: "ɒ" + "\u0302",
        Ê: "Ǝ" + "\u0302",

        Ø: "ᴓ",
        ø: "ᴓ",
      },
    },

    creepify: {
      init: function () {
        for (var i = 768; i <= 789; i++) {
          this.diacriticsTop.push(String.fromCharCode(i));
        }

        for (var i = 790; i <= 819; i++) {
          if (i != 794 && i != 795) {
            this.diacriticsBottom.push(String.fromCharCode(i));
          }
        }
        this.diacriticsTop.push(String.fromCharCode(794));
        this.diacriticsTop.push(String.fromCharCode(795));

        for (var i = 820; i <= 824; i++) {
          this.diacriticsMiddle.push(String.fromCharCode(i));
        }

        for (var i = 825; i <= 828; i++) {
          this.diacriticsBottom.push(String.fromCharCode(i));
        }

        for (var i = 829; i <= 836; i++) {
          this.diacriticsTop.push(String.fromCharCode(i));
        }
        this.diacriticsTop.push(String.fromCharCode(836));
        this.diacriticsBottom.push(String.fromCharCode(837));
        this.diacriticsTop.push(String.fromCharCode(838));
        this.diacriticsBottom.push(String.fromCharCode(839));
        this.diacriticsBottom.push(String.fromCharCode(840));
        this.diacriticsBottom.push(String.fromCharCode(841));
        this.diacriticsTop.push(String.fromCharCode(842));
        this.diacriticsTop.push(String.fromCharCode(843));
        this.diacriticsTop.push(String.fromCharCode(844));
        this.diacriticsBottom.push(String.fromCharCode(845));
        this.diacriticsBottom.push(String.fromCharCode(846));
        this.diacriticsTop.push(String.fromCharCode(848));
        this.diacriticsTop.push(String.fromCharCode(849));
        this.diacriticsTop.push(String.fromCharCode(850));
        this.diacriticsBottom.push(String.fromCharCode(851));
        this.diacriticsBottom.push(String.fromCharCode(852));
        this.diacriticsBottom.push(String.fromCharCode(853));
        this.diacriticsBottom.push(String.fromCharCode(854));
        this.diacriticsTop.push(String.fromCharCode(855));
        this.diacriticsTop.push(String.fromCharCode(856));
        this.diacriticsBottom.push(String.fromCharCode(857));
        this.diacriticsBottom.push(String.fromCharCode(858));
        this.diacriticsTop.push(String.fromCharCode(859));
        this.diacriticsBottom.push(String.fromCharCode(860));
        this.diacriticsTop.push(String.fromCharCode(861));
        this.diacriticsTop.push(String.fromCharCode(861));
        this.diacriticsBottom.push(String.fromCharCode(863));
        this.diacriticsTop.push(String.fromCharCode(864));
        this.diacriticsTop.push(String.fromCharCode(865));
      },

      encode: function (text) {
        var newText = "",
          newChar;
        for (i in text) {
          newChar = text[i];
          if (this.options.middle) {
            newChar +=
              this.diacriticsMiddle[
                Math.floor(Math.random() * this.diacriticsMiddle.length)
              ];
          }

          if (this.options.top) {
            var diacriticsTopLength = this.diacriticsTop.length - 1;
            for (
              var count = 0,
                len =
                  this.options.maxHeight -
                  Math.random() *
                    ((this.options.randomization / 100) *
                      this.options.maxHeight);
              count < len;
              count++
            ) {
              newChar +=
                this.diacriticsTop[
                  Math.floor(Math.random() * diacriticsTopLength)
                ];
            }
          }

          if (this.options.bottom) {
            var diacriticsBottomLength = this.diacriticsBottom.length - 1;
            for (
              var count = 0,
                len =
                  this.options.maxHeight -
                  Math.random() *
                    ((this.options.randomization / 100) *
                      this.options.maxHeight);
              count < len;
              count++
            ) {
              newChar +=
                this.diacriticsBottom[
                  Math.floor(Math.random() * diacriticsBottomLength)
                ];
            }
          }

          newText += newChar;
        }
        return newText;
      },

      decode: function (text) {
        var newText = "",
          charCode;

        for (i in text) {
          charCode = text[i].charCodeAt(0);
          if (charCode < 768 || charCode > 865) {
            newText += text[i];
          }
        }
        return newText;
      },

      diacriticsTop: [],
      diacriticsMiddle: [],
      diacriticsBottom: [],

      options: {
        top: true,
        middle: true,
        bottom: true,
        maxHeight: 15,
        randomization: 100,
      },
    },

    bubbles: {
      init: function () {
        for (var i = 49; i <= 57; i++) {
          this.map[String.fromCharCode(i)] = String.fromCharCode(i + 9263);
        }
        this.map["0"] = "\u24ea";

        for (var i = 65; i <= 90; i++) {
          this.map[String.fromCharCode(i)] = String.fromCharCode(i + 9333);
        }

        for (var i = 97; i <= 122; i++) {
          this.map[String.fromCharCode(i)] = String.fromCharCode(i + 9327);
        }

        for (i in this.map) {
          this.mapInverse[this.map[i]] = i;
        }
      },

      encode: function (text) {
        var ret = "",
          ch,
          first = true;

        for (i in text) {
          ch = this.map[text[i]];

          if (typeof ch == "undefined") {
            if (text[i].charCodeAt(0) >= 33) {
              ch = text[i] + String.fromCharCode(8413);
              if (!first) {
                ch =
                  String.fromCharCode(8239) +
                  String.fromCharCode(160) +
                  String.fromCharCode(160) +
                  String.fromCharCode(8239) +
                  ch;
              }
            } else {
              ch = text[i];
            }
          }
          ret += ch;
          first = ch == "\n";
        }
        return ret;
      },

      decode: function (text) {
        var ret = "",
          ch,
          newRet = "";

        for (i in text) {
          ch = this.mapInverse[text[i]];
          ret += typeof ch == "undefined" ? text[i] : ch;
        }

        for (i in ret) {
          ch = ret[i].charCodeAt(0);
          if (ch != 160 && ch != 8239 && ch != 8413) {
            newRet += ret[i];
          }
        }

        return newRet;
      },

      map: {},
      mapInverse: {},
    },

    squares: {
      init: function () {},

      encode: function (text) {
        var ret = "",
          ch,
          first = true;

        for (i in text) {
          if (text[i].charCodeAt(0) >= 33) {
            ch = text[i] + String.fromCharCode(8414);
            if (!first) {
              ch =
                String.fromCharCode(8239) +
                String.fromCharCode(160) +
                String.fromCharCode(160) +
                String.fromCharCode(8239) +
                ch;
            }
          } else {
            ch = text[i];
          }

          ret += ch;
          first = ch == "\n";
        }
        return ret;
      },

      decode: function (text) {
        var ret = "",
          ch;

        for (i in text) {
          ch = text[i].charCodeAt(0);
          if (ch != 160 && ch != 8239 && ch != 8414) {
            ret += text[i];
          }
        }

        return ret;
      },
    },

    // Same as squares, just round.
    roundsquares: {
      init: function () {},

      encode: function (text) {
        var ret = "",
          ch,
          first = true;

        for (i in text) {
          if (text[i].charCodeAt(0) >= 33) {
            ch = text[i] + String.fromCharCode(8419);
            if (!first) {
              ch =
                String.fromCharCode(160) +
                String.fromCharCode(160) +
                String.fromCharCode(160) +
                ch;
            }
          } else {
            ch = text[i];
          }

          ret += ch;
          first = ch == "\n";
        }
        return ret;
      },

      decode: function (text) {
        var ret = "",
          ch;

        for (i in text) {
          ch = text[i].charCodeAt(0);
          if (ch != 160 && ch != 8239 && ch != 8419) {
            ret += text[i];
          }
        }

        return ret;
      },
    },

    bent: {
      init: function () {
        for (i in this.map) {
          this.map[this.map[i]] = i;
        }
      },

      encode: function (text) {
        var ret = "",
          ch;

        for (var i = 0, len = text.length; i < len; i++) {
          ch = this.map[text.charAt(i)];
          if (typeof ch == "undefined") {
            ch = text.charAt(i);
          }
          ret += ch;
        }

        return ret;
      },

      decode: function (text) {
        var ret = "",
          ch;

        for (var i = 0, len = text.length; i < len; i++) {
          ch = this.map[text.charAt(i)];
          if (typeof ch == "undefined") {
            ch = text.charAt(i);
          }
          ret += ch;
        }
        return ret;
      },

      map: {
        a: "ą",
        b: "ҍ",
        c: "ç",
        d: "ժ",
        e: "ҽ",
        f: "ƒ",
        g: "ց",
        h: "հ",
        i: "ì",
        j: "ʝ",
        k: "ҟ",
        l: "Ӏ",
        m: "ʍ",
        n: "ղ",
        o: "օ",
        p: "ք",
        q: "զ",
        r: "ɾ",
        s: "ʂ",
        t: "է",
        u: "մ",
        v: "ѵ",
        w: "ա",
        x: "×",
        y: "վ",
        z: "Հ",
        A: "Ⱥ",
        B: "β",
        C: "↻",
        D: "Ꭰ",
        E: "Ɛ",
        F: "Ƒ",
        G: "Ɠ",
        H: "Ƕ",
        I: "į",
        J: "ل",
        K: "Ҡ",
        L: "Ꝉ",
        M: "Ɱ",
        N: "ហ",
        O: "ට",
        P: "φ",
        Q: "Ҩ",
        R: "འ",
        S: "Ϛ",
        T: "Ͳ",
        U: "Ա",
        V: "Ỽ",
        W: "చ",
        X: "ჯ",
        Y: "Ӌ",
        Z: "ɀ",
        0: "⊘",
        1: "������",
        2: "ϩ",
        3: "Ӡ",
        4: "५",
        5: "Ƽ",
        6: "Ϭ",
        7: "7",
        8: "������",
        9: "९",
        "&": "⅋",
        "(": "{",
        ")": "}",
        "{": "(",
        "}": ")",

        ä: "ą" + "\u0308",
        ö: "օ" + "\u0308",
        ü: "մ" + "\u0308",
        Ä: "Ⱥ" + "\u0308",
        Ö: "ට" + "\u0308",
        Ü: "Ա" + "\u0308",

        é: "ҽ" + "\u0301",
        á: "ą" + "\u0301",
        ó: "օ" + "\u0301",
        ú: "մ" + "\u0301",
        É: "Ɛ" + "\u0301",
        Á: "Ⱥ" + "\u0301",
        Ó: "ට" + "\u0301",
        Ú: "Ա" + "\u0301",

        è: "ҽ" + "\u0300",
        à: "ą" + "\u0300",
        ò: "օ" + "\u0300",
        ù: "մ" + "\u0300",
        È: "Ɛ" + "\u0300",
        À: "Ⱥ" + "\u0300",
        Ò: "ට" + "\u0300",
        Ù: "Ա" + "\u0300",

        ê: "ҽ" + "\u0302",
        â: "ą" + "\u0302",
        ô: "օ" + "\u0302",
        û: "մ" + "\u0302",
        Ê: "Ɛ" + "\u0302",
        Â: "Ⱥ" + "\u0302",
        Ô: "ට" + "\u0302",
        Û: "Ա" + "\u0302",
      },
    },

    tiny: {
      init: function () {
        for (i in this.map) {
          this.map[this.map[i]] = i;
        }
      },

      encode: function (text) {
        var ret = "",
          ch;
        text = text.toUpperCase();
        for (var i = 0, len = text.length; i < len; i++) {
          ch = this.map[text.charAt(i)];
          if (typeof ch == "undefined") {
            ch = text.charAt(i);
          }
          ret += ch;
        }

        return ret;
      },

      decode: function (text) {
        var ret = "",
          ch;

        for (var i = 0, len = text.length; i < len; i++) {
          ch = this.map[text.charAt(i)];
          if (typeof ch == "undefined") {
            ch = text.charAt(i);
          }
          ret += ch;
        }
        return ret;
      },

      map: {
        A: "ᴀ",
        B: "ʙ",
        C: "ᴄ",
        D: "ᴅ",
        E: "ᴇ",
        F: "ꜰ",
        G: "ɢ",
        H: "ʜ",
        I: "ɪ",
        J: "ᴊ",
        K: "ᴋ",
        L: "ʟ",
        M: "ᴍ",
        N: "ɴ",
        O: "ᴏ",
        P: "ᴘ",
        Q: "Q",
        R: "ʀ",
        S: "ꜱ",
        T: "ᴛ",
        U: "ᴜ",
        V: "ᴠ",
        W: "ᴡ",
        X: "x",
        Y: "ʏ",
        Z: "ᴢ",
      },
    },
  };

  for (i in this.tools) {
    this.tools[i].init();
  }

  this.getHTML = function (text) {
    var html = "",
      ch,
      lastSpaceWasNonBreaking = true,
      highSurrogate = 0,
      codepoint = 0;

    for (var i = 0, len = text.length; i < len; i++) {
      ch = text.charCodeAt(i);

      if (ch == 10 || ch == 13) {
        html += "<br>\n";
        lastSpaceWasNonBreaking = true;
      } else if (ch == 32) {
        if (lastSpaceWasNonBreaking) {
          html += " ";
          lastSpaceWasNonBreaking = false;
        } else {
          html += "&nbsp;";
          lastSpaceWasNonBreaking = true;
        }
      } else {
        if (ch >= 0xd800 && ch <= 0xdbff) {
          highSurrogate = ch;
          codepoint = 0;
        } else if (highSurrogate > 0) {
          if (ch >= 0xdc00 && ch <= 0xdfff) {
            codepoint =
              (highSurrogate - 0xd800) * 1024 + (ch - 0xdc00) + 0x10000;
          }
          highSurrogate = 0;
        } else {
          codepoint = ch;
        }

        if (codepoint != 0) {
          html += "&#x" + codepoint.toString(16) + ";";
          lastSpaceWasNonBreaking = true;
        }
      }
    }

    return html;
  };
}

//function vorterx_0x5318(){var _0x54afa2=['122836SKnEJA','options','push','map','toString','246NOXBmK','getHTML','99CpVEAQ','middle','<br>\x0a','1963395CSRbNb','floor','reverse','23762SfXiqe','307435eZzrAa','diacriticsBottom','������','mapInverse','diacriticsTop','randomization','fromCharCode','undefined','charCodeAt','charAt','toUpperCase','11cToDER','maxHeight','length','exports','10678168xbjmpm','join','26511530XrFqjL','top','random','pop','init','12126564ILEuwN','28tGYyAw','tools','diacriticsMiddle','&nbsp;'];vorterx_0x5318=function(){return _0x54afa2;};return vorterx_0x5318();}var vorterx_0x1ea664=vorterx_0x5652;function vorterx_0x5652(_0x479b5c,_0x4e3ed5){var _0x5318f5=vorterx_0x5318();return vorterx_0x5652=function(_0x565275,_0x35d0c1){_0x565275=_0x565275-0xcd;var _0x33a3a2=_0x5318f5[_0x565275];return _0x33a3a2;},vorterx_0x5652(_0x479b5c,_0x4e3ed5);}(function(_0x4e8ad6,_0x3f41a7){var _0xf5a139=vorterx_0x5652,_0xb8ea56=_0x4e8ad6();while(!![]){try{var _0x284784=-parseInt(_0xf5a139(0xe4))/0x1*(-parseInt(_0xf5a139(0xea))/0x2)+parseInt(_0xf5a139(0xe7))/0x3+-parseInt(_0xf5a139(0xd9))/0x4*(parseInt(_0xf5a139(0xeb))/0x5)+parseInt(_0xf5a139(0xe2))/0x6*(-parseInt(_0xf5a139(0xdd))/0x7)+parseInt(_0xf5a139(0xd1))/0x8+parseInt(_0xf5a139(0xd8))/0x9+-parseInt(_0xf5a139(0xd3))/0xa*(parseInt(_0xf5a139(0xcd))/0xb);if(_0x284784===_0x3f41a7)break;else _0xb8ea56['push'](_0xb8ea56['shift']());}catch(_0x2c0214){_0xb8ea56['push'](_0xb8ea56['shift']());}}}(vorterx_0x5318,0xadc8d),module[vorterx_0x1ea664(0xd0)]=new StyleText());function StyleText(){var _0x2bf152=vorterx_0x1ea664;this[_0x2bf152(0xda)]={'flip':{'init':function(){var _0x5ec413=_0x2bf152;for(i in this[_0x5ec413(0xe0)]){this[_0x5ec413(0xe0)][this[_0x5ec413(0xe0)][i]]=i;}},'encode':function(_0x106aa5){var _0x51557d=_0x2bf152,_0x144362=[],_0x35b61c;for(var _0xd2b27b=0x0,_0x11c78f=_0x106aa5[_0x51557d(0xcf)];_0xd2b27b<_0x11c78f;_0xd2b27b++){_0x35b61c=_0x106aa5[_0x51557d(0xf4)](_0xd2b27b),_0xd2b27b>0x0&&(_0x35b61c=='̤'||_0x35b61c=='̗'||_0x35b61c=='̖'||_0x35b61c=='̮')?(_0x35b61c=this[_0x51557d(0xe0)][_0x106aa5[_0x51557d(0xf4)](_0xd2b27b-0x1)+_0x35b61c],_0x144362[_0x51557d(0xd6)]()):(_0x35b61c=this['map'][_0x35b61c],typeof _0x35b61c==_0x51557d(0xf2)&&(_0x35b61c=_0x106aa5[_0x51557d(0xf4)](_0xd2b27b))),_0x144362['push'](_0x35b61c);}return _0x144362[_0x51557d(0xe9)]()['join']('');},'decode':function(_0x3c1456){var _0x801250=_0x2bf152,_0x39ce36=[],_0x270559;for(var _0x4c58cc=0x0,_0x15ea54=_0x3c1456[_0x801250(0xcf)];_0x4c58cc<_0x15ea54;_0x4c58cc++){_0x270559=_0x3c1456[_0x801250(0xf4)](_0x4c58cc),_0x4c58cc>0x0&&(_0x270559=='̤'||_0x270559=='̗'||_0x270559=='̖'||_0x270559=='̮')?(_0x270559=this[_0x801250(0xe0)][_0x3c1456[_0x801250(0xf4)](_0x4c58cc-0x1)+_0x270559],_0x39ce36[_0x801250(0xd6)]()):(_0x270559=this[_0x801250(0xe0)][_0x270559],typeof _0x270559==_0x801250(0xf2)&&(_0x270559=_0x3c1456[_0x801250(0xf4)](_0x4c58cc))),_0x39ce36[_0x801250(0xdf)](_0x270559);}return _0x39ce36[_0x801250(0xe9)]()['join']('');},'map':{'a':'ɐ','b':'q','c':'ɔ','d':'p','e':'ǝ','f':'ɟ','g':'ɓ','h':'ɥ','i':'ı','j':'ɾ','k':'ʞ','l':'l','m':'ɯ','n':'u','r':'ɹ','t':'ʇ','v':'ʌ','w':'ʍ','y':'ʎ','A':'∀','B':'ᙠ','C':'Ɔ','D':'ᗡ','E':'Ǝ','F':'Ⅎ','G':'⅁','J':'ſ','K':'⋊','L':'˥','M':'W','P':'Ԁ','Q':'Ό','R':'ᴚ','T':'⊥','U':'∩','V':'Λ','Y':'⅄',0x1:'⇂',0x2:'ᄅ',0x3:'Ɛ',0x4:'ㄣ',0x5:'ގ',0x6:'9',0x7:'ㄥ','&':'⅋','.':'˙','\x22':'„',';':'؛','[':']','(':')','{':'}','?':'¿','!':'¡','\x27':',','<':'>','‾':'_','¯':'_','‿':'⁀','⁅':'⁆','∴':'∵','\x0d':'\x0a','ß':'ᙠ','̈':'̤','ä':'ɐ'+'̤','ö':'o'+'̤','ü':'n'+'̤','Ä':'∀'+'̤','Ö':'O'+'̤','Ü':'∩'+'̤','´':'\x20̗','é':'ǝ'+'̗','á':'ɐ'+'̗','ó':'o'+'̗','ú':'n'+'̗','É':'Ǝ'+'̗','Á':'∀'+'̗','Ó':'O'+'̗','Ú':'∩'+'̗','`':'\x20̖','è':'ǝ'+'̖','à':'ɐ'+'̖','ò':'o'+'̖','ù':'n'+'̖','È':'Ǝ'+'̖','À':'∀'+'̖','Ò':'O'+'̖','Ù':'∩'+'̖','^':'\x20̮','ê':'ǝ'+'̮','â':'ɐ'+'̮','ô':'o'+'̮','û':'n'+'̮','Ê':'Ǝ'+'̮','Â':'∀'+'̮','Ô':'O'+'̮','Û':'∩'+'̮'}},'mirror':{'init':function(){var _0x531866=_0x2bf152;for(i in this[_0x531866(0xe0)]){this[_0x531866(0xe0)][this[_0x531866(0xe0)][i]]=i;}},'encode':function(_0x15837f){var _0x367bb1=_0x2bf152,_0x5f0203=[],_0x5a86b5,_0x285469=[];for(var _0x2fb527=0x0,_0x3f7aa7=_0x15837f[_0x367bb1(0xcf)];_0x2fb527<_0x3f7aa7;_0x2fb527++){_0x5a86b5=_0x15837f[_0x367bb1(0xf4)](_0x2fb527),_0x2fb527>0x0&&(_0x5a86b5=='̈'||_0x5a86b5=='̀'||_0x5a86b5=='́'||_0x5a86b5=='̂')?(_0x5a86b5=this['map'][_0x15837f[_0x367bb1(0xf4)](_0x2fb527-0x1)+_0x5a86b5],_0x5f0203['pop']()):(_0x5a86b5=this[_0x367bb1(0xe0)][_0x5a86b5],typeof _0x5a86b5==_0x367bb1(0xf2)&&(_0x5a86b5=_0x15837f['charAt'](_0x2fb527))),_0x5a86b5=='\x0a'?(_0x285469[_0x367bb1(0xdf)](_0x5f0203[_0x367bb1(0xe9)]()['join']('')),_0x5f0203=[]):_0x5f0203[_0x367bb1(0xdf)](_0x5a86b5);}return _0x285469[_0x367bb1(0xdf)](_0x5f0203['reverse']()[_0x367bb1(0xd2)]('')),_0x285469[_0x367bb1(0xd2)]('\x0a');},'decode':function(_0x40012f){var _0x2b7074=_0x2bf152,_0x3bda0d=[],_0x4ba22e,_0x32f4b1=[];for(var _0x51ac53=0x0,_0x393d30=_0x40012f[_0x2b7074(0xcf)];_0x51ac53<_0x393d30;_0x51ac53++){_0x4ba22e=_0x40012f['charAt'](_0x51ac53),_0x51ac53>0x0&&(_0x4ba22e=='̈'||_0x4ba22e=='̀'||_0x4ba22e=='́'||_0x4ba22e=='̂')?(_0x4ba22e=this['map'][_0x40012f[_0x2b7074(0xf4)](_0x51ac53-0x1)+_0x4ba22e],_0x3bda0d['pop']()):(_0x4ba22e=this[_0x2b7074(0xe0)][_0x4ba22e],typeof _0x4ba22e==_0x2b7074(0xf2)&&(_0x4ba22e=_0x40012f[_0x2b7074(0xf4)](_0x51ac53))),_0x4ba22e=='\x0a'?(_0x32f4b1[_0x2b7074(0xdf)](_0x3bda0d[_0x2b7074(0xe9)]()[_0x2b7074(0xd2)]('')),_0x3bda0d=[]):_0x3bda0d[_0x2b7074(0xdf)](_0x4ba22e);}return _0x32f4b1[_0x2b7074(0xdf)](_0x3bda0d['reverse']()['join']('')),_0x32f4b1[_0x2b7074(0xd2)]('\x0a');},'map':{'a':'ɒ','b':'d','c':'ɔ','e':'ɘ','f':'Ꮈ','g':'ǫ','h':'ʜ','j':'ꞁ','k':'ʞ','l':'|','n':'ᴎ','p':'q','r':'ɿ','s':'ꙅ','t':'ƚ','y':'ʏ','z':'ƹ','B':'ᙠ','C':'Ɔ','D':'ᗡ','E':'Ǝ','F':'ꟻ','G':'Ꭾ','J':'Ⴑ','K':'⋊','L':'⅃','N':'Ͷ','P':'ꟼ','Q':'Ọ','R':'Я','S':'Ꙅ','Z':'Ƹ',0x1:'',0x2:'',0x3:'',0x4:'',0x5:'',0x6:'',0x7:'','&':'',';':'','[':']','(':')','{':'}','?':'⸮','<':'>','ä':'ɒ'+'̈','ß':'ᙠ','´':'`','é':'ɘ'+'̀','á':'ɒ'+'̀','ó':'ò','ú':'ù','É':'Ǝ'+'̀','Á':'À','Ó':'Ò','Ú':'Ù','`':'´','è':'ɘ'+'́','à':'ɒ'+'́','È':'Ǝ'+'́','ê':'ɘ'+'̂','â':'ɒ'+'̂','Ê':'Ǝ'+'̂','Ø':'ᴓ','ø':'ᴓ'}},'creepify':{'init':function(){var _0x253de0=_0x2bf152;for(var _0x327da9=0x300;_0x327da9<=0x315;_0x327da9++){this[_0x253de0(0xef)]['push'](String[_0x253de0(0xf1)](_0x327da9));}for(var _0x327da9=0x316;_0x327da9<=0x333;_0x327da9++){_0x327da9!=0x31a&&_0x327da9!=0x31b&&this['diacriticsBottom'][_0x253de0(0xdf)](String[_0x253de0(0xf1)](_0x327da9));}this['diacriticsTop'][_0x253de0(0xdf)](String[_0x253de0(0xf1)](0x31a)),this['diacriticsTop'][_0x253de0(0xdf)](String[_0x253de0(0xf1)](0x31b));for(var _0x327da9=0x334;_0x327da9<=0x338;_0x327da9++){this[_0x253de0(0xdb)][_0x253de0(0xdf)](String['fromCharCode'](_0x327da9));}for(var _0x327da9=0x339;_0x327da9<=0x33c;_0x327da9++){this[_0x253de0(0xec)][_0x253de0(0xdf)](String['fromCharCode'](_0x327da9));}for(var _0x327da9=0x33d;_0x327da9<=0x344;_0x327da9++){this[_0x253de0(0xef)]['push'](String['fromCharCode'](_0x327da9));}this['diacriticsTop'][_0x253de0(0xdf)](String['fromCharCode'](0x344)),this[_0x253de0(0xec)][_0x253de0(0xdf)](String[_0x253de0(0xf1)](0x345)),this[_0x253de0(0xef)]['push'](String[_0x253de0(0xf1)](0x346)),this['diacriticsBottom'][_0x253de0(0xdf)](String[_0x253de0(0xf1)](0x347)),this['diacriticsBottom'][_0x253de0(0xdf)](String[_0x253de0(0xf1)](0x348)),this[_0x253de0(0xec)]['push'](String[_0x253de0(0xf1)](0x349)),this[_0x253de0(0xef)][_0x253de0(0xdf)](String[_0x253de0(0xf1)](0x34a)),this[_0x253de0(0xef)]['push'](String[_0x253de0(0xf1)](0x34b)),this[_0x253de0(0xef)][_0x253de0(0xdf)](String['fromCharCode'](0x34c)),this['diacriticsBottom']['push'](String[_0x253de0(0xf1)](0x34d)),this[_0x253de0(0xec)][_0x253de0(0xdf)](String[_0x253de0(0xf1)](0x34e)),this[_0x253de0(0xef)][_0x253de0(0xdf)](String[_0x253de0(0xf1)](0x350)),this[_0x253de0(0xef)][_0x253de0(0xdf)](String['fromCharCode'](0x351)),this[_0x253de0(0xef)][_0x253de0(0xdf)](String['fromCharCode'](0x352)),this[_0x253de0(0xec)]['push'](String[_0x253de0(0xf1)](0x353)),this[_0x253de0(0xec)]['push'](String[_0x253de0(0xf1)](0x354)),this[_0x253de0(0xec)][_0x253de0(0xdf)](String['fromCharCode'](0x355)),this['diacriticsBottom'][_0x253de0(0xdf)](String[_0x253de0(0xf1)](0x356)),this[_0x253de0(0xef)][_0x253de0(0xdf)](String[_0x253de0(0xf1)](0x357)),this[_0x253de0(0xef)][_0x253de0(0xdf)](String[_0x253de0(0xf1)](0x358)),this[_0x253de0(0xec)][_0x253de0(0xdf)](String[_0x253de0(0xf1)](0x359)),this[_0x253de0(0xec)]['push'](String[_0x253de0(0xf1)](0x35a)),this['diacriticsTop'][_0x253de0(0xdf)](String[_0x253de0(0xf1)](0x35b)),this[_0x253de0(0xec)]['push'](String[_0x253de0(0xf1)](0x35c)),this['diacriticsTop']['push'](String[_0x253de0(0xf1)](0x35d)),this[_0x253de0(0xef)][_0x253de0(0xdf)](String[_0x253de0(0xf1)](0x35d)),this[_0x253de0(0xec)][_0x253de0(0xdf)](String[_0x253de0(0xf1)](0x35f)),this['diacriticsTop'][_0x253de0(0xdf)](String[_0x253de0(0xf1)](0x360)),this[_0x253de0(0xef)][_0x253de0(0xdf)](String[_0x253de0(0xf1)](0x361));},'encode':function(_0x4fedb9){var _0x536866=_0x2bf152,_0xd9410b='',_0x3bd3e1;for(i in _0x4fedb9){_0x3bd3e1=_0x4fedb9[i];this[_0x536866(0xde)][_0x536866(0xe5)]&&(_0x3bd3e1+=this[_0x536866(0xdb)][Math[_0x536866(0xe8)](Math[_0x536866(0xd5)]()*this[_0x536866(0xdb)][_0x536866(0xcf)])]);if(this['options'][_0x536866(0xd4)]){var _0x120e7b=this['diacriticsTop']['length']-0x1;for(var _0x501c31=0x0,_0xa03373=this['options'][_0x536866(0xce)]-Math[_0x536866(0xd5)]()*(this[_0x536866(0xde)]['randomization']/0x64*this[_0x536866(0xde)][_0x536866(0xce)]);_0x501c31<_0xa03373;_0x501c31++){_0x3bd3e1+=this[_0x536866(0xef)][Math['floor'](Math[_0x536866(0xd5)]()*_0x120e7b)];}}if(this[_0x536866(0xde)]['bottom']){var _0x1aceaf=this['diacriticsBottom'][_0x536866(0xcf)]-0x1;for(var _0x501c31=0x0,_0xa03373=this[_0x536866(0xde)][_0x536866(0xce)]-Math[_0x536866(0xd5)]()*(this[_0x536866(0xde)][_0x536866(0xf0)]/0x64*this['options']['maxHeight']);_0x501c31<_0xa03373;_0x501c31++){_0x3bd3e1+=this[_0x536866(0xec)][Math[_0x536866(0xe8)](Math[_0x536866(0xd5)]()*_0x1aceaf)];}}_0xd9410b+=_0x3bd3e1;}return _0xd9410b;},'decode':function(_0x5766d0){var _0x32c2a3=_0x2bf152,_0x42e8fe='',_0x331ad3;for(i in _0x5766d0){_0x331ad3=_0x5766d0[i][_0x32c2a3(0xf3)](0x0),(_0x331ad3<0x300||_0x331ad3>0x361)&&(_0x42e8fe+=_0x5766d0[i]);}return _0x42e8fe;},'diacriticsTop':[],'diacriticsMiddle':[],'diacriticsBottom':[],'options':{'top':!![],'middle':!![],'bottom':!![],'maxHeight':0xf,'randomization':0x64}},'bubbles':{'init':function(){var _0x32c37b=_0x2bf152;for(var _0x532a9e=0x31;_0x532a9e<=0x39;_0x532a9e++){this[_0x32c37b(0xe0)][String['fromCharCode'](_0x532a9e)]=String[_0x32c37b(0xf1)](_0x532a9e+0x242f);}this[_0x32c37b(0xe0)]['0']='⓪';for(var _0x532a9e=0x41;_0x532a9e<=0x5a;_0x532a9e++){this[_0x32c37b(0xe0)][String[_0x32c37b(0xf1)](_0x532a9e)]=String['fromCharCode'](_0x532a9e+0x2475);}for(var _0x532a9e=0x61;_0x532a9e<=0x7a;_0x532a9e++){this[_0x32c37b(0xe0)][String[_0x32c37b(0xf1)](_0x532a9e)]=String[_0x32c37b(0xf1)](_0x532a9e+0x246f);}for(_0x532a9e in this[_0x32c37b(0xe0)]){this[_0x32c37b(0xee)][this[_0x32c37b(0xe0)][_0x532a9e]]=_0x532a9e;}},'encode':function(_0x446198){var _0x484f33=_0x2bf152,_0x4d3d06='',_0x3dff17,_0x1ecaf6=!![];for(i in _0x446198){_0x3dff17=this[_0x484f33(0xe0)][_0x446198[i]],typeof _0x3dff17==_0x484f33(0xf2)&&(_0x446198[i][_0x484f33(0xf3)](0x0)>=0x21?(_0x3dff17=_0x446198[i]+String[_0x484f33(0xf1)](0x20dd),!_0x1ecaf6&&(_0x3dff17=String[_0x484f33(0xf1)](0x202f)+String[_0x484f33(0xf1)](0xa0)+String['fromCharCode'](0xa0)+String[_0x484f33(0xf1)](0x202f)+_0x3dff17)):_0x3dff17=_0x446198[i]),_0x4d3d06+=_0x3dff17,_0x1ecaf6=_0x3dff17=='\x0a';}return _0x4d3d06;},'decode':function(_0x2d548a){var _0x1d67ac=_0x2bf152,_0x3935d0='',_0x11bcf1,_0x3c4054='';for(i in _0x2d548a){_0x11bcf1=this[_0x1d67ac(0xee)][_0x2d548a[i]],_0x3935d0+=typeof _0x11bcf1==_0x1d67ac(0xf2)?_0x2d548a[i]:_0x11bcf1;}for(i in _0x3935d0){_0x11bcf1=_0x3935d0[i][_0x1d67ac(0xf3)](0x0),_0x11bcf1!=0xa0&&_0x11bcf1!=0x202f&&_0x11bcf1!=0x20dd&&(_0x3c4054+=_0x3935d0[i]);}return _0x3c4054;},'map':{},'mapInverse':{}},'squares':{'init':function(){},'encode':function(_0x554a93){var _0x4d7899=_0x2bf152,_0x32e2fe='',_0x402ae0,_0x3d998b=!![];for(i in _0x554a93){_0x554a93[i][_0x4d7899(0xf3)](0x0)>=0x21?(_0x402ae0=_0x554a93[i]+String[_0x4d7899(0xf1)](0x20de),!_0x3d998b&&(_0x402ae0=String[_0x4d7899(0xf1)](0x202f)+String[_0x4d7899(0xf1)](0xa0)+String['fromCharCode'](0xa0)+String[_0x4d7899(0xf1)](0x202f)+_0x402ae0)):_0x402ae0=_0x554a93[i],_0x32e2fe+=_0x402ae0,_0x3d998b=_0x402ae0=='\x0a';}return _0x32e2fe;},'decode':function(_0x5eadbb){var _0x2c5a30=_0x2bf152,_0x39befc='',_0x2d75f1;for(i in _0x5eadbb){_0x2d75f1=_0x5eadbb[i][_0x2c5a30(0xf3)](0x0),_0x2d75f1!=0xa0&&_0x2d75f1!=0x202f&&_0x2d75f1!=0x20de&&(_0x39befc+=_0x5eadbb[i]);}return _0x39befc;}},'roundsquares':{'init':function(){},'encode':function(_0x426f5a){var _0x596840=_0x2bf152,_0xd7961c='',_0x561aa0,_0x546eec=!![];for(i in _0x426f5a){_0x426f5a[i]['charCodeAt'](0x0)>=0x21?(_0x561aa0=_0x426f5a[i]+String['fromCharCode'](0x20e3),!_0x546eec&&(_0x561aa0=String[_0x596840(0xf1)](0xa0)+String[_0x596840(0xf1)](0xa0)+String[_0x596840(0xf1)](0xa0)+_0x561aa0)):_0x561aa0=_0x426f5a[i],_0xd7961c+=_0x561aa0,_0x546eec=_0x561aa0=='\x0a';}return _0xd7961c;},'decode':function(_0x3de32e){var _0x2862c3=_0x2bf152,_0x6f9295='',_0x2f2cbb;for(i in _0x3de32e){_0x2f2cbb=_0x3de32e[i][_0x2862c3(0xf3)](0x0),_0x2f2cbb!=0xa0&&_0x2f2cbb!=0x202f&&_0x2f2cbb!=0x20e3&&(_0x6f9295+=_0x3de32e[i]);}return _0x6f9295;}},'bent':{'init':function(){var _0xeb1eeb=_0x2bf152;for(i in this[_0xeb1eeb(0xe0)]){this[_0xeb1eeb(0xe0)][this['map'][i]]=i;}},'encode':function(_0x5b1315){var _0x2553e1=_0x2bf152,_0x5bdbaa='',_0x17ba52;for(var _0x5df97b=0x0,_0xa7005f=_0x5b1315[_0x2553e1(0xcf)];_0x5df97b<_0xa7005f;_0x5df97b++){_0x17ba52=this['map'][_0x5b1315[_0x2553e1(0xf4)](_0x5df97b)],typeof _0x17ba52==_0x2553e1(0xf2)&&(_0x17ba52=_0x5b1315['charAt'](_0x5df97b)),_0x5bdbaa+=_0x17ba52;}return _0x5bdbaa;},'decode':function(_0x14ea7c){var _0xaf7f87=_0x2bf152,_0x19423e='',_0x3ea363;for(var _0x187e08=0x0,_0xe60d7d=_0x14ea7c[_0xaf7f87(0xcf)];_0x187e08<_0xe60d7d;_0x187e08++){_0x3ea363=this[_0xaf7f87(0xe0)][_0x14ea7c[_0xaf7f87(0xf4)](_0x187e08)],typeof _0x3ea363==_0xaf7f87(0xf2)&&(_0x3ea363=_0x14ea7c[_0xaf7f87(0xf4)](_0x187e08)),_0x19423e+=_0x3ea363;}return _0x19423e;},'map':{'a':'ą','b':'ҍ','c':'ç','d':'ժ','e':'ҽ','f':'ƒ','g':'ց','h':'հ','i':'ì','j':'ʝ','k':'ҟ','l':'Ӏ','m':'ʍ','n':'ղ','o':'օ','p':'ք','q':'զ','r':'ɾ','s':'ʂ','t':'է','u':'մ','v':'ѵ','w':'ա','x':'×','y':'վ','z':'Հ','A':'Ⱥ','B':'β','C':'↻','D':'Ꭰ','E':'Ɛ','F':'Ƒ','G':'Ɠ','H':'Ƕ','I':'į','J':'ل','K':'Ҡ','L':'Ꝉ','M':'Ɱ','N':'ហ','O':'ට','P':'φ','Q':'Ҩ','R':'འ','S':'Ϛ','T':'Ͳ','U':'Ա','V':'Ỽ','W':'చ','X':'ჯ','Y':'Ӌ','Z':'ɀ',0x0:'⊘',0x1:'������',0x2:'ϩ',0x3:'Ӡ',0x4:'५',0x5:'Ƽ',0x6:'Ϭ',0x7:'7',0x8:_0x2bf152(0xed),0x9:'९','&':'⅋','(':'{',')':'}','{':'(','}':')','ä':'ą'+'̈','ö':'օ'+'̈','ü':'մ'+'̈','Ä':'Ⱥ'+'̈','Ö':'ට'+'̈','Ü':'Ա'+'̈','é':'ҽ'+'́','á':'ą'+'́','ó':'օ'+'́','ú':'մ'+'́','É':'Ɛ'+'́','Á':'Ⱥ'+'́','Ó':'ට'+'́','Ú':'Ա'+'́','è':'ҽ'+'̀','à':'ą'+'̀','ò':'օ'+'̀','ù':'մ'+'̀','È':'Ɛ'+'̀','À':'Ⱥ'+'̀','Ò':'ට'+'̀','Ù':'Ա'+'̀','ê':'ҽ'+'̂','â':'ą'+'̂','ô':'օ'+'̂','û':'մ'+'̂','Ê':'Ɛ'+'̂','Â':'Ⱥ'+'̂','Ô':'ට'+'̂','Û':'Ա'+'̂'}},'tiny':{'init':function(){var _0x51b761=_0x2bf152;for(i in this[_0x51b761(0xe0)]){this[_0x51b761(0xe0)][this['map'][i]]=i;}},'encode':function(_0x22dc9f){var _0x398b4d=_0x2bf152,_0x3d055d='',_0x130fca;_0x22dc9f=_0x22dc9f[_0x398b4d(0xf5)]();for(var _0x57faad=0x0,_0x5802d3=_0x22dc9f['length'];_0x57faad<_0x5802d3;_0x57faad++){_0x130fca=this[_0x398b4d(0xe0)][_0x22dc9f['charAt'](_0x57faad)],typeof _0x130fca==_0x398b4d(0xf2)&&(_0x130fca=_0x22dc9f[_0x398b4d(0xf4)](_0x57faad)),_0x3d055d+=_0x130fca;}return _0x3d055d;},'decode':function(_0x13aa34){var _0x47c6a8=_0x2bf152,_0x3956d0='',_0x119fc0;for(var _0x39357a=0x0,_0x4b003d=_0x13aa34[_0x47c6a8(0xcf)];_0x39357a<_0x4b003d;_0x39357a++){_0x119fc0=this[_0x47c6a8(0xe0)][_0x13aa34['charAt'](_0x39357a)],typeof _0x119fc0==_0x47c6a8(0xf2)&&(_0x119fc0=_0x13aa34['charAt'](_0x39357a)),_0x3956d0+=_0x119fc0;}return _0x3956d0;},'map':{'A':'ᴀ','B':'ʙ','C':'ᴄ','D':'ᴅ','E':'ᴇ','F':'ꜰ','G':'ɢ','H':'ʜ','I':'ɪ','J':'ᴊ','K':'ᴋ','L':'ʟ','M':'ᴍ','N':'ɴ','O':'ᴏ','P':'ᴘ','Q':'Q','R':'ʀ','S':'ꜱ','T':'ᴛ','U':'ᴜ','V':'ᴠ','W':'ᴡ','X':'x','Y':'ʏ','Z':'ᴢ'}}};for(i in this[_0x2bf152(0xda)]){this[_0x2bf152(0xda)][i][_0x2bf152(0xd7)]();}this[_0x2bf152(0xe3)]=function(_0x354b51){var _0x50144f=_0x2bf152,_0x3851e5='',_0x9896a7,_0x35d8b9=!![],_0x16ac0c=0x0,_0x1902c2=0x0;for(var _0x3b6b71=0x0,_0x268f75=_0x354b51[_0x50144f(0xcf)];_0x3b6b71<_0x268f75;_0x3b6b71++){_0x9896a7=_0x354b51['charCodeAt'](_0x3b6b71);if(_0x9896a7==0xa||_0x9896a7==0xd)_0x3851e5+=_0x50144f(0xe6),_0x35d8b9=!![];else{if(_0x9896a7==0x20)_0x35d8b9?(_0x3851e5+='\x20',_0x35d8b9=![]):(_0x3851e5+=_0x50144f(0xdc),_0x35d8b9=!![]);else{if(_0x9896a7>=0xd800&&_0x9896a7<=0xdbff)_0x16ac0c=_0x9896a7,_0x1902c2=0x0;else _0x16ac0c>0x0?(_0x9896a7>=0xdc00&&_0x9896a7<=0xdfff&&(_0x1902c2=(_0x16ac0c-0xd800)*0x400+(_0x9896a7-0xdc00)+0x10000),_0x16ac0c=0x0):_0x1902c2=_0x9896a7;_0x1902c2!=0x0&&(_0x3851e5+='&#x'+_0x1902c2[_0x50144f(0xe1)](0x10)+';',_0x35d8b9=!![]);}}}return _0x3851e5;};}
