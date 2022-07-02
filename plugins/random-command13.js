import qrcode from 'qrcode-terminal'
import fetch = from 'node-fetch'
import { servers, ytv } = from '../lib/y2mate.js'
import xfar = from 'xfarr-api'
import hxz = from "hxz-api"
import axios = from 'axios'
let limit = 1024354
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, isPrems, isOwner, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let imgr = flaaa.getRandom()

if (command == 'savefile') {
if (!text) throw `where is the path?\n\nexample:\n${usedPrefix + command} plugins/menu.js`
    if (!m.quoted.text) throw `reply code`
    let path = `${text}`
    await require('fs').writeFileSync(path, m.quoted.text)
    m.reply(`Saved ${path} to file!`)
    }
    
  }
handler.command = handler.help = ['savefile']
handler.tags = ['host']

export default handler