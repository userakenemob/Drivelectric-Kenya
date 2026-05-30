import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router";

const stats = [
  { value: 100, suffix: "%", label: "Electric Future" },
  { value: 40, suffix: "%", label: "Cost Reduction" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 12, suffix: "+", label: "Cities Covered" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = target / 60;
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 20);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} style={{ color: "#36ac43" }}>
      {count}
      {suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1760538970459-c77b1e747e89?w=1920&h=1080&fit=crop&auto=format"
          alt="Electric vehicle charging station"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 100%)",
          }}
        />
        {/* Green tint overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(54,172,67,0.05)" }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              background: "#36ac43",
              left: `${10 + i * 12}%`,
              top: `${20 + ((i * 37) % 60)}%`,
              animation: `float ${3 + (i % 3)}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-6"
            style={{
              background: "rgba(54,172,67,0.15)",
              border: "1px solid rgba(54,172,67,0.3)",
              color: "#36ac43",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#36ac43] animate-pulse" />
            Kenya's Electric Mobility Leader
          </div>

          {/* Headline */}
          <h1
            className="text-white mb-6 leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05 }}
          >
            Driving Kenya Into{" "}
            <span style={{ color: "#36ac43" }}>the Electric</span>
            <br />
            Future
          </h1>

          <p
            className="text-white/75 mb-10 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", maxWidth: "560px", fontWeight: 400 }}
          >
            Transforming mobility through sustainable electric transportation,
            intelligent charging infrastructure, and clean energy innovation
            across East Africa.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{ background: "#36ac43", boxShadow: "0 0 24px rgba(54,172,67,0.35)" }}
            >
              Explore Solutions <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                backdropFilter: "blur(8px)",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl"
          style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center py-6 px-4 text-center"
              style={{ background: "rgba(0,0,0,0.2)" }}
            >
              <span
                className="mb-1"
                style={{ fontSize: "2.2rem", fontWeight: 800, lineHeight: 1 }}
              >
                <CountUp target={s.value} suffix={s.suffix} />
              </span>
              <span className="text-white/60 text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors bg-transparent border-none cursor-pointer"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>

      <style>{`
        @keyframes float {
          from { transform: translateY(0px); }
          to { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}
