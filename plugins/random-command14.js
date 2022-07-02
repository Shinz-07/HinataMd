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
let frnya = ['adReply', 'fakeig', 'ftroli', 'fkontak', 'fvn', 'ftextt', 'fliveLoc', 'ftoko', 'fdocs', 'fgclink', 'fgif', 'frep', 'fdoc']
let frx = frnya.getRandom()

let imgr = flaaa.getRandom()
let urut = text.split`|`
  let one = urut[1]
  let two = urut[2]
  let three = urut[3]
  
  
if (command == 'amazon') {
if (!text) throw `Contoh:\n${usedPrefix + command} Teks`
let res = await fetch(`https://leyscoders-api.herokuapp.com/api/amazon-search?q=${text}&apikey=MIMINGANZ`)
let xx = await res.json()
let x = xx.result
let caption = `*Result:*
*item:* ${x.item}
*review:* ${x.review}
*rating:* ${x.rating}
*price:* ${x.price}
*score:* ${x.score}
*diskon:* ${x.diskon}
*rating:* ${x.rating}
*url:* ${x.url}
*sponsor:* ${x.sponsor}
*best_seller:* ${x.best_seller}
*amazon_prime:* ${x.amazon_prime}
`
await conn.sendButton(m.chat, caption, wm, x.thumb, [
                ['Get Picture', `${usedPrefix}get ${x.thumb}`]
            ], m, frx)
}

if (command == 'animanga') {
const { result } = await fetch(`https://leyscoders-api.herokuapp.com/api/animanga?apikey=MIMINGANZ`)
  let teks = [...result].map(v => {
  `
📌 *${v.title}*
Url: ${v.url}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, `${v.result.img}`, [
                ['Search!', `${usedPrefix + command} ${text}`]
            ], m, frx)
}

if (command == 'leys') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} baka

*List:*
• artikata
• artimimpi
• artinama
• kuadrat
• kubik
• beritanews
• antaranews
• byte
• cekip
• ceritahoror
• cerpen
• cersex
• count
• hujan
• cuaca
• cuttly
• darkjoke
• drakoron
• fakta
• imgbb
`

if (args[0] == 'artikata') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/arti-kata?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, frx)
}
if (args[0] == 'artimimpi') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/artimimpi?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, frx)
}
if (args[0] == 'artinama') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/artinama?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, frx)
}
if (args[0] == 'kuadrat') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/bdr/kuadrat?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, frx)
}
if (args[0] == 'kubik') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/bdr/kubik?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, frx)
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
            ], m, frx)
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
            ], m, frx)
}
if (args[0] == 'byte') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/byte-converter?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, frx)
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
            ], m, frx)
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
            ], m, frx)
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
            ], m, frx)
}
if (args[0] == 'cersex') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/cersex?apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, x.gambar, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, frx)
}
if (args[0] == 'count') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/count-date?tgl=${args[1]}&bln=${args[2]}&thn=${args[3]}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, frx)
}
if (args[0] == 'hujan') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/cuaca/hujan?apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
`
await conn.sendButton(m.chat, caption, wm, x.result, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, frx)
}
if (args[0] == 'cuaca') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/cuaca?q=${one}&apikey=MIMINGANZ`)
let xx = await f.json()
let x = xx.result
let caption = `*Result:*
*Daerah:* ${x.Daerah}
*Latitude:* ${x.Latitude}
*Longitude:* ${x.Longitude}
*TimeZone:* ${x.TimeZone}
*Temperature:* ${x.Temperature}
*Tanggal:* ${x.Tanggal}
*Waktu:* ${x.Waktu}
*Hari:* ${x.Hari}
*Cuaca:* ${x.Cuaca}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, frx)
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
            ], m, frx)
}
if (args[0] == 'darkjoke') {
let img = `https://leyscoders-api.herokuapp.com/api/darkjoke?apikey=MIMINGANZ`
let caption = `*Result:*
`
await conn.sendButton(m.chat, caption, wm, img, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, frx)
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
            ], m, frx)
}
if (args[0] == 'fakta') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/fakta?apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, frx)
}
if (args[0] == 'imgbb') {
let q = m.quoted ? m.quoted : m
  let img = await q.download?.()
  let url = await uploadImage(img)
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/imgbb?url=${url}&title=${args[1]}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
Custom-Url: ${x.url}
Temp-Url: ${x.delete_url}
`
await conn.sendButton(m.chat, caption, wm, x.img, [
                ['Get Picture', `${usedPrefix}get ${x.img}`]
            ], m, frx)
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
  await conn.sendFile(m.chat, dl_url, ttl + '.mp3', wm, m, null, {
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
  await conn.sendMessage(m.chat, { [/^(?:-|--)doc$/i.test(args[1]) || null ? 'document' : 'video']: { url: dl_url }, fileName: `${wm}.mp4`, mimetype: 'video/mp4', ..._thumb }, { quoted: m })
}

}
handler.command = handler.help = ['amazon', 'animanga', 'leys', 'getvid', 'getaud']
handler.tags = ['random']

export default handler
