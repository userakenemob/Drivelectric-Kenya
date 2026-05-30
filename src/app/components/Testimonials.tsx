import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Mwangi",
    role: "Fleet Manager, Nairobi Transport Co.",
    text: "Drivelectric Kenya helped us modernize our fleet operations while significantly reducing fuel and maintenance costs. Their team was professional throughout.",
    initials: "JM",
    color: "#36ac43",
  },
  {
    name: "Amina Odhiambo",
    role: "CEO, GreenLogistics Kenya",
    text: "Professional, innovative, and highly reliable electric mobility solutions. The transition was seamless and our drivers love the new EVs. We've cut costs by 38%.",
    initials: "AO",
    color: "#1a8a26",
  },
  {
    name: "David Kamau",
    role: "Head of Operations, EastAfrica Couriers",
    text: "The charging infrastructure installation was completed ahead of schedule. The smart management system gives us full visibility into our fleet's energy usage.",
    initials: "DK",
    color: "#36ac43",
  },
  {
    name: "Sarah Njoki",
    role: "Director, Sustainable Mobility Institute",
    text: "Drivelectric Kenya is proving that sustainable transport isn't just an aspiration — it's a practical and profitable business decision for East African companies.",
    initials: "SN",
    color: "#1a8a26",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <section id="testimonials" className="py-24" style={{ background: "#fff", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-4xl mx-auto px-6">
        <span
          className="text-sm font-semibold tracking-widest uppercase mb-3 block"
          style={{ color: "#36ac43" }}
        >
          Client Stories
        </span>
        <h2
          className="mb-16 text-left"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, color: "#000" }}
        >
          What Our Clients Say
        </h2>

        <div
          className="relative rounded-3xl p-10 md:p-14"
          style={{ background: "#fdfdfd", border: "1px solid rgba(0,0,0,0.07)" }}
        >
          <Quote
            size={48}
            className="mx-auto mb-6 opacity-10"
            color="#36ac43"
          />

          <blockquote
            key={active}
            className="text-gray-700 mb-8"
            style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.8, fontStyle: "italic" }}
          >
            "{t.text}"
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
              style={{ background: t.color }}
            >
              {t.initials}
            </div>
            <div className="text-left">
              <p className="font-bold text-black">{t.name}</p>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: active === i ? "24px" : "8px",
                  height: "8px",
                  background: active === i ? "#36ac43" : "rgba(0,0,0,0.15)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
