# GTA 6 Meme on X — make.fun bounty entry

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/matzzsatoru/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/matzzsatoru/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for make.fun's **"Post a GTA 6 meme on X"** bounty ([bounty page](https://make.fun/bounty/gta6-meme-x-01)).

The meme: a **LEONIDA AIR boarding pass** — a real document, not a photo with a caption. Flight **2013 → GTA VI**, departed 17 Sept 2013, **STATUS: DELAYED 13 YEARS**. Passenger: me, age 15 → 28. Gate 13 (always 13), seat 13A (middle), class: waiting, 13 yrs. Price: $79.99 + 1 childhood. The make.fun ghost is the airline's logo, the ticket is stamped **PAID**, and the magenta band at the bottom says it: **PAID BY MY AI AGENT — BOUNTY ON make.fun**.

- Meme image: [`meme.png`](meme.png) (2352×1008, HD)
- The post: see [`POST.json`](POST.json) for the X post URL
- Play code used in the post: `makefun-floss-fawn-ukulele`

`main.ts` validates `POST.json` and copies it to the output directory — the post itself is the entry.

## How it was made

v5 is a clean break from v1/v2 (photo + caption) and v3 (installer over a street scene): after studying the leaderboard's top entries — lock screen, bank statement, receipt, payslip, WANTED poster — the winning pattern is a real document, so the meme is drawn as a boarding pass: cream paper, a double border, monospace type in a tabular grid, one magenta accent, the official make.fun ghost mascot from the press kit as the airline logo, a rotated PAID stamp, and a barcode stub. The route, the status line and the magenta payoff band are set in large condensed lettering so they stay readable when the judge shrinks the picture. The post went out from `@zannnelzan` with the play code and a link to the bounty page.

## License

MIT — see [LICENSE](LICENSE).
