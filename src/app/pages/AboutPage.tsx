import { About } from "../components/About";
import { WhyUs } from "../components/WhyUs";
import { Testimonials } from "../components/Testimonials";
import { Link } from "react-router";
import { Users, Award, Globe, Leaf, ArrowRight, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 flex items-center" style={{ background: "#000", fontFamily: "Poppins, sans-serif", minHeight: "55vh" }}>
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1760538978585-f82dc257ec15?w=1600&h=800&fit=crop&auto=format" alt="EV charging station" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.55) 100%)" }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">About</span>
        </nav>
        <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Who We Are</span>
        <h1 className="text-white mb-4" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, lineHeight: 1.1 }}>
          About Drivelectric Kenya
        </h1>
        <p className="text-white/60 max-w-xl" style={{ lineHeight: 1.8 }}>
          Accelerating the adoption of electric mobility and sustainable transportation across East Africa since 2022.
        </p>
      </div>
    </section>
  );
}

/* ── Values ── */
const values = [
  { icon: Leaf, title: "Sustainability", text: "Every decision we make is guided by our commitment to a cleaner environment and reduced carbon footprint across East Africa." },
  { icon: Users, title: "Partnership", text: "We build long-term relationships with our clients, providing support well beyond installation and initial deployment." },
  { icon: Award, title: "Excellence", text: "We hold ourselves to the highest standards in every project, product, and piece of advice we deliver to clients." },
  { icon: Globe, title: "Pan-African Vision", text: "Our ambitions extend across the continent — driving sustainable mobility from Kenya across East Africa and beyond." },
];

function TeamValues() {
  return (
    <section className="py-24" style={{ background: "#fff", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Our Values</span>
          <h2 className="mb-4" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 800, color: "#000" }}>What Drives Us</h2>
          <p className="text-gray-500 max-w-xl mx-auto" style={{ lineHeight: 1.8 }}>
            Our values aren't just words on a wall — they guide every project, partnership, and decision we make.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="p-7 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" style={{ border: "1px solid rgba(0,0,0,0.07)", background: "#fdfdfd" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(54,172,67,0.1)" }}>
                  <Icon size={24} color="#36ac43" />
                </div>
                <h3 className="font-bold text-black mb-3" style={{ fontSize: "1.05rem" }}>{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Story / Timeline ── */
const milestones = [
  { year: "2022", title: "Founded in Nairobi", desc: "Drivelectric Kenya was established with a mission to make electric mobility accessible and affordable across East Africa." },
  { year: "2023", title: "First Fleet Electrification", desc: "Completed our first major fleet electrification project — transitioning 20 corporate vehicles to fully electric in Nairobi." },
  { year: "2023", title: "Charging Infrastructure Launched", desc: "Deployed our first public EV charging stations, establishing partnerships with commercial property developers." },
  { year: "2024", title: "Expanded to Mombasa & Kisumu", desc: "Opened operations in Kenya's second and third largest cities, extending our reach across the country." },
  { year: "2025", title: "Solar Integration Program", desc: "Launched our renewable energy integration offering, combining solar systems with EV charging infrastructure." },
  { year: "2026", title: "200+ EVs on the Road", desc: "Reached the milestone of 200 electric vehicles deployed and actively managed through our platform." },
];

function Timeline() {
  return (
    <section className="py-24" style={{ background: "#fdfdfd", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Our Journey</span>
          <h2 className="mb-4" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 800, color: "#000" }}>Our Story So Far</h2>
        </div>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px" style={{ background: "rgba(54,172,67,0.2)", transform: "translateX(-50%)" }} />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <div key={i} className={`relative flex gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start`}>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white z-10" style={{ background: "#36ac43", top: "6px" }} />
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3" style={{ background: "#36ac43", color: "#fff" }}>{m.year}</span>
                  <h3 className="font-bold text-black mb-2">{m.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                </div>
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Leadership Team ── */
const team = [
  { name: "James Kariuki", role: "Chief Executive Officer", bio: "15+ years in sustainable transport and clean energy across East Africa.", initials: "JK", color: "#36ac43" },
  { name: "Amina Hassan", role: "Chief Technology Officer", bio: "Former EV engineer with expertise in charging systems and fleet management platforms.", initials: "AH", color: "#1a7a26" },
  { name: "David Otieno", role: "Head of Operations", bio: "Spearheads project delivery and infrastructure deployment across Kenya.", initials: "DO", color: "#36ac43" },
  { name: "Grace Wanjiku", role: "Head of Business Development", bio: "Builds strategic partnerships and drives commercial growth for the company.", initials: "GW", color: "#1a7a26" },
  { name: "Samuel Mutua", role: "Lead EV Technician", bio: "Certified EV technician responsible for fleet maintenance and technical training.", initials: "SM", color: "#36ac43" },
  { name: "Fatuma Abdalla", role: "Finance & Leasing Manager", bio: "Structures flexible financing solutions that make EVs accessible for all clients.", initials: "FA", color: "#1a7a26" },
];

function Leadership() {
  return (
    <section className="py-24" style={{ background: "#fff", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>The People</span>
          <h2 className="mb-4" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 800, color: "#000" }}>Meet Our Leadership</h2>
          <p className="text-gray-500 max-w-xl mx-auto" style={{ lineHeight: 1.8 }}>
            A passionate and experienced team dedicated to accelerating Kenya's electric mobility transition.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((p) => (
            <div key={p.name} className="p-6 rounded-2xl flex gap-5 items-start transition-all duration-200 hover:shadow-lg" style={{ border: "1px solid rgba(0,0,0,0.07)", background: "#fdfdfd" }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0" style={{ background: p.color }}>
                {p.initials}
              </div>
              <div>
                <h3 className="font-bold text-black mb-0.5">{p.name}</h3>
                <p className="text-xs font-semibold mb-2" style={{ color: "#36ac43" }}>{p.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{p.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Certifications / Partners strip ── */
function Certifications() {
  const certs = [
    "ISO 9001 Certified",
    "KEBS Approved",
    "EPRA Licensed",
    "EAC Standards Compliant",
    "Green Economy Partner",
    "UN SDG Aligned",
  ];
  return (
    <section className="py-16" style={{ background: "#fdfdfd", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-400 mb-8">Certifications & Compliance</p>
        <div className="flex flex-wrap justify-center gap-4">
          {certs.map((c) => (
            <div key={c} className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold" style={{ background: "#fff", border: "1px solid rgba(54,172,67,0.25)", color: "#333" }}>
              <CheckCircle size={14} color="#36ac43" /> {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contact CTA ── */
function AboutCTA() {
  return (
    <section className="py-24" style={{ background: "#000", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Work With Us</span>
        <h2 className="text-white mb-5" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 800 }}>Partner With Kenya's EV Experts</h2>
        <p className="text-white/60 mb-10 max-w-lg mx-auto" style={{ lineHeight: 1.8 }}>
          Whether you're a business, government body, or individual — our team is ready to guide your journey into sustainable electric mobility.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="px-8 py-4 rounded-xl text-white font-bold text-sm transition-all hover:opacity-90 hover:scale-105" style={{ background: "#36ac43" }}>
            Contact Us <ArrowRight size={16} className="inline ml-1" />
          </Link>
          <Link to="/solutions" className="px-8 py-4 rounded-xl font-bold text-sm transition-all hover:scale-105" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }}>
            Our Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHero />
      <About />
      <TeamValues />
      <Timeline />
      <Leadership />
      <Certifications />
      <WhyUs />
      <Testimonials />
      <AboutCTA />
    </>
  );
}
