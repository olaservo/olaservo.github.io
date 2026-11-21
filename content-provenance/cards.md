# Content Provenance, Access and Attribution: A Field Guide

79 cards for the organizations, working groups, specifications and proposals that decide where content came from (provenance), what may be done with it (access, licensing, payment) and whether its source gets credited (attribution), and where the Model Context Protocol fits among them. Compiled by Ola Hungerford (https://www.olahungerford.com/about/), as of 2026-11-21. One person's working notes. Status lines carry the dates the sources gave, so check upstream before relying on one. The cards are licensed under CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/): reuse them with credit to Ola Hungerford and a link to the guide.

Explorer for people: https://www.olahungerford.com/content-provenance/. The same cards as JSON: https://www.olahungerford.com/content-provenance/cards.json. Dated events across all cards: https://www.olahungerford.com/content-provenance/updates.md. What changed in the guide and when: https://www.olahungerford.com/content-provenance/changelog.md. Links between cards point at the card's heading in this file; each card also has an Id line.

## Layers

- provenance: where content came from and what was done to it, carried as signed records.
- access: whether a crawler or agent may read or use content, and how that preference is expressed.
- licensing: the terms and prices for use, in a form machines can read.
- attribution: whether the source is named and credited where the content ends up.
- payments: how a use gets paid for, from HTTP 402 to agent checkout.
- identity: who the agent, crawler or signer is.
- governance: the foundations, policy bodies and regulation around the rest.

## Stages

Where a card sits on the path content takes through an agent. Not every card has one.

- at rest: content or a skill is signed where it is stored.
- in transit: the credential travels with the content across a tool call.
- at the boundary: a gateway or context middleware checks it on the way through.
- after delivery: credit and reporting once the content has left the protocol and its metadata is gone.
- trust: who may sign or report, and how that is decided. Not a place on the path, but every other stage depends on it.

## Media

The kind of content an effort is about, where its own material names one. A card with no medium tag is media-neutral.

- text: articles, books, web pages and other written content.
- image: photographs, illustrations and other still images.
- audio: music, speech and other sound recordings, and the musical works behind them.
- video: film, broadcast and other moving images.
- code: software, and agent skills and plugins made of instructions and scripts.
- data: datasets and the pipelines that produce them.

## Topic tags

Subjects that cards on different layers share.

- skills: agent skills and plugins, and how they are packaged, signed, listed and credited.
- discovery: how an agent finds a server, an agent or a skill, through registries, catalogs and well-known files.

## Cards

### AAIF Agentic Commerce WG

- Id: aaif-agentic-commerce-wg
- Type: working-group
- Status: Chartered 2026-05-15; catalogs specs rather than authoring one
- Website: https://github.com/aaif/wg-agentic-commerce
- Part of: [Agentic AI Foundation](#aaif)
- Take part: [GitHub issues](https://github.com/aaif/wg-agentic-commerce/issues)
- Tags: type/working-group, layer/payments
- Updated: 2026-11-15
- Explorer: https://www.olahungerford.com/content-provenance/#aaif-agentic-commerce-wg

Discovery and negotiation, checkout, delegated authority, agentic payments, fraud signals, post-purchase.

#### Topics

- **Commerce spec harmony**: comparing and aligning [Agentic Commerce Protocol](#acp), [Universal Commerce Protocol](#ucp), [Agent Payments Protocol](#ap2) and [x402](#x402).

#### History

- 2026-05-15: Chartered.

Linked from: [Agentic AI Foundation](#aaif), [Universal Commerce Protocol](#ucp), [x402](#x402)

### AAIF Governance, Risk and Regulatory WG

- Id: aaif-grr-wg
- Also known as: GRR, GRRA WG, "Governance, Risk & Regulatory Alignment"
- Type: working-group
- Website: https://github.com/aaif/wg-governance-risk-and-regulatory
- Part of: [Agentic AI Foundation](#aaif)
- Take part: [GitHub issues](https://github.com/aaif/wg-governance-risk-and-regulatory/issues)
- Tags: type/working-group, layer/governance
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#aaif-grr-wg

Working group bridging AI policy and the foundation's technical projects.

#### Topics

- **Evidence record shape**: converging record formats for logging and evidence ([issue 9](https://github.com/aaif/wg-governance-risk-and-regulatory/issues/9), closed 2026-11-12 into the interim report).
- **Policy mapping**: mapping regulation onto the projects. The phase 2 input in issue 9 cites EU AI Act Articles 12, 19 and 26(6) ([EU AI Act and GPAI Code of Practice](#eu-ai-act-gpai-code)). The public repository does not name the GPAI Code of Practice (searched 2026-11-20). The interim report is a Google Doc that needs sign-in.

Linked from: [Agentic AI Foundation](#aaif)

### AAIF Identity and Trust WG

- Id: aaif-identity-trust-wg
- Type: working-group
- Status: Chartered 2026-05-12
- Website: https://github.com/aaif/wg-identity-and-trust
- Part of: [Agentic AI Foundation](#aaif)
- Take part: [GitHub issues](https://github.com/aaif/wg-identity-and-trust/issues)
- Tags: type/working-group, layer/identity, stage/trust
- Updated: 2026-11-16
- Explorer: https://www.olahungerford.com/content-provenance/#aaif-identity-trust-wg

Charter: agent identity, authentication and provenance, delegation chains, consent, cross-organization trust, discovery metadata.

#### Topics

- **Evidence strength**: labels for how strong a trust claim is, a model to borrow for content trust.
- **Bound knowledge**: a digest-bound knowledge link set from a server card.

#### Compare

- [Agent Identity and Manifest Standard](#aims) and [IETF Web Bot Auth Working Group](#ietf-web-bot-auth) also work on agent identity. The WG's repository names neither, and neither names the WG (searched 2026-11-15).

#### History

- 2026-05-12: Chartered.

Linked from: [Agent Identity and Manifest Standard](#aims), [Agentic AI Foundation](#aaif), [C2PA](#c2pa)

### AAIF Observability and Traceability WG

- Id: aaif-observability-traceability-wg
- Type: working-group
- Status: Nine-task Agent Behavior Trace Model plan; provenance initiative lead named 2026-09-02; proposal joining OTel GenAI telemetry to signed evidence records opened 2026-10-28; trace model proposal well received at the OTel GenAI SIG 2026-11-11
- Website: https://github.com/aaif/wg-observability-and-traceability
- Part of: [Agentic AI Foundation](#aaif)
- Take part: [GitHub issues](https://github.com/aaif/wg-observability-and-traceability/issues)
- Tags: type/working-group, layer/provenance, layer/attribution
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#aaif-observability-traceability-wg

Working group on agent-level observability, above the OpenTelemetry GenAI telemetry conventions.

#### Topics

- **Evidence records**: tamper-evident records of agent behavior ([Evidence Record Spec proposal](https://github.com/aaif/wg-observability-and-traceability/issues/37)).
- **Responsibility chains**: attributing which agent or human initiated, delegated or approved an action.
- **Liaisons**: the [liaison roster](https://github.com/aaif/wg-observability-and-traceability/blob/main/LIAISONS.md) has no content-side member.

#### Related

- The conventions it builds above, and what they leave out: [OpenTelemetry for MCP](#otel-mcp).

#### Compare

- [Content Telemetry](#content-telemetry) reports what happens to content after a tool call. Nothing connects it to this group (searched 2026-11-15).

#### History

- 2026-11-11: Minutes record a positive reception of the Agent Behavior Trace Model proposal at the OTel GenAI SIG.
- 2026-11-04: Liaison roster published.
- 2026-10-28: [PR 67](https://github.com/aaif/wg-observability-and-traceability/pull/67) proposes joining OTel GenAI telemetry to signed action and evidence records. The meeting set an action to draft a cross-domain tracing and provenance proposal for OTel.
- 2026-09-02: Provenance initiative lead named.

Linked from: [Agentic AI Foundation](#aaif), [OpenTelemetry for MCP](#otel-mcp)

### AAIF Security and Privacy WG

- Id: aaif-security-privacy-wg
- Type: working-group
- Website: https://github.com/aaif/wg-security-and-privacy
- Part of: [Agentic AI Foundation](#aaif)
- Take part: [GitHub issues](https://github.com/aaif/wg-security-and-privacy/issues)
- Tags: type/working-group, layer/governance, stage/trust, topic/skills
- Updated: 2026-11-16
- Explorer: https://www.olahungerford.com/content-provenance/#aaif-security-privacy-wg

Working group drafting a security and privacy best-practices guide for agents.

#### Topics

- **Skill verification tiers**: a four-tier ladder in which tier 2 verifies author attribution and tier 3 pins version and hash.
- **Agent trust manifests**: from [Project NANDA](#project-nanda).

#### Compare

- The [Agent Skills at-rest signing threads](#agent-skills-signing) cover the same ground as the tier ladder. The WG's guide does not cite them (searched 2026-11-15).

Linked from: [Agent Skills at-rest signing threads](#agent-skills-signing), [Agentic AI Foundation](#aaif), [Project NANDA](#project-nanda)

### Agent Identity and Manifest Standard

- Id: aims
- Also known as: AIMS
- Type: specification
- Status: v0.1 draft
- Website: https://github.com/openattribution-org/aims
- Part of: [OpenAttribution.org](#openattribution)
- Take part: [GitHub issues](https://github.com/openattribution-org/aims/issues)
- Tags: type/specification, layer/identity
- Updated: 2026-11-16
- Explorer: https://www.olahungerford.com/content-provenance/#aims

DID-based agent identity, proof of what content the agent is licensed to access, and a link from identity to the telemetry endpoint.

#### Topics

- **Agent identity and entitlements**: who the agent is and what content it is licensed to access.

#### Compare

- [IETF Web Bot Auth Working Group](#ietf-web-bot-auth) proves an agent's identity on the wire. The AIMS spec does not mention it (searched 2026-11-15).
- Overlaps the [AAIF Identity and Trust WG](#aaif-identity-trust-wg). Neither names the other (searched 2026-11-15).

Linked from: [AAIF Identity and Trust WG](#aaif-identity-trust-wg), [Decentralized Identity Foundation](#dif), [IETF Web Bot Auth Working Group](#ietf-web-bot-auth), [OpenAttribution.org](#openattribution), [W3C](#w3c), [Wikimedia](#wikimedia)

### Agent Payments Protocol

- Id: ap2
- Also known as: AP2
- Type: specification
- Status: Donated by Google to the FIDO Alliance
- Website: https://ap2-protocol.org
- News: https://github.com/google-agentic-commerce/AP2/releases
- Feed: https://github.com/google-agentic-commerce/AP2/releases.atom
- Take part: [GitHub](https://github.com/google-agentic-commerce/AP2)
- Tags: type/specification, layer/payments, layer/identity
- Updated: 2026-11-17
- Explorer: https://www.olahungerford.com/content-provenance/#ap2

Mandates that prove a human authorized an agent purchase.

#### Topics

- **Delegated purchase authority**: proving a human authorized an agent purchase, with [x402](#x402) as a settlement method underneath.

Linked from: [AAIF Agentic Commerce WG](#aaif-agentic-commerce-wg), [x402](#x402)

### Agent Plugins

- Id: agent-plugins
- Also known as: agent-plugins-spec, plugin.json
- Type: specification
- Status: 1.0.0 published 2026-08-06; 1.1.0 is a working draft; AAIF Technical Committee approved it as a Growth-stage project 2026-10-27, Governing Board vote pending; steering committee from Amazon, Cursor, Microsoft, OpenAI and Vercel
- Website: https://agent-plugins.org/
- Take part: [GitHub issues](https://github.com/agentplugins/agent-plugins-spec/issues), [GitHub discussions](https://github.com/agentplugins/agent-plugins-spec/discussions)
- Tags: type/specification, layer/provenance, layer/licensing, topic/skills, stage/at-rest, medium/code
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#agent-plugins

Package format that puts [Agent Skills](#agent-skills) and MCP server configuration in one portable directory: a `plugin.json` manifest, a `skills/` folder and an `mcp.json`. Independently governed. The spec is CC BY 4.0 and the schemas Apache 2.0.

#### Topics

- **Who made this, under what terms**: the manifest has `author` (name, email, url), `repository`, `homepage` and `license` (SPDX recommended), so a plugin carries structured authorship and repository fields. A `SKILL.md` has an optional `license` field and a free-form `metadata` map. Clients validate these by JSON type only, so nothing stops an empty or false value.
- **Trust left to the client**: 1.x defines no signatures, publisher identity or provenance checks. The project's future-considerations list names signature verification, trusted-publisher policies and audit trails.
- **No distribution layer**: registries, marketplaces, installation and updates are each client's own.

#### Related

- The skills inside a plugin follow the [Agent Skills](#agent-skills) specification unchanged.

#### Compare

- Not yet an [Agentic AI Foundation](#aaif) project. The AAIF Technical Committee approved it as a Growth-stage project, and it awaits a Governing Board vote ([proposal 56](https://github.com/aaif/project-proposals/issues/56)). The AAIF project list does not include it (read 2026-11-20).
- Its future-considerations list covers the same ground as the [Agent Skills at-rest signing threads](#agent-skills-signing). Neither refers to the other (searched 2026-11-15).
- A [Skills Marketplace](#skills-marketplace) would have a package to ship here and no shared channel to ship it through.
- [SEP-2640 Skills Extension](#mcp-skills-extension) serves the same skills over MCP instead of on disk. Both build on Agent Skills, and neither names the other (searched 2026-11-15).

#### History

- 2026-10-27: AAIF staff reported Technical Committee approval as a Growth-stage project. A Governing Board vote is pending.
- 2026-10-12: Proposed to [Agentic AI Foundation](#aaif).
- 2026-08-06: 1.0.0 published.

Linked from: [Agent Skills](#agent-skills), [Agent Skills at-rest signing threads](#agent-skills-signing), [Skills Marketplace](#skills-marketplace)

### Agent Skills

- Id: agent-skills
- Also known as: agentskills, SKILL.md
- Type: specification
- Status: Joined AAIF 2026-10-22
- Website: https://agentskills.io
- Part of: [Agentic AI Foundation](#aaif)
- Take part: [GitHub discussions](https://github.com/agentskills/agentskills/discussions)
- Tags: type/specification, topic/skills, stage/at-rest, medium/code
- Updated: 2026-11-16
- Explorer: https://www.olahungerford.com/content-provenance/#agent-skills

The SKILL.md format for packaging instructions and files for agents.

#### Topics

- **Skill provenance**: signing, lineage and authorship of skills ([Agent Skills at-rest signing threads](#agent-skills-signing)).
- **Skill rights and payment**: paying authors and respecting licenses ([Skills Marketplace](#skills-marketplace)).

#### Related

- Packaged with MCP servers by [Agent Plugins](#agent-plugins).

#### History

- 2026-10-22: Joined AAIF.

Linked from: [Agent Plugins](#agent-plugins), [Agent Skills at-rest signing threads](#agent-skills-signing), [Agentic AI Foundation](#aaif), [AI Catalog](#ai-catalog), [SEP-2640 Skills Extension](#mcp-skills-extension), [Skills Marketplace](#skills-marketplace)

### Agent Skills at-rest signing threads

- Id: agent-skills-signing
- Also known as: #252, #393, #588, #564, #620, #643, #651
- Type: proposal
- Status: Seven open discussions in Ideas, none answered by a listed maintainer, no convergence
- Website: https://github.com/agentskills/agentskills/discussions/393
- Part of: [Agent Skills](#agent-skills)
- Take part: [GitHub discussions](https://github.com/agentskills/agentskills/discussions)
- Tags: type/proposal, layer/provenance, stage/at-rest, topic/skills, medium/code
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#agent-skills-signing

Proposals for signing, lockfiles and lineage of SKILL.md folders: signature in frontmatter ([#252](https://github.com/agentskills/agentskills/discussions/252)), SKILL.sig sidecar ([#393](https://github.com/agentskills/agentskills/discussions/393)), skills-lock.json ([#588](https://github.com/agentskills/agentskills/discussions/588)), `metadata.source` ([#564](https://github.com/agentskills/agentskills/discussions/564)), `metadata.derived-from` ([#620](https://github.com/agentskills/agentskills/discussions/620)), skill-evidence documents keyed by digest ([#643](https://github.com/agentskills/agentskills/discussions/643)), a [C2PA](#c2pa) manifest reference in a frontmatter comment with a digest of the other files in `metadata` ([#651](https://github.com/agentskills/agentskills/discussions/651)).

#### Topics

- **Copy sprawl**: tracking copies of a skill. The GitSkills dataset reports that half of SKILL.md files on GitHub are verbatim copies. [Skill Constellations](https://arxiv.org/abs/2610.11169) finds that only 11.1% of changes to a clone group reach every copy.
- **Field ownership**: separating identity (digest), lineage (source, derived-from), authorship (signature) and evidence (keyed by digest) so each thread owns one field.
- **Retraction and signer identity**: withdrawing a bad skill and naming who signed it. [#252](https://github.com/agentskills/agentskills/discussions/252) names the signer by domain and suggests a `.well-known/skills-revoked` endpoint. [#393](https://github.com/agentskills/agentskills/discussions/393) carries a publisher block and a `revocation_url`. [Discussion 651](https://github.com/agentskills/agentskills/discussions/651) (2026-11-05) proposes [C2PA](#c2pa) content credentials for skills and names the [Creator Assertions Working Group](#cawg) identity assertion for the signer. Its example repository has no identity assertion yet.
- **Whole-folder coverage**: signing the scripts and other files, when a C2PA manifest binds to one file. Discussion 651 signs SKILL.md and puts a digest of every other file in `metadata.directory-digest`, which the signature covers. In its tests a generic C2PA validator passes a skill with an edited script, and a verifier that recomputes the digest fails it.
- **Removed credentials**: telling a skill whose manifest line was removed from one that was never signed. The bytes are the same. The author of discussion 651 says the expectation of a signature has to come from outside the skill, through publisher pinning, trust on first use or a distribution-layer policy. On 2026-11-16 they proposed four verifier results: `verified`, `invalid`, `unreachable` and `absent`.

#### Related

- [Cognitive-Proof/c2pa-skill-example](https://github.com/Cognitive-Proof/c2pa-skill-example) signs and verifies a sample skill as discussion 651 describes, with public test certificates and c2pa-rs from the [Content Authenticity Initiative](#content-authenticity-initiative). It pins a commit from [c2pa-rs pull request 3029](https://github.com/contentauth/c2pa-rs/pull/3029), which was open on 2026-11-17.
- The discussion says the example's files do not follow the published C2PA 2.5 text. They follow a change the author proposed to C2PA in a repository that is not public.

#### Compare

- The same problem is being worked on elsewhere: digests in [SEP-2640 Skills Extension](#mcp-skills-extension), catalog-side signing in [AI Catalog](#ai-catalog) and verification tiers in [AAIF Security and Privacy WG](#aaif-security-privacy-wg). None of them cites these threads (searched 2026-11-15).
- [Agent Plugins](#agent-plugins) carries author and licence in its manifest and lists signing as future work. Neither refers to the other (searched 2026-11-15).
- [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta) has the same author as discussion 651 and applies C2PA to MCP results. Neither thread refers to the other (read 2026-11-17).

#### History

- 2026-11-05: Discussion 651 proposed C2PA content credentials for skills, with an example repository the same day.

Linked from: [AAIF Security and Privacy WG](#aaif-security-privacy-wg), [Agent Plugins](#agent-plugins), [Agent Skills](#agent-skills), [AI Catalog](#ai-catalog), [C2PA](#c2pa), [Content Authenticity Initiative](#content-authenticity-initiative), [Creator Assertions Working Group](#cawg), [SEP-2640 Skills Extension](#mcp-skills-extension), [Skills Marketplace](#skills-marketplace)

### Agentic AI Foundation

- Id: aaif
- Also known as: AAIF
- Type: organization
- Status: Linux Foundation; ten hosted projects in its first year
- Website: https://aaif.io
- News: https://aaif.io/news, https://aaif.io/blog
- Take part: [working group repos on GitHub](https://github.com/aaif)
- Tags: type/organization, layer/governance
- Updated: 2026-11-17
- Explorer: https://www.olahungerford.com/content-provenance/#aaif

Hosts [Model Context Protocol](#mcp), goose, AGENTS.md, agentgateway, A2A, [Agent Skills](#agent-skills) and others.

#### Topics

- **Caller-side provenance**: its working groups cover who acted: [AAIF Observability and Traceability WG](#aaif-observability-traceability-wg), [AAIF Identity and Trust WG](#aaif-identity-trust-wg), [AAIF Security and Privacy WG](#aaif-security-privacy-wg), [AAIF Governance, Risk and Regulatory WG](#aaif-grr-wg), [AAIF Agentic Commerce WG](#aaif-agentic-commerce-wg).
- **Content-side representation**: content-side groups (publishers, CC, Wikimedia) are not on the WG liaison rosters.

Linked from: [AAIF Agentic Commerce WG](#aaif-agentic-commerce-wg), [AAIF Governance, Risk and Regulatory WG](#aaif-grr-wg), [AAIF Identity and Trust WG](#aaif-identity-trust-wg), [AAIF Observability and Traceability WG](#aaif-observability-traceability-wg), [AAIF Security and Privacy WG](#aaif-security-privacy-wg), [Agent Plugins](#agent-plugins), [Agent Skills](#agent-skills), [Model Context Protocol](#mcp), [Open Future](#open-future), [Wikimedia](#wikimedia), [x402](#x402)

### Agentic Commerce Protocol

- Id: acp
- Also known as: ACP
- Type: specification
- Status: Beta; maintained by OpenAI, Stripe and Meta (Meta since 2026-04-24); latest spec 2026-04-17
- Website: https://github.com/agentic-commerce-protocol/agentic-commerce-protocol
- Take part: [GitHub issues](https://github.com/agentic-commerce-protocol/agentic-commerce-protocol/issues)
- Tags: type/specification, layer/payments
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#acp

Merchant checkout for agents. [OpenAttribution.org](#openattribution) has a `content_attribution` extension for it.

#### Topics

- **Agent checkout**: letting agents complete merchant checkout.
- **Credit for purchases**: crediting the content that led to a purchase, through the [OpenAttribution.org](#openattribution) extension.

#### History

- 2026-04-24: Meta joined OpenAI and Stripe as a lead maintainer ([PR 236](https://github.com/agentic-commerce-protocol/agentic-commerce-protocol/pull/236)).

Linked from: [AAIF Agentic Commerce WG](#aaif-agentic-commerce-wg), [OpenAttribution.org](#openattribution), [Universal Commerce Protocol](#ucp)

### Agentic Resource Discovery

- Id: ard
- Also known as: ARD, ard-spec, ard.json
- Type: specification
- Status: v0.91 dated 2026-08-26, marked Proposal
- Website: https://agenticresourcediscovery.org/spec/
- Take part: [GitHub issues](https://github.com/ards-project/ard-spec/issues)
- Tags: type/specification, layer/identity, topic/discovery
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#ard

A federated search layer for agentic resources: MCP servers, A2A agents, skills and APIs. Publishers list entries on their own domain, registries index them and answer `POST /search`, and a registry can refer a query to other registries. Google announced it on 2026-06-17 under Apache 2.0. The v0.91 authors are from Google and Hugging Face, with R.V. Guha.

#### Topics

- **Choosing tools outside the context window**: putting every tool description in the prompt does not scale. ARD moves selection into a search service that can use representative queries, publisher identity and compliance metadata.
- **Richer descriptions**: v0.91 makes an entry a JSON-LD node. A publisher can add terms from other namespaces through `@context`, and a registry can filter on them with no change to the spec.
- **Publisher authority**: identifiers take the form `urn:air:<publisher>:...`, and the identity in an entry's trust manifest must match the publisher domain.
- **Usage terms**: the spec defines no term for a licence, usage terms or entitlements (v0.91 read 2026-11-16).

#### Related

- v0.91 defines its own ARD entry, and "every ARD entry is a well-formed catalog entry" ([AI Catalog](#ai-catalog)). The two groups agreed on 2026-07-09 to stay loosely coupled (ADR-0010 here, ADR-0017 there): the catalog entry stays thin, and ARD adds namespaced terms.
- v0.91 has publishers serve entries at `/.well-known/ard.json` and says a publisher on `/.well-known/ai-catalog.json` should move.

#### In use

- Hugging Face's [hf-discover](https://github.com/huggingface/hf-discover) is an ARD client and server, with search at `huggingface-hf-discover.hf.space` (responding 2026-11-16). The spec copy in that repository is v0.5.

#### History

- 2026-08-26: v0.91.
- 2026-07-09: Loose coupling with AI Catalog agreed.
- 2026-06-17: Announced by Google.
- 2026-06-16: v0.9 (Draft).
- 2026-05-28: v0.5.

Linked from: [AI Catalog](#ai-catalog)

### AI Catalog

- Id: ai-catalog
- Also known as: Agent-Card, ai-catalog.json
- Type: specification
- Status: ADR-0028 (open catalog and entry objects) accepted on the 2026-11-05 AI Catalog call and merged into the spec 2026-11-11; independently signed trust manifest contributions merged 2026-10-28
- Website: https://github.com/Agent-Card/ai-catalog
- Take part: [GitHub issues](https://github.com/Agent-Card/ai-catalog/issues)
- Tags: type/specification, layer/provenance, layer/identity, stage/at-rest, topic/discovery
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#ai-catalog

Catalog format for discovering agents, MCP servers and skills. A catalog is a JSON list of typed entries that a domain can serve at `/.well-known/ai-catalog.json`, and an entry can be another catalog. A four-seat Technical Steering Committee governs it, with two seats nominated by the [Model Context Protocol](#mcp) core maintainers and two by the A2A steering committee.

#### Topics

- **Discovery**: finding agents, servers and skills across vendors.
- **Catalog trust**: publishers, assessors and operators each add an [independently signed trust manifest](https://github.com/Agent-Card/ai-catalog/pull/117) to an entry's `trustManifests` array. Each signature covers that manifest and its subject, the artifact release, and not the rest of the entry.
- **Publisher and operator**: the party that runs a catalog (`host`) and the party responsible for an artifact (`publisher`) are separate roles. An operator that lists an artifact it does not publish must use an identifier under its own control, and "MUST NOT infer publisher authorization from the artifact's URL or an unsigned `publisher` field" (Catalog Projection).
- **Policy links**: the Policy URLs extension carries `privacyPolicyUrl` and `termsOfServiceUrl` for an artifact. A catalog signature covers the URL strings and not the documents behind them. The spec has no field for machine-readable usage terms or for the entitlements an artifact covers (read 2026-11-16).

#### Related

- Entry types include `application/mcp-server-card+json` for [SEP-2127 Server Cards](#mcp-server-cards) and `application/agent-skills+zip` for [Agent Skills](#agent-skills) bundles.
- [Agentic Resource Discovery](#ard) defines its own entry, and "every ARD entry is a well-formed catalog entry". The two groups agreed on 2026-07-09 to stay loosely coupled (ADR-0017): the catalog keeps thin entries with a small `extensions` map, and ARD takes JSON-LD `@context` for richer metadata.

#### Compare

- A path parallel to the [Agent Skills at-rest signing threads](#agent-skills-signing). Neither cites the other (searched 2026-11-15).

#### History

- 2026-11-11: Spec aligned with ADR-0028 ([PR 131](https://github.com/Agent-Card/ai-catalog/pull/131)).
- 2026-11-05: ADR-0028 accepted, opening catalog and entry objects to unrecognized members.
- 2026-10-28: Independently signed trust manifest contributions merged.
- 2026-07-09: Loose coupling with ARD agreed.

Linked from: [Agent Skills at-rest signing threads](#agent-skills-signing), [Agentic Resource Discovery](#ard), [KBART](#kbart), [SEP-2127 Server Cards](#mcp-server-cards)

### AI Disclosures Project

- Id: ai-disclosures-project
- Type: organization
- Status: Convenings at Bellagio (April 2026), Foo Camp (June and October 2026), Microsoft Research New York (September 2026)
- Website: https://ai-disclosures.org
- News: https://ai-disclosures.org/blog
- Feed: https://asimovaddendum.substack.com/feed
- Tags: type/organization, layer/governance, layer/attribution, layer/payments
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#ai-disclosures-project

Project hosted at Code for Science & Society. It works on the protocols that would make Human+AI markets participatory and decentralized. Prototypes include [Skills Marketplace](#skills-marketplace), the Open Memory Protocol Initiative (OMPI) and the Open Alpha Registry.

#### Topics

- **Value distribution**: the missing mechanisms for attribution and compensation in AI markets.
- **Measuring harm**: ecosystem exploitation in search results and access violations in pre-training data (paper repos).

#### History

- 2026-10: Convening at Foo Camp.
- 2026-09: Convening at Microsoft Research New York.
- 2026-06: Convening at Foo Camp.
- 2026-04: Convening at Bellagio.

Linked from: [Skills Marketplace](#skills-marketplace)

### ai.robots.txt

- Id: ai-robots-txt
- Type: project
- Website: https://github.com/ai-robots-txt/ai.robots.txt
- News: https://github.com/ai-robots-txt/ai.robots.txt/releases
- Feed: https://github.com/ai-robots-txt/ai.robots.txt/releases.atom
- Take part: [GitHub issues](https://github.com/ai-robots-txt/ai.robots.txt/issues)
- Tags: type/project, layer/access
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#ai-robots-txt

Community list of AI crawlers with generated robots.txt, Apache .htaccess, nginx, Caddy, HAProxy and lighttpd blocks.

#### Topics

- **Crawler blocking today**: giving site operators ready-made blocks, and a record of what they deploy compared with what [IETF AI Preferences Working Group](#ietf-aipref) specifies.

#### In use

- v2.2 (2026-11-16) adds the [Shared AI training robots.txt token](#aipref-training-token) group `User-agent: __usage_ai-training` to its robots.txt.

#### History

- 2026-11-16: [v2.2](https://github.com/ai-robots-txt/ai.robots.txt/releases/tag/v2.2) released with the `__usage_ai-training` token.

Linked from: [Shared AI training robots.txt token](#aipref-training-token)

### C2PA

- Id: c2pa
- Also known as: Coalition for Content Provenance and Authenticity
- Type: organization
- Status: Spec 2.5 published October 2026
- Website: https://c2pa.org
- News: https://c2pa.org/news/, https://c2pa.org/blog/
- Feed: https://c2pa.org/feed/
- Take part: [membership](https://c2pa.org/membership/), [spec issues](https://github.com/c2pa-org/specifications/issues)
- Tags: type/organization, layer/provenance, stage/at-rest, stage/in-transit, stage/trust, medium/image, medium/video, medium/audio, medium/text
- Updated: 2026-11-21
- Explorer: https://www.olahungerford.com/content-provenance/#c2pa

Standards body for content credentials: signed manifests (claims and assertions) bound to an asset, with ingredients for derived works. Reference code is maintained by the [Content Authenticity Initiative](#content-authenticity-initiative).

#### Topics

- **Asset provenance**: proving where an asset came from and what was done to it, with the record cryptographically bound to the asset.
- **Text and JSON provenance**: binding a credential to formats with no metadata slot. Appendix A.8 carries a manifest in unstructured text as invisible Unicode variation selectors. The spec says the method "remains under review", and partially copied text counts as having no manifest. [Encypher](#encypher) sells sentence-level marking on top of it. 2.5 added [Appendix A.9.3](https://spec.c2pa.org/specifications/specifications/2.5/specs/C2PA_Specification.html#_guidance_for_json_based_formats), "Guidance for JSON-Based Formats", which says a JSON format "can define their own extension point" and gives a `c2pa_credential` root member as an example (read 2026-11-21). [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta) relies on it, and the spec does not name MCP. The conformance text rubric has no JSON group yet.
- **Front matter**: carrying a manifest reference in a file that already has YAML front matter. Appendix A.9.4.2 puts the two delimiters and the reference on three lines inside it. PyYAML 6.0.3 rejects the spec's own example in A.9.4.3.3 (run 2026-11-17). [Agent Skills discussion 651](https://github.com/agentskills/agentskills/discussions/651) reports the same from PyYAML, strictyaml and js-yaml and uses a single `#` comment line. Its author says they have proposed that form to C2PA.
- **Stripped metadata**: recovering provenance after the manifest is removed, through watermarks and fingerprints on the soft-binding algorithm list (79 entries on 2026-11-16: 60 watermarks and 19 fingerprints). 26 of them list an audio media type, 20 watermarks and 6 fingerprints (read 2026-11-20).
- **Signer trust**: deciding who may sign, through a trust list and a conformance program.

#### Related

- Identity and consent assertions come from [Creator Assertions Working Group](#cawg).
- Signing skill folders: [Agent Skills at-rest signing threads](#agent-skills-signing).
- [SPUR Coalition](#spur-coalition)'s Content Telemetry accepts a C2PA manifest hash as a content identifier.

#### Compare

- Its trust list answers the same question as the [AAIF Identity and Trust WG](#aaif-identity-trust-wg): who may sign. Neither names the other (searched 2026-11-15).

#### In use

- The [conforming products list](https://github.com/c2pa-org/conformance-public/blob/main/conforming-products/conforming-products-list.json) had 349 records from 222 applicants on 2026-11-19: 307 generators and 42 validators. 262 generators sign images, 201 sign video and 109 sign audio. One lists a plain-text format and none lists HTML. The [Conformance Explorer](https://spec.c2pa.org/conformance-explorer/) shows the same data.
- Appendix A.8 has two published libraries: [c2pa-text](https://pypi.org/project/c2pa-text/) from [Encypher](#encypher) (3.0.0, 2026-06-19) and [c2pa-unstructured-text](https://crates.io/crates/c2pa-unstructured-text) from WritersLogic (0.2.0, 2026-08-02).
- News publishers that sign images and video are listed on [IPTC](#iptc).

#### History

- 2026-10: Spec 2.5 published.

Linked from: [Agent Skills at-rest signing threads](#agent-skills-signing), [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta), [Content Authenticity Initiative](#content-authenticity-initiative), [Creator Assertions Working Group](#cawg), [Croissant](#croissant), [DDEX](#ddex), [Encypher](#encypher), [EU AI Act and GPAI Code of Practice](#eu-ai-act-gpai-code), [IPTC](#iptc), [NISO](#niso), [Skills Marketplace](#skills-marketplace)

### C2PA content credentials in MCP _meta

- Id: mcp-c2pa-in-meta
- Also known as: #3225, org.c2pa/credential
- Type: proposal
- Status: Discussion closed 2026-09-25 when the spec repo limited Discussions to meeting notes; no SEP filed yet
- Website: https://github.com/modelcontextprotocol/modelcontextprotocol/discussions/3225
- Part of: [Model Context Protocol](#mcp)
- Take part: [the discussion thread](https://github.com/modelcontextprotocol/modelcontextprotocol/discussions/3225), [MCP community channels](https://modelcontextprotocol.io/community/communication)
- Tags: type/proposal, layer/provenance, stage/in-transit, venue/mcp
- Updated: 2026-11-21
- Explorer: https://www.olahungerford.com/content-provenance/#mcp-c2pa-in-meta

Carry a [C2PA](#c2pa) credential for tool results and resources in MCP `_meta` under `org.c2pa/credential`.

#### Topics

- **Provenance in transit**: keeping a credential attached as content crosses from server to client.
- **A venue**: finding an owner. The [MCP Financial Services Interest Group](#mcp-fsig) lists data lineage and citation for its sector and the Scientific Computing IG lists provenance of computed results. No WG or IG covers content provenance in general, and [PR 3336](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3336) requires a WG or IG thread before a SEP PR.
- **Track choice**: deciding between an `experimental-ext-` repo under SEP-3392 and a Standards Track SEP.
- **Where the field lives**: choosing between a top-level field and `_meta`.

#### Compare

- [SEP-3094 Granular Citations](#mcp-sep-3094-citations) faced the same choice between a top-level field and `_meta`. Neither thread refers to the other (searched 2026-11-15).
- A credential check could run as an interceptor validator ([MCP Interceptors WG and SEP-2624](#mcp-interceptors)). Neither thread refers to the other (searched 2026-11-15).
- Lineage key overlap: [OpenLineage](#openlineage). Neither names the other (searched 2026-11-15).

#### History

- 2026-09-25: Discussion closed when the spec repo limited Discussions to meeting notes ([closing comment](https://github.com/modelcontextprotocol/modelcontextprotocol/discussions/3225#discussioncomment-18603053)).

Linked from: [Agent Skills at-rest signing threads](#agent-skills-signing), [C2PA](#c2pa), [MCP Interceptors WG and SEP-2624](#mcp-interceptors), [MCP Security Interest Group](#mcp-security-ig), [Model Context Protocol](#mcp), [OpenLineage](#openlineage), [OpenTelemetry for MCP](#otel-mcp)

### CC Signals

- Id: cc-signals
- Type: proposal
- Status: Public alpha planned for early 2027, starting with SourceConnection (announced 2026-11-16); the GitHub draft is unchanged since 2025-12-04
- Website: https://github.com/creativecommons/cc-signals
- Part of: [Creative Commons](#creative-commons)
- Take part: [GitHub issues](https://github.com/creativecommons/cc-signals/issues)
- Tags: type/proposal, layer/access, layer/attribution
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#cc-signals

Preference signals for AI reuse with terms attached: Credit, Credit + Direct Contribution, Credit + Ecosystem Contribution, Credit + Open. Layered on [IETF AI Preferences Working Group](#ietf-aipref) vocabulary. That is the 2025 GitHub draft. CC's [page](https://creativecommons.org/ai-and-the-commons/cc-signals/) now describes a framework of legal tools and norms with two components, SourceConnection and ShareBack.

#### Topics

- **Reuse with reciprocity**: letting stewards allow AI reuse with terms attached, for those who do not want a plain opt-out.
- **Checking credit**: knowing whether credit was given.

#### Compare

- [Content Telemetry](#content-telemetry) and [SEP-3094 Granular Citations](#mcp-sep-3094-citations) are two ways to check whether credit was given. Neither names CC Signals (searched 2026-11-15).

#### History

- 2026-11-16: CC [said](https://creativecommons.org/2026/11/16/advancing-cc-signals-preparing-for-public-alpha-testing-in-2027/) a public alpha is planned for early 2027 and will first focus on SourceConnection.
- 2026-05-13: CC [said](https://creativecommons.org/2026/05/13/from-signals-to-infrastructure-strengthening-the-commons-for-the-ai-era/) attribution must be a requirement in the next iteration.
- 2026-04-23: CC [said](https://creativecommons.org/2026/04/23/update-on-cc-signals-what-changed-and-why/) CC Signals is no longer limited to signaling preferences.

Linked from: [Creative Commons](#creative-commons), [IETF AI Preferences Working Group](#ietf-aipref), [NISO](#niso)

### CISAC

- Id: cisac
- Also known as: International Confederation of Societies of Authors and Composers
- Type: organization
- Status: Asks policymakers for licensing, transparency and an effective opt-out from data mining exceptions (AI page read 2026-11-15)
- Website: https://www.cisac.org
- News: https://www.cisac.org/newsroom
- Tags: type/organization, layer/licensing, layer/payments, layer/governance, medium/audio, medium/video
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#cisac

Network of authors' collecting societies, founded in 1926 and based in France. Its About page counts over 225 member societies in more than 110 countries, representing more than 5 million creators in music, audiovisual, drama, literature and visual arts. [GEMA](#gema) is a member, and the CEO of [SOCAN](#socan) is a Vice-Chair of [its board](https://www.cisac.org/Newsroom/news-releases/cisac-announces-new-board-directors). It lists ISWC, ida, CIS-Net, ISAN, DDEX and IPI as its standards and tools.

#### Topics

- **Licensing AI use**: getting AI services to take licenses for the works they train on. Director General Gadi Oron [said on 2025-01-21](https://www.cisac.org/Newsroom/articles/cisac-dg-gadi-oron-opens-music-ally-connect-impact-ai), "We want to license all of these AI platforms for the inputs", and that none of the authors' societies had licensed a music AI service at that point. The Swedish society [STIM](#stim) launched one as a pilot on 2025-09-08, and CISAC [carried the announcement](https://www.cisac.org/Newsroom/society-news/stim-launches-worlds-first-collective-ai-music-licence) in its society news.
- **Opt-out from data mining exceptions**: keeping the right to refuse where a law lets AI developers mine works without a license. Its [principles for policymakers](https://www.cisac.org/AI) say exceptions "which do not provide for effective opt-out by rightsholders should be avoided".
- **Training transparency**: finding out which works a model was trained on. The same page says "AI providers must be obliged to inform on the training of copyrighted works".
- **Revenue at risk**: putting a number on what generative AI costs creators. The [study](https://www.cisac.org/services/reports-and-research/cisacpmp-strategy-ai-study) it commissioned from PMP Strategy estimates that 24% of music creators' revenues and 21% of audiovisual creators' revenues are at risk by 2028.

#### Compare

- Collective licensing of AI use for web publishers: [Internet Licensing Collective](#internet-licensing-collective). Its About page does not mention music societies (read 2026-11-15).

#### History

- 2025-09-08: [STIM](#stim) launched a collective AI license for music as a pilot.
- 2025-01-21: Its Director General said no authors' society had yet licensed a music AI service.
- 2023-07: Published seven principles for policymakers on AI.
- 1926: Founded.

Linked from: [GEMA](#gema), [SOCAN](#socan), [STIM](#stim)

### Cloudflare Content Signals

- Id: cloudflare-content-signals
- Also known as: draft-romm-aipref-contentsignals
- Type: proposal
- Status: Individual AIPREF draft, shown as expired on Datatracker (read 2026-11-15); parsed by policycheck
- Website: https://contentsignals.org
- Take part: [ai-control mailing list](https://mailarchive.ietf.org/arch/browse/ai-control/)
- Tags: type/proposal, layer/access
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#cloudflare-content-signals

Three robots.txt categories, `search`, `ai-input` and `ai-train`, proposed as [IETF AI Preferences Working Group](#ietf-aipref) vocabulary.

#### Topics

- **Use categories**: separating search indexing, use as model input and training in one signal.

#### In use

- Cloudflare's managed robots.txt serves the policy with `search=yes, ai-train=no` by default. Cloudflare said customers had turned managed robots.txt on for over 3.8 million domains at launch ([Cloudflare blog](https://blog.cloudflare.com/content-signals-policy/), 2025-09-24).
- [policycheck](https://github.com/openattribution-org/policycheck) v0.2.1 (2026-02-15) reads `Content-Signal` lines in robots.txt.

Linked from: [IETF AI Preferences Working Group](#ietf-aipref), [OpenAttribution.org](#openattribution), [Really Simple Licensing](#rsl)

### Content Authenticity Initiative

- Id: content-authenticity-initiative
- Also known as: CAI, contentauth
- Type: project
- Status: Maintains c2pa-rs, c2pa-python, c2pa-js and c2patool
- Website: https://contentauthenticity.org
- News: https://contentauthenticity.org/blog
- Take part: [join CAI](https://contentauthenticity.org/join), [GitHub](https://github.com/contentauth)
- Tags: type/project, layer/provenance
- Updated: 2026-11-17
- Explorer: https://www.olahungerford.com/content-provenance/#content-authenticity-initiative

Adobe-led initiative that maintains the open-source reference implementations of [C2PA](#c2pa). It is a separate body, and C2PA lists it among its partner organizations.

#### Topics

- **Reference SDKs**: giving developers one implementation for signing and verifying manifests, with a Rust core and Python and JS bindings.
- **Text handlers**: signing plain and structured text in practice. Structured-text and plain-text A.8 handlers merged in c2pa-rs behind an experimental flag (2026-09); HTML, XML and TTML handlers are open. [Pull request 3029](https://github.com/contentauth/c2pa-rs/pull/3029), opened 2026-11-05, lets the structured-text handler sign and read a manifest held at a URL. It was open on 2026-11-17, and the [Agent Skills at-rest signing threads](#agent-skills-signing) example depends on it.

Linked from: [Agent Skills at-rest signing threads](#agent-skills-signing), [C2PA](#c2pa)

### Content Telemetry

- Id: content-telemetry
- Type: specification
- Status: v1.0 published 2026-09-02; per-event signing is informational (section 8.4) and manifest signing is deferred (section 8.9)
- Website: https://github.com/SPUR-Coalition/telemetry
- News: https://github.com/SPUR-Coalition/telemetry/releases
- Feed: https://github.com/SPUR-Coalition/telemetry/releases.atom
- Part of: [SPUR Coalition](#spur-coalition)
- Take part: [GitHub issues](https://github.com/SPUR-Coalition/telemetry/issues)
- Tags: type/specification, layer/attribution, stage/after-delivery
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#content-telemetry

Five reportable stages: `content_retrieved`, `content_grounded`, `content_cited`, `content_presented`, `content_engaged`. Manifest discovery at `/.well-known/content-telemetry.json`. `license_ref` joins it to the licensing layer ([Really Simple Licensing](#rsl), [IAB Tech Lab Content Monetization Protocols](#iab-comp)).

#### Topics

- **Usage reporting**: reporting how AI systems use content after retrieval, in five events.
- **Demanding conformance**: a manifest cannot require a conformance level from an agent (section 8.5).
- **Declaring coverage**: a report does not show whether every event was reported. Section 5.7.6 has an emitter declare one of four coverage modes (complete, sampled, aggregated, selected) and the scope it applies over, and says a consumer must not read a missing event as proof that nothing happened unless coverage is complete.
- **Reporting for an institution**: `access_context` names the institution a session's access rights derive from, as a claim by the emitter (section 5.1.3). `content_depth` records whether a retrieval reached metadata, an abstract or the full record (section 6.1).
- **MCP binding**: the specification defines none and lists MCP tool calls as one delivery pattern (section 7.1). telemetry-js's `MCPSessionTracker` emits retrieved, cited and presented events from MCP tool and response hooks.

#### Related

- [COUNTER Metrics](#counter) says phase two of its AI guidelines is aligned with it. It maps retrieved, cited and presented events to its metrics and counts nothing for a grounded event.
- v1.0 has no event for a retrieval that was refused (read at 7da55f2, 2026-11-17).

#### Compare

- [SEP-3094 Granular Citations](#mcp-sep-3094-citations) `citations.render` would need the `content_cited` and `content_presented` events. Neither names the other (searched 2026-11-15).
- Execution traces, which stop at the tool call: [OpenTelemetry for MCP](#otel-mcp). Neither names the other (searched 2026-11-15).

#### In use

- [telemetry-js](https://github.com/SPUR-Coalition/telemetry-js) is on npm as `@openattribution/telemetry` and includes an `MCPSessionTracker`. Its `latest` tag is 0.1.3 (2026-06-12), and versions 0.2.0 to 0.4.0 (2026-03-03 to 2026-05-28) are also published. Its 1.0.0, which implements v1.0 of the standard, is unreleased.

#### History

- 2026-09-02: v1.0 published.

Linked from: [AAIF Observability and Traceability WG](#aaif-observability-traceability-wg), [CC Signals](#cc-signals), [COUNTER Metrics](#counter), [Google Scholar Mediated Reading](#google-scholar-mediated-reading), [Internet Licensing Collective](#internet-licensing-collective), [Model Context Protocol](#mcp), [OpenAttribution.org](#openattribution), [OpenTelemetry for MCP](#otel-mcp), [Really Simple Licensing](#rsl), [SEP-3094 Granular Citations](#mcp-sep-3094-citations), [SPUR Coalition](#spur-coalition), [TRACE](#trace)

### COUNTER Metrics

- Id: counter
- Type: organization
- Status: Phase two of its AI best practice published 2026-10-23; it says the guidelines are aligned with the SPUR telemetry framework
- Website: https://www.countermetrics.org
- News: https://www.countermetrics.org/news/
- Take part: [membership](https://www.countermetrics.org/members/)
- Tags: type/organization, layer/attribution
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#counter

Usage-metrics standard for scholarly publishers and libraries.

#### Topics

- **AI usage metrics**: counting usage when the reader is an AI system. Phase two references [Content Telemetry](#content-telemetry). The [best practice](https://www.countermetrics.org/code-of-practice/best-practice/bp-ai/) says the AI metric types "are all OPTIONAL extensions to the Code of Practice" and that "AI reporting is not subject to formal audits" (read 2026-11-17).
- **Counting retrievals apart from use**: phase two adds retrieval metrics, which count an excerpt an AI system pulls even when it is not used in the answer. AI activity is tagged with the Agent access method, which appears in a report only when requested.
- **Mapping telemetry events to metrics**: a [Content Telemetry](#content-telemetry) retrieved event counts toward Total_Retrieved_Investigations, and toward Total_Retrieved_Requests where the AI system has full text. A cited or presented event counts as 1 Total_AI_Investigation, and as 1 Total_AI_Request where the AI system has full text. The guidance's scenario gives "no COUNTER metrics" for grounded excerpts and calls engagement "usage activity covered by standard publisher reporting".
- **Usage reported by a third party**: an AI system that sends usage to the publisher is reported under a `SYNDICATED:` namespace. The guidance has a section on [Google Scholar Mediated Reading](#google-scholar-mediated-reading), reported as `SYNDICATED:Google_MERU`.
- **Refused reads**: "There are no denial metrics associated specifically with Access_Method Agent" (read 2026-11-17).

#### Related

- [TRACE](#trace) participants part-fund its API and JSON Schema work for the AI metrics ([Introducing TRACE](https://www.countermetrics.org/trace-project/), 2026-10-06).

- Steve Smith and Josh Nicholson of Research Solutions [propose](https://scholarlykitchen.sspnet.org/2026/11/16/guest-post-beyond-the-download-what-counts-as-scholarly-content-use-in-the-age-of-ai/) keeping AI activity in four ledgers (usage, demand, contribution, engagement) built on these metrics. They report that from 2026-10-07 to 2026-11-06, 3.7 million of 7.2 million attempted reads of publisher content through Scite were refused full text for want of AI-access permission. They describe the figures as gateway-specific and unaudited.

#### History

- 2026-10-23: [Phase two](https://www.countermetrics.org/ai-phase-two/) of the AI best practice published.
- 2026-10-06: TRACE funding announced.

Linked from: [Content Telemetry](#content-telemetry), [Google Scholar Mediated Reading](#google-scholar-mediated-reading), [TRACE](#trace)

### Creative Commons

- Id: creative-commons
- Also known as: CC
- Type: organization
- Status: CC Signals public alpha planned for early 2027, starting with SourceConnection (announced 2026-11-16)
- Website: https://creativecommons.org
- News: https://creativecommons.org/blog/
- Feed: https://creativecommons.org/feed/
- Take part: [contact](https://creativecommons.org/mission/contact/)
- Tags: type/organization, layer/licensing, layer/access, layer/attribution
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#creative-commons

Steward of the CC licenses and CC REL machine-readable license metadata. Proposes [CC Signals](#cc-signals) and filed AIPREF drafts on exclusions and parameters ([IETF AI Preferences Working Group](#ietf-aipref)). The exclusions draft expired on 2026-10-24.

#### Topics

- **AI reuse beyond licensing**: giving stewards terms for AI reuse, since licensing alone cannot address it (September 2026 guidance).
- **Attribution in answers**: honoring the CC attribution requirement when content reaches a model or an agent answer.
- **Source references in answers**: finding early adopters for the CC Signals alpha in 2027. Its SourceConnection component would require AI developers to "provide references to sources when AI systems use outside sources to help answer questions".

#### Compare

- [Open Knowledge Foundation](#okfn), whose MCP server already returns a list of sources, is a candidate early adopter for SourceConnection. Neither names the other (searched 2026-11-15).

Linked from: [CC Signals](#cc-signals), [IETF AI Preferences Working Group](#ietf-aipref), [Open Knowledge Foundation](#okfn)

### Creator Assertions Working Group

- Id: cawg
- Also known as: CAWG
- Type: working-group
- Status: Moved under DIF; consent assertion started as a placeholder draft 2026-07-12
- Website: https://cawg.io
- Part of: [Decentralized Identity Foundation](#dif)
- Take part: [spec repositories](https://github.com/orgs/decentralized-identity/repositories?q=cawg), via DIF membership
- Tags: type/working-group, layer/provenance, layer/identity, layer/access
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#cawg

Assertion specs that ride inside [C2PA](#c2pa) manifests: identity, training and data mining, consent, metadata, endorsement, certificate policy.

#### Topics

- **Signer identity**: naming the actor behind a credential, the identity upgrade path for [Agent Skills at-rest signing threads](#agent-skills-signing).
- **Training and data mining opt-out**: letting an opt-out travel with the asset.
- **Consent**: recording consent as a signed assertion.

#### Related

- Its metadata assertion binds metadata from other standards, [IPTC](#iptc) among them, to the manifest.

#### Compare

- The training and data mining assertion is the asset-side counterpart to [IETF AI Preferences Working Group](#ietf-aipref) and [W3C TDM Reservation Protocol Community Group](#w3c-tdmrep), which attach an opt-out to a location. The specs do not cite each other (searched 2026-11-15).

#### History

- 2026-07-12: Consent assertion repository created with a placeholder 1.0 draft.

Linked from: [Agent Skills at-rest signing threads](#agent-skills-signing), [C2PA](#c2pa), [Decentralized Identity Foundation](#dif), [Encypher](#encypher), [EU AI Act and GPAI Code of Practice](#eu-ai-act-gpai-code), [IPTC](#iptc), [W3C ODRL](#w3c-odrl)

### Croissant

- Id: croissant
- Type: specification
- Status: 1.1 published 2026-01-29 and announced 2026-02-12; required for NeurIPS 2026 dataset submissions
- Website: https://github.com/mlcommons/croissant
- News: https://mlcommons.org/tag/croissant/
- Feed: https://mlcommons.org/tag/croissant/feed/
- Take part: [GitHub issues](https://github.com/mlcommons/croissant/issues)
- Tags: type/specification, layer/provenance, layer/licensing, medium/data
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#croissant

MLCommons dataset metadata format. 1.1 added machine-actionable provenance, consent and licensing fields.

#### Topics

- **Dataset provenance and consent**: recording what a training set was allowed to contain.

#### Compare

- The dataset-side counterpart to [C2PA](#c2pa) for assets. The only mention found is a contributor's remark on [Croissant issue 885](https://github.com/mlcommons/croissant/issues/885) (searched 2026-11-15).

#### In use

- The NeurIPS 2026 Evaluations and Datasets Track required a Croissant file with every dataset submission, including Responsible AI fields ([NeurIPS blog](https://blog.neurips.cc/2026/05/04/responsible-ai-metadata-requirements-for-the-evaluations-and-datasets-track-neurips-2026/), 2026-05-04).
- Hugging Face, Kaggle, OpenML and Harvard Dataverse generate a Croissant file for the datasets they host, according to the [NeurIPS 2026 hosting guidelines](https://neurips.cc/Conferences/2026/EvaluationsDatasetsHosting).

#### History

- 2026-02-12: MLCommons announced 1.1.
- 2026-01-29: 1.1 specification published.

### Data Provenance Initiative

- Id: data-provenance-initiative
- Type: project
- Status: Last code push 2025-03
- Website: https://www.dataprovenance.org
- Take part: [GitHub](https://github.com/Data-Provenance-Initiative/Data-Provenance-Collection)
- Tags: type/project, layer/provenance, layer/licensing, medium/data
- Updated: 2026-11-16
- Explorer: https://www.olahungerford.com/content-provenance/#data-provenance-initiative

MIT-led audits of training-corpus licenses, with datasets on Hugging Face.

#### Topics

- **Dataset license audits**: finding out which licenses actually apply to the datasets models are trained on.

Linked from: [Fairly Trained](#fairly-trained)

### Dataspace Protocol

- Id: dataspace-protocol
- Also known as: DSP, Eclipse Dataspace Protocol
- Type: specification
- Status: 2025-1 released 2025-08-29 and considered stable; second errata tagged 2026-09-11
- Website: https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/
- News: https://github.com/eclipse-dataspace-protocol-base/DataspaceProtocol/releases
- Feed: https://github.com/eclipse-dataspace-protocol-base/DataspaceProtocol/releases.atom
- Take part: [GitHub issues](https://github.com/eclipse-dataspace-protocol-base/DataspaceProtocol/issues)
- Tags: type/specification, layer/licensing, layer/access, medium/data
- Updated: 2026-11-17
- Explorer: https://www.olahungerford.com/content-provenance/#dataspace-protocol

Eclipse Dataspace Working Group specification for sharing data between organizations under usage control. A provider publishes a catalog, the two sides negotiate an agreement, and then the data transfers. The International Data Spaces Association governed it up to version 2024-1.

#### Topics

- **Terms agreed before access**: the spec defines "the schemas and protocols required for entities to publish data, negotiate Agreements, and access data". It has three parts: a catalog protocol, a contract negotiation protocol and a transfer process protocol.
- **Reusing web vocabularies**: catalogs reuse DCAT and policies reuse ODRL ([W3C ODRL](#w3c-odrl)), each as a restricted profile.

#### Compare

- In a [comment](https://scholarlykitchen.sspnet.org/2026/10/27/mcp-discovery/) of 2026-10-28, Matt Sonnati suggests data spaces as the model for a register of [Model Context Protocol](#mcp) connectors: connectors listed in a DCAT catalogue, with entitlements and AI terms as ODRL policies. Neither MCP's docs nor the 2025-1 spec names the other (searched 2026-11-16).

#### History

- 2026-09-11: Second errata to 2025-1 tagged.
- 2025-08-29: 2025-1 released.

### DDEX

- Id: ddex
- Also known as: Digital Data Exchange
- Type: organization
- Status: Generative AI Declaration Standard (GAI-D) committee draft finished member comments and goes to peer review next, with publication expected in early 2027 (announced 2026-11-05)
- Website: https://ddex.net
- Feed: https://ddex.net/feed/
- Take part: [working groups](https://ddex.net/about-ddex/working-groups/), for Charter and Full Members
- Tags: type/organization, layer/provenance, layer/attribution, layer/licensing, medium/audio
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#ddex

Not-for-profit membership organisation, set up in 2006, that writes the message standards labels, distributors and streaming services use to exchange release data, credits and sales reports. It says the standards are free to implement and that implementers do not need to be members.

#### Topics

- **Release metadata**: telling a streaming service what a release is and who is credited on it, in one message format, the Electronic Release Notification (ERN).
- **AI disclosure**: saying that a recording, or one contributor's part in it, was made with generative AI. The [ERN release notes](https://ern.ddex.net/electronic-release-notification-message-suite-part-1-definitions-of-messages/annex-a-(informative)-release-notes/) list both under version 4.3.1. A sound recording, image, text, video or release can carry [`ContainsAI`](https://service.ddex.net/dd/DD-ERN-432/dd/ddex_ContainsAI.html), and a contributor can carry [`AiContribution`](https://service.ddex.net/dd/DD-ERN-432/dd/ddex_AiContribution.html). The data dictionary's rules use the values All, Partly and None.
- **Declared, not checked**: the disclosure is what the sender of the message declares. Spotify's [help page](https://support.spotify.com/us/article/ai-credits/) says "AI credits are optional for artists to share" and "The absence of AI credits doesn't mean AI wasn't used on a song."
- **AI as a use type**: naming AI training among the uses a message can refer to. The [allowed value sets](https://kb.ddex.net/reference-material/current-allowed-value-sets/) include `UseForGenerativeAI`, `UseForTrainingGenerativeAI` and `UseForTrainingNonGenerativeAI`.
- **A standard for AI declarations**: its Artificial Intelligence group is set up "to investigate the metadata requirements for the communication of AI-generated music", including musical works. The group's Generative AI Declaration Standard (GAI-D) has finished member comments on its committee draft and goes to peer review next, with publication expected in early 2027.

#### Compare

- [C2PA](#c2pa) records how an asset was made in a signed manifest bound to the file. No DDEX page refers to it, and no C2PA page refers to DDEX (searched 2026-11-15).

#### In use

- ERN 4.3.2 is the latest published version, and DDEX [advises implementing it](https://kb.ddex.net/implementing-each-standard/electronic-release-notification-message-suite-(ern)/). Its data dictionary is dated 2025-06-26. The allowed value sets are at version 012 (2026-09-16).
- Spotify launched AI Credits in April 2026 and [said on 2026-10-20](https://newsroom.spotify.com/2026-10-20/prioritizing-human-artistry/) that artists submit "tens of thousands of credits every day". Its [support page](https://support.spotify.com/us/artists/article/ai-credits/) calls the feature a beta, shown in song credits on mobile and available through certain distributors (read 2026-11-15). The support page does not mention DDEX.

#### History

- 2026-11-05: [Announced](https://ddex.net/ddex-announces-elevenlabs-as-first-ai-company-to-join-membership/) ElevenLabs as the first AI company among its members, and said GAI-D would go through peer review before publication in early 2027.
- 2025-09-25: Spotify [said](https://newsroom.spotify.com/2025-09-25/spotify-strengthens-ai-protections/) it would support "the new industry standard for AI disclosures in music credits, developed through DDEX", and named 19 labels and distributors working on it.
- 2024-08-09: Date of the ERN 4.3.1 data dictionary, which includes `ContainsAI` and `AiContribution`.
- 2006: Founded.

Linked from: [SOCAN](#socan), [STIM](#stim)

### Decentralized Identity Foundation

- Id: dif
- Also known as: DIF
- Type: organization
- Status: Hosts CAWG
- Website: https://identity.foundation
- News: https://blog.identity.foundation/
- Feed: https://blog.identity.foundation/rss/
- Take part: [join DIF](https://identity.foundation/join/)
- Tags: type/organization, layer/identity
- Updated: 2026-11-17
- Explorer: https://www.olahungerford.com/content-provenance/#dif

Standards body for decentralized identifiers and verifiable credentials. Hosts [Creator Assertions Working Group](#cawg).

#### Topics

- **Decentralized identity**: interoperable identifiers and credentials that agent identity specs build on.

#### Compare

- [Agent Identity and Manifest Standard](#aims) builds on W3C DIDs and Verifiable Credentials. It names DIF only as the host of CAWG (searched 2026-11-15).

Linked from: [Creator Assertions Working Group](#cawg)

### Encypher

- Id: encypher
- Also known as: Encypher Corporation, EncypherAI, c2pa-text
- Type: organization
- Status: The Atlantic plans to implement its text marking, announced 2026-11-11 with no rollout date
- Website: https://encypher.com
- News: https://encypher.com/blog
- Feed: https://encypher.com/feed.xml
- Take part: [c2pa-text issues](https://github.com/encypherai/c2pa-text/issues)
- Tags: type/organization, layer/provenance, layer/licensing, stage/at-rest, medium/text, medium/image, medium/audio, medium/video
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#encypher

Company that sells text provenance built on [C2PA](#c2pa). Signing is free for publishers and checking is free for anyone. Plans for marking AI output start at $99 a month, and its Meter usage reports are offered as a pilot with no listed price (read 2026-11-20). It says it wrote the C2PA text appendix (A.8) and co-chairs the Text Provenance Task Force. The spec names no authors.

#### Topics

- **Text embedding**: carrying a signed manifest inside text that has no metadata slot, as invisible Unicode variation selectors. This part is the C2PA appendix, and its [c2pa-text](https://github.com/encypherai/c2pa-text) library is MIT-licensed.
- **Excerpts**: checking a quoted passage against the signed original. C2PA treats partially copied text as having no manifest, so Encypher adds a marker per sentence and a Merkle assertion in its own namespace. Its glossary calls sentence-level attribution "patent-pending".
- **Identity and terms**: tying the record to a publisher and to stated reuse terms. Its posts cite the [Creator Assertions Working Group](#cawg) identity and metadata assertions and the [IPTC](#iptc) verified publishers list, and its site refers to [Really Simple Licensing](#rsl) and [W3C ODRL](#w3c-odrl) for terms.

#### Related

- Its 2026-11-11 post carries one C2PA manifest and 67 sentence markers (counted 2026-11-20). Seven of the manifest's eleven assertions are in Encypher's namespace, and none is a CAWG identity assertion or a licensing assertion (decoded 2026-11-15, signature not checked).
- [WritersLogic](https://github.com/writerslogic/c2pa-unstructured-text) publishes a separate implementation of the same appendix.

#### In use

- [c2pa-text](https://pypi.org/project/c2pa-text/) is at 3.0.0 on PyPI (2026-06-19), with TypeScript, Rust and Go versions in the same repository.
- It is a conformant generator on the [C2PA conforming products list](https://github.com/c2pa-org/conformance-public/blob/main/conforming-products/conforming-products-list.json) since 2026-05-26, against spec 2.2, for image, audio, video and PDF formats. The record lists no text format.
- Its own blog is signed with it. The [post announcing The Atlantic](https://encypher.com/blog/the-atlantic-and-encypher-verifiable-journalism) carries the marks (2026-11-11).

#### History

- 2026-11-11: Announced that The Atlantic plans to implement its provenance technology.
- 2026-05-26: Listed by C2PA as a conformant generator product.

Linked from: [C2PA](#c2pa)

### Enterprise-Managed Authorization

- Id: mcp-enterprise-managed-authorization
- Also known as: SEP-990, EMA, ID-JAG
- Type: specification
- Status: Stable since 2026-06-18; its interest group was folded into the Authorization IG on 2026-08-17
- Website: https://modelcontextprotocol.io/extensions/auth/enterprise-managed-authorization
- Part of: [Model Context Protocol](#mcp)
- Take part: [ext-auth issues](https://github.com/modelcontextprotocol/ext-auth/issues), [Authorization IG charter](https://modelcontextprotocol.io/community/interest-groups/auth)
- Tags: type/specification, venue/mcp, layer/identity, layer/access
- Updated: 2026-11-17
- Explorer: https://www.olahungerford.com/content-provenance/#mcp-enterprise-managed-authorization

An MCP authorization extension (`io.modelcontextprotocol/enterprise-managed-authorization`) that lets an organization's identity provider decide which MCP servers its users can reach. The user signs in once. The client exchanges that sign-in at the identity provider for an Identity Assertion JWT Authorization Grant (ID-JAG), and the MCP server's authorization server exchanges the grant for an access token.

#### Topics

- **One sign-in for many servers**: standard MCP authorization has each user authorize each server. Here the identity provider evaluates policy and issues the grant, with no per-server consent step.
- **Admin control**: the spec gives administrators "visibility and control over which MCP Servers are able to be used within the organization."
- **Three parties**: the identity provider, the MCP client and the server's authorization server all have to support it. The interest group charter says the flow "only delivers value" when the three interoperate end to end.
- **Identity without entitlements**: the spec does not mention licences or entitlements (2026-07-28 revision read 2026-11-16). Which content a user's institution has licensed is left to the server.

#### Related

- Written for corporate identity providers. The Authorization IG charter lists Okta, Entra ID, Ping and Keycloak.
- The 2026-06-18 announcement names Anthropic, Microsoft and Okta as adopters.

#### Compare

- [GetFTR](#getftr) answers whether a user's institution is entitled to an article, which this extension leaves to the server. Its MCP service authenticates with an API key (docs read 2026-11-16). Neither names the other (searched 2026-11-16).

#### History

- 2026-08-17: Interest group folded into the Authorization IG.
- 2026-06-18: Extension announced as stable.
- 2025-06-04: SEP-990 created.

Linked from: [Model Context Protocol](#mcp)

### EU AI Act and GPAI Code of Practice

- Id: eu-ai-act-gpai-code
- Also known as: Article 50
- Type: regulation
- Status: Opt-out protocol consultation closed 2026-01-23; the Commission has not published its list of generally agreed protocols (searched 2026-11-20); Article 50 applies from 2026-08-02
- Website: https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai
- Tags: type/regulation, layer/access, layer/governance, layer/provenance
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#eu-ai-act-gpai-code

The copyright chapter of the GPAI Code of Practice has signatories follow robots.txt and identify and comply with other appropriate machine-readable protocols. Article 50 sets transparency duties for AI-generated content.

#### Topics

- **Ranking opt-outs**: deciding which mechanisms count. The Commission's [consultation FAQ](https://digital-strategy.ec.europa.eu/en/faqs/stakeholder-consultation-ai-and-copyright-compliance) lists [W3C TDM Reservation Protocol Community Group](#w3c-tdmrep) and "C2PA TDM Assertions" ([C2PA](#c2pa)) among the solutions. [Open Future](#open-future) and [IPTC](#iptc) answered the consultation.
- **Transparency for generated content**: Article 50 applies from 2026-08-02. Generative AI systems placed on the market before that date have until December 2026 to meet the Article 50(2) marking duty, under the AI Omnibus (Regulation (EU) 2026/1744). The Code of Practice on Transparency of AI-generated Content was published 2026-06-10.

#### Related

- Google says its planned [Shared AI training robots.txt token](#aipref-training-token) support "is consistent with" the Code.

#### Compare

- The FAQ does not name [IETF AI Preferences Working Group](#ietf-aipref), [Really Simple Licensing](#rsl) or [Creator Assertions Working Group](#cawg). Open Future's response names the first two, and the assertion the FAQ calls C2PA's is now a CAWG spec (searched 2026-11-15).
- Article 50 is the compliance framing behind the C2PA pitch. Only secondary sources tie the two (searched 2026-11-15).

#### History

- 2026-08-02: Article 50 transparency rules apply.
- 2026-07-27: AI Omnibus (Regulation (EU) 2026/1744) entered into force.
- 2026-06-10: Final Code of Practice on Transparency of AI-generated Content published.
- 2026-01-23: Consultation on opt-out protocols closed.

Linked from: [AAIF Governance, Risk and Regulatory WG](#aaif-grr-wg), [IPTC](#iptc), [Open Future](#open-future), [W3C TDM Reservation Protocol Community Group](#w3c-tdmrep)

### Fairly Trained

- Id: fairly-trained
- Type: organization
- Status: Quiet since 2024. Its sitemap shows no page changed after 2024-12-17, and the newest blog post is dated 2024-08-01 (read 2026-11-15)
- Website: https://www.fairlytrained.org
- News: https://www.fairlytrained.org/blog
- Feed: https://www.fairlytrained.org/blog?format=rss
- Take part: [apply for certification](https://www.fairlytrained.org/apply)
- Tags: type/organization, layer/licensing
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#fairly-trained

Non-profit that certifies generative AI companies, products and models whose training data was licensed for training, openly licensed, in the public domain or owned by the developer. Ed Newton-Rex is its CEO.

#### Topics

- **Licensed training data**: telling apart the generative AI models that were trained without unlicensed copyrighted work. Its [launch post](https://www.fairlytrained.org/blog/fairly-trained-launches-certification-for-generative-ai-models-that-respect-creators-rights) says the Licensed Model certification "will not be awarded to models that rely on a 'fair use' copyright exception or similar".
- **Checking the claim**: an applicant [makes a written submission](https://www.fairlytrained.org/certifications), and Fairly Trained reviews it and may ask for more. The applicant must have processes for due diligence on training data and for keeping records of the data used in each training. The certifications page describes no inspection of the data itself. Certification is reevaluated each year. An applicant pays a submission fee of $100 to $500, and if certified an annual fee of $250 to $6,000, depending on revenue and scope.
- **Partly certified products**: saying which parts of a product the certificate covers. An applicant certifying a single model must state publicly which of the models it uses are certified and which are not.

#### Related

- BRIA AI and Somms.ai were among the nine companies certified at launch and are not on the list read on 2026-11-15.

#### Compare

- Audits of dataset licenses from outside the developer: [Data Provenance Initiative](#data-provenance-initiative). Neither names the other (searched 2026-11-15).

#### In use

- The [certified list](https://www.fairlytrained.org/certified-models) showed 19 entries on 2026-11-15: 12 companies, 2 products and 5 models.

#### History

- 2024-08-01: Updated its individual model certification.
- 2024-03-20: Announced newly certified models, including its first language and speech models.
- 2024-01-17: Launched with nine certified companies.

### GEMA

- Id: gema
- Type: organization
- Status: Won at Munich Regional Court against OpenAI (2025-11-11, under appeal) and Suno (2026-07-31, not final)
- Website: https://www.gema.de
- News: https://www.gema.de/en/news
- Tags: type/organization, layer/licensing, layer/payments, medium/audio
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#gema

German collecting society for composers, lyricists and music publishers, and [a member](https://www.gema.de/de/die-gema/organisation) of [CISAC](#cisac). It has sued two AI companies and won both cases at first instance. It has also published a licensing model for generative AI and sells a licensed training dataset.

#### Topics

- **Pricing generative AI**: setting a fee for training on its repertoire and generating from it. The [model](https://www.gema.de/de/w/generative-ki-lizenzmodell-zwei-saeulen) it presented in September 2024 asks for 30% of the net revenue of the AI model or system, with a minimum fee tied to the volume of output. A second part covers later uses of the generated music. Its [AI page](https://www.gema.de/de/aktuelles/ki-und-musik) names no generative AI provider that has taken the license (read 2026-11-15).
- **Works stored in a model**: whether a model that can reproduce a work is itself a copy of it. In the [OpenAI case](https://www.justiz.bayern.de/gerichte-und-behoerden/landgericht/muenchen-1/presse/2025/11.php) the court found the lyrics of nine songs "reproduzierbar" in models 4 and 4o, called this memorisation, and held that the text and data mining exception does not cover it. In the [Suno case](https://www.justiz.bayern.de/gerichte-und-behoerden/landgericht/muenchen-1/presse/2026/16.php) it found the same for six musical works in Suno's v3.5 and v4 models, which were stored on servers in Germany.
- **Who answers for the output**: whether the user's prompt or the provider is responsible when a work comes back out. In both cases the court held the provider responsible, because the prompts were simple and the provider chose the training data and built the model.
- **Training done abroad**: whether a claim reaches training that happened in the United States. In the Suno case the court applied US law to the copies made there and held that fair use did not cover them, because the works reappeared in the outputs. Its press release says Suno took the works from YouTube by stream-ripping.
- **Licensed training data**: offering AI developers a dataset with the rights already cleared. [PLAI by GEMA](https://www.gema.de/de/w/plai-by-gema-musikdatensatz) bundles sound files, metadata, authors' rights and master rights, for AI tools whose output does not compete with the works. GEMA says it leaves open whether generative AI providers need a license.
- **Training transparency**: its [AI Charter](https://www.gema.de/de/aktuelles/ki-und-musik/ki-charta-der-gema) of ten principles says it must be clear which works were used for training.

#### Related

- The accounts of both rulings here come from the court's press releases. The judgments were not read.
- Koda, the Danish society, sued Suno in November 2025. It [says](https://koda.dk/en/about-koda/news/pressure-mounts-on-ai-music-service-suno-new-lawsuit-filed) its case has been referred to the Eastern High Court. A [second post](https://koda.dk/en/about-koda/news/suno-found-to-have-unlawfully-used-copyright-protected-music) says the Munich ruling "could have major implications for similar cases, including Koda's own lawsuit against Suno" (both read 2026-11-16).

#### Compare

- A revenue-share license for AI use of web publishers' content: [Internet Licensing Collective](#internet-licensing-collective). Neither names the other (searched 2026-11-15).
- Both court press releases list Article 4 of the DSM Directive among the provisions applied, the one [W3C TDM Reservation Protocol Community Group](#w3c-tdmrep) reservations rely on. Neither the court nor TDMRep names the other.

#### In use

- PLAI by GEMA has one named customer, Klangio, which trains music transcription tools on about 178,000 sound files ([press release](https://www.gema.de/de/w/plai-by-gema-musikdatensatz), 2026-07-23).

#### History

- 2026-07-31: Munich Regional Court [largely granted](https://www.justiz.bayern.de/gerichte-und-behoerden/landgericht/muenchen-1/presse/2026/16.php) GEMA's claims against Suno for an injunction, information and damages (42 O 763/25). The court's press release says the judgment is not final.
- 2026-07-23: Launched PLAI by GEMA with Klangio as first customer.
- 2025-11-11: Munich Regional Court [largely granted](https://www.justiz.bayern.de/gerichte-und-behoerden/landgericht/muenchen-1/presse/2025/11.php) GEMA's claims against OpenAI over song lyrics in ChatGPT (42 O 14139/24). GEMA [says](https://www.gema.de/en/w/suno-entscheidung-2026) OpenAI has appealed to the Munich Higher Regional Court.
- 2025-01-21: Sued Suno.
- 2024-11-13: Sued OpenAI.
- 2024-11: Published its AI Charter.
- 2024-09: Presented its licensing model for generative AI.

Linked from: [CISAC](#cisac), [SOCAN](#socan), [STIM](#stim), [W3C TDM Reservation Protocol Community Group](#w3c-tdmrep)

### GetFTR

- Id: getftr
- Also known as: Get Full Text Research
- Type: project
- Status: MCP service available to partners and developers since January 2026
- Website: https://www.getfulltextresearch.com
- News: https://www.getfulltextresearch.com/blog
- Feed: https://www.getfulltextresearch.com/feed
- Take part: [integrator documentation](https://docs.getfulltextresearch.com/latest/integrators/mcp-service), [publishers](https://www.getfulltextresearch.com/why-publishers-should-join)
- Tags: type/project, layer/access, medium/text
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#getftr

A service that asks the publisher whether a given user is entitled to a given article and returns a link to the right version. It is funded by participating publishers and free for discovery tools to integrate. Since January 2026 AI tools can call it over [Model Context Protocol](#mcp).

#### Topics

- **Is this user entitled to this article**: `get_entitlements` takes up to 20 DOIs and optional organization context (an IP address or entity ID) and returns `entitled` and `accessType` for each. `get_centralised_entitlements` checks DOIs against journal-level institutional subscriptions.
- **Sending the reader to the version of record**: the launch post describes "smart links" that route a user "to the correct version of record based on their entitlements".
- **Which entitlements a shared connector recognises**: in a [comment](https://scholarlykitchen.sspnet.org/2026/10/27/mcp-discovery/) of 2026-10-28, GetFTR's product director said it wants to help libraries confirm this and invited AI tools and publishers to pilot it.

#### Related

- Its FAQ recommends that service providers use it alongside [KBART](#kbart) or Subscriber Links "to increase the number of links available through real-time, DOI level checks."

#### In use

- The [MCP service](https://docs.getfulltextresearch.com/latest/integrators/mcp-service) is at `https://mcp.prod.getft.io/mcp` and needs a GetFTR API key. Both tools are marked Available (docs read 2026-11-16).

#### History

- 2026-01: [MCP capability](https://www.getfulltextresearch.com/getftr-enables-ai-tools-to-check-access-rights-for-academic-content) announced for AI tools.

Linked from: [Enterprise-Managed Authorization](#mcp-enterprise-managed-authorization), [Model Context Protocol](#mcp)

### Google Scholar Mediated Reading

- Id: google-scholar-mediated-reading
- Also known as: MERU, MEdiated Reading Usage protocol
- Type: project
- Status: Policies on Google's publisher page, with no public description of the MERU message format (read 2026-11-17); COUNTER mapped MERU to its AI metrics by 2026-09-18 and published the guidance on 2026-10-23
- Website: https://scholar.google.com/intl/en/scholar/publishers.html
- Tags: type/project, layer/attribution, layer/access, stage/after-delivery, medium/text
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#google-scholar-mediated-reading

A Google Scholar program that publishers opt journals or collections into, with a usage protocol, MERU, for the publishers that take part. Google's publisher page gives it six sentences of policy. It does not say what a reader sees, how a publisher joins, or what a MERU message contains (read 2026-11-17). [COUNTER Metrics](#counter) calls it "an example of a third party AI system which delivers usage information to participating publishers".

#### Topics

- **Reporting AI-mediated reading to the publisher**: participating publishers "can use the MEdiated Reading Usage (MERU) protocol to measure and report Mediated Reading related usage of subscribed collections". [COUNTER Metrics](#counter)'s guidance says it works like Google's Subscriber Links, which sends the publisher a usage message with the user's IP address, the time of the request and the URL of the content, and that a MERU message carries one extra marker.
- **Counting it in a COUNTER report**: [COUNTER Metrics](#counter) says each MERU message counts as 1 Total_AI_Investigation and 1 Total_AI_Request for the item, under the namespace `SYNDICATED:Google_MERU`.
- **Publisher control over participation**: publishers select the journals or collections to include and can withdraw "at any time and for any reason", completely or partially. Participation "enables user experiences only on Google Scholar".
- **Training**: participation "does not enable use of the participating URLs for training Gemini large language models".

#### Related

- Google's page does not name COUNTER (read 2026-11-17).
- In a [comment](https://scholarlykitchen.sspnet.org/2026/11/16/guest-post-beyond-the-download-what-counts-as-scholarly-content-use-in-the-age-of-ai/) of 2026-11-16, Cambridge University Press's policy director gave MERU as an example of AI-mediated reading building on existing usage infrastructure.

#### Compare

- [Content Telemetry](#content-telemetry) also reports AI use of content to its owner, as five event types with a published schema. Neither names the other (searched 2026-11-17).

#### History

- 2026-10-23: COUNTER's [phase two](https://www.countermetrics.org/ai-phase-two/) announcement says "We've also mapped Google Scholar's new MERU tool to our metrics."
- 2026-09-18: COUNTER's [update](https://www.countermetrics.org/ai-update-sept26/) on phase two calls MERU "a form of syndicated usage" and says it has mapped how MERU messages should be reported.

Linked from: [COUNTER Metrics](#counter)

### IAB Tech Lab Content Monetization Protocols

- Id: iab-comp
- Also known as: CoMP
- Type: specification
- Status: 1.0 final 2026-04-28
- Website: https://github.com/IABTechLab/CoMP
- News: https://github.com/IABTechLab/CoMP/releases
- Feed: https://github.com/IABTechLab/CoMP/releases.atom
- Take part: [GitHub issues](https://github.com/IABTechLab/CoMP/issues)
- Tags: type/specification, layer/licensing, layer/payments
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#iab-comp

An AI system describes itself and its intended use; a content owner or marketplace answers with a package scoped by content type, function and retrieval method. Grew out of the LLM Content Ingest API initiative.

#### Topics

- **Licensing offers**: standardizing how an AI system states its intended use and how a publisher or marketplace answers with a package. Enforcement is assumed to happen at the edge.

#### History

- 2026-04-28: 1.0 finalized ([release CoMP v1.0-202604](https://github.com/IABTechLab/CoMP/releases/tag/1.0-202604)).
- 2026-04-09: Public comment on 1.0 closed.
- 2026-03-10: 1.0 opened for public comment.

Linked from: [Content Telemetry](#content-telemetry), [x402](#x402)

### IETF

- Id: ietf
- Also known as: Internet Engineering Task Force
- Type: organization
- Status: IETF 127 San Francisco, November 2026
- Website: https://www.ietf.org
- News: https://www.ietf.org/blog/
- Feed: https://www.ietf.org/blog/feed/
- Take part: [how to participate](https://www.ietf.org/participate/)
- Tags: type/organization, layer/access, layer/identity
- Updated: 2026-11-17
- Explorer: https://www.olahungerford.com/content-provenance/#ietf

Internet standards body. Hosts [IETF AI Preferences Working Group](#ietf-aipref) and [IETF Web Bot Auth Working Group](#ietf-web-bot-auth), and individual drafts such as [Machine Payments Protocol](#mpp).

#### Topics

- **Internet-level standards**: wire formats for AI preferences, bot identity and HTTP payment auth.

Linked from: [IETF AI Preferences Working Group](#ietf-aipref), [IETF Web Bot Auth Working Group](#ietf-web-bot-auth), [Machine Payments Protocol](#mpp)

### IETF AI Preferences Working Group

- Id: ietf-aipref
- Also known as: AIPREF
- Type: working-group
- Status: vocab-08 (2026-09-14) without consensus; attach-05 (2026-08-19); IETF 127 sessions 2026-11-16 and 11-19; issues 245 and 246 closed 2026-11-19
- Website: https://datatracker.ietf.org/wg/aipref/about/
- News: https://datatracker.ietf.org/wg/aipref/history/
- Feed: https://datatracker.ietf.org/feed/group-changes/aipref/
- Part of: [IETF](#ietf)
- Take part: [ai-control mailing list](https://mailarchive.ietf.org/arch/browse/ai-control/), [GitHub issues](https://github.com/ietf-wg-aipref/drafts/issues)
- Tags: type/working-group, layer/access, stage/after-delivery
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#ietf-aipref

Vocabulary for AI usage preferences and how they attach to content (`Content-Usage` header and robots.txt directive).

#### Topics

- **Shared vocabulary**: defining training and other AI uses so every crawler reads a preference the same way.
- **Attachment**: binding a preference to content through a `Content-Usage` header and robots.txt directive.
- **Downstream survival**: keeping preferences intact through model redistribution, caching and embeddings ([issues 245](https://github.com/ietf-wg-aipref/drafts/issues/245) and [246](https://github.com/ietf-wg-aipref/drafts/issues/246), closed 2026-11-19 with the existing draft text).
- **Inference-time use**: covering grounding and agent use. vocab-08 adds an AI Use category (`ai-use`) for input to a generative model, without consensus, and open PRs 254 and 258 revise its definition. [Cloudflare Content Signals](#cloudflare-content-signals) `ai-input` covered grounding from 2025-09-24, and [Microsoft training and grounding preferences](#microsoft-grounding-preference) adds a page-level grounding preference. MCP has no field for a server to declare it.

#### Related

- Individual drafts: [Shared AI training robots.txt token](#aipref-training-token), [Cloudflare Content Signals](#cloudflare-content-signals), and the [Creative Commons](#creative-commons) exclusions and parameters drafts. The exclusions draft expired on 2026-10-24.
- Enforcement side: [IETF Web Bot Auth Working Group](#ietf-web-bot-auth). Layered on by [CC Signals](#cc-signals).

#### History

- 2026-11-19: Issues 245 and 246 on downstream survival closed.
- 2026-11-17: Kevin Kelley [asked for volunteers](https://mailarchive.ietf.org/arch/msg/ai-control/mLGJnETEzXfUug-xJfjRnY27LvY/) for an attachment design team, at the chairs' request, to report before the next interim.
- 2026-09-14: vocab-08 posted, without consensus.
- 2026-08-19: attach-05 posted.

Linked from: [ai.robots.txt](#ai-robots-txt), [CC Signals](#cc-signals), [Cloudflare Content Signals](#cloudflare-content-signals), [Creative Commons](#creative-commons), [Creator Assertions Working Group](#cawg), [EU AI Act and GPAI Code of Practice](#eu-ai-act-gpai-code), [IETF](#ietf), [IETF Web Bot Auth Working Group](#ietf-web-bot-auth), [Microsoft training and grounding preferences](#microsoft-grounding-preference), [Model Context Protocol](#mcp), [Really Simple Licensing](#rsl), [Shared AI training robots.txt token](#aipref-training-token)

### IETF Web Bot Auth Working Group

- Id: ietf-web-bot-auth
- Also known as: webbotauth
- Type: working-group
- Status: WG draft httpsig-protocol-01 (2026-10-29); Cloudflare libraries
- Website: https://datatracker.ietf.org/wg/webbotauth/about/
- News: https://datatracker.ietf.org/wg/webbotauth/history/
- Feed: https://datatracker.ietf.org/feed/group-changes/webbotauth/
- Part of: [IETF](#ietf)
- Take part: [web-bot-auth mailing list](https://mailarchive.ietf.org/arch/browse/web-bot-auth/)
- Tags: type/working-group, layer/identity, layer/access
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#ietf-web-bot-auth

Signed bot traffic with RFC 9421 HTTP message signatures and a key directory at `/.well-known/http-message-signatures-directory`.

#### Topics

- **Bot identity**: proving who a crawler or agent is. The preference ([IETF AI Preferences Working Group](#ietf-aipref)) says what is allowed, bot auth says who is asking.

#### Compare

- Pairs with [Agent Identity and Manifest Standard](#aims) and with [Wikimedia](#wikimedia)'s ask that agents be easy to identify. Neither names Web Bot Auth (searched 2026-11-15).

#### In use

- [cloudflare/web-bot-auth](https://github.com/cloudflare/web-bot-auth) publishes libraries for signing and verifying requests. `web-bot-auth` on npm is at 0.2.0 (2026-08-31) and was first published on 2025-04-14.

Linked from: [AAIF Identity and Trust WG](#aaif-identity-trust-wg), [Agent Identity and Manifest Standard](#aims), [IETF](#ietf), [IETF AI Preferences Working Group](#ietf-aipref), [Wikimedia](#wikimedia)

### Internet Licensing Collective

- Id: internet-licensing-collective
- Also known as: ILC, RSL Collective
- Type: organization
- Status: Launched 2026-11-12 with Yahoo Scout as first commercial licensee
- Website: https://internetcollective.org
- News: https://internetcollective.org/press
- Take part: [publishers](https://internetcollective.org/publishers), [AI companies](https://internetcollective.org/ai-companies)
- Tags: type/organization, layer/licensing, layer/payments
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#internet-licensing-collective

Nonprofit, publisher-led collecting society for AI use of web content, formerly the RSL Collective. Sells AI companies one blanket license to its members' content and pays the revenue out to publishers after costs it projects at 10% or less. Co-authored [Really Simple Licensing](#rsl) and says it supports any standard a publisher wishes to use.

#### Topics

- **Blanket licensing**: replacing a separate deal between every publisher and every AI company with one agreement per side. AI companies pay based on the value content brings to their products, with costs that scale with their business, and the licensee picks the uses it needs (training, RAG, grounding, agentic use, AI overviews).
- **Publisher control**: letting a publisher choose which content it offers, to which licensees and for which uses. Joining is free and non-exclusive, and terms are declared with [Really Simple Licensing](#rsl) on the publisher's own site.
- **Royalty allocation**: dividing revenue by what each work contributed to AI outputs, how often it is relied on and the value of the AI product.
- **Usage reporting**: paying out on usage that licensees report. ILC is not in the content path. Its publishers page says it "supports auditing of license compliance" and does not say how reports are checked.

#### Related

- A Publisher Steering Committee oversees the licensing framework, safeguards and economics. The About page shows ten members: Reddit, People Inc., Yahoo, Ziff Davis, the Wikimedia Foundation ([Wikimedia](#wikimedia)), USA Today, Internet Brands, Mediahuis, The Atlantic and Vox Media (read 2026-11-15). Yahoo Scout, the first licensee, is a Yahoo product.
- The launch release names Doug Leeds as a co-founder. The About page names no staff.
- Its About page lists 3,100+ supporting publications, among them the Guardian, Wikipedia and O'Reilly Media.
- Mather Economics' report The Price of Intelligence (2026-11-12) estimates AI companies would pay 15% to 35% of revenue to keep access to licensed content. The launch release says ILC did not commission or fund it.

#### Compare

- [Content Telemetry](#content-telemetry) standardizes usage reports of the kind ILC pays out on. Neither names the other (searched 2026-11-15).
- The Guardian supports ILC and is a [SPUR Coalition](#spur-coalition) founder. No source connects the two bodies themselves (searched 2026-11-15).

#### In use

- Yahoo Scout is its first licensee ([launch release](https://internetcollective.org/press/ilc-launch-2026), 2026-11-12).

#### History

- 2026-11-12: Launched under this name, formerly the RSL Collective, with Yahoo Scout as first commercial licensee.

Linked from: [CISAC](#cisac), [GEMA](#gema), [Really Simple Licensing](#rsl)

### IPTC

- Id: iptc
- Also known as: International Press Telecommunications Council
- Type: organization
- Status: RightsML and the Data Mining property; Verified News Publishers List; answered the EU opt-out consultation
- Website: https://iptc.org
- News: https://iptc.org/news/
- Feed: https://iptc.org/feed/
- Tags: type/organization, layer/licensing, layer/access, layer/provenance, stage/trust, medium/image, medium/video
- Updated: 2026-11-17
- Explorer: https://www.olahungerford.com/content-provenance/#iptc

News-media standards body. RightsML is a profile of [W3C ODRL](#w3c-odrl). Its photo metadata standard has a Data Mining property. [Creator Assertions Working Group](#cawg)'s metadata assertion can bind IPTC metadata to a C2PA manifest. With Project Origin it runs the Origin Verified News Publishers List for [C2PA](#c2pa) signing.

#### Topics

- **News rights**: expressing rights for news content in machine-readable form (RightsML).
- **Recognized opt-outs**: getting the EU to recognize workable opt-out mechanisms ([EU AI Act and GPAI Code of Practice](#eu-ai-act-gpai-code)).
- **Publisher identity**: establishing which news organization signed a [C2PA](#c2pa) credential, through signing certificates issued to verified publishers. Its page says the certificates "confirm organisational identity and do not make any judgement on editorial position."

#### In use

- The [Origin Verified News Publishers List](https://iptc.org/verified-news-publishers-list/) names the BBC, CBC/Radio-Canada, WDR, Deutsche Welle, AFP, France Télévisions, NTB and RTÉ (read 2026-11-15). Its sample content is images.
- The C2PA conforming products list (2026-11-14) has IPTC's C2PA Signer Tool (2026-03-20) and Content Credentials Signing Service (2026-11-11), CBC/Radio-Canada's Content Provenance Platform (2026-08-26) and BBC Image Distribution Services (2026-10-16). All four sign images or video.

Linked from: [C2PA](#c2pa), [Creator Assertions Working Group](#cawg), [Encypher](#encypher), [EU AI Act and GPAI Code of Practice](#eu-ai-act-gpai-code), [W3C ODRL](#w3c-odrl)

### KBART

- Id: kbart
- Also known as: Knowledge Bases and Related Tools, NISO RP-9-2026, KBART Automation
- Type: specification
- Status: Phase III (NISO RP-9-2026) published 2026-08-26
- Website: https://www.niso.org/standards-committees/kbart
- Part of: [NISO](#niso)
- Take part: [KBART Standing Committee](https://www.niso.org/standards-committees/kbart)
- Tags: type/specification, layer/access, medium/text
- Updated: 2026-11-17
- Explorer: https://www.olahungerford.com/content-provenance/#kbart

NISO recommended practice for sending title lists and coverage data from content providers to knowledge bases and libraries. KBART Automation (NISO RP-26-2019) adds library-specific holdings reports, exchanged by API.

#### Topics

- **What a library has licensed**: a link resolver can send a reader to full text only if it knows the institution's holdings. A KBART file lists a provider's titles and coverage, and KBART Automation delivers the list for one institution.
- **Keeping holdings current**: Phase III adds new content types, a file manifest and file-level guidance for KBART Automation.

#### Compare

- Lisa Janicke Hinchliffe [proposes](https://scholarlykitchen.sspnet.org/2026/10/27/mcp-discovery/) the same model for MCP connectors: providers supply a machine-readable feed and libraries keep the register. Her fields include the entitlements covered, terms on AI use and training, and usage reporting. [MCP Registry](#mcp-registry) `server.json`, [SEP-2127 Server Cards](#mcp-server-cards) and [AI Catalog](#ai-catalog) have no field for entitlements (schemas read 2026-11-16), and none of the three names KBART (searched 2026-11-16).

#### History

- 2026-08-26: [Phase III](https://www.niso.org/publications/rp-9-2026-kbart) published.
- 2019-06-18: KBART Automation published.
- 2014-03-27: Phase II (NISO RP-9-2014) published.

Linked from: [GetFTR](#getftr), [MCP Registry](#mcp-registry), [NISO](#niso)

### Knight-Georgetown Institute

- Id: knight-georgetown-institute
- Also known as: KGI
- Type: organization
- Website: https://kgi.georgetown.edu
- News: https://kgi.georgetown.edu/news/
- Tags: type/organization, layer/governance, layer/access
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#knight-georgetown-institute

Tech policy institute led by Alissa Cooper. Related: [Shared AI training robots.txt token](#aipref-training-token).

#### Topics

- **Crawler and training controls**: Alissa Cooper's [commentary](https://kgi.georgetown.edu/research-and-commentary/what-the-new-ai-training-opt-out-really-means/) of 2026-11-06 places the shared training opt-out in the AIPREF standards process.

### Machine Payments Protocol

- Id: mpp
- Also known as: MPP, draft-httpauth-payment, draft-ryan-httpauth-payment
- Type: specification
- Status: Individual IETF draft, draft-httpauth-payment-01 (2026-09-09), active on Datatracker; the earlier draft-ryan-httpauth-payment expired 2026-09-19 (read 2026-11-16); not a WG item
- Website: https://paymentauth.org
- Tags: type/specification, layer/payments
- Updated: 2026-11-16
- Explorer: https://www.olahungerford.com/content-provenance/#mpp

Stripe and Tempo protocol: HTTP 402 with a `Payment` authentication scheme, payment-method agnostic, with an MCP transport. Filed at the [IETF](#ietf).

#### Topics

- **Method-neutral HTTP payment**: one auth scheme for any payment method, an alternative to [x402](#x402).

Linked from: [IETF](#ietf)

### MCP Financial Services Interest Group

- Id: mcp-fsig
- Also known as: FSIG
- Type: interest-group
- Status: Charter amended 2026-11-21 to a problem-first forum that routes gaps to Working Groups; data lineage and citation stays in scope
- Part of: [Model Context Protocol](#mcp)
- Take part: [MCP community channels](https://modelcontextprotocol.io/community/communication)
- Tags: type/interest-group, venue/mcp, layer/provenance, layer/attribution
- Updated: 2026-11-21
- Explorer: https://www.olahungerford.com/content-provenance/#mcp-fsig

Financial-services interest group. Its charter also covers auditability and operational control, which these cards do not cover.

#### Topics

- **Regulated data lineage and citation**: tracing financial data through agents. A lineage key for [OpenLineage](#openlineage) was presented on 2026-09-24 ([meeting notes](https://docs.google.com/document/d/19HwCw7i4k-omABGnRYGGuLdMJNXQc3rs_QRgJxPhQU8/edit)) and filed as [issue 16](https://github.com/modelcontextprotocol/financial-services-interest-group/issues/16) on 2026-10-08.
- **Charter scope**: the [charter](https://modelcontextprotocol.io/community/interest-groups/financial-services) lists "Data lineage and citation" and "Data handling" for results that carry usage or redistribution restrictions. It says the group "does not independently sponsor SEPs" and brings unresolved gaps to a Working Group. It meets monthly.

#### Related

- [SEP-3094 Granular Citations](#mcp-sep-3094-citations) was item 9 on the agenda of the 2026-09-24 meeting. The notes record no discussion of it. "Granular Citations" is listed as a topic for the lineage RFC.

#### History

- 2026-11-21: Charter amended to problem-first scope and Working Group referrals ([#3572](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3572)). The earlier text listed "source attribution, citation, and consent metadata" and finance-specific extensions.
- 2026-06-25: Charter merged ([#2979](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2979)).

Linked from: [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta), [Model Context Protocol](#mcp), [OpenLineage](#openlineage), [SEP-3094 Granular Citations](#mcp-sep-3094-citations)

### MCP Interceptors WG and SEP-2624

- Id: mcp-interceptors
- Also known as: SEP-2624, experimental-ext-interceptors
- Type: working-group
- Status: SEP open; chain concept removed 2026-10-27; `signature` on ValidationResult reserved
- Website: https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2624
- Part of: [Model Context Protocol](#mcp)
- Take part: [SEP-2624 PR](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2624), [MCP community channels](https://modelcontextprotocol.io/community/communication)
- Tags: type/working-group, venue/mcp, stage/boundary
- Updated: 2026-11-16
- Explorer: https://www.olahungerford.com/content-provenance/#mcp-interceptors

Context middleware for clients, servers and gateways: deterministic code that sees each request and result on the way through. The place a seal or citation validator can run without a core spec change.

#### Topics

- **Checking at the boundary**: verifying provenance in a gateway or in context middleware, since most clients will not.
- **The `signature` field**: deciding what it signs and whether it ever carries content provenance.
- **Sample validator**: a citation validator for [SEP-3094 Granular Citations](#mcp-sep-3094-citations), whose author named interceptors as one way to process citation metadata.

#### Compare

- A seal validator for [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta) is this guide's suggestion. Neither thread refers to the other (searched 2026-11-15).

#### History

- 2026-10-27: Chain concept removed from the SEP.

Linked from: [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta), [Model Context Protocol](#mcp), [SEP-3094 Granular Citations](#mcp-sep-3094-citations)

### MCP Registry

- Id: mcp-registry
- Also known as: server.json, Registry WG
- Type: project
- Status: In preview since 2025-09-08; registry release v1.8.10 dated 2026-11-20
- Website: https://modelcontextprotocol.io/registry/about
- Part of: [Model Context Protocol](#mcp)
- Take part: [registry issues](https://github.com/modelcontextprotocol/registry/issues), [Registry WG charter](https://modelcontextprotocol.io/community/working-groups/registry)
- Tags: type/project, venue/mcp, layer/identity, topic/discovery
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#mcp-registry

The official metadata catalog for publicly accessible MCP servers, run by the MCP Registry Working Group. Each entry is a `server.json` with the server's name, where to find it and how to run it.

#### Topics

- **Who published this server**: names are reverse-DNS and tied to a verified GitHub account or domain, so an entry shows who controls its namespace.
- **No ranking**: the charter puts "Ranking/choosing between MCP server implementations on behalf of MCP clients or end-users" out of scope. The docs call the metadata "deliberately unopinionated" and leave curation and ratings to downstream aggregators.
- **A feed for aggregators**: an unauthenticated read-only REST API with an `updated_since` filter. Aggregators are expected to pull about hourly and keep their own copy. The registry gives no uptime or durability guarantee.
- **Usage terms**: `server.json` has no field for a licence, terms of use or the entitlements a server covers (draft schema read 2026-11-16).
- **Private servers**: not supported. The docs tell organizations to run their own registry on the same OpenAPI spec.

#### Related

- Server identity and remote endpoints overlap with [SEP-2127 Server Cards](#mcp-server-cards). The two working groups coordinate to keep the schemas aligned, and the Registry charter says the registry will expose Server Cards for published entries.

#### Compare

- Lisa Janicke Hinchliffe [proposes](https://scholarlykitchen.sspnet.org/2026/10/27/mcp-discovery/) (Scholarly Kitchen, 2026-10-27) that libraries keep a register of publisher connectors on the model of [KBART](#kbart) holdings feeds, because the registry does not rank. The MCP docs do not name KBART (searched 2026-11-16).

#### In use

- [registry.modelcontextprotocol.io](https://registry.modelcontextprotocol.io) is live and in preview (responding 2026-11-16).

#### History

- 2025-09-08: Launched in preview.

Linked from: [KBART](#kbart), [Model Context Protocol](#mcp), [SEP-2127 Server Cards](#mcp-server-cards)

### MCP Security Interest Group

- Id: mcp-security-ig
- Type: interest-group
- Status: Restructured as a routing group, decided 2026-08-26 and merged into the charter 2026-10-31; monthly agenda-driven call
- Part of: [Model Context Protocol](#mcp)
- Take part: [MCP community channels](https://modelcontextprotocol.io/community/communication)
- Tags: type/interest-group, venue/mcp, layer/governance
- Updated: 2026-11-16
- Explorer: https://www.olahungerford.com/content-provenance/#mcp-security-ig

First stop for security topics. Routes validated work to the owning group.

#### Topics

- **Routing**: acting as the first stop for security topics and sending each to an owning group.

#### Compare

- [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta) and [SEP-3094 Granular Citations](#mcp-sep-3094-citations) have no owning group, and this IG could route them. No IG record names either. The first was filed in the Ideas - Security discussion category (searched 2026-11-15).

#### History

- 2026-10-31: The restructure was merged into the charter ([#3331](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3331)).
- 2026-08-26: Restructured as a routing group at a core maintainer meeting ([discussion 3316](https://github.com/modelcontextprotocol/modelcontextprotocol/discussions/3316)), the date the charter changelog gives.

Linked from: [Model Context Protocol](#mcp)

### Microsoft Publisher Content Marketplace

- Id: microsoft-publisher-content-marketplace
- Type: project
- Status: Pilot announced 2026-02-03, with Copilot grounding answers in licensed content; no public spec
- Tags: type/project, layer/licensing, layer/payments
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#microsoft-publisher-content-marketplace

Voluntary marketplace where publishers define licensing and usage terms, with usage-based reporting.

#### Topics

- **Paying publishers**: compensating publishers for content used in AI answers, with usage reporting.

#### Compare

- Microsoft's announcement does not mention [Really Simple Licensing](#rsl). A vendor blog calls the marketplace "inspired by" RSL. Microsoft's announcement does not mention RSL, and RSL's pages do not mention Microsoft (searched 2026-11-15).

#### History

- 2026-02-03: Microsoft [announced the pilot](https://about.ads.microsoft.com/en/blog/post/february-2026/building-toward-a-sustainable-content-economy-for-the-agentic-web), with Copilot grounding answers in licensed content and Yahoo starting to onboard as a buyer.

Linked from: [Really Simple Licensing](#rsl)

### Microsoft training and grounding preferences

- Id: microsoft-grounding-preference
- Also known as: ai-grounding:disallow
- Type: proposal
- Status: Announced 2026-10-30; effective 2027-02-01; NoArchive and NoCache stop being read as preferences after 2027-03-01
- Website: https://blogs.bing.com/search/2026/10/your-content-your-choice-clearer-preferences-for-training-and-grounding/
- News: https://blogs.bing.com/search/
- Feed: https://blogs.bing.com/search/feed/
- Tags: type/proposal, layer/access, stage/after-delivery
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#microsoft-grounding-preference

Training via [Shared AI training robots.txt token](#aipref-training-token) or a page-level `ai-training:disallow`, plus a separate page-level grounding preference (`ai-grounding:disallow`, or `ai-grounding:disallowextended` to limit grounding to Microsoft-operated experiences) with no robots.txt form. Replaces `NoArchive` and `NoCache`.

#### Topics

- **Inference-time preferences**: letting a page opt out of grounding. Microsoft says it first offered grounding controls in 2023, through `NoArchive` and `NoCache`. Google-Extended also covers grounding in Gemini Apps and Vertex AI. The closest [IETF AI Preferences Working Group](#ietf-aipref) category is `ai-use` in vocab-08, using an asset as input to a generative AI model.

#### Related

- Microsoft says the preferences do not establish licensing or payment.

#### History

- 2026-10-30: Microsoft [announced](https://blogs.bing.com/search/2026/10/your-content-your-choice-clearer-preferences-for-training-and-grounding/) the training and grounding preferences. Grounding settings in Bing Webmaster Tools open 2026-12-15, and the temporary grounding preferences expire 2027-09-30.

Linked from: [IETF AI Preferences Working Group](#ietf-aipref)

### Model Context Protocol

- Id: mcp
- Also known as: MCP
- Type: specification
- Status: Next spec release moved to 2027-03-30 (SEP-3398); SEPs need Working Group or Core Maintainer sponsorship
- Website: https://modelcontextprotocol.io
- News: https://blog.modelcontextprotocol.io/
- Feed: https://blog.modelcontextprotocol.io/index.xml
- Part of: [Agentic AI Foundation](#aaif)
- Take part: [MCP community channels](https://modelcontextprotocol.io/community/communication), [GitHub discussions](https://github.com/modelcontextprotocol/modelcontextprotocol/discussions)
- Tags: type/specification, venue/mcp, layer/provenance, layer/attribution
- Updated: 2026-11-21
- Explorer: https://www.olahungerford.com/content-provenance/#mcp

The protocol between agents and the tools, resources, prompts and skills they read. MCP is the hop where content provenance can be carried or lost.

#### Topics

- **Content provenance ownership**: no WG owns content provenance or attribution. The [MCP Financial Services Interest Group](#mcp-fsig) charter covers "Data lineage and citation" for financial data returned through MCP. The Scientific Computing IG charter covers reproducibility and provenance of computed results.
- **Usage declarations**: no field lets a server declare how its content may be used for training or grounding.
- **Credit reporting**: nothing reports display or credit past the last hop ([Content Telemetry](#content-telemetry)).

#### Related

- Built-in tracing and metrics in the SDKs: [OpenTelemetry for MCP](#otel-mcp).
- Threads: [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta), [SEP-3094 Granular Citations](#mcp-sep-3094-citations), [SEP-2640 Skills Extension](#mcp-skills-extension), [MCP Interceptors WG and SEP-2624](#mcp-interceptors).
- Groups: [MCP Financial Services Interest Group](#mcp-fsig), [MCP Security Interest Group](#mcp-security-ig).
- Discovery and authorization: [MCP Registry](#mcp-registry), [SEP-2127 Server Cards](#mcp-server-cards), [Enterprise-Managed Authorization](#mcp-enterprise-managed-authorization).

#### Compare

- [IETF AI Preferences Working Group](#ietf-aipref) defines usage preferences for the web. MCP has no equivalent field, and no MCP material names AIPREF (searched 2026-11-15).

#### In use

- Silverchair's [Research Bridge](https://www.silverchair.com/news/silverchair-launches-multi-publisher-mcp-pilot/) is a shared MCP channel for seven scholarly publishers, in a six-month pilot announced 2026-10-05.
- [GetFTR](#getftr) runs an MCP service that tells an AI tool whether a user is entitled to an article (docs read 2026-11-16).

Linked from: [Agentic AI Foundation](#aaif), [AI Catalog](#ai-catalog), [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta), [Dataspace Protocol](#dataspace-protocol), [Enterprise-Managed Authorization](#mcp-enterprise-managed-authorization), [GetFTR](#getftr), [MCP Financial Services Interest Group](#mcp-fsig), [MCP Interceptors WG and SEP-2624](#mcp-interceptors), [MCP Registry](#mcp-registry), [MCP Security Interest Group](#mcp-security-ig), [OpenTelemetry for MCP](#otel-mcp), [SEP-2127 Server Cards](#mcp-server-cards), [SEP-2640 Skills Extension](#mcp-skills-extension), [SEP-3094 Granular Citations](#mcp-sep-3094-citations)

### NISO

- Id: niso
- Also known as: National Information Standards Organization
- Type: organization
- Status: Provenance and attribution pilot announced October 2026, first planned for twelve months and possibly shorter (2026-11 letter); KBART Phase III published 2026-08-26
- Website: https://www.niso.org
- News: https://www.niso.org/press-releases
- Take part: [NISO standards committees](https://www.niso.org/standards-committees)
- Tags: type/organization, layer/provenance, layer/attribution, layer/governance, medium/text
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#niso

US standards body for libraries, publishers and the vendors between them. Publishes [KBART](#kbart) and is a partner in [TRACE](#trace).

#### Topics

- **Provenance metadata for AI retrieval**: a pilot to "develop and test a minimum metadata model that accurately tracks provenance and attribution" when AI systems retrieve scholarly content. It convenes content creators, publishers, repositories, AI tool developers and end-users. The executive director's November 2026 [letter](https://www.niso.org/niso-io/2026/11/can-standards-move-pace-ai) welcomes "further expressions of interest in the pilot development work" and gives no form or contact for it (read 2026-11-20).
- **Naming the version of an article**: [Journal Article Versions](https://www.niso.org/publications/rp-8-2026-jav) (RP-8-2026) is a way of describing the versions of a journal article that appear online before, during and after formal publication. It revises the 2008 edition. Steve Smith and Josh Nicholson [point to it](https://scholarlykitchen.sspnet.org/2026/11/16/guest-post-beyond-the-download-what-counts-as-scholarly-content-use-in-the-age-of-ai/) for saying which version an AI usage report refers to.
- **A venue for library standards on AI**: Lisa Janicke Hinchliffe [asks](https://scholarlykitchen.sspnet.org/2026/10/27/mcp-discovery/) for a NISO-style community process to define what a register of publisher MCP connectors should record.

#### Related

- The pilot's [launch article](https://scholarlykitchen.sspnet.org/2026/10/07/trace-project-launches-to-advance-ai-interoperability/), by NISO's executive director, names [C2PA](#c2pa) content credentials and W3C PROV among existing standards.
- The same article says NISO is beginning conversations with Creative Commons on how a provenance metadata package could fit into [CC Signals](#cc-signals).

#### History

- 2026-11: The executive director's letter says the pilot may finish sooner than twelve months.
- 2026-10: [Provenance and attribution pilot](https://www.niso.org/niso-io/2026/10/niso-develop-metadata-model-provenance-and-attribution-ai-systems) announced.
- 2026-10-05: Journal Article Versions RP-8-2026 published.
- 2026-08-26: KBART Phase III published.

Linked from: [KBART](#kbart), [TRACE](#trace)

### Open Future

- Id: open-future
- Type: organization
- Website: https://openfuture.eu
- News: https://openfuture.eu/blog/
- Feed: https://openfuture.eu/feed/
- Tags: type/organization, layer/governance, layer/access
- Updated: 2026-11-17
- Explorer: https://www.olahungerford.com/content-provenance/#open-future

European think tank on the digital commons.

#### Topics

- **Commons in EU policy**: representing the commons in the opt-out consultation ([EU AI Act and GPAI Code of Practice](#eu-ai-act-gpai-code)).
- **Commons in agent standards**: arguing for a [Wikimedia](#wikimedia) seat at [Agentic AI Foundation](#aaif).

Linked from: [EU AI Act and GPAI Code of Practice](#eu-ai-act-gpai-code), [Wikimedia](#wikimedia)

### Open Knowledge Foundation

- Id: okfn
- Also known as: OKFN, CKAN, MCP Labs
- Type: organization
- Status: MCP Labs (mcp.okfn.org) live; okfn/mcp-server uses structuredContent.sources
- Website: https://okfn.org
- News: https://blog.okfn.org/
- Feed: https://blog.okfn.org/feed/
- Take part: [okfn/mcp-server on GitHub](https://github.com/okfn/mcp-server)
- Tags: type/organization, layer/attribution, stage/in-transit, venue/mcp
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#okfn

CKAN maintainers. MCP Labs runs chat over official datasets with every answer linked to its source.

#### Topics

- **Attributable open-data answers**: linking every answer to its dataset, which open licenses can make a legal requirement.
- **Interim convention to standard**: its required `structuredContent.sources` list has no standard citation format to map onto.

#### Compare

- Its `sources` list could map onto [SEP-3094 Granular Citations](#mcp-sep-3094-citations), which closed unmerged on 2026-11-08. An OKFN developer reviewed the SEP, and no OKFN page names it (searched 2026-11-15).
- A [Wikimedia](#wikimedia) contributor reviewed the same SEP. No source connects the two organisations (searched 2026-11-15).
- A natural early adopter for the [Creative Commons](#creative-commons) SourceConnection component of CC Signals. Neither names the other (searched 2026-11-15).

#### In use

- [MCP Labs](https://mcp.okfn.org) answers questions over official datasets and links each answer to its source (responding 2026-11-15).

Linked from: [Creative Commons](#creative-commons), [SEP-3094 Granular Citations](#mcp-sep-3094-citations)

### OpenAttribution.org

- Id: openattribution
- Type: organization
- Status: policycheck, commerce profile, AIMS draft
- Website: https://openattribution.org
- News: https://openattribution.org/blog
- Feed: https://openattribution.org/feed.xml
- Take part: [GitHub](https://github.com/openattribution-org)
- Tags: type/organization, layer/attribution, layer/identity, layer/payments
- Updated: 2026-11-17
- Explorer: https://www.olahungerford.com/content-provenance/#openattribution

Not-for-profit that originally developed the [Content Telemetry](#content-telemetry) SDKs, which [SPUR Coalition](#spur-coalition) now maintains. Its [Cloudflare edge worker](https://github.com/SPUR-Coalition/cloudflare-worker) is in SPUR's GitHub organization too (checked 2026-11-16). It maintains the policycheck scanner, the commerce profile and [Agent Identity and Manifest Standard](#aims).

#### Topics

- **Multi-source credit**: crediting every source behind an agent answer when a user clicks one link. The commerce profile's `ctx_token` resolves to a click manifest, with bindings for [Agentic Commerce Protocol](#acp) and [Universal Commerce Protocol](#ucp).
- **Signal fragmentation**: mapping the competing access signals. policycheck scans robots.txt, [Really Simple Licensing](#rsl), [Cloudflare Content Signals](#cloudflare-content-signals) and [W3C TDM Reservation Protocol Community Group](#w3c-tdmrep) at once.

Linked from: [Agent Identity and Manifest Standard](#aims), [Agentic Commerce Protocol](#acp), [Skills Marketplace](#skills-marketplace), [SPUR Coalition](#spur-coalition), [Universal Commerce Protocol](#ucp)

### OpenLineage

- Id: openlineage
- Type: project
- Status: RFC 4484 open (updated 2026-10-07); BearingNode proposed an MCP `_meta` lineage key to the FSIG 2026-10-08
- Website: https://openlineage.io
- News: https://openlineage.io/blog/
- Feed: https://openlineage.io/blog/feed.json
- Take part: [GitHub issues](https://github.com/OpenLineage/OpenLineage/issues)
- Tags: type/project, layer/provenance, stage/in-transit, medium/data
- Updated: 2026-11-17
- Explorer: https://www.olahungerford.com/content-provenance/#openlineage

Open standard for data lineage events. [RFC 4484](https://github.com/OpenLineage/OpenLineage/issues/4484) and BearingNode's proposed MCP `_meta` lineage key ([FSIG issue 16](https://github.com/modelcontextprotocol/financial-services-interest-group/issues/16)) carry lineage identity across the tool-call boundary.

#### Topics

- **Lineage across tool calls**: tracing data handed to an agent back to its source.

#### Related

- Presented to [MCP Financial Services Interest Group](#mcp-fsig) on 2026-09-24 ([meeting notes](https://docs.google.com/document/d/19HwCw7i4k-omABGnRYGGuLdMJNXQc3rs_QRgJxPhQU8/edit)). The proposal was filed there as issue 16 on 2026-10-08.

#### Compare

- Overlaps [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta) on lineage keys. Neither names the other (searched 2026-11-15).

#### History

- 2026-10-08: BearingNode filed the `_meta` lineage key proposal as FSIG issue 16.
- 2026-10-07: RFC 4484 updated.
- 2026-09-24: Presented to the MCP Financial Services Interest Group.

Linked from: [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta), [MCP Financial Services Interest Group](#mcp-fsig), [OpenTelemetry for MCP](#otel-mcp)

### OpenTelemetry for MCP

- Id: otel-mcp
- Also known as: MCP semantic conventions, SEP-414
- Type: specification
- Status: Conventions in Development; built into the Python SDK since v2.0.0; merged for the TypeScript SDK 2026-10-31, not yet released
- Website: https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/mcp.md
- Take part: [semantic-conventions-genai issues](https://github.com/open-telemetry/semantic-conventions-genai/issues), [MCP community channels](https://modelcontextprotocol.io/community/communication)
- Tags: type/specification, venue/mcp, layer/provenance, stage/in-transit
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#otel-mcp

OpenTelemetry semantic conventions for MCP spans and metrics, and the SDKs that emit them. Spans are named `{mcp.method.name} {target}`, for example `tools/call get-weather`, with `mcp.session.id`, `mcp.protocol.version` and `jsonrpc.request.id`. Trace context travels in `params._meta` under three keys that [SEP-414](https://modelcontextprotocol.io/seps/414-request-meta) proposed in April 2025 and the [2026-07-28 spec reserves](https://modelcontextprotocol.io/specification/2026-07-28/basic/index#_meta): `traceparent`, `tracestate` and `baggage`.

#### Topics

- **Metadata that already travels with a tool call**: a trace id is the one piece of metadata MCP carries end to end today, client to server and back, in `_meta`. The propagation rules are a precedent for any other credential that has to survive the hop.
- **What a span does not say**: the conventions make tool arguments and results opt-in attributes marked as sensitive (`gen_ai.tool.call.arguments`, `gen_ai.tool.call.result`), so a trace shows which tool ran, when and for how long, and nothing about the content that came back or where it came from. That gap is where the [AAIF Observability and Traceability WG](#aaif-observability-traceability-wg) sits.
- **SDK coverage**: the Python SDK has emitted client and server spans since v2.0.0 ([#2381](https://github.com/modelcontextprotocol/python-sdk/pull/2381), 2026-03-31, middleware form in [#2941](https://github.com/modelcontextprotocol/python-sdk/pull/2941)), with no metrics. The TypeScript SDK adds spans and `mcp.client.operation.duration` and `mcp.server.operation.duration` histograms, on by default once an OpenTelemetry SDK is registered ([#3115](https://github.com/modelcontextprotocol/typescript-sdk/pull/3115), merged 2026-10-31, not in a release as of 2026-11-20). The C# SDK has an `Experimental.ModelContextProtocol` activity source. The Go and Java SDKs have no built-in instrumentation.

#### Related

- The conventions are an OpenTelemetry document, in its `semantic-conventions-genai` repository. [Model Context Protocol](#mcp) reserves the three `_meta` trace keys in the [2026-07-28 spec](https://modelcontextprotocol.io/specification/2026-07-28/basic/index#_meta), and its SDKs emit the spans.
- [SEP-2028](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2028), open, would forward `_meta` entries to HTTP headers for distributed tracing. [SEP-2448](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2448), server execution telemetry, closed without merging on 2026-09-22.

#### Compare

- [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta) proposes the same `_meta` slot for content credentials. Neither names the other (searched 2026-11-15).
- [Content Telemetry](#content-telemetry) reports on the content after the call, which a span leaves out. Neither names the other (searched 2026-11-15).
- Lineage after the tool call, rather than the call itself: [OpenLineage](#openlineage). Its MCP RFC mentions OpenTelemetry only in passing (searched 2026-11-15).

#### In use

- The MCP Python SDK emits client and server spans as of [v2.0.0](https://github.com/modelcontextprotocol/python-sdk/releases/tag/v2.0.0) (2026-07-28).

#### History

- 2026-10-31: Built-in OpenTelemetry tracing and metrics merged for the TypeScript SDK, not yet released.

Linked from: [AAIF Observability and Traceability WG](#aaif-observability-traceability-wg), [Content Telemetry](#content-telemetry), [Model Context Protocol](#mcp)

### Project NANDA

- Id: project-nanda
- Type: project
- Website: https://projectnanda.org
- Take part: [GitHub](https://github.com/projnanda)
- Tags: type/project, layer/identity, topic/discovery
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#project-nanda

MIT-originated agent registry and trust-manifest work, discussed in [AAIF Security and Privacy WG](#aaif-security-privacy-wg).

#### Topics

- **Agent trust manifests**: trust metadata for agents in an open registry.

Linked from: [AAIF Security and Privacy WG](#aaif-security-privacy-wg)

### Really Simple Licensing

- Id: rsl
- Also known as: RSL
- Type: specification
- Status: RSL 1.0 published 2025-12-10; the collective behind it relaunched as the Internet Licensing Collective 2026-11-12
- Website: https://rslstandard.org
- News: https://rslstandard.org/press
- Take part: [GitHub](https://github.com/rslstandard)
- Tags: type/specification, layer/licensing, layer/payments
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#rsl

XML vocabulary for usage and compensation terms (per-crawl, per-inference, subscription, attribution-only), discovered from robots.txt, RSS, HTTP headers or HTML. Includes a Crawler Authorization Protocol and an Open License Protocol on OAuth 2.0. [Internet Licensing Collective](#internet-licensing-collective), formerly the RSL Collective, is the collecting society behind it.

#### Topics

- **Machine-readable terms**: publishing usage terms and prices that crawlers and AI systems can read and accept.
- **Training opt-out**: saying whether AI may train on content. The [usage vocabulary](https://rslstandard.org/rsl#_3-4-1-1-usage-vocabulary) (section 3.4.1.1) has `ai-train`, `ai-input`, `ai-index` and `ai-all` tokens for `<permits>` and `<prohibits>`. The spec says it includes the [Cloudflare Content Signals](#cloudflare-content-signals) vocabulary and may add terms from [IETF AI Preferences Working Group](#ietf-aipref).
- **Adoption**: getting model developers to honor it on the open web. None has committed.
- **Enforcement**: supplying the lever [Content Telemetry](#content-telemetry) manifests lack, through a [SPUR profile binding](https://github.com/SPUR-Coalition/telemetry-profile/tree/main/bindings) that declares reporting in RSL's `<reporting>` element, a v0.1 draft marked for discussion with the RSL working group (read 2026-11-20).

#### Compare

- [Microsoft Publisher Content Marketplace](#microsoft-publisher-content-marketplace): Microsoft's announcement does not mention RSL, and RSL's pages do not mention Microsoft (searched 2026-11-20).

#### In use

- Yahoo Scout licenses content through [Internet Licensing Collective](#internet-licensing-collective), whose members declare their terms in RSL ([launch release](https://internetcollective.org/press/ilc-launch-2026), 2026-11-12).
- [policycheck](https://github.com/openattribution-org/policycheck) v0.2.1 (2026-02-15) reads RSL `License:` directives from robots.txt.

#### History

- 2026-11-12: The RSL Collective relaunched as [Internet Licensing Collective](#internet-licensing-collective).
- 2026-06-12: Section 3.12 `<reporting>` [added](https://rslstandard.org/rsl/errata), for machine-readable reporting requirements on licensed activity.
- 2025-12-10: RSL 1.0 published.

Linked from: [Content Telemetry](#content-telemetry), [Encypher](#encypher), [EU AI Act and GPAI Code of Practice](#eu-ai-act-gpai-code), [Internet Licensing Collective](#internet-licensing-collective), [Microsoft Publisher Content Marketplace](#microsoft-publisher-content-marketplace), [OpenAttribution.org](#openattribution), [W3C ODRL](#w3c-odrl), [x402](#x402)

### Rights & AI

- Id: rights-and-ai
- Also known as: RightsAndAI, rightsandai.com
- Type: project
- Status: Lists 16 reserving rightsholders, with its company file at version 31 (read 2026-11-16)
- Website: https://www.rightsandai.com
- Take part: [add a company to the declaration](https://www.rightsandai.com)
- Tags: type/project, layer/access, layer/licensing, medium/audio
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#rights-and-ai

Public declaration in which music publishers and collecting societies reserve their rights against AI training without a license, with a downloadable file of the companies behind it. The International Confederation of Music Publishers (ICMP) announced it in a [release](https://icmpmusic.com/wp-content/uploads/2024/04/PRESS-RELEASE-International-music-sector-and-AI-www.RightsAndAI.com-03-04-2024.pdf) for 2024-04-04.

#### Topics

- **Reserving rights in one place**: giving AI developers one public place to see that a music rightsholder has reserved its rights. The [declaration](https://www.rightsandai.com) says use of the works "for AI training without a valid licence breaches the copyright in the Works". It reserves rights against text and data mining and names Article 4 of the EU's 2019 copyright directive, US fair use, and the copyright acts of Japan, Singapore and Israel.
- **A file machines can read**: letting a crawler operator check who has reserved. ICMP's release says the site functions on "a technical level" through a CSV file of "company information in machine readable form", and calls it a resource for "AI companies, online content crawlers and bots". The file has four columns: company name, registered address, company number and IPI number. Version 31 has 1,516 rows (read 2026-11-16).
- **By company**: saying who has reserved without listing every work. The file identifies companies by name and IPI number and lists no individual works.
- **Consent, credit and compensation**: the declaration's terms for any AI use, stated as "no use without consent, credit & compensation".

#### Related

- The site shows 16 rightsholders, among them Universal Music Publishing Group, Sony Music Publishing, Warner Chappell Music, Kobalt, Concord, BMG, peermusic, Deezer and the societies PRS for Music, MCPS and APRA AMCOS. It shows 16 endorsing trade bodies, among them the National Music Publishers Association and ICMP (read 2026-11-16).
- The site itself does not name its operator. The release is ICMP's.
- The release says the site will be available in seven languages, including Japanese. The site offers English, Arabic, Chinese, French, German, Italian and Spanish (read 2026-11-20).
- Record companies reserve the same rights in separate declarations, which IFPI [lists](https://www.ifpi.org/ifpi-priorities/reservations-of-rights/). WIN, the network of independent music trade associations, publishes its own [notice](https://winformusic.org/ai-rights-reservation).

#### Compare

- [W3C TDM Reservation Protocol Community Group](#w3c-tdmrep) expresses an Article 4 reservation on the publisher's own site, per resource. Rights & AI lists companies in one file. The site does not mention TDMRep or robots.txt (read 2026-11-16).

#### In use

- The [declaration and company file](https://www.rightsandai.com) are live, with the file at version 31 (read 2026-11-16).

#### History

- 2024-04-04: ICMP announced the site. The release was issued the day before, and says the site had already launched.

### SEP-2127 Server Cards

- Id: mcp-server-cards
- Also known as: SEP-2127, MCP Server Card, ext-server-card
- Type: specification
- Status: SEP-2127 is Final and its PR merged 2026-10-06; SEP-3392 (merged 2026-10-29) classifies ext-server-card as Beta; the extension repository README still says Experimental
- Website: https://github.com/modelcontextprotocol/ext-server-card
- Part of: [Model Context Protocol](#mcp)
- Take part: [ext-server-card issues](https://github.com/modelcontextprotocol/ext-server-card/issues), [Server Card WG charter](https://modelcontextprotocol.io/community/working-groups/server-card)
- Tags: type/specification, venue/mcp, layer/identity, topic/discovery
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#mcp-server-cards

A static JSON document that describes a remote MCP server before a client connects: its name, version, transport endpoints and supported protocol versions. The extension identifier is `io.modelcontextprotocol/server-card`. A domain advertises its cards through an [AI Catalog](#ai-catalog) entry of type `application/mcp-server-card+json`.

#### Topics

- **Finding a server from a domain**: a client had no standard way to learn which MCP servers a domain offers. The domain publishes an AI Catalog at `/.well-known/ai-catalog.json` that links to or embeds its Server Cards.
- **Servers hosted by someone else**: a catalog may list cards served from another domain, such as a SaaS host that runs a server on the organization's behalf.
- **No tools, no terms**: the card leaves out tools, resources, prompts and capabilities, which vary by user and session. It has no field for a licence, usage terms or entitlements (`schema.ts` read 2026-11-16).

#### Related

- [MCP Registry](#mcp-registry) `server.json` is a separate schema owned by the Registry WG. It also covers locally installed packages, which a Server Card does not.
- The Authorization IG charter places "Server identity, provenance, and trust signalling" with the Server Card and Registry efforts.

#### History

- 2026-10-29: SEP-3392 merged, classifying ext-server-card as Beta.
- 2026-10-06: SEP-2127 PR merged.
- 2026-01-21: SEP-2127 created.

Linked from: [AI Catalog](#ai-catalog), [KBART](#kbart), [MCP Registry](#mcp-registry), [Model Context Protocol](#mcp)

### SEP-2640 Skills Extension

- Id: mcp-skills-extension
- Also known as: SEP-2640, ext-skills
- Type: specification
- Status: Final 2026-09-13; Beta under SEP-3392
- Website: https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2640
- Part of: [Model Context Protocol](#mcp)
- Take part: [SEP-2640 PR](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2640), [MCP community channels](https://modelcontextprotocol.io/community/communication)
- Tags: type/specification, venue/mcp, stage/at-rest, topic/skills, medium/code
- Updated: 2026-11-16
- Explorer: https://www.olahungerford.com/content-provenance/#mcp-skills-extension

Serves [Agent Skills](#agent-skills) over MCP, with digests and a `_meta` slot for intermediaries.

#### Topics

- **Skills over MCP**: distributing skills to clients with digests and a `_meta` slot for intermediaries.

#### Related

- At-rest signing is not on the Skills WG agenda ([Agent Skills at-rest signing threads](#agent-skills-signing)).

#### History

- 2026-09-13: SEP-2640 marked Final.

Linked from: [Agent Plugins](#agent-plugins), [Agent Skills at-rest signing threads](#agent-skills-signing), [Model Context Protocol](#mcp)

### SEP-3094 Granular Citations

- Id: mcp-sep-3094-citations
- Also known as: SEP-3094, #3094
- Type: proposal
- Status: Closed without merging 2026-11-08; the author plans to take it to the Core Primitives WG on 2026-11-23
- Website: https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3094
- Part of: [Model Context Protocol](#mcp)
- Take part: [SEP-3094 PR](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3094), [MCP community channels](https://modelcontextprotocol.io/community/communication)
- Tags: type/proposal, venue/mcp, layer/attribution, stage/in-transit, stage/after-delivery
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#mcp-sep-3094-citations

Citations on tool results bound by CommonMark links in the text, each a flat schema.org CreativeWork, granularity via URL fragments, integrity deferred. A `citations.render` client capability.

#### Topics

- **Citations in transit**: keeping sources attached from tool result to the answer a user sees.
- **Sponsorship and venue**: finding a sponsor and a WG or IG discussion. A maintainer wrote on 2026-11-06 that "we now encourage people to go through working groups to create SEPs", and suggested the Core Primitives WG or a new interest group on citations.
- **Field placement**: choosing a top-level field or `_meta` processed by [MCP Interceptors WG and SEP-2624](#mcp-interceptors).

#### Related

- Reviewers include a [Wikimedia](#wikimedia) contributor.
- On the [MCP Financial Services Interest Group](#mcp-fsig) agenda on 2026-09-24 ([meeting notes](https://docs.google.com/document/d/19HwCw7i4k-omABGnRYGGuLdMJNXQc3rs_QRgJxPhQU8/edit)).

#### Compare

- Reporting: the citations could map to [Open Knowledge Foundation](#okfn)'s `sources` list and to [Content Telemetry](#content-telemetry) events. Neither source makes the mapping (searched 2026-11-15).
- Another reviewer contributes to OKFN's MCP server. No OKFN page names the SEP (searched 2026-11-15).

#### History

- 2026-11-08: Closed without merging.
- 2026-09-04: Revised.

Linked from: [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta), [CC Signals](#cc-signals), [Content Telemetry](#content-telemetry), [MCP Financial Services Interest Group](#mcp-fsig), [MCP Interceptors WG and SEP-2624](#mcp-interceptors), [MCP Security Interest Group](#mcp-security-ig), [Model Context Protocol](#mcp), [Open Knowledge Foundation](#okfn), [Wikimedia](#wikimedia)

### Shared AI training robots.txt token

- Id: aipref-training-token
- Also known as: draft-kelley-aipref-training-preference-signal, __usage_ai-training
- Type: proposal
- Status: Individual draft -01 posted 2026-11-16; Google, OpenAI, Microsoft and Anthropic committed to honor it; Microsoft starts 2027-02-01 and Google plans early 2027
- Website: https://datatracker.ietf.org/doc/draft-kelley-aipref-training-preference-signal/
- Part of: [IETF AI Preferences Working Group](#ietf-aipref)
- Take part: [ai-control mailing list](https://mailarchive.ietf.org/arch/browse/ai-control/)
- Tags: type/proposal, layer/access
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#aipref-training-token

A robots.txt group whose `User-Agent` is the cross-vendor token `__usage_ai-training`, using ordinary `Allow` and `Disallow` rules. No new syntax. "AI Training" takes its definition from the [IETF AI Preferences Working Group](#ietf-aipref) vocab draft.

#### Topics

- **One training opt-out**: a single signal every major crawler operator honors, with no new robots.txt grammar.
- **Compliance**: getting honored signals to change outputs. Prompting can still surface disallowed content.

#### Related

- An alternative to the attach draft's `Content-Usage` directive in [IETF AI Preferences Working Group](#ietf-aipref). [Pull request 260](https://github.com/ietf-wg-aipref/drafts/pull/260) (open, 2026-11-13) proposes the cross-vendor tokens in place of a `Content-Usage` robots.txt rule in the WG drafts.

#### In use

- [ai.robots.txt](#ai-robots-txt) v2.2 (2026-11-16) adds a `User-agent: __usage_ai-training` group to its generated robots.txt.

#### History

- 2026-11-16: -01 posted.
- 2026-10-30: Individual draft posted.

Linked from: [ai.robots.txt](#ai-robots-txt), [EU AI Act and GPAI Code of Practice](#eu-ai-act-gpai-code), [IETF AI Preferences Working Group](#ietf-aipref), [Knight-Georgetown Institute](#knight-georgetown-institute), [Microsoft training and grounding preferences](#microsoft-grounding-preference)

### Skills Marketplace

- Id: skills-marketplace
- Also known as: skill-cards, skillproof
- Type: project
- Status: Work in progress with O'Reilly Media and Miso.ai; initial testing with O'Reilly Media authors
- Website: https://ai-disclosures.org/prototypes.html
- Part of: [AI Disclosures Project](#ai-disclosures-project)
- Take part: [Skill Cards issues](https://github.com/SrulyRosenblat/skill-cards/issues), [SkillProof issues](https://github.com/SrulyRosenblat/skillproof/issues)
- Tags: type/project, layer/licensing, layer/attribution, layer/payments, topic/skills, medium/code
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#skills-marketplace

A marketplace for modular, interoperable, rights-protected skills with monetization for their authors, built with O'Reilly Media and Miso.ai. Two public tools so far: [Skill Cards](https://github.com/SrulyRosenblat/skill-cards) measures how well a skill covers its source documentation, and [SkillProof](https://srulyrosenblat.github.io/skillproof/) benchmarks the uplift a skill gives an agent.

#### Topics

- **Paying skill authors**: choosing a payout basis for skills, measured contribution or invocation count.
- **Multi-source skills**: crediting every source behind a skill.
- **Missing metadata**: [Agent Skills](#agent-skills) frontmatter has an optional `license` field and a free-form `metadata` map, with no defined author or source field.

#### Related

- The author of Skill Cards and SkillProof also publishes a [Book-to-skill pipeline](https://github.com/SrulyRosenblat/Book-to-skill-pipieline). Its benchmark of a book-derived FastAPI skill reports 13 pairwise wins with the skill and 7 without over 20 tasks, each run once. Public tests passed on 18 of 20 tasks with the skill and 20 of 20 without.

#### Compare

- [OpenAttribution.org](#openattribution) and [C2PA](#c2pa) are possible ways to credit every source behind a skill. The prototypes use neither (searched 2026-11-15).
- The [Agent Skills at-rest signing threads](#agent-skills-signing) would add author and source to a skill. The prototypes do not refer to them (searched 2026-11-15).
- [Agent Plugins](#agent-plugins) gives a package format but defines no marketplace or distribution. Neither names the other (searched 2026-11-15).

Linked from: [Agent Plugins](#agent-plugins), [Agent Skills](#agent-skills), [AI Disclosures Project](#ai-disclosures-project)

### SOCAN

- Id: socan
- Type: organization
- Status: Sued Suno on 2026-09-02 and amended the claim on 2026-11-18, with no ruling yet. Named Musical AI an approved attribution partner on 2026-07-20 (read 2026-11-20)
- Website: https://www.socan.com
- News: https://www.socan.com/media-centre/
- Tags: type/organization, layer/licensing, layer/payments, layer/attribution, medium/audio
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#socan

The Society of Composers, Authors and Music Publishers of Canada, a rights society that collects license fees for the public performance and reproduction of music. Its CEO is a Vice-Chair of the [CISAC](#cisac) board ([CISAC](https://www.cisac.org/Newsroom/news-releases/cisac-announces-new-board-directors), 2025-05-28). It registers works made with AI tools, has named an attribution technology partner, and is suing Suno over generated songs.

#### Topics

- **Registering works made with AI**: deciding which works made with AI tools a society accepts and pays on. Its [guidelines](https://www.socanmagazine.ca/socan-academy/socan-ai-registration-guidelines/) of 2025-10-28 accept an AI-Assisted Work, "created by a human using AI tools to help or enhance their work". They refuse an AI-Generated Output, "created entirely by AI with little or no human input". An accepted work is paid like any other registered work. ASCAP and BMI [announced aligned policies](https://www.socan.com/?p=14445) the same day.
- **No disclosure at registration**: whether a member has to say that AI was used. The guidelines say "You don't need to disclose how AI was used when registering your AI-Assisted Work with SOCAN", and that the generated portions need no credit.
- **Consent first**: whether AI use starts from permission or from an opt-out. Its [AI page](https://www.socanmagazine.ca/socan-academy/socan-ai/) says Canada has no generative AI exception to opt out of, so a user needs the copyright owner's permission. Its Musical AI release says "All AI use should occur on an opt-in basis."
- **Attribution for payouts**: tracing a generated output back to the works that shaped it. SOCAN [named](https://www.socan.com/socan-announces-collaboration-with-musical-ai-to-advance-music-creator-attribution-remuneration-and-transparency-in-ai/) Musical AI "an approved technology partner for attribution services". The release says the technology analyses generated outputs and assesses influence separately for sound recordings and musical compositions. It names no license, rate or launch date.
- **Output that replicates songs**: whether a service infringes when what it generates replicates existing works. SOCAN's [claim against Suno](https://www.socan.com/socan-ai/ai-lawsuit/) lists a sample of 150 publicly available outputs. It alleges Suno infringed the performing right by making its platform available in Canada and streaming those outputs. The page's FAQ says the case "focuses on clear, documented examples of outputs".
- **Training transparency**: finding out which works a model was trained on. The AI page says "Many companies have not publicly disclosed their training data sets", and asks for transparency and record-keeping rules for AI developers.

#### Related

- The account of the lawsuit here comes from SOCAN's release and lawsuit page. The original [statement of claim](https://www.socan.com/wp-content/uploads/2026/09/ISSUED-Statement-of-Claim-SOCAN-v-Suno-September-2-2026-2.pdf) is a scan with no text layer and was not read. The [amended statement of claim](https://www.socan.com/wp-content/uploads/2026/11/ISSUED-Amended-Statement-of-Claim-SOCAN-v-Suno-November-18-2026.pdf) was read on 2026-11-20.
- The lawsuit page says "SOCAN has neither issued a licence nor received any royalty payments from Suno."
- In the joint release, SOCAN, ASCAP and BMI each define a partially AI-generated work as one that "combines elements of AI-generated musical content with elements of human authorship". ASCAP's and BMI's own policy pages were not read.

#### Compare

- [DDEX](#ddex) messages carry a declaration that a recording was made with AI. SOCAN asks for none at registration. The guidelines do not mention DDEX (read 2026-11-16).
- [GEMA](#gema) won at first instance against Suno on 2026-07-31, in a case about works stored in the model. SOCAN's claim is for infringement of the performing right through outputs. It also alleges that the Suno model has memorized many of the works it was trained on. SOCAN's release and lawsuit page do not mention GEMA (read 2026-11-16).

#### In use

- The [AI registration guidelines](https://www.socanmagazine.ca/socan-academy/socan-ai-registration-guidelines/) are dated 2025-10-28 (read 2026-11-16).

#### History

- 2026-11-18: Filed an amended statement of claim (Federal Court T-3803-26) that adds outputs made with Suno's v6 models, which Suno released on 2026-09-09.
- 2026-09-02: [Sued](https://www.socan.com/socan-is-standing-up-for-music-creators-and-publishers-with-legal-action-against-suno-inc-for-unauthorized-use-of-music-in-generative-ai-platform/) Suno Inc. over outputs that replicate songs in its repertoire.
- 2026-07-20: Named Musical AI an approved technology partner for attribution services.
- 2025-10-28: Published its AI registration guidelines, alongside aligned policies from ASCAP and BMI.

Linked from: [CISAC](#cisac), [STIM](#stim)

### Spawning

- Id: spawning
- Also known as: datadiligence
- Type: organization
- Status: datadiligence dormant since 2024-10; spawning.ai shows a maintenance page (read 2026-11-20)
- Website: https://spawning.ai
- Take part: [GitHub](https://github.com/Spawning-Inc/datadiligence)
- Tags: type/organization, layer/access
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#spawning

Maker of datadiligence, a Python library that checks works against known opt-out methods inside a training pipeline.

#### Topics

- **Pipeline-side compliance**: checking works against known opt-outs inside a training pipeline. No other open-source implementation of this step appears on these cards.

### SPUR Coalition

- Id: spur-coalition
- Type: organization
- Status: Content Telemetry v1.0 published 2026-09-02; The New York Times, AFP, The Economist and The Atlantic joined 2026-10-13
- Website: https://www.spurcoalition.org
- News: https://www.spurcoalition.org/updates
- Feed: https://www.spurcoalition.org/updates?format=rss
- Take part: [GitHub](https://github.com/SPUR-Coalition)
- Tags: type/organization, layer/attribution, stage/after-delivery, stage/trust
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#spur-coalition

Publisher coalition whose founding members are the BBC, Financial Times, Guardian Media Group, Mediahuis, Sky News, Telegraph Media Group, the Associated Press and CMA Media. The AP is the first US-based founding member. Stewards [Content Telemetry](#content-telemetry) and the publisher accreditation profile and conformance mark. Sister body [OpenAttribution.org](#openattribution) originally developed the SDKs, which SPUR now maintains.

#### Topics

- **Visibility past retrieval**: letting publishers see grounding, citation, display and engagement, not only the fetch.
- **Verifying reports**: checking self-reported events through sampled audits or canary content. v1.0 makes per-event signing optional (section 8.4) and defers manifest signing (section 8.9). The SPUR evidence profile, a working draft, covers how claims are corroborated.
- **Publisher accreditation**: a conformance mark for agents that report at the required level.

#### History

- 2026-10-13: The New York Times, Agence France-Presse, The Economist and The Atlantic joined.
- 2026-09-02: [Content Telemetry](#content-telemetry) v1.0 published.
- 2026-07-09: The Associated Press joined as the first US-based founding member.
- 2026-05-11: Mediahuis joined as a founding member.

Linked from: [C2PA](#c2pa), [Content Telemetry](#content-telemetry), [Internet Licensing Collective](#internet-licensing-collective), [OpenAttribution.org](#openattribution)

### STIM

- Id: stim
- Also known as: Stim
- Type: organization
- Status: Offers a license for AI services, launched as a pilot on 2025-09-08. AI has been a separate rights category since 2026-06-01, and members approve works one by one (read 2026-11-16)
- Website: https://www.stim.se/en
- News: https://www.stim.se/en/news
- Take part: [license for AI services](https://www.stim.se/en/license-for-ai-services)
- Tags: type/organization, layer/licensing, layer/payments, layer/attribution, medium/audio
- Updated: 2026-11-17
- Explorer: https://www.olahungerford.com/content-provenance/#stim

Swedish collecting society for songwriters and music publishers, founded in 1923. It offers AI services a license that covers training and generation and requires attribution technology. [CISAC](#cisac) carried the [launch announcement](https://www.cisac.org/Newsroom/society-news/stim-launches-worlds-first-collective-ai-music-licence) in its society news.

#### Topics

- **Licensing AI services**: giving an AI service one license for training a model and for the music its users generate. The [license](https://www.stim.se/en/license-for-ai-services) permits the licensee "to analyze musical structures, patterns, and metadata" to train a model. A model that is retrained or trained further needs a new license. Users may generate music and distribute it to third parties such as streaming services. Advertising, television, radio and film uses need a separate agreement. The page gives no price and names no licensee (read 2026-11-16).
- **Attribution for payouts**: dividing AI revenue by which works influenced an output. The licensee must use an attribution provider STIM approves, which works out which recordings and works influenced the generated music and to what extent. The licensee gives STIM these analyses with identifiers such as ISWC. STIM's [FAQ](https://www.stim.se/en/faq/ai/how-does-stim-ensure-that-compensation-from-the-ai-license-reaches-the-right-music-creators-and-publishers) calls attribution "a relatively new and untested method" and says it will fall back on how works were used in training where attribution is not reliable.
- **Consent work by work**: letting each creator decide whether a work may go into an AI license. Its members [voted](https://www.stim.se/en/news/stim-strengthens-music-creators-freedom-of-choice-and-control-in-ai-introduces-new-rights-category) for a separate rights category for AI, in effect from 2026-06-01. The post says "No works will be able to be included in AI licenses without the creator actively approving it – work by work." A member can also take the category out of STIM's administration.
- **Recording rights**: training needs a license for the recording as well as for the musical work. STIM normally licenses the works only. This first version of the license also includes master rights for a selected catalogue, and the page says the bundle "may not apply to all future licensing agreements".
- **Labelling the output**: keeping generated music out of the royalty pool for conventional music. The licensee must "Ensure that the output is classified as AI-generated in accordance with industry practice". The page does not say which practice.

#### Related

- The [launch post](https://www.stim.se/en/news/stim-launches-the-worlds-first-ai-license-for-music) describes a pilot with the startups Songfox and Sureel, covering a limited number of works whose rights holders opted in. Its glossary names Sureel and Musical AI as examples of attribution providers.
- Warner Music Group announced on 2026-06-10 that it is acquiring Sureel, which it said will keep operating as a stand-alone platform ([TechCrunch](https://techcrunch.com/2026/06/10/warner-music-acquires-ai-attribution-startup-sureel-ai)).

#### Compare

- [GEMA](#gema) also publishes a licensing model for generative AI, and asks for 30% of net revenue. STIM publishes no rate. STIM's license page and launch post do not name GEMA (read 2026-11-16).
- [SOCAN](#socan) has approved an attribution provider and has announced no license. SOCAN's release does not mention STIM, and STIM's launch post names no other society (read 2026-11-16).
- [DDEX](#ddex) messages can declare that a recording was made with AI, which is one way to meet the labelling requirement. The license page does not name DDEX (read 2026-11-16).

#### In use

- The [license for AI services](https://www.stim.se/en/license-for-ai-services) is open to AI services that use music STIM represents (read 2026-11-16).
- The [AI rights category](https://www.stim.se/en/news/stim-strengthens-music-creators-freedom-of-choice-and-control-in-ai-introduces-new-rights-category) has applied to all affiliated creators since 2026-06-01.

#### History

- 2026-06-01: The AI rights category took effect.
- 2026-05-31: Announced that its members had voted for a separate rights category for AI.
- 2025-09-08: Launched its AI license as a pilot with Songfox and Sureel.
- 1923: Founded.

Linked from: [CISAC](#cisac)

### TRACE

- Id: trace
- Also known as: Trusted Retrieval and Attribution for Content Ecosystems
- Type: project
- Status: Launched 2026-10-06 with funding for three projects
- Website: https://www.countermetrics.org/trace-project/
- Tags: type/project, layer/provenance, layer/attribution, layer/access, medium/text
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#trace

An initiative of scholarly publishers and standards bodies on how AI systems retrieve, attribute and report their use of scholarly content. It was announced at the STM conference in Frankfurt on 2026-10-06 and brings together STM, [NISO](#niso), [COUNTER Metrics](#counter) and Ithaka S+R. It funds three projects and has no site of its own (searched 2026-11-16).

#### Topics

- **Counting AI use**: TRACE participants part-fund the [COUNTER Metrics](#counter) API and JSON Schema work for its AI metrics. COUNTER names nine publishers as contributors, including Elsevier, Springer Nature and Wiley.
- **Provenance at inference time**: [NISO](#niso) runs a pilot, first planned for twelve months, on a minimum metadata model for provenance and attribution.
- **How agents reach licensed content**: [The Endpoint Question](https://stm-assoc.org/stm-and-ithaka-sr-launch-research-project-on-the-interface-between-scholarly-content-and-ai/), a three-month Ithaka S+R study announced with STM. It looks at how AI agents discover scholarly content, authenticate through a user's entitlements, receive provenance-bearing information and create a credible record of use. The STM announcement says "Publishers are already exploring MCP endpoints and other ways of enabling access to content". The [launch article](https://scholarlykitchen.sspnet.org/2026/10/07/trace-project-launches-to-advance-ai-interoperability/) says the study's scope includes "MCP-style access protocols". Findings are to be published openly.

#### Related

- The [launch article](https://scholarlykitchen.sspnet.org/2026/10/07/trace-project-launches-to-advance-ai-interoperability/) says COUNTER will map [Content Telemetry](#content-telemetry) citation and presentation events to its AI metrics.

#### History

- 2026-10-06: Launched at the STM conference in Frankfurt.

Linked from: [COUNTER Metrics](#counter), [NISO](#niso)

### Universal Commerce Protocol

- Id: ucp
- Also known as: UCP
- Type: specification
- Status: Governing Council of Google, Shopify and Stripe; no foundation home; latest release v2026-08-25
- Website: https://github.com/Universal-Commerce-Protocol/ucp
- News: https://ucp.dev/documentation/announcements/
- Feed: https://github.com/Universal-Commerce-Protocol/ucp/releases.atom
- Take part: [GitHub issues](https://github.com/Universal-Commerce-Protocol/ucp/issues)
- Tags: type/specification, layer/payments
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#ucp

Merchant commerce protocol. [OpenAttribution.org](#openattribution) has an `org.openattribution.telemetry` vendor extension for it.

#### Topics

- **Cross-merchant commerce**: agent commerce across merchants, compared with [Agentic Commerce Protocol](#acp) in [AAIF Agentic Commerce WG](#aaif-agentic-commerce-wg).

#### History

- 2026-08-25: Release v2026-08-25.
- 2026-04-28: Stripe joined Google and Shopify on the Governing Council.

Linked from: [AAIF Agentic Commerce WG](#aaif-agentic-commerce-wg), [OpenAttribution.org](#openattribution)

### W3C

- Id: w3c
- Also known as: World Wide Web Consortium
- Type: organization
- Website: https://www.w3.org
- News: https://www.w3.org/news/, https://www.w3.org/blog/
- Feed: https://www.w3.org/news/feed/, https://www.w3.org/blog/feed/
- Take part: [how to participate](https://www.w3.org/get-involved/)
- Tags: type/organization, layer/licensing, layer/access
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#w3c

Web standards body. Hosts [W3C ODRL](#w3c-odrl) and [W3C TDM Reservation Protocol Community Group](#w3c-tdmrep), and the DID and Verifiable Credentials specs [Agent Identity and Manifest Standard](#aims) uses.

#### Topics

- **Web vocabularies**: rights and identity standards for the web.

Linked from: [W3C ODRL](#w3c-odrl), [W3C TDM Reservation Protocol Community Group](#w3c-tdmrep)

### W3C ODRL

- Id: w3c-odrl
- Also known as: Open Digital Rights Language
- Type: community-group
- Status: 2.2 is a W3C Recommendation; a draft Digital Policy WG charter covers ODRL 3.0; ai-vocab draft
- Website: https://www.w3.org/community/odrl/
- Feed: https://www.w3.org/community/odrl/feed/
- Part of: [W3C](#w3c)
- Take part: [join the community group](https://www.w3.org/community/odrl/join)
- Tags: type/community-group, layer/licensing
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#w3c-odrl

Policy language for permissions, prohibitions and duties on content.

#### Topics

- **Policy language**: one model for permissions, prohibitions and duties that [Really Simple Licensing](#rsl), IPTC RightsML ([IPTC](#iptc)) and [W3C TDM Reservation Protocol Community Group](#w3c-tdmrep) point at. Its AI vocabulary draft cites the [Creator Assertions Working Group](#cawg) training and data mining assertion.
- **AI actions**: adding AI-specific actions to the vocabulary (the `ai-vocab` draft).

Linked from: [Dataspace Protocol](#dataspace-protocol), [Encypher](#encypher), [IPTC](#iptc), [W3C](#w3c), [W3C TDM Reservation Protocol Community Group](#w3c-tdmrep)

### W3C TDM Reservation Protocol Community Group

- Id: w3c-tdmrep
- Also known as: TDMRep
- Type: community-group
- Status: CG Final Report version 3 (2024-05-10); last push 2026-09
- Website: https://www.w3.org/community/tdmrep/
- Feed: https://www.w3.org/community/tdmrep/feed/
- Part of: [W3C](#w3c)
- Take part: [join the community group](https://www.w3.org/community/tdmrep/join)
- Tags: type/community-group, layer/access, layer/licensing
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#w3c-tdmrep

The EU DSM Article 4 text and data mining opt-out: `tdm-reservation` and `tdm-policy` by HTTP header, HTML meta or `/.well-known/tdmrep.json`.

#### Topics

- **EU TDM opt-out**: a machine-readable text and data mining reservation that satisfies EU DSM Article 4.

#### Related

- Being weighed for the EU recognized opt-out list ([EU AI Act and GPAI Code of Practice](#eu-ai-act-gpai-code)). Points at [W3C ODRL](#w3c-odrl) for detailed policy.
- Record companies reserve the same Article 4 rights by written declaration. IFPI [links to declarations](https://www.ifpi.org/ifpi-priorities/reservations-of-rights/) from 16 rights holders, among them Universal, Sony and Warner, and names no machine-readable protocol (read 2026-11-15).

#### Compare

- The Munich court applied Article 4 in both [GEMA](#gema) rulings. Neither the court nor GEMA names TDMRep (searched 2026-11-15).

Linked from: [Creator Assertions Working Group](#cawg), [EU AI Act and GPAI Code of Practice](#eu-ai-act-gpai-code), [GEMA](#gema), [OpenAttribution.org](#openattribution), [Rights & AI](#rights-and-ai), [W3C](#w3c), [W3C ODRL](#w3c-odrl)

### Wikimedia

- Id: wikimedia
- Also known as: Wikimedia Foundation, Wikimedia Enterprise, WikiCite
- Type: organization
- Status: Published investigation of OpenAI-run agents 2026-10-05; a WikiCite contributor reviewed SEP-3094, which closed 2026-11-08
- Website: https://wikimediafoundation.org
- News: https://wikimediafoundation.org/news/
- Feed: https://wikimediafoundation.org/news/feed/
- Tags: type/organization, layer/attribution, layer/identity
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#wikimedia

Movement behind Wikipedia and Wikidata. Wikimedia Enterprise sells companies API access to the projects. A WikiCite contributor reviewed an MCP citation proposal.

#### Topics

- **Identifiable agents**: knowing which agents are reading the projects.
- **Attribution for reuse**: meeting attribution requirements in agent answers. A WikiCite contributor listed six functions of citation on [SEP-3094 Granular Citations](#mcp-sep-3094-citations), including provenance chains to primary sources.
- **A seat at the table**: [Open Future](#open-future) argued in December 2025 that Wikimedia needs one where agent standards are set.

#### Compare

- [IETF Web Bot Auth Working Group](#ietf-web-bot-auth) and [Agent Identity and Manifest Standard](#aims) are two ways to identify an agent. Wikimedia's post asks for identifiable agents and names no protocol (searched 2026-11-15).
- The seat Open Future argued for is at [Agentic AI Foundation](#aaif). Neither Wikimedia nor AAIF names the other (searched 2026-11-15).

#### In use

- Wikimedia Enterprise partners include Google, Ecosia, Nomic, Pleias, ProRata and Reef Media. Amazon, Meta, Microsoft, Mistral AI and Perplexity were announced as partners on 2026-01-15 ([announcement](https://enterprise.wikimedia.com/blog/wikipedia-25-enterprise-partners/)).

#### History

- 2026-10-05: Published its investigation of OpenAI-run agents.

Linked from: [IETF Web Bot Auth Working Group](#ietf-web-bot-auth), [Internet Licensing Collective](#internet-licensing-collective), [Open Future](#open-future), [Open Knowledge Foundation](#okfn), [SEP-3094 Granular Citations](#mcp-sep-3094-citations)

### x402

- Id: x402
- Also known as: x402 Foundation
- Type: specification
- Status: x402 Foundation (Linux Foundation) operational 2026-07-14; Executive Director appointed 2026-10-01; v2 spec
- Website: https://x402.org
- News: https://x402.org/announcements/, https://x402.org/blog/
- Feed: https://x402.org/feed/
- Take part: [GitHub](https://github.com/x402-foundation/x402)
- Tags: type/specification, layer/payments
- Updated: 2026-11-20
- Explorer: https://www.olahungerford.com/content-provenance/#x402

HTTP 402 payments in headers, with schemes `exact`, `upto`, `auth-capture` and `batch-settlement` and transports for HTTP, MCP and A2A. Successor in spirit to L402 (Lightning). Sibling of [Agentic AI Foundation](#aaif) under the Linux Foundation, not part of it.

#### Topics

- **Machine payment**: paying for a request without accounts or API keys, the rail a licensing term would settle on. The [Really Simple Licensing](#rsl) spec names x402 as a payment protocol.
- **Delegated spending**: authorization for agents spending on someone's behalf, which lives elsewhere ([Agent Payments Protocol](#ap2)).

#### Related

- Compared with other commerce specs in [AAIF Agentic Commerce WG](#aaif-agentic-commerce-wg).

#### Compare

- [IAB Tech Lab Content Monetization Protocols](#iab-comp) terms could settle on the same rail. CoMP does not mention x402 (searched 2026-11-15).

#### History

- 2026-10-01: The Linux Foundation appointed Michael Hursta as Executive Director of the x402 Foundation.
- 2026-07-14: x402 Foundation (Linux Foundation) operational.

Linked from: [AAIF Agentic Commerce WG](#aaif-agentic-commerce-wg), [Agent Payments Protocol](#ap2), [Machine Payments Protocol](#mpp)
