// Auto-generated from Obsidian vault markdown
// Run: node scripts/sync-all.js
// Source: /Users/vic/Documents/SubtleBodhi/03 - 🌐 SWS/Site Pages/

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  duration: string;
}

export interface CourseData {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: string;
  priceValue: number;
  modules: number;
  runtime: string;
  stripeLink: string;
  h1: string;
  h1Sub: string;
  problem: { headline: string; pain: string[]; cost: string; } | null;
  agitate: { headline: string; consequences: string[]; stakes: string; } | null;
  solution: { headline: string; transformation: string; mechanism: string; } | null;
  authority: { headline: string; proof: string[]; credibility: string; } | null;
  intrigue: { headline: string; hooks: string[]; openLoop: string; } | null;
  desire: { headline: string; futureState: string[]; identity: string; } | null;
  action: { headline: string; cta: string; urgency: string; };
  curriculum: CourseModule[];
  testimonial: { quote: string; name: string; title: string; result: string; };
  faq: { q: string; a: string }[];
}

export const courses: CourseData[] = [
  {
    "id": "SWS-01",
    "slug": "browser-os",
    "name": "Browser OS",
    "tagline": "Stop losing 23 minutes per context switch",
    "price": "$497",
    "priceValue": 497,
    "modules": 6,
    "runtime": "~8 hours",
    "stripeLink": "https://buy.stripe.com/6oU8wO5Ywd7e6ri2Nk5EY0c",
    "h1": "Browser OS: The 5-Space Architecture That Eliminates Digital Chaos",
    "h1Sub": "Stop losing 23 minutes per context switch. Deploy the system used by 150+ operators to reclaim 500+ hours annually.",
    "problem": {
      "headline": "Your Browser Is a Profit Leak Spraying Money Across Your Floor",
      "pain": [
        "127 open tabs and you can't find the one you need",
        "23 minutes to recover context after every interruption",
        "Your \"system\" is panic-scrolling through a graveyard of half-finished work",
        "You've tried bookmarks, tab managers, productivity apps—none of them stick"
      ],
      "cost": "At $150/hour, those context switches cost you $260,000+ per year. Not in lost time. In destroyed cognitive capacity that never comes back."
    },
    "agitate": {
      "headline": "Every Tab You Open Is a Tax on Your Intelligence",
      "consequences": [
        "Your brain burns glucose managing spatial memory of 100+ browser locations",
        "Decision fatigue compounds—by 2pm you're operating at 40% capacity",
        "Important work gets buried under urgent noise",
        "You end each day exhausted but unsure what you actually accomplished"
      ],
      "stakes": "This isn't disorganization. This is a systematic destruction of your highest-value thinking time. And it compounds daily."
    },
    "solution": {
      "headline": "The 5-Space Architecture: Information Sovereignty in 6 Modules",
      "transformation": "Replace chaos with a spatial system that matches how your brain actually works. Five distinct spaces. Zero tab creep. Complete context preservation.",
      "mechanism": "Browser OS deploys Arc Browser's space architecture with a production-tested workflow that separates contexts by cognitive mode—not by project or urgency."
    },
    "authority": {
      "headline": "Built From 150+ Client Implementations",
      "proof": [
        "Deployed across executives, founders, and knowledge workers since 2021",
        "Average reported time savings: 10+ hours per week",
        "CFO case study: Reduced 127 tabs to 12 persistent spaces",
        "Startup founder: Reclaimed 2 hours daily within first week"
      ],
      "credibility": "This isn't theory. These are battle-tested configurations extracted from real operator environments."
    },
    "intrigue": {
      "headline": "What Happens When Your Browser Works Like Your Brain?",
      "hooks": [
        "The \"Inbox Zero\" principle applied to browser tabs",
        "Why your current tab groups are making you dumber",
        "The hidden cost of \"I'll just open a new tab\""
      ],
      "openLoop": "Module 4 reveals the spatial memory trick that makes context-switching instant instead of painful."
    },
    "desire": {
      "headline": "Become the Operator Who Controls Information Flow",
      "futureState": [
        "Open your laptop and know exactly where everything is",
        "Switch contexts in seconds, not minutes",
        "End each day with energy left for what matters",
        "Watch colleagues struggle while you move with precision"
      ],
      "identity": "You're not becoming more organized. You're becoming the person who doesn't need organization because your system handles it."
    },
    "action": {
      "headline": "Deploy Browser OS Today",
      "cta": "Get Instant Access — $497",
      "urgency": ""
    },
    "curriculum": [
      {
        "id": "01",
        "title": "The Cost of Chaos",
        "description": "Quantify what tab hell actually costs you. Calculate your personal cognitive tax.",
        "duration": "45 min"
      },
      {
        "id": "02",
        "title": "5-Space Architecture",
        "description": "The spatial system that matches how your brain processes context.",
        "duration": "90 min"
      },
      {
        "id": "03",
        "title": "Arc Browser Deployment",
        "description": "Step-by-step setup of your production browser environment.",
        "duration": "60 min"
      },
      {
        "id": "04",
        "title": "Context Preservation",
        "description": "The spatial memory trick that makes switching instant.",
        "duration": "75 min"
      },
      {
        "id": "05",
        "title": "Information Triage",
        "description": "What stays, what goes, what moves. Decision frameworks for tab management.",
        "duration": "60 min"
      },
      {
        "id": "06",
        "title": "Maintenance Protocol",
        "description": "Weekly rituals that prevent chaos from returning.",
        "duration": "45 min"
      }
    ],
    "testimonial": {
      "quote": "I went from 127 tabs to 12 persistent spaces. The cognitive relief was immediate. I'm not exaggerating when I say this changed how I think about work.",
      "name": "Sarah Chen",
      "title": "Founder, TechScale",
      "result": "10+ hrs/week saved"
    },
    "faq": [
      {
        "q": "Do I need Arc Browser?",
        "a": "Arc is the recommended browser for full implementation, but the 5-Space Architecture principles work with any browser that supports profiles or containers."
      },
      {
        "q": "How long until I see results?",
        "a": "Most operators report significant reduction in context-switching friction within the first week. Full system deployment takes one weekend."
      },
      {
        "q": "What if I've tried other productivity systems?",
        "a": "Browser OS isn't a productivity system. It's an information architecture. It works because it matches how your brain processes spatial context, not how apps think you should work."
      }
    ]
  },
  {
    "id": "SWS-02",
    "slug": "applied-information",
    "name": "Applied Information",
    "tagline": "Escape the $50k/month API trap",
    "price": "$997",
    "priceValue": 997,
    "modules": 12,
    "runtime": "~20 hours",
    "stripeLink": "https://buy.stripe.com/cNi6oGbiQ2sA4ja0Fc5EY0d",
    "h1": "Applied Information: Enterprise AI Economics and Hybrid Sovereignty",
    "h1Sub": "Escape the $50k/month API trap. Deploy the cost model that saves enterprises $60-540k annually.",
    "problem": {
      "headline": "You're Paying Rent on Intelligence You Could Own",
      "pain": [
        "$10-50k/month flowing to OpenAI, Anthropic, Google—and growing",
        "Your proprietary data training their models, not yours",
        "Vendor lock-in deepening with every API call",
        "Compliance gaps your legal team doesn't even know about yet"
      ],
      "cost": "Every month you delay sovereignty is another month of rent paid on intelligence that should be a capital asset."
    },
    "agitate": {
      "headline": "The API Trap Compounds Monthly",
      "consequences": [
        "Usage scales linearly with cost—there's no efficiency curve",
        "Your competitive moat leaks through every API request",
        "One vendor policy change can break your entire AI strategy",
        "Your \"AI transformation\" is really just an expensive dependency"
      ],
      "stakes": "You're not building an AI capability. You're building a subscription to someone else's capability. And they can change the terms whenever they want."
    },
    "solution": {
      "headline": "The Hybrid Sovereignty Model: Own What Matters, Rent What Doesn't",
      "transformation": "Deploy a cost model that separates commodity inference from proprietary intelligence. Run local where it matters. Cloud where it makes sense.",
      "mechanism": "Applied Information teaches the economic framework for AI deployment decisions—when to build, when to buy, and how to calculate true total cost of ownership."
    },
    "authority": {
      "headline": "Extracted From Enterprise Deployments",
      "proof": [
        "Fortune 500 cost reduction case studies",
        "Break-even calculations proven across 50+ implementations",
        "Compliance frameworks aligned with SOC2, HIPAA, GDPR",
        "Real TCO models, not vendor marketing math"
      ],
      "credibility": "This isn't anti-cloud ideology. It's financial engineering applied to AI infrastructure."
    },
    "intrigue": {
      "headline": "What If Your AI Costs Became a Competitive Advantage?",
      "hooks": [
        "The 6-month break-even point most enterprises miss",
        "Why your CFO should care about local inference",
        "The hidden compliance exposure in every API call"
      ],
      "openLoop": "Module 7 reveals the cost modeling framework that turns AI spending from opex to capex."
    },
    "desire": {
      "headline": "Become the Leader Who Owns the AI Stack",
      "futureState": [
        "Present AI costs as investments, not expenses",
        "Negotiate with vendors from a position of alternatives",
        "Sleep soundly knowing your data stays yours",
        "Watch competitors bleed cash while you build equity"
      ],
      "identity": "You're not just cutting costs. You're building an AI asset that compounds in value while others pay rent."
    },
    "action": {
      "headline": "Deploy Applied Information Today",
      "cta": "Get Instant Access — $997",
      "urgency": ""
    },
    "curriculum": [
      {
        "id": "01",
        "title": "The True Cost of API Dependency",
        "description": "Calculate what you're really paying for cloud AI.",
        "duration": "60 min"
      },
      {
        "id": "02",
        "title": "Sovereignty vs. Convenience",
        "description": "The framework for hybrid deployment decisions.",
        "duration": "90 min"
      },
      {
        "id": "03",
        "title": "Local Inference Economics",
        "description": "Hardware costs, performance curves, break-even analysis.",
        "duration": "120 min"
      },
      {
        "id": "04",
        "title": "Data Residency & Compliance",
        "description": "What your legal team needs to know about AI data flows.",
        "duration": "90 min"
      },
      {
        "id": "05",
        "title": "Vendor Lock-in Assessment",
        "description": "Measure and mitigate your current exposure.",
        "duration": "60 min"
      },
      {
        "id": "06",
        "title": "Hybrid Architecture Patterns",
        "description": "Design patterns for cloud-local hybrid deployments.",
        "duration": "120 min"
      },
      {
        "id": "07",
        "title": "TCO Modeling Framework",
        "description": "Build the spreadsheet that changes the conversation.",
        "duration": "90 min"
      },
      {
        "id": "08",
        "title": "Migration Planning",
        "description": "Phase your transition without breaking production.",
        "duration": "90 min"
      },
      {
        "id": "09",
        "title": "Procurement Strategy",
        "description": "Hardware selection, vendor negotiation, timing.",
        "duration": "60 min"
      },
      {
        "id": "10",
        "title": "ROI Communication",
        "description": "Present the case to executives who don't speak AI.",
        "duration": "60 min"
      },
      {
        "id": "11",
        "title": "Risk Mitigation",
        "description": "What can go wrong and how to prevent it.",
        "duration": "60 min"
      },
      {
        "id": "12",
        "title": "Continuous Optimization",
        "description": "Ongoing cost monitoring and optimization cycles.",
        "duration": "60 min"
      }
    ],
    "testimonial": {
      "quote": "We were spending $47k/month on API calls. After Applied Information, we cut that to $12k while improving response times. The CFO actually thanked me.",
      "name": "David Park",
      "title": "VP Engineering, FinTech Startup",
      "result": "$420k annual savings"
    },
    "faq": [
      {
        "q": "Is this anti-cloud?",
        "a": "No. This is pro-economics. Cloud AI makes sense for some workloads. The course teaches you how to identify which ones."
      },
      {
        "q": "Do I need a technical background?",
        "a": "The course is designed for technical leaders who need to make business cases. You don't need to deploy the infrastructure yourself."
      },
      {
        "q": "What about model quality?",
        "a": "Local models have reached parity with cloud models for many use cases. The course covers capability mapping so you know where local works and where it doesn't."
      }
    ]
  },
  {
    "id": "SWS-03",
    "slug": "codified-genius",
    "name": "Codified Genius",
    "tagline": "Your knowledge is worth $7M+ trapped in your head",
    "price": "$1,997",
    "priceValue": 1997,
    "modules": 7,
    "runtime": "~15 hours",
    "stripeLink": "https://buy.stripe.com/6oU00i0Ec3wEaHy1Jg5EY0e",
    "h1": "Codified Genius: The 5-SOP System for Founder Expertise Extraction",
    "h1Sub": "Your knowledge is worth $7M+ trapped in your head. Extract it into systems your team can execute without you.",
    "problem": {
      "headline": "You're the Smartest Person in Your Company. That's Why It's Failing to Scale.",
      "pain": [
        "Every decision routes through you because \"nobody does it as well\"",
        "Your calendar is a hostage negotiation between urgent requests",
        "60+ hour weeks and your team still can't execute without approval",
        "You've tried hiring A-players but they can't access what's in your head"
      ],
      "cost": "At due diligence, founder dependency reduces valuation by $3M minimum. Your expertise is an asset—trapped in a format that can't transfer."
    },
    "agitate": {
      "headline": "The Bottleneck Compounds Until It Breaks You",
      "consequences": [
        "Every hire adds coordination overhead, not capacity",
        "Your best ideas die in the queue behind urgent fires",
        "Vacation means coming back to chaos",
        "Acquirers see a liability, not a business"
      ],
      "stakes": "You didn't build a business. You built a job that owns you. And it's appreciating in stress while depreciating in value."
    },
    "solution": {
      "headline": "The 5-SOP System: Expertise Extraction in 7 Modules",
      "transformation": "Convert the decisions in your head into documented systems. Five SOP types that cover every mode of knowledge transfer.",
      "mechanism": "Codified Genius uses structured extraction protocols to pull expertise from founders and encode it into formats teams can execute independently."
    },
    "authority": {
      "headline": "Proven Across 150+ Founder Engagements",
      "proof": [
        "Deployed with founders at $1-10M ARR",
        "Average time reclaimed: 15+ hours per week",
        "Case study: Founder exited bottleneck role in 90 days",
        "Due diligence success stories with clean documentation"
      ],
      "credibility": "This isn't about writing SOPs. It's about extracting the genius that only you can see and making it visible to everyone."
    },
    "intrigue": {
      "headline": "What If Your Team Could Think Like You?",
      "hooks": [
        "The 5 types of SOPs and when each applies",
        "Why \"just document it\" never works",
        "The extraction interview technique that surfaces hidden expertise"
      ],
      "openLoop": "Module 5 reveals the decision tree framework that lets your team make judgment calls you'd approve 95% of the time."
    },
    "desire": {
      "headline": "Become the Founder Who Scales Through Systems",
      "futureState": [
        "Take a two-week vacation and come back to a better business",
        "Watch your team execute without asking permission",
        "Focus on strategy while operations run themselves",
        "Present acquirers with a business, not a job"
      ],
      "identity": "You're not abdicating responsibility. You're multiplying your capacity through documented intelligence."
    },
    "action": {
      "headline": "Deploy Codified Genius Today",
      "cta": "Get Instant Access — $1,997",
      "urgency": ""
    },
    "curriculum": [
      {
        "id": "01",
        "title": "The Bottleneck Audit",
        "description": "Map where your expertise creates dependency.",
        "duration": "90 min"
      },
      {
        "id": "02",
        "title": "The 5 SOP Types",
        "description": "Process, decision, communication, analysis, and judgment SOPs.",
        "duration": "120 min"
      },
      {
        "id": "03",
        "title": "Extraction Interviews",
        "description": "The technique for pulling tacit knowledge into explicit format.",
        "duration": "120 min"
      },
      {
        "id": "04",
        "title": "Documentation Architecture",
        "description": "Where SOPs live, how they're accessed, who maintains them.",
        "duration": "90 min"
      },
      {
        "id": "05",
        "title": "Decision Tree Design",
        "description": "Convert judgment calls into flowcharts your team can follow.",
        "duration": "150 min"
      },
      {
        "id": "06",
        "title": "Training & Handoff",
        "description": "How to transfer knowledge without being the eternal trainer.",
        "duration": "90 min"
      },
      {
        "id": "07",
        "title": "Maintenance Protocol",
        "description": "Keep SOPs alive as the business evolves.",
        "duration": "60 min"
      }
    ],
    "testimonial": {
      "quote": "I extracted 15 years of expertise into 23 SOPs. My team now handles 80% of what used to hit my desk. I finally have time to be the CEO instead of the chief problem solver.",
      "name": "Dr. James Liu",
      "title": "Practice Owner",
      "result": "Exited bottleneck"
    },
    "faq": [
      {
        "q": "How is this different from regular documentation?",
        "a": "Regular documentation captures what you do. Codified Genius captures how you think. The 5 SOP types cover judgment and decision-making, not just procedures."
      },
      {
        "q": "What if my expertise is too complex to document?",
        "a": "The extraction interview technique is specifically designed for tacit knowledge—the stuff you do automatically without thinking about it. That's the valuable part."
      },
      {
        "q": "How long until I see results?",
        "a": "First SOP deployed in week 1. Most founders report significant time savings within 30 days. Full system deployment takes 90 days."
      }
    ]
  },
  {
    "id": "SWS-04",
    "slug": "hybrid-intelligence",
    "name": "Hybrid Intelligence",
    "tagline": "41 modules",
    "price": "$2,497",
    "priceValue": 2497,
    "modules": 41,
    "runtime": "~60 hours",
    "stripeLink": "https://buy.stripe.com/dRmaEWaeM2sA9DugEa5EY0f",
    "h1": "Hybrid Intelligence: The Complete System for Production-Grade Local AI",
    "h1Sub": "41 modules. Local LLMs. Browser automation. Enterprise RAG. Multi-agent orchestration. The flagship course.",
    "problem": {
      "headline": "Your AI Strategy Is a Series of Expensive Demos That Never Ship",
      "pain": [
        "Proof of concepts that can't survive contact with production",
        "RAG systems that retrieve irrelevant garbage",
        "Agents that hallucinate in high-stakes scenarios",
        "A gap between \"works in notebook\" and \"works in business\""
      ],
      "cost": "Every failed AI project burns credibility. Your stakeholders are one more demo away from calling AI a buzzword and moving on."
    },
    "agitate": {
      "headline": "The Demo-to-Production Gap Is Where AI Projects Die",
      "consequences": [
        "Enterprise-grade reliability requires architecture you haven't built",
        "Your vector store is a liability dressed as an asset",
        "Multi-agent systems without governance are ticking time bombs",
        "The skills that build demos don't build production systems"
      ],
      "stakes": "You're not failing because AI doesn't work. You're failing because production AI is a different discipline than demo AI. And nobody taught you the difference."
    },
    "solution": {
      "headline": "The 5-Layer Architecture: From Acquisition to Governance",
      "transformation": "Deploy a complete production AI system: data acquisition, memory architecture, orchestration layer, integration framework, and governance controls.",
      "mechanism": "Hybrid Intelligence walks you through every layer of production AI—local LLMs, browser automation, enterprise RAG, multi-agent systems, and the ops layer that makes it all reliable."
    },
    "authority": {
      "headline": "The Most Comprehensive AI Production Course Available",
      "proof": [
        "41 modules covering every production concern",
        "Real deployment architectures from enterprise implementations",
        "Claude, Ollama, LangChain, browser automation, RAG—all integrated",
        "Built from 150+ client engagements over 5 years"
      ],
      "credibility": "This is the course I wish existed when I started. It's everything I learned building production AI systems, structured so you can learn it in weeks instead of years."
    },
    "intrigue": {
      "headline": "What If You Could Deploy AI That Actually Works?",
      "hooks": [
        "The 5-layer architecture that separates production from demos",
        "Why most RAG implementations fail and how to fix them",
        "The governance layer that makes multi-agent systems safe"
      ],
      "openLoop": "Module 27 reveals the memory architecture pattern that makes context windows irrelevant."
    },
    "desire": {
      "headline": "Become the Architect Who Ships Production AI",
      "futureState": [
        "Deploy AI systems that run in production, not notebooks",
        "Build RAG that retrieves what you actually need",
        "Orchestrate agents that execute reliably",
        "Present stakeholders with working systems, not demos"
      ],
      "identity": "You're not just learning AI. You're becoming the person who builds AI that works at scale."
    },
    "action": {
      "headline": "Deploy Hybrid Intelligence Today",
      "cta": "Get Instant Access — $2,497",
      "urgency": ""
    },
    "curriculum": [
      {
        "id": "01-10",
        "title": "Foundation Layer",
        "description": "Local LLM deployment, model selection, inference optimization.",
        "duration": "~15 hours"
      },
      {
        "id": "11-20",
        "title": "Data Acquisition",
        "description": "Browser automation, web scraping, API integration, data pipelines.",
        "duration": "~12 hours"
      },
      {
        "id": "21-30",
        "title": "Memory Architecture",
        "description": "Vector stores, RAG implementation, context management, retrieval optimization.",
        "duration": "~15 hours"
      },
      {
        "id": "31-37",
        "title": "Orchestration Layer",
        "description": "Multi-agent systems, task routing, error handling, state management.",
        "duration": "~10 hours"
      },
      {
        "id": "38-41",
        "title": "Governance & Ops",
        "description": "Monitoring, evaluation, cost tracking, compliance controls.",
        "duration": "~8 hours"
      }
    ],
    "testimonial": {
      "quote": "Hybrid Intelligence took my agency from reactive to proactive. We're now deploying local LLMs for every client. This is the competitive moat that actually works.",
      "name": "Marcus Webb",
      "title": "CEO, Webb Digital",
      "result": "40% efficiency gain"
    },
    "faq": [
      {
        "q": "Is this for beginners?",
        "a": "No. This course assumes you've used AI tools and want to build production systems. If you're new to AI, start with Claude 101 (included with purchase)."
      },
      {
        "q": "What tech stack does it cover?",
        "a": "Claude, Ollama, LangChain, Playwright, ChromaDB, PostgreSQL with pgvector, and more. The principles apply regardless of specific tools."
      },
      {
        "q": "How is this different from other AI courses?",
        "a": "Most courses teach you to use AI. This course teaches you to build AI systems. The difference is production-grade architecture, not API calls."
      }
    ]
  },
  {
    "id": "SWS-05",
    "slug": "llm-ops",
    "name": "LLM Ops",
    "tagline": "Your AI works",
    "price": "$997",
    "priceValue": 997,
    "modules": 8,
    "runtime": "~12 hours",
    "stripeLink": "https://buy.stripe.com/9B64gy4Us7MU16YbjQ5EY0g",
    "h1": "LLM Ops: Governance, Compliance, and Cost Control for Production AI",
    "h1Sub": "Your AI works. Now make it reliable, compliant, and cost-efficient at scale.",
    "problem": {
      "headline": "Your AI Is Shipping. Your Governance Isn't.",
      "pain": [
        "$67k/month bills with no visibility into what's driving costs",
        "Hallucinations in production that reach customers",
        "CISO asking questions you can't answer",
        "No observability into what your agents are actually doing"
      ],
      "cost": "One hallucination in the wrong context costs more than your entire AI budget. One compliance gap costs your SOC2. One cost spiral costs your job."
    },
    "agitate": {
      "headline": "Production AI Without Ops Is a Liability",
      "consequences": [
        "You can't optimize what you can't measure",
        "Agents running without guardrails will eventually break something important",
        "Audit requests reveal gaps you didn't know existed",
        "Costs scale with usage—and usage is scaling fast"
      ],
      "stakes": "You shipped the AI. Congratulations. Now you own the risk. And risk without visibility is just waiting for the incident."
    },
    "solution": {
      "headline": "The LLM Ops Stack: Monitoring, Evaluation, Governance",
      "transformation": "Deploy the operational layer that makes AI reliable at scale. Cost tracking, hallucination detection, compliance controls, and observability that actually works.",
      "mechanism": "LLM Ops covers the production discipline that most AI teams skip: the monitoring, evaluation, and governance that turns experiments into reliable infrastructure."
    },
    "authority": {
      "headline": "Built for Teams Running Production AI",
      "proof": [
        "Frameworks aligned with SOC2, HIPAA, GDPR requirements",
        "Cost reduction case studies: 50-80% savings",
        "Hallucination detection patterns from real incidents",
        "Observability stacks proven in enterprise environments"
      ],
      "credibility": "This is the ops layer I wish every AI team would deploy. It's not glamorous, but it's what separates demos from production."
    },
    "intrigue": {
      "headline": "What If You Could Trust Your AI in Production?",
      "hooks": [
        "The observability stack that catches problems before users do",
        "Why cost per token is the wrong metric",
        "The compliance framework that survives audits"
      ],
      "openLoop": "Module 6 reveals the evaluation framework that catches hallucinations before they reach production."
    },
    "desire": {
      "headline": "Become the Leader Who Ships Reliable AI",
      "futureState": [
        "Present cost dashboards that show ROI, not just spend",
        "Answer CISO questions with documentation, not panic",
        "Catch quality issues before customers report them",
        "Scale AI usage without scaling anxiety"
      ],
      "identity": "You're not just running AI. You're running AI that your organization can trust."
    },
    "action": {
      "headline": "Deploy LLM Ops Today",
      "cta": "Get Instant Access — $997",
      "urgency": ""
    },
    "curriculum": [
      {
        "id": "01",
        "title": "The Ops Gap",
        "description": "What production AI requires that most teams skip.",
        "duration": "60 min"
      },
      {
        "id": "02",
        "title": "Cost Architecture",
        "description": "Track, attribute, and optimize AI spending.",
        "duration": "90 min"
      },
      {
        "id": "03",
        "title": "Observability Stack",
        "description": "Logging, tracing, and monitoring for LLM systems.",
        "duration": "120 min"
      },
      {
        "id": "04",
        "title": "Guardrails & Safety",
        "description": "Input/output filtering, jailbreak prevention, safety layers.",
        "duration": "90 min"
      },
      {
        "id": "05",
        "title": "Compliance Framework",
        "description": "SOC2, HIPAA, GDPR alignment for AI systems.",
        "duration": "90 min"
      },
      {
        "id": "06",
        "title": "Evaluation Pipeline",
        "description": "Hallucination detection, quality scoring, regression testing.",
        "duration": "120 min"
      },
      {
        "id": "07",
        "title": "Incident Response",
        "description": "When things go wrong: playbooks for AI failures.",
        "duration": "60 min"
      },
      {
        "id": "08",
        "title": "Continuous Improvement",
        "description": "Feedback loops, model updates, ongoing optimization.",
        "duration": "60 min"
      }
    ],
    "testimonial": {
      "quote": "We were blind to our AI costs and quality. LLM Ops gave us visibility. We cut costs by 60% and caught three hallucination patterns before they reached production.",
      "name": "Rachel Torres",
      "title": "Head of AI, Series C Startup",
      "result": "60% cost reduction"
    },
    "faq": [
      {
        "q": "Is this only for enterprises?",
        "a": "Any team running AI in production benefits from ops discipline. The frameworks scale from startup to enterprise."
      },
      {
        "q": "What if we're just starting with AI?",
        "a": "Build ops in from the start. It's easier to deploy than to retrofit. The course covers both greenfield and brownfield scenarios."
      },
      {
        "q": "What compliance frameworks are covered?",
        "a": "SOC2, HIPAA, and GDPR alignment. The principles apply to other frameworks—the course teaches the methodology, not just the checklist."
      }
    ]
  },
  {
    "id": "SWS-06",
    "slug": "claude-code-obsidian",
    "name": "Claude Code + Obsidian",
    "tagline": "One file. One conversation. Working system.",
    "price": "$350",
    "priceValue": 350,
    "modules": 1,
    "runtime": "~30 min setup",
    "stripeLink": "https://buy.stripe.com/cNi28qev28QYeXOdrY5EY0p",
    "h1": "Claude Code + Obsidian: One File Builds Your Entire AI Infrastructure",
    "h1Sub": "Drop it in Obsidian. Run Claude Code. Answer questions about your business. Walk away with a system that remembers everything.",
    "problem": {
      "headline": "Your AI Has Amnesia",
      "pain": [
        "Every ChatGPT conversation starts from scratch",
        "You re-explain your business to AI weekly",
        "Notes scattered across twelve apps that don't connect",
        "AI that suggests instead of executes"
      ],
      "cost": "Every hour re-explaining is an hour not closing. Every lead that slips because you forgot the details—that's money. Every 'system' that adds friction instead of removing it—that's why you abandon them."
    },
    "agitate": {
      "headline": "The Reset Tax Compounds Daily",
      "consequences": [
        "Context loss kills momentum",
        "Your 'AI assistant' can't remember yesterday",
        "Notes that don't surface when you need them",
        "Tools that create work instead of eliminating it"
      ],
      "stakes": "You don't need another tool. You need infrastructure that learns. AI that compounds instead of resets."
    },
    "solution": {
      "headline": "Self-Executing Documentation",
      "transformation": "One markdown file. Drop it in an empty Obsidian vault. Run Claude Code. Claude reads the file, asks about your business, and builds your system from your answers.",
      "mechanism": "The file trains Claude by being read by Claude. Your answers become folder structure, context files, people tracking, and lead scoring—built during one conversation."
    },
    "authority": {
      "headline": "The System I Actually Use",
      "proof": [
        "Built from my own multi-business operations",
        "Same architecture running my client work, content production, and consulting",
        "Context streaming that persists across sessions",
        "Scoring that develops from your judgment, not assumptions"
      ],
      "credibility": "This isn't theory. It's the extracted infrastructure from 3+ years of production use."
    },
    "intrigue": {
      "headline": "What If Your AI Knew Your Business Better Than You Remember It?",
      "hooks": [
        "The file that trains itself",
        "Why one conversation builds what takes others months",
        "Lead scoring that emerges from how you actually prioritize"
      ],
      "openLoop": "By the end of setup, Claude will brief you on any contact in 30 seconds and score leads using criteria you defined without knowing you were defining them."
    },
    "desire": {
      "headline": "AI That Compounds",
      "futureState": [
        "Tomorrow Claude remembers today",
        "Brief me on anyone before any call",
        "Scoring that reflects your actual judgment",
        "Context that loads automatically by keyword"
      ],
      "identity": "You're not organizing notes. You're building infrastructure that makes every future AI conversation smarter."
    },
    "action": {
      "headline": "Get the File",
      "cta": "Get Instant Access — $350",
      "urgency": ""
    },
    "curriculum": [
      {
        "id": "01",
        "title": "START_HERE.md",
        "description": "One file. Contains setup protocol, templates, and reference. Claude executes it.",
        "duration": "~30 min"
      }
    ],
    "testimonial": {
      "quote": "Placeholder for Tyler's testimonial after he runs the system.",
      "name": "Tyler T.",
      "title": "East Valley Companies",
      "result": "TBD"
    },
    "faq": [
      {
        "q": "Why Claude Code specifically?",
        "a": "File access. Claude Code reads and writes to your vault. Browser-based AI can't. That's the difference between suggesting and doing."
      },
      {
        "q": "What if I use Gemini or ChatGPT?",
        "a": "This requires Claude Code. The file trains Claude by Claude reading it. If that changes later, you're not the customer right now."
      },
      {
        "q": "Is this a course?",
        "a": "It's a file that builds a system. You learn by doing, not watching. One setup conversation, working infrastructure."
      },
      {
        "q": "What if I get stuck?",
        "a": "Hourly support available at $100/hr. But most people don't need it—Claude handles the setup."
      },
      {
        "q": "What about updates?",
        "a": "The file works. The architecture is stable. Updates happen through your use, not my releases."
      }
    ]
  }
];

export const getCourseBySlug = (slug: string): CourseData | undefined => {
  return courses.find(c => c.slug === slug);
};

export const getCourseById = (id: string): CourseData | undefined => {
  return courses.find(c => c.id === id);
};
