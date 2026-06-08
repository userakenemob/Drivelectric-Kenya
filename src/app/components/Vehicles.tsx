import { useState } from "react";
import { BatteryCharging, Shield, Gauge, Leaf } from "lucide-react";
import { Link } from "react-router";

const vehicles = [
  {
    name: "Nissan Leaf",
    tagline: "The World's Best-Selling EV",
    desc: "The Nissan Leaf is a globally trusted electric vehicle offering smooth driving, low operational costs, and intelligent energy efficiency for daily commuting and business mobility.",
    image: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1780314314/Nissan_Leaf_usy3ij.jpg",
    alt: "Black sedan electric vehicle",
    features: ["Fully Electric", "Smart Driving Technology", "Low Maintenance Costs", "Eco-Friendly Performance"],
    range: "270 km",
    charge: "6.6 kW",
    power: "110 kW",
  },
  {
    name: "MG4",
    tagline: "Futuristic Design Meets Performance",
    desc: "The MG4 combines futuristic design, advanced EV technology, and exceptional driving performance, making it ideal for modern drivers seeking sustainable mobility.",
    image: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1780314313/MG4_csvxgy.webp",
    alt: "White electric car driving down a curvy road",
    features: ["Advanced EV Technology", "Long Range Capability", "Fast Charging Support", "Modern Interior Design"],
    range: "435 km",
    charge: "11 kW",
    power: "150 kW",
  },
  {
    name: "Boma EV",
    tagline: "Built for Local Operations",
    desc: "The Boma electric vehicle is designed to support practical and sustainable mobility solutions tailored for local operational needs across East Africa.",
    image: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1780314319/Remove_the_text_from_the_202606011438_jbbg0f.jpg",
    alt: "White and black car in front of white building",
    features: ["Reliable Performance", "Cost Efficient Mobility", "Sustainable Transport", "Business Friendly"],
    range: "300 km",
    charge: "7.4 kW",
    power: "95 kW",
  },
  {
    name: "MG ZS EV",
    tagline: "Spacious, Smart & Sustainable SUV",
    desc: "The MG ZS EV delivers spacious comfort, smart safety systems, and efficient electric driving for families, businesses, and fleet operations.",
    image: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1780314320/Remove_the_text_from_the_202606011444_imarg4.jpg",
    alt: "Modern electric concept car",
    features: ["Spacious SUV Design", "Smart Safety Features", "Efficient Electric Performance", "Comfortable Interior"],
    range: "320 km",
    charge: "11 kW",
    power: "130 kW",
  },
];

const specIcons = [
  { icon: Gauge, label: "Range" },
  { icon: BatteryCharging, label: "Charging" },
  { icon: Shield, label: "Power" },
];

export function Vehicles() {
  const [active, setActive] = useState(0);
  const v = vehicles[active];

  return (
    <section id="vehicles" className="py-24" style={{ background: "#fff", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span
            className="text-sm font-semibold tracking-widest uppercase mb-3 block"
            style={{ color: "#36ac43" }}
          >
            Our Lineup
          </span>
          <h2
            className="mb-4 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, color: "#000" }}
          >
            Electric Vehicles
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Explore our growing lineup of modern electric vehicles designed for efficiency,
            sustainability, comfort, and intelligent mobility.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {vehicles.map((v, i) => (
            <button
              key={v.name}
              onClick={() => setActive(i)}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: active === i ? "#36ac43" : "rgba(0,0,0,0.05)",
                color: active === i ? "#fff" : "#555",
                border: active === i ? "none" : "1px solid rgba(0,0,0,0.08)",
                transform: active === i ? "scale(1.05)" : "scale(1)",
              }}
            >
              {v.name}
            </button>
          ))}
        </div>

        {/* Vehicle showcase */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{ border: "1px solid rgba(0,0,0,0.08)" }}
        >
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-80 lg:h-auto bg-gray-100">
              <img
                key={v.image}
                src={v.image}
                alt={v.alt}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.5) 0%, transparent 60%)" }}
              />
              <div className="absolute top-6 left-6">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: "#36ac43", color: "#fff" }}
                >
                  <Leaf size={12} /> Electric Vehicle
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-8 lg:p-12" style={{ background: "#fdfdfd" }}>
              <p className="text-sm font-semibold mb-1" style={{ color: "#36ac43" }}>
                {v.tagline}
              </p>
              <h3
                className="mb-4"
                style={{ fontSize: "2rem", fontWeight: 800, color: "#000", lineHeight: 1.1 }}
              >
                {v.name}
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed text-sm">{v.desc}</p>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[v.range, v.charge, v.power].map((val, i) => {
                  const Icon = specIcons[i].icon;
                  return (
                    <div
                      key={i}
                      className="p-4 rounded-xl text-center"
                      style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
                    >
                      <Icon size={18} color="#36ac43" className="mx-auto mb-2" />
                      <p className="font-bold text-black text-lg">{val}</p>
                      <p className="text-xs text-gray-400">{specIcons[i].label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 mb-8">
                {v.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(54,172,67,0.1)" }}
                    >
                      <span style={{ color: "#36ac43", fontSize: "10px" }}>✓</span>
                    </span>
                    {f}
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:opacity-90"
                  style={{ background: "#36ac43" }}
                >
                  Inquire Now
                </Link>
                <Link
                  to="/financing"
                  className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:bg-gray-100"
                  style={{ border: "1px solid rgba(0,0,0,0.1)", color: "#000" }}
                >
                  Financing Options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
