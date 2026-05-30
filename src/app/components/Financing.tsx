import { useState } from "react";
import { CheckCircle, Calculator, Key, TrendingUp, DollarSign } from "lucide-react";

const leasebenefits = [
  { icon: DollarSign, title: "Flexible Payment Plans", text: "Affordable structured payment options designed for individuals and businesses." },
  { icon: Key, title: "Immediate Vehicle Access", text: "Start driving your electric vehicle immediately after approval." },
  { icon: TrendingUp, title: "Ownership Pathway", text: "Build towards complete ownership while enjoying the benefits of electric mobility." },
  { icon: CheckCircle, title: "Reduced Running Costs", text: "Save significantly on fuel and servicing expenses throughout the ownership journey." },
];

const paygobenefits = [
  { icon: DollarSign, title: "Affordable Mobility Access", text: "Get started with lower upfront costs and minimal entry barriers." },
  { icon: Calculator, title: "Flexible Usage Plans", text: "Choose mobility plans that match your operational or personal transportation needs." },
  { icon: TrendingUp, title: "Income Generation", text: "Ideal for ride-hailing, delivery, logistics, and commercial transport operations." },
  { icon: CheckCircle, title: "Sustainable Transport", text: "Operate clean, efficient electric vehicles while reducing operational costs." },
];

export function Financing() {
  const [tab, setTab] = useState<"lease" | "paygo">("lease");
  const [deposit, setDeposit] = useState(300000);
  const [months, setMonths] = useState(36);

  const vehiclePrice = 2800000;
  const remaining = vehiclePrice - deposit;
  const monthly = Math.round(remaining / months);

  return (
    <section id="financing" className="py-24" style={{ background: "#fdfdfd", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span
            className="text-sm font-semibold tracking-widest uppercase mb-3 block"
            style={{ color: "#36ac43" }}
          >
            Financing Options
          </span>
          <h2
            className="mb-4"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, color: "#000" }}
          >
            Drive Your Electric Future Today
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Flexible financing models designed to make electric mobility accessible for everyone.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div
            className="flex rounded-xl p-1 gap-1"
            style={{ background: "rgba(0,0,0,0.05)" }}
          >
            {(["lease", "paygo"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{
                  background: tab === t ? "#36ac43" : "transparent",
                  color: tab === t ? "#fff" : "#555",
                }}
              >
                {t === "lease" ? "Lease to Own" : "PayGo Model"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits */}
          <div>
            <h3
              className="mb-2"
              style={{ fontSize: "1.5rem", fontWeight: 700, color: "#000" }}
            >
              {tab === "lease" ? "Lease to Own" : "PayGo Electric Mobility"}
            </h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              {tab === "lease"
                ? "Customers can make an initial deposit and continue with manageable monthly payments while using the vehicle, eventually achieving full ownership."
                : "Our PayGo model provides flexible access to electric vehicles through affordable usage-based mobility solutions. Perfect for ride-hailing, delivery, and logistics."}
            </p>

            <div className="grid gap-4">
              {(tab === "lease" ? leasebenefits : paygobenefits).map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="flex gap-4 p-4 rounded-xl transition-all duration-200 hover:shadow-md"
                    style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(54,172,67,0.1)" }}
                    >
                      <Icon size={18} color="#36ac43" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black text-sm mb-1">{b.title}</h4>
                      <p className="text-gray-500 text-sm">{b.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Calculator */}
          <div
            className="rounded-2xl p-8"
            style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Calculator size={20} color="#36ac43" />
              <h4 className="font-bold text-black text-lg">
                {tab === "lease" ? "Lease Calculator" : "PayGo Estimator"}
              </h4>
            </div>

            {tab === "lease" ? (
              <>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-600">Initial Deposit (KES)</label>
                    <span className="text-sm font-bold" style={{ color: "#36ac43" }}>
                      {deposit.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={100000}
                    max={1400000}
                    step={50000}
                    value={deposit}
                    onChange={(e) => setDeposit(Number(e.target.value))}
                    className="w-full accent-[#36ac43]"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>100K</span><span>1.4M</span>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-600">Repayment Period</label>
                    <span className="text-sm font-bold" style={{ color: "#36ac43" }}>{months} months</span>
                  </div>
                  <input
                    type="range"
                    min={12}
                    max={60}
                    step={6}
                    value={months}
                    onChange={(e) => setMonths(Number(e.target.value))}
                    className="w-full accent-[#36ac43]"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>12 mo</span><span>60 mo</span>
                  </div>
                </div>

                <div
                  className="rounded-xl p-6 mb-6"
                  style={{ background: "rgba(54,172,67,0.06)", border: "1px solid rgba(54,172,67,0.15)" }}
                >
                  <p className="text-sm text-gray-500 mb-1">Estimated Monthly Payment</p>
                  <p style={{ fontSize: "2.2rem", fontWeight: 800, color: "#36ac43", lineHeight: 1 }}>
                    KES {monthly.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">Vehicle price: KES 2,800,000 | Balance: KES {remaining.toLocaleString()}</p>
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { plan: "Basic", price: "KES 3,500/day", features: ["8 hrs access", "100 km included", "Charging included"] },
                    { plan: "Pro", price: "KES 5,500/day", features: ["16 hrs access", "200 km included", "Priority support"] },
                  ].map((p) => (
                    <div
                      key={p.plan}
                      className="p-4 rounded-xl"
                      style={{ border: "1px solid rgba(0,0,0,0.08)", background: "#fdfdfd" }}
                    >
                      <p className="font-bold text-black mb-1">{p.plan}</p>
                      <p className="font-semibold mb-3" style={{ color: "#36ac43", fontSize: "0.9rem" }}>{p.price}</p>
                      {p.features.map((f) => (
                        <p key={f} className="text-xs text-gray-500 flex items-center gap-1 mb-1">
                          <span style={{ color: "#36ac43" }}>✓</span> {f}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>

                <div
                  className="rounded-xl p-5 mb-6"
                  style={{ background: "rgba(54,172,67,0.06)", border: "1px solid rgba(54,172,67,0.15)" }}
                >
                  <p className="text-sm text-gray-600">Monthly income potential (ride-hailing)</p>
                  <p style={{ fontSize: "1.8rem", fontWeight: 800, color: "#36ac43" }}>KES 80,000+</p>
                  <p className="text-xs text-gray-400 mt-1">Based on 26 active days/month</p>
                </div>
              </>
            )}

            <a
              href="#contact"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: "#36ac43" }}
            >
              Apply Now — It's Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
