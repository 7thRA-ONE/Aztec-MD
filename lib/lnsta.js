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
