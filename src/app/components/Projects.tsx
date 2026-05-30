import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { projectsData } from "../data/projectsData";

const categories = ["All", "Infrastructure", "Fleet", "Renewable Energy"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projectsData : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24" style={{ background: "#fff", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span
              className="text-sm font-semibold tracking-widest uppercase mb-3 block"
              style={{ color: "#36ac43" }}
            >
              Our Work
            </span>
            <h2
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, color: "#000" }}
            >
              Featured Projects
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  background: filter === c ? "#36ac43" : "rgba(0,0,0,0.05)",
                  color: filter === c ? "#fff" : "#555",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl block"
              style={{ border: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(0,0,0,0.25)" }}
                />
                <div className="absolute top-4 right-4">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "#36ac43", color: "#fff" }}
                  >
                    {p.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/70 text-xs">{p.location} · {p.year}</span>
                </div>
              </div>

              <div className="p-6" style={{ background: "#fff" }}>
                <div className="flex items-start justify-between gap-2">
                  <h3
                    className="font-bold text-black mb-2 group-hover:text-[#36ac43] transition-colors"
                    style={{ fontSize: "1rem", lineHeight: 1.3 }}
                  >
                    {p.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    color="#36ac43"
                    className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{p.tagline}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: p.status === "Active Programme" ? "#fbbf24" : "#36ac43" }} />
                    {p.status}
                  </span>
                  <span>{p.client}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
