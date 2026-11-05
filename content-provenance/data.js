window.CARDS = [
 {
  "id": "aaif-agentic-commerce-wg",
  "name": "AAIF Agentic Commerce WG",
  "aliases": [],
  "type": "working-group",
  "website": "https://github.com/aaif/wg-agentic-commerce",
  "part_of": "aaif",
  "status": "Chartered 2026-05-15; catalogs specs rather than authoring one",
  "updated": "2026-11-03",
  "tags": [
   "type/working-group",
   "layer/payments"
  ],
  "summary": "Discovery and negotiation, checkout, delegated authority, agentic payments, fraud signals, post-purchase.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Commerce spec harmony**: comparing and aligning [[acp]], [[ucp]], [[ap2]] and [[x402]]."
   }
  ],
  "links": [
   "acp",
   "ucp",
   "ap2",
   "x402",
   "aaif"
  ],
  "backlinks": [
   "aaif",
   "ucp",
   "x402"
  ]
 },
 {
  "id": "aaif-grr-wg",
  "name": "AAIF Governance, Risk and Regulatory WG",
  "aliases": [
   "GRR"
  ],
  "type": "working-group",
  "website": "https://github.com/aaif/wg-governance-risk-and-regulatory",
  "part_of": "aaif",
  "status": "",
  "updated": "2026-11-03",
  "tags": [
   "type/working-group",
   "layer/governance"
  ],
  "summary": "Bridge between AI policy and the technical projects.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Evidence record shape**: converging record formats for logging and evidence (#9).\n- **Policy mapping**: mapping [[eu-ai-act-gpai-code]] duties onto the projects."
   }
  ],
  "links": [
   "eu-ai-act-gpai-code",
   "aaif"
  ],
  "backlinks": [
   "aaif"
  ]
 },
 {
  "id": "aaif-identity-trust-wg",
  "name": "AAIF Identity and Trust WG",
  "aliases": [],
  "type": "working-group",
  "website": "https://github.com/aaif/wg-identity-and-trust",
  "part_of": "aaif",
  "status": "Chartered 2026-05-12",
  "updated": "2026-11-03",
  "tags": [
   "type/working-group",
   "layer/identity",
   "station/trust"
  ],
  "summary": "Charter: agent identity, authentication and provenance, delegation chains, consent, cross-organization trust, discovery metadata.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Evidence strength**: labels for how strong a trust claim is, a model to borrow for content trust.\n- **Bound knowledge**: a digest-bound knowledge link set from a server card."
   },
   {
    "title": "Related",
    "text": "- Overlaps [[aims]] and [[ietf-web-bot-auth]]."
   }
  ],
  "links": [
   "aims",
   "ietf-web-bot-auth",
   "aaif"
  ],
  "backlinks": [
   "aims",
   "aaif",
   "c2pa"
  ]
 },
 {
  "id": "aaif-observability-traceability-wg",
  "name": "AAIF Observability and Traceability WG",
  "aliases": [],
  "type": "working-group",
  "website": "https://github.com/aaif/wg-observability-and-traceability",
  "part_of": "aaif",
  "status": "Nine-task Agent Behavior Trace Model plan; provenance initiative lead named 2026-09-02; OTel cross-domain provenance proposal 2026-10-28",
  "updated": "2026-11-03",
  "tags": [
   "type/working-group",
   "layer/provenance",
   "layer/attribution"
  ],
  "summary": "Agent-level observability above OTel GenAI telemetry.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Evidence records**: tamper-evident records of agent behavior (Evidence Record Spec proposal, #37).\n- **Responsibility chains**: attributing which agent or human initiated, delegated or approved an action.\n- **Liaisons**: a roster (#11) with no content-side member. Cross-reference [[content-telemetry]]."
   }
  ],
  "links": [
   "content-telemetry",
   "aaif"
  ],
  "backlinks": [
   "aaif"
  ]
 },
 {
  "id": "aaif-security-privacy-wg",
  "name": "AAIF Security and Privacy WG",
  "aliases": [],
  "type": "working-group",
  "website": "https://github.com/aaif/wg-security-and-privacy",
  "part_of": "aaif",
  "status": "",
  "updated": "2026-11-03",
  "tags": [
   "type/working-group",
   "layer/governance",
   "station/trust",
   "topic/skills"
  ],
  "summary": "Draft best-practices guide.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Skill verification tiers**: a four-tier ladder in which tier 2 verifies author attribution and tier 3 pins version and hash ([[agent-skills-signing]]).\n- **Agent trust manifests**: from [[project-nanda]]."
   }
  ],
  "links": [
   "agent-skills-signing",
   "project-nanda",
   "aaif"
  ],
  "backlinks": [
   "agent-skills-signing",
   "aaif",
   "project-nanda"
  ]
 },
 {
  "id": "aims",
  "name": "Agent Identity and Manifest Standard",
  "aliases": [
   "AIMS"
  ],
  "type": "specification",
  "website": "https://github.com/openattribution-org/aims",
  "part_of": "openattribution",
  "status": "v0.1 draft",
  "updated": "2026-11-03",
  "tags": [
   "type/specification",
   "layer/identity"
  ],
  "summary": "DID-based agent identity, proof of what content the agent is licensed to access, and a link from identity to the telemetry endpoint.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Agent identity and entitlements**: who the agent is and what content it is licensed to access. [[ietf-web-bot-auth]] proves it on the wire."
   },
   {
    "title": "Related",
    "text": "- Overlaps [[aaif-identity-trust-wg]]."
   }
  ],
  "links": [
   "ietf-web-bot-auth",
   "aaif-identity-trust-wg",
   "openattribution"
  ],
  "backlinks": [
   "aaif-identity-trust-wg",
   "dif",
   "ietf-web-bot-auth",
   "openattribution",
   "w3c",
   "wikimedia"
  ]
 },
 {
  "id": "ap2",
  "name": "Agent Payments Protocol",
  "aliases": [
   "AP2"
  ],
  "type": "specification",
  "website": "https://ap2-protocol.org",
  "part_of": "",
  "status": "Donated by Google to the FIDO Alliance",
  "updated": "2026-11-03",
  "tags": [
   "type/specification",
   "layer/payments",
   "layer/identity"
  ],
  "summary": "Mandates that prove a human authorized an agent purchase.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Delegated purchase authority**: proving a human authorized an agent purchase, with [[x402]] as a settlement method underneath."
   }
  ],
  "links": [
   "x402"
  ],
  "backlinks": [
   "aaif-agentic-commerce-wg",
   "x402"
  ]
 },
 {
  "id": "agent-skills",
  "name": "Agent Skills",
  "aliases": [
   "agentskills",
   "SKILL.md"
  ],
  "type": "specification",
  "website": "https://agentskills.io",
  "part_of": "aaif",
  "status": "Joined AAIF 2026-10-22",
  "updated": "2026-11-03",
  "tags": [
   "type/specification",
   "topic/skills",
   "station/at-rest"
  ],
  "summary": "The SKILL.md format for packaging instructions and files for agents.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Skill provenance**: signing, lineage and authorship of skills ([[agent-skills-signing]]).\n- **Skill rights and payment**: paying authors and respecting licenses ([[skills-marketplace]])."
   }
  ],
  "links": [
   "agent-skills-signing",
   "skills-marketplace",
   "aaif"
  ],
  "backlinks": [
   "agent-skills-signing",
   "aaif",
   "mcp-skills-extension"
  ]
 },
 {
  "id": "agent-skills-signing",
  "name": "Agent Skills at-rest signing threads",
  "aliases": [
   "#252",
   "#393",
   "#588",
   "#564",
   "#620",
   "#643"
  ],
  "type": "proposal",
  "website": "https://github.com/agentskills/agentskills/discussions/393",
  "part_of": "agent-skills",
  "status": "Six open threads, one maintainer, no convergence",
  "updated": "2026-11-03",
  "tags": [
   "type/proposal",
   "layer/provenance",
   "station/at-rest",
   "topic/skills"
  ],
  "summary": "Proposals for signing, lockfiles and lineage of SKILL.md folders: signature in frontmatter (#252), SKILL.sig sidecar (#393), skills-lock.json (#588), `metadata.source` (#564), `metadata.derived-from` (#620), skill-evidence documents keyed by digest (#643).",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Copy sprawl**: tracking copies, which outnumber originals. One dataset has half of SKILL.md files as verbatim copies, and only 11.1% of fixes reach every copy.\n- **Field ownership**: separating identity (digest), lineage (source, derived-from), authorship (signature) and evidence (keyed by digest) so each thread owns one field.\n- **Retraction and signer identity**: withdrawing a bad skill and naming who signed it ([[cawg]]). No thread covers either."
   },
   {
    "title": "Related",
    "text": "- Digests from [[mcp-skills-extension]], catalog-side signing in [[ai-catalog]], sidecars from [[c2pa]], verification tiers in [[aaif-security-privacy-wg]]."
   }
  ],
  "links": [
   "cawg",
   "mcp-skills-extension",
   "ai-catalog",
   "c2pa",
   "aaif-security-privacy-wg",
   "agent-skills"
  ],
  "backlinks": [
   "aaif-security-privacy-wg",
   "agent-skills",
   "ai-catalog",
   "c2pa",
   "cawg",
   "mcp-skills-extension",
   "skills-marketplace"
  ]
 },
 {
  "id": "aaif",
  "name": "Agentic AI Foundation",
  "aliases": [
   "AAIF"
  ],
  "type": "organization",
  "website": "https://aaif.io",
  "part_of": "",
  "status": "Linux Foundation; ten hosted projects in its first year",
  "updated": "2026-11-03",
  "tags": [
   "type/organization",
   "layer/governance"
  ],
  "summary": "Hosts [[mcp]], goose, AGENTS.md, agentgateway, A2A, [[agent-skills]] and others.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Caller-side provenance**: its working groups cover who acted: [[aaif-observability-traceability-wg]], [[aaif-identity-trust-wg]], [[aaif-security-privacy-wg]], [[aaif-grr-wg]], [[aaif-agentic-commerce-wg]].\n- **Content-side representation**: content-side groups (publishers, CC, Wikimedia) are not on the WG liaison rosters."
   }
  ],
  "links": [
   "mcp",
   "agent-skills",
   "aaif-observability-traceability-wg",
   "aaif-identity-trust-wg",
   "aaif-security-privacy-wg",
   "aaif-grr-wg",
   "aaif-agentic-commerce-wg"
  ],
  "backlinks": [
   "aaif-agentic-commerce-wg",
   "aaif-grr-wg",
   "aaif-identity-trust-wg",
   "aaif-observability-traceability-wg",
   "aaif-security-privacy-wg",
   "agent-skills",
   "mcp",
   "open-future",
   "wikimedia",
   "x402"
  ]
 },
 {
  "id": "acp",
  "name": "Agentic Commerce Protocol",
  "aliases": [
   "ACP"
  ],
  "type": "specification",
  "website": "https://github.com/agentic-commerce-protocol/agentic-commerce-protocol",
  "part_of": "",
  "status": "OpenAI and Stripe",
  "updated": "2026-11-03",
  "tags": [
   "type/specification",
   "layer/payments"
  ],
  "summary": "Merchant checkout for agents. [[openattribution]] has a `content_attribution` extension for it.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Agent checkout**: letting agents complete merchant checkout.\n- **Credit for purchases**: crediting the content that led to a purchase, through the [[openattribution]] extension."
   }
  ],
  "links": [
   "openattribution"
  ],
  "backlinks": [
   "aaif-agentic-commerce-wg",
   "openattribution",
   "ucp"
  ]
 },
 {
  "id": "ai-catalog",
  "name": "AI Catalog",
  "aliases": [
   "Agent-Card"
  ],
  "type": "specification",
  "website": "https://github.com/Agent-Card/ai-catalog",
  "part_of": "",
  "status": "Identity-keyed trust manifests merged (PR #117, 2026-10-28)",
  "updated": "2026-11-03",
  "tags": [
   "type/specification",
   "layer/provenance",
   "layer/identity",
   "station/at-rest"
  ],
  "summary": "Catalog format for discovering agents, MCP servers and skills.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Discovery**: finding agents, servers and skills across vendors.\n- **Catalog trust**: signing catalog entries with identity-keyed trust manifests, a path parallel to [[agent-skills-signing]]."
   }
  ],
  "links": [
   "agent-skills-signing"
  ],
  "backlinks": [
   "agent-skills-signing"
  ]
 },
 {
  "id": "ai-disclosures-project",
  "name": "AI Disclosures Project",
  "aliases": [],
  "type": "organization",
  "website": "https://ai-disclosures.org",
  "part_of": "",
  "status": "Convenings at Bellagio (April 2026), Foo Camp (June 2026), MSR NYC (September 2026)",
  "updated": "2026-11-03",
  "tags": [
   "type/organization",
   "layer/governance",
   "layer/attribution",
   "layer/payments"
  ],
  "summary": "Project housed at Code for Science and Society working on the standards and mechanisms for value distribution in the human and AI economy. Prototypes include [[skills-marketplace]], the Open Memory Protocol Consortium and the Open Alpha Registry.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Value distribution**: the missing mechanisms for attribution and compensation in AI markets.\n- **Measuring harm**: ecosystem exploitation in search results and access violations in pre-training data (paper repos)."
   }
  ],
  "links": [
   "skills-marketplace"
  ],
  "backlinks": [
   "skills-marketplace"
  ]
 },
 {
  "id": "ai-robots-txt",
  "name": "ai.robots.txt",
  "aliases": [],
  "type": "project",
  "website": "https://github.com/ai-robots-txt/ai.robots.txt",
  "part_of": "",
  "status": "",
  "updated": "2026-11-03",
  "tags": [
   "type/project",
   "layer/access"
  ],
  "summary": "Community list of AI crawlers with generated robots.txt, nginx, Caddy, HAProxy and lighttpd blocks.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Crawler blocking today**: giving site operators ready-made blocks, and a record of what they deploy compared with what [[ietf-aipref]] specifies."
   }
  ],
  "links": [
   "ietf-aipref"
  ],
  "backlinks": []
 },
 {
  "id": "c2pa",
  "name": "C2PA",
  "aliases": [
   "Coalition for Content Provenance and Authenticity"
  ],
  "type": "organization",
  "website": "https://c2pa.org",
  "part_of": "",
  "status": "Spec 2.5 published October 2026",
  "updated": "2026-11-03",
  "tags": [
   "type/organization",
   "layer/provenance",
   "station/at-rest",
   "station/in-transit",
   "station/trust"
  ],
  "summary": "Standards body for content credentials: signed manifests (claims and assertions) bound to an asset, with ingredients for derived works. Reference code is maintained by the [[content-authenticity-initiative]].",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Asset provenance**: proving where an asset came from and what was done to it, with the record cryptographically bound to the asset.\n- **Text and JSON provenance**: binding a credential to formats with no metadata slot. 2.5 added Appendix A.9.3 guidance for JSON, which [[mcp-c2pa-in-meta]] relies on. The conformance text rubric has no JSON group yet.\n- **Stripped metadata**: recovering provenance after the manifest is removed, through watermarks and fingerprints on the soft-binding algorithm list (60 entries by 2026-10-28).\n- **Signer trust**: deciding who may sign, through a trust list and a conformance program."
   },
   {
    "title": "Related",
    "text": "- Identity and consent assertions come from [[cawg]].\n- Signing skill folders: [[agent-skills-signing]].\n- Its trust layer is compared with [[aaif-identity-trust-wg]] and [[spur-coalition]]."
   }
  ],
  "links": [
   "content-authenticity-initiative",
   "mcp-c2pa-in-meta",
   "cawg",
   "agent-skills-signing",
   "aaif-identity-trust-wg",
   "spur-coalition"
  ],
  "backlinks": [
   "agent-skills-signing",
   "mcp-c2pa-in-meta",
   "content-authenticity-initiative",
   "cawg",
   "croissant",
   "eu-ai-act-gpai-code",
   "skills-marketplace"
  ]
 },
 {
  "id": "mcp-c2pa-in-meta",
  "name": "C2PA content credentials in MCP _meta",
  "aliases": [
   "#3225",
   "org.c2pa/credential"
  ],
  "type": "proposal",
  "website": "https://github.com/modelcontextprotocol/modelcontextprotocol/discussions/3225",
  "part_of": "mcp",
  "status": "Discussion closed 2026-09-25 with all spec-repo discussions; no SEP filed yet",
  "updated": "2026-11-03",
  "tags": [
   "type/proposal",
   "layer/provenance",
   "station/in-transit",
   "venue/mcp"
  ],
  "summary": "Carry a [[c2pa]] credential for tool results and resources in MCP `_meta` under `org.c2pa/credential`.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Provenance in transit**: keeping a credential attached as content crosses from server to client.\n- **A venue**: finding an owner, since no WG or IG covers content provenance and PR #3336 requires a WG or IG thread before a SEP PR.\n- **Track choice**: deciding between an `experimental-ext-` repo under SEP-3392 and a Standards Track SEP.\n- **Where the field lives**: choosing between a top-level field and `_meta`, the same question [[mcp-sep-3094-citations]] faces."
   },
   {
    "title": "Related",
    "text": "- A credential check could run as an interceptor validator ([[mcp-interceptors]]).\n- Lineage key overlap: [[openlineage]]."
   }
  ],
  "links": [
   "c2pa",
   "mcp-sep-3094-citations",
   "mcp-interceptors",
   "openlineage",
   "mcp"
  ],
  "backlinks": [
   "c2pa",
   "mcp-interceptors",
   "mcp-security-ig",
   "mcp",
   "openlineage"
  ]
 },
 {
  "id": "cc-signals",
  "name": "CC Signals",
  "aliases": [],
  "type": "proposal",
  "website": "https://github.com/creativecommons/cc-signals",
  "part_of": "creative-commons",
  "status": "GitHub draft unchanged since 2025-12; v2 to make attribution a requirement",
  "updated": "2026-11-03",
  "tags": [
   "type/proposal",
   "layer/access",
   "layer/attribution"
  ],
  "summary": "Preference signals for AI reuse with terms attached: Credit, Credit + Direct Contribution, Credit + Ecosystem Contribution, Credit + Open. Layered on [[ietf-aipref]] vocabulary.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Reuse with reciprocity**: letting stewards allow AI reuse with terms attached, for those who do not want a plain opt-out.\n- **Checking credit**: knowing whether credit was given, which links to [[content-telemetry]] and [[mcp-sep-3094-citations]]."
   }
  ],
  "links": [
   "ietf-aipref",
   "content-telemetry",
   "mcp-sep-3094-citations",
   "creative-commons"
  ],
  "backlinks": [
   "creative-commons",
   "ietf-aipref"
  ]
 },
 {
  "id": "cloudflare-content-signals",
  "name": "Cloudflare Content Signals",
  "aliases": [
   "draft-romm-aipref-vocab-contentsignals"
  ],
  "type": "proposal",
  "website": "https://contentsignals.org",
  "part_of": "",
  "status": "Individual AIPREF draft; parsed by policycheck",
  "updated": "2026-11-03",
  "tags": [
   "type/proposal",
   "layer/access"
  ],
  "summary": "Three robots.txt categories, `search`, `ai-input` and `ai-train`, proposed as [[ietf-aipref]] vocabulary.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Use categories**: separating search indexing, use as model input and training in one signal."
   }
  ],
  "links": [
   "ietf-aipref"
  ],
  "backlinks": [
   "ietf-aipref",
   "openattribution"
  ]
 },
 {
  "id": "content-authenticity-initiative",
  "name": "Content Authenticity Initiative",
  "aliases": [
   "CAI",
   "contentauth"
  ],
  "type": "project",
  "website": "https://contentauthenticity.org",
  "part_of": "c2pa",
  "status": "Maintains c2pa-rs, c2pa-python, c2pa-js and c2patool",
  "updated": "2026-11-03",
  "tags": [
   "type/project",
   "layer/provenance"
  ],
  "summary": "Adobe-led initiative that maintains the open-source reference implementations of [[c2pa]].",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Reference SDKs**: giving developers one implementation for signing and verifying manifests, with a Rust core and Python and JS bindings.\n- **Text handlers**: signing plain and structured text in practice. Structured-text and plain-text A.8 handlers merged in c2pa-rs behind an experimental flag (2026-09); HTML, XML and TTML handlers are open."
   }
  ],
  "links": [
   "c2pa"
  ],
  "backlinks": [
   "c2pa"
  ]
 },
 {
  "id": "content-telemetry",
  "name": "Content Telemetry",
  "aliases": [],
  "type": "specification",
  "website": "https://github.com/SPUR-Coalition/telemetry",
  "part_of": "spur-coalition",
  "status": "v1.0 published 2026-09-02; signed events deferred (section 8.9)",
  "updated": "2026-11-03",
  "tags": [
   "type/specification",
   "layer/attribution",
   "station/past-last-hop"
  ],
  "summary": "Five reportable stages: `content_retrieved`, `content_grounded`, `content_cited`, `content_presented`, `content_engaged`. Manifest discovery at `/.well-known/content-telemetry.json`. `license_ref` joins it to the licensing layer ([[rsl]], [[iab-comp]]).",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Usage reporting**: reporting how AI systems use content after retrieval, in five events.\n- **Demanding conformance**: a manifest cannot require a conformance level from an agent (section 8.5).\n- **MCP binding**: emitting `content_cited` and `content_presented` from MCP clients, the events [[mcp-sep-3094-citations]] `citations.render` would need. telemetry-js ships an `MCPSessionTracker`."
   },
   {
    "title": "Related",
    "text": "- [[counter]] plans to reference it in phase two."
   }
  ],
  "links": [
   "rsl",
   "iab-comp",
   "mcp-sep-3094-citations",
   "counter",
   "spur-coalition"
  ],
  "backlinks": [
   "aaif-observability-traceability-wg",
   "cc-signals",
   "counter",
   "mcp",
   "openattribution",
   "rsl",
   "mcp-sep-3094-citations",
   "spur-coalition"
  ]
 },
 {
  "id": "counter",
  "name": "COUNTER Metrics",
  "aliases": [],
  "type": "organization",
  "website": "https://www.countermetrics.org",
  "part_of": "",
  "status": "Plans to reference Content Telemetry in phase two",
  "updated": "2026-11-03",
  "tags": [
   "type/organization",
   "layer/attribution"
  ],
  "summary": "Usage-metrics standard for scholarly publishers and libraries.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **AI usage metrics**: counting usage when the reader is an AI system. Phase two references [[content-telemetry]]."
   }
  ],
  "links": [
   "content-telemetry"
  ],
  "backlinks": [
   "content-telemetry"
  ]
 },
 {
  "id": "creative-commons",
  "name": "Creative Commons",
  "aliases": [
   "CC"
  ],
  "type": "organization",
  "website": "https://creativecommons.org",
  "part_of": "",
  "status": "Attribution to become a requirement in the next CC Signals iteration; RAG attribution best practices planned",
  "updated": "2026-11-03",
  "tags": [
   "type/organization",
   "layer/licensing",
   "layer/access",
   "layer/attribution"
  ],
  "summary": "Steward of the CC licenses and CC REL machine-readable license metadata. Proposes [[cc-signals]] and filed AIPREF drafts on exclusions and parameters ([[ietf-aipref]]).",
  "sections": [
   {
    "title": "Topics",
    "text": "- **AI reuse beyond licensing**: giving stewards terms for AI reuse, since licensing alone cannot address it (September 2026 guidance).\n- **Attribution in answers**: honoring the CC attribution requirement when content reaches a model or an agent answer.\n- **RAG attribution pilots**: finding adopters for best practices later in 2026. [[okfn]] with [[mcp-sep-3094-citations]] is a candidate."
   }
  ],
  "links": [
   "cc-signals",
   "ietf-aipref",
   "okfn",
   "mcp-sep-3094-citations"
  ],
  "backlinks": [
   "cc-signals",
   "ietf-aipref",
   "okfn"
  ]
 },
 {
  "id": "cawg",
  "name": "Creator Assertions Working Group",
  "aliases": [
   "CAWG"
  ],
  "type": "working-group",
  "website": "https://cawg.io",
  "part_of": "dif",
  "status": "Moved under DIF; consent assertion added 2026-07",
  "updated": "2026-11-03",
  "tags": [
   "type/working-group",
   "layer/provenance",
   "layer/identity",
   "layer/access"
  ],
  "summary": "Assertion specs that ride inside [[c2pa]] manifests: identity, training and data mining, consent, metadata, endorsement, certificate policy.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Signer identity**: naming the actor behind a credential, the identity upgrade path for [[agent-skills-signing]].\n- **Training and data mining opt-out**: letting an opt-out travel with the asset, the asset-side counterpart to [[ietf-aipref]] and [[w3c-tdmrep]].\n- **Consent**: recording consent as a signed assertion."
   },
   {
    "title": "Related",
    "text": "- Hosts the IPTC Data Mining photo-metadata property ([[iptc]])."
   }
  ],
  "links": [
   "c2pa",
   "agent-skills-signing",
   "ietf-aipref",
   "w3c-tdmrep",
   "iptc",
   "dif"
  ],
  "backlinks": [
   "agent-skills-signing",
   "c2pa",
   "dif",
   "eu-ai-act-gpai-code",
   "iptc",
   "w3c-odrl"
  ]
 },
 {
  "id": "croissant",
  "name": "Croissant",
  "aliases": [],
  "type": "specification",
  "website": "https://github.com/mlcommons/croissant",
  "part_of": "",
  "status": "1.1 (February 2026); required for NeurIPS 2026 dataset submissions",
  "updated": "2026-11-03",
  "tags": [
   "type/specification",
   "layer/provenance",
   "layer/licensing"
  ],
  "summary": "MLCommons dataset metadata format. 1.1 added machine-actionable provenance, consent and licensing fields.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Dataset provenance and consent**: recording what a training set was allowed to contain, the dataset-side counterpart to [[c2pa]] for assets."
   }
  ],
  "links": [
   "c2pa"
  ],
  "backlinks": []
 },
 {
  "id": "data-provenance-initiative",
  "name": "Data Provenance Initiative",
  "aliases": [],
  "type": "project",
  "website": "https://www.dataprovenance.org",
  "part_of": "",
  "status": "Last code push 2025-03",
  "updated": "2026-11-03",
  "tags": [
   "type/project",
   "layer/provenance",
   "layer/licensing"
  ],
  "summary": "MIT-led audits of training-corpus licenses, with datasets on Hugging Face.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Dataset license audits**: finding out which licenses actually apply to the datasets models are trained on."
   }
  ],
  "links": [],
  "backlinks": []
 },
 {
  "id": "dif",
  "name": "Decentralized Identity Foundation",
  "aliases": [
   "DIF"
  ],
  "type": "organization",
  "website": "https://identity.foundation",
  "part_of": "",
  "status": "Home of CAWG",
  "updated": "2026-11-03",
  "tags": [
   "type/organization",
   "layer/identity"
  ],
  "summary": "Standards body for decentralized identifiers and verifiable credentials. Hosts [[cawg]].",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Decentralized identity**: interoperable identifiers and credentials that agent identity specs such as [[aims]] build on."
   }
  ],
  "links": [
   "cawg",
   "aims"
  ],
  "backlinks": [
   "cawg"
  ]
 },
 {
  "id": "eu-ai-act-gpai-code",
  "name": "EU AI Act and GPAI Code of Practice",
  "aliases": [
   "Article 50"
  ],
  "type": "regulation",
  "website": "https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai",
  "part_of": "",
  "status": "Commission compiling a list of recognized machine-readable opt-out mechanisms",
  "updated": "2026-11-03",
  "tags": [
   "type/regulation",
   "layer/access",
   "layer/governance",
   "layer/provenance"
  ],
  "summary": "The copyright chapter of the GPAI Code of Practice has signatories honor robots.txt and make best efforts on other protocols. Article 50 sets transparency duties for AI-generated content.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Ranking opt-outs**: deciding which mechanisms count, among [[ietf-aipref]], [[w3c-tdmrep]], [[rsl]] and the [[cawg]] assertion. [[open-future]] and [[iptc]] answered the consultation.\n- **Transparency for generated content**: Article 50 duties, the compliance framing behind the [[c2pa]] pitch."
   },
   {
    "title": "Related",
    "text": "- Google ties [[aipref-training-token]] support to the Code."
   }
  ],
  "links": [
   "ietf-aipref",
   "w3c-tdmrep",
   "rsl",
   "cawg",
   "open-future",
   "iptc",
   "c2pa",
   "aipref-training-token"
  ],
  "backlinks": [
   "aaif-grr-wg",
   "iptc",
   "open-future",
   "w3c-tdmrep"
  ]
 },
 {
  "id": "iab-comp",
  "name": "IAB Tech Lab Content Monetization Protocols",
  "aliases": [
   "CoMP"
  ],
  "type": "specification",
  "website": "https://github.com/IABTechLab/CoMP",
  "part_of": "",
  "status": "1.0, public comment from 2026-03-10",
  "updated": "2026-11-03",
  "tags": [
   "type/specification",
   "layer/licensing",
   "layer/payments"
  ],
  "summary": "An AI system describes itself and its intended use; a content owner or marketplace answers with a package scoped by content type, function and retrieval method. Grew out of the LLM Content Ingest API initiative.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Licensing offers**: standardizing how an AI system states its intended use and how a publisher or marketplace answers with a package. Enforcement is assumed to happen at the edge."
   }
  ],
  "links": [],
  "backlinks": [
   "content-telemetry",
   "x402"
  ]
 },
 {
  "id": "ietf",
  "name": "IETF",
  "aliases": [
   "Internet Engineering Task Force"
  ],
  "type": "organization",
  "website": "https://www.ietf.org",
  "part_of": "",
  "status": "IETF 127 San Francisco, November 2026",
  "updated": "2026-11-03",
  "tags": [
   "type/organization",
   "layer/access",
   "layer/identity"
  ],
  "summary": "Internet standards body. Hosts [[ietf-aipref]] and [[ietf-web-bot-auth]], and individual drafts such as [[mpp]].",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Internet-level standards**: wire formats for AI preferences, bot identity and HTTP payment auth."
   }
  ],
  "links": [
   "ietf-aipref",
   "ietf-web-bot-auth",
   "mpp"
  ],
  "backlinks": [
   "ietf-aipref",
   "ietf-web-bot-auth",
   "mpp"
  ]
 },
 {
  "id": "ietf-aipref",
  "name": "IETF AI Preferences Working Group",
  "aliases": [
   "AIPREF"
  ],
  "type": "working-group",
  "website": "https://datatracker.ietf.org/wg/aipref/about/",
  "part_of": "ietf",
  "status": "vocab-08 (2026-09-13) without consensus; attach-05 (2026-08-18); IETF 127 sessions 2026-11-16 and 11-19",
  "updated": "2026-11-03",
  "tags": [
   "type/working-group",
   "layer/access",
   "station/past-last-hop"
  ],
  "summary": "Vocabulary for AI usage preferences and how they attach to content (`Content-Usage` header and robots.txt directive).",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Shared vocabulary**: defining training and other AI uses so every crawler reads a preference the same way.\n- **Attachment**: binding a preference to content through a `Content-Usage` header and robots.txt directive.\n- **Downstream survival**: keeping preferences intact through model redistribution, caching and embeddings (issues 245 and 246).\n- **Inference-time use**: covering grounding and agent use, which the vocabulary does not yet do. [[microsoft-grounding-preference]] is the first vendor signal there. MCP has no field for a server to declare it."
   },
   {
    "title": "Related",
    "text": "- Individual drafts: [[aipref-training-token]], [[cloudflare-content-signals]], and the [[creative-commons]] exclusions and parameters drafts.\n- Enforcement side: [[ietf-web-bot-auth]]. Layered on by [[cc-signals]]."
   }
  ],
  "links": [
   "microsoft-grounding-preference",
   "aipref-training-token",
   "cloudflare-content-signals",
   "creative-commons",
   "ietf-web-bot-auth",
   "cc-signals",
   "ietf"
  ],
  "backlinks": [
   "ai-robots-txt",
   "cc-signals",
   "cloudflare-content-signals",
   "creative-commons",
   "cawg",
   "eu-ai-act-gpai-code",
   "ietf",
   "ietf-web-bot-auth",
   "microsoft-grounding-preference",
   "mcp",
   "aipref-training-token"
  ]
 },
 {
  "id": "ietf-web-bot-auth",
  "name": "IETF Web Bot Auth Working Group",
  "aliases": [
   "webbotauth"
  ],
  "type": "working-group",
  "website": "https://datatracker.ietf.org/wg/webbotauth/about/",
  "part_of": "ietf",
  "status": "httpsig-protocol draft; Cloudflare libraries",
  "updated": "2026-11-03",
  "tags": [
   "type/working-group",
   "layer/identity",
   "layer/access"
  ],
  "summary": "Signed bot traffic with RFC 9421 HTTP message signatures and a key directory at `/.well-known/http-message-signatures-directory`.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Bot identity**: proving who a crawler or agent is. The preference ([[ietf-aipref]]) says what is allowed, bot auth says who is asking."
   },
   {
    "title": "Related",
    "text": "- Pairs with [[aims]] and the agent identifiability asks from [[wikimedia]]."
   }
  ],
  "links": [
   "ietf-aipref",
   "aims",
   "wikimedia",
   "ietf"
  ],
  "backlinks": [
   "aaif-identity-trust-wg",
   "aims",
   "ietf",
   "ietf-aipref",
   "wikimedia"
  ]
 },
 {
  "id": "iptc",
  "name": "IPTC",
  "aliases": [
   "International Press Telecommunications Council"
  ],
  "type": "organization",
  "website": "https://iptc.org",
  "part_of": "",
  "status": "RightsML and the Data Mining property; answered the EU opt-out consultation",
  "updated": "2026-11-03",
  "tags": [
   "type/organization",
   "layer/licensing",
   "layer/access"
  ],
  "summary": "News-media standards body. RightsML is a profile of [[w3c-odrl]]. Its Data Mining photo-metadata property is maintained with [[cawg]].",
  "sections": [
   {
    "title": "Topics",
    "text": "- **News rights**: expressing rights for news content in machine-readable form (RightsML).\n- **Recognized opt-outs**: getting the EU to recognize workable opt-out mechanisms ([[eu-ai-act-gpai-code]])."
   }
  ],
  "links": [
   "w3c-odrl",
   "cawg",
   "eu-ai-act-gpai-code"
  ],
  "backlinks": [
   "cawg",
   "eu-ai-act-gpai-code",
   "w3c-odrl"
  ]
 },
 {
  "id": "knight-georgetown-institute",
  "name": "Knight-Georgetown Institute",
  "aliases": [
   "KGI"
  ],
  "type": "organization",
  "website": "https://kgi.georgetown.edu",
  "part_of": "",
  "status": "",
  "updated": "2026-11-03",
  "tags": [
   "type/organization",
   "layer/governance",
   "layer/access"
  ],
  "summary": "Tech policy institute led by Alissa Cooper. Related: [[aipref-training-token]].",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Crawler and training controls**: convening policy work on how AI training controls should work."
   }
  ],
  "links": [
   "aipref-training-token"
  ],
  "backlinks": []
 },
 {
  "id": "mpp",
  "name": "Machine Payments Protocol",
  "aliases": [
   "MPP",
   "draft-ryan-httpauth-payment"
  ],
  "type": "specification",
  "website": "https://paymentauth.org",
  "part_of": "",
  "status": "Individual IETF draft, not a WG item",
  "updated": "2026-11-03",
  "tags": [
   "type/specification",
   "layer/payments"
  ],
  "summary": "Stripe and Tempo protocol: HTTP 402 with a `Payment` authentication scheme, payment-method agnostic, with an MCP transport. Filed at the [[ietf]].",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Method-neutral HTTP payment**: one auth scheme for any payment method, an alternative to [[x402]]."
   }
  ],
  "links": [
   "ietf",
   "x402"
  ],
  "backlinks": [
   "ietf"
  ]
 },
 {
  "id": "mcp-fsig",
  "name": "MCP Financial Services Interest Group",
  "aliases": [
   "FSIG"
  ],
  "type": "interest-group",
  "website": "",
  "part_of": "mcp",
  "status": "Charter has a data lineage and citation pillar",
  "updated": "2026-11-03",
  "tags": [
   "type/interest-group",
   "venue/mcp",
   "layer/provenance",
   "layer/attribution"
  ],
  "summary": "Financial-services interest group. Also hosts the audit and attestation pillar, which is out of scope here.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Regulated data lineage and citation**: tracing financial data through agents. [[openlineage]] and [[mcp-sep-3094-citations]] have been presented or offered here."
   }
  ],
  "links": [
   "openlineage",
   "mcp-sep-3094-citations",
   "mcp"
  ],
  "backlinks": [
   "mcp",
   "openlineage"
  ]
 },
 {
  "id": "mcp-interceptors",
  "name": "MCP Interceptors WG and SEP-2624",
  "aliases": [
   "SEP-2624",
   "experimental-ext-interceptors"
  ],
  "type": "working-group",
  "website": "https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2624",
  "part_of": "mcp",
  "status": "SEP open; chain concept removed (#44, 2026-10-27); `signature` on ValidationResult reserved",
  "updated": "2026-11-03",
  "tags": [
   "type/working-group",
   "venue/mcp",
   "station/boundary"
  ],
  "summary": "Deterministic hooks in clients, servers and gateways. The place a seal or citation validator can run without a core spec change.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Checking at the boundary**: verifying provenance in a gateway or hook, since most clients will not.\n- **The `signature` field**: deciding what it signs and whether it ever carries content provenance.\n- **Sample validator**: a seal or citation validator for [[mcp-c2pa-in-meta]] or [[mcp-sep-3094-citations]]."
   }
  ],
  "links": [
   "mcp-c2pa-in-meta",
   "mcp-sep-3094-citations",
   "mcp"
  ],
  "backlinks": [
   "mcp-c2pa-in-meta",
   "mcp",
   "mcp-sep-3094-citations"
  ]
 },
 {
  "id": "mcp-security-ig",
  "name": "MCP Security Interest Group",
  "aliases": [],
  "type": "interest-group",
  "website": "",
  "part_of": "mcp",
  "status": "Restructured as routing forum (#3331, merged 2026-10-31); monthly agenda-driven call",
  "updated": "2026-11-03",
  "tags": [
   "type/interest-group",
   "venue/mcp",
   "layer/governance"
  ],
  "summary": "First stop for security topics. Routes validated work to the owning group.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Routing**: sending [[mcp-c2pa-in-meta]] and [[mcp-sep-3094-citations]] to an owning group until a content group exists."
   }
  ],
  "links": [
   "mcp-c2pa-in-meta",
   "mcp-sep-3094-citations",
   "mcp"
  ],
  "backlinks": [
   "mcp"
  ]
 },
 {
  "id": "microsoft-publisher-content-marketplace",
  "name": "Microsoft Publisher Content Marketplace",
  "aliases": [],
  "type": "project",
  "website": "",
  "part_of": "",
  "status": "Launched 2026-02-03 with Copilot as first buyer; no public spec",
  "updated": "2026-11-03",
  "tags": [
   "type/project",
   "layer/licensing",
   "layer/payments"
  ],
  "summary": "Voluntary marketplace with publisher-set terms and pricing and usage reporting. Reported to support [[rsl]].",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Paying publishers**: compensating publishers for content used in AI answers, with usage reporting."
   }
  ],
  "links": [
   "rsl"
  ],
  "backlinks": [
   "rsl"
  ]
 },
 {
  "id": "microsoft-grounding-preference",
  "name": "Microsoft training and grounding preferences",
  "aliases": [
   "ai-grounding:disallow"
  ],
  "type": "proposal",
  "website": "https://blogs.bing.com/search/2026/10/your-content-your-choice-clearer-preferences-for-training-and-grounding/",
  "part_of": "",
  "status": "Effective 2027-02-01",
  "updated": "2026-11-03",
  "tags": [
   "type/proposal",
   "layer/access",
   "station/past-last-hop"
  ],
  "summary": "Training via [[aipref-training-token]] or a page-level `ai-training:disallow`, plus a separate page-level grounding preference (`ai-grounding:disallow`) with no robots.txt form. Replaces `NoArchive` and `NoCache`.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Inference-time preferences**: letting a page opt out of grounding, the first vendor signal for a use [[ietf-aipref]] does not yet cover."
   },
   {
    "title": "Related",
    "text": "- Microsoft says the preferences do not establish licensing or payment."
   }
  ],
  "links": [
   "aipref-training-token",
   "ietf-aipref"
  ],
  "backlinks": [
   "ietf-aipref"
  ]
 },
 {
  "id": "mcp",
  "name": "Model Context Protocol",
  "aliases": [
   "MCP"
  ],
  "type": "specification",
  "website": "https://modelcontextprotocol.io",
  "part_of": "aaif",
  "status": "Next spec release moved to 2027-03-30 (SEP-3398); WG-first rule for SEPs (PR #3336)",
  "updated": "2026-11-03",
  "tags": [
   "type/specification",
   "venue/mcp",
   "layer/provenance",
   "layer/attribution"
  ],
  "summary": "The protocol between agents and the tools, resources, prompts and skills they read. MCP is the hop where content provenance can be carried or lost.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Content provenance ownership**: no WG or IG owns content provenance or attribution.\n- **Usage declarations**: no field lets a server declare how its content may be used for training or grounding ([[ietf-aipref]]).\n- **Credit reporting**: nothing reports display or credit past the last hop ([[content-telemetry]])."
   },
   {
    "title": "Related",
    "text": "- Threads: [[mcp-c2pa-in-meta]], [[mcp-sep-3094-citations]], [[mcp-skills-extension]], [[mcp-interceptors]].\n- Groups: [[mcp-fsig]], [[mcp-security-ig]]."
   }
  ],
  "links": [
   "ietf-aipref",
   "content-telemetry",
   "mcp-c2pa-in-meta",
   "mcp-sep-3094-citations",
   "mcp-skills-extension",
   "mcp-interceptors",
   "mcp-fsig",
   "mcp-security-ig",
   "aaif"
  ],
  "backlinks": [
   "aaif",
   "mcp-c2pa-in-meta",
   "mcp-fsig",
   "mcp-interceptors",
   "mcp-security-ig",
   "mcp-skills-extension",
   "mcp-sep-3094-citations"
  ]
 },
 {
  "id": "open-future",
  "name": "Open Future",
  "aliases": [],
  "type": "organization",
  "website": "https://openfuture.eu",
  "part_of": "",
  "status": "",
  "updated": "2026-11-03",
  "tags": [
   "type/organization",
   "layer/governance",
   "layer/access"
  ],
  "summary": "European think tank on the digital commons.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Commons in EU policy**: representing the commons in the opt-out consultation ([[eu-ai-act-gpai-code]]).\n- **Commons in agent standards**: arguing for a [[wikimedia]] seat at [[aaif]]."
   }
  ],
  "links": [
   "eu-ai-act-gpai-code",
   "wikimedia",
   "aaif"
  ],
  "backlinks": [
   "eu-ai-act-gpai-code",
   "wikimedia"
  ]
 },
 {
  "id": "okfn",
  "name": "Open Knowledge Foundation",
  "aliases": [
   "OKFN",
   "CKAN",
   "MCP Labs"
  ],
  "type": "organization",
  "website": "https://okfn.org",
  "part_of": "",
  "status": "MCP Labs (mcp.okfn.org) live; okfn/mcp-server uses structuredContent.sources",
  "updated": "2026-11-03",
  "tags": [
   "type/organization",
   "layer/attribution",
   "station/in-transit",
   "venue/mcp"
  ],
  "summary": "CKAN maintainers. MCP Labs runs chat over official datasets with every answer linked to its source.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Attributable open-data answers**: linking every answer to its dataset, which open licenses can make a legal requirement.\n- **Interim convention to standard**: mapping its required `structuredContent.sources` list onto [[mcp-sep-3094-citations]]."
   },
   {
    "title": "Related",
    "text": "- Plans to move charts to MCP Apps and citations to SEP-3094. Talking with the [[wikimedia]] community.\n- A pilot candidate for [[creative-commons]] RAG attribution."
   }
  ],
  "links": [
   "mcp-sep-3094-citations",
   "wikimedia",
   "creative-commons"
  ],
  "backlinks": [
   "creative-commons",
   "mcp-sep-3094-citations"
  ]
 },
 {
  "id": "openattribution",
  "name": "OpenAttribution.org",
  "aliases": [],
  "type": "organization",
  "website": "https://openattribution.org",
  "part_of": "",
  "status": "SDKs, edge worker, policycheck, commerce profile, AIMS draft",
  "updated": "2026-11-03",
  "tags": [
   "type/organization",
   "layer/attribution",
   "layer/identity",
   "layer/payments"
  ],
  "summary": "Not-for-profit that maintains the [[content-telemetry]] SDKs, the Cloudflare edge worker, the policycheck scanner, the commerce profile and [[aims]].",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Multi-source credit**: crediting every source behind an agent answer when a user clicks one link. The commerce profile's `ctx_token` resolves to a click manifest, with bindings for [[acp]] and [[ucp]].\n- **Signal fragmentation**: mapping the competing access signals. policycheck scans robots.txt, [[rsl]], [[cloudflare-content-signals]] and [[w3c-tdmrep]] at once."
   }
  ],
  "links": [
   "content-telemetry",
   "aims",
   "acp",
   "ucp",
   "rsl",
   "cloudflare-content-signals",
   "w3c-tdmrep"
  ],
  "backlinks": [
   "aims",
   "acp",
   "skills-marketplace",
   "spur-coalition",
   "ucp"
  ]
 },
 {
  "id": "openlineage",
  "name": "OpenLineage",
  "aliases": [],
  "type": "project",
  "website": "https://openlineage.io",
  "part_of": "",
  "status": "RFC #4484 open (updated 2026-10-07); MCP RFC in preparation by BearingNode",
  "updated": "2026-11-03",
  "tags": [
   "type/project",
   "layer/provenance",
   "station/in-transit"
  ],
  "summary": "Open standard for data lineage events. RFC #4484 and BearingNode's planned MCP `_meta` lineage key carry lineage identity across the tool-call boundary.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Lineage across tool calls**: tracing data handed to an agent back to its source."
   },
   {
    "title": "Related",
    "text": "- Overlaps [[mcp-c2pa-in-meta]]. Introduced at [[mcp-fsig]] on 2026-09-05."
   }
  ],
  "links": [
   "mcp-c2pa-in-meta",
   "mcp-fsig"
  ],
  "backlinks": [
   "mcp-c2pa-in-meta",
   "mcp-fsig"
  ]
 },
 {
  "id": "project-nanda",
  "name": "Project NANDA",
  "aliases": [],
  "type": "project",
  "website": "https://nanda.media.mit.edu",
  "part_of": "",
  "status": "",
  "updated": "2026-11-03",
  "tags": [
   "type/project",
   "layer/identity"
  ],
  "summary": "MIT-originated agent registry and trust-manifest work, discussed in [[aaif-security-privacy-wg]].",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Agent trust manifests**: trust metadata for agents in an open registry."
   }
  ],
  "links": [
   "aaif-security-privacy-wg"
  ],
  "backlinks": [
   "aaif-security-privacy-wg"
  ]
 },
 {
  "id": "rsl",
  "name": "Really Simple Licensing",
  "aliases": [
   "RSL",
   "RSL Collective"
  ],
  "type": "specification",
  "website": "https://rslstandard.org",
  "part_of": "",
  "status": "RSL 1.0 published 2025-12-10",
  "updated": "2026-11-03",
  "tags": [
   "type/specification",
   "layer/licensing",
   "layer/payments"
  ],
  "summary": "XML vocabulary for usage and compensation terms (per-crawl, per-inference, subscription, attribution-only), discovered from robots.txt, RSS, HTTP headers or HTML. Includes a Crawler Authorization Protocol and an Open License Protocol on OAuth 2.0. The RSL Collective is the collecting society behind it.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Machine-readable terms**: publishing usage terms and prices that crawlers and AI systems can read and accept.\n- **Adoption**: getting model developers to honor it on the open web. None has committed; [[microsoft-publisher-content-marketplace]] is reported to support it.\n- **Enforcement**: supplying the lever [[content-telemetry]] manifests lack, through a SPUR profile binding drafted for the RSL WG."
   }
  ],
  "links": [
   "microsoft-publisher-content-marketplace",
   "content-telemetry"
  ],
  "backlinks": [
   "content-telemetry",
   "eu-ai-act-gpai-code",
   "microsoft-publisher-content-marketplace",
   "openattribution",
   "w3c-odrl",
   "x402"
  ]
 },
 {
  "id": "mcp-skills-extension",
  "name": "SEP-2640 Skills Extension",
  "aliases": [
   "SEP-2640",
   "ext-skills"
  ],
  "type": "specification",
  "website": "https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2640",
  "part_of": "mcp",
  "status": "Final 2026-09-13; Beta under SEP-3392",
  "updated": "2026-11-03",
  "tags": [
   "type/specification",
   "venue/mcp",
   "station/at-rest",
   "topic/skills"
  ],
  "summary": "Serves [[agent-skills]] over MCP, with digests and a `_meta` hook for intermediaries.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Skills over MCP**: distributing skills to clients with digests and a `_meta` hook for intermediaries."
   },
   {
    "title": "Related",
    "text": "- At-rest signing is not on the Skills WG agenda ([[agent-skills-signing]])."
   }
  ],
  "links": [
   "agent-skills",
   "agent-skills-signing",
   "mcp"
  ],
  "backlinks": [
   "agent-skills-signing",
   "mcp"
  ]
 },
 {
  "id": "mcp-sep-3094-citations",
  "name": "SEP-3094 Granular Citations",
  "aliases": [
   "SEP-3094",
   "#3094"
  ],
  "type": "proposal",
  "website": "https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3094",
  "part_of": "mcp",
  "status": "Open, no sponsor; revised 2026-09-04; Perplexity PR #148 implementing; dormancy clock to about 2027-01-15",
  "updated": "2026-11-03",
  "tags": [
   "type/proposal",
   "venue/mcp",
   "layer/attribution",
   "station/in-transit",
   "station/past-last-hop"
  ],
  "summary": "Citations on tool results bound by CommonMark links in the text, each a flat schema.org CreativeWork, granularity via URL fragments, integrity deferred. A `citations.render` client capability.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Citations in transit**: keeping sources attached from tool result to the answer a user sees.\n- **Sponsorship and venue**: finding a sponsor and a WG or IG discussion.\n- **Field placement**: choosing a top-level field or `_meta` processed by [[mcp-interceptors]].\n- **Reporting**: mapping to [[okfn]] `sources` and [[content-telemetry]] events."
   },
   {
    "title": "Related",
    "text": "- Reviewers include [[okfn]] and [[wikimedia]] contributors."
   }
  ],
  "links": [
   "mcp-interceptors",
   "okfn",
   "content-telemetry",
   "wikimedia",
   "mcp"
  ],
  "backlinks": [
   "mcp-c2pa-in-meta",
   "cc-signals",
   "content-telemetry",
   "creative-commons",
   "mcp-fsig",
   "mcp-interceptors",
   "mcp-security-ig",
   "mcp",
   "okfn",
   "wikimedia"
  ]
 },
 {
  "id": "aipref-training-token",
  "name": "Shared AI training robots.txt token",
  "aliases": [
   "draft-kelley-aipref-training-preference-signal",
   "__usage_ai-training"
  ],
  "type": "proposal",
  "website": "https://datatracker.ietf.org/doc/draft-kelley-aipref-training-preference-signal/",
  "part_of": "ietf-aipref",
  "status": "Individual draft posted 2026-10-30; Google, OpenAI, Microsoft and Anthropic committed to honor it",
  "updated": "2026-11-03",
  "tags": [
   "type/proposal",
   "layer/access"
  ],
  "summary": "A robots.txt group whose `User-Agent` is the cross-vendor token `__usage_ai-training`, using ordinary `Allow` and `Disallow` rules. No new syntax. \"AI Training\" takes its definition from the [[ietf-aipref]] vocab draft.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **One training opt-out**: a single signal every major crawler operator honors, with no new robots.txt grammar.\n- **Compliance**: getting honored signals to change outputs. Prompting can still surface disallowed content."
   },
   {
    "title": "Related",
    "text": "- An alternative to the attach draft's `Content-Usage` directive in [[ietf-aipref]]."
   }
  ],
  "links": [
   "ietf-aipref"
  ],
  "backlinks": [
   "eu-ai-act-gpai-code",
   "ietf-aipref",
   "knight-georgetown-institute",
   "microsoft-grounding-preference"
  ]
 },
 {
  "id": "skills-marketplace",
  "name": "Skills Marketplace",
  "aliases": [
   "skill-cards",
   "skillproof"
  ],
  "type": "project",
  "website": "https://github.com/SrulyRosenblat/skill-cards",
  "part_of": "ai-disclosures-project",
  "status": "Initial testing with O'Reilly authors",
  "updated": "2026-11-03",
  "tags": [
   "type/project",
   "layer/licensing",
   "layer/attribution",
   "layer/payments",
   "topic/skills"
  ],
  "summary": "Monetizable, rights-protected, interoperable skills, with skillproof benchmarks.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Paying skill authors**: a payout basis for skills, plausibly measured contribution over invocation count.\n- **Multi-source skills**: crediting every source behind a skill ([[openattribution]], [[c2pa]]).\n- **Missing metadata**: no skill registry frontmatter carries author, license or source ([[agent-skills-signing]])."
   }
  ],
  "links": [
   "openattribution",
   "c2pa",
   "agent-skills-signing",
   "ai-disclosures-project"
  ],
  "backlinks": [
   "agent-skills",
   "ai-disclosures-project"
  ]
 },
 {
  "id": "spawning",
  "name": "Spawning",
  "aliases": [
   "datadiligence"
  ],
  "type": "organization",
  "website": "https://spawning.ai",
  "part_of": "",
  "status": "datadiligence dormant since 2024-10",
  "updated": "2026-11-03",
  "tags": [
   "type/organization",
   "layer/access"
  ],
  "summary": "Maker of datadiligence, a Python library that checks works against known opt-out methods inside a training pipeline.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Pipeline-side compliance**: checking works against known opt-outs inside a training pipeline, the only open implementation of that found."
   }
  ],
  "links": [],
  "backlinks": []
 },
 {
  "id": "spur-coalition",
  "name": "SPUR Coalition",
  "aliases": [],
  "type": "organization",
  "website": "https://www.spurcoalition.org",
  "part_of": "",
  "status": "Content Telemetry v1.0 published 2026-09-02",
  "updated": "2026-11-03",
  "tags": [
   "type/organization",
   "layer/attribution",
   "station/past-last-hop",
   "station/trust"
  ],
  "summary": "Publisher coalition founded by the BBC, FT, Guardian, Sky News and Telegraph, with the AP as first US member. Stewards [[content-telemetry]] and the publisher accreditation profile and conformance mark. Sister body [[openattribution]] maintains SDKs and profiles.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Visibility past retrieval**: letting publishers see grounding, citation, display and engagement, not only the fetch.\n- **Verifying reports**: checking self-reported events through sampled audits or canary content. SPUR has asked for input.\n- **Publisher accreditation**: a conformance mark for agents that report at the required level."
   }
  ],
  "links": [
   "content-telemetry",
   "openattribution"
  ],
  "backlinks": [
   "c2pa",
   "content-telemetry"
  ]
 },
 {
  "id": "ucp",
  "name": "Universal Commerce Protocol",
  "aliases": [
   "UCP"
  ],
  "type": "specification",
  "website": "https://github.com/Universal-Commerce-Protocol/ucp",
  "part_of": "",
  "status": "Google-led consortium, no foundation home",
  "updated": "2026-11-03",
  "tags": [
   "type/specification",
   "layer/payments"
  ],
  "summary": "Merchant commerce protocol. [[openattribution]] has an `org.openattribution.telemetry` vendor extension for it.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Cross-merchant commerce**: agent commerce across merchants, compared with [[acp]] in [[aaif-agentic-commerce-wg]]."
   }
  ],
  "links": [
   "openattribution",
   "acp",
   "aaif-agentic-commerce-wg"
  ],
  "backlinks": [
   "aaif-agentic-commerce-wg",
   "openattribution"
  ]
 },
 {
  "id": "w3c",
  "name": "W3C",
  "aliases": [
   "World Wide Web Consortium"
  ],
  "type": "organization",
  "website": "https://www.w3.org",
  "part_of": "",
  "status": "",
  "updated": "2026-11-03",
  "tags": [
   "type/organization",
   "layer/licensing",
   "layer/access"
  ],
  "summary": "Web standards body. Hosts [[w3c-odrl]] and [[w3c-tdmrep]], and the DID and Verifiable Credentials specs [[aims]] uses.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Web vocabularies**: rights and identity standards for the web."
   }
  ],
  "links": [
   "w3c-odrl",
   "w3c-tdmrep",
   "aims"
  ],
  "backlinks": [
   "w3c-odrl",
   "w3c-tdmrep"
  ]
 },
 {
  "id": "w3c-odrl",
  "name": "W3C ODRL",
  "aliases": [
   "Open Digital Rights Language"
  ],
  "type": "community-group",
  "website": "https://www.w3.org/community/odrl/",
  "part_of": "w3c",
  "status": "2.2 is a W3C Recommendation; a W3C WG for 3.0 is being chartered; ai-vocab draft",
  "updated": "2026-11-03",
  "tags": [
   "type/community-group",
   "layer/licensing"
  ],
  "summary": "Policy language for permissions, prohibitions and duties on content.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Policy language**: one model for permissions, prohibitions and duties that [[rsl]], IPTC RightsML ([[iptc]]), [[cawg]] and [[w3c-tdmrep]] all point at.\n- **AI actions**: adding AI-specific actions to the vocabulary (the `ai-vocab` draft)."
   }
  ],
  "links": [
   "rsl",
   "iptc",
   "cawg",
   "w3c-tdmrep",
   "w3c"
  ],
  "backlinks": [
   "iptc",
   "w3c",
   "w3c-tdmrep"
  ]
 },
 {
  "id": "w3c-tdmrep",
  "name": "W3C TDM Reservation Protocol Community Group",
  "aliases": [
   "TDMRep"
  ],
  "type": "community-group",
  "website": "https://www.w3.org/community/tdmrep/",
  "part_of": "w3c",
  "status": "CG draft; last push 2026-09",
  "updated": "2026-11-03",
  "tags": [
   "type/community-group",
   "layer/access",
   "layer/licensing"
  ],
  "summary": "The EU DSM Article 4 text and data mining opt-out: `tdm-reservation` and `tdm-policy` by HTTP header, HTML meta or `/.well-known/tdmrep.json`.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **EU TDM opt-out**: a machine-readable text and data mining reservation that satisfies EU DSM Article 4."
   },
   {
    "title": "Related",
    "text": "- Being weighed for the EU recognized opt-out list ([[eu-ai-act-gpai-code]]). Points at [[w3c-odrl]] for detailed policy."
   }
  ],
  "links": [
   "eu-ai-act-gpai-code",
   "w3c-odrl",
   "w3c"
  ],
  "backlinks": [
   "cawg",
   "eu-ai-act-gpai-code",
   "openattribution",
   "w3c",
   "w3c-odrl"
  ]
 },
 {
  "id": "wikimedia",
  "name": "Wikimedia",
  "aliases": [
   "Wikimedia Foundation",
   "Wikimedia Enterprise",
   "WikiCite"
  ],
  "type": "organization",
  "website": "https://wikimediafoundation.org",
  "part_of": "",
  "status": "Published investigation of OpenAI-run agents 2026-10-05; Wikipedians reviewing SEP-3094",
  "updated": "2026-11-03",
  "tags": [
   "type/organization",
   "layer/attribution",
   "layer/identity"
  ],
  "summary": "Wikimedia Enterprise supplies Microsoft, Mistral and Perplexity.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Identifiable agents**: knowing which agents are reading the projects ([[ietf-web-bot-auth]], [[aims]]).\n- **Attribution for reuse**: meeting attribution requirements in agent answers. A WikiCite contributor listed six functions of citation on [[mcp-sep-3094-citations]], including provenance chains to primary sources.\n- **A seat at the table**: [[open-future]] argued in December 2025 that Wikimedia needs one at [[aaif]]."
   }
  ],
  "links": [
   "ietf-web-bot-auth",
   "aims",
   "mcp-sep-3094-citations",
   "open-future",
   "aaif"
  ],
  "backlinks": [
   "ietf-web-bot-auth",
   "open-future",
   "okfn",
   "mcp-sep-3094-citations"
  ]
 },
 {
  "id": "x402",
  "name": "x402",
  "aliases": [
   "x402 Foundation"
  ],
  "type": "specification",
  "website": "https://x402.org",
  "part_of": "",
  "status": "x402 Foundation (Linux Foundation) operational 2026-07-14; v2 spec",
  "updated": "2026-11-03",
  "tags": [
   "type/specification",
   "layer/payments"
  ],
  "summary": "HTTP 402 payments in headers, with schemes `exact`, `upto`, `auth-capture` and `batch-settlement` and transports for HTTP, MCP and A2A. Successor in spirit to L402 (Lightning). Sibling of [[aaif]] under the Linux Foundation, not part of it.",
  "sections": [
   {
    "title": "Topics",
    "text": "- **Machine payment**: paying for a request without accounts or API keys, the rail a licensing term ([[rsl]], [[iab-comp]]) would settle on.\n- **Delegated spending**: authorization for agents spending on someone's behalf, which lives elsewhere ([[ap2]])."
   },
   {
    "title": "Related",
    "text": "- Compared with other commerce specs in [[aaif-agentic-commerce-wg]]."
   }
  ],
  "links": [
   "aaif",
   "rsl",
   "iab-comp",
   "ap2",
   "aaif-agentic-commerce-wg"
  ],
  "backlinks": [
   "aaif-agentic-commerce-wg",
   "ap2",
   "mpp"
  ]
 }
];
