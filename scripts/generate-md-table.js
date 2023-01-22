#!/usr/bin/env node

const mnemojis = require("../mnemojis.json")

const headers = ["index", "symbol", "Unicode", "name (English)", "ambiguous symbols"]
const header = `| ${ headers.join(" | ") } |`
const separator = `| ${ headers.map(() => "---").join(" | ") } |`
const rows = mnemojis.map(({ name, chars }, index) => `| ${ index } | ${ chars[0] } | U+${ chars[0].codePointAt(0).toString(16).padStart(4, '0') } | ${ name } | ${ chars.slice(1).join(" ") } |`)
console.log([header, separator, ...rows].join("\n"))

