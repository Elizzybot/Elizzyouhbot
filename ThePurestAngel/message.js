//Dark Angel Leonidas 
// 

const crypto = require("crypto")
const yts = require("yt-search")
const { Client } = require('ssh2');
const { ytmp3, ytmp4 } = require("ruhend-scraper")

const seller = JSON.parse(fs.readFileSync("./data/reseller.json"))
const ownplus = JSON.parse(fs.readFileSync("./data/owner.json"))
const list = JSON.parse(fs.readFileSync("./data/list.json"))

module.exports = async (shin, m, store) => {
try {
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ""
	
const budy = (typeof m.text == 'string' ? m.text : '') 
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const makeid = crypto.randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await shin.decodeJid(shin.user.id)
const isOwner = m.sender.split("@")[0] == global.owner ? true : m.fromMe ? true : ownplus.includes(m.sender)
const pushname = m.pushName || `${m.sender.split("@")[0]}`
const isBot = botNumber.includes(m.sender)
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson, resize, sleep } = require('./system/function.js')

m.isGroup = m.chat.endsWith("g.us")
m.metadata = m.isGroup ? (await shin.groupMetadata(m.chat).catch(_ => {}) || {}) : {}
m.isAdmin = m.metadata && m.metadata.participants ? (m.metadata.participants.find(e => e.admin !== null && e.id == m.sender) || false) : false
m.isBotAdmin = m.metadata && m.metadata.participants ? (m.metadata.participants.find(e => e.admin !== null && e.id == botNumber) || false) : false


// >~~~~~~~~~ Database ~~~~~~~~~~~< //

if (m.isGroup) {
const chat = db.groups[m.chat]
if (chat) {
if (!("antilink" in chat)) chat.antilink = false
if (!("antilink2" in chat)) chat.antilink2 = false
} else {
db.groups[m.chat] = {
antilink: false, 
antilink2: false
}
}}

if (!isCmd) {
let check = list.find(e => e.cmd == budy.toLowerCase())
if (check) {
await m.reply(check.respon)
}}

// >~~~~~~~~ Database User ~~~~~~~~< //

const isReseller = seller.includes(m.sender) ? true : isOwner

// >~~~~~~~~ Fake Quoted ~~~~~~~~~~< //

const qchannel = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {
newsletterAdminInviteMessage: {newsletterJid: `0@newsletter`, newsletterName: `Hore`, jpegThumbnail: "", caption: `Powered By ${namaowner}`, inviteExpiration: 0 }}}

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `Powered By ${namabot}`}}}

const qcmd = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `WhatsApp Bot By ${namaowner}`, "description": null, "currencyCode": "IDR", "priceAmount1000": "99999999999999999", "retailerId": `P`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

// >~~~~~~~~~~ Function ~~~~~~~~~~~< //

const example = async (teks) => {
const commander = ` *Try This :*\n*${cmd}* ${teks}`
return m.reply(commander)
}

const capital = (string) => {
return string.charAt(0).toUpperCase() + string.slice(1);
}

if (isCmd) {
console.log(chalk.white.bgCyan.bold(namabot), chalk.blue.bold(`[ PESAN ]`), chalk.blue.bold(`DARI`), chalk.blue.bold(`${m.sender.split("@")[0]}`), chalk.blue.bold(`Text :`), chalk.blue.bold(`${cmd}`))
}
if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(budy) && !isOwner && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await shin.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await shin.sendMessage(m.chat, {text: `*乂 Link Grup Terdeteksi*

\`\`\`@${m.sender.split("@")[0]} Maaf pesan kamu saya akan saya hapus, karena admin atau ownerbot telah menyalakan fitur antilink grup lain!\`\`\``, mentions: [m.sender]}, {quoted: m})
await shin.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await shin.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(budy) && !isOwner && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await shin.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await shin.sendMessage(m.chat, {text: `*乂 Link Grup Terdeteksi*

\`\`\`@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin atau ownerbot telah menyalakan fitur antilink grup lain!\`\`\``, mentions: [m.sender]}, {quoted: m})
await shin.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
//await shin.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}

// >~~~~~~~~~ Command ~~~~~~~~~~< //

switch (command) {
case "menu": case "menu": {
const textnya = ` 
 *Hey,@${m.sender.split("@")[0]}* *I'm DarkMods Cpanel⁩* *Je Suis Un Bot Automatique Capable De Créer Des Panels Et De Faciliter La Gestion De Panel Admin* !.
 
 > 𝙳𝙰𝚁𝙺𝙼𝙾𝙳𝚂
 > 𝙳𝙰𝚁𝙺 𝙰𝙽𝙶𝙴𝙻 𝙻𝙴𝙾𝙽𝙸𝙳𝙰𝚂
 > 𝙻𝙾𝚁𝙳 𝙳𝙰𝚁𝙺

 *— Information Bot —*
  ▢ 𝙱𝙾𝚃𝙽𝙰𝙼𝙴 : *𝙳𝙰𝚁𝙺𝙼𝙾𝙳𝚂 𝙲𝙿𝙰𝙽𝙴𝙻*
  ▢ Mode : *${shin.public ? "Public" : "Self"}*
  ▢ 𝙲𝚁𝙴𝙰𝚃𝙸𝙾𝙽 : @${global.namaowner} 
  ▢ ${runtime(process.uptime())}
  ▢ 𝚅𝙴𝚁𝚂𝙸𝙾𝙽 : 1.0.0
  
  *< 🌹 PANEL MENU 🌹 >*
    ☆ .1gb username
    ☆ .2gb username
    ☆ .3gb username
    ☆ .4gb username
    ☆ .5gb username
    ☆ .6gb username
    ☆ .7gb username
    ☆ .8gb username
    ☆ .9gb username
    ☆ .10gb username
    ☆ .unli username
    ☆ .cadmin
    ☆ .listpanel
    ☆ .listadmin
    ☆ .delpanel
    ☆ .deladmin
   
 *< 🛒 Storemenu 🛒 >*
   ☆ .proses
   ☆ .done
   ☆ .dana
   ☆ .gopay
   ☆ .ovo
   ☆ .qris
   
 *< ⚡ Othermenu ⚡ >*
   ☆ .tourl
   ☆ .sticker
   ☆ .qc
   ☆ .opengc
   ☆ .listgc
   ☆ .closegc
   
 *< ⚔️ Groupmenu ⚔️ >*
   ☆ .open
   ☆ .close
   ☆ .kick/kik
   ☆ .hidetag/ht
   
 *< 💎 Ownermenu 💎 >*
   ☆ .addseller
   ☆ .delseller
   ☆ .listseller
   ☆ .addowner
   ☆ .delowner
   ☆ .listowner
   ☆ .jpm
   ☆ .hidetag
   ☆ .self
   ☆ .public
   
*☆ 𝗙𝗢𝗟𝗟𝗢𝗪 𝗠𝗬 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 ☆*
https://whatsapp.com/channel/0029VamzCT5GzzKRylqvj33l

© 𝙿𝙾𝚆𝙴𝚁𝚁𝙴𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺𝙼𝙾𝙳𝚂`
await shin.sendMessage(m.chat, {
  image: { url: './media/shamiru.jpg' },
  caption: textnya,
  mentions: [m.sender, global.owner+"@s.whatsapp.net"]
})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "addseller": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return example("237XX atau @tag")
let input = m.quoted ? m.quoted.sender : m.mentionedJid ? m.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
if (!input) return example("237XX atau @tag")
if (seller.includes(input)) return m.reply(`Nomor ${input.split("@")[0]} sudah terdaftar sebagai reseller panel!`)
if (input == botNumber) return m.reply(`Nomor ${input.split("@")[0]} sudah terdaftar sebagai reseller panel!`)
if (input.split("@")[0] == global.owner) return m.reply(`Nomor ${input.split("@")[0]} sudah terdaftar sebagai reseller panel!`)
await seller.push(input)
await fs.writeFileSync("./data/reseller.json", JSON.stringify(seller, null, 2))
return m.reply(`Sukses menjadikan ${input.split("@")[0]} sebagai *reseller panel*`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "idgc": {
if (!m.isGroup) return m.reply(msg.group)
return m.reply(m.chat)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "delseller": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return example("237XX atau @tag")
let input = m.quoted ? m.quoted.sender : m.mentionedJid ? m.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
if (!input) return example("237XX atau @tag")
if (!seller.includes(input)) return m.reply(`Nomor ${input.split("@")[0]} tidak terdaftar sebagai reseller panel!`)
if (input == botNumber) return m.reply(`Nomor ${input.split("@")[0]} tidak terdaftar sebagai reseller panel!`)
if (input.split("@")[0] == global.owner) return m.reply(`Nomor ${input.split("@")[0]} tidak terdaftar sebagai reseller panel!`)
const posi = seller.indexOf(input)
await seller.splice(posi, 1)
await fs.writeFileSync("./data/reseller.json", JSON.stringify(seller, null, 2))
return m.reply(`Sukses menghapus ${input.split("@")[0]} sebagai *reseller panel*`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "listseller": {
if (seller.length < 1) return m.reply("Tidak ada reseller panel!")
var teks = "\n *乂 List Reseller Panel Pterodactyl*\n"
for (let i of seller) {
teks += `\n * @${i.split("@")[0]}\n`
}
await shin.sendMessage(m.chat, {text: teks, mentions: seller}, {quoted: qchannel})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "addown": case "addowner": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return example("237XX atau @tag")
let input = m.quoted ? m.quoted.sender : m.mentionedJid ? m.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
if (!input) return example("237XX atau @tag")
if (ownplus.includes(input)) return m.reply(`Nomor ${input.split("@")[0]} sudah terdaftar sebagai owner!`)
if (input == botNumber) return m.reply(`Nomor ${input.split("@")[0]} sudah terdaftar sebagai owner!`)
if (input.split("@")[0] == global.owner) return m.reply(`Nomor ${input.split("@")[0]} sudah terdaftar sebagai owner!`)
await ownplus.push(input)
await fs.writeFileSync("./data/owner.json", JSON.stringify(ownplus, null, 2))
return m.reply(`Sukses menjadikan ${input.split("@")[0]} sebagai *owner*`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "delown": case "delowner": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return example("237XX atau @tag")
let input = m.quoted ? m.quoted.sender : m.mentionedJid ? m.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
if (!input) return example("237XX atau @tag")
if (!ownplus.includes(input)) return m.reply(`Nomor ${input.split("@")[0]} tidak terdaftar sebagai owner!`)
if (input == botNumber) return m.reply(`Nomor ${input.split("@")[0]} tidak terdaftar sebagai owner!`)
if (input.split("@")[0] == global.owner) return m.reply(`Nomor ${input.split("@")[0]} tidak terdaftar sebagai owner!`)
const posi = ownplus.indexOf(input)
await ownplus.splice(posi, 1)
await fs.writeFileSync("./data/owner.json", JSON.stringify(ownplus, null, 2))
return m.reply(`Sukses menghapus ${input.split("@")[0]} sebagai *owner*`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "jpm": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return example("teksnya & foto (opsional)")
let rest
if (/image/.test(mime)) {
rest = await shin.downloadAndSaveMediaMessage(qmsg)
}
const allgrup = await shin.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const ttks = text
const pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks } : { text: ttks }
const jid = m.chat
await m.reply(`Memproses ${rest !== undefined ? "jpm teks & foto" : "jpm teks"} ke ${res.length} grup chat`)
try {
await shin.sendMessage(global.idsaluran, pesancoy)
} catch {}

for (let i of res) {
try {
await shin.sendMessage(i, pesancoy, {quoted: qchannel})
count += 1
} catch {}
await sleep(4000)
}
if (rest !== undefined) await fs.unlinkSync(rest)
await shin.sendMessage(jid, {text: `Jpm ${rest !== undefined ? "teks & foto" : "teks"} berhasil dikirim ke ${count} grup`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listgc": case "listgrup": {
if (!isOwner) return
let teks = ` *── List all group chat*\n`
let a = await shin.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "done": case "proses": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return example("jasa install panel")
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linksaluran}`
await shin.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `${command == "done" ? "Transaksi Done ✅" : "Dana Masuk ✅"}`, 
body: `© Powered By ${namaowner}`, 
thumbnailUrl: global.image, 
sourceUrl: linksaluran,
}}}, {quoted: null})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "panel": {
m.reply(`
*List Panel Run Bot Private*

* Ram 1GB : 1k

* Ram 2 GB : 2k

* Ram 3 GB : 3k

* Ram 4 GB : 4k

* Ram 5 GB : 5k

* Ram 6 GB : 6k

* Ram 7 GB : 7k

* Ram 8 GB : 8k

* Ram 9 GB : 9k

* Ram Unlimited : 10k

* Admin Panel : 15k

*Avantages & Benefices :*
* _Après Avoir Payer,Si Ton Panel Se Off Ou Est Supprimer,Tu Reçois Un Automatiquement_
* _Tu Reçois Un Script De Ton Choix (Bug Bot x Cpanel x Md Bot)_
* _Le Panel Peut Faire Un Mois Ou Plus (Renouvellement Uniquement Si Vous Avez Payer)_
* _Les Seveurs Sont Très Rapides!_
* _Impossible D'être Remboursée_*

© 𝙿𝙾𝚆𝙴𝚁𝚁𝙴𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺𝙼𝙾𝙳𝚂
`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "dana": {
let tekspay = `
*Dana :* ${global.dana}
`
return shin.sendText(m.chat, tekspay, qtext)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "ovo": {
let tekspay = `
*Ovo :* ${global.ovo}
`
return shin.sendText(m.chat, tekspay, qtext)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "gopay": {
let tekspay = `
*Gopay :* ${global.gopay}
`
return shin.sendText(m.chat, tekspay, qtext)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "qris": {
return shin.sendMessage(m.chat, {image: {url: global.qris}}, {quoted: qtext})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "listown": case "listowner": {
if (ownplus.length < 1) return m.reply("Tidak ada owner tambahan!")
var teks = "\n *乂 List All Owner Bot*\n"
teks += `\n @${global.owner}\n`
for (let i of ownplus) {
teks += `\n * @${i.split("@")[0]}\n`
}
await shin.sendMessage(m.chat, {text: teks, mentions: ownplus}, {quoted: qchannel})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "tourl": {
if (!/image/.test(mime)) return example("dengan kirim/reply foto")
let media = await shin.downloadAndSaveMediaMessage(qmsg)
//m.reply("🚀 Memproses uploading image . . ")
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('darkmods.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'imgtmp.jpg')
let teks = directLink.toString()
await shin.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "qc": {
if (!text) return example('teksnya')
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
let ppuser
try {
ppuser = await shin.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/c6fbacafe23d6ab6a801e.jpg'
}
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
m.reply(msg.wait)
const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": reswarna,
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.pushName,
            "photo": {
               "url": ppuser
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   try {
   const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
shin.sendStimg(m.chat, buffer, m, { packname: global.packname })
   } catch (error) {
   m.reply(error.toString())
   }
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return m.reply(msg.group)
if (!isOwner && !m.isAdmin) return m.reply(msg.admin)
if (!m.isBotAdmin) return m.reply(msg.botadmin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await shin.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await shin.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "kick": case "bye": {
if (!m.isGroup) return m.reply(msg.group)
if (!isOwner && !m.isAdmin) return m.reply(msg.admin)
if (!m.isBotAdmin) return m.reply(msg.botadmin)
if (text || m.quoted) {
const input = m.mentionedJid ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await shin.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await shin.groupParticipantsUpdate(m.chat, [input], 'remove')
} else {
return example("@tag/reply")
}
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "ht": case "hidetag": {
if (!m.isGroup) return m.reply(msg.group)
if (!isOwner && !m.isAdmin) return m.reply(msg.admin)
if (!text) return example("pesannya")
let member = m.metadata.participants.map(v => v.id)
await shin.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "sticker": case "stiker": case "sgif": case "s": {
if (!/image|video/.test(mime)) return example("dengan mengirim foto/vidio")
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
}
m.reply(msg.wait)
var media = await shin.downloadAndSaveMediaMessage(qmsg)
await shin.sendStimg(m.chat, media, m, {packname: "Whatsapp Bot 2025"})
await fs.unlinkSync(media)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "stickerwm": case "swn": case "wm": {
if (!text) return example("namamu & mengirim foto/vidio")
if (!/image|video/.test(mime)) return example("namamu & mengirim foto/vidio")
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
}
m.reply(msg.wait)
var media = await shin.downloadAndSaveMediaMessage(qmsg)
await shin.sendStimg(m.chat, media, m, {packname: text})
await fs.unlinkSync(media)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "public": {
if (!isOwner) return m.reply(msg.owner)
shin.public = true
m.reply("`*Public Mode On*`")
}
break

case "self": {
if (!isOwner) return m.reply(msg.owner)
shin.public = false
m.reply("`*Self Mode On*`")
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isOwner && !isReseller) return m.reply(`Maaf fitur ini hanya untuk *reseller panel*!\nBeli akses *reseller panel* langsung chat ${global.owner}`)
if (!text) return example("username,628XXX")
let nomor
let usernem
let tek = text.split(",")
if (tek.length > 1) {
let [users, nom] = text.split(",")
if (!users || !nom) return example("username,628XXX")
nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
usernem = users.toLowerCase()
} else {
usernem = text.toLowerCase()
nomor = m.isGroup ? m.sender : m.chat
}

var onWa = await shin.onWhatsApp(nomor.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor target tidak terdaftar di whatsapp!")
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}

let username = usernem.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " - DarkMods"
let password = username+crypto.randomBytes(3).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang = nomor
        if (m.isGroup) {
        await m.reply(`Je Suis DarkMods,Et Je Viens De T'accorder La Grâce D'avoir🌹 \nUn De Mes Panels ${nomor == m.sender ? "private chat" : nomor.split("@")[0]}`)
        }        
        if (nomor !== m.sender && !m.isGroup) {
        await m.reply(`Je Suis DarkMods,Et Je Viens De T'accorder La Grâce D'avoir 🌹\nUn De Mes Panels ${nomor.split("@")[0]}`)
        }
var teks = `
*DarkMods Is The Best Angel Ever Seen On Earth *

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}
*🗓️ ${tanggal(Date.now())}*

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domain}

My Channel: https://whatsapp.com/channel/0029VamzCT5GzzKRylqvj33l
`
await shin.sendMessage(orang, {
  image: { url: './media/shamiru.jpg' },
  caption: teks
})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "listpanel": case "listp": case "listserver": {
if (!isOwner && !isReseller) return m.reply(`Maaf fitur ini hanya untuk *reseller panel*!\nBeli akses *reseller panel* langsung chat ${global.owner}`)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak ada server panel!")
let messageText = "\n *乂 List Server Panel Pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n 📡 *${s.id} >> [ ${s.name} ]*
 *• Ram :* ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}
 *• CPU :* ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}
 *• Disk :* ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}
 *• Created :* ${s.created_at.split("T")[0]}\n`
}
await shin.sendMessage(m.chat, {text: messageText}, {quoted: qchannel})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "delpanel": {
if (!isOwner && !isReseller) return m.reply(`Maaf fitur ini hanya untuk *reseller panel*!\nBeli akses *reseller panel* langsung chat ${global.owner}`)
if (!text) return example("idnya")
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Gagal menghapus server!\nID server tidak ditemukan")
await m.reply(`Sukses menghapus server panel *${capital(nameSrv)}*`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "cadmin": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return example("username,237XXX")
let nomor
let usernem
let tek = text.split(",")
if (tek.length > 1) {
let [users, nom] = text.split(",")
if (!users || !nom) return example("username,237XXX")
nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
usernem = users.toLowerCase()
} else {
usernem = text.toLowerCase()
nomor = m.isGroup ? m.sender : m.chat
}
var onWa = await shin.onWhatsApp(nomor.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor target tidak terdaftar di whatsapp!")
let username = usernem.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let orang = nomor
        if (m.isGroup) {
        await m.reply(`Berhasil membuat akun panel ✅\ndata akun sudah di kirim ke ${nomor == m.sender ? "private chat" : nomor.split("@")[0]}`)
        }        
        if (nomor !== m.sender && !m.isGroup) {
        await m.reply(`Berhasil membuat akun panel ✅\ndata akun sudah di kirim ke ${nomor.split("@")[0]}`)
        }
var teks = `
*Le Panel Admin De DarkMods*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
*🗓️ ${tanggal(Date.now())}*

*🌐* ${global.domain}

My Channel: https://whatsapp.com/channel/0029VamzCT5GzzKRylqvj33l
`
await shin.sendMessage(orang, {text: teks}, {quoted: qchannel})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "listadmin": {
if (!isOwner) return m.reply(msg.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *乂 List Admin Panel Pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n 📡 *${i.attributes.id} >> [ ${i.attributes.first_name} ]*
 *• Nama :* ${i.attributes.first_name}
 *• Created :* ${i.attributes.created_at.split("T")[0]}\n`
})
await shin.sendMessage(m.chat, {text: teks}, {quoted: qchannel})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "deladmin": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return example("idnya")
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Gagal menghapus akun!\nID user tidak ditemukan")
await m.reply(`Sukses menghapus akun admin panel *${capital(getid)}*`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

default:
if ((m.text).startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return shin.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return shin.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

if ((m.text).startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return shin.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return shin.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

if ((m.text).startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
shin.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
shin.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

}} catch (e) {
console.log(e)
shin.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "),
chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})