import { Services } from "../components/Services";
import { Link, useLocation } from "react-router";
import { ArrowRight, Zap, Car, Truck, Sun, CheckCircle, Clock, DollarSign, Leaf, BarChart3 } from "lucide-react";
import { useEffect } from "react";

function PageHero() {
  return (
    <section
      className="relative pt-32 pb-20"
      style={{ background: "#000", fontFamily: "Poppins, sans-serif", minHeight: "50vh", display: "flex", alignItems: "center" }}
    >
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1600&h=800&fit=crop&auto=format" alt="EV charger" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.6))" }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Solutions</span>
        </nav>
        <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>What We Offer</span>
        <h1 className="text-white mb-4" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, lineHeight: 1.1 }}>Our Solutions</h1>
        <p className="text-white/60 max-w-xl" style={{ lineHeight: 1.8 }}>
          End-to-end electric mobility and energy solutions tailored for businesses, institutions, and individuals across East Africa.
        </p>
        {/* Quick nav */}
        <div className="flex flex-wrap gap-3 mt-8">
          {[
            { label: "EV Solutions", id: "ev-solutions" },
            { label: "Charging Infrastructure", id: "charging-infrastructure" },
            { label: "Fleet Electrification", id: "fleet-electrification" },
            { label: "Renewable Energy", id: "renewable-energy" },
          ].map((item) => (
            <Link
              key={item.id}
              to={`/solutions/${item.id}`}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:opacity-90"
              style={{ background: "rgba(54,172,67,0.15)", border: "1px solid rgba(54,172,67,0.3)", color: "#36ac43" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Deep Dive Data ── */
const deepDives = [
  {
    id: "ev-solutions",
    icon: Car,
    title: "Electric Vehicle Solutions",
    tagline: "From first EV to full fleet — we handle everything.",
    desc: "Transitioning to electric vehicles is a significant decision. Drivelectric Kenya walks with you through every step — from understanding which EV model fits your needs, to sourcing, importing, registering, deploying, and maintaining your vehicles. We remove the complexity so you can focus on running your operations.",
    points: [
      "Independent EV advisory and model selection consulting",
      "Vehicle sourcing, importation, and duty optimization",
      "Registration, inspection, and roadworthiness compliance",
      "Driver training and EV operation best practices",
      "Telematics and fleet tracking system setup",
      "After-sales support, warranty coordination, and servicing",
    ],
    stats: [
      { value: "200+", label: "EVs Deployed" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "40%", label: "Avg. Cost Reduction" },
      { value: "12+", label: "Cities Served" },
    ],
    benefits: [
      { icon: DollarSign, text: "Save up to 70% on fuel costs compared to petrol vehicles" },
      { icon: Clock, text: "Faster deployment timelines than traditional vehicle sourcing" },
      { icon: Leaf, text: "Zero tailpipe emissions for a cleaner operational footprint" },
      { icon: BarChart3, text: "Real-time reporting and ROI tracking from day one" },
    ],
    img: "https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?w=800&h=560&fit=crop&auto=format",
    imgAlt: "Modern electric concept car",
    caseStudy: { client: "Corporate Transport Co.", result: "Reduced monthly fuel costs from KES 180,000 to KES 22,000 after deploying 12 electric sedans." },
  },
  {
    id: "charging-infrastructure",
    icon: Zap,
    title: "Charging Infrastructure",
    tagline: "Smart charging solutions for homes, offices & commercial spaces.",
    desc: "A reliable charging network is the backbone of any successful EV operation. Drivelectric Kenya designs, supplies, installs, and maintains intelligent EV charging infrastructure across Kenya — from single home chargers to multi-bay commercial charging hubs with remote management capabilities.",
    points: [
      "Site assessment, load analysis, and feasibility studies",
      "AC Level 1 & Level 2 home and office charger installation",
      "DC fast charging (22kW–150kW) for commercial hubs",
      "Smart charging management software and mobile app",
      "Load balancing and energy management systems",
      "24/7 remote monitoring, diagnostics, and maintenance",
    ],
    stats: [
      { value: "30+", label: "Charging Hubs Installed" },
      { value: "99.2%", label: "Network Uptime" },
      { value: "24/7", label: "Remote Monitoring" },
      { value: "150kW", label: "Max DC Fast Charge" },
    ],
    benefits: [
      { icon: Zap, text: "AC and DC fast charging options to match any operational need" },
      { icon: BarChart3, text: "Smart software tracks energy usage and reduces electricity costs" },
      { icon: Clock, text: "Minimal business disruption during installation" },
      { icon: DollarSign, text: "Monetize charging through pay-per-use for customers or staff" },
    ],
    img: "https://images.unsplash.com/photo-1760538978585-f82dc257ec15?w=800&h=560&fit=crop&auto=format",
    imgAlt: "Woman plugging electric car into wall charger",
    caseStudy: { client: "Westlands Commercial Centre", result: "Installed 20-bay dual-port charging hub generating KES 85,000+ in monthly revenue from public EV sessions." },
  },
  {
    id: "fleet-electrification",
    icon: Truck,
    title: "Fleet Electrification",
    tagline: "Transform your fleet. Cut costs. Go green.",
    desc: "Fleet electrification is the single most impactful step a business can take toward lower operational costs and sustainability. Whether you run 5 vehicles or 500, Drivelectric Kenya delivers a complete electrification roadmap — from audit and planning through vehicle procurement, infrastructure deployment, and ongoing fleet management.",
    points: [
      "Comprehensive fleet audit and electrification readiness assessment",
      "Total cost of ownership (TCO) analysis and ROI projections",
      "Vehicle selection, procurement, and phased deployment planning",
      "Depot charging infrastructure design and installation",
      "Fleet management platform integration with live telematics",
      "Driver training, change management, and performance reporting",
    ],
    stats: [
      { value: "50+", label: "Fleets Electrified" },
      { value: "35%", label: "Avg. Cost Savings" },
      { value: "3mo", label: "Typical Payback Start" },
      { value: "100%", label: "Uptime Guarantee" },
    ],
    benefits: [
      { icon: DollarSign, text: "Eliminate fuel costs and reduce servicing expenses by up to 40%" },
      { icon: BarChart3, text: "Gain full visibility into fleet performance and energy usage" },
      { icon: Leaf, text: "Meet ESG and sustainability reporting targets for your organization" },
      { icon: Clock, text: "Phased rollout means zero disruption to ongoing operations" },
    ],
    img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=560&fit=crop&auto=format",
    imgAlt: "Electric vehicle charger plugged into car",
    caseStudy: { client: "East Africa Logistics Ltd.", result: "Electrified 50-vehicle delivery fleet — saving KES 4.2M annually on fuel and reducing CO₂ emissions by 180 tonnes per year." },
  },
  {
    id: "renewable-energy",
    icon: Sun,
    title: "Renewable Energy Integration",
    tagline: "Charge your fleet with the power of the sun.",
    desc: "Why pay for grid electricity when you can generate your own? Drivelectric Kenya integrates solar photovoltaic (PV) systems with EV charging infrastructure to create self-sustaining clean energy mobility hubs. Our hybrid systems reduce energy bills, improve resilience, and qualify your operations for green certification.",
    points: [
      "Solar PV system design, sizing, and installation",
      "Solar + EV charging hybrid system integration",
      "Battery energy storage systems (BESS) for off-peak reliability",
      "Grid-tie and off-grid configurations available",
      "Energy monitoring dashboard and optimization software",
      "Green energy certification support and reporting",
    ],
    stats: [
      { value: "120kW", label: "Largest Solar Install" },
      { value: "80%", label: "Energy Cost Reduction" },
      { value: "25yr", label: "Solar Panel Lifespan" },
      { value: "450t", label: "CO₂ Avoided Annually" },
    ],
    benefits: [
      { icon: Leaf, text: "Generate zero-cost clean electricity to power your EV fleet" },
      { icon: DollarSign, text: "Reduce electricity bills by up to 80% with solar generation" },
      { icon: BarChart3, text: "Qualify for green energy certifications and ESG reporting" },
      { icon: Clock, text: "Battery storage ensures charging reliability even after dark" },
    ],
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=560&fit=crop&auto=format",
    imgAlt: "Solar panels on green field",
    caseStudy: { client: "Kisumu Solar EV Hub", result: "120kW solar + 20-bay charging hub now generates enough clean energy to charge 40 EVs daily at zero fuel cost." },
  },
];

function DeepDiveSection() {
  return (
    <section className="py-24" style={{ background: "#fdfdfd", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>In Depth</span>
          <h2 className="mb-4" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 800, color: "#000" }}>Solution Details</h2>
          <p className="text-gray-500 max-w-xl" style={{ lineHeight: 1.8 }}>
            Click any solution below to learn exactly what's included, the benefits it delivers, and how it's worked for real clients.
          </p>
        </div>

        <div className="space-y-24">
          {deepDives.map((d, i) => {
            const Icon = d.icon;
            const isReversed = i % 2 !== 0;
            return (
              <div key={d.id} id={d.id} className="scroll-mt-24">
                {/* Section label */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#36ac43" }}>
                    <Icon size={20} color="#fff" />
                  </div>
                  <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#36ac43" }}>
                    {String(i + 1).padStart(2, "0")} — {d.title}
                  </span>
                </div>

                {/* Main two-column layout */}
                <div className={`grid lg:grid-cols-2 gap-12 items-start mb-10 ${isReversed ? "lg:flex lg:flex-row-reverse" : ""}`}>
                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-gray-100 w-full">
                    <img src={d.img} alt={d.imgAlt} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.15)" }} />
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ color: "#36ac43" }}>{d.tagline}</p>
                    <h3 className="mb-4" style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, color: "#000", lineHeight: 1.2 }}>
                      {d.title}
                    </h3>
                    <p className="text-gray-500 mb-6 leading-relaxed text-sm" style={{ lineHeight: 1.8 }}>{d.desc}</p>

                    <h4 className="font-bold text-black mb-3 text-sm">What's Included</h4>
                    <ul className="space-y-2.5 mb-8">
                      {d.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-gray-600 text-sm">
                          <CheckCircle size={15} color="#36ac43" className="flex-shrink-0 mt-0.5" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        to={`/solutions/${d.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-105"
                        style={{ background: "#36ac43" }}
                      >
                        Learn More <ArrowRight size={16} />
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105"
                        style={{ background: "rgba(0,0,0,0.05)", color: "#000", border: "1px solid rgba(0,0,0,0.1)" }}
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {d.stats.map((s) => (
                    <div
                      key={s.label}
                      className="p-5 rounded-2xl text-center"
                      style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
                    >
                      <p style={{ fontSize: "1.8rem", fontWeight: 800, color: "#36ac43", lineHeight: 1 }}>{s.value}</p>
                      <p className="text-gray-500 text-xs mt-2">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Benefits + Case Study */}
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Benefits */}
                  <div className="p-6 rounded-2xl" style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}>
                    <h4 className="font-bold text-black mb-4 text-sm">Key Benefits</h4>
                    <div className="space-y-3">
                      {d.benefits.map((b) => {
                        const BIcon = b.icon;
                        return (
                          <div key={b.text} className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(54,172,67,0.1)" }}>
                              <BIcon size={14} color="#36ac43" />
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">{b.text}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Case Study */}
                  <div className="p-6 rounded-2xl relative overflow-hidden" style={{ background: "#000" }}>
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -translate-y-8 translate-x-8" style={{ background: "#36ac43" }} />
                    <span className="text-xs font-bold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>
                      Client Success Story
                    </span>
                    <p className="text-white/60 text-xs mb-2">{d.caseStudy.client}</p>
                    <p className="text-white font-semibold leading-relaxed text-sm">" {d.caseStudy.result} "</p>
                    <Link
                      to="/projects"
                      className="inline-flex items-center gap-1 text-xs font-semibold mt-4 transition-opacity hover:opacity-80"
                      style={{ color: "#36ac43" }}
                    >
                      See More Projects <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>

                {/* Divider */}
                {i < deepDives.length - 1 && (
                  <div className="mt-16 border-t" style={{ borderColor: "rgba(0,0,0,0.07)" }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Industries Served ── */
const industries = [
  { emoji: "🏢", title: "Corporate & SMEs", desc: "Fleet electrification and office charging for companies of all sizes." },
  { emoji: "🏫", title: "Education & NGOs", desc: "Sustainable transport solutions for universities, schools, and non-profits." },
  { emoji: "🏥", title: "Healthcare", desc: "Reliable electric vehicles and charging for hospital and clinic fleets." },
  { emoji: "🛒", title: "Retail & Logistics", desc: "Last-mile delivery solutions powered by clean electric mobility." },
  { emoji: "🏨", title: "Hospitality", desc: "EV guest transport and sustainable charging amenities for hotels." },
  { emoji: "🏛️", title: "Government", desc: "Public sector fleet electrification and municipal charging networks." },
];

function IndustriesServed() {
  return (
    <section className="py-24" style={{ background: "#fff", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Who We Serve</span>
          <h2 className="mb-4" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 800, color: "#000" }}>Industries We Work With</h2>
          <p className="text-gray-500 max-w-xl" style={{ lineHeight: 1.8 }}>
            Our solutions are tailored to the unique mobility and energy needs of a wide range of sectors across East Africa.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <div key={ind.title} className="flex gap-5 items-start p-6 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg" style={{ background: "#fdfdfd", border: "1px solid rgba(0,0,0,0.07)" }}>
              <span className="text-3xl flex-shrink-0">{ind.emoji}</span>
              <div>
                <h3 className="font-bold text-black mb-2">{ind.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsCTA() {
  return (
    <section className="py-24" style={{ background: "#000", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl p-12 md:p-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0a2e0d 0%, #000 60%)", border: "1px solid rgba(54,172,67,0.2)" }}>
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle at 80% 50%, #36ac43 0%, transparent 60%)" }} />
          <div className="relative z-10 max-w-2xl">
            <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Next Step</span>
            <h2 className="text-white mb-5" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 800 }}>Get a Tailored Solution Quote</h2>
            <p className="text-white/60 mb-10" style={{ lineHeight: 1.8 }}>
              Tell us about your project and we'll design a custom EV and energy solution that fits your budget, location, and operational needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 rounded-xl text-white font-bold text-sm transition-all hover:opacity-90 hover:scale-105" style={{ background: "#36ac43" }}>
                Request a Free Quote <ArrowRight size={16} className="inline ml-1" />
              </Link>
              <Link to="/projects" className="px-8 py-4 rounded-xl font-bold text-sm transition-all hover:scale-105" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }}>
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SolutionsPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    // Give the page time to render then scroll to the anchor
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
    }
  }, [hash]);

  return (
    <>
      <PageHero />
      <Services />
      <DeepDiveSection />
      <IndustriesServed />
      <SolutionsCTA />
    </>
  );
}
