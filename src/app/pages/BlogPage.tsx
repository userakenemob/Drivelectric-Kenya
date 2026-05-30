import { Blog } from "../components/Blog";
import { Link } from "react-router";
import { ArrowRight, Tag } from "lucide-react";
import { useState } from "react";

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 flex items-center" style={{ background: "#000", fontFamily: "Poppins, sans-serif", minHeight: "55vh" }}>
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1724041875334-0a6397111c7e?w=1600&h=800&fit=crop&auto=format" alt="Solar panel close up" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.65))" }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Blog</span>
        </nav>
        <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Knowledge Hub</span>
        <h1 className="text-white mb-4" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, lineHeight: 1.1 }}>Insights & Industry Updates</h1>
        <p className="text-white/60 max-w-xl" style={{ lineHeight: 1.8 }}>
          Stay informed on the latest trends, innovations, and best practices in electric mobility and clean energy across Africa.
        </p>
      </div>
    </section>
  );
}

/* ── Featured Article ── */
function FeaturedArticle() {
  return (
    <section className="py-24" style={{ background: "#fff", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Editor's Pick</span>
        <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
          <div className="grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto bg-gray-100">
              <img src="https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?w=900&h=600&fit=crop&auto=format" alt="Electric car" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.2)" }} />
              <div className="absolute top-5 left-5">
                <span className="px-3 py-1.5 rounded-full text-xs font-bold" style={{ background: "#36ac43", color: "#fff" }}>Feature Article</span>
              </div>
            </div>
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-4 text-sm text-gray-400">
                <span>May 14, 2026</span>
                <span>·</span>
                <span>8 min read</span>
                <span>·</span>
                <span>Industry</span>
              </div>
              <h2 className="mb-4" style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, color: "#000", lineHeight: 1.2 }}>
                The Future of Electric Mobility in Kenya: What 2026 Means for East Africa
              </h2>
              <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                As EV adoption accelerates across Africa, Kenya is emerging as a continental leader in electric mobility — driven by progressive government policy, falling battery costs, and growing charging infrastructure investment. We explore what the next five years hold and what businesses need to know now.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed text-sm">
                The Kenyan government's Vision 2030 transport pillar has set ambitious targets for EV adoption, with import duty exemptions already driving a threefold increase in EV registrations since 2023. Drivelectric Kenya is positioned at the center of this transformation...
              </p>
              <Link to="/blog/future-of-electric-mobility-in-kenya" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm" style={{ background: "#36ac43" }}>
                Read Full Article <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── More Articles Grid ── */
const extraPosts = [
  { slug: "cost-savings-electric-vehicles-kenya-business-guide", title: "Cost Savings with Electric Vehicles: A Kenya Business Guide", cat: "Finance", date: "Mar 22, 2026", read: "5 min", img: "https://images.unsplash.com/photo-1760538970459-c77b1e747e89?w=500&h=340&fit=crop&auto=format", excerpt: "A comprehensive breakdown of how Kenyan businesses are saving 30–45% on transport costs after switching to electric fleets." },
  { slug: "ev-charging-infrastructure-explained", title: "EV Charging Infrastructure Explained: Types, Speeds & Costs", cat: "Infrastructure", date: "Mar 5, 2026", read: "6 min", img: "https://images.unsplash.com/photo-1775259928405-d3d76549cb08?w=500&h=340&fit=crop&auto=format", excerpt: "From slow AC charging to high-speed DC chargers — we break down everything you need to know about EV charging technology in Kenya." },
  { slug: "solar-energy-ev-charging-zero-cost-mobility", title: "Solar Energy and EV Charging: Building Zero-Cost Mobility", cat: "Renewable Energy", date: "Feb 18, 2026", read: "7 min", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=500&h=340&fit=crop&auto=format", excerpt: "Integrating solar generation with EV charging creates a virtuous cycle of clean energy production and zero-cost transportation." },
  { slug: "why-kenyas-ride-hailing-drivers-are-switching-to-evs", title: "Why Kenya's Ride-Hailing Drivers Are Switching to EVs", cat: "PayGo", date: "Feb 1, 2026", read: "4 min", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=500&h=340&fit=crop&auto=format", excerpt: "Uber and Bolt drivers in Nairobi who've switched to electric are reporting 40% higher net earnings after removing fuel costs from the equation." },
  { slug: "east-africa-ev-boom-grid-infrastructure", title: "What East Africa's EV Boom Means for Grid Infrastructure", cat: "Industry", date: "Jan 15, 2026", read: "6 min", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=340&fit=crop&auto=format", excerpt: "As EV adoption grows rapidly, Kenya Power and private energy companies are racing to upgrade distribution networks to handle new load demands." },
  { slug: "fleet-electrification-step-by-step-guide-kenya", title: "Fleet Electrification: A Step-by-Step Guide for Kenyan Businesses", cat: "Fleet", date: "Dec 20, 2025", read: "9 min", img: "https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?w=500&h=340&fit=crop&auto=format", excerpt: "From needs assessment to full deployment — a practical roadmap for transitioning your company vehicles to electric in the Kenyan market." },
];

const allCats = ["All", "Industry", "Fleet", "Infrastructure", "Finance", "Renewable Energy", "PayGo"];

function MoreArticles() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? extraPosts : extraPosts.filter((p) => p.cat === cat);
  return (
    <section className="py-24" style={{ background: "#fdfdfd", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <h2 className="text-black" style={{ fontSize: "clamp(1.4rem,2.5vw,1.8rem)", fontWeight: 800 }}>More Articles</h2>
          <div className="flex flex-wrap gap-2">
            {allCats.map((c) => (
              <button key={c} onClick={() => setCat(c)} className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all" style={{ background: cat === c ? "#36ac43" : "rgba(0,0,0,0.05)", color: cat === c ? "#fff" : "#555" }}>
                {c !== "All" && <Tag size={10} />} {c}
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Link key={p.title} to={`/blog/${p.slug}`} className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl block" style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}>
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: "#36ac43", color: "#fff" }}>{p.cat}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between text-xs text-gray-400 mb-3"><span>{p.date}</span><span>{p.read} read</span></div>
                <h3 className="font-bold text-black mb-2 group-hover:text-[#36ac43] transition-colors" style={{ fontSize: "0.92rem", lineHeight: 1.4 }}>{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{p.excerpt}</p>
                <span className="text-xs font-semibold flex items-center gap-1 mt-4" style={{ color: "#36ac43" }}>Read More <ArrowRight size={12} /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Newsletter ── */
function Newsletter() {
  return (
    <section className="py-24" style={{ background: "#000", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Stay Updated</span>
        <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800 }}>Get EV Insights in Your Inbox</h2>
        <p className="text-white/50 mb-8 max-w-md mx-auto">Join our newsletter and receive the latest news, guides, and exclusive offers on electric mobility in East Africa.</p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input type="email" required placeholder="Enter your email address" className="flex-1 px-4 py-4 rounded-xl text-white placeholder-white/30 outline-none text-sm" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", fontFamily: "Poppins, sans-serif" }} onFocus={(e) => (e.target.style.borderColor = "#36ac43")} onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
          <button type="submit" className="px-7 py-4 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 flex-shrink-0" style={{ background: "#36ac43" }}>Subscribe Free</button>
        </form>
        <p className="text-white/30 text-xs mt-4">No spam. Unsubscribe anytime. Published bi-weekly.</p>
      </div>
    </section>
  );
}

export function BlogPage() {
  return (
    <>
      <PageHero />
      <FeaturedArticle />
      <Blog />
      <MoreArticles />
      <Newsletter />
    </>
  );
}
