module.exports = {
  name: "weather",
  description: "Weather",
  category: "Search",
  start: async(vorterx,m,{ prefix,text,toReact}) => {

const axios = require("axios");
    if (!text) { await toReact("⛔"); return m.reply("*Give the location please*");
               }
    pp = `https://ibb.co/Tv6krMb][img]https://i.ibb.co/p0cxnjR/IMG-20230723-WA0009.jpg`;
    await toReact("🌟");
            let vorterxi = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let aztec = "*乂 W E A T H E R - S E A R C H*\n\n"
            aztec += `*◦Weather of  ${text}*\n\n`
            aztec += `*◦Weather:-* ${vorterxi.data.weather[0].main}\n`
            aztec += `*◦Description:-* ${vorterxi.data.weather[0].description}\n`
            aztec += `*◦Temperat:-* ${vorterxi.data.main.temp}\n`
            aztec += `*◦Moods:-* ${vorterxi.data.main.feels_like}\n`
            aztec += `*◦Pressure:-* ${vorterxi.data.main.pressure}\n`
            aztec += `*◦Humidity:-* ${vorterxi.data.main.humidity}\n`
            aztec += `*◦Humidity:-* ${vorterxi.data.wind.speed}\n`
            aztec += `*◦Latitude:-* ${vorterxi.data.coord.lat}\n`
            aztec += `*◦Longitude:-* ${vorterxi.data.coord.lon}\n`
            aztec += `*◦Country:-* ${vorterxi.data.sys.country}\n\n\n*©vorterx-team*`

           vorterx.sendMessage(
                m.from, {image: {url: pp},
                    text: aztec,
                }, {
                    quoted: m,
                }
           )
           } };
    
