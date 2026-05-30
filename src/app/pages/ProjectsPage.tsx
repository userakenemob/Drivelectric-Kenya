import { Projects } from "../components/Projects";
import { Impact } from "../components/Impact";
import { Testimonials } from "../components/Testimonials";
import { Link } from "react-router";
import { ArrowRight, MapPin, Calendar, CheckCircle } from "lucide-react";

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 flex items-center" style={{ background: "#000", fontFamily: "Poppins, sans-serif", minHeight: "55vh" }}>
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&h=800&fit=crop&auto=format" alt="Solar panels" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.6))" }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Projects</span>
        </nav>
        <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Our Work</span>
        <h1 className="text-white mb-4" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, lineHeight: 1.1 }}>Featured Projects</h1>
        <p className="text-white/60 max-w-xl" style={{ lineHeight: 1.8 }}>
          Explore some of our electric mobility and energy transformation projects across Kenya and East Africa.
        </p>
      </div>
    </section>
  );
}

/* ── Case Study ── */
function CaseStudy() {
  return (
    <section className="py-24" style={{ background: "#fff", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Spotlight</span>
          <h2 className="mb-4" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 800, color: "#000" }}>Project Deep Dive</h2>
        </div>
        <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
          <div className="grid lg:grid-cols-2">
            <div className="relative h-72 lg:h-auto bg-gray-100">
              <img src="https://images.unsplash.com/photo-1760538978585-f82dc257ec15?w=900&h=700&fit=crop&auto=format" alt="Commercial EV charging hub" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.3)" }} />
              <div className="absolute top-5 left-5">
                <span className="px-3 py-1.5 rounded-full text-xs font-bold" style={{ background: "#36ac43", color: "#fff" }}>Infrastructure</span>
              </div>
            </div>
            <div className="p-8 lg:p-12" style={{ background: "#fdfdfd" }}>
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><MapPin size={14} color="#36ac43" /> Westlands, Nairobi</span>
                <span className="flex items-center gap-1"><Calendar size={14} color="#36ac43" /> Q4 2024</span>
              </div>
              <h3 className="mb-4" style={{ fontSize: "1.5rem", fontWeight: 800, color: "#000" }}>Commercial EV Charging Hub — Sarit Centre</h3>
              <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                Drivelectric Kenya partnered with Sarit Centre to design and deploy a 20-station dual-port EV charging hub,
                serving both shopping centre visitors and nearby fleet operators. The project included AC Level 2 and DC fast charging units.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Charging Stations", value: "20 Units" },
                  { label: "Charging Types", value: "AC + DC Fast" },
                  { label: "Avg. Sessions/Day", value: "85+" },
                  { label: "CO₂ Avoided", value: "12t/month" },
                ].map((s) => (
                  <div key={s.label} className="p-4 rounded-xl" style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}>
                    <p className="font-bold" style={{ color: "#36ac43", fontSize: "1.2rem" }}>{s.value}</p>
                    <p className="text-gray-400 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <ul className="space-y-2 mb-8">
                {["Smart load-balancing management system", "App-enabled session booking and payment", "Real-time remote monitoring dashboard", "24/7 technical support agreement"].map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={14} color="#36ac43" className="flex-shrink-0" /> {point}
                  </li>
                ))}
              </ul>
              <Link to="/projects/commercial-ev-charging-sarit-centre" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm" style={{ background: "#36ac43" }}>
                View Full Project Details <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Clients / Partners ── */
const clients = [
  { name: "Safaricom", sector: "Telecom" },
  { name: "KCB Bank", sector: "Finance" },
  { name: "UPS Kenya", sector: "Logistics" },
  { name: "Radisson Hotels", sector: "Hospitality" },
  { name: "Kenya Railways", sector: "Transport" },
  { name: "Jumia Kenya", sector: "E-Commerce" },
  { name: "USIU-Africa", sector: "Education" },
  { name: "AAR Healthcare", sector: "Healthcare" },
];

function ClientsStrip() {
  return (
    <section className="py-20" style={{ background: "#fdfdfd", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-400 mb-10">Trusted by Leading Kenyan Organizations</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex flex-col items-center justify-center p-4 rounded-xl text-center transition-all duration-200 hover:shadow-md"
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div className="w-10 h-10 rounded-xl mb-2 flex items-center justify-center font-bold text-white text-xs" style={{ background: "#36ac43" }}>
                {c.name.slice(0, 2).toUpperCase()}
              </div>
              <p className="font-semibold text-black text-xs">{c.name}</p>
              <p className="text-gray-400 text-xs mt-0.5">{c.sector}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ── */
function ProjectsCTA() {
  return (
    <section className="py-20" style={{ background: "#fff", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="mb-4" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 800, color: "#000" }}>Start Your Project With Us</h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">Ready to electrify your fleet, install charging infrastructure, or integrate solar energy? Our team is ready to build your solution.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold transition-all hover:opacity-90 hover:scale-105" style={{ background: "#36ac43" }}>
          Discuss Your Project <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

export function ProjectsPage() {
  return (
    <>
      <PageHero />
      <Projects />
      <CaseStudy />
      <ClientsStrip />
      <Impact />
      <Testimonials />
      <ProjectsCTA />
    </>
  );
}
