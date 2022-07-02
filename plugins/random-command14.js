import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import fs from 'fs'
import jimp from 'jimp'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'

    
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command, isPrems, isOwner }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let imgr = flaaa.getRandom()
let urut = text.split`|`
  let one = urut[1]
  let two = urut[2]
  let three = urut[3]
  let q = m.quoted ? m.quoted : m
  let img = await q.download?.()
  let url = await uploadImage(img)
  
if (command == 'amazon') {
if (!text) throw `Contoh:\n${usedPrefix + command} Teks`
let res = await fetch(`https://leyscoders-api.herokuapp.com/api/amazon-search?q=${text}&apikey=MIMINGANZ`)
let xx = await res.json()
let x = xx.result
let caption = `*Result:*
${x.item}
${x.review}
${x.rating}
${x.price}
${x.score}
${x.diskon}
${x.rating}
${x.url}
${x.sponsor}
${x.best_seller}
${x.amazon_prime}
`
await conn.sendButton(m.chat, caption, wm, x.thumb, [
                ['Get Picture', `${usedPrefix}get ${x.thumb}`]
            ], m, fdoc)
}

if (command == 'animanga') {
const { anima } = await fetch(`https://leyscoders-api.herokuapp.com/api/animanga?apikey=MIMINGANZ`)
  let teks = [...anima].map(v => {
    switch (v.type) {
      case 'anima': return `
📌 *${v.result.title}*
Url: ${v.result.url}
      `.trim()
    }
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, `${v.result.img}`, [
                ['Search!', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}

if (command == 'leys') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} baka

*List:*
• artikata
`

if (args[0] == 'artikata') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/arti-kata?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'artimimpi') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/artimimpi?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'artinama') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/artinama?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'kuadrat') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/bdr/kuadrat?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'kubik') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/bdr/kubik?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'beritanews') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/berita-news?apikey=MIMINGANZ`)
let xx = await f.json()
let x = xx.result
let caption = `*Result:*
${x.title}
${x.url}
`.trim()
await conn.sendButton(m.chat, caption, wm, x.img, [
                ['Get Picture', `${usedPrefix}get ${x.img}`]
            ], m, fdoc)
}
if (args[0] == 'antaranews') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/antara-news?apikey=MIMINGANZ`)
let xx = await f.json()
let x = xx.result
let caption = `*Result:*
${x.title}
${x.url}
`.trim()
await conn.sendButton(m.chat, caption, wm, x.img, [
                ['Get Picture', `${usedPrefix}get ${x.img}`]
            ], m, fdoc)
}
if (args[0] == 'byte') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/byte-converter?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'cekip') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/cekip?ip=${one}&apikey=MIMINGANZ`)
let xx = await f.json()
let x = xx.result
let caption = `*Result:*
${x.code_country}
${x.country}
${x.region_code}
${x.region_name}
${x.city}
${x.isp}
${x.zip_code}
${x.timezone}
${x.latitude}
${x.longitude}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'ceritahoror') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/cerita-horor?apikey=MIMINGANZ`)
let xx = await f.json()
let x = xx.result
let caption = `*Result:*
${x.title}
${x.desc}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'cerpen') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/cerpen?apikey=MIMINGANZ`)
let xx = await f.json()
let x = xx.result
let caption = `*Result:*
${x.title}
${x.pengarang}
${x.kategori}
${x.story}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'cersex') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/cersex?apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, x.gambar, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'count') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/count-date?tgl=${one}&bln=${two}&thn=${three}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'hujan') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/cuaca/hujan?apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
`
await conn.sendButton(m.chat, caption, wm, x.result, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'cuaca') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/cuaca?q=${one}&apikey=MIMINGANZ`)
let xx = await f.json()
let x = xx.result
let caption = `*Result:*
${x.Daerah}
${x.Latitude}
${x.Longitude}
${x.TimeZone}
${x.Temperature}
${x.Tanggal}
${x.Waktu}
${x.Hari}
${x.Cuaca}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'cuttly') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${one}&apikey=MIMINGANZ`)
let xx = await f.json()
let x = xx.result
let caption = `*Result:*
${x.title}
${x.full_link}
${x.create_at}
${x.hasil}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'darkjoke') {
let img = `https://leyscoders-api.herokuapp.com/api/darkjoke?apikey=MIMINGANZ`
let caption = `*Result:*
`
await conn.sendButton(m.chat, caption, wm, img, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'drakoron') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/drakor-ongoing?apikey=MIMINGANZ`)
let xx = await f.json()
let x = xx.result
let caption = `*Result:*
${x.title}
${x.genre}
${x.url}
`.trim()
await conn.sendButton(m.chat, caption, wm, x.img, [
                ['Get Picture', `${usedPrefix}get ${x.img}`]
            ], m, fdoc)
}
if (args[0] == 'fakta') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/fakta?apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'imgbb') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/imgbb?url=${url}&title=hafizh&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.url}
${x.delete_url}
`
await conn.sendButton(m.chat, caption, wm, x.img, [
                ['Get Picture', `${usedPrefix}get ${x.img}`]
            ], m, fdoc)
}
}

if (command == 'getaud') {
  let q = '128kbps'
  let v = args[0]
// Kocak
const yt = await youtubedl(v).catch(async () => await  youtubedlv2(v))
const dl_url = await yt.audio[q].download()
  const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
  
 await m.reply(`▢ Tɪᴛᴛʟᴇ: ${ttl}
▢  Sɪᴢᴇ: ${size}

▢ Ｌｏａｄｉｎｇ. . .`)
  await conn.sendFile(m.chat, dl_url, ttl + '.mp3', me, m, null, {
    asDocument: false
  })
  }
  
  if (command == 'getvid') {
  let qu = args[1] || '360'
  let q = qu + 'p'
  let v = args[0]

  let _thumb = {}
    try { _thumb = { jpegThumbnail: thumb2 } }
    catch (e) { }

// Kocak
const yt = await youtubedl(v).catch(async () => await  youtubedlv2(v))
const dl_url = await yt.video[q].download()
  const ttl = await yt.title
const size = await yt.video[q].fileSizeH
  
 await m.reply(`▢ Tɪᴛᴛʟᴇ: ${ttl}
▢  Sɪᴢᴇ: ${size}

▢ Ｌｏａｄｉｎｇ. . .`)
  await conn.sendMessage(m.chat, { [/^(?:-|--)doc$/i.test(args[1]) || null ? 'document' : 'video']: { url: dl_url }, fileName: `${me}.mp4`, mimetype: 'video/mp4', ..._thumb }, { quoted: m })
}

}
handler.command = handler.help = ['amazon', 'animanga', 'leys', 'getvid', 'getaud']
handler.tags = ['random']

export default handler
