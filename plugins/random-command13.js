
import fetch = from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, usedPrefix, text, args, isPrems, isOwner, command }) => {

if (command == 'savefile') {
if (!text) throw `where is the path?\n\nexample:\n${usedPrefix + command} plugins/menu.js`
    if (!m.quoted.text) throw `reply code`
    let path = `${text}`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`Saved ${path} to file!`)
    }
    
  }
handler.command = handler.help = ['savefile']
handler.tags = ['host']

export default handler