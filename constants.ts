

import { TimelineEvent, Principle, ExtendedVenture, SkillData, ExperienceItem, Testimonial, IndustrySector } from './types';

export const FULL_BIO_CONTEXT = `
Victor Valentine Romo — Knowledge Systems Architect.
Founder of Scale With Search. Building memory infrastructure that turns scattered information into searchable, compounding intelligence.
Mission: Search Your Thoughts. Scale Your Output.
Experience: 10+ years, 198+ clients, 14 industries. Claude Code, Obsidian, and search intelligence.
Connect: https://victorvalentineromo.com | https://twitter.com/b2bvic | https://linkedin.com/in/b2bvic
`;

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: '1999',
    title: 'System Overclocking',
    location: 'Inland Empire, CA',
    description: 'Demonstrated 5th-grade processing capacity in language and logic during Kindergarten initialization. Assigned to tutor 2nd-grade units, establishing early pedagogical feedback loops.',
    category: 'foundation',
    stats: ['99TH PERCENTILE', 'PEER TUTORING', 'ADVANCED LITERACY']
  },
  {
    year: '2003',
    title: 'Pattern Recognition Origin',
    location: 'Inland Empire, CA',
    description: 'Began self-directed mastery via Beatboxing. Deconstructed complex sonic patterns to reconstruct rhythm.',
    category: 'foundation'
  },
  {
    year: '2008 - 2018',
    title: 'Acoustic Systems Architecture',
    location: 'SoCal (LA/SD/IE)',
    description: 'Ten-year campaign in sonic algorithms. Classically-Trained Trombonist executing performance logistics and pedagogical systems across the Southern California circuit.',
    category: 'foundation',
    stats: ['12 ENSEMBLES', '55 STUDENTS', '100+ SHOWS']
  },
  {
    year: '2013',
    title: 'SEO Genesis',
    location: 'Third Eye SEO',
    description: 'Manual entry into search algorithms. Optimized 20+ WP sites and wrote 450k words of semantic content.',
    category: 'grinding',
    stats: ['20+ WP SITES OPTIMIZED', '450K WORDS WRITTEN', 'MANUAL BACKLINKING']
  },
  {
    year: '2017',
    title: 'Corporate Systems',
    location: 'Cobra Carbide',
    description: 'Transformed legacy manufacturing sales. Implemented email automation and Amazon FBA optimization.',
    category: 'grinding',
    stats: ['7-FIGURE REV GROWTH', '18-MONTH SPRINT', 'FULL AUTOMATION']
  },
  {
    year: '2019',
    title: 'The Infrastructure Collapse',
    location: 'Raleigh, NC',
    description: 'The Infrastructure Collapse. Rebuilt collapsed agency infrastructure. Forged reputation as "The Fixer".',
    category: 'crucible',
    stats: ['CRISIS ARCHITECTURE', 'AGENCY REBUILD', 'ZERO RETREAT']
  },
  {
    year: '2020',
    title: 'FOUND Agency',
    location: 'Raleigh, NC',
    description: 'Co-Founder & COO. Architected agency infrastructure. Drove 2,700% revenue growth (2023-2024) and applied adaptive strategies across 20+ industries.',
    category: 'mastery',
    stats: ['2,700% REV GROWTH', '1,400% CLICK LIFT', '20+ INDUSTRIES']
  },
  {
    year: '2022',
    title: 'Enterprise SEO Scale',
    location: 'Grey Matter',
    description: 'Managed organic search strategy for 147 concurrent entities. Audited and resolved technical debt at scale.',
    category: 'mastery',
    stats: ['147 CLIENTS', '250K+ ERRORS FIXED', '3X OUTPUT VIA AI']
  },
  {
    year: '2024',
    title: 'Searchable Mind',
    location: 'Scale With Search',
    description: 'Building memory infrastructure that turns scattered information into searchable, compounding intelligence. Search your thoughts. Scale your output.',
    category: 'mastery',
    stats: ['6 COURSES BUILT', '77 MODULES', 'MEMORY INFRASTRUCTURE']
  },
  {
    year: 'Nov 2025',
    title: 'Inside Sales Database Manager',
    location: 'The Jim Allen Group',
    description: '[CONFIDENTIAL] Architecting the revenue infrastructure for the Jim Allen Group. Transforming the database into a self-correcting asset.',
    category: 'mastery',
    stats: ['#1 RE TEAM', 'REVENUE INFRA', 'DATA INTEGRITY']
  }
];

export const PRINCIPLES: Principle[] = [
  { id: 1, title: "Infinite Potential", description: "Reality proceeds from undifferentiated potential to concrete manifestation." },
  { id: 2, title: "Differentiation", description: "Generic is worthless; specific, custom-built systems create 10x returns." },
  { id: 3, title: "Relationships", description: "Meaning derives from connections (edges) and interactions, not isolated nodes." },
  { id: 4, title: "Hierarchy", description: "Systems organize into nested levels with distinct properties at each scale." },
  { id: 5, title: "Emergence", description: "3 automations don't yield 3x value; they yield 10x through emergent properties." },
  { id: 6, title: "Feedback Loops", description: "Systems self-regulate; compounding happens through positive loops." },
  { id: 7, title: "Adaptation", description: "Systems that survive modify internal rules based on environmental feedback." },
  { id: 8, title: "Criticality", description: "Peak performance happens at the 'edge of chaos' (Phase Transition)." },
  { id: 9, title: "Fractals", description: "Similar structures recur at different scales (Self-Similarity)." },
  { id: 10, title: "Constraints", description: "Limitations enable action; constraints focus energy where ROI is highest." },
  { id: 11, title: "Irreversibility", description: "Time flows one direction; every month without systems work is permanent loss." }
];

export const VENTURES: ExtendedVenture[] = [
  {
    id: 'enterprise',
    name: "Enterprise Implementation",
    role: "Done-For-You",
    description: "Memory infrastructure deployed for your organization. We build it. You run it. CGS extraction, HIA deployment, full system architecture.",
    color: "brand-blue",
    link: "https://scalewithsearch.com",
    cta: "Book Discovery Call",
    level: "$40K+",
    features: [
      "Full HIA Deployment",
      "Codified Genius Extraction",
      "Local LLM Infrastructure",
      "Compliance Alignment"
    ],
    audience: ["Enterprise Leaders", "Technical CTOs", "Funded Founders"]
  },
  {
    id: 'accelerator',
    name: "Searchable Mind Accelerator",
    role: "Full Stack + Support",
    description: "All six courses plus Skool community, weekly Q&A, and peer review. Paid apprenticeship—watch production systems get built for real clients.",
    color: "suit",
    link: "https://buy.stripe.com/6oU3cu86Ec3a9DubjQ5EY0i",
    cta: "Get Full Access — $7,500",
    level: "Tier 2",
    features: [
      "All 6 Courses (120+ Hours)",
      "Private Skool Community",
      "Weekly Build-In-Public Sessions",
      "Direct Q&A Access"
    ],
    audience: ["Serious Builders", "Consultants", "Agency Owners"]
  },
  {
    id: 'stack',
    name: "Searchable Mind Stack",
    role: "Self-Paced Courses",
    description: "Six courses covering the complete searchable mind architecture. From browser findability to enterprise memory infrastructure.",
    color: "found",
    link: "https://buy.stripe.com/eVq00ifz65EM7vmafM5EY0h",
    cta: "Get All 6 Courses — $3,497",
    level: "Tier 1",
    features: [
      "Claude Code + Obsidian ($350)",
      "Browser OS ($497)",
      "Applied Information + LLM Ops ($1,994)",
      "CGS + HIA ($4,494)"
    ],
    audience: ["Knowledge Workers", "Operators", "Self-Directed Builders"]
  },
  {
    id: 'entry',
    name: "Claude Code + Obsidian",
    role: "Flagship Entry",
    description: "One file builds the system. Drop a markdown file in Obsidian, run Claude Code, walk away with searchable memory infrastructure.",
    color: "browser-os",
    link: "https://buy.stripe.com/cNi28qev28QYeXOdrY5EY0p",
    cta: "Get Started — $350",
    level: "Entry",
    features: [
      "90-Minute Build Video",
      "12 Pre-Configured Folders",
      "CLAUDE.md Master Context",
      "15+ Prompt Templates"
    ],
    audience: ["Note-Takers", "Operators", "AI-Curious"]
  }
];

export const SKILLS_DATA: SkillData[] = [
  { subject: 'Database Arch', A: 99, fullMark: 100 },
  { subject: 'RevOps', A: 95, fullMark: 100 },
  { subject: 'Inside Sales', A: 90, fullMark: 100 },
  { subject: 'Local LLMs', A: 92, fullMark: 100 },
  { subject: 'Semantic SEO', A: 95, fullMark: 100 },
  { subject: 'Crisis Mgmt', A: 100, fullMark: 100 },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Inside Sales Database & Client Relations Manager",
    company: "The Jim Allen Group",
    period: "Nov 2025 - Present",
    location: "Raleigh, NC",
    points: [
      "[CONFIDENTIAL] Architecting the revenue infrastructure for the Jim Allen Group.",
      "Leading technical strategy for Inside Sales, transforming the database into a self-correcting asset.",
      "Engineering precise lead routing logic and enforcing absolute data integrity.",
      "Building automated re-engagement engines that recover dormant pipeline.",
      "Serving as the technical bridge between Sales and Marketing for algorithmic efficiency."
    ]
  },
  {
    role: "Founder & Architect",
    company: "Scale With Search",
    period: "2024 - Present",
    location: "Raleigh, NC",
    points: [
      "Building memory infrastructure that turns scattered information into searchable intelligence.",
      "Created the Searchable Mind Stack: 6 courses, 77 modules, 120+ hours of technical content.",
      "Deploying Claude Code + Obsidian systems for knowledge workers and enterprise clients."
    ]
  },
  {
    role: "Head of SEO",
    company: "Grey Matter",
    period: "2022 - 2024",
    location: "Remote",
    points: [
      "Managed organic search strategy for 147 concurrent entities.",
      "Audited and resolved technical debt at enterprise scale (250k+ errors fixed).",
      "Implemented AI-driven content workflows increasing output by 3x."
    ]
  },
  {
    role: "Co-Founder & COO",
    company: "FOUND",
    period: "2020 - Present",
    location: "Raleigh, NC",
    points: [
      "Drove 2,700% increase in annual revenue (2023-2024) by personally securing 90% of new clients.",
      "Established scalable AI processes which increased high-value keyword clicks by 1,400% within 12 months.",
      "Applied strategies across 20+ industries (Brick & Mortar, B2B) demonstrating adaptability in volatile markets."
    ]
  },
  {
    role: "Growth Consultant",
    company: "Ideamarket / AFF",
    period: "2020 - 2022",
    location: "Remote",
    points: [
      "Targeted entity optimization and content repurposing for pre-AI organic growth.",
      "Achieved 2.5x rank lift and 80% event growth.",
      "Developed strategies for decentralized information markets."
    ]
  },
  {
    role: "Crisis Architect",
    company: "Confidential Agency",
    period: "2019 - 2020",
    location: "Raleigh, NC",
    points: [
      "Rebuilt collapsed agency infrastructure after major fraud event.",
      "Restored client trust and operational stability during 'The Crucible'.",
      "Forged reputation as 'The Fixer' through crisis management."
    ]
  },
  {
    role: "Marketing Supervisor",
    company: "Cobra Carbide",
    period: "2017 - 2019",
    location: "Riverside, CA",
    points: [
      "Transformed legacy manufacturing sales processes.",
      "Implemented email automation and Amazon FBA optimization.",
      "Drove 7-figure revenue growth in 18-month sprint through automation."
    ]
  },
  {
    role: "SEO Specialist",
    company: "Third Eye SEO",
    period: "2013 - 2017",
    location: "Inland Empire, CA",
    points: [
      "Manual entry into search algorithms and semantic content creation.",
      "Optimized 20+ WP sites and wrote 450k words of content.",
      "Developed foundational knowledge of search engine mechanisms."
    ]
  },
  {
    role: "Director of Acoustic Systems",
    company: "Freelance Musician",
    period: "2008 - 2018",
    location: "Southern California",
    points: [
      "Orchestrated logistics and performance for 100+ shows across LA, San Diego, and Inland Empire.",
      "Systematized music theory pedagogy for 55+ students (25 children, 15 adults, 15 trombonists).",
      "Executed 'Immersion Protocol' to self-teach piano architecture while operating as a Classically-Trained Trombonist."
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "REPUTATION_LOG_001",
    quote: "Victor has upgraded everything he's touched, including my business. I'm on track to the best-performing year in Real Estate after 18 years in the industry. I've officially been \"VIC'D\", a term I coined after seeing him successfully transform multiple businesses.",
    author: "Tim Clarke, Realtor",
    role: "President, TMC Team",
    context: "BUSINESS_UPGRADE"
  },
  {
    id: "REPUTATION_LOG_002",
    quote: "I've worked with Victor for many years, and I don't know anyone better at SEO... and I've looked. Victor is an absolute wizard and I have on multiple occasions referred him to clients who said, 'I'm great at SEO, I don't need help...' ...they all hired him.",
    author: "Garret Dailey",
    role: "Founder, Lucid Consulting",
    context: "AUTHORITY_VERIFICATION"
  },
  {
    id: "REPUTATION_LOG_003",
    quote: "Victor is an energy magnet and artist. He is easy to connect with and definitely has a level of integrity that is uncommon. Just speaking with him catalyzed my own awareness of my voice and mission.",
    author: "Taylor Burrowes, PhD",
    role: "The Vetting Specialist",
    context: "INTEGRITY_CATALYST"
  },
  {
    id: "REPUTATION_LOG_004",
    quote: "He's the best SEO in the game. Certified Abrasive.",
    author: "Shane Hunter",
    role: "The Abrasive Entrepreneur",
    context: "PEER_RECOGNITION"
  },
  {
    id: "REPUTATION_LOG_005",
    quote: "Vic is one of the smartest people I know. His systems have helped my company grow beyond expectation. This guy knows more information about stuff than any one person has a right knowing. Work with him!",
    author: "Frank Marina",
    role: "Pro-Choice Contractors",
    context: "SYSTEMS_GROWTH"
  },
  {
    id: "REPUTATION_LOG_006",
    quote: "Vic is a master at SEO and a wizard with no-code automations. He is a BEAST at training new team members to be independent profit-makers at marketing agencies within weeks, as he's an awesome teacher.",
    author: "John Giuffre",
    role: "Founder, Logos Productions",
    context: "AUTOMATION_MASTERY"
  },
  {
    id: "REPUTATION_LOG_007",
    quote: "Vic thoroughly analyzed my site's technical SEO issues that had been frustrating me for years and provided clear, practical solutions to fix them. I'm very happy with the time spent working with him.",
    author: "Jonathan Pritchard",
    role: "Business Consultant",
    context: "TECHNICAL_ANALYSIS"
  },
  {
    id: "REPUTATION_LOG_008",
    quote: "Vic is the kind of guy you can say 'I have a problem, figure out how to solve it' — and he will. He’s familiar with a wide variety of tools & capable of weaving them into complex automated systems.",
    author: "Mike Elias",
    role: "Founder, Ideamarket",
    context: "PROBLEM_SOLVING"
  },
  {
    id: "REPUTATION_LOG_009",
    quote: "Vic gave me clear, actionable SEO advice in just 30 minutes that has already helped boost my website traffic. I went from struggling to understand SEO to having a much stronger grasp and a plan to improve my site.",
    author: "Asad Chisty",
    role: "Founder, DailyBeat",
    context: "STRATEGIC_CLARITY"
  },
  {
    id: "REPUTATION_LOG_010",
    quote: "I've heard that Substack is one of the most difficult platforms to optimize for search engines. And that's 100% true until you reach out to Vic. He helped me get everything squared away in less than an hour.",
    author: "Jeff Putnam",
    role: "Writer, The Converted Catholic",
    context: "PLATFORM_OPTIMIZATION"
  }
];

export const INDUSTRIES_DATA: IndustrySector[] = [
  {
    id: "SEC_01",
    sector: "Industrial & Manufacturing",
    description: "Complex B2B sales cycles, technical specification catalogs, and global supply chain logistics.",
    clients: [
      "AAA Test Labs", "Adrian Steel", "Advanced Work Vans", "Ansell Limited", "Baker Industries", 
      "Clear Packaging", "Cobra Carbide", "Consolidated Machinery Movers", "Crewsafe", "Custom-Bilt Metals", 
      "Dexter Magnetic", "Duggan Inc", "Edlong", "Elk River", "EMF", "Enervise", "Epotek", "Epoxies Inc", 
      "Extendobed", "Faztek", "First Choice Packaging", "Forge USA", "Freewave", "Gearheart Industries", 
      "GPRS", "Integra", "KE2Therm Solutions", "Kerper-Bowron", "Kimball Midwest", "Master Appliance", 
      "Midwest Bale Ties", "Miller Environmental Group", "MM Manufacturing", "Monti Inc", "MuM Industries", 
      "NEFM", "New England Cold Storage", "NIA", "OMNI Technologies", "Onyx Specialty Papers", 
      "Orange Aluminum", "Plastech Fabrication", "Plastech Molding", "Power Electronics", 
      "Protective Packaging", "Seaman Paper", "SOMIC", "Stop Stick", "Stout Buckets", "SupplyOne", 
      "Technipaq", "TSL Graphics", "USBid", "Visser Precision", "WB Parts", "Western States Machine"
    ]
  },
  {
    id: "SEC_02",
    sector: "Enterprise SaaS & Technology",
    description: "High-velocity diverse markets requiring distinct competitive moats and authoritative documentation.",
    clients: [
      "Accresa", "Agilian", "Amtech", "Ascribe", "Atonix Digital", "Axseter Systems", "Brightskull", "Brij", 
      "Bureau.id", "Callminer", "Catalyst", "Cloud Carib", "Cloverleaf", "Crux Intelligence", "Data Slide", 
      "Digital Prism", "Faye Digital", "Firemon", "Green Irony", "Grey Matter", "iReportSource", "JUMO", 
      "MAD Security", "Nextup", "Pando", "Recurate", "RISCPoint", "RTA Fleet", "Seven Hills Tech", 
      "Stride", "The UP App", "Trinity Online", "Unbabel", "UX Cabin", "ValidSoft", "VirtuallyIncredible", 
      "Voyager Labs", "Wondersign", "Zing Hub"
    ]
  },
  {
    id: "SEC_03",
    sector: "Healthcare & Life Sciences",
    description: "YMYL (Your Money Your Life) sensitive sectors requiring absolute semantic accuracy and trust.",
    clients: [
      "CarePro Funding", "ClinLab Staffing", "Cryo Body Works", "General Bandage", "Happi Tummi", 
      "Hydrate Pure", "Ke'ale Chiro HON", "Life Sci KY", "Limitless Chiro", "Providence Enterprise", 
      "Q Laboratories", "Rubric Bio", "Service Care", "Solace Showers", "SpineDoctor"
    ]
  },
  {
    id: "SEC_04",
    sector: "Construction & Skilled Trades",
    description: "Local dominance and service-area businesses (SABs) requiring geo-spatial optimization.",
    clients: [
      "Able1", "Above Roofing", "Blake Interiors", "Concrete Design Services", "Current Home", 
      "Frazier Architecture", "ICS", "Lux Clean", "Max Roofer ATX", "Pro Choice Contractors", 
      "Raleigh Janitorial", "REM+ARQ", "Smart Roofs Solar", "Valley Welding", "WOGFC"
    ]
  },
  {
    id: "SEC_05",
    sector: "Finance & Professional Services",
    description: "High-ticket service providers leveraging authority to drive qualified lead generation.",
    clients: [
      "2 Fair Market Value", "ADEX Int'l", "Advisicon", "AMZ Atlas", "AO Fund", "ArcherHall", "Astound Group", 
      "Bold Type", "BoXD", "Brandience", "Bright Balance", "Budget Guard", "CityRanked", "Content That Connects", 
      "CREF", "Crunch Consult", "Cultivate", "Epipheo", "Express Freight Finance", "First Financial", 
      "Four Pillars Investors", "ICON Marketing", "J Hensley Consulting", "Josh Lawyer Austin", 
      "Legal Bill Review", "Lighthouse Global", "NBI", "NC Bail Bonds", "Nolan & Cunnings", "On Display", 
      "Positivity Project", "Profit Frog", "RJ Young", "Search Team", "Sica Fletcher", "SMG", "Teams & Co", 
      "Truck Lenders USA", "Vaya Group", "WealthPrime", "Wealthquest", "Wise Investigator", "Young & Associates"
    ]
  },
  {
    id: "SEC_06",
    sector: "Consumer, Media & Lifestyle",
    description: "High-volume B2C entities requiring brand affinity, rapid indexing, and audience capture.",
    clients: [
      "712 Vodka", "Abuzari Fragrances", "AlPayPerCrawl", "Backyard Dog Agility", "Boomer Proof AI", 
      "Budlyft", "Catholic Convert", "Daily Beat", "Entertainment Rewards", "Farewell", "Festivities UC", 
      "Find-a-Rep", "Fish Lodges", "Heather Habets", "I Love Bicycling", "Lars Mapstead", "Less is Moor", 
      "Magazine Jukebox", "Mapping My Mind", "Pretty Odd Curiosities", "Reward Builders", "Shroomspy", 
      "Tattoo Remove Near", "The Riff Company", "Tread Athletics", "Unreal AI", "Whitsons", "WLS Concierge", 
      "Wolf Fit", "Woven & Friends"
    ]
  }
];

export const TECH_STACK = [
  {
    category: "Local Inference (Edge)",
    tools: ["Llama 3.3 70B", "DeepSeek R1", "Qwen 2.5", "Ollama"],
    desc: "Privacy-first reasoning on Apple Silicon M4 Pro. Zero data egress for sensitive operations."
  },
  {
    category: "Cloud Reasoning (Scale)",
    tools: ["Claude Opus 4.5", "Gemini 2.0 Flash", "GPT-4o", "Perplexity Pro"],
    desc: "Frontier models for complex synthesis, citation-backed research, and multi-modal analysis."
  },
  {
    category: "Knowledge Infrastructure",
    tools: ["Obsidian (Graph)", "Supabase (pgvector)", "Google Apps Script", "Workona"],
    desc: "Dense backlink graphs, vector search, and browser-based operating systems."
  },
  {
    category: "Agentic Orchestration",
    tools: ["Claude Code", "n8n (Self-Hosted)", "Make.com", "Wispr Flow"],
    desc: "CLI-first agent workflows, voice-to-text automation, and multi-step task execution."
  }
];