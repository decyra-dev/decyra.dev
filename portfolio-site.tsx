import { useState, useEffect, useRef } from "react";
import {
  Sun, Moon, Menu, X, Github, Linkedin, Youtube, BookOpen, Mail, Download,
  ArrowRight, ExternalLink, Award, Briefcase, Code2, Cpu, Cloud, Database,
  Sparkles, GraduationCap, Mic, Users, Star, Search, Play, MapPin, Calendar,
  ChevronRight, ChevronLeft, Quote, Send, CheckCircle2, Phone
} from "lucide-react";

function useTheme() {
  const [dark, setDark] = useState(true);
  return [dark, setDark];
}

/* ---------------- REAL DATA (from resume) ---------------- */
const PROFILE = {
  name: "Mukund Kumar Mishra",
  title: "Principal Enterprise Data & AI Architect",
  tagline: "Snowflake · Microsoft Fabric · Azure · Databricks · AI-Enabled Data Platforms",
  email: "thisismukund@gmail.com",
  phone: "+91 9765902645",
  linkedin: "https://www.linkedin.com/in/mukundkumarmishra/",
  youtube: "TechMindByMukundKumar",
  initials: "MM",
};

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "architecture", label: "Architecture" },
  { id: "publications", label: "Publications" },
  { id: "speaking", label: "Speaking" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

const SKILLS = [
  { cat: "Enterprise Architecture", icon: Sparkles, items: ["Enterprise Data Architecture", "Lakehouse Architecture", "DW Modernization", "Cloud Migration Strategy", "Governance & Compliance", "Semantic Modeling"] },
  { cat: "Cloud & Data Platforms", icon: Cloud, items: ["Snowflake", "Microsoft Fabric (OneLake)", "Azure", "AWS", "Databricks", "Delta Lake", "Azure Data Factory"] },
  { cat: "Data Engineering & Processing", icon: Code2, items: ["Python", "PySpark", "Hadoop Ecosystem", "Hive", "ETL / ELT", "Distributed Processing", "Analytics Engineering"] },
  { cat: "AI-Enabled Platforms", icon: Cpu, items: ["RAG Architecture", "LangChain", "LangGraph", "CrewAI", "Azure OpenAI", "GPT Models", "ChromaDB", "AI Agent Workflows"] },
  { cat: "Analytics & Visualization", icon: Database, items: ["Power BI", "Tableau", "Enterprise Reporting", "Dashboarding", "Self-Service Analytics"] },
];

const EXPERIENCE = [
  {
    role: "Microsoft Fabric | Data & AI Architecture",
    company: "Freelance / Independent Consultant",
    period: "Apr 2026 — Present",
    desc: "Designing a Microsoft Fabric-based lakehouse architecture on OneLake, building end-to-end medallion (Bronze/Silver/Gold) pipelines, modernizing legacy warehouse workloads into Fabric-native components, and preparing AI-ready data architecture for RAG-based enterprise use cases.",
    tags: ["Microsoft Fabric", "OneLake", "Delta Lake", "Power BI", "PySpark"],
  },
  {
    role: "Principal Architect – Data & Cloud",
    company: "Infosys Limited",
    period: "Oct 2020 — Mar 2026",
    desc: "Led enterprise architecture for Snowflake and Microsoft Fabric lakehouse modernization across BFSI clients. Drove DW-to-lakehouse transformation, defined governance frameworks and cloud adoption strategy, ran CXO-level architecture workshops, and enabled enterprise AI integration using RAG, vector databases, and LLM orchestration.",
    tags: ["Snowflake", "Microsoft Fabric", "Azure", "AWS", "Databricks", "Azure OpenAI"],
  },
  {
    role: "Senior Architect – Azure & Snowflake",
    company: "Bizmetric · Client: Murphy Oil",
    period: "Sep 2019 — Aug 2020",
    desc: "Led architecture and implementation strategy for enterprise analytics modernization using Snowflake on Azure, designing scalable reporting platforms and governed analytics solutions, with ETL/ELT integration frameworks built on Azure Data Factory.",
    tags: ["Snowflake", "Azure", "ADF", "Databricks"],
  },
  {
    role: "Solution Architect – Data Platforms",
    company: "TSYS",
    period: "Jan 2018 — Aug 2019",
    desc: "Architected enterprise data lake and analytics platforms for mission-critical payment processing and compliance-driven reporting, using PySpark and Hadoop ecosystem technologies for distributed processing.",
    tags: ["PySpark", "Hadoop", "Hive", "Data Lake"],
  },
  {
    role: "Technical Architect",
    company: "Larsen & Toubro Infotech (LTI) · Clients: Liberty Life, CBDT (Govt. of India)",
    period: "Aug 2015 — Dec 2017",
    desc: "Designed enterprise-scale analytics platforms for insurance and government transformation programs, including contributing to Project Insight — a national-scale tax intelligence and compliance analytics initiative for CBDT.",
    tags: ["Spark", "Hadoop", "Hive", "Enterprise Analytics"],
  },
  {
    role: "Solution Architect – BI COE",
    company: "Zensar Technologies",
    period: "Feb 2008 — Aug 2015",
    desc: "Led enterprise BI, analytics, and data warehousing initiatives across multiple clients, delivering scalable reporting platforms and contributing to analytics modernization and standardization programs.",
    tags: ["Data Warehousing", "ETL", "Tableau", "Power BI"],
  },
];

const PROJECTS = [
  {
    title: "AI-Driven Commerce Assistant (POC)",
    tag: "AI-Enabled Platforms",
    summary: "An AI-enabled commerce assistant using multi-agent orchestration for intelligent product discovery and workflow automation, with a RAG architecture grounded on a Chroma vector database.",
    stack: ["LangChain", "LangGraph", "CrewAI", "ChromaDB", "Azure OpenAI"],
    outcome: "Demonstrated governed enterprise data access combined with LLM-powered contextual workflows",
  },
  {
    title: "Microsoft Fabric Lakehouse Modernization",
    tag: "Lakehouse & Cloud",
    summary: "End-to-end medallion architecture (Bronze/Silver/Gold) on Microsoft Fabric OneLake, migrating legacy warehouse workloads into Fabric-native Data Factory, Notebooks, Lakehouse and Warehouse components.",
    stack: ["Microsoft Fabric", "OneLake", "Delta Lake", "Power BI", "PySpark"],
    outcome: "Unified data storage and analytics consumption with governed, semantic-modeled reporting",
  },
  {
    title: "Enterprise Snowflake & Fabric Transformation (BFSI)",
    tag: "Lakehouse & Cloud",
    summary: "Architecture leadership for Snowflake and Microsoft Fabric-based lakehouse modernization and analytics transformation across BFSI clients at Infosys, including DW-to-lakehouse migration and governance frameworks.",
    stack: ["Snowflake", "Microsoft Fabric", "Azure", "AWS", "Databricks"],
    outcome: "CXO-aligned modernization roadmap with enterprise AI integration patterns",
  },
  {
    title: "Project Insight — National Tax Intelligence Platform",
    tag: "Government & Compliance",
    summary: "Contributed to the architecture of Project Insight, a national-scale analytics initiative for CBDT (Government of India), supporting tax intelligence and compliance analytics using distributed Spark/Hadoop processing.",
    stack: ["Spark", "Hadoop", "Hive", "Enterprise Reporting"],
    outcome: "Scalable analytics framework supporting national compliance-driven governance",
  },
  {
    title: "Enterprise Analytics Modernization — Murphy Oil",
    tag: "Lakehouse & Cloud",
    summary: "Designed scalable, cloud-native analytics and reporting platforms on Snowflake and Azure for enterprise business intelligence and modernization objectives.",
    stack: ["Snowflake", "Azure", "Azure Data Factory"],
    outcome: "Secure, governed analytics aligned to enterprise BI strategy",
  },
  {
    title: "Payments Data Lake & Compliance Reporting",
    tag: "Data Engineering",
    summary: "Distributed data processing solution for mission-critical payment processing workloads at TSYS, enabling modernized operational and regulatory reporting.",
    stack: ["PySpark", "Hadoop", "Hive"],
    outcome: "High-performance architecture supporting operational and regulatory reporting at scale",
  },
];

const ARCHITECTURES = [
  { title: "Microsoft Fabric Medallion Architecture", desc: "Bronze/Silver/Gold OneLake lakehouse design pattern with semantic modeling and governed Power BI consumption." },
  { title: "Enterprise RAG & Agentic Reference Pattern", desc: "Retrieval-Augmented Generation architecture using vector databases (ChromaDB), LangChain/LangGraph orchestration, and CrewAI multi-agent workflows." },
  { title: "Snowflake + Azure Lakehouse Modernization", desc: "Cloud-native warehouse-to-lakehouse migration pattern combining Snowflake, ADF, and Databricks for enterprise analytics." },
  { title: "Distributed Compliance Analytics Platform", desc: "Spark/Hadoop-based data lake architecture supporting national-scale, compliance-driven analytics workloads." },
];

const CERTS = [
  "Microsoft Certified: Azure Solutions Architect",
  "Certified Scrum Master (CSM)",
  "Certified Scrum Product Owner (CSPO)",
  "SAFe PO/PM",
];

const PUBLICATIONS = [
  { title: "Generative AI for Developers: Practical Implementation", type: "Course Author", venue: "Udemy" },
  { title: "Practical Apache Spark Using Scala API", type: "Technical Reviewer", venue: "Published Book" },
  { title: "Articles on AI, Big Data, Cloud Computing & Enterprise Analytics", type: "Published Articles", venue: "Various technical platforms" },
  { title: "TechMindByMukundKumar", type: "YouTube Channel", venue: "Technical content on AI, Data & Cloud" },
];

const SPEAKING = [
  { title: "Snowflake & Enterprise Analytics", event: "NASSCOM Webinar", type: "Webinar" },
  { title: "Google / Infosys Reimagine 2023 Hackathon", event: "Recognized Participant", type: "Recognition" },
];

const GALLERY_NOTE = "Photo gallery placeholder — replace with real event, speaking, and workshop photographs.";
const GALLERY = [
  "NASSCOM Webinar Session",
  "Infosys Reimagine Hackathon",
  "Architecture Workshop",
  "Client Engagement",
  "Team Mentoring",
  "Conference Networking",
];

/* ---------------- SMALL COMPONENTS ---------------- */
function SectionTitle({ eyebrow, title, sub }) {
  return (
    <div className="max-w-3xl mb-12">
      <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-violet-500 dark:text-violet-400 mb-3">
        <span className="h-px w-6 bg-violet-500 dark:bg-violet-400" />
        {eyebrow}
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h2>
      {sub && <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg">{sub}</p>}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="px-3 py-1 rounded-full text-xs font-medium bg-violet-100 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300 border border-violet-200 dark:border-violet-500/20">
      {children}
    </span>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] backdrop-blur-sm hover:border-violet-300 dark:hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10 ${className}`}>
      {children}
    </div>
  );
}

/* ---------------- MAIN ---------------- */
export default function Portfolio() {
  const [dark, setDark] = useTheme();
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [formSent, setFormSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -50% 0px" }
    );
    Object.values(sectionRefs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    setNavOpen(false);
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  const filteredProjects = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);
  const projectTags = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.tag)))];

  const searchableItems = [
    ...PROJECTS.map((p) => ({ title: p.title, _type: "Project" })),
    ...PUBLICATIONS.map((p) => ({ title: p.title, _type: "Publication" })),
    ...EXPERIENCE.map((e) => ({ title: e.role + " — " + e.company, _type: "Experience" })),
  ];
  const searchResults = search ? searchableItems.filter((i) => i.title.toLowerCase().includes(search.toLowerCase())) : [];

  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-slate-50 dark:bg-[#0a0a14] text-slate-900 dark:text-slate-100 min-h-screen font-sans relative transition-colors duration-300">
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-500/20 dark:bg-violet-600/20 rounded-full blur-[100px]" />
          <div className="absolute top-[40%] right-[-10%] w-[35%] h-[35%] bg-indigo-500/15 dark:bg-indigo-600/20 rounded-full blur-[100px]" />
        </div>

        {/* NAVBAR */}
        <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-white/80 dark:bg-[#0a0a14]/80 border-b border-slate-200 dark:border-white/10" : ""}`}>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
            <button onClick={() => scrollTo("home")} className="font-bold text-lg tracking-tight flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-sm">{PROFILE.initials}</span>
              <span className="hidden sm:inline">{PROFILE.name}</span>
            </button>
            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${active === n.id ? "text-violet-600 dark:text-violet-400" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`}>
                  {n.label}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <button onClick={() => setDark(!dark)} className="p-2 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors" aria-label="Toggle theme">
                {dark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button className="lg:hidden p-2 rounded-lg border border-slate-200 dark:border-white/10" onClick={() => setNavOpen(!navOpen)}>
                {navOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
          {navOpen && (
            <div className="lg:hidden bg-white dark:bg-[#0a0a14] border-b border-slate-200 dark:border-white/10 px-5 py-4 flex flex-col gap-1">
              {NAV.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-sm font-medium">
                  {n.label}
                </button>
              ))}
            </div>
          )}
        </header>

        {/* HERO */}
        <section id="home" ref={(el) => (sectionRefs.current.home = el)} className="pt-32 pb-24 px-5 sm:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-500/30 bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 text-sm font-medium mb-6">
                <Sparkles size={14} /> {PROFILE.title}
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1]">
                Architecting{" "}
                <span className="bg-gradient-to-r from-violet-500 via-indigo-500 to-violet-400 bg-clip-text text-transparent">
                  Enterprise Data & AI
                </span>{" "}
                at Scale
              </h1>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-xl">
                18+ years delivering enterprise-scale cloud data modernization, lakehouse transformation, and AI-enabled platform solutions across BFSI, Payments, Manufacturing, and Government sectors.
              </p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">{PROFILE.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => scrollTo("projects")} className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/30">
                  View My Work <ArrowRight size={16} />
                </button>
                <button onClick={() => scrollTo("contact")} className="px-6 py-3 rounded-xl border border-slate-300 dark:border-white/15 font-medium hover:bg-slate-100 dark:hover:bg-white/5 transition-colors flex items-center gap-2">
                  <Download size={16} /> Download Resume
                </button>
              </div>
              <div className="mt-10 flex gap-8 text-sm">
                {[["18+", "Years Experience"], ["6", "Enterprise Employers/Engagements"], ["BFSI · Govt · Manufacturing", "Sectors Served"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="text-xl font-bold text-violet-600 dark:text-violet-400">{n}</div>
                    <div className="text-slate-500 dark:text-slate-500 text-xs">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-200 dark:border-white/10 flex items-center justify-center overflow-hidden">
                <div className="w-4/5 h-4/5 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                  {PROFILE.initials}
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-[#10101e] border border-slate-200 dark:border-white/10 rounded-xl p-4 shadow-xl flex items-center gap-3">
                <CheckCircle2 className="text-violet-500" size={20} />
                <div className="text-sm">
                  <div className="font-semibold">Azure Solutions Architect</div>
                  <div className="text-slate-500 text-xs">Microsoft Certified</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEARCH */}
        <section className="px-5 sm:px-8 max-w-2xl mx-auto -mt-4 mb-16 relative z-10">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search projects, publications, experience..." className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm" />
          </div>
          {search && (
            <div className="mt-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#10101e] shadow-xl divide-y divide-slate-100 dark:divide-white/5 overflow-hidden">
              {searchResults.length === 0 ? (
                <div className="p-4 text-sm text-slate-500">No results found.</div>
              ) : (
                searchResults.map((r, i) => (
                  <div key={i} className="p-3 text-sm flex justify-between items-center">
                    <span>{r.title}</span>
                    <Pill>{r._type}</Pill>
                  </div>
                ))
              )}
            </div>
          )}
        </section>

        {/* ABOUT */}
        <section id="about" ref={(el) => (sectionRefs.current.about = el)} className="py-20 px-5 sm:px-8 max-w-7xl mx-auto">
          <SectionTitle eyebrow="About Me" title="Professional Summary" />
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="p-6 lg:col-span-2">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Principal Enterprise Data & AI Architect with 18+ years of experience delivering enterprise-scale cloud data modernization, lakehouse transformation, analytics engineering, and AI-enabled platform solutions across BFSI, Payments, Manufacturing, and Government sectors. Expertise in architecting modern enterprise data ecosystems using Snowflake, Microsoft Fabric, Azure, AWS, Databricks, Python, PySpark, Azure Data Factory, and distributed data platforms.
              </p>
              <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                Proven track record leading enterprise architecture initiatives focused on cloud migration, data warehouse modernization, governance, compliance, semantic modeling, and CXO-level strategic technology roadmaps. Hands-on expertise designing AI-enabled enterprise platforms leveraging RAG, vector databases, LLM integrations, and multi-agent orchestration supporting contextual analytics and intelligent business workflows.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2"><Award size={18} className="text-violet-500" /> Thought Leadership</h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex gap-2"><Star size={14} className="text-violet-400 mt-0.5 shrink-0" />Speaker — NASSCOM Webinar on Snowflake & Enterprise Analytics</li>
                <li className="flex gap-2"><Star size={14} className="text-violet-400 mt-0.5 shrink-0" />Technical Reviewer — Practical Apache Spark Using Scala API</li>
                <li className="flex gap-2"><Star size={14} className="text-violet-400 mt-0.5 shrink-0" />Course Author — Generative AI for Developers (Udemy)</li>
                <li className="flex gap-2"><Star size={14} className="text-violet-400 mt-0.5 shrink-0" />Recognized — Google / Infosys Reimagine 2023 Hackathon</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" ref={(el) => (sectionRefs.current.experience = el)} className="py-20 px-5 sm:px-8 max-w-7xl mx-auto">
          <SectionTitle eyebrow="Career Journey" title="Professional Experience" />
          <div className="relative pl-8 border-l-2 border-violet-200 dark:border-violet-500/20 space-y-10">
            {EXPERIENCE.map((e, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-violet-500 ring-4 ring-violet-100 dark:ring-violet-500/10" />
                <Card className="p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2">
                    <Calendar size={12} /> {e.period}
                  </div>
                  <h3 className="font-semibold text-lg">{e.role}</h3>
                  <div className="text-violet-600 dark:text-violet-400 text-sm font-medium mb-2 flex items-center gap-1"><Briefcase size={13} /> {e.company}</div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">{e.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {e.tags.map((t) => <span key={t} className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400">{t}</span>)}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" ref={(el) => (sectionRefs.current.skills = el)} className="py-20 px-5 sm:px-8 max-w-7xl mx-auto">
          <SectionTitle eyebrow="Expertise" title="Core Competencies" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILLS.map((s) => (
              <Card key={s.cat} className="p-6">
                <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-500/10 flex items-center justify-center mb-4">
                  <s.icon size={20} className="text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="font-semibold mb-3">{s.cat}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((it) => <Pill key={it}>{it}</Pill>)}
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <h3 className="font-semibold mb-4 flex items-center gap-2"><Award size={18} className="text-violet-500" />Certifications</h3>
            <div className="flex flex-wrap gap-3">
              {CERTS.map((c) => (
                <div key={c} className="px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-sm flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-violet-500" /> {c}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" ref={(el) => (sectionRefs.current.projects = el)} className="py-20 px-5 sm:px-8 max-w-7xl mx-auto">
          <SectionTitle eyebrow="Portfolio" title="Projects & Case Studies" sub="Enterprise engagements spanning lakehouse modernization, AI platforms, and large-scale compliance analytics." />
          <div className="flex flex-wrap gap-2 mb-8">
            {projectTags.map((t) => (
              <button key={t} onClick={() => setFilter(t)} className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${filter === t ? "bg-violet-600 text-white border-violet-600" : "border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-violet-400"}`}>
                {t}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {filteredProjects.map((p) => (
              <Card key={p.title} className="p-6">
                <Pill>{p.tag}</Pill>
                <h3 className="font-semibold text-lg mt-3 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{p.summary}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.stack.map((s) => <span key={s} className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400">{s}</span>)}
                </div>
                <div className="text-sm font-medium text-violet-600 dark:text-violet-400 flex items-center gap-2">
                  <CheckCircle2 size={14} /> {p.outcome}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE GALLERY */}
        <section id="architecture" ref={(el) => (sectionRefs.current.architecture = el)} className="py-20 px-5 sm:px-8 max-w-7xl mx-auto">
          <SectionTitle eyebrow="Technical Deep Dive" title="AI & Data Architecture Patterns" />
          <div className="grid sm:grid-cols-2 gap-6">
            {ARCHITECTURES.map((a) => (
              <Card key={a.title} className="p-6 flex gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center shrink-0">
                  <Database className="text-violet-500" size={26} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{a.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{a.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* PUBLICATIONS */}
        <section id="publications" ref={(el) => (sectionRefs.current.publications = el)} className="py-20 px-5 sm:px-8 max-w-7xl mx-auto">
          <SectionTitle eyebrow="Knowledge Sharing" title="Publications, Courses & Content" />
          <div className="grid sm:grid-cols-2 gap-5">
            {PUBLICATIONS.map((p) => (
              <Card key={p.title} className="p-5 flex items-start gap-3">
                <BookOpen size={18} className="text-violet-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">{p.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{p.type} · {p.venue}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* SPEAKING */}
        <section id="speaking" ref={(el) => (sectionRefs.current.speaking = el)} className="py-20 px-5 sm:px-8 max-w-7xl mx-auto">
          <SectionTitle eyebrow="Engagements" title="Speaking & Recognition" />
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {SPEAKING.map((s) => (
              <Card key={s.title} className="p-6">
                <Mic size={20} className="text-violet-500 mb-3" />
                <Pill>{s.type}</Pill>
                <h3 className="font-semibold mt-3 mb-1">{s.title}</h3>
                <p className="text-sm text-slate-500">{s.event}</p>
              </Card>
            ))}
          </div>
          <Card className="p-6 flex items-center gap-4">
            <Youtube className="text-violet-500 shrink-0" size={28} />
            <div>
              <h3 className="font-semibold">{PROFILE.youtube}</h3>
              <p className="text-sm text-slate-500">YouTube channel — technical content on AI, Data & Cloud. Embed your latest video here once you share the link.</p>
            </div>
          </Card>
        </section>

        {/* GALLERY */}
        <section id="gallery" ref={(el) => (sectionRefs.current.gallery = el)} className="py-20 px-5 sm:px-8 max-w-7xl mx-auto">
          <SectionTitle eyebrow="Moments" title="Photo Gallery" sub={GALLERY_NOTE} />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {GALLERY.map((g, i) => (
              <div key={i} className="aspect-square rounded-2xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-slate-200 dark:border-white/10 flex items-center justify-center text-center p-4 text-sm text-slate-500 dark:text-slate-400 hover:scale-[1.02] transition-transform">
                {g}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" ref={(el) => (sectionRefs.current.contact = el)} className="py-20 px-5 sm:px-8 max-w-7xl mx-auto">
          <SectionTitle eyebrow="Get In Touch" title="Let's Build Something Together" sub="Open to enterprise architecture consulting, speaking engagements, and advisory roles." />
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8">
              {formSent ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="mx-auto text-violet-500 mb-3" size={36} />
                  <p className="font-medium">Thanks! Your message has been sent.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <input placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm" />
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm" />
                  <input placeholder="Subject" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm" />
                  <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm" />
                  <button onClick={() => setFormSent(true)} className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium flex items-center justify-center gap-2 hover:opacity-90">
                    <Send size={16} /> Send Message
                  </button>
                </div>
              )}
            </Card>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Contact Details</h3>
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 hover:text-violet-500"><Mail size={16} className="text-violet-500" /> {PROFILE.email}</a>
                  <div className="flex items-center gap-2"><Phone size={16} className="text-violet-500" /> {PROFILE.phone}</div>
                  <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-violet-500"><Linkedin size={16} className="text-violet-500" /> linkedin.com/in/mukundkumarmishra</a>
                </div>
                <div className="flex gap-3 mt-5">
                  {[Linkedin, Youtube, Github, BookOpen].map((Icon, i) => (
                    <a key={i} href="#" className="p-3 rounded-xl border border-slate-200 dark:border-white/10 hover:border-violet-400 hover:text-violet-500 transition-colors">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2"><Mail size={16} className="text-violet-500" /> Newsletter</h3>
                <p className="text-sm text-slate-500 mb-4">Get insights on Enterprise AI, Microsoft Fabric, and Cloud Data Architecture.</p>
                <div className="flex gap-2">
                  <input placeholder="you@email.com" className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
                  <button className="px-4 py-2.5 rounded-xl bg-violet-600 text-white text-sm font-medium hover:opacity-90">Subscribe</button>
                </div>
              </Card>
              <Card className="p-6 flex items-center gap-3">
                <MapPin size={18} className="text-violet-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400">Available for enterprise architecture consulting & advisory engagements</span>
              </Card>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-200 dark:border-white/10 py-10 px-5 sm:px-8 max-w-7xl mx-auto mt-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {PROFILE.name} — {PROFILE.title}.
        </footer>
      </div>
    </div>
  );
}
