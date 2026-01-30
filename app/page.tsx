"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, Linkedin, Mail, FileText, Terminal, Layers, Database,
  Code2, ExternalLink, ShieldCheck, Server, Activity, Cpu,
  Globe, Lock, FileJson, Zap, Monitor, HardDrive, BarChart3,
  Coffee, ShieldAlert, Wifi, Binary, Box, GitBranch, Command
} from "lucide-react";

// Shadcn UI Imports (Ensure these are installed via npx shadcn add ...)
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

/**
 * NABIN OLI - BACKEND ARCHITECT PORTFOLIO
 * High-density single-file component.
 * Version: 2026.01.30-PROD
 */

export default function PortfolioPage() {
  const github = "https://github.com/nabinoli99";
  const linkedin = "https://www.linkedin.com/in/nabin-oli-0879523a7/";
  const email = "nabinstrivex@gmail.com";
  const resume = "/resume-nabin-oli.pdf";

  const [activeProject, setActiveProject] = useState<any>(null);
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setUptime(prev => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);


  // Details of projects
  const projects = [
    {
      id: "taskmaster",
      title: "TaskMaster API",
      subtitle: "Spring Boot & Spring JPA",
      description: "A robust RESTful backend service supporting RBAC (Role-Based Access Control) and Dockerized deployment.",
      repo: "https://github.com/nabinoli99/TaskMaster_nb",
      tags: ["Java", "Spring Boot", "Postgres", "JWT", "Docker"],
      readme: sampleTaskMasterReadme(),
      schema: "[Users] 1-N [Tasks] -> [Audit_Logs]",
      metrics: { coverage: "88%", latency: "24ms", throughput: "1.2k req/s" }
    },
    {
      id: "vehicle-parking",
      title: "Parking Ledger",
      subtitle: "Transactional Entry/Exit System",
      description: "A financial-grade backend system designed for high-concurrency vehicle tracking and automated fee calculation.",
      repo: "https://github.com/nabinoli99/SpringFrameworkCodes/tree/main/Spring%20Projects/Vehicle_Parking_Entry",
      tags: ["Java 17", "Spring Boot", "Transactions", "JUnit 5"],
      readme: sampleParkingReadme(),
      schema: "[Entries] -> [Calculators] -> [Invoices]",
      metrics: { coverage: "94%", latency: "12ms", throughput: "800 req/s" }
    },
    {
      id: "product-inventory",
      title: "Inventory Node",
      subtitle: "Audited Inventory Microservice",
      description: "Demonstrates JPA Entity Listeners for audit logging and bulk CSV processing with validation pipes.",
      repo: "https://github.com/nabinoli99/SpringFrameworkCodes/tree/main/Spring%20Projects/Vehicle_Parking_Entry",
      tags: ["Java", "JPA", "Hibernate", "CSV Processing"],
      readme: sampleInventoryReadme(),
      schema: "[Products] 1-N [History] -> [Warehouse]",
      metrics: { coverage: "82%", latency: "45ms", throughput: "3k req/s" }
    },
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-slate-300 font-sans selection:bg-sky-500/30">

      {/* 1. TOP SYSTEM BAR */}
      <nav className="fixed top-0 z-[100] w-full border-b border-white/5 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-mono">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-sky-600 flex items-center justify-center text-white font-black rounded">N</div>
            <span className="text-[10px] font-bold tracking-widest text-white uppercase hidden sm:block">
              Nabin.Oli_System_v2.0.4
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-4 text-[10px] text-slate-500 font-bold">
              <span className="flex items-center gap-1 text-green-500"><Wifi size={12}/> {uptime}s UP</span>
              <span className="flex items-center gap-1"><Cpu size={12}/> 14% Load</span>
            </div>
            <Button variant="outline" size="sm" className="h-8 border-white/10 text-[10px] uppercase font-black">Resume.pdf</Button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">

        {/* 2. HERO SECTION */}
        <section className="grid lg:grid-cols-12 gap-12 mb-32 items-center">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge variant="outline" className="mb-6 border-sky-500/20 text-sky-400 font-mono text-[10px] py-1">
                STATUS: AVAILABLE_FOR_INTERNSHIP
              </Badge>
              <h1 className="text-6xl sm:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8">
                BACKEND <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-600">ARCHITECT.</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-xl leading-relaxed mb-10 border-l-2 border-sky-500/30 pl-6">
                Class 12 student at Liverpool International College. Transforming low-level C/C++ logic into
                high-performance <strong>Java & Spring Boot</strong> APIs.
              </p>
              <div className="flex flex-wrap gap-4">
  {/* GitHub: Opens in a new tab */}
  <a
    href={github}
    target="_blank"
    rel="noreferrer"
  >
    <Button className="bg-sky-600 hover:bg-sky-500 font-bold uppercase tracking-widest text-xs h-12 px-8">
      GitHub
    </Button>
  </a>

  {/* Email: Keep standard (no target="_blank") so it opens the mail app directly */}
  <a href={`mailto:${email}`}>
    <Button variant="outline" className="h-12 px-8 border-white/10 font-bold uppercase text-xs">
      Email Me
    </Button>
  </a>
</div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-sky-500/10 blur-[120px] rounded-full animate-pulse" />
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 group bg-[#0a0a0a]">
             <img src="/Finley.jpg" alt="Nabin Oli" className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700"/>
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <p className="text-xs font-mono text-sky-400 mb-1">CURRENT_STACK</p>
                <p className="text-sm font-bold text-white">Java, Spring Boot, MySQL</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SYSTEM TELEMETRY (Visual Stats) */}

        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard icon={<Binary className="text-sky-500"/>} label="Foundations" value="C / C++" sub="Memory & Pointers" />
            <StatCard icon={<Zap className="text-amber-500"/>} label="Framework" value="Spring Boot" sub="REST & Microservices" />
            <StatCard icon={<ShieldCheck className="text-emerald-500"/>} label="Security" value="JWT & OAuth2" sub="Stateless Auth" />
          </div>
        </section>

        {/* 4. SKILLS & KNOWLEDGE BASE */}
        <section className="mb-32 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8">Skill Matrix</h2>
            <div className="space-y-6">
              <SkillBar label="SQL / Database Design" percent={68} />
              <SkillBar label="System Architecture" percent={55} />
              <SkillBar label="Docker & DevOps" percent={72} />
            </div>
          </div>
          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Terminal size={18} className="text-sky-500" /> Learning Timeline
            </h3>
            <div className="space-y-8 border-l border-white/10 pl-6">
              <TimelineItem date="APR 2025" title="Core Foundations" desc="Mastered C/C++ memory models and pointers." />
              <TimelineItem date="AUG 2025" title="The Java Pivot" desc="Focused on OOP, Collections, and Multi-threading." />
              <TimelineItem date="DEC 2025" title="Spring Ecosystem" desc="Built transactional APIs and JPA data layers." />
              <TimelineItem date="2026" title="Security & Scaling" desc="Current focus on JWT, Redis, and K8s." />
            </div>
          </div>
        </section>

        {/* 5. PROJECT REGISTRY */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Project Registry</h2>
              <p className="text-slate-500 mt-2">Functional backend modules deployed in simulated production.</p>
            </div>
            <div className="flex gap-4">
               <Badge className="bg-sky-500/10 text-sky-400 py-1.5 px-4 border-none">3 ACTIVE NODES</Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
  {projects.map((p) => (
    <Card key={p.id} className="bg-white/[0.02] border-white/5 hover:border-sky-500/30 transition-all group">
      <CardHeader>
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-sky-500/10 rounded-xl text-sky-500 group-hover:bg-sky-600 group-hover:text-white transition-all">
            <Box size={20} />
          </div>
          <span className="text-[10px] font-mono text-slate-500">{p.metrics.coverage} COV</span>
        </div>
        <CardTitle className="text-xl font-bold text-white uppercase tracking-tight">{p.title}</CardTitle>
        <CardDescription className="text-xs text-sky-500 font-mono mt-1">{p.subtitle}</CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-xs text-slate-400 leading-relaxed mb-6 h-12 overflow-hidden">{p.description}</p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-between text-[10px] text-slate-500">
             <span>LATENCY</span>
             <span className="text-slate-300 font-mono">{p.metrics.latency}</span>
          </div>
          <Progress value={80} className="h-1 bg-white/5" />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {p.tags.map(t => <span key={t} className="text-[9px] px-2 py-0.5 bg-white/5 rounded text-slate-500 border border-white/5">{t}</span>)}
        </div>

        <div className="flex gap-3">
          {/* UPDATED LINK LOGIC BELOW */}
          <a
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            className="flex-1"
          >
            <Button size="sm" className="w-full bg-white text-black font-bold text-[10px] uppercase flex items-center justify-center gap-1.5">
              Source <ExternalLink size={12} />
            </Button>
          </a>

          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-white/10 text-[10px] uppercase"
            onClick={() => setActiveProject(p)}
          >
            Docs
          </Button>
        </div>
      </CardContent>
    </Card>
  ))}
</div>
        </section>

        {/* 6. INFRASTRUCTURE & SNIPPETS */}

        <section className="mb-32 border-t border-white/5 pt-24">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-6">Infrastructure Blueprint</h2>
              <p className="text-slate-400 mb-10 text-sm leading-relaxed">
                I prioritize <strong>Horizontal Scalability</strong> and <strong>Stateless Architecture</strong>.
                My Docker setups ensure consistent environments across Dev, Test, and Prod.
              </p>
              <div className="space-y-4">
                 <ArchStep icon={<Server/>} title="Ingress" desc="Nginx handling SSL and Rate Limiting." />
                 <ArchStep icon={<Lock/>} title="Security" desc="Custom Spring Security Filter Chain." />
                 <ArchStep icon={<Database/>} title="Data" desc="MySQL with Liquibase Migrations." />
              </div>
            </div>

            <div className="bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="bg-white/5 px-6 py-3 flex items-center justify-between border-b border-white/10">
                <span className="text-[10px] font-mono text-slate-400">docker-compose.yml</span>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
              </div>
              <pre className="p-6 text-[11px] text-sky-300 font-mono leading-relaxed overflow-x-auto h-[350px]">
                {sampleDockerCompose()}
              </pre>
            </div>
          </div>
        </section>

        {/* 7. CONTACT / TERMINAL */}
        <section id="contact" className="py-24 bg-sky-600/5 border border-sky-500/10 rounded-[3rem] px-10 relative overflow-hidden text-center">
           <div className="absolute top-0 right-0 p-10 opacity-10">
              <Terminal size={200} />
           </div>
           <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Request Connection</h2>
           <p className="text-slate-400 max-w-lg mx-auto mb-10 text-sm">
             Always looking for code reviews, mentorship, or internship opportunities in backend engineering.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  {/* Open Email Client */}
  <a href={`mailto:${email}`} className="w-full sm:w-auto">
    <Button size="lg" className="w-full bg-sky-600 hover:bg-sky-500 font-black uppercase text-xs tracking-widest px-10 h-14">
      Send Message
    </Button>
  </a>

  {/* Open GitHub in New Tab */}
  <a
    href={github}
    target="_blank"
    rel="noreferrer"
    className="w-full sm:w-auto"
  >
    <Button size="lg" variant="outline" className="w-full border-white/10 h-14 px-10 font-black uppercase text-xs">
      Explore GitHub
    </Button>
  </a>
</div>
        </section>

      </main>

   <footer className="py-12 border-t border-white/5 bg-black">
  <div className="max-w-7xl mx-auto px-6">
    {/* Main Container: Stacks on mobile, Rows on Laptop */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

      {/* 1. Brand Section */}
      <div className="space-y-2">
        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em]">
          © 2026 NABIN_OLI
        </p>
        <p className="text-[9px] font-mono text-sky-500/50 uppercase">
          Class 12 @ Liverpool International College
        </p>
      </div>

      {/* 2. Contact Grid: Stays organized on all screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 w-full md:w-auto">

        {/* Location Item */}
        <div className="flex items-center gap-4 group">
          <div className="p-2 bg-white/5 rounded-lg group-hover:bg-sky-500/10 transition-colors">
            <Globe size={16} className="text-sky-500" />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Location</p>
            <p className="text-sm text-slate-200 font-mono">Kathmandu, Nepal</p>
          </div>
        </div>

        {/* Contact Item */}
        <div className="flex items-center gap-4 group">
          <div className="p-2 bg-white/5 rounded-lg group-hover:bg-sky-500/10 transition-colors">
            <Mail size={16} className="text-sky-500" />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Contact</p>
            <p className="text-sm text-slate-200 font-mono">nabinstrivex@gmail.com</p>
          </div>
        </div>

      </div>
    </div>

    {/* Bottom micro-bar for mobile polish */}
    <div className="mt-12 pt-6 border-t border-white/[0.02] flex justify-center md:justify-start">
       <span className="text-[8px] font-mono text-slate-600 uppercase tracking-tighter">
         System Status: 200 OK // Portfolio Portion: Active
       </span>
    </div>
  </div>
</footer>

      {/* 8. MODAL / DOCS VIEWER */}
      <AnimatePresence>
        {activeProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6" onClick={() => setActiveProject(null)}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-[#0a0a0a] border border-white/10 max-w-4xl w-full h-[80vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row" onClick={e => e.stopPropagation()}>
               <div className="flex-1 p-10 overflow-y-auto border-r border-white/5">
                  <div className="flex items-center gap-2 text-sky-500 font-mono text-[10px] mb-4">
                    <Command size={14}/> SYSTEM_DOCS_v1.0
                  </div>
                  <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">{activeProject.title}</h2>
                  <div className="prose prose-invert prose-sm max-w-none font-mono text-slate-400">
                     <pre className="whitespace-pre-wrap">{activeProject.readme}</pre>
                  </div>
               </div>
               <div className="w-full md:w-72 bg-black/50 p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Database Schema</h4>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 font-mono text-[11px] text-sky-400">
                      {activeProject.schema}
                    </div>
                  </div>
                  <Button onClick={() => setActiveProject(null)} className="w-full bg-white text-black font-bold uppercase text-xs tracking-widest">Exit_Reader</Button>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function StatCard({ icon, label, value, sub }: any) {
  return (
    <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:border-sky-500/20 transition-all">
      <div className="mb-6">{icon}</div>
      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{label}</p>
      <h3 className="text-2xl font-bold text-white mb-2">{value}</h3>
      <p className="text-xs text-slate-500">{sub}</p>
    </div>
  );
}

function SkillBar({ label, percent }: any) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between text-[11px] font-bold text-slate-400 uppercase tracking-tighter">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} whileInView={{ width: `${percent}%` }} transition={{ duration: 1 }} className="h-full bg-sky-500" />
      </div>
    </div>
  );
}

function TimelineItem({ date, title, desc }: any) {
  return (
    <div className="relative">
      <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
      <span className="text-[10px] font-mono text-sky-500 font-bold tracking-widest">{date}</span>
      <h4 className="text-sm font-black text-white uppercase mt-1 tracking-tight">{title}</h4>
      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{desc}</p>
    </div>
  );
}

function ArchStep({ icon, title, desc }: any) {
  return (
    <div className="flex gap-4 p-4 hover:bg-white/5 rounded-2xl transition-all group">
       <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-500 group-hover:bg-sky-600 group-hover:text-white transition-all">
         {icon}
       </div>
       <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">{title}</h4>
          <p className="text-xs text-slate-500">{desc}</p>
       </div>
    </div>
  );
}

// --- SAMPLE DATA ---

function sampleDockerCompose() {
  return `version: '3.8'
services:
  db:
    image: postgres:15-alpine
    restart: unless-stopped
    environment:
      POSTGRES_DB: main_db
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: \${DB_PWD}
    ports:
      - "5432:5432"

  api-service:
    build: .
    restart: always
    depends_on:
      - db
    environment:
      SPRING_PROFILES_ACTIVE: prod
      DB_URL: jdbc:postgresql://db:5432/main_db
    ports:
      - "8080:8080"`;
}

function sampleTaskMasterReadme() {
  return `# TaskMaster API v1.0
- JWT Auth Filter
- Role-Based Access Control
- Liquibase Migrations
- JUnit 5 / AssertJ Testing

### Endpoints
POST /api/auth/login
GET /api/tasks?page=0&size=10`;
}

function sampleParkingReadme() {
  return `# Parking Ledger Node
- ACID Transaction Boundaries
- Custom Fee Calculation Engine
- Multi-threaded Billing Jobs
- Postgres Persistence`;
}

function sampleInventoryReadme() {
  return `# Inventory Audit Node
- JPA Entity Listeners
- Bulk CSV Import Stream
- Hibernate L2 Caching
- Event-driven Updates`;
}