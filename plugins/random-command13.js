
import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

// Fake 🤥
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

let imgr = flaaa.getRandom()

if (command == 'savefile') {
if (!text) throw `where is the path?\n\nexample:\n${usedPrefix + command} plugins/menu.js`
    if (!m.quoted.text) throw `reply code`
    let path = `${text}`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`Saved ${path} to file!`)
    }
    
if (command == 'cekfake') {
let ftroli = {quoted: { key: {participant : '0@s.whatsapp.net'}, message: { orderMessage: { itemCount: 2022, status: 1, surface: 1, message: wm, orderTitle: `✗ 𝐂𝐦𝐝: ${command}`, sellerJid: '0@s.whatsapp.net' } } }}
 let fkontak = {quoted: { key: {participant : '0@s.whatsapp.net'}, message: { 'contactMessage': { 'displayName': `✗ 𝐂𝐦𝐝: ${command}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}}
 let fvn = {quoted: { key: {participant : '0@s.whatsapp.net'},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "2022","ptt": "true"} } }}
 let floc = {quoted: { key: { participant : '0@s.whatsapp.net'}, message: { "liveLocationMessage": { "caption": `✗ 𝐂𝐦𝐝: ${command}`,"h": `${name}`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}} }}
 let ftoko = {quoted: { key: { participant : '0@s.whatsapp.net'},message: { "productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync('./thumbnail.jpg')}, "title": `✗ 𝐂𝐦𝐝: ${command}`, "description": `${wm}`, "currencyCode": "USD", "priceAmount1000": "2022", "retailerId": "Ghost", "productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}}
 let fdocs = {quoted: { key : { participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `✗ 𝐂𝐦𝐝: ${command}`,  jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }}}}
 let fgclink = {quoted: {key: {participant : '0@s.whatsapp.net'},message: {groupInviteMessage: {groupJid: "17608914335-1625305606@g.us",inviteCode: null,groupName: `✗ 𝐂𝐦𝐝: ${command}`,  caption: wm,  jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }} }}
 let fgif = {quoted: {key: { participant : '0@s.whatsapp.net'}, message: {  "videoMessage": {  "title": `✗ 𝐂𝐦𝐝: ${command}`, "h": `Hmm`, 'seconds': '999999999',  'gifPlayback': 'true',  'caption': wm, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg') } } } }
 let frnya = ['ftroli', 'fkontak', 'fvn', 'floc', 'ftoko', 'ftoko', 'fdocs', 'fgclink', 'fgif']
 if (!text) return m.reply(Array.from(frnya))
 await conn.sendButton(m.chat, `Fake ${text}`, wm, null, [
                ['Ok!', `${usedPrefix + command}`]
            ], text)
 
    }
    
  }
handler.command = handler.help = ['savefile', 'cekfake']
handler.tags = ['host']

export default handler