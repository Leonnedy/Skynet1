let handler = async (m, { conn, args }) => {
  let users = m.mentionedJid
  conn.groupDemoteAdmin(m.chat, users)
}
handler.help = ['degradar','miembro','v'].map(v => 'o' + v + ' @user')
handler.tags = ['owner']
handler.command = /^(odegradar|omiembro|ov)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler