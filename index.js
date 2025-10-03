const path = require("path");
const makeWASocket = require("@whiskeysockets/baileys").default;
const { useMultiFileAuthState } = require("@whiskeysockets/baileys");

const SESSION_DIR = process.env.SESSION_DIR || path.join(__dirname, "sessions");

async function generatePairCode(number) {
  const { state, saveCreds } = await useMultiFileAuthState(path.join(SESSION_DIR, number));
  const sock = makeWASocket({ auth: state });
  if (!sock.requestPairingCode) throw new Error("Baileys version does not support pairing code");
  const code = await sock.requestPairingCode(number);
  return code;
}

async function startSession(number, code) {
  const { state, saveCreds } = await useMultiFileAuthState(path.join(SESSION_DIR, number));
  const sock = makeWASocket({ auth: state });
  sock.ev.on("creds.update", saveCreds);
  require("./main")(sock);
  require("./message")(sock);
  return { connected: true, number };
}

module.exports = { generatePairCode, startSession };
