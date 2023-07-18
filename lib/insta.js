const axios = require("axios");
const fs = require("fs");
const cheerio = require("cheerio");

async function Insta(match) {
const result = []
const form = {
url: match,
submit: '',
	}
const { data } = await axios(`https://downloadgram.org/`, {
	method: 'POST',
data: form
})
const $ = cheerio.load(data)
 $('#downloadhere > a').each(function (a,b) {
	const url = $(b).attr('href')
if (url) result.push(url)
})
 return result
}
async function getJson(url, options) {
    try {
      options ? options : {};
      const res = await axios({
        method: "GET",
        url: url,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
        },
        ...options,
      });
      return res.data;
    } catch (err) {
      return err;
    }
  }

module.exports = {
	Insta,
	getJson
}
