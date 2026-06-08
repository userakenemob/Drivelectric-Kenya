import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { WhyUs } from "../components/WhyUs";
import { Testimonials } from "../components/Testimonials";
import { Link } from "react-router";
import { ArrowRight, ClipboardList, Wrench, BadgeCheck, HeadphonesIcon, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ── How It Works ── */
const steps = [
  { icon: ClipboardList, step: "01", title: "Consultation", desc: "We begin with an in-depth consultation to understand your mobility needs, operational goals, and budget constraints." },
  { icon: Wrench, step: "02", title: "Solution Design", desc: "Our engineers design a tailored EV and charging infrastructure plan specifically for your use case and location." },
  { icon: BadgeCheck, step: "03", title: "Deployment", desc: "We procure, install, and commission your EV fleet and charging infrastructure with minimal operational disruption." },
  { icon: HeadphonesIcon, step: "04", title: "Ongoing Support", desc: "Our team provides continuous monitoring, maintenance, and optimization support to ensure peak performance." },
];

function HowItWorks() {
  return (
    <section className="py-24" style={{ background: "#fff", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Our Process</span>
          <h2 className="mb-4" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 800, color: "#000" }}>How It Works</h2>
          <p className="text-gray-500 max-w-xl" style={{ lineHeight: 1.8 }}>
            From first conversation to full deployment — a seamless, end-to-end journey with Drivelectric Kenya.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px" style={{ background: "rgba(54,172,67,0.2)" }} />
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.step} className="relative flex flex-col items-center text-center p-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 relative z-10"
                  style={{ background: "#36ac43" }}
                >
                  <Icon size={26} color="#fff" />
                </div>
                <span className="text-xs font-bold tracking-widest mb-2" style={{ color: "#36ac43" }}>STEP {s.step}</span>
                <h3 className="font-bold text-black mb-3" style={{ fontSize: "1.05rem" }}>{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: "#36ac43" }}
          >
            Start Your Journey <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Vehicles Teaser ── */
function HomeVehiclesTeaser() {
  return (
    <section className="py-24" style={{ background: "#fdfdfd", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Our Lineup</span>
            <h2 className="mb-2" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 800, color: "#000" }}>Electric Vehicles</h2>
            <p className="text-gray-500 max-w-md">Modern EVs engineered for efficiency, sustainability, and comfort.</p>
          </div>
          <Link to="/vehicles" className="inline-flex items-center gap-2 font-semibold text-sm transition-colors hover:opacity-70" style={{ color: "#36ac43" }}>
            View All Vehicles <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { name: "Nissan Leaf", range: "270 km", img: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1780314314/Nissan_Leaf_usy3ij.jpg" },
            { name: "MG4", range: "435 km", img: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1780314313/MG4_csvxgy.webp" },
            { name: "Boma EV", range: "300 km", img: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1780314319/Remove_the_text_from_the_202606011438_jbbg0f.jpg" },
            { name: "MG ZS EV", range: "320 km", img: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1780314320/Remove_the_text_from_the_202606011444_imarg4.jpg" },
          ].map((v) => (
            <Link
              key={v.name}
              to="/vehicles"
              className="group relative rounded-2xl overflow-hidden bg-gray-100 block"
              style={{ aspectRatio: "4/3" }}
            >
              <img src={v.img} alt={v.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold text-sm">{v.name}</p>
                <p className="text-xs mt-0.5" style={{ color: "#36ac43" }}>Range: {v.range}</p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "#36ac43" }}>
                <ChevronRight size={14} color="#fff" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Impact Counter Banner ── */
function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let v = 0; const step = target / 70;
        const t = setInterval(() => { v += step; if (v >= target) { setCount(target); clearInterval(t); } else setCount(Math.floor(v)); }, 18);
      }
    }, { threshold: 0.3 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [target]);
  return <p ref={ref} style={{ fontSize: "2.8rem", fontWeight: 800, color: "#36ac43", lineHeight: 1 }}>{count}{suffix}</p>;
}

function HomeImpactBanner() {
  return (
    <section className="py-20" style={{ background: "#000", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: 450, suffix: "t", label: "CO₂ Emissions Avoided" },
            { value: 35, suffix: "%", label: "Average Cost Savings" },
            { value: 12, suffix: "+", label: "Cities Covered" },
            { value: 200, suffix: "+", label: "EVs Deployed" },
          ].map((s) => (
            <div key={s.label} className="py-4">
              <CountUp target={s.value} suffix={s.suffix} />
              <p className="text-white/60 text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Financing CTA ── */
function HomeFinancingCTA() {
  return (
    <section className="py-24" style={{ background: "#fff", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {[
            {
              tag: "Lease to Own",
              title: "Own Your EV with Flexible Payments",
              desc: "Start with an initial deposit and make manageable monthly payments while driving your electric vehicle. Full ownership awaits at the end of the term.",
              cta: "Learn About Leasing",
              img: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1780135484/1763973644036_1_j7ihzj.jpg",
            },
            {
              tag: "PayGo Model",
              title: "Pay as You Go. Earn as You Drive.",
              desc: "Ideal for ride-hailing, delivery, and commercial operators. Access electric mobility with minimal upfront costs and flexible usage-based plans.",
              cta: "Explore PayGo",
              img: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1780135483/1763441210637_oyrync.jpg",
            },
          ].map((card) => (
            <div key={card.tag} className="group relative rounded-3xl overflow-hidden" style={{ minHeight: "360px" }}>
              <img src={card.img} alt={card.tag} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3" style={{ background: "#36ac43", color: "#fff" }}>{card.tag}</span>
                <h3 className="text-white mb-3" style={{ fontSize: "1.4rem", fontWeight: 800, lineHeight: 1.2 }}>{card.title}</h3>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">{card.desc}</p>
                <Link to="/financing" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90" style={{ background: "#36ac43" }}>
                  {card.cta} <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Featured Projects Strip ── */
function HomeFeaturedProjects() {
  return (
    <section className="py-24" style={{ background: "#fdfdfd", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Real Results</span>
            <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 800, color: "#000" }}>Projects We're Proud Of</h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: "#36ac43" }}>
            See All Projects <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Commercial EV Charging Hub — Nairobi", tag: "Infrastructure", img: "https://images.unsplash.com/photo-1760538978585-f82dc257ec15?w=600&h=400&fit=crop&auto=format" },
            { title: "50-Vehicle Corporate Fleet — Mombasa", tag: "Fleet", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop&auto=format" },
            { title: "Solar + EV Charging Hub — Kisumu", tag: "Renewable Energy", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop&auto=format" },
          ].map((p) => (
            <Link
              key={p.title}
              to="/projects"
              className="group relative rounded-2xl overflow-hidden block"
              style={{ aspectRatio: "16/10" }}
            >
              <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-2" style={{ background: "#36ac43", color: "#fff" }}>{p.tag}</span>
                <p className="text-white font-bold" style={{ fontSize: "0.95rem", lineHeight: 1.3 }}>{p.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Blog Teaser ── */
function HomeBlogTeaser() {
  return (
    <section className="py-24" style={{ background: "#fff", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Knowledge Hub</span>
            <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 800, color: "#000" }}>Latest Insights</h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: "#36ac43" }}>
            All Articles <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "The Future of Electric Mobility in Kenya", cat: "Industry", date: "May 14, 2026", img: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1780314320/Remove_the_text_from_the_202606011444_imarg4.jpg", read: "5 min" },
            { title: "Benefits of Fleet Electrification for East African Businesses", cat: "Fleet", date: "Apr 28, 2026", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=360&fit=crop&auto=format", read: "4 min" },
            { title: "Solar Energy and EV Charging: A Perfect Match", cat: "Energy", date: "Apr 10, 2026", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=360&fit=crop&auto=format", read: "6 min" },
          ].map((p) => (
            <Link key={p.title} to="/blog" className="group rounded-2xl overflow-hidden block transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" style={{ border: "1px solid rgba(0,0,0,0.07)", background: "#fff" }}>
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: "#36ac43", color: "#fff" }}>{p.cat}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between text-xs text-gray-400 mb-3"><span>{p.date}</span><span>{p.read} read</span></div>
                <h3 className="font-bold text-black mb-2 group-hover:text-[#36ac43] transition-colors" style={{ fontSize: "0.95rem", lineHeight: 1.4 }}>{p.title}</h3>
                <div className="text-xs font-semibold flex items-center gap-1 mt-3" style={{ color: "#36ac43" }}>Read More <ArrowRight size={12} /></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Final CTA Banner ── */
function FinalCTA() {
  return (
    <section className="py-24" style={{ background: "#000", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="rounded-3xl p-12 md:p-20 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0a2e0d 0%, #000 50%, #0a2e0d 100%)", border: "1px solid rgba(54,172,67,0.2)" }}
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle at 30% 50%, #36ac43 0%, transparent 60%)" }} />
          <div className="relative z-10 max-w-2xl">
            <span className="text-sm font-semibold tracking-widest uppercase mb-4 block" style={{ color: "#36ac43" }}>Ready to Electrify?</span>
            <h2 className="text-white mb-5" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.1 }}>
              Kenya's Clean Energy Future<br />Starts With You
            </h2>
            <p className="text-white/60 mb-10" style={{ lineHeight: 1.8 }}>
              Whether you're an individual looking for your first EV, or a business ready to transform
              your fleet — Drivelectric Kenya is your trusted partner.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 rounded-xl text-white font-bold text-sm transition-all hover:opacity-90 hover:scale-105" style={{ background: "#36ac43" }}>
                Get a Free Consultation
              </Link>
              <Link to="/solutions" className="px-8 py-4 rounded-xl font-bold text-sm transition-all hover:scale-105" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }}>
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Services />
      <WhyUs />
      <HomeVehiclesTeaser />
      <HomeImpactBanner />
      <HomeFinancingCTA />
      <HomeFeaturedProjects />
      <Testimonials />
      <HomeBlogTeaser />
      <FinalCTA />
    </>
  );
}
