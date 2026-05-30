import { Financing } from "../components/Financing";
import { Link } from "react-router";
import { ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 flex items-center" style={{ background: "#000", fontFamily: "Poppins, sans-serif", minHeight: "55vh" }}>
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1760538970459-c77b1e747e89?w=1600&h=800&fit=crop&auto=format" alt="EV charging" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.6))" }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Financing</span>
        </nav>
        <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Flexible Ownership</span>
        <h1 className="text-white mb-4" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, lineHeight: 1.1 }}>Drive Today. Own Tomorrow.</h1>
        <p className="text-white/60 max-w-xl" style={{ lineHeight: 1.8 }}>
          Our Lease-to-Own and PayGo models make electric mobility accessible for individuals, businesses, and commercial operators across Kenya.
        </p>
      </div>
    </section>
  );
}

/* ── Process Steps ── */
const leaseSteps = [
  { num: "01", title: "Choose Your Vehicle", desc: "Browse our EV lineup and select the model that suits your lifestyle or business needs." },
  { num: "02", title: "Submit Application", desc: "Fill out our simple financing application form. We'll review it within 24–48 hours." },
  { num: "03", title: "Pay Initial Deposit", desc: "Make your agreed initial deposit to secure your vehicle and begin your lease agreement." },
  { num: "04", title: "Drive & Pay Monthly", desc: "Collect your keys and start driving. Pay your monthly installment on schedule." },
  { num: "05", title: "Complete Ownership", desc: "After fulfilling all payments, the vehicle title transfers fully to your name." },
];

function HowLeaseWorks() {
  return (
    <section className="py-24" style={{ background: "#fff", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Step by Step</span>
          <h2 className="mb-4" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 800, color: "#000" }}>How Lease to Own Works</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Five simple steps from application to full ownership of your electric vehicle.</p>
        </div>
        <div className="space-y-5">
          {leaseSteps.map((s, i) => (
            <div
              key={s.num}
              className="flex gap-6 items-start p-6 rounded-2xl transition-all duration-200 hover:shadow-md"
              style={{ background: "#fdfdfd", border: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0" style={{ background: "#36ac43" }}>
                {s.num}
              </div>
              <div>
                <h3 className="font-bold text-black mb-1">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PayGo Use Cases ── */
const useCases = [
  { emoji: "🚗", title: "Ride-Hailing", desc: "Run a profitable ride-hailing business on platforms like Uber or Bolt with lower operating costs and higher daily earnings." },
  { emoji: "📦", title: "Last-Mile Delivery", desc: "Operate delivery routes for e-commerce, courier services, or food delivery at a fraction of petrol vehicle costs." },
  { emoji: "🏢", title: "Corporate Shuttle", desc: "Provide staff transportation services with a reliable, low-cost electric vehicle under our flexible PayGo plan." },
  { emoji: "🛒", title: "Market & Trade", desc: "Transport goods between markets, warehouses, and retail locations with an affordable electric payload vehicle." },
];

function PayGoUseCases() {
  return (
    <section className="py-24" style={{ background: "#fdfdfd", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Who It's For</span>
          <h2 className="mb-4" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 800, color: "#000" }}>PayGo Use Cases</h2>
          <p className="text-gray-500 max-w-xl mx-auto">The PayGo model is perfect for income-generating activities — drive, earn, and progress toward ownership.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((u) => (
            <div key={u.title} className="p-7 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}>
              <div className="text-4xl mb-4">{u.emoji}</div>
              <h3 className="font-bold text-black mb-3">{u.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{u.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 rounded-3xl overflow-hidden relative" style={{ minHeight: "280px" }}>
          <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1400&h=500&fit=crop&auto=format" alt="EV in commercial use" className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)" }} />
          <div className="relative z-10 p-10 md:p-14 max-w-lg">
            <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Income Potential</span>
            <h3 className="text-white mb-3" style={{ fontSize: "1.6rem", fontWeight: 800 }}>Earn KES 80,000+ Monthly</h3>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">Based on 26 active working days per month on ride-hailing or delivery platforms. Your EV pays for itself.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm" style={{ background: "#36ac43" }}>
              Apply for PayGo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
const faqs = [
  { q: "What is the minimum deposit for a Lease-to-Own agreement?", a: "Our minimum deposit starts from KES 100,000 depending on the vehicle model and agreed repayment period. We work with you to find a deposit level that fits your budget." },
  { q: "How long is a typical lease agreement?", a: "Our lease agreements range from 12 to 60 months (1–5 years). Longer terms result in lower monthly payments, while shorter terms mean you reach full ownership sooner." },
  { q: "What happens if I miss a monthly payment?", a: "We encourage clients to communicate early if they anticipate payment difficulties. We offer grace periods and can renegotiate payment schedules to avoid defaults where possible." },
  { q: "Is insurance included in the lease?", a: "Comprehensive vehicle insurance is required for all lease agreements. We partner with leading Kenyan insurers to offer competitive rates bundled into your monthly plan if preferred." },
  { q: "Can businesses apply for fleet financing?", a: "Yes. We offer tailored fleet financing for companies looking to electrify 5 or more vehicles, with customized payment structures, bulk pricing, and fleet management support included." },
  { q: "Who qualifies for the PayGo model?", a: "Any individual 18+ with a valid driving licence and proof of income-generating activity (ride-hailing, delivery, logistics, etc.) can apply. Approvals are typically done within 3 business days." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24" style={{ background: "#fff", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Common Questions</span>
          <h2 className="mb-4" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 800, color: "#000" }}>Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                style={{ background: open === i ? "rgba(54,172,67,0.04)" : "#fdfdfd" }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex items-center gap-3">
                  <HelpCircle size={16} color="#36ac43" className="flex-shrink-0" />
                  <span className="font-semibold text-black text-sm">{f.q}</span>
                </div>
                <ChevronDown size={16} color="#36ac43" className={`flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-5 pt-0" style={{ background: "rgba(54,172,67,0.04)" }}>
                  <p className="text-gray-600 text-sm leading-relaxed pl-7">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-5 text-sm">Still have questions? Our financing team is happy to help.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm" style={{ background: "#36ac43" }}>
            Talk to a Financing Expert <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function VehiclesCTA() {
  return (
    <section className="py-20" style={{ background: "#fdfdfd", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="mb-4" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 800, color: "#000" }}>Find Your Perfect EV First</h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">Browse our vehicle lineup to find the right EV for your needs, then choose a financing plan that works for you.</p>
        <Link to="/vehicles" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold transition-all hover:opacity-90 hover:scale-105" style={{ background: "#36ac43" }}>
          Browse Vehicles <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

export function FinancingPage() {
  return (
    <>
      <PageHero />
      <Financing />
      <HowLeaseWorks />
      <PayGoUseCases />
      <FAQ />
      <VehiclesCTA />
    </>
  );
}
