#!/usr/bin/env node

const crypto = require("crypto").webcrypto

const mnemojis = require("../mnemojis.json")

const chars = mnemojis.map(m => m.chars[0])
const getMnemojiIndex = (s) => chars.findIndex(c => c === s)
const isMnemoji = (s) => getMnemojiIndex(s) > -1

const isMnemojiString = (s) => Array.from(s).filter(c => isMnemoji(c) === false).length === 0

const s = (process.argv[2] ?? "").trim()

if (s === "") return console.error("Empty string")
if (!isMnemojiString(s)) return console.error(`${ s } is not a valid Mnemoji string`)

const ints = Array.from(s).map(c => getMnemojiIndex(c))
const hex = ints.map(i => i.toString(16).padStart(2, "0")).join("")

console.log(hex)
