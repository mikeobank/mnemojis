#!/usr/bin/env node

const crypto = require("crypto").webcrypto

const mnemojis = require("../mnemojis.json")

const n = process.argv[2] ?? 16
const arr = crypto.getRandomValues(new Uint8Array(n))
const chars = Array.from(arr).map(int => mnemojis[int].chars[0])

console.log(chars.join(""))
