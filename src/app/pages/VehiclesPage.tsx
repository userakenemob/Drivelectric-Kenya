import { Vehicles } from "../components/Vehicles";
import { Link } from "react-router";
import { ArrowRight, BatteryCharging, Gauge, Zap, Leaf, ShieldCheck, Wrench } from "lucide-react";

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 flex items-center" style={{ background: "#000", fontFamily: "Poppins, sans-serif", minHeight: "55vh" }}>
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1711921127505-f4a8727329a5?w=1600&h=800&fit=crop&auto=format" alt="Electric car on road" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 100%)" }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Vehicles</span>
        </nav>
        <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Our Lineup</span>
        <h1 className="text-white mb-4" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, lineHeight: 1.1 }}>Electric Vehicles</h1>
        <p className="text-white/60 max-w-xl" style={{ lineHeight: 1.8 }}>
          Explore our growing lineup of modern EVs designed for efficiency, sustainability, comfort, and intelligent mobility across East Africa.
        </p>
      </div>
    </section>
  );
}

/* ── EV Benefits ── */
const benefits = [
  { icon: BatteryCharging, title: "Zero Fuel Costs", desc: "Charge for a fraction of the cost of petrol or diesel — save up to 70% on energy expenses." },
  { icon: Wrench, title: "Lower Maintenance", desc: "Fewer moving parts mean fewer breakdowns. No oil changes, less brake wear, lower servicing bills." },
  { icon: Leaf, title: "Zero Emissions", desc: "Contribute to cleaner air in Nairobi and across Kenya by eliminating tailpipe emissions entirely." },
  { icon: ShieldCheck, title: "Smart Safety", desc: "Modern EVs come loaded with advanced driver assistance systems and intelligent safety features." },
  { icon: Gauge, title: "Instant Torque", desc: "Electric motors deliver full torque from a standstill — smooth, fast, and responsive acceleration." },
  { icon: Zap, title: "Smart Charging", desc: "Charge overnight at home, at work, or at one of our growing network of charging hubs nationwide." },
];

function EVBenefits() {
  return (
    <section className="py-24" style={{ background: "#fdfdfd", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Why Go Electric?</span>
          <h2 className="mb-4" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 800, color: "#000" }}>The EV Advantage</h2>
          <p className="text-gray-500 max-w-xl mx-auto" style={{ lineHeight: 1.8 }}>
            Switching to an electric vehicle isn't just better for the planet — it's better for your wallet and your driving experience.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="p-7 rounded-2xl flex gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(54,172,67,0.1)" }}>
                  <Icon size={22} color="#36ac43" />
                </div>
                <div>
                  <h3 className="font-bold text-black mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Comparison Table ── */
const comparison = [
  { feature: "Fuel Cost (monthly)", ev: "KES 3,000–5,000", petrol: "KES 15,000–25,000" },
  { feature: "Servicing Frequency", ev: "Every 20,000 km", petrol: "Every 5,000 km" },
  { feature: "Average Service Cost", ev: "KES 5,000–8,000", petrol: "KES 12,000–20,000" },
  { feature: "Engine Oil Changes", ev: "None required", petrol: "Every 5,000 km" },
  { feature: "CO₂ Emissions", ev: "Zero tailpipe", petrol: "120–200 g/km" },
  { feature: "Noise Level", ev: "Near silent", petrol: "60–80 dB" },
  { feature: "Acceleration (0–100)", ev: "6–9 seconds", petrol: "8–14 seconds" },
  { feature: "Government Incentives", ev: "Tax exemptions", petrol: "None" },
];

function ComparisonTable() {
  return (
    <section className="py-24" style={{ background: "#fff", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>EV vs ICE</span>
          <h2 className="mb-4" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 800, color: "#000" }}>Electric vs Petrol: The Numbers</h2>
          <p className="text-gray-500 max-w-xl mx-auto">See why more Kenyan businesses and individuals are choosing electric over petrol.</p>
        </div>
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
          <div className="grid grid-cols-3 px-6 py-4" style={{ background: "#000" }}>
            <p className="text-white/50 text-sm font-semibold">Feature</p>
            <p className="text-sm font-bold text-center" style={{ color: "#36ac43" }}>⚡ Electric (EV)</p>
            <p className="text-white/50 text-sm font-semibold text-center">⛽ Petrol (ICE)</p>
          </div>
          {comparison.map((row, i) => (
            <div
              key={row.feature}
              className="grid grid-cols-3 px-6 py-4 items-center"
              style={{ background: i % 2 === 0 ? "#fff" : "#fdfdfd", borderTop: "1px solid rgba(0,0,0,0.05)" }}
            >
              <p className="text-sm font-medium text-gray-700">{row.feature}</p>
              <p className="text-sm font-semibold text-center" style={{ color: "#36ac43" }}>{row.ev}</p>
              <p className="text-sm text-gray-500 text-center">{row.petrol}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Charging Network ── */
function ChargingNetwork() {
  return (
    <section className="py-24" style={{ background: "#000", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Charge Anywhere</span>
            <h2 className="text-white mb-6" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 800 }}>Our Charging Network</h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              When you buy or lease through Drivelectric Kenya, you get access to our growing network of charging stations
              across Nairobi, Mombasa, Kisumu, and beyond — plus priority support for home and office charger installation.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { value: "30+", label: "Charging Stations" },
                { value: "12+", label: "Cities Covered" },
                { value: "24/7", label: "Network Uptime" },
                { value: "Fast DC", label: "Charging Available" },
              ].map((s) => (
                <div key={s.label} className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(54,172,67,0.15)" }}>
                  <p style={{ fontSize: "1.6rem", fontWeight: 800, color: "#36ac43", lineHeight: 1 }}>{s.value}</p>
                  <p className="text-white/50 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <Link to="/solutions" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90" style={{ background: "#36ac43" }}>
              Charging Infrastructure <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-square bg-gray-900">
            <img src="https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1780135482/1763972956978_bkjyqo.jpg" alt="EV charging" className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="p-4 rounded-xl" style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)", border: "1px solid rgba(54,172,67,0.2)" }}>
                <p className="text-white font-bold mb-1">Free Home Charger Installation</p>
                <p className="text-white/60 text-xs">Included with every vehicle purchase or lease agreement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Financing CTA ── */
function FinancingCTA() {
  return (
    <section className="py-24" style={{ background: "#fdfdfd", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Make It Yours</span>
        <h2 className="mb-4" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 800, color: "#000" }}>Ready to Get Behind the Wheel?</h2>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto" style={{ lineHeight: 1.8 }}>
          Our flexible Lease-to-Own and PayGo financing options make owning an electric vehicle easier than ever.
          Start with a deposit that works for your budget.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/financing" className="px-7 py-3.5 rounded-xl text-white font-semibold transition-all hover:opacity-90 hover:scale-105 flex items-center gap-2" style={{ background: "#36ac43" }}>
            View Financing Options <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="px-7 py-3.5 rounded-xl font-semibold transition-all hover:bg-gray-100" style={{ border: "1px solid rgba(0,0,0,0.12)", color: "#000" }}>
            Talk to an Expert
          </Link>
        </div>
      </div>
    </section>
  );
}

export function VehiclesPage() {
  return (
    <>
      <PageHero />
      <Vehicles />
      <EVBenefits />
      <ComparisonTable />
      <ChargingNetwork />
      <FinancingCTA />
    </>
  );
}
