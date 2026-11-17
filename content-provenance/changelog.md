# Changelog

Changes to the cards and the explorer, newest first. Dates are when the change was made in the source repo. The site is rebuilt from it afterwards.

## 2026-11-16

- Checked the findings the link audit left open. [MCP Security Interest Group](https://www.olahungerford.com/content-provenance/#mcp-security-ig): the restructure is dated 2026-08-26 in the charter changelog and was merged on 2026-10-31. [Machine Payments Protocol](https://www.olahungerford.com/content-provenance/#mpp): the current draft is `draft-httpauth-payment`, which is active, and the earlier `draft-ryan-httpauth-payment` expired. [COUNTER Metrics](https://www.olahungerford.com/content-provenance/#counter) published phase two on 2026-10-23. [Creative Commons](https://www.olahungerford.com/content-provenance/#creative-commons): the AIPREF exclusions draft expired on 2026-10-24. [Really Simple Licensing](https://www.olahungerford.com/content-provenance/#rsl): the SPUR binding links its source.
- [MCP Financial Services Interest Group](https://www.olahungerford.com/content-provenance/#mcp-fsig): the 2026-09-24 meeting notes show the [OpenLineage](https://www.olahungerford.com/content-provenance/#openlineage) lineage key presented and [SEP-3094 Granular Citations](https://www.olahungerford.com/content-provenance/#mcp-sep-3094-citations) on the agenda. That pair is now connected by a source, and `matches.md` lists 48 pairs. BearingNode filed the lineage key as FSIG issue 16 on 2026-10-08.
- [OpenAttribution.org](https://www.olahungerford.com/content-provenance/#openattribution): the status no longer lists the SDKs and the edge worker, which are in the [SPUR Coalition](https://www.olahungerford.com/content-provenance/#spur-coalition) GitHub organization. [Agent Skills at-rest signing threads](https://www.olahungerford.com/content-provenance/#agent-skills-signing) counts seven discussions.
- The MCP endpoint has a fourth tool, `list_unconnected`, which lists the pairs in `matches.md` and can filter by card or layer. A client that only uses tools had no way to reach that list.
- [Really Simple Licensing](https://www.olahungerford.com/content-provenance/#rsl): a Training opt-out topic names the `ai-train` usage token, and the spec's references to [Cloudflare Content Signals](https://www.olahungerford.com/content-provenance/#cloudflare-content-signals) and [IETF AI Preferences Working Group](https://www.olahungerford.com/content-provenance/#ietf-aipref).

## 2026-11-15

- Every link between cards was audited twice, by two independent passes, against primary sources. A link now means a primary source connects the two efforts. A comparison that only this guide makes sits under a card's `## Compare` heading, and the graph draws it as a dotted line. Of 141 linked pairs, 92 are connected by a source and 49 are comparisons. `matches.md` lists the 49.
- Corrections from the audit: [SEP-3094 Granular Citations](https://www.olahungerford.com/content-provenance/#mcp-sep-3094-citations) was closed without merging on 2026-11-08. [Content Authenticity Initiative](https://www.olahungerford.com/content-provenance/#content-authenticity-initiative) is a partner of C2PA and not part of it. The [IPTC](https://www.olahungerford.com/content-provenance/#iptc) Data Mining property is not maintained with [Creator Assertions Working Group](https://www.olahungerford.com/content-provenance/#cawg). [COUNTER Metrics](https://www.olahungerford.com/content-provenance/#counter) has published phase two. The [Content Telemetry](https://www.olahungerford.com/content-provenance/#content-telemetry) SDKs are maintained by [SPUR Coalition](https://www.olahungerford.com/content-provenance/#spur-coalition). [Agent Plugins](https://www.olahungerford.com/content-provenance/#agent-plugins) 1.1.0 is a working draft. The [Machine Payments Protocol](https://www.olahungerford.com/content-provenance/#mpp) and [Cloudflare Content Signals](https://www.olahungerford.com/content-provenance/#cloudflare-content-signals) drafts show as expired on Datatracker. [Agent Skills at-rest signing threads](https://www.olahungerford.com/content-provenance/#agent-skills-signing) gains discussion 651, which proposes C2PA credentials for skills.
- The `medium/` tag has six values: text, image, audio, video, code and data. Eleven more cards carry one, where the card's own text names the medium.
- Added `smoke/questions.json`: 17 questions the guide should be able to answer, five of them about which efforts are not connected yet. The build checks them.
- Added four music cards: [DDEX](https://www.olahungerford.com/content-provenance/#ddex), [CISAC](https://www.olahungerford.com/content-provenance/#cisac), [GEMA](https://www.olahungerford.com/content-provenance/#gema) and [Fairly Trained](https://www.olahungerford.com/content-provenance/#fairly-trained). The first three carry a new `medium/` tag, which the explorer shows as its own filter row.
- [C2PA](https://www.olahungerford.com/content-provenance/#c2pa): the Stripped metadata topic counts the soft-binding algorithms that list audio.
- [W3C TDM Reservation Protocol Community Group](https://www.olahungerford.com/content-provenance/#w3c-tdmrep): notes that record companies reserve Article 4 rights by written declaration, with IFPI's list of them.
- [Really Simple Licensing](https://www.olahungerford.com/content-provenance/#rsl): the status line now mentions the 2026-11-12 relaunch of the collective behind it. The build warns when a card's newest History date is later than every date in its status.
- [Internet Licensing Collective](https://www.olahungerford.com/content-provenance/#internet-licensing-collective): added the ten Publisher Steering Committee members shown on its About page, and the co-founder named in the launch release.
- The `search_cards` tool on the MCP endpoint lists cards with the words in their name or aliases first, and says when the rest only mention them.
- Cards can carry a `## In use` section of released implementations and live uses, each with a date and a link. Twelve cards have one, including [C2PA](https://www.olahungerford.com/content-provenance/#c2pa), [Really Simple Licensing](https://www.olahungerford.com/content-provenance/#rsl), [Croissant](https://www.olahungerford.com/content-provenance/#croissant) and [Cloudflare Content Signals](https://www.olahungerford.com/content-provenance/#cloudflare-content-signals). Commitments, pilots and open pull requests stay in the status line.
- Added [Encypher](https://www.olahungerford.com/content-provenance/#encypher). [IPTC](https://www.olahungerford.com/content-provenance/#iptc) gains the Origin Verified News Publishers List, and [C2PA](https://www.olahungerford.com/content-provenance/#c2pa) describes the text appendix (A.8).
- [Microsoft Publisher Content Marketplace](https://www.olahungerford.com/content-provenance/#microsoft-publisher-content-marketplace) is described as a pilot, as Microsoft's 2026-02-03 post describes it. The card said "launched".
- Cards can carry a `## History` section of dated events. 27 cards have one, restating the dates their status lines already gave, including [Really Simple Licensing](https://www.olahungerford.com/content-provenance/#rsl), [IETF AI Preferences Working Group](https://www.olahungerford.com/content-provenance/#ietf-aipref) and [C2PA](https://www.olahungerford.com/content-provenance/#c2pa). The build collects them into `updates.md` and `updates.json`.
- Added a prototype for agents at https://content-provenance-field-guide.olahungerford.workers.dev: a Markdown and JSON file per card, pages that read without JavaScript, and Markdown on request.
- Added two agent skills, one for answering from the guide and one for suggesting pull requests to it, served as files and over MCP at `/mcp` with the Skills extension.

## 2026-11-14

- Added this changelog. The site serves it as `changelog.md`, linked from the explorer footer, `llms.txt` and `cards.json`.

## 2026-11-13

- Added [Internet Licensing Collective](https://www.olahungerford.com/content-provenance/#internet-licensing-collective). The RSL Collective relaunched under that name on 2026-11-12 with Yahoo Scout as its first commercial licensee.
- [Really Simple Licensing](https://www.olahungerford.com/content-provenance/#rsl): the collecting society behind it is now [Internet Licensing Collective](https://www.olahungerford.com/content-provenance/#internet-licensing-collective), and the Adoption topic notes the Yahoo Scout license.

## 2026-11-09

- The site is titled a field guide, and the title links to the intro.

## 2026-11-08

- Source moved to the public repo [olaservo/content-provenance-cards](https://github.com/olaservo/content-provenance-cards).
- Added [Agent Plugins](https://www.olahungerford.com/content-provenance/#agent-plugins). [MCP Interceptors WG and SEP-2624](https://www.olahungerford.com/content-provenance/#mcp-interceptors) says "context middleware" where it said "hooks".
- [Skills Marketplace](https://www.olahungerford.com/content-provenance/#skills-marketplace) and [AI Disclosures Project](https://www.olahungerford.com/content-provenance/#ai-disclosures-project) reworded to match the project's own pages.
- Added agent-readable copies of the cards: `cards.md`, `cards.json` and `llms.txt`.
- Renamed the `station/*` tags to `stage/*`.

## 2026-11-05

- First published at https://www.olahungerford.com/content-provenance/.
