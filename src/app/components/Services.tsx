import { Car, Zap, Truck, Sun } from "lucide-react";
import { Link } from "react-router";

const services = [
  {
    icon: Car,
    title: "Electric Vehicle Solutions",
    desc: "We offer electric vehicle advisory, sourcing, deployment, and operational support to help organizations transition into efficient and sustainable mobility.",
    image: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1780135489/1771900431841_kzpirx.jpg",
    alt: "Modern concept electric car",
    to: "/solutions/ev-solutions",
  },
  {
    icon: Zap,
    title: "Charging Infrastructure",
    desc: "Our team designs and deploys intelligent EV charging infrastructure for homes, commercial buildings, institutions, and fleet operations.",
    image: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1780135482/1763444238461_swdxm4.jpg",
    alt: "Woman plugging electric car into wall charger",
    to: "/solutions/charging-infrastructure",
  },
  {
    icon: Truck,
    title: "Fleet Electrification",
    desc: "Transform your fleet with cost-effective electric mobility systems designed to improve operational efficiency and reduce fuel dependency.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop&auto=format",
    alt: "Electric vehicle charger plugged into car",
    to: "/solutions/fleet-electrification",
  },
  {
    icon: Sun,
    title: "Renewable Energy Integration",
    desc: "We integrate solar and clean energy systems with electric mobility infrastructure to deliver sustainable and energy-efficient operations.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop&auto=format",
    alt: "Solar panel under blue sky",
    to: "/solutions/renewable-energy",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24" style={{ background: "#fff", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>
            What We Do
          </span>
          <h2 className="mb-4 leading-tight" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, color: "#000" }}>
            Our Solutions
          </h2>
          <p className="text-gray-500 max-w-xl" style={{ lineHeight: 1.8 }}>
            End-to-end electric mobility and energy solutions tailored for businesses,
            institutions, and individuals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.title}
                to={s.to}
                className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl block"
                style={{ border: "1px solid rgba(0,0,0,0.07)" }}
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={s.image}
                    alt={s.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300" style={{ background: "rgba(0,0,0,0.25)" }} />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "#36ac43" }}>
                    <Icon size={20} color="#fff" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="mb-2" style={{ fontSize: "1rem", fontWeight: 700, color: "#000" }}>
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  <div
                    className="mt-4 text-sm font-semibold flex items-center gap-1 transition-all duration-200 group-hover:gap-2"
                    style={{ color: "#36ac43" }}
                  >
                    Learn more <span>→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
