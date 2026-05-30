import { Lightbulb, TrendingDown, HeadphonesIcon, BarChart3 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Sustainable Innovation",
    text: "We combine clean energy and advanced electric mobility technologies to deliver future-focused solutions.",
  },
  {
    icon: TrendingDown,
    title: "Operational Efficiency",
    text: "Our solutions help reduce fuel costs, maintenance expenses, and environmental impact significantly.",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    text: "Our experienced team provides consultation, implementation, and continuous post-deployment support.",
  },
  {
    icon: BarChart3,
    title: "Scalable Infrastructure",
    text: "We build systems designed for long-term growth and evolving mobility needs across East Africa.",
  },
];

const achievementStats = [
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 35, suffix: "%", label: "Avg. Cost Savings" },
  { value: 200, suffix: "+", label: "EVs Deployed" },
  { value: 15, suffix: "+", label: "Charging Hubs" },
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
          const step = target / 60;
          const t = setInterval(() => {
            v += step;
            if (v >= target) { setCount(target); clearInterval(t); }
            else setCount(Math.floor(v));
          }, 20);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      <span style={{ color: "#36ac43", fontWeight: 800, fontSize: "2.5rem", lineHeight: 1 }}>
        {count}{suffix}
      </span>
    </div>
  );
}

export function WhyUs() {
  return (
    <section id="why" className="py-24" style={{ background: "#fdfdfd", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span
              className="text-sm font-semibold tracking-widest uppercase mb-3 block"
              style={{ color: "#36ac43" }}
            >
              Why Choose Us
            </span>
            <h2
              className="mb-6 leading-tight text-left"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, color: "#000" }}
            >
              Why Drivelectric Kenya
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed" style={{ lineHeight: 1.8 }}>
              We're more than an EV company — we're your long-term partner in building
              a cleaner, more efficient mobility ecosystem for East Africa.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {reasons.map((r) => {
                const Icon = r.icon;
                return (
                  <div
                    key={r.title}
                    className="p-5 rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-1 cursor-default"
                    style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                      style={{ background: "rgba(54,172,67,0.1)" }}
                    >
                      <Icon size={20} color="#36ac43" />
                    </div>
                    <h4 className="font-bold text-black mb-2 text-sm">{r.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{r.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — stats + image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-square bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1760539120788-8529cccfea75?w=700&h=700&fit=crop&auto=format"
                alt="Black electric car charging next to brick building"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.7) 100%)" }}
              />
            </div>

            {/* Stats overlay */}
            <div
              className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3"
            >
              {achievementStats.map((s, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl text-center"
                  style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)", border: "1px solid rgba(54,172,67,0.2)" }}
                >
                  <CountUp target={s.value} suffix={s.suffix} />
                  <p className="text-white/70 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
