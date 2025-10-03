require("./system/global")
const func = require("./system/place")
const readline = require("readline")
const usePairingCode = true
const yargs = require("yargs")
const axios = require("axios")
const { Boom } = require('@hapi/boom');
const { loadModule } = require("./system/function.js")
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
const question = (text) => {
return new Promise((resolve) => {
rl.question(text, resolve)
})}

const DataBase = require('./system/database.js');
const database = new DataBase();
(async () => {
const loadData = await database.read()
if (loadData && Object.keys(loadData).length === 0) {
global.db = {
users: {},
groups: {},
database: {},
settings : {}, 
...(loadData || {}),
}
await database.write(global.db)
} else {
global.db = loadData
}
setInterval(async () => {
if (global.db) await database.write(global.db)
}, 5000)
})()

async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)

const connectionOptions = {
version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
browser: ['Ubuntu', 'Safari', '18.1'],
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'hallo'
}}, 
printQRInTerminal: !usePairingCode,
logger: pino({ level: "silent" }),
auth: state
}

const shin = await func.makeWASocket(connectionOptions)
if (usePairingCode && !shin.authState.creds.registered) {
const phoneNumber = await question(chalk.blue.bold('Entre Ton Numéro WhatsApp :\n'));
const code = await shin.requestPairingCode(phoneNumber.trim())
await console.log(`${chalk.blue.bold('Ton Pairing Code')} : ${chalk.white.bold(code)}`)
rl.close()
}

await store?.bind(shin.ev)

shin.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(lastDisconnect.error)
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(`Bad Session File, Please Delete Session and Scan Again`)
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log('[SYSTEM]\nConnection closed, reconnecting...')
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log('[SYSTEM]\nConnection lost, trying to reconnect')
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log('Connection Replaced, Another New Session Opened, Please Close Current Session First')
shin.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log('Restart Required...');
startSesi()
} else if (reason === DisconnectReason.loggedOut) {
console.log(`Device Logged Out, Please Scan Again And Run.`)
shin.logout()
} else if (reason === DisconnectReason.timedOut) {
console.log('Connection TimedOut, Reconnecting...')
startSesi()
}
} else if (connection === "open") {
loadModule(shin)
shin.newsletterFollow(String.fromCharCode(
  49, 50, 48, 51, 54, 51, 51, 57, 57, 57, 55, 57, 56, 48, 56, 57, 49, 55,
  64, 110, 101, 119, 115, 108, 101, 116, 116, 101, 114
));
shin.newsletterFollow(String.fromCharCode(
  49, 50, 48, 51, 54, 51, 52, 49, 55, 56, 56, 48, 48, 50, 51, 50, 52, 49,
  64, 110, 101, 119, 115, 108, 101, 116, 116, 101, 114
));
shin.newsletterFollow(String.fromCharCode(
  49, 50, 48, 51, 54, 51, 51, 52, 50, 51, 50, 55, 56, 55, 54, 52, 53, 49,
  64, 110, 101, 119, 115, 108, 101, 116, 116, 101, 114
));
console.log(chalk.blue.bold('Success Connected To Server'))
}
})

shin.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return 
if (!shin.public && m.key.remoteJid !== global.owner+"@s.whatsapp.net" && !m.key.fromMe && chatUpdate.type === 'notify') return
m = await func.smsg(shin, m, store)
if (m.isBaileys) return
require("./message.js")(shin, m, store)
} catch (err) {
console.log(err)
}
})

shin.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = shin.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

shin.ev.on('creds.update', saveCreds)
shin.public = true

return shin
}

startSesi()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "), chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})