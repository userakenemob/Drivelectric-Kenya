import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const posts = [
  {
    title: "The Future of Electric Mobility in Kenya",
    category: "Industry",
    date: "May 14, 2026",
    excerpt: "As EV adoption accelerates across Africa, Kenya is emerging as a key hub for electric mobility innovation — driven by government policy, falling battery costs, and infrastructure investment.",
    image: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1780135484/1763973644036_1_j7ihzj.jpg",
    alt: "Modern electric concept car",
    readTime: "8 min read",
    to: "/blog/future-of-electric-mobility-in-kenya",
  },
  {
    title: "Benefits of Fleet Electrification for East African Businesses",
    category: "Fleet",
    date: "April 28, 2026",
    excerpt: "Organizations transitioning to electric fleets are reporting 30–40% reductions in total cost of ownership. Here's how electrification works in practice.",
    image: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1780135488/1771899393285_c0aiex.jpg",
    alt: "Electric vehicle charger plugged into car",
    readTime: "4 min read",
    to: "/blog/benefits-of-fleet-electrification-east-africa",
  },
  {
    title: "Solar Energy and EV Charging: A Perfect Match",
    category: "Renewable Energy",
    date: "April 10, 2026",
    excerpt: "Integrating solar generation with EV charging infrastructure creates a virtuous cycle of clean energy production and zero-emission transportation.",
    image: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779098484/KNIGHTS-ENERGY-SOLAR-EV-CHARGERS-4_ugr3dp.jpg",
    alt: "Solar panel under blue sky",
    readTime: "6 min read",
    to: "/blog/solar-energy-and-ev-charging",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24" style={{ background: "#fdfdfd", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>
              Knowledge Hub
            </span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, color: "#000" }}>
              Insights & Industry Updates
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
            style={{ color: "#36ac43" }}
          >
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link
              key={p.title}
              to={p.to}
              className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl block"
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: "#36ac43", color: "#fff" }}>
                    {p.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-400">{p.date}</span>
                  <span className="text-xs text-gray-400">{p.readTime}</span>
                </div>
                <h3
                  className="font-bold text-black mb-3 group-hover:text-[#36ac43] transition-colors"
                  style={{ fontSize: "1rem", lineHeight: 1.4 }}
                >
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{p.excerpt}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold" style={{ color: "#36ac43" }}>
                  Read More <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
