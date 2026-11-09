# Content Provenance, Access and Attribution

59 cards for the organizations, working groups, specifications and proposals that decide where content came from (provenance), what may be done with it (access, licensing, payment) and whether its source gets credited (attribution), and where the Model Context Protocol fits among them. Compiled by Ola Hungerford (https://www.olahungerford.com/about/), as of 2026-11-08. One person's working notes. Status lines carry the dates the sources gave, so check upstream before relying on one.

Explorer for people: https://www.olahungerford.com/content-provenance/. The same cards as JSON: https://www.olahungerford.com/content-provenance/cards.json. Links between cards point at the card's heading in this file; each card also has an Id line.

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
- at the boundary: a gateway or hook checks it on the way through.
- after delivery: credit and reporting once the content has left the protocol and its metadata is gone.
- trust: who may sign or report, and how that is decided. Not a place on the path, but every other stage depends on it.

## Cards

### AAIF Agentic Commerce WG

- Id: aaif-agentic-commerce-wg
- Type: working-group
- Status: Chartered 2026-05-15; catalogs specs rather than authoring one
- Website: https://github.com/aaif/wg-agentic-commerce
- Part of: [Agentic AI Foundation](#aaif)
- Take part: [GitHub issues](https://github.com/aaif/wg-agentic-commerce/issues)
- Tags: type/working-group, layer/payments
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#aaif-agentic-commerce-wg

Discovery and negotiation, checkout, delegated authority, agentic payments, fraud signals, post-purchase.

#### Topics

- **Commerce spec harmony**: comparing and aligning [Agentic Commerce Protocol](#acp), [Universal Commerce Protocol](#ucp), [Agent Payments Protocol](#ap2) and [x402](#x402).

Linked from: [Agentic AI Foundation](#aaif), [Universal Commerce Protocol](#ucp), [x402](#x402)

### AAIF Governance, Risk and Regulatory WG

- Id: aaif-grr-wg
- Also known as: GRR
- Type: working-group
- Website: https://github.com/aaif/wg-governance-risk-and-regulatory
- Part of: [Agentic AI Foundation](#aaif)
- Take part: [GitHub issues](https://github.com/aaif/wg-governance-risk-and-regulatory/issues)
- Tags: type/working-group, layer/governance
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#aaif-grr-wg

Working group bridging AI policy and the foundation's technical projects.

#### Topics

- **Evidence record shape**: converging record formats for logging and evidence ([issue 9](https://github.com/aaif/wg-governance-risk-and-regulatory/issues/9)).
- **Policy mapping**: mapping [EU AI Act and GPAI Code of Practice](#eu-ai-act-gpai-code) duties onto the projects.

Linked from: [Agentic AI Foundation](#aaif)

### AAIF Identity and Trust WG

- Id: aaif-identity-trust-wg
- Type: working-group
- Status: Chartered 2026-05-12
- Website: https://github.com/aaif/wg-identity-and-trust
- Part of: [Agentic AI Foundation](#aaif)
- Take part: [GitHub issues](https://github.com/aaif/wg-identity-and-trust/issues)
- Tags: type/working-group, layer/identity, stage/trust
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#aaif-identity-trust-wg

Charter: agent identity, authentication and provenance, delegation chains, consent, cross-organization trust, discovery metadata.

#### Topics

- **Evidence strength**: labels for how strong a trust claim is, a model to borrow for content trust.
- **Bound knowledge**: a digest-bound knowledge link set from a server card.

#### Related

- Overlaps [Agent Identity and Manifest Standard](#aims) and [IETF Web Bot Auth Working Group](#ietf-web-bot-auth).

Linked from: [Agent Identity and Manifest Standard](#aims), [Agentic AI Foundation](#aaif), [C2PA](#c2pa)

### AAIF Observability and Traceability WG

- Id: aaif-observability-traceability-wg
- Type: working-group
- Status: Nine-task Agent Behavior Trace Model plan; provenance initiative lead named 2026-09-02; OTel cross-domain provenance proposal 2026-10-28
- Website: https://github.com/aaif/wg-observability-and-traceability
- Part of: [Agentic AI Foundation](#aaif)
- Take part: [GitHub issues](https://github.com/aaif/wg-observability-and-traceability/issues)
- Tags: type/working-group, layer/provenance, layer/attribution
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#aaif-observability-traceability-wg

Working group on agent-level observability, above the OpenTelemetry GenAI telemetry conventions.

#### Topics

- **Evidence records**: tamper-evident records of agent behavior ([Evidence Record Spec proposal](https://github.com/aaif/wg-observability-and-traceability/issues/37)).
- **Responsibility chains**: attributing which agent or human initiated, delegated or approved an action.
- **Liaisons**: the [liaison roster](https://github.com/aaif/wg-observability-and-traceability/issues/11) has no content-side member, so nothing connects the group to [Content Telemetry](#content-telemetry).

#### Related

- The conventions it builds above, and what they leave out: [OpenTelemetry for MCP](#otel-mcp).

Linked from: [Agentic AI Foundation](#aaif), [OpenTelemetry for MCP](#otel-mcp)

### AAIF Security and Privacy WG

- Id: aaif-security-privacy-wg
- Type: working-group
- Website: https://github.com/aaif/wg-security-and-privacy
- Part of: [Agentic AI Foundation](#aaif)
- Take part: [GitHub issues](https://github.com/aaif/wg-security-and-privacy/issues)
- Tags: type/working-group, layer/governance, stage/trust, topic/skills
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#aaif-security-privacy-wg

Working group drafting a security and privacy best-practices guide for agents.

#### Topics

- **Skill verification tiers**: a four-tier ladder in which tier 2 verifies author attribution and tier 3 pins version and hash ([Agent Skills at-rest signing threads](#agent-skills-signing)).
- **Agent trust manifests**: from [Project NANDA](#project-nanda).

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
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#aims

DID-based agent identity, proof of what content the agent is licensed to access, and a link from identity to the telemetry endpoint.

#### Topics

- **Agent identity and entitlements**: who the agent is and what content it is licensed to access. [IETF Web Bot Auth Working Group](#ietf-web-bot-auth) proves it on the wire.

#### Related

- Overlaps [AAIF Identity and Trust WG](#aaif-identity-trust-wg).

Linked from: [AAIF Identity and Trust WG](#aaif-identity-trust-wg), [Decentralized Identity Foundation](#dif), [IETF Web Bot Auth Working Group](#ietf-web-bot-auth), [OpenAttribution.org](#openattribution), [W3C](#w3c), [Wikimedia](#wikimedia)

### Agent Payments Protocol

- Id: ap2
- Also known as: AP2
- Type: specification
- Status: Donated by Google to the FIDO Alliance
- Website: https://ap2-protocol.org
- Take part: [GitHub](https://github.com/google-agentic-commerce/AP2)
- Tags: type/specification, layer/payments, layer/identity
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#ap2

Mandates that prove a human authorized an agent purchase.

#### Topics

- **Delegated purchase authority**: proving a human authorized an agent purchase, with [x402](#x402) as a settlement method underneath.

Linked from: [AAIF Agentic Commerce WG](#aaif-agentic-commerce-wg), [x402](#x402)

### Agent Skills

- Id: agent-skills
- Also known as: agentskills, SKILL.md
- Type: specification
- Status: Joined AAIF 2026-10-22
- Website: https://agentskills.io
- Part of: [Agentic AI Foundation](#aaif)
- Take part: [GitHub discussions](https://github.com/agentskills/agentskills/discussions)
- Tags: type/specification, topic/skills, stage/at-rest
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#agent-skills

The SKILL.md format for packaging instructions and files for agents.

#### Topics

- **Skill provenance**: signing, lineage and authorship of skills ([Agent Skills at-rest signing threads](#agent-skills-signing)).
- **Skill rights and payment**: paying authors and respecting licenses ([Skills Marketplace](#skills-marketplace)).

Linked from: [Agent Skills at-rest signing threads](#agent-skills-signing), [Agentic AI Foundation](#aaif), [SEP-2640 Skills Extension](#mcp-skills-extension)

### Agent Skills at-rest signing threads

- Id: agent-skills-signing
- Also known as: #252, #393, #588, #564, #620, #643
- Type: proposal
- Status: Six open discussions in Ideas, one maintainer, no convergence
- Website: https://github.com/agentskills/agentskills/discussions/393
- Part of: [Agent Skills](#agent-skills)
- Take part: [GitHub discussions](https://github.com/agentskills/agentskills/discussions)
- Tags: type/proposal, layer/provenance, stage/at-rest, topic/skills
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#agent-skills-signing

Proposals for signing, lockfiles and lineage of SKILL.md folders: signature in frontmatter ([#252](https://github.com/agentskills/agentskills/discussions/252)), SKILL.sig sidecar ([#393](https://github.com/agentskills/agentskills/discussions/393)), skills-lock.json ([#588](https://github.com/agentskills/agentskills/discussions/588)), `metadata.source` ([#564](https://github.com/agentskills/agentskills/discussions/564)), `metadata.derived-from` ([#620](https://github.com/agentskills/agentskills/discussions/620)), skill-evidence documents keyed by digest ([#643](https://github.com/agentskills/agentskills/discussions/643)).

#### Topics

- **Copy sprawl**: tracking copies, which outnumber originals. One dataset has half of SKILL.md files as verbatim copies, and only 11.1% of fixes reach every copy.
- **Field ownership**: separating identity (digest), lineage (source, derived-from), authorship (signature) and evidence (keyed by digest) so each thread owns one field.
- **Retraction and signer identity**: withdrawing a bad skill and naming who signed it ([Creator Assertions Working Group](#cawg)). No thread covers either.

#### Related

- Digests from [SEP-2640 Skills Extension](#mcp-skills-extension), catalog-side signing in [AI Catalog](#ai-catalog), sidecars from [C2PA](#c2pa), verification tiers in [AAIF Security and Privacy WG](#aaif-security-privacy-wg).

Linked from: [AAIF Security and Privacy WG](#aaif-security-privacy-wg), [Agent Skills](#agent-skills), [AI Catalog](#ai-catalog), [C2PA](#c2pa), [Creator Assertions Working Group](#cawg), [SEP-2640 Skills Extension](#mcp-skills-extension), [Skills Marketplace](#skills-marketplace)

### Agentic AI Foundation

- Id: aaif
- Also known as: AAIF
- Type: organization
- Status: Linux Foundation; ten hosted projects in its first year
- Website: https://aaif.io
- Take part: [working group repos on GitHub](https://github.com/aaif)
- Tags: type/organization, layer/governance
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#aaif

Hosts [Model Context Protocol](#mcp), goose, AGENTS.md, agentgateway, A2A, [Agent Skills](#agent-skills) and others.

#### Topics

- **Caller-side provenance**: its working groups cover who acted: [AAIF Observability and Traceability WG](#aaif-observability-traceability-wg), [AAIF Identity and Trust WG](#aaif-identity-trust-wg), [AAIF Security and Privacy WG](#aaif-security-privacy-wg), [AAIF Governance, Risk and Regulatory WG](#aaif-grr-wg), [AAIF Agentic Commerce WG](#aaif-agentic-commerce-wg).
- **Content-side representation**: content-side groups (publishers, CC, Wikimedia) are not on the WG liaison rosters.

Linked from: [AAIF Agentic Commerce WG](#aaif-agentic-commerce-wg), [AAIF Governance, Risk and Regulatory WG](#aaif-grr-wg), [AAIF Identity and Trust WG](#aaif-identity-trust-wg), [AAIF Observability and Traceability WG](#aaif-observability-traceability-wg), [AAIF Security and Privacy WG](#aaif-security-privacy-wg), [Agent Skills](#agent-skills), [Model Context Protocol](#mcp), [Open Future](#open-future), [Wikimedia](#wikimedia), [x402](#x402)

### Agentic Commerce Protocol

- Id: acp
- Also known as: ACP
- Type: specification
- Status: Published by OpenAI and Stripe
- Website: https://github.com/agentic-commerce-protocol/agentic-commerce-protocol
- Take part: [GitHub issues](https://github.com/agentic-commerce-protocol/agentic-commerce-protocol/issues)
- Tags: type/specification, layer/payments
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#acp

Merchant checkout for agents. [OpenAttribution.org](#openattribution) has a `content_attribution` extension for it.

#### Topics

- **Agent checkout**: letting agents complete merchant checkout.
- **Credit for purchases**: crediting the content that led to a purchase, through the [OpenAttribution.org](#openattribution) extension.

Linked from: [AAIF Agentic Commerce WG](#aaif-agentic-commerce-wg), [OpenAttribution.org](#openattribution), [Universal Commerce Protocol](#ucp)

### AI Catalog

- Id: ai-catalog
- Also known as: Agent-Card
- Type: specification
- Status: Identity-keyed trust manifests merged 2026-10-28
- Website: https://github.com/Agent-Card/ai-catalog
- Take part: [GitHub issues](https://github.com/Agent-Card/ai-catalog/issues)
- Tags: type/specification, layer/provenance, layer/identity, stage/at-rest
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#ai-catalog

Catalog format for discovering agents, MCP servers and skills.

#### Topics

- **Discovery**: finding agents, servers and skills across vendors.
- **Catalog trust**: signing catalog entries with [identity-keyed trust manifests](https://github.com/Agent-Card/ai-catalog/pull/117), a path parallel to [Agent Skills at-rest signing threads](#agent-skills-signing).

Linked from: [Agent Skills at-rest signing threads](#agent-skills-signing)

### AI Disclosures Project

- Id: ai-disclosures-project
- Type: organization
- Status: Convenings at Bellagio (April 2026), Foo Camp (June 2026), MSR NYC (September 2026)
- Website: https://ai-disclosures.org
- Tags: type/organization, layer/governance, layer/attribution, layer/payments
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#ai-disclosures-project

Project housed at Code for Science and Society working on the standards and mechanisms for value distribution in the human and AI economy. Prototypes include [Skills Marketplace](#skills-marketplace), the Open Memory Protocol Consortium and the Open Alpha Registry.

#### Topics

- **Value distribution**: the missing mechanisms for attribution and compensation in AI markets.
- **Measuring harm**: ecosystem exploitation in search results and access violations in pre-training data (paper repos).

Linked from: [Skills Marketplace](#skills-marketplace)

### ai.robots.txt

- Id: ai-robots-txt
- Type: project
- Website: https://github.com/ai-robots-txt/ai.robots.txt
- Take part: [GitHub issues](https://github.com/ai-robots-txt/ai.robots.txt/issues)
- Tags: type/project, layer/access
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#ai-robots-txt

Community list of AI crawlers with generated robots.txt, nginx, Caddy, HAProxy and lighttpd blocks.

#### Topics

- **Crawler blocking today**: giving site operators ready-made blocks, and a record of what they deploy compared with what [IETF AI Preferences Working Group](#ietf-aipref) specifies.

### C2PA

- Id: c2pa
- Also known as: Coalition for Content Provenance and Authenticity
- Type: organization
- Status: Spec 2.5 published October 2026
- Website: https://c2pa.org
- Take part: [membership](https://c2pa.org/membership/), [spec issues](https://github.com/c2pa-org/specifications/issues)
- Tags: type/organization, layer/provenance, stage/at-rest, stage/in-transit, stage/trust
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#c2pa

Standards body for content credentials: signed manifests (claims and assertions) bound to an asset, with ingredients for derived works. Reference code is maintained by the [Content Authenticity Initiative](#content-authenticity-initiative).

#### Topics

- **Asset provenance**: proving where an asset came from and what was done to it, with the record cryptographically bound to the asset.
- **Text and JSON provenance**: binding a credential to formats with no metadata slot. 2.5 added Appendix A.9.3 guidance for JSON, which [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta) relies on. The conformance text rubric has no JSON group yet.
- **Stripped metadata**: recovering provenance after the manifest is removed, through watermarks and fingerprints on the soft-binding algorithm list (60 entries by 2026-10-28).
- **Signer trust**: deciding who may sign, through a trust list and a conformance program.

#### Related

- Identity and consent assertions come from [Creator Assertions Working Group](#cawg).
- Signing skill folders: [Agent Skills at-rest signing threads](#agent-skills-signing).
- Its trust layer is compared with [AAIF Identity and Trust WG](#aaif-identity-trust-wg) and [SPUR Coalition](#spur-coalition).

Linked from: [Agent Skills at-rest signing threads](#agent-skills-signing), [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta), [Content Authenticity Initiative](#content-authenticity-initiative), [Creator Assertions Working Group](#cawg), [Croissant](#croissant), [EU AI Act and GPAI Code of Practice](#eu-ai-act-gpai-code), [Skills Marketplace](#skills-marketplace)

### C2PA content credentials in MCP _meta

- Id: mcp-c2pa-in-meta
- Also known as: #3225, org.c2pa/credential
- Type: proposal
- Status: Discussion closed 2026-09-25 with all spec-repo discussions; no SEP filed yet
- Website: https://github.com/modelcontextprotocol/modelcontextprotocol/discussions/3225
- Part of: [Model Context Protocol](#mcp)
- Take part: [the discussion thread](https://github.com/modelcontextprotocol/modelcontextprotocol/discussions/3225), [MCP community channels](https://modelcontextprotocol.io/community/communication)
- Tags: type/proposal, layer/provenance, stage/in-transit, venue/mcp
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#mcp-c2pa-in-meta

Carry a [C2PA](#c2pa) credential for tool results and resources in MCP `_meta` under `org.c2pa/credential`.

#### Topics

- **Provenance in transit**: keeping a credential attached as content crosses from server to client.
- **A venue**: finding an owner, since no WG or IG covers content provenance and [PR 3336](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3336) requires a WG or IG thread before a SEP PR.
- **Track choice**: deciding between an `experimental-ext-` repo under SEP-3392 and a Standards Track SEP.
- **Where the field lives**: choosing between a top-level field and `_meta`, the same question [SEP-3094 Granular Citations](#mcp-sep-3094-citations) faces.

#### Related

- A credential check could run as an interceptor validator ([MCP Interceptors WG and SEP-2624](#mcp-interceptors)).
- Lineage key overlap: [OpenLineage](#openlineage).

Linked from: [C2PA](#c2pa), [MCP Interceptors WG and SEP-2624](#mcp-interceptors), [MCP Security Interest Group](#mcp-security-ig), [Model Context Protocol](#mcp), [OpenLineage](#openlineage), [OpenTelemetry for MCP](#otel-mcp)

### CC Signals

- Id: cc-signals
- Type: proposal
- Status: GitHub draft unchanged since 2025-12; v2 to make attribution a requirement
- Website: https://github.com/creativecommons/cc-signals
- Part of: [Creative Commons](#creative-commons)
- Take part: [GitHub issues](https://github.com/creativecommons/cc-signals/issues)
- Tags: type/proposal, layer/access, layer/attribution
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#cc-signals

Preference signals for AI reuse with terms attached: Credit, Credit + Direct Contribution, Credit + Ecosystem Contribution, Credit + Open. Layered on [IETF AI Preferences Working Group](#ietf-aipref) vocabulary.

#### Topics

- **Reuse with reciprocity**: letting stewards allow AI reuse with terms attached, for those who do not want a plain opt-out.
- **Checking credit**: knowing whether credit was given, which links to [Content Telemetry](#content-telemetry) and [SEP-3094 Granular Citations](#mcp-sep-3094-citations).

Linked from: [Creative Commons](#creative-commons), [IETF AI Preferences Working Group](#ietf-aipref)

### Cloudflare Content Signals

- Id: cloudflare-content-signals
- Also known as: draft-romm-aipref-vocab-contentsignals
- Type: proposal
- Status: Individual AIPREF draft; parsed by policycheck
- Website: https://contentsignals.org
- Take part: [ai-control mailing list](https://mailarchive.ietf.org/arch/browse/ai-control/)
- Tags: type/proposal, layer/access
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#cloudflare-content-signals

Three robots.txt categories, `search`, `ai-input` and `ai-train`, proposed as [IETF AI Preferences Working Group](#ietf-aipref) vocabulary.

#### Topics

- **Use categories**: separating search indexing, use as model input and training in one signal.

Linked from: [IETF AI Preferences Working Group](#ietf-aipref), [OpenAttribution.org](#openattribution)

### Content Authenticity Initiative

- Id: content-authenticity-initiative
- Also known as: CAI, contentauth
- Type: project
- Status: Maintains c2pa-rs, c2pa-python, c2pa-js and c2patool
- Website: https://contentauthenticity.org
- Part of: [C2PA](#c2pa)
- Take part: [join CAI](https://contentauthenticity.org/join), [GitHub](https://github.com/contentauth)
- Tags: type/project, layer/provenance
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#content-authenticity-initiative

Adobe-led initiative that maintains the open-source reference implementations of [C2PA](#c2pa).

#### Topics

- **Reference SDKs**: giving developers one implementation for signing and verifying manifests, with a Rust core and Python and JS bindings.
- **Text handlers**: signing plain and structured text in practice. Structured-text and plain-text A.8 handlers merged in c2pa-rs behind an experimental flag (2026-09); HTML, XML and TTML handlers are open.

Linked from: [C2PA](#c2pa)

### Content Telemetry

- Id: content-telemetry
- Type: specification
- Status: v1.0 published 2026-09-02; signed events deferred (section 8.9)
- Website: https://github.com/SPUR-Coalition/telemetry
- Part of: [SPUR Coalition](#spur-coalition)
- Take part: [GitHub issues](https://github.com/SPUR-Coalition/telemetry/issues)
- Tags: type/specification, layer/attribution, stage/after-delivery
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#content-telemetry

Five reportable stages: `content_retrieved`, `content_grounded`, `content_cited`, `content_presented`, `content_engaged`. Manifest discovery at `/.well-known/content-telemetry.json`. `license_ref` joins it to the licensing layer ([Really Simple Licensing](#rsl), [IAB Tech Lab Content Monetization Protocols](#iab-comp)).

#### Topics

- **Usage reporting**: reporting how AI systems use content after retrieval, in five events.
- **Demanding conformance**: a manifest cannot require a conformance level from an agent (section 8.5).
- **MCP binding**: emitting `content_cited` and `content_presented` from MCP clients, the events [SEP-3094 Granular Citations](#mcp-sep-3094-citations) `citations.render` would need. telemetry-js ships an `MCPSessionTracker`.

#### Related

- Execution traces, which stop at the tool call: [OpenTelemetry for MCP](#otel-mcp).
- [COUNTER Metrics](#counter) plans to reference it in phase two.

Linked from: [AAIF Observability and Traceability WG](#aaif-observability-traceability-wg), [CC Signals](#cc-signals), [COUNTER Metrics](#counter), [Model Context Protocol](#mcp), [OpenAttribution.org](#openattribution), [OpenTelemetry for MCP](#otel-mcp), [Really Simple Licensing](#rsl), [SEP-3094 Granular Citations](#mcp-sep-3094-citations), [SPUR Coalition](#spur-coalition)

### COUNTER Metrics

- Id: counter
- Type: organization
- Status: Plans to reference Content Telemetry in phase two
- Website: https://www.countermetrics.org
- Take part: [membership](https://www.countermetrics.org/membership/)
- Tags: type/organization, layer/attribution
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#counter

Usage-metrics standard for scholarly publishers and libraries.

#### Topics

- **AI usage metrics**: counting usage when the reader is an AI system. Phase two references [Content Telemetry](#content-telemetry).

Linked from: [Content Telemetry](#content-telemetry)

### Creative Commons

- Id: creative-commons
- Also known as: CC
- Type: organization
- Status: Attribution to become a requirement in the next CC Signals iteration; RAG attribution best practices planned
- Website: https://creativecommons.org
- Take part: [contact](https://creativecommons.org/about/contact/)
- Tags: type/organization, layer/licensing, layer/access, layer/attribution
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#creative-commons

Steward of the CC licenses and CC REL machine-readable license metadata. Proposes [CC Signals](#cc-signals) and filed AIPREF drafts on exclusions and parameters ([IETF AI Preferences Working Group](#ietf-aipref)).

#### Topics

- **AI reuse beyond licensing**: giving stewards terms for AI reuse, since licensing alone cannot address it (September 2026 guidance).
- **Attribution in answers**: honoring the CC attribution requirement when content reaches a model or an agent answer.
- **RAG attribution pilots**: finding adopters for best practices later in 2026. [Open Knowledge Foundation](#okfn) with [SEP-3094 Granular Citations](#mcp-sep-3094-citations) is a candidate.

Linked from: [CC Signals](#cc-signals), [IETF AI Preferences Working Group](#ietf-aipref), [Open Knowledge Foundation](#okfn)

### Creator Assertions Working Group

- Id: cawg
- Also known as: CAWG
- Type: working-group
- Status: Moved under DIF; consent assertion added 2026-07
- Website: https://cawg.io
- Part of: [Decentralized Identity Foundation](#dif)
- Take part: [GitHub](https://github.com/creator-assertions), via DIF membership
- Tags: type/working-group, layer/provenance, layer/identity, layer/access
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#cawg

Assertion specs that ride inside [C2PA](#c2pa) manifests: identity, training and data mining, consent, metadata, endorsement, certificate policy.

#### Topics

- **Signer identity**: naming the actor behind a credential, the identity upgrade path for [Agent Skills at-rest signing threads](#agent-skills-signing).
- **Training and data mining opt-out**: letting an opt-out travel with the asset, the asset-side counterpart to [IETF AI Preferences Working Group](#ietf-aipref) and [W3C TDM Reservation Protocol Community Group](#w3c-tdmrep).
- **Consent**: recording consent as a signed assertion.

#### Related

- Hosts the IPTC Data Mining photo-metadata property ([IPTC](#iptc)).

Linked from: [Agent Skills at-rest signing threads](#agent-skills-signing), [C2PA](#c2pa), [Decentralized Identity Foundation](#dif), [EU AI Act and GPAI Code of Practice](#eu-ai-act-gpai-code), [IPTC](#iptc), [W3C ODRL](#w3c-odrl)

### Croissant

- Id: croissant
- Type: specification
- Status: 1.1 (February 2026); required for NeurIPS 2026 dataset submissions
- Website: https://github.com/mlcommons/croissant
- Take part: [GitHub issues](https://github.com/mlcommons/croissant/issues)
- Tags: type/specification, layer/provenance, layer/licensing
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#croissant

MLCommons dataset metadata format. 1.1 added machine-actionable provenance, consent and licensing fields.

#### Topics

- **Dataset provenance and consent**: recording what a training set was allowed to contain, the dataset-side counterpart to [C2PA](#c2pa) for assets.

### Data Provenance Initiative

- Id: data-provenance-initiative
- Type: project
- Status: Last code push 2025-03
- Website: https://www.dataprovenance.org
- Take part: [GitHub](https://github.com/Data-Provenance-Initiative/Data-Provenance-Collection)
- Tags: type/project, layer/provenance, layer/licensing
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#data-provenance-initiative

MIT-led audits of training-corpus licenses, with datasets on Hugging Face.

#### Topics

- **Dataset license audits**: finding out which licenses actually apply to the datasets models are trained on.

### Decentralized Identity Foundation

- Id: dif
- Also known as: DIF
- Type: organization
- Status: Hosts CAWG
- Website: https://identity.foundation
- Take part: [join DIF](https://identity.foundation/join/)
- Tags: type/organization, layer/identity
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#dif

Standards body for decentralized identifiers and verifiable credentials. Hosts [Creator Assertions Working Group](#cawg).

#### Topics

- **Decentralized identity**: interoperable identifiers and credentials that agent identity specs such as [Agent Identity and Manifest Standard](#aims) build on.

Linked from: [Creator Assertions Working Group](#cawg)

### EU AI Act and GPAI Code of Practice

- Id: eu-ai-act-gpai-code
- Also known as: Article 50
- Type: regulation
- Status: Commission compiling a list of recognized machine-readable opt-out mechanisms
- Website: https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai
- Tags: type/regulation, layer/access, layer/governance, layer/provenance
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#eu-ai-act-gpai-code

The copyright chapter of the GPAI Code of Practice has signatories honor robots.txt and make best efforts on other protocols. Article 50 sets transparency duties for AI-generated content.

#### Topics

- **Ranking opt-outs**: deciding which mechanisms count, among [IETF AI Preferences Working Group](#ietf-aipref), [W3C TDM Reservation Protocol Community Group](#w3c-tdmrep), [Really Simple Licensing](#rsl) and the [Creator Assertions Working Group](#cawg) assertion. [Open Future](#open-future) and [IPTC](#iptc) answered the consultation.
- **Transparency for generated content**: Article 50 duties, the compliance framing behind the [C2PA](#c2pa) pitch.

#### Related

- Google ties [Shared AI training robots.txt token](#aipref-training-token) support to the Code.

Linked from: [AAIF Governance, Risk and Regulatory WG](#aaif-grr-wg), [IPTC](#iptc), [Open Future](#open-future), [W3C TDM Reservation Protocol Community Group](#w3c-tdmrep)

### IAB Tech Lab Content Monetization Protocols

- Id: iab-comp
- Also known as: CoMP
- Type: specification
- Status: 1.0, public comment from 2026-03-10
- Website: https://github.com/IABTechLab/CoMP
- Take part: [GitHub issues](https://github.com/IABTechLab/CoMP/issues)
- Tags: type/specification, layer/licensing, layer/payments
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#iab-comp

An AI system describes itself and its intended use; a content owner or marketplace answers with a package scoped by content type, function and retrieval method. Grew out of the LLM Content Ingest API initiative.

#### Topics

- **Licensing offers**: standardizing how an AI system states its intended use and how a publisher or marketplace answers with a package. Enforcement is assumed to happen at the edge.

Linked from: [Content Telemetry](#content-telemetry), [x402](#x402)

### IETF

- Id: ietf
- Also known as: Internet Engineering Task Force
- Type: organization
- Status: IETF 127 San Francisco, November 2026
- Website: https://www.ietf.org
- Take part: [how to participate](https://www.ietf.org/participate/)
- Tags: type/organization, layer/access, layer/identity
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#ietf

Internet standards body. Hosts [IETF AI Preferences Working Group](#ietf-aipref) and [IETF Web Bot Auth Working Group](#ietf-web-bot-auth), and individual drafts such as [Machine Payments Protocol](#mpp).

#### Topics

- **Internet-level standards**: wire formats for AI preferences, bot identity and HTTP payment auth.

Linked from: [IETF AI Preferences Working Group](#ietf-aipref), [IETF Web Bot Auth Working Group](#ietf-web-bot-auth), [Machine Payments Protocol](#mpp)

### IETF AI Preferences Working Group

- Id: ietf-aipref
- Also known as: AIPREF
- Type: working-group
- Status: vocab-08 (2026-09-13) without consensus; attach-05 (2026-08-18); IETF 127 sessions 2026-11-16 and 11-19
- Website: https://datatracker.ietf.org/wg/aipref/about/
- Part of: [IETF](#ietf)
- Take part: [ai-control mailing list](https://mailarchive.ietf.org/arch/browse/ai-control/), [GitHub issues](https://github.com/ietf-wg-aipref/drafts/issues)
- Tags: type/working-group, layer/access, stage/after-delivery
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#ietf-aipref

Vocabulary for AI usage preferences and how they attach to content (`Content-Usage` header and robots.txt directive).

#### Topics

- **Shared vocabulary**: defining training and other AI uses so every crawler reads a preference the same way.
- **Attachment**: binding a preference to content through a `Content-Usage` header and robots.txt directive.
- **Downstream survival**: keeping preferences intact through model redistribution, caching and embeddings ([issues 245](https://github.com/ietf-wg-aipref/drafts/issues/245) and [246](https://github.com/ietf-wg-aipref/drafts/issues/246)).
- **Inference-time use**: covering grounding and agent use, which the vocabulary does not yet do. [Microsoft training and grounding preferences](#microsoft-grounding-preference) is the first vendor signal there. MCP has no field for a server to declare it.

#### Related

- Individual drafts: [Shared AI training robots.txt token](#aipref-training-token), [Cloudflare Content Signals](#cloudflare-content-signals), and the [Creative Commons](#creative-commons) exclusions and parameters drafts.
- Enforcement side: [IETF Web Bot Auth Working Group](#ietf-web-bot-auth). Layered on by [CC Signals](#cc-signals).

Linked from: [ai.robots.txt](#ai-robots-txt), [CC Signals](#cc-signals), [Cloudflare Content Signals](#cloudflare-content-signals), [Creative Commons](#creative-commons), [Creator Assertions Working Group](#cawg), [EU AI Act and GPAI Code of Practice](#eu-ai-act-gpai-code), [IETF](#ietf), [IETF Web Bot Auth Working Group](#ietf-web-bot-auth), [Microsoft training and grounding preferences](#microsoft-grounding-preference), [Model Context Protocol](#mcp), [Shared AI training robots.txt token](#aipref-training-token)

### IETF Web Bot Auth Working Group

- Id: ietf-web-bot-auth
- Also known as: webbotauth
- Type: working-group
- Status: httpsig-protocol draft; Cloudflare libraries
- Website: https://datatracker.ietf.org/wg/webbotauth/about/
- Part of: [IETF](#ietf)
- Take part: [web-bot-auth mailing list](https://mailarchive.ietf.org/arch/browse/web-bot-auth/)
- Tags: type/working-group, layer/identity, layer/access
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#ietf-web-bot-auth

Signed bot traffic with RFC 9421 HTTP message signatures and a key directory at `/.well-known/http-message-signatures-directory`.

#### Topics

- **Bot identity**: proving who a crawler or agent is. The preference ([IETF AI Preferences Working Group](#ietf-aipref)) says what is allowed, bot auth says who is asking.

#### Related

- Pairs with [Agent Identity and Manifest Standard](#aims) and the agent identifiability asks from [Wikimedia](#wikimedia).

Linked from: [AAIF Identity and Trust WG](#aaif-identity-trust-wg), [Agent Identity and Manifest Standard](#aims), [IETF](#ietf), [IETF AI Preferences Working Group](#ietf-aipref), [Wikimedia](#wikimedia)

### IPTC

- Id: iptc
- Also known as: International Press Telecommunications Council
- Type: organization
- Status: RightsML and the Data Mining property; answered the EU opt-out consultation
- Website: https://iptc.org
- Tags: type/organization, layer/licensing, layer/access
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#iptc

News-media standards body. RightsML is a profile of [W3C ODRL](#w3c-odrl). Its Data Mining photo-metadata property is maintained with [Creator Assertions Working Group](#cawg).

#### Topics

- **News rights**: expressing rights for news content in machine-readable form (RightsML).
- **Recognized opt-outs**: getting the EU to recognize workable opt-out mechanisms ([EU AI Act and GPAI Code of Practice](#eu-ai-act-gpai-code)).

Linked from: [Creator Assertions Working Group](#cawg), [EU AI Act and GPAI Code of Practice](#eu-ai-act-gpai-code), [W3C ODRL](#w3c-odrl)

### Knight-Georgetown Institute

- Id: knight-georgetown-institute
- Also known as: KGI
- Type: organization
- Website: https://kgi.georgetown.edu
- Tags: type/organization, layer/governance, layer/access
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#knight-georgetown-institute

Tech policy institute led by Alissa Cooper. Related: [Shared AI training robots.txt token](#aipref-training-token).

#### Topics

- **Crawler and training controls**: convening policy work on how AI training controls should work.

### Machine Payments Protocol

- Id: mpp
- Also known as: MPP, draft-ryan-httpauth-payment
- Type: specification
- Status: Individual IETF draft, not a WG item
- Website: https://paymentauth.org
- Tags: type/specification, layer/payments
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#mpp

Stripe and Tempo protocol: HTTP 402 with a `Payment` authentication scheme, payment-method agnostic, with an MCP transport. Filed at the [IETF](#ietf).

#### Topics

- **Method-neutral HTTP payment**: one auth scheme for any payment method, an alternative to [x402](#x402).

Linked from: [IETF](#ietf)

### MCP Financial Services Interest Group

- Id: mcp-fsig
- Also known as: FSIG
- Type: interest-group
- Status: Charter has a data lineage and citation pillar
- Part of: [Model Context Protocol](#mcp)
- Take part: [MCP community channels](https://modelcontextprotocol.io/community/communication)
- Tags: type/interest-group, venue/mcp, layer/provenance, layer/attribution
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#mcp-fsig

Financial-services interest group. Its charter also has an audit and attestation pillar, which these cards do not cover.

#### Topics

- **Regulated data lineage and citation**: tracing financial data through agents. [OpenLineage](#openlineage) and [SEP-3094 Granular Citations](#mcp-sep-3094-citations) have been presented or offered here.

Linked from: [Model Context Protocol](#mcp), [OpenLineage](#openlineage)

### MCP Interceptors WG and SEP-2624

- Id: mcp-interceptors
- Also known as: SEP-2624, experimental-ext-interceptors
- Type: working-group
- Status: SEP open; chain concept removed 2026-10-27; `signature` on ValidationResult reserved
- Website: https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2624
- Part of: [Model Context Protocol](#mcp)
- Take part: [SEP-2624 PR](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2624), [MCP community channels](https://modelcontextprotocol.io/community/communication)
- Tags: type/working-group, venue/mcp, stage/boundary
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#mcp-interceptors

Deterministic hooks in clients, servers and gateways. The place a seal or citation validator can run without a core spec change.

#### Topics

- **Checking at the boundary**: verifying provenance in a gateway or hook, since most clients will not.
- **The `signature` field**: deciding what it signs and whether it ever carries content provenance.
- **Sample validator**: a seal or citation validator for [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta) or [SEP-3094 Granular Citations](#mcp-sep-3094-citations).

Linked from: [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta), [Model Context Protocol](#mcp), [SEP-3094 Granular Citations](#mcp-sep-3094-citations)

### MCP Security Interest Group

- Id: mcp-security-ig
- Type: interest-group
- Status: Restructured as a routing forum 2026-10-31; monthly agenda-driven call
- Part of: [Model Context Protocol](#mcp)
- Take part: [MCP community channels](https://modelcontextprotocol.io/community/communication)
- Tags: type/interest-group, venue/mcp, layer/governance
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#mcp-security-ig

First stop for security topics. Routes validated work to the owning group.

#### Topics

- **Routing**: sending [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta) and [SEP-3094 Granular Citations](#mcp-sep-3094-citations) to an owning group until a content group exists.

Linked from: [Model Context Protocol](#mcp)

### Microsoft Publisher Content Marketplace

- Id: microsoft-publisher-content-marketplace
- Type: project
- Status: Launched 2026-02-03 with Copilot as first buyer; no public spec
- Tags: type/project, layer/licensing, layer/payments
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#microsoft-publisher-content-marketplace

Voluntary marketplace with publisher-set terms and pricing and usage reporting. Reported to support [Really Simple Licensing](#rsl).

#### Topics

- **Paying publishers**: compensating publishers for content used in AI answers, with usage reporting.

Linked from: [Really Simple Licensing](#rsl)

### Microsoft training and grounding preferences

- Id: microsoft-grounding-preference
- Also known as: ai-grounding:disallow
- Type: proposal
- Status: Effective 2027-02-01
- Website: https://blogs.bing.com/search/2026/10/your-content-your-choice-clearer-preferences-for-training-and-grounding/
- Tags: type/proposal, layer/access, stage/after-delivery
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#microsoft-grounding-preference

Training via [Shared AI training robots.txt token](#aipref-training-token) or a page-level `ai-training:disallow`, plus a separate page-level grounding preference (`ai-grounding:disallow`) with no robots.txt form. Replaces `NoArchive` and `NoCache`.

#### Topics

- **Inference-time preferences**: letting a page opt out of grounding, the first vendor signal for a use [IETF AI Preferences Working Group](#ietf-aipref) does not yet cover.

#### Related

- Microsoft says the preferences do not establish licensing or payment.

Linked from: [IETF AI Preferences Working Group](#ietf-aipref)

### Model Context Protocol

- Id: mcp
- Also known as: MCP
- Type: specification
- Status: Next spec release moved to 2027-03-30 (SEP-3398); WG-first rule for SEPs
- Website: https://modelcontextprotocol.io
- Part of: [Agentic AI Foundation](#aaif)
- Take part: [MCP community channels](https://modelcontextprotocol.io/community/communication), [GitHub discussions](https://github.com/modelcontextprotocol/modelcontextprotocol/discussions)
- Tags: type/specification, venue/mcp, layer/provenance, layer/attribution
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#mcp

The protocol between agents and the tools, resources, prompts and skills they read. MCP is the hop where content provenance can be carried or lost.

#### Topics

- **Content provenance ownership**: no WG or IG owns content provenance or attribution.
- **Usage declarations**: no field lets a server declare how its content may be used for training or grounding ([IETF AI Preferences Working Group](#ietf-aipref)).
- **Credit reporting**: nothing reports display or credit past the last hop ([Content Telemetry](#content-telemetry)).

#### Related

- Built-in tracing and metrics in the SDKs: [OpenTelemetry for MCP](#otel-mcp).
- Threads: [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta), [SEP-3094 Granular Citations](#mcp-sep-3094-citations), [SEP-2640 Skills Extension](#mcp-skills-extension), [MCP Interceptors WG and SEP-2624](#mcp-interceptors).
- Groups: [MCP Financial Services Interest Group](#mcp-fsig), [MCP Security Interest Group](#mcp-security-ig).

Linked from: [Agentic AI Foundation](#aaif), [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta), [MCP Financial Services Interest Group](#mcp-fsig), [MCP Interceptors WG and SEP-2624](#mcp-interceptors), [MCP Security Interest Group](#mcp-security-ig), [OpenTelemetry for MCP](#otel-mcp), [SEP-2640 Skills Extension](#mcp-skills-extension), [SEP-3094 Granular Citations](#mcp-sep-3094-citations)

### Open Future

- Id: open-future
- Type: organization
- Website: https://openfuture.eu
- Tags: type/organization, layer/governance, layer/access
- Updated: 2026-11-03
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
- Take part: [okfn/mcp-server on GitHub](https://github.com/okfn/mcp-server)
- Tags: type/organization, layer/attribution, stage/in-transit, venue/mcp
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#okfn

CKAN maintainers. MCP Labs runs chat over official datasets with every answer linked to its source.

#### Topics

- **Attributable open-data answers**: linking every answer to its dataset, which open licenses can make a legal requirement.
- **Interim convention to standard**: mapping its required `structuredContent.sources` list onto [SEP-3094 Granular Citations](#mcp-sep-3094-citations).

#### Related

- Plans to move charts to MCP Apps and citations to SEP-3094. [Wikimedia](#wikimedia) contributors review the same SEP.
- A natural pilot for the [Creative Commons](#creative-commons) RAG attribution best practices.

Linked from: [Creative Commons](#creative-commons), [SEP-3094 Granular Citations](#mcp-sep-3094-citations)

### OpenAttribution.org

- Id: openattribution
- Type: organization
- Status: SDKs, edge worker, policycheck, commerce profile, AIMS draft
- Website: https://openattribution.org
- Take part: [GitHub](https://github.com/openattribution-org)
- Tags: type/organization, layer/attribution, layer/identity, layer/payments
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#openattribution

Not-for-profit that maintains the [Content Telemetry](#content-telemetry) SDKs, the Cloudflare edge worker, the policycheck scanner, the commerce profile and [Agent Identity and Manifest Standard](#aims).

#### Topics

- **Multi-source credit**: crediting every source behind an agent answer when a user clicks one link. The commerce profile's `ctx_token` resolves to a click manifest, with bindings for [Agentic Commerce Protocol](#acp) and [Universal Commerce Protocol](#ucp).
- **Signal fragmentation**: mapping the competing access signals. policycheck scans robots.txt, [Really Simple Licensing](#rsl), [Cloudflare Content Signals](#cloudflare-content-signals) and [W3C TDM Reservation Protocol Community Group](#w3c-tdmrep) at once.

Linked from: [Agent Identity and Manifest Standard](#aims), [Agentic Commerce Protocol](#acp), [Skills Marketplace](#skills-marketplace), [SPUR Coalition](#spur-coalition), [Universal Commerce Protocol](#ucp)

### OpenLineage

- Id: openlineage
- Type: project
- Status: RFC 4484 open (updated 2026-10-07); MCP RFC in preparation by BearingNode
- Website: https://openlineage.io
- Take part: [GitHub issues](https://github.com/OpenLineage/OpenLineage/issues)
- Tags: type/project, layer/provenance, stage/in-transit
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#openlineage

Open standard for data lineage events. [RFC 4484](https://github.com/OpenLineage/OpenLineage/issues/4484) and BearingNode's planned MCP `_meta` lineage key carry lineage identity across the tool-call boundary.

#### Topics

- **Lineage across tool calls**: tracing data handed to an agent back to its source.

#### Related

- Overlaps [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta). Introduced at [MCP Financial Services Interest Group](#mcp-fsig) on 2026-09-05.

Linked from: [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta), [MCP Financial Services Interest Group](#mcp-fsig), [OpenTelemetry for MCP](#otel-mcp)

### OpenTelemetry for MCP

- Id: otel-mcp
- Also known as: MCP semantic conventions, SEP-414
- Type: specification
- Status: Conventions in Development; built into the Python SDK since v2.0.0; merged for the TypeScript SDK 2026-10-31, not yet released
- Website: https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/mcp.md
- Part of: [Model Context Protocol](#mcp)
- Take part: [semantic-conventions-genai issues](https://github.com/open-telemetry/semantic-conventions-genai/issues), [MCP community channels](https://modelcontextprotocol.io/community/communication)
- Tags: type/specification, venue/mcp, layer/provenance, stage/in-transit
- Updated: 2026-11-08
- Explorer: https://www.olahungerford.com/content-provenance/#otel-mcp

OpenTelemetry semantic conventions for MCP spans and metrics, and the SDKs that emit them. Spans are named `{mcp.method.name} {target}`, for example `tools/call get-weather`, with `mcp.session.id`, `mcp.protocol.version` and `jsonrpc.request.id`. Trace context travels in `params._meta` under three keys that [SEP-414](https://modelcontextprotocol.io/seps/414-request-meta) proposed in April 2025 and the [2026-07-28 spec reserves](https://modelcontextprotocol.io/specification/2026-07-28/basic/index#_meta): `traceparent`, `tracestate` and `baggage`.

#### Topics

- **Metadata that already travels with a tool call**: a trace id is the one piece of metadata MCP carries end to end today, client to server and back, in the same `_meta` slot that [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta) proposes for content credentials. The propagation rules are a precedent for any other credential that has to survive the hop.
- **What a span does not say**: the conventions make tool arguments and results opt-in attributes marked as sensitive (`gen_ai.tool.call.arguments`, `gen_ai.tool.call.result`), so a trace shows which tool ran, when and for how long, and nothing about the content that came back or where it came from. That gap is where [Content Telemetry](#content-telemetry) and the [AAIF Observability and Traceability WG](#aaif-observability-traceability-wg) sit.
- **SDK coverage**: the Python SDK has emitted client and server spans since v2.0.0 ([#2381](https://github.com/modelcontextprotocol/python-sdk/pull/2381), 2026-03-31, middleware form in [#2941](https://github.com/modelcontextprotocol/python-sdk/pull/2941)), with no metrics. The TypeScript SDK adds spans and `mcp.client.operation.duration` and `mcp.server.operation.duration` histograms, on by default once an OpenTelemetry SDK is registered ([#3115](https://github.com/modelcontextprotocol/typescript-sdk/pull/3115), merged 2026-10-31, not in a release as of 2026-11-08). The C# SDK has an `Experimental.ModelContextProtocol` activity source. The Go and Java SDKs have no built-in instrumentation.

#### Related

- [SEP-2028](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2028), open, would forward `_meta` entries to HTTP headers for distributed tracing. [SEP-2448](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2448), server execution telemetry, closed without merging in March 2026.
- Lineage after the tool call, rather than the call itself: [OpenLineage](#openlineage).

Linked from: [AAIF Observability and Traceability WG](#aaif-observability-traceability-wg), [Content Telemetry](#content-telemetry), [Model Context Protocol](#mcp)

### Project NANDA

- Id: project-nanda
- Type: project
- Website: https://nanda.media.mit.edu
- Take part: [GitHub](https://github.com/projnanda)
- Tags: type/project, layer/identity
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#project-nanda

MIT-originated agent registry and trust-manifest work, discussed in [AAIF Security and Privacy WG](#aaif-security-privacy-wg).

#### Topics

- **Agent trust manifests**: trust metadata for agents in an open registry.

Linked from: [AAIF Security and Privacy WG](#aaif-security-privacy-wg)

### Really Simple Licensing

- Id: rsl
- Also known as: RSL, RSL Collective
- Type: specification
- Status: RSL 1.0 published 2025-12-10
- Website: https://rslstandard.org
- Take part: [GitHub](https://github.com/rslstandard)
- Tags: type/specification, layer/licensing, layer/payments
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#rsl

XML vocabulary for usage and compensation terms (per-crawl, per-inference, subscription, attribution-only), discovered from robots.txt, RSS, HTTP headers or HTML. Includes a Crawler Authorization Protocol and an Open License Protocol on OAuth 2.0. The RSL Collective is the collecting society behind it.

#### Topics

- **Machine-readable terms**: publishing usage terms and prices that crawlers and AI systems can read and accept.
- **Adoption**: getting model developers to honor it on the open web. None has committed; [Microsoft Publisher Content Marketplace](#microsoft-publisher-content-marketplace) is reported to support it.
- **Enforcement**: supplying the lever [Content Telemetry](#content-telemetry) manifests lack, through a SPUR profile binding drafted for the RSL WG.

Linked from: [Content Telemetry](#content-telemetry), [EU AI Act and GPAI Code of Practice](#eu-ai-act-gpai-code), [Microsoft Publisher Content Marketplace](#microsoft-publisher-content-marketplace), [OpenAttribution.org](#openattribution), [W3C ODRL](#w3c-odrl), [x402](#x402)

### SEP-2640 Skills Extension

- Id: mcp-skills-extension
- Also known as: SEP-2640, ext-skills
- Type: specification
- Status: Final 2026-09-13; Beta under SEP-3392
- Website: https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2640
- Part of: [Model Context Protocol](#mcp)
- Take part: [SEP-2640 PR](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2640), [MCP community channels](https://modelcontextprotocol.io/community/communication)
- Tags: type/specification, venue/mcp, stage/at-rest, topic/skills
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#mcp-skills-extension

Serves [Agent Skills](#agent-skills) over MCP, with digests and a `_meta` hook for intermediaries.

#### Topics

- **Skills over MCP**: distributing skills to clients with digests and a `_meta` hook for intermediaries.

#### Related

- At-rest signing is not on the Skills WG agenda ([Agent Skills at-rest signing threads](#agent-skills-signing)).

Linked from: [Agent Skills at-rest signing threads](#agent-skills-signing), [Model Context Protocol](#mcp)

### SEP-3094 Granular Citations

- Id: mcp-sep-3094-citations
- Also known as: SEP-3094, #3094
- Type: proposal
- Status: Open, no sponsor; revised 2026-09-04; an implementation PR open from Perplexity; dormancy clock to about 2027-01-15
- Website: https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3094
- Part of: [Model Context Protocol](#mcp)
- Take part: [SEP-3094 PR](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3094), [MCP community channels](https://modelcontextprotocol.io/community/communication)
- Tags: type/proposal, venue/mcp, layer/attribution, stage/in-transit, stage/after-delivery
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#mcp-sep-3094-citations

Citations on tool results bound by CommonMark links in the text, each a flat schema.org CreativeWork, granularity via URL fragments, integrity deferred. A `citations.render` client capability.

#### Topics

- **Citations in transit**: keeping sources attached from tool result to the answer a user sees.
- **Sponsorship and venue**: finding a sponsor and a WG or IG discussion.
- **Field placement**: choosing a top-level field or `_meta` processed by [MCP Interceptors WG and SEP-2624](#mcp-interceptors).
- **Reporting**: mapping to [Open Knowledge Foundation](#okfn) `sources` and [Content Telemetry](#content-telemetry) events.

#### Related

- Reviewers include [Open Knowledge Foundation](#okfn) and [Wikimedia](#wikimedia) contributors.

Linked from: [C2PA content credentials in MCP _meta](#mcp-c2pa-in-meta), [CC Signals](#cc-signals), [Content Telemetry](#content-telemetry), [Creative Commons](#creative-commons), [MCP Financial Services Interest Group](#mcp-fsig), [MCP Interceptors WG and SEP-2624](#mcp-interceptors), [MCP Security Interest Group](#mcp-security-ig), [Model Context Protocol](#mcp), [Open Knowledge Foundation](#okfn), [Wikimedia](#wikimedia)

### Shared AI training robots.txt token

- Id: aipref-training-token
- Also known as: draft-kelley-aipref-training-preference-signal, __usage_ai-training
- Type: proposal
- Status: Individual draft posted 2026-10-30; Google, OpenAI, Microsoft and Anthropic committed to honor it
- Website: https://datatracker.ietf.org/doc/draft-kelley-aipref-training-preference-signal/
- Part of: [IETF AI Preferences Working Group](#ietf-aipref)
- Take part: [ai-control mailing list](https://mailarchive.ietf.org/arch/browse/ai-control/)
- Tags: type/proposal, layer/access
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#aipref-training-token

A robots.txt group whose `User-Agent` is the cross-vendor token `__usage_ai-training`, using ordinary `Allow` and `Disallow` rules. No new syntax. "AI Training" takes its definition from the [IETF AI Preferences Working Group](#ietf-aipref) vocab draft.

#### Topics

- **One training opt-out**: a single signal every major crawler operator honors, with no new robots.txt grammar.
- **Compliance**: getting honored signals to change outputs. Prompting can still surface disallowed content.

#### Related

- An alternative to the attach draft's `Content-Usage` directive in [IETF AI Preferences Working Group](#ietf-aipref).

Linked from: [EU AI Act and GPAI Code of Practice](#eu-ai-act-gpai-code), [IETF AI Preferences Working Group](#ietf-aipref), [Knight-Georgetown Institute](#knight-georgetown-institute), [Microsoft training and grounding preferences](#microsoft-grounding-preference)

### Skills Marketplace

- Id: skills-marketplace
- Also known as: skill-cards, skillproof
- Type: project
- Status: Initial testing with O'Reilly authors
- Website: https://github.com/SrulyRosenblat/skill-cards
- Part of: [AI Disclosures Project](#ai-disclosures-project)
- Take part: [GitHub issues](https://github.com/SrulyRosenblat/skill-cards/issues)
- Tags: type/project, layer/licensing, layer/attribution, layer/payments, topic/skills
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#skills-marketplace

Monetizable, rights-protected, interoperable skills, with skillproof benchmarks.

#### Topics

- **Paying skill authors**: choosing a payout basis for skills, measured contribution or invocation count.
- **Multi-source skills**: crediting every source behind a skill ([OpenAttribution.org](#openattribution), [C2PA](#c2pa)).
- **Missing metadata**: no skill registry frontmatter carries author, license or source ([Agent Skills at-rest signing threads](#agent-skills-signing)).

Linked from: [Agent Skills](#agent-skills), [AI Disclosures Project](#ai-disclosures-project)

### Spawning

- Id: spawning
- Also known as: datadiligence
- Type: organization
- Status: datadiligence dormant since 2024-10
- Website: https://spawning.ai
- Take part: [GitHub](https://github.com/Spawning-Inc/datadiligence)
- Tags: type/organization, layer/access
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#spawning

Maker of datadiligence, a Python library that checks works against known opt-out methods inside a training pipeline.

#### Topics

- **Pipeline-side compliance**: checking works against known opt-outs inside a training pipeline. No other open-source implementation of this step appears on these cards.

### SPUR Coalition

- Id: spur-coalition
- Type: organization
- Status: Content Telemetry v1.0 published 2026-09-02
- Website: https://www.spurcoalition.org
- Take part: [GitHub](https://github.com/SPUR-Coalition)
- Tags: type/organization, layer/attribution, stage/after-delivery, stage/trust
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#spur-coalition

Publisher coalition founded by the BBC, FT, Guardian, Sky News and Telegraph, with the AP as first US member. Stewards [Content Telemetry](#content-telemetry) and the publisher accreditation profile and conformance mark. Sister body [OpenAttribution.org](#openattribution) maintains SDKs and profiles.

#### Topics

- **Visibility past retrieval**: letting publishers see grounding, citation, display and engagement, not only the fetch.
- **Verifying reports**: checking self-reported events through sampled audits or canary content. Signed events are deferred to a later version of the spec (section 8.9).
- **Publisher accreditation**: a conformance mark for agents that report at the required level.

Linked from: [C2PA](#c2pa), [Content Telemetry](#content-telemetry)

### Universal Commerce Protocol

- Id: ucp
- Also known as: UCP
- Type: specification
- Status: Google-led consortium, no foundation home
- Website: https://github.com/Universal-Commerce-Protocol/ucp
- Take part: [GitHub issues](https://github.com/Universal-Commerce-Protocol/ucp/issues)
- Tags: type/specification, layer/payments
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#ucp

Merchant commerce protocol. [OpenAttribution.org](#openattribution) has an `org.openattribution.telemetry` vendor extension for it.

#### Topics

- **Cross-merchant commerce**: agent commerce across merchants, compared with [Agentic Commerce Protocol](#acp) in [AAIF Agentic Commerce WG](#aaif-agentic-commerce-wg).

Linked from: [AAIF Agentic Commerce WG](#aaif-agentic-commerce-wg), [OpenAttribution.org](#openattribution)

### W3C

- Id: w3c
- Also known as: World Wide Web Consortium
- Type: organization
- Website: https://www.w3.org
- Take part: [how to participate](https://www.w3.org/participate/)
- Tags: type/organization, layer/licensing, layer/access
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#w3c

Web standards body. Hosts [W3C ODRL](#w3c-odrl) and [W3C TDM Reservation Protocol Community Group](#w3c-tdmrep), and the DID and Verifiable Credentials specs [Agent Identity and Manifest Standard](#aims) uses.

#### Topics

- **Web vocabularies**: rights and identity standards for the web.

Linked from: [W3C ODRL](#w3c-odrl), [W3C TDM Reservation Protocol Community Group](#w3c-tdmrep)

### W3C ODRL

- Id: w3c-odrl
- Also known as: Open Digital Rights Language
- Type: community-group
- Status: 2.2 is a W3C Recommendation; a W3C WG for 3.0 is being chartered; ai-vocab draft
- Website: https://www.w3.org/community/odrl/
- Part of: [W3C](#w3c)
- Take part: [join the community group](https://www.w3.org/community/odrl/join)
- Tags: type/community-group, layer/licensing
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#w3c-odrl

Policy language for permissions, prohibitions and duties on content.

#### Topics

- **Policy language**: one model for permissions, prohibitions and duties that [Really Simple Licensing](#rsl), IPTC RightsML ([IPTC](#iptc)), [Creator Assertions Working Group](#cawg) and [W3C TDM Reservation Protocol Community Group](#w3c-tdmrep) all point at.
- **AI actions**: adding AI-specific actions to the vocabulary (the `ai-vocab` draft).

Linked from: [IPTC](#iptc), [W3C](#w3c), [W3C TDM Reservation Protocol Community Group](#w3c-tdmrep)

### W3C TDM Reservation Protocol Community Group

- Id: w3c-tdmrep
- Also known as: TDMRep
- Type: community-group
- Status: CG draft; last push 2026-09
- Website: https://www.w3.org/community/tdmrep/
- Part of: [W3C](#w3c)
- Take part: [join the community group](https://www.w3.org/community/tdmrep/join)
- Tags: type/community-group, layer/access, layer/licensing
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#w3c-tdmrep

The EU DSM Article 4 text and data mining opt-out: `tdm-reservation` and `tdm-policy` by HTTP header, HTML meta or `/.well-known/tdmrep.json`.

#### Topics

- **EU TDM opt-out**: a machine-readable text and data mining reservation that satisfies EU DSM Article 4.

#### Related

- Being weighed for the EU recognized opt-out list ([EU AI Act and GPAI Code of Practice](#eu-ai-act-gpai-code)). Points at [W3C ODRL](#w3c-odrl) for detailed policy.

Linked from: [Creator Assertions Working Group](#cawg), [EU AI Act and GPAI Code of Practice](#eu-ai-act-gpai-code), [OpenAttribution.org](#openattribution), [W3C](#w3c), [W3C ODRL](#w3c-odrl)

### Wikimedia

- Id: wikimedia
- Also known as: Wikimedia Foundation, Wikimedia Enterprise, WikiCite
- Type: organization
- Status: Published investigation of OpenAI-run agents 2026-10-05; Wikipedians reviewing SEP-3094
- Website: https://wikimediafoundation.org
- Tags: type/organization, layer/attribution, layer/identity
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#wikimedia

Movement behind Wikipedia and Wikidata. Wikimedia Enterprise supplies Microsoft, Mistral and Perplexity, and volunteer contributors review citation and agent-identity proposals.

#### Topics

- **Identifiable agents**: knowing which agents are reading the projects ([IETF Web Bot Auth Working Group](#ietf-web-bot-auth), [Agent Identity and Manifest Standard](#aims)).
- **Attribution for reuse**: meeting attribution requirements in agent answers. A WikiCite contributor listed six functions of citation on [SEP-3094 Granular Citations](#mcp-sep-3094-citations), including provenance chains to primary sources.
- **A seat at the table**: [Open Future](#open-future) argued in December 2025 that Wikimedia needs one at [Agentic AI Foundation](#aaif).

Linked from: [IETF Web Bot Auth Working Group](#ietf-web-bot-auth), [Open Future](#open-future), [Open Knowledge Foundation](#okfn), [SEP-3094 Granular Citations](#mcp-sep-3094-citations)

### x402

- Id: x402
- Also known as: x402 Foundation
- Type: specification
- Status: x402 Foundation (Linux Foundation) operational 2026-07-14; v2 spec
- Website: https://x402.org
- Take part: [GitHub](https://github.com/coinbase/x402)
- Tags: type/specification, layer/payments
- Updated: 2026-11-03
- Explorer: https://www.olahungerford.com/content-provenance/#x402

HTTP 402 payments in headers, with schemes `exact`, `upto`, `auth-capture` and `batch-settlement` and transports for HTTP, MCP and A2A. Successor in spirit to L402 (Lightning). Sibling of [Agentic AI Foundation](#aaif) under the Linux Foundation, not part of it.

#### Topics

- **Machine payment**: paying for a request without accounts or API keys, the rail a licensing term ([Really Simple Licensing](#rsl), [IAB Tech Lab Content Monetization Protocols](#iab-comp)) would settle on.
- **Delegated spending**: authorization for agents spending on someone's behalf, which lives elsewhere ([Agent Payments Protocol](#ap2)).

#### Related

- Compared with other commerce specs in [AAIF Agentic Commerce WG](#aaif-agentic-commerce-wg).

Linked from: [AAIF Agentic Commerce WG](#aaif-agentic-commerce-wg), [Agent Payments Protocol](#ap2), [Machine Payments Protocol](#mpp)
