#!/usr/bin/env node

const crypto = require("crypto").webcrypto

const mnemojis = require("../mnemojis.json")

const isHexString = (string) => /^[0-9a-f]*$/.test(string)
const fromHexString = (hexString) => Uint8Array.from(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)))

const s = (process.argv[2] ?? "").trim().toLowerCase()

if (s === "") return console.error("Empty string")
if (!isHexString(s)) return console.error(`${ s } is not a valid HEX string`)

const buffer = Buffer.from(s, "hex")
console.log(fromHexString(s))
const chars = Array.from(buffer).map(int => mnemojis[int].chars[0])

console.log(chars.join(""))
