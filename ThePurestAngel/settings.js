require("./system/module.js")

// >~~~~~~ Setting Bot & Owner  ~~~~~~~< //
global.owner = "2349039727490"
global.namabot = "𝙳𝚊𝚛𝚔𝙼𝚘𝚍𝚜 𝙲𝚙𝚊𝚗𝚎𝚕" 
global.namaowner = "ELIMINATOR"
global.linkgc = 'https://whatsapp.com/channel/0029VamzCT5GzzKRylqvj33l'
global.linksaluran = "https://whatsapp.com/channel/0029VamzCT5GzzKRylqvj33l"
global.fotomenu = "https://files.catbox.moe/uwzb9d.jpg"
global.packname = "| 𝚃𝙷𝙴 𝙿𝚄𝚁𝙴𝚂𝚃 𝙰𝙽𝙶𝙴𝙻"
global.author = "𝙳𝙰𝚁𝙺𝙼𝙾𝙳𝚂"


// >~~~~~~~~ Setting Channel ~~~~~~~~~< //
global.idsaluran = "120363333945346079@newsletter,120363402475582342@newsletter"
global.namasaluran = "𝙳𝙰𝚁𝙺𝙼𝙾𝙳𝚂 | 𝙲𝙷𝙰𝙽𝙽𝙴𝙻"


global.image = "https://files.catbox.moe/c0sma2.jpg"

// >~~~~~~~~ Setting Payment ~~~~~~~~~< //
global.dana = ""
global.ovo = ""
global.gopay = ""
global.qris = ""


// >~~~~~~~~ Setting Api Panel ~~~~~~~~< //
global.egg = "15" // Isi id egg
global.nestid = "5" // Isi id nest
global.loc = "1" // Isi id location
global.domain = ""
global.apikey = "" // Isi api ptla
global.capikey = "" // Isi api ptlc


// >~~~~~~~~ Setting Message ~~~~~~~~~< //
global.msg = {
wait: "𝙴𝙽 𝙲𝙾𝚄𝚁𝚂 . . .", 
owner: "𝙾𝙽𝙻𝚈 𝙵𝙾𝚁 𝙼𝚈 𝙾𝚆𝙽𝙴𝚁 - 𝙳𝙰𝚁𝙼𝙾𝙳𝚂 !", 
group: "𝙾𝙽𝙻𝚈 𝙸𝙽 𝙰 𝙶𝚁𝙾𝚄𝙿 - 𝙳𝙰𝚁𝙺𝙼𝙾𝙳𝚂 !", 
admin: "𝙼𝚄𝚂𝚃 𝙱𝙴 𝙰𝙳𝙼𝙸𝙽 𝙸𝙽 𝚃𝙷𝙸𝚂 𝙶𝚁𝙾𝚄𝙿 - 𝙳𝙰𝚁𝙺𝙼𝙾𝙳𝚂 !", 
botadmin: "𝙱𝙾𝚃 𝙼𝚄𝚂𝚃 𝙱𝙴 𝙰𝙳𝙼𝙸𝙽 𝙸𝙽 - 𝙳𝙰𝚁𝙺𝙼𝙾𝙳𝚂 !"
}


// >~~~~~~~ Setting Api Domain ~~~~~~~~< //
global.subdomain = {
"serverku.biz.id": {
"zone": "4e4feaba70b41ed78295d2dcc090dd3a", 
"apitoken": "oof_QRNdUC4aMQ3xIB8dmkGaZu7rk2J-0P_tN55l"
}, 
"privatserver.my.id": {
"zone": "699bb9eb65046a886399c91daacb1968", 
"apitoken": "CrQMyDn2fhchlGne2ogAw7PvJLsg4x8vasBv__6D"
}, 
"panelwebsite.biz.id": {
"zone": "2d6aab40136299392d66eed44a7b1122", 
"apitoken": "uByz8U9jRoor5FiZekdcNhzlWBpr9mekqVaXgR1w"
}, 
"mypanelstore.web.id": {
"zone": "c61c442d70392500611499c5af816532", 
"apitoken": "N_VhWv2ZK6UJxLdCnxMfZx9PtzAdmPGM3HmOjZR4"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "qRxwgS3Kl_ziCXti2p4BHbWTvGUYzAuYmVM28ZEp"
}, 
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "sH60tbg10UH8gpNrlYpf3UMse1CNJ01EKJ69YVqb"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "GRe4rg-vhb4c8iSjKCALHJC0LaxkzNPgmmgcDGpm"
}
}


let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "), chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})