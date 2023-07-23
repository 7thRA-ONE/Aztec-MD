module.exports = {
  name: "spee",
  description: "Speed checker",
  category: "user",
  start: async(vorterx,m,{prefix,toReact,text}) => {

const NetworkSpeed = require('network-speed');
const test = new NetworkSpeed()
const { tmpdir } = require('os');
      let old = new Date()
      let download = await getNetworkDownloadSpeed()
      async function getNetworkDownloadSpeed() {
         const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000'
         const fileSizeInBytes = 500000
         const speed = await test.checkDownloadSpeed(baseUrl, fileSizeInBytes)
         return speed
      }
      let upload = await getNetworkUploadSpeed()
      async function getNetworkUploadSpeed() {
         const options = {
            hostname: 'www.google.com',
            port: 80,
            path: tmpdir(),
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            }
         }
         const fileSizeInBytes = 2000000
         const speed = await test.checkUploadSpeed(options, fileSizeInBytes)
         return speed
      }
      let text = '◦ *Download* : ' + download.mbps + ' mbps\n'
      text += '◦ *Upload* : ' + upload.mbps + ' mbps\n'
      text += '◦ *Response* : ' + ((new Date - old) * 1) + ' ms'
      m.reply(m.from, text, m)
   }
};
