export async function all(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
        let chat = global.db.data.chats[m.chat]
        if (chat.autodelvn && !m.fromMe && m.isBaileys && m.mtype === 'audioMessage' && m.msg.ptt && m.quoted) {
            let { key } = await m.reply('.delete', null, {
                messageId: '3EB0' + require('crypto').randomBytes(12).toString('hex')
            }).catch(_ => {})
            if (key) this.deleteMessage(m.chat, key)
        }
    }