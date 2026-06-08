import { Target, Eye, Leaf } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "Empower businesses and individuals with reliable, efficient, and future-ready mobility technologies that contribute to a cleaner and smarter East Africa.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be the leading electric mobility and clean energy company driving the sustainable transformation of transportation across the African continent.",
  },
  {
    icon: Leaf,
    title: "Our Commitment",
    text: "We are committed to reducing carbon emissions, lowering operational costs, and delivering innovative solutions that align economic growth with environmental responsibility.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24" style={{ background: "#fdfdfd", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
              <img
                src="https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1780135485/1764650871216_p1c1av.jpg"
                alt="Electric car charging at a modern home"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)" }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-6 rounded-2xl p-5 shadow-2xl"
              style={{ background: "#000", color: "#fff" }}
            >
              <p className="text-xs text-white/60 mb-1 tracking-wider uppercase">Est.</p>
              <p style={{ fontSize: "2rem", fontWeight: 800, color: "#36ac43", lineHeight: 1 }}>2022</p>
              <p className="text-sm text-white/70 mt-1">Nairobi, Kenya</p>
            </div>

            {/* Green accent bar */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl opacity-20"
              style={{ background: "#36ac43" }}
            />
          </div>

          {/* Content side */}
          <div>
            <span
              className="text-sm font-semibold tracking-widest uppercase mb-3 block"
              style={{ color: "#36ac43" }}
            >
              About Us
            </span>
            <h2
              className="mb-6 leading-tight text-left"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, color: "#000" }}
            >
              Accelerating Electric Mobility Across East Africa
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4" style={{ lineHeight: 1.8 }}>
              Drivelectric Kenya is committed to accelerating the adoption of electric mobility
              and sustainable transportation solutions across East Africa. We provide innovative
              electric vehicle solutions, charging infrastructure deployment, fleet electrification,
              and clean energy integration.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10" style={{ lineHeight: 1.8 }}>
              Our solutions are designed to reduce operational costs and environmental impact —
              delivering future-ready mobility technologies that contribute to a cleaner and
              smarter tomorrow.
            </p>

            <div className="grid gap-5">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="flex gap-4 p-4 rounded-xl transition-all duration-200 hover:shadow-md"
                    style={{ border: "1px solid rgba(0,0,0,0.07)", background: "#fff" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(54,172,67,0.1)" }}
                    >
                      <Icon size={20} color="#36ac43" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">{p.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{p.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
