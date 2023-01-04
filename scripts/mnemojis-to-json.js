#!/usr/bin/env node

const fs = require("fs")
const toArray = require("lodash.toarray")

// utils
const nonWhiteSpace = s => s.trim() !== ""

// config
const base = 256

// read characters
const txt = fs.readFileSync("mnemojis.txt", { encoding: "utf-8" })
const lines = txt.split("\n")
const chars = lines.map(line => {
  const regex = /^[^:]*:/
  const match = line.match(regex)
  const rest = line.replace(regex, "")
  const name = match[0].substring(0, match[0].length - 1)
  const chars = toArray(rest).filter(nonWhiteSpace)
  return { name, chars }
})
if (chars.length !== base) return console.warn(`${ chars.length } character groups`)

// write files
fs.writeFileSync("mnemojis.json", JSON.stringify(chars))
fs.writeFileSync("mnemojis.json.js", "const mnemojis = " + JSON.stringify(chars))

// check for duplicate characters
const arr = chars.map(({ chars }) => chars).flat()
const duplicates = arr.filter((char, index) => arr.indexOf(char) !== index)
if (duplicates.length > 0) console.warn(`Duplicate chars: ${ duplicates.join(" ") }`)