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
- **π·ππͺ₯πβ‘πΌπ€‘Nπππππ¦π£πͺVπ’Vβπ€π½5β°πβ€Nπ¦΄π«ππ§π²π§**
---

### Bitcoin Bech32 address
- bc1qy048saw7s3c65e4rznw9c3tu5vlnflq6wc6y3nrf59y9t9pu8axqxxrg34
- bc**1YπΈππ§π©Ήπ€‘π¬πΈπΆRπΌββπͺπSπΏβ½π°πΈβπ’π¦ππ¦Aπ΄π‘ββππͺ°**
---

### 128 bit BIP39 Seed phrase
- forward ski usage buzz comfort useful rapid immune source circle eyebrow charge
- **ππ¨πΏπ₯Fππππ£π°π¬π΅5π½πK**
---

### 256 bit BIP39 Seed phrase
- dilemma various hotel service athlete address olympic electric jealous hammer curtain ten stuff intact hover inch time maze dog motor climb foot bid turn
- **πΈπΈπ¦·πβGβ6ππΊπ΄π₯π¬Gπ₯π§²π§π½πͺUβͺπΊβπ¦π¦·2π¦π¦΄ππ§π§€π£**
---

### Nostr public key
- npub17f9pn00re332vyef5l9myttt8p49k22gyhvy20kseapyztj5acaqaskm0r
- npub**ππ°Sπ₯πππ¦ πΌKπ¬β½π©β‘πππͺπππ¬π¦π½π₯ππΈπ΅ππ΄π¦ππβπ**
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
- Final selection of symbols, names, plus mapping of ambiguous characters to an index
- Decide if ambiguous symbols should be supported at all (especially for multi-character emojis)
- Ambiguous emoji symbols that can be used for the A-Y range instead
- Standardized checksum method, error detection / correction
- Are additional symbols used for control purposes needed?

## Alphabet

0123456789ABCDEFGHJKMNPQRSTUVWXYπβ π©π€‘π»π½π€β€π₯π¬ππͺπ¦Άπππ§ π«π¦·π¦΄πππΆπ¨π©πͺπππ΄ππ§πΈπ΅πΆπ¦π΄π?π·ππ¦ππ¦π­π°πΏπ¦π¦π»π¦ππ¦πͺΆπΈππ’ππ²π³π¦­πππππ¦ππͺ°π¦π¦ ππͺ΄π²π΅ππππππππππππ«π«π₯₯π₯ππ₯π½πΆπ₯¦π°ππ§πππππ₯πΏπ§πππ£π¦π¦πͺπ°π«π¬π₯βπ«π·πΊπ½ππ§­β°πππ π’βͺβ²βΊπππ²βπ’βπ ππΌβ½π¦π§³β°ππ‘βπ§πͺπββ‘βπ₯π§π§¨πππβ½π³ππ₯π₯π²π§©π¨ππππ§€π§¦πππππ©πππππ΅π§π·πΈπΉπ₯βππ₯π¨π§?π¬π·ππ‘ππ°ββππππβπππ¨πͺπ£ββπ§²πͺπ§ͺπππ©ΉπͺπͺππͺπΏππ¬π½πͺ₯πͺπ©

> See also [mnemojis.com](https://www.mnemojis.com)

> Note the encapsulated sub bases: `0-1` binary, `0-9` decimal, `0-9A-F` hexidecimal, `0-9A-Y` base32

| index | symbol | Unicode | name (English) | ambiguous symbols |
| --- | --- | --- | --- | --- |
| 0 | 0 | U+0030 | DIGIT ZERO | O o 0οΈβ£ |
| 1 | 1 | U+0031 | DIGIT ONE | I L i l ! Β£ β€ βΊ 1οΈβ£ |
| 2 | 2 | U+0032 | DIGIT TWO | Z z = 2οΈβ£ |
| 3 | 3 | U+0033 | DIGIT THREE | 3οΈβ£ |
| 4 | 4 | U+0034 | DIGIT FOUR | 4οΈβ£ |
| 5 | 5 | U+0035 | DIGIT FIVE | 5οΈβ£ |
| 6 | 6 | U+0036 | DIGIT SIX | 6οΈβ£ |
| 7 | 7 | U+0037 | DIGIT SEVEN | 7οΈβ£ |
| 8 | 8 | U+0038 | DIGIT EIGHT | 8οΈβ£ |
| 9 | 9 | U+0039 | DIGIT NINE | 9οΈβ£ |
| 10 | A | U+0041 | LATIN CAPITAL LETTER A | a @ β³ |
| 11 | B | U+0042 | LATIN CAPITAL LETTER B | b βΏ ΰΈΏ |
| 12 | C | U+0043 | LATIN CAPITAL LETTER C | c |
| 13 | D | U+0044 | LATIN CAPITAL LETTER D | d |
| 14 | E | U+0045 | LATIN CAPITAL LETTER E | e β¬ |
| 15 | F | U+0046 | LATIN CAPITAL LETTER F | f |
| 16 | G | U+0047 | LATIN CAPITAL LETTER G | g |
| 17 | H | U+0048 | LATIN CAPITAL LETTER H | h # |
| 18 | J | U+004a | LATIN CAPITAL LETTER J | j |
| 19 | K | U+004b | LATIN CAPITAL LETTER K | k |
| 20 | M | U+004d | LATIN CAPITAL LETTER M | m |
| 21 | N | U+004e | LATIN CAPITAL LETTER N | n & |
| 22 | P | U+0050 | LATIN CAPITAL LETTER P | p % |
| 23 | Q | U+0051 | LATIN CAPITAL LETTER Q | q ? |
| 24 | R | U+0052 | LATIN CAPITAL LETTER R | r β½ |
| 25 | S | U+0053 | LATIN CAPITAL LETTER S | s $ Β§ |
| 26 | T | U+0054 | LATIN CAPITAL LETTER T | t + Β± |
| 27 | U | U+0055 | LATIN CAPITAL LETTER U | u |
| 28 | V | U+0056 | LATIN CAPITAL LETTER V | v |
| 29 | W | U+0057 | LATIN CAPITAL LETTER W | w |
| 30 | X | U+0058 | LATIN CAPITAL LETTER X | x * |
| 31 | Y | U+0059 | LATIN CAPITAL LETTER Y | y Β₯ |
| 32 | π | U+1f600 | SMILEY | π π π π π π π π π π π π π π π π π π π π π π π π π π π π π π π  π’ π£ π€ π₯ π¦ π§ π¨ π© πͺ π« π¬ π­ π? π― π° π± π² π³ π΄ π΅ πΆ π· π π π π π€ π€ π€ π€ π€ π€ π€ π€  π€£ π€€ π€₯ π€§ π€¨ π€© π€ͺ π€« π€­ π€? π€― π₯° π₯± π₯² π₯³ π₯΄ π₯Έ π₯Ί π§ π π‘ π€’ π€¬ |
| 33 | β  | U+2620 | SKULL | π |
| 34 | π© | U+1f4a9 | SHIT |  |
| 35 | π€‘ | U+1f921 | CLOWN | πΉ πΊ |
| 36 | π» | U+1f47b | GHOST |  |
| 37 | π½ | U+1f47d | ALIEN | πΎ |
| 38 | π€ | U+1f916 | ROBOT |  |
| 39 | β€ | U+2764 | HEART | π π π π π π π π π β£ π§‘ π π π π π€ π€ π€ π« |
| 40 | π₯ | U+1f4a5 | COLLISION |  |
| 41 | π¬ | U+1f4ac | SPEECH BUBBLE | π¨ π― π­ |
| 42 | π | U+1f44b | HAND | π€ π β π π π€ π€ β π€ π€ π€ π€ π π π π π β π π β π π€ π€ π π π π€² π€ π |
| 43 | πͺ | U+1f4aa | ARM | π¦Ύ |
| 44 | π¦Ά | U+1f9b6 | FOOT | π¦΅ π¦Ώ |
| 45 | π | U+1f442 | EAR | π¦» |
| 46 | π | U+1f443 | NOSE |  |
| 47 | π§  | U+1f9e0 | BRAIN |  |
| 48 | π« | U+1fac1 | LUNGS |  |
| 49 | π¦· | U+1f9b7 | TOOTH |  |
| 50 | π¦΄ | U+1f9b4 | BONE |  |
| 51 | π | U+1f441 | EYE | π |
| 52 | π | U+1f444 | MOUTH | π π |
| 53 | πΆ | U+1f476 | CHILD | π§ π¦ π§ |
| 54 | π¨ | U+1f468 | MAN |  |
| 55 | π© | U+1f469 | WOMEN |  |
| 56 | πͺ | U+1f46a | GROUP |  |
| 57 | π | U+1f3c3 | RUNNING |  |
| 58 | π | U+1f3ca | SWIMMING |  |
| 59 | π΄ | U+1f6b4 | CYCLING |  |
| 60 | π | U+1f3cb | LIFTING |  |
| 61 | π§ | U+1f9d8 | SITTING |  |
| 62 | πΈ | U+1f638 | CAT | πΉ πΊ π» πΌ π½ πΎ πΏ π π± π |
| 63 | π΅ | U+1f435 | MONKEY | π π π π¦ π¦§ |
| 64 | πΆ | U+1f436 | DOG | π π¦? π© |
| 65 | π¦ | U+1f981 | LION |  |
| 66 | π΄ | U+1f434 | HORSE | π π¦ π¦ |
| 67 | π? | U+1f42e | COW |  |
| 68 | π· | U+1f437 | PIG |  |
| 69 | π | U+1f40f | SHEEP | π π |
| 70 | π¦ | U+1f992 | GIRAFFE |  |
| 71 | π | U+1f418 | ELEPHANT |  |
| 72 | π¦ | U+1f98f | RHINOCEROS |  |
| 73 | π­ | U+1f42d | MOUSE |  |
| 74 | π° | U+1f430 | RABBIT |  |
| 75 | πΏ | U+1f43f | SQUIRREL |  |
| 76 | π¦ | U+1f994 | HEDGEHOG |  |
| 77 | π¦ | U+1f987 | BAT |  |
| 78 | π» | U+1f43b | BEAR | π¨ πΌ |
| 79 | π¦ | U+1f998 | KANGAROO |  |
| 80 | π | U+1f414 | CHICKEN | π π£ π€ π₯ |
| 81 | π¦ | U+1f985 | BIRD | π¦ π§ π |
| 82 | πͺΆ | U+1fab6 | FEATHER |  |
| 83 | πΈ | U+1f438 | FROG |  |
| 84 | π | U+1f40a | CROCODILE |  |
| 85 | π’ | U+1f422 | TURTLE |  |
| 86 | π | U+1f40d | SNAKE |  |
| 87 | π² | U+1f432 | DRAGON | π π¦ π¦ |
| 88 | π³ | U+1f433 | WHALE |  |
| 89 | π¦­ | U+1f9ad | SEAL |  |
| 90 | π | U+1f41f | FISH | π¬ π  π‘ π¦ |
| 91 | π | U+1f419 | OCTOPUS |  |
| 92 | π | U+1f41a | SHELL |  |
| 93 | π | U+1f40c | SNALE |  |
| 94 | π¦ | U+1f98b | BUTTERFLY |  |
| 95 | π | U+1f41d | BEE |  |
| 96 | πͺ° | U+1fab0 | BUG | π¦ πͺ³ π· π¦ |
| 97 | π¦ | U+1f982 | SCORPION |  |
| 98 | π¦  | U+1f9a0 | MICROBE |  |
| 99 | π | U+1f490 | FLOWER | πΈ π? π΅ πΉ π₯ πΊ π» πΌ π· |
| 100 | πͺ΄ | U+1fab4 | PLANT | π± |
| 101 | π² | U+1f332 | TREE | π³ π΄ |
| 102 | π΅ | U+1f335 | CACTUS |  |
| 103 | π | U+1f341 | LEAF | β π π π |
| 104 | π | U+1f344 | MUSHROOM |  |
| 105 | π | U+1f347 | GRAPES |  |
| 106 | π | U+1f349 | MELON | π |
| 107 | π | U+1f34b | CITRUS | π |
| 108 | π | U+1f34c | BANANA |  |
| 109 | π | U+1f34d | PINEAPPLE |  |
| 110 | π | U+1f34f | APPLE | π |
| 111 | π | U+1f350 | PEAR |  |
| 112 | π | U+1f352 | CHERRIES |  |
| 113 | π | U+1f353 | STRAWBERRY |  |
| 114 | π« | U+1fad0 | BLUEBERRIES |  |
| 115 | π« | U+1fad2 | OLIVE |  |
| 116 | π₯₯ | U+1f965 | COCONUT |  |
| 117 | π₯ | U+1f951 | ADVOCADO |  |
| 118 | π | U+1f346 | EGGPLANT |  |
| 119 | π₯ | U+1f955 | CARROT |  |
| 120 | π½ | U+1f33d | CORN |  |
| 121 | πΆ | U+1f336 | PEPPER |  |
| 122 | π₯¦ | U+1f966 | BROCCOLI |  |
| 123 | π° | U+1f330 | NUT |  |
| 124 | π | U+1f35e | BREAD | π₯ π₯ π« π₯― |
| 125 | π§ | U+1f9c0 | CHEESE |  |
| 126 | π | U+1f356 | MEAT | π π₯© π₯ |
| 127 | π | U+1f354 | HAMBURGER |  |
| 128 | π | U+1f35f | FRIES |  |
| 129 | π | U+1f355 | PIZZA |  |
| 130 | π₯ | U+1f95a | EGG |  |
| 131 | πΏ | U+1f37f | POPCORN |  |
| 132 | π§ | U+1f9c2 | SALT |  |
| 133 | π | U+1f35a | RICE |  |
| 134 | π | U+1f35c | BOWL |  |
| 135 | π£ | U+1f363 | SUSHI |  |
| 136 | π¦ | U+1f99e | MARINE | π¦ π¦ π¦ π¦ͺ |
| 137 | π¦ | U+1f366 | ICECREAM |  |
| 138 | πͺ | U+1f36a | COOKIE |  |
| 139 | π° | U+1f370 | CAKE |  |
| 140 | π« | U+1f36b | CHOCOLATE |  |
| 141 | π¬ | U+1f36c | CANDY | π­ |
| 142 | π₯ | U+1f95b | MILK |  |
| 143 | β | U+2615 | COFFEE |  |
| 144 | π« | U+1fad6 | TEAPOT |  |
| 145 | π· | U+1f377 | WINE |  |
| 146 | πΊ | U+1f37a | BEER |  |
| 147 | π½ | U+1f37d | CUTLERY | π΄ π₯’ πͺ |
| 148 | π | U+1f30d | PLANET | π π π πΊ |
| 149 | π§­ | U+1f9ed | COMPASS |  |
| 150 | β° | U+26f0 | MOUNTAIN | π π π» |
| 151 | π | U+1f3d6 | BEACH |  |
| 152 | π | U+1f3d7 | CONSTRUCTION |  |
| 153 | π  | U+1f3e0 | HOME | π π π‘ |
| 154 | π’ | U+1f3e2 | BUILDING | π π¬ |
| 155 | βͺ | U+26ea | PLACE OF WORSHIP | π π π β© π |
| 156 | β² | U+26f2 | FOUNTAIN |  |
| 157 | βΊ | U+26fa | CAMPING |  |
| 158 | π | U+1f682 | RAIL TRANSPORT | π π π π π π π π π π π |
| 159 | π | U+1f697 | CAR | π οΏ½ π π π π π π π π π π π π π π π |
| 160 | π² | U+1f6b2 | BICYCLE |  |
| 161 | β | U+2693 | ANCHOR |  |
| 162 | π’ | U+1f6a2 | BOAT |  |
| 163 | β | U+2708 | PLANE | π |
| 164 | π  | U+1f6a0 | CABLECAR | π π‘ |
| 165 | π | U+1f680 | UFO | π° πΈ |
| 166 | πΌ | U+1f6fc | SKATES | πΉ |
| 167 | β½ | U+26fd | FUEL PUMP |  |
| 168 | π¦ | U+1f6a6 | TRAFFIC SIGNS | π₯ π§ π¨ |
| 169 | π§³ | U+1f9f3 | SUITCASE |  |
| 170 | β° | U+23f0 | TIME | β± β² π° π π§ π π π π π π π π π π  π π‘ π π’ π π£ π π€ π π₯ π π¦ |
| 171 | π | U+1f319 | MOON | π π π π π π π π π π π π |
| 172 | π‘ | U+1f321 | TEMPERATURE |  |
| 173 | β | U+2600 | SUN | π β­ π π  |
| 174 | π§ | U+1f327 | CLOUD | β β β π€ π₯ π¦ π¨ π© |
| 175 | πͺ | U+1f32a | WHIRLWIND |  |
| 176 | π | U+1f308 | RAINBOW |  |
| 177 | β | U+2602 | UMBRELLA | β β± |
| 178 | β‘ | U+26a1 | LIGHTNING |  |
| 179 | β | U+2744 | SNOW | β β |
| 180 | π₯ | U+1f525 | FIRE |  |
| 181 | π§ | U+1f4a7 | WATER |  |
| 182 | π§¨ | U+1f9e8 | DYNAMITE |  |
| 183 | π | U+1f388 | BALLOON |  |
| 184 | π | U+1f381 | GIFT |  |
| 185 | π | U+1f3c6 | TROPHY | π π₯ π₯ π₯ |
| 186 | β½ | U+26bd | BALL | βΎ π₯ π π π π πΎ |
| 187 | π³ | U+1f3b3 | BOWLING |  |
| 188 | π | U+1f3cf | HOCKEY | π π π₯ π |
| 189 | π₯ | U+1f94a | MARTIAL ARTS | π₯ |
| 190 | π₯ | U+1f945 | GOAL |  |
| 191 | π² | U+1f3b2 | DICE |  |
| 192 | π§© | U+1f9e9 | PUZZLE |  |
| 193 | π¨ | U+1f3a8 | ARTS |  |
| 194 | π | U+1f453 | GLASSES |  |
| 195 | π | U+1f455 | SHIRT |  |
| 196 | π | U+1f456 | PANTS |  |
| 197 | π§€ | U+1f9e4 | GLOVES |  |
| 198 | π§¦ | U+1f9e6 | SOCKS |  |
| 199 | π | U+1f457 | DRESS |  |
| 200 | π | U+1f6cd | BAGS | π π |
| 201 | π | U+1f45e | SHOE | π©΄ π π₯Ύ π₯Ώ π  π‘ π©° π’ |
| 202 | π | U+1f451 | CROWN |  |
| 203 | π© | U+1f3a9 | HAT | π π§’ |
| 204 | π | U+1f484 | LIPSTICK |  |
| 205 | π | U+1f48d | JEWELLERY | π |
| 206 | π | U+1f508 | LOUDSPEAKER | π π π |
| 207 | π | U+1f514 | BEL | π |
| 208 | π΅ | U+1f3b5 | MUSIC | πΆ πΌ |
| 209 | π§ | U+1f3a7 | HEADPHONES |  |
| 210 | π· | U+1f3b7 | WIND INSTRUMENT | πΊ |
| 211 | πΈ | U+1f3b8 | STRING INSTRUMENT |  |
| 212 | πΉ | U+1f3b9 | KEYS |  |
| 213 | π₯ | U+1f941 | DRUMS |  |
| 214 | β | U+260e | TELEPHONE | π± π π π  |
| 215 | π | U+1f50c | PLUG |  |
| 216 | π₯ | U+1f5a5 | COMPUTER | π» β¨ π± |
| 217 | π¨ | U+1f5a8 | PRINTER |  |
| 218 | π§? | U+1f9ee | ABACUS |  |
| 219 | π¬ | U+1f3ac | MOVIE |  |
| 220 | π· | U+1f4f7 | CAMERA |  |
| 221 | π | U+1f50d | MAGNIFYING GLASS |  |
| 222 | π‘ | U+1f4a1 | LIGHT | π― π¦ π? |
| 223 | π | U+1f4d6 | BOOK |  |
| 224 | π° | U+1f4b0 | MONEY | πͺ |
| 225 | β | U+2709 | MAIL |  |
| 226 | β | U+270f | PEN |  |
| 227 | π | U+1f4c1 | FOLDER |  |
| 228 | π | U+1f4c5 | CALENDER |  |
| 229 | π | U+1f4ce | PAPERCLIP |  |
| 230 | π | U+1f4cf | RULER |  |
| 231 | β | U+2702 | SCISSORS |  |
| 232 | π | U+1f512 | LOCK |  |
| 233 | π | U+1f511 | KEY |  |
| 234 | π¨ | U+1f528 | HAMMER |  |
| 235 | πͺ | U+1fa9a | SAW |  |
| 236 | π£ | U+1f4a3 | BOMB |  |
| 237 | β | U+2699 | GEARS |  |
| 238 | β | U+2696 | BALANCE |  |
| 239 | π§² | U+1f9f2 | MAGNET |  |
| 240 | πͺ | U+1fa9c | STEPS |  |
| 241 | π§ͺ | U+1f9ea | TUBE |  |
| 242 | π | U+1f489 | SYRINGE |  |
| 243 | π | U+1f48a | PILL |  |
| 244 | π©Ή | U+1fa79 | BANDAGE |  |
| 245 | πͺ | U+1f6aa | DOOR |  |
| 246 | πͺ | U+1fa9f | WINDOW |  |
| 247 | π | U+1f6cf | BED |  |
| 248 | πͺ | U+1fa91 | CHAIR |  |
| 249 | πΏ | U+1f6bf | BATH | π |
| 250 | π | U+1f6d2 | SHOPPING CART |  |
| 251 | π¬ | U+1f6ac | CIGARETTE |  |
| 252 | π½ | U+1f6bd | TOILET | π§» |
| 253 | πͺ₯ | U+1faa5 | TOOTHBRUSH |  |
| 254 | πͺ | U+1fa92 | SHAVING |  |
| 255 | π© | U+1f6a9 | FLAG | π π π΄ π³ π³οΈβπ π³οΈββ§οΈ π΄ββ οΈ π¦π¨ π¦π© π¦πͺ π¦π« π¦π¬ π¦π? π¦π± π¦π² π¦π΄ π¦πΆ π¦π· π¦πΈ π¦πΉ π¦πΊ π¦πΌ π¦π½ π¦πΏ π§π¦ π§π§ π§π© π§πͺ π§π« π§π¬ π§π­ π§π? π§π― π§π± π§π² π§π³ π§π΄ π§πΆ π§π· π§πΈ π§πΉ π§π» π§πΌ π§πΎ π§πΏ π¨π¦ π¨π¨ π¨π© π¨π« π¨π¬ π¨π­ π¨π? π¨π° π¨π± π¨π² π¨π³ π¨π΄ π¨π΅ π¨π· π¨πΊ π¨π» π¨πΌ π¨π½ π¨πΎ π¨πΏ π©πͺ π©π¬ π©π― π©π° π©π² π©π΄ π©πΏ πͺπ¦ πͺπ¨ πͺπͺ πͺπ¬ πͺπ­ πͺπ· πͺπΈ πͺπΉ πͺπΊ π«π? π«π― π«π° π«π² π«π΄ π«π· π¬π¦ π¬π§ π¬π© π¬πͺ π¬π« π¬π¬ π¬π­ π¬π? π¬π± π¬π² π¬π³ π¬π΅ π¬πΆ π¬π· π¬πΈ π¬πΉ π¬πΊ π¬πΌ π¬πΎ π­π° π­π² π­π³ π­π· π­πΉ π­πΊ π?π¨ π?π© π?πͺ π?π± π?π² π?π³ π?π΄ π?πΆ π?π· π?πΈ π?πΉ π―πͺ π―π² π―π΄ π―π΅ π°πͺ π°π¬ π°π­ π°π? π°π² π°π³ π°π΅ π°π· π°πΌ π°πΎ π°πΏ π±π¦ π±π§ π±π¨ π±π? π±π° π±π· π±πΈ π±πΉ π±πΊ π±π» π±πΎ π²π¦ π²π¨ π²π© π²πͺ π²π« π²π¬ π²π­ π²π° π²π± π²π² π²π³ π²π΄ π²π΅ π²πΆ π²π· π²πΈ π²πΉ π²πΊ π²π» π²πΌ π²π½ π²πΎ π²πΏ π³π¦ π³π¨ π³πͺ π³π« π³π¬ π³π? π³π± π³π΄ π³π΅ π³π· π³πΊ π³πΏ π΄π² π΅π¦ π΅πͺ π΅π« π΅π¬ π΅π­ π΅π° π΅π± π΅π² π΅π³ π΅π· π΅πΈ π΅πΉ π΅πΌ π΅πΎ πΆπ¦ π·πͺ π·π΄ π·πΈ π·πΊ π·πΌ πΈπ¦ πΈπ§ πΈπ¨ πΈπ© πΈπͺ πΈπ¬ πΈπ­ πΈπ? πΈπ― πΈπ° πΈπ± πΈπ² πΈπ³ πΈπ΄ πΈπ· πΈπΈ πΈπΉ πΈπ» πΈπ½ πΈπΎ πΈπΏ πΉπ¦ πΉπ¨ πΉπ© πΉπ« πΉπ¬ πΉπ­ πΉπ― πΉπ° πΉπ± πΉπ² πΉπ³ πΉπ΄ πΉπ· πΉπΉ πΉπ» πΉπΌ πΉπΏ πΊπ¦ πΊπ¬ πΊπ² πΊπ³ πΊπΈ πΊπΎ πΊπΏ π»π¦ π»π¨ π»πͺ π»π¬ π»π? π»π³ π»πΊ πΌπ« πΌπΈ π½π° πΎπͺ πΎπΉ πΏπ¦ πΏπ² πΏπΌ |

# Error detection
A checksum of a substring with 4 bytes (Mnemojis) length from the hash (Sha256) of any string might be a reasonable tradeoff between length and uniqueness. If an additional control character is needed to mark the split in between content and checksum is to be decided.