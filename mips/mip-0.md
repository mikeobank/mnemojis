# Mip-0

*Draft*

## Character map

We propose a base256 case-insensitive alphabet, containing the numbers 0 to 9, the letters of the Latin alphabet, minus the ambiguous characters I, L, O and Z. Plus an additional 224, most popular and widely adopted emoji characters, selected to be as distinct as possible, both visibly and culturally.

In addition to the primary 256 symbols, other related / ambiguous Unicode characters could be mapped to one of the 256 indices of the primary alphabet. Capital and lowercase letters will map to the same index. And for example member 0 will also contain capital and lowercase O. Member 2 will also contain capital and lowercase Z. Each character group will also have a human readable name.

Possible use cases:
- To be used as a more compact (less characters), visually distinguishable and thus human verifiable, replacement for both Hex, Bech32 and Base58 encoded public keys, addresses, etc. In addition allowing interesting opportunities for creating vanity addresses.
- A more compact and playful replacement for [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) Seed phrase words.
- More colorful, less mechanic looking [QR-codes](img/qr-code.png)

## Examples

### Sha256 digest
- d27efdf3b2a62315e6d72ac78887eb1c551cad26fc0596e5271532307e3dbfae
- **🎷🍖🪥💊⚡🛼🤡N📏🔌👋👗🦞🍣🪚V🐢V☀🤖🚽5⛰📎❤N🦴🫁🍖🧘🎲🌧**
---

### Bitcoin Bech32 address
- bc1qy048saw7s3c65e4rznw9c3tu5vlnflq6wc6y3nrf59y9t9pu8axqxxrg34
- bc**1Y🐸👕🌧🩹🤡🍬🐸👶R🛼✏✏💪📎S🚿⛽💰🎸☂🚢🦒💐🦇A🐴🌡⚓✉🛒🪰**
---

### 128 bit BIP39 Seed phrase
- forward ski usage buzz comfort useful rapid immune source circle eyebrow charge
- **🐙🖨🐿🥅F👓📁📖💣🌰🍬🎵5👽🐏K**
---

### 256 bit BIP39 Seed phrase
- dilemma various hotel service athlete address olympic electric jealous hammer curtain ten stuff intact hover inch time maze dog motor climb foot bid turn
- **😸😸🦷🎁✏G✏6📏🍺🚴🥕🍬G🖥🧲🧀🌽🪚U⛪🍺✏🦅🦷2🦏🦴🌈💧🧤🍣**
---

### Nostr public key
- npub17f9pn00re332vyef5l9myttt8p49k22gyhvy20kseapyztj5acaqaskm0r
- npub**💉🐰S🥊📁💄🦠🛼K💬⛽🎩⚡👂🍋👪🍉🐙💬🦏👽🖥🐏😸🎵🔔🐴🦁👃🐊⚖🏊**
---

> :warning: Do not use or transact with any of the above strings or seed phrases

## Issues / Remarks
- Unicode Strings and Emoji characters can be hard (bug sensitive) to work with within programming languages / software
- Variance of emoji display between different platforms
- Emojis could be harder to input for users on physical keyboards
- Presumably reliant on HD / color screens and printers
- The mapping of characters to alphabet is arbitrary. Shouldn't this be decided by an algorithm instead of human beings?
- Ambiguities between various Unicode characters

## TBD
- Final selection of symbols, names, plus mapping of ambiguous characters to an index.
- Decide if ambiguous symbols should be supported at all (especially for multi-character emojis)
- Standardized checksum method, error detection / correction

## Alphabet

0123456789ABCDEFGHJKMNPQRSTUVWXY😀☠💩🤡👻👽🤖❤💥💬👋💪🦶👂👃🧠🫁🦷🦴👁👄👶👨👩👪🏃🏊🚴🏋🧘😸🐵🐶🦁🐴🐮🐷🐏🦒🐘🦏🐭🐰🐿🦔🦇🐻🦘🐔🦅🪶🐸🐊🐢🐍🐲🐳🦭🐟🐙🐚🐌🦋🐝🪰🦂🦠💐🪴🌲🌵🍁🍄🍇🍉🍋🍌🍍🍏🍐🍒🍓🫐🫒🥥🥑🍆🥕🌽🌶🥦🌰🍞🧀🍖🍔🍟🍕🥚🍿🧂🍚🍜🍣🦞🍦🍪🍰🍫🍬🥛☕🫖🍷🍺🍽🌍🧭⛰🏖🏗🏠🏢⛪⛲⛺🚂🚗🚲⚓🚢✈🚠🚀🛼⛽🚦🧳⏰🌙🌡☀🌧🌪🌈☂⚡❄🔥💧🧨🎈🎁🏆⚽🎳🏏🥊🥅🎲🧩🎨👓👕👖🧤🧦👗🛍👞👑🎩💄💍🔈🔔🎵🎧🎷🎸🎹🥁☎🔌🖥🖨🧮🎬📷🔍💡📖💰✉✏📁📅📎📏✂🔒🔑🔨🪚💣⚙⚖🧲🪜🧪💉💊🩹🚪🪟🛏🪑🚿🛒🚬🚽🪥🪒🚩

> See also [mnemojis.com](https://www.mnemojis.com)

> Note the encapsulated sub bases: `0-1` binary, `0-9` decimal, `0-9A-F` hexidecimal, `0-9A-Y` base32

| index | symbol | Unicode | name (English) | ambiguous symbols |
| --- | --- | --- | --- | --- |
| 0 | 0 | U+0030 | DIGIT ZERO | O o 0️⃣ |
| 1 | 1 | U+0031 | DIGIT ONE | I L i l ! £ ₤ ₺ 1️⃣ |
| 2 | 2 | U+0032 | DIGIT TWO | Z z = 2️⃣ |
| 3 | 3 | U+0033 | DIGIT THREE | 3️⃣ |
| 4 | 4 | U+0034 | DIGIT FOUR | 4️⃣ |
| 5 | 5 | U+0035 | DIGIT FIVE | 5️⃣ |
| 6 | 6 | U+0036 | DIGIT SIX | 6️⃣ |
| 7 | 7 | U+0037 | DIGIT SEVEN | 7️⃣ |
| 8 | 8 | U+0038 | DIGIT EIGHT | 8️⃣ |
| 9 | 9 | U+0039 | DIGIT NINE | 9️⃣ |
| 10 | A | U+0041 | LATIN CAPITAL LETTER A | a @ ₳ |
| 11 | B | U+0042 | LATIN CAPITAL LETTER B | b ₿ ฿ |
| 12 | C | U+0043 | LATIN CAPITAL LETTER C | c |
| 13 | D | U+0044 | LATIN CAPITAL LETTER D | d |
| 14 | E | U+0045 | LATIN CAPITAL LETTER E | e € |
| 15 | F | U+0046 | LATIN CAPITAL LETTER F | f |
| 16 | G | U+0047 | LATIN CAPITAL LETTER G | g |
| 17 | H | U+0048 | LATIN CAPITAL LETTER H | h # |
| 18 | J | U+004a | LATIN CAPITAL LETTER J | j |
| 19 | K | U+004b | LATIN CAPITAL LETTER K | k |
| 20 | M | U+004d | LATIN CAPITAL LETTER M | m |
| 21 | N | U+004e | LATIN CAPITAL LETTER N | n & |
| 22 | P | U+0050 | LATIN CAPITAL LETTER P | p % |
| 23 | Q | U+0051 | LATIN CAPITAL LETTER Q | q ? |
| 24 | R | U+0052 | LATIN CAPITAL LETTER R | r ₽ |
| 25 | S | U+0053 | LATIN CAPITAL LETTER S | s $ § |
| 26 | T | U+0054 | LATIN CAPITAL LETTER T | t + ± |
| 27 | U | U+0055 | LATIN CAPITAL LETTER U | u |
| 28 | V | U+0056 | LATIN CAPITAL LETTER V | v |
| 29 | W | U+0057 | LATIN CAPITAL LETTER W | w |
| 30 | X | U+0058 | LATIN CAPITAL LETTER X | x * |
| 31 | Y | U+0059 | LATIN CAPITAL LETTER Y | y ¥ |
| 32 | 😀 | U+1f600 | SMILEY | 😁 😂 😃 😄 😅 😆 😇 😉 😊 😋 😌 😍 😎 😏 😐 😑 😒 😓 😔 😕 😖 😗 😘 😙 😚 😛 😜 😝 😞 😟 😠 😢 😣 😤 😥 😦 😧 😨 😩 😪 😫 😬 😭 😮 😯 😰 😱 😲 😳 😴 😵 😶 😷 🙁 🙂 🙃 🙄 🤐 🤑 🤒 🤓 🤔 🤕 🤗 🤠 🤣 🤤 🤥 🤧 🤨 🤩 🤪 🤫 🤭 🤮 🤯 🥰 🥱 🥲 🥳 🥴 🥸 🥺 🧐 😈 😡 🤢 🤬 |
| 33 | ☠ | U+2620 | SKULL | 💀 |
| 34 | 💩 | U+1f4a9 | SHIT |  |
| 35 | 🤡 | U+1f921 | CLOWN | 👹 👺 |
| 36 | 👻 | U+1f47b | GHOST |  |
| 37 | 👽 | U+1f47d | ALIEN | 👾 |
| 38 | 🤖 | U+1f916 | ROBOT |  |
| 39 | ❤ | U+2764 | HEART | 💌 💘 💝 💖 💗 💓 💞 💕 💟 ❣ 🧡 💛 💚 💙 💜 🤎 🖤 🤍 🫀 |
| 40 | 💥 | U+1f4a5 | COLLISION |  |
| 41 | 💬 | U+1f4ac | SPEECH BUBBLE | 🗨 🗯 💭 |
| 42 | 👋 | U+1f44b | HAND | 🤚 🖐 ✋ 🖖 👌 🤌 🤏 ✌ 🤞 🤟 🤘 🤙 👈 👉 👆 🖕 👇 ☝ 👍 👎 ✊ 👊 🤛 🤜 👏 🙌 👐 🤲 🤝 🙏 |
| 43 | 💪 | U+1f4aa | ARM | 🦾 |
| 44 | 🦶 | U+1f9b6 | FOOT | 🦵 🦿 |
| 45 | 👂 | U+1f442 | EAR | 🦻 |
| 46 | 👃 | U+1f443 | NOSE |  |
| 47 | 🧠 | U+1f9e0 | BRAIN |  |
| 48 | 🫁 | U+1fac1 | LUNGS |  |
| 49 | 🦷 | U+1f9b7 | TOOTH |  |
| 50 | 🦴 | U+1f9b4 | BONE |  |
| 51 | 👁 | U+1f441 | EYE | 👀 |
| 52 | 👄 | U+1f444 | MOUTH | 💋 👅 |
| 53 | 👶 | U+1f476 | CHILD | 🧒 👦 👧 |
| 54 | 👨 | U+1f468 | MAN |  |
| 55 | 👩 | U+1f469 | WOMEN |  |
| 56 | 👪 | U+1f46a | GROUP |  |
| 57 | 🏃 | U+1f3c3 | RUNNING |  |
| 58 | 🏊 | U+1f3ca | SWIMMING |  |
| 59 | 🚴 | U+1f6b4 | CYCLING |  |
| 60 | 🏋 | U+1f3cb | LIFTING |  |
| 61 | 🧘 | U+1f9d8 | SITTING |  |
| 62 | 😸 | U+1f638 | CAT | 😹 😺 😻 😼 😽 😾 😿 🙀 🐱 🐈 |
| 63 | 🐵 | U+1f435 | MONKEY | 🙈 🙉 🙊 🦍 🦧 |
| 64 | 🐶 | U+1f436 | DOG | 🐕 🦮 🐩 |
| 65 | 🦁 | U+1f981 | LION |  |
| 66 | 🐴 | U+1f434 | HORSE | 🐎 🦄 🦓 |
| 67 | 🐮 | U+1f42e | COW |  |
| 68 | 🐷 | U+1f437 | PIG |  |
| 69 | 🐏 | U+1f40f | SHEEP | 🐑 🐐 |
| 70 | 🦒 | U+1f992 | GIRAFFE |  |
| 71 | 🐘 | U+1f418 | ELEPHANT |  |
| 72 | 🦏 | U+1f98f | RHINOCEROS |  |
| 73 | 🐭 | U+1f42d | MOUSE |  |
| 74 | 🐰 | U+1f430 | RABBIT |  |
| 75 | 🐿 | U+1f43f | SQUIRREL |  |
| 76 | 🦔 | U+1f994 | HEDGEHOG |  |
| 77 | 🦇 | U+1f987 | BAT |  |
| 78 | 🐻 | U+1f43b | BEAR | 🐨 🐼 |
| 79 | 🦘 | U+1f998 | KANGAROO |  |
| 80 | 🐔 | U+1f414 | CHICKEN | 🐓 🐣 🐤 🐥 |
| 81 | 🦅 | U+1f985 | BIRD | 🐦 🐧 🕊 |
| 82 | 🪶 | U+1fab6 | FEATHER |  |
| 83 | 🐸 | U+1f438 | FROG |  |
| 84 | 🐊 | U+1f40a | CROCODILE |  |
| 85 | 🐢 | U+1f422 | TURTLE |  |
| 86 | 🐍 | U+1f40d | SNAKE |  |
| 87 | 🐲 | U+1f432 | DRAGON | 🐉 🦕 🦖 |
| 88 | 🐳 | U+1f433 | WHALE |  |
| 89 | 🦭 | U+1f9ad | SEAL |  |
| 90 | 🐟 | U+1f41f | FISH | 🐬 🐠 🐡 🦈 |
| 91 | 🐙 | U+1f419 | OCTOPUS |  |
| 92 | 🐚 | U+1f41a | SHELL |  |
| 93 | 🐌 | U+1f40c | SNALE |  |
| 94 | 🦋 | U+1f98b | BUTTERFLY |  |
| 95 | 🐝 | U+1f41d | BEE |  |
| 96 | 🪰 | U+1fab0 | BUG | 🦗 🪳 🕷 🦟 |
| 97 | 🦂 | U+1f982 | SCORPION |  |
| 98 | 🦠 | U+1f9a0 | MICROBE |  |
| 99 | 💐 | U+1f490 | FLOWER | 🌸 💮 🏵 🌹 🥀 🌺 🌻 🌼 🌷 |
| 100 | 🪴 | U+1fab4 | PLANT | 🌱 |
| 101 | 🌲 | U+1f332 | TREE | 🌳 🌴 |
| 102 | 🌵 | U+1f335 | CACTUS |  |
| 103 | 🍁 | U+1f341 | LEAF | ☘ 🍀 🍂 🍃 |
| 104 | 🍄 | U+1f344 | MUSHROOM |  |
| 105 | 🍇 | U+1f347 | GRAPES |  |
| 106 | 🍉 | U+1f349 | MELON | 🍈 |
| 107 | 🍋 | U+1f34b | CITRUS | 🍊 |
| 108 | 🍌 | U+1f34c | BANANA |  |
| 109 | 🍍 | U+1f34d | PINEAPPLE |  |
| 110 | 🍏 | U+1f34f | APPLE | 🍎 |
| 111 | 🍐 | U+1f350 | PEAR |  |
| 112 | 🍒 | U+1f352 | CHERRIES |  |
| 113 | 🍓 | U+1f353 | STRAWBERRY |  |
| 114 | 🫐 | U+1fad0 | BLUEBERRIES |  |
| 115 | 🫒 | U+1fad2 | OLIVE |  |
| 116 | 🥥 | U+1f965 | COCONUT |  |
| 117 | 🥑 | U+1f951 | ADVOCADO |  |
| 118 | 🍆 | U+1f346 | EGGPLANT |  |
| 119 | 🥕 | U+1f955 | CARROT |  |
| 120 | 🌽 | U+1f33d | CORN |  |
| 121 | 🌶 | U+1f336 | PEPPER |  |
| 122 | 🥦 | U+1f966 | BROCCOLI |  |
| 123 | 🌰 | U+1f330 | NUT |  |
| 124 | 🍞 | U+1f35e | BREAD | 🥐 🥖 🫓 🥯 |
| 125 | 🧀 | U+1f9c0 | CHEESE |  |
| 126 | 🍖 | U+1f356 | MEAT | 🍗 🥩 🥓 |
| 127 | 🍔 | U+1f354 | HAMBURGER |  |
| 128 | 🍟 | U+1f35f | FRIES |  |
| 129 | 🍕 | U+1f355 | PIZZA |  |
| 130 | 🥚 | U+1f95a | EGG |  |
| 131 | 🍿 | U+1f37f | POPCORN |  |
| 132 | 🧂 | U+1f9c2 | SALT |  |
| 133 | 🍚 | U+1f35a | RICE |  |
| 134 | 🍜 | U+1f35c | Bowl |  |
| 135 | 🍣 | U+1f363 | SUSHI |  |
| 136 | 🦞 | U+1f99e | MARINE | 🦀 🦐 🦑 🦪 |
| 137 | 🍦 | U+1f366 | ICECREAM |  |
| 138 | 🍪 | U+1f36a | COOKIE |  |
| 139 | 🍰 | U+1f370 | CAKE |  |
| 140 | 🍫 | U+1f36b | CHOCOLATE |  |
| 141 | 🍬 | U+1f36c | CANDY | 🍭 |
| 142 | 🥛 | U+1f95b | MILK |  |
| 143 | ☕ | U+2615 | COFFEE |  |
| 144 | 🫖 | U+1fad6 | TEAPOT |  |
| 145 | 🍷 | U+1f377 | WINE |  |
| 146 | 🍺 | U+1f37a | BEER |  |
| 147 | 🍽 | U+1f37d | CUTLERY | 🍴 🥢 🔪 |
| 148 | 🌍 | U+1f30d | PLANET | 🌎 🌏 🌐 🗺 |
| 149 | 🧭 | U+1f9ed | COMPASS |  |
| 150 | ⛰ | U+26f0 | MOUNTAIN | 🏔 🌋 🗻 |
| 151 | 🏖 | U+1f3d6 | BEACH |  |
| 152 | 🏗 | U+1f3d7 | CONSTRUCTION |  |
| 153 | 🏠 | U+1f3e0 | HOME | 🏘 🏚 🏡 |
| 154 | 🏢 | U+1f3e2 | BUILDING | 🏛 🏬 |
| 155 | ⛪ | U+26ea | PLACE OF WORSHIP | 🕌 🛕 🕍 ⛩ 🕋 |
| 156 | ⛲ | U+26f2 | FOUNTAIN |  |
| 157 | ⛺ | U+26fa | CAMPING |  |
| 158 | 🚂 | U+1f682 | RAIL TRANSPORT | 🚃 🚄 🚅 🚆 🚇 🚈 🚉 🚊 🚋 🚝 🚞 |
| 159 | 🚗 | U+1f697 | CAR | 🚌 � 🚍 🚎 🚏 🚐 🚑 🚒 🚓 🚔 🚕 🚖 🚘 🚙 🚚 🚛 🚜 |
| 160 | 🚲 | U+1f6b2 | BICYCLE |  |
| 161 | ⚓ | U+2693 | ANCHOR |  |
| 162 | 🚢 | U+1f6a2 | BOAT |  |
| 163 | ✈ | U+2708 | PLANE | 🚁 |
| 164 | 🚠 | U+1f6a0 | CABLECAR | 🚟 🚡 |
| 165 | 🚀 | U+1f680 | UFO | 🛰 🛸 |
| 166 | 🛼 | U+1f6fc | SKATES | 🛹 |
| 167 | ⛽ | U+26fd | FUEL PUMP |  |
| 168 | 🚦 | U+1f6a6 | TRAFFIC SIGNS | 🚥 🚧 🚨 |
| 169 | 🧳 | U+1f9f3 | SUITCASE |  |
| 170 | ⏰ | U+23f0 | TIME | ⏱ ⏲ 🕰 🕛 🕧 🕐 🕜 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 🕙 🕥 🕚 🕦 |
| 171 | 🌙 | U+1f319 | MOON | 🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘 🌚 🌛 🌜 🌝 |
| 172 | 🌡 | U+1f321 | TEMPERATURE |  |
| 173 | ☀ | U+2600 | SUN | 🌞 ⭐ 🌟 🌠 |
| 174 | 🌧 | U+1f327 | CLOUD | ☁ ⛅ ⛈ 🌤 🌥 🌦 🌨 🌩 |
| 175 | 🌪 | U+1f32a | WHIRLWIND |  |
| 176 | 🌈 | U+1f308 | RAINBOW |  |
| 177 | ☂ | U+2602 | UMBRELLA | ☔ ⛱ |
| 178 | ⚡ | U+26a1 | LIGHTNING |  |
| 179 | ❄ | U+2744 | SNOW | ☃ ⛄ |
| 180 | 🔥 | U+1f525 | FIRE |  |
| 181 | 💧 | U+1f4a7 | WATER |  |
| 182 | 🧨 | U+1f9e8 | DYNAMITE |  |
| 183 | 🎈 | U+1f388 | BALLOON |  |
| 184 | 🎁 | U+1f381 | GIFT |  |
| 185 | 🏆 | U+1f3c6 | TROPHY | 🏅 🥇 🥈 🥉 |
| 186 | ⚽ | U+26bd | BAL | ⚾ 🥎 🏀 🏐 🏈 🏉 🎾 |
| 187 | 🎳 | U+1f3b3 | BOWLING |  |
| 188 | 🏏 | U+1f3cf | HOCKEY | 🏑 🏒 🥍 🏓 |
| 189 | 🥊 | U+1f94a | MARTIAL ARTS | 🥋 |
| 190 | 🥅 | U+1f945 | GOAL |  |
| 191 | 🎲 | U+1f3b2 | DICE |  |
| 192 | 🧩 | U+1f9e9 | PUZZLE |  |
| 193 | 🎨 | U+1f3a8 | ARTS |  |
| 194 | 👓 | U+1f453 | GLASSES |  |
| 195 | 👕 | U+1f455 | SHIRT |  |
| 196 | 👖 | U+1f456 | PANTS |  |
| 197 | 🧤 | U+1f9e4 | GLOVES |  |
| 198 | 🧦 | U+1f9e6 | SOCKS |  |
| 199 | 👗 | U+1f457 | DRESS |  |
| 200 | 🛍 | U+1f6cd | BAGS | 👜 👝 |
| 201 | 👞 | U+1f45e | SHOE | 🩴 👟 🥾 🥿 👠 👡 🩰 👢 |
| 202 | 👑 | U+1f451 | CROWN |  |
| 203 | 🎩 | U+1f3a9 | HAT | 👒 🧢 |
| 204 | 💄 | U+1f484 | LIPSTICK |  |
| 205 | 💍 | U+1f48d | JEWELLERY | 💎 |
| 206 | 🔈 | U+1f508 | LOUDSPEAKER | 🔇 🔉 🔊 |
| 207 | 🔔 | U+1f514 | BEL | 🔕 |
| 208 | 🎵 | U+1f3b5 | MUSIC | 🎶 🎼 |
| 209 | 🎧 | U+1f3a7 | HEADPHONES |  |
| 210 | 🎷 | U+1f3b7 | WIND INSTRUMENT | 🎺 |
| 211 | 🎸 | U+1f3b8 | STRING INSTRUMENT |  |
| 212 | 🎹 | U+1f3b9 | KEYS |  |
| 213 | 🥁 | U+1f941 | DRUMS |  |
| 214 | ☎ | U+260e | TELEPHONE | 📱 📞 📟 📠 |
| 215 | 🔌 | U+1f50c | PLUG |  |
| 216 | 🖥 | U+1f5a5 | COMPUTER | 💻 ⌨ 🖱 |
| 217 | 🖨 | U+1f5a8 | PRINTER |  |
| 218 | 🧮 | U+1f9ee | ABACUS |  |
| 219 | 🎬 | U+1f3ac | MOVIE |  |
| 220 | 📷 | U+1f4f7 | CAMERA |  |
| 221 | 🔍 | U+1f50d | MAGNIFYING GLASS |  |
| 222 | 💡 | U+1f4a1 | LIGHT | 🕯 🔦 🏮 |
| 223 | 📖 | U+1f4d6 | BOOK |  |
| 224 | 💰 | U+1f4b0 | MONEY | 🪙 |
| 225 | ✉ | U+2709 | MAIL |  |
| 226 | ✏ | U+270f | PEN |  |
| 227 | 📁 | U+1f4c1 | FOLDER |  |
| 228 | 📅 | U+1f4c5 | CALENDER |  |
| 229 | 📎 | U+1f4ce | PAPERCLIP |  |
| 230 | 📏 | U+1f4cf | RULER |  |
| 231 | ✂ | U+2702 | SCISSORS |  |
| 232 | 🔒 | U+1f512 | LOCK |  |
| 233 | 🔑 | U+1f511 | KEY |  |
| 234 | 🔨 | U+1f528 | HAMMER |  |
| 235 | 🪚 | U+1fa9a | SAW |  |
| 236 | 💣 | U+1f4a3 | BOMB |  |
| 237 | ⚙ | U+2699 | GEARS |  |
| 238 | ⚖ | U+2696 | BALANCE |  |
| 239 | 🧲 | U+1f9f2 | MAGNET |  |
| 240 | 🪜 | U+1fa9c | STEPS |  |
| 241 | 🧪 | U+1f9ea | TUBE |  |
| 242 | 💉 | U+1f489 | SYRINGE |  |
| 243 | 💊 | U+1f48a | PILL |  |
| 244 | 🩹 | U+1fa79 | BANDAGE |  |
| 245 | 🚪 | U+1f6aa | DOOR |  |
| 246 | 🪟 | U+1fa9f | WINDOW |  |
| 247 | 🛏 | U+1f6cf | BED |  |
| 248 | 🪑 | U+1fa91 | CHAIR |  |
| 249 | 🚿 | U+1f6bf | BATH | 🛁 |
| 250 | 🛒 | U+1f6d2 | SHOPPING CART |  |
| 251 | 🚬 | U+1f6ac | CIGARETTE |  |
| 252 | 🚽 | U+1f6bd | TOILET | 🧻 |
| 253 | 🪥 | U+1faa5 | TOOTHBRUSH |  |
| 254 | 🪒 | U+1fa92 | SHAVING |  |
| 255 | 🚩 | U+1f6a9 | FLAG | 🏁 🎌 🏴 🏳 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ 🇦🇨 🇦🇩 🇦🇪 🇦🇫 🇦🇬 🇦🇮 🇦🇱 🇦🇲 🇦🇴 🇦🇶 🇦🇷 🇦🇸 🇦🇹 🇦🇺 🇦🇼 🇦🇽 🇦🇿 🇧🇦 🇧🇧 🇧🇩 🇧🇪 🇧🇫 🇧🇬 🇧🇭 🇧🇮 🇧🇯 🇧🇱 🇧🇲 🇧🇳 🇧🇴 🇧🇶 🇧🇷 🇧🇸 🇧🇹 🇧🇻 🇧🇼 🇧🇾 🇧🇿 🇨🇦 🇨🇨 🇨🇩 🇨🇫 🇨🇬 🇨🇭 🇨🇮 🇨🇰 🇨🇱 🇨🇲 🇨🇳 🇨🇴 🇨🇵 🇨🇷 🇨🇺 🇨🇻 🇨🇼 🇨🇽 🇨🇾 🇨🇿 🇩🇪 🇩🇬 🇩🇯 🇩🇰 🇩🇲 🇩🇴 🇩🇿 🇪🇦 🇪🇨 🇪🇪 🇪🇬 🇪🇭 🇪🇷 🇪🇸 🇪🇹 🇪🇺 🇫🇮 🇫🇯 🇫🇰 🇫🇲 🇫🇴 🇫🇷 🇬🇦 🇬🇧 🇬🇩 🇬🇪 🇬🇫 🇬🇬 🇬🇭 🇬🇮 🇬🇱 🇬🇲 🇬🇳 🇬🇵 🇬🇶 🇬🇷 🇬🇸 🇬🇹 🇬🇺 🇬🇼 🇬🇾 🇭🇰 🇭🇲 🇭🇳 🇭🇷 🇭🇹 🇭🇺 🇮🇨 🇮🇩 🇮🇪 🇮🇱 🇮🇲 🇮🇳 🇮🇴 🇮🇶 🇮🇷 🇮🇸 🇮🇹 🇯🇪 🇯🇲 🇯🇴 🇯🇵 🇰🇪 🇰🇬 🇰🇭 🇰🇮 🇰🇲 🇰🇳 🇰🇵 🇰🇷 🇰🇼 🇰🇾 🇰🇿 🇱🇦 🇱🇧 🇱🇨 🇱🇮 🇱🇰 🇱🇷 🇱🇸 🇱🇹 🇱🇺 🇱🇻 🇱🇾 🇲🇦 🇲🇨 🇲🇩 🇲🇪 🇲🇫 🇲🇬 🇲🇭 🇲🇰 🇲🇱 🇲🇲 🇲🇳 🇲🇴 🇲🇵 🇲🇶 🇲🇷 🇲🇸 🇲🇹 🇲🇺 🇲🇻 🇲🇼 🇲🇽 🇲🇾 🇲🇿 🇳🇦 🇳🇨 🇳🇪 🇳🇫 🇳🇬 🇳🇮 🇳🇱 🇳🇴 🇳🇵 🇳🇷 🇳🇺 🇳🇿 🇴🇲 🇵🇦 🇵🇪 🇵🇫 🇵🇬 🇵🇭 🇵🇰 🇵🇱 🇵🇲 🇵🇳 🇵🇷 🇵🇸 🇵🇹 🇵🇼 🇵🇾 🇶🇦 🇷🇪 🇷🇴 🇷🇸 🇷🇺 🇷🇼 🇸🇦 🇸🇧 🇸🇨 🇸🇩 🇸🇪 🇸🇬 🇸🇭 🇸🇮 🇸🇯 🇸🇰 🇸🇱 🇸🇲 🇸🇳 🇸🇴 🇸🇷 🇸🇸 🇸🇹 🇸🇻 🇸🇽 🇸🇾 🇸🇿 🇹🇦 🇹🇨 🇹🇩 🇹🇫 🇹🇬 🇹🇭 🇹🇯 🇹🇰 🇹🇱 🇹🇲 🇹🇳 🇹🇴 🇹🇷 🇹🇹 🇹🇻 🇹🇼 🇹🇿 🇺🇦 🇺🇬 🇺🇲 🇺🇳 🇺🇸 🇺🇾 🇺🇿 🇻🇦 🇻🇨 🇻🇪 🇻🇬 🇻🇮 🇻🇳 🇻🇺 🇼🇫 🇼🇸 🇽🇰 🇾🇪 🇾🇹 🇿🇦 🇿🇲 🇿🇼 |