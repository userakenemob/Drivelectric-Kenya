import { useEffect, useRef, useState } from "react";
import { Wind, Fuel, Globe, Building2 } from "lucide-react";

const impacts = [
  { icon: Wind, value: 450, suffix: "t", label: "CO₂ Emissions Avoided", sub: "Tonnes of carbon kept out of the atmosphere" },
  { icon: Fuel, value: 35, suffix: "%", label: "Average Fleet Cost Savings", sub: "Reduction in fuel & maintenance expenses" },
  { icon: Globe, value: 12, suffix: "+", label: "Cities Reached", sub: "Across Kenya and East Africa" },
  { icon: Building2, value: 30, suffix: "+", label: "Charging Hubs Installed", sub: "Smart infrastructure nationwide" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let v = 0;
          const step = target / 80;
          const t = setInterval(() => {
            v += step;
            if (v >= target) { setCount(target); clearInterval(t); }
            else setCount(Math.floor(v));
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="flex items-end gap-1 justify-center">
      <span style={{ fontSize: "3rem", fontWeight: 800, color: "#36ac43", lineHeight: 1 }}>{count}</span>
      <span style={{ fontSize: "2rem", fontWeight: 800, color: "#36ac43", lineHeight: 1.3 }}>{suffix}</span>
    </div>
  );
}

export function Impact() {
  return (
    <section id="impact" className="py-24 relative overflow-hidden" style={{ background: "#000", fontFamily: "Poppins, sans-serif" }}>
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1724041875334-0a6397111c7e?w=1920&h=900&fit=crop&auto=format"
          alt="Solar panels on a building"
          className="w-full h-full object-cover opacity-20"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%)" }}
        />
      </div>

      {/* Green glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#36ac43" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span
            className="text-sm font-semibold tracking-widest uppercase mb-3 block"
            style={{ color: "#36ac43" }}
          >
            Making a Difference
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800 }}
          >
            Our Impact
          </h2>
          <p className="text-white/60 max-w-xl" style={{ lineHeight: 1.8 }}>
            Drivelectric Kenya is helping organizations reduce carbon emissions, optimize
            transportation costs, and embrace sustainable energy technologies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#36ac43]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6"
                  style={{ background: "rgba(54,172,67,0.15)" }}
                >
                  <Icon size={22} color="#36ac43" />
                </div>
                <CountUp target={item.value} suffix={item.suffix} />
                <p className="text-white font-semibold mt-3 mb-1 text-sm">{item.label}</p>
                <p className="text-white/40 text-xs">{item.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
