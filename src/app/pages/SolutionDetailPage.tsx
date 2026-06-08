import { useParams, Link } from "react-router";
import { ArrowLeft, ArrowRight, CheckCircle, DollarSign, Clock, Leaf, BarChart3, Zap, Car, Truck, Sun } from "lucide-react";

const solutions = [
  {
    id: "ev-solutions",
    icon: Car,
    title: "Electric Vehicle Solutions",
    tagline: "From first EV to full fleet — we handle everything.",
    heroImage: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1780135487/1770224830484_sccyup.jpg",
    heroAlt: "Modern electric concept car",
    color: "#36ac43",
    intro: "Transitioning to electric vehicles is one of the most impactful operational decisions a Kenyan business can make — both for the bottom line and for the environment. Drivelectric Kenya is your complete partner through every step of the journey, from understanding which EV is right for your needs to deploying, operating, and maintaining your electric fleet for years to come.",
    overview: "Our EV solutions practice combines deep local market knowledge with global EV industry expertise. We've helped organizations ranging from small owner-operated businesses to large corporate fleets successfully make the switch to electric — and our track record of delivering genuine, measurable results is why our clients consistently return for further deployments.",
    sections: [
      {
        heading: "Advisory & Model Selection",
        body: "Not all EVs are equal — and the right vehicle depends on your specific routes, payload requirements, charging opportunity, and budget. Our advisors conduct a thorough needs analysis and present a shortlist of vehicles that genuinely fit your operations, backed by data from our existing fleet deployments across Kenya.",
        bullets: ["Independent advisory with no brand bias — we recommend what works, not what we're paid to sell", "Route and usage pattern analysis to determine optimal range requirements", "Total cost of ownership modelling across a 5-year projection", "Test drive and familiarisation arranged before commitment"],
      },
      {
        heading: "Sourcing & Importation",
        body: "Kenya's EV market is growing rapidly but navigating importation, duty exemptions, and compliance can be complex. Our procurement team manages the entire supply chain — from manufacturer relationships to port clearance — ensuring you receive the right vehicle at the best possible landed cost.",
        bullets: ["Established supply relationships with leading EV manufacturers", "Import duty exemption processing and optimization", "Port clearance, customs documentation, and inland delivery", "Pre-delivery inspection and quality certification"],
      },
      {
        heading: "Registration & Compliance",
        body: "Every EV deployed by Drivelectric Kenya is fully compliant with Kenyan transport regulations. We handle NTSA registration, roadworthiness inspection, and insurance facilitation so you can focus on operations from day one.",
        bullets: ["NTSA registration and roadworthiness inspection management", "Insurance arrangement through our network of EV-specialist underwriters", "PSV licensing support for commercial passenger vehicle operators", "Ongoing compliance monitoring and renewal reminders"],
      },
      {
        heading: "Deployment & Driver Training",
        body: "A successful EV deployment is as much about people as it is about technology. Our driver training programme prepares your team to operate EVs confidently — maximising range, charging correctly, and reporting issues early.",
        bullets: ["Half-day driver orientation covering EV operation and charging", "Range management and eco-driving technique training", "Emergency procedure and roadside protocols", "Ongoing driver support via dedicated WhatsApp helpline"],
      },
      {
        heading: "After-Sales Support",
        body: "Our relationship doesn't end at delivery. Drivelectric Kenya provides comprehensive after-sales support including warranty management, scheduled servicing, and emergency technical response across all major Kenyan cities.",
        bullets: ["Manufacturer warranty coordination and claims management", "Scheduled preventive maintenance programme", "Emergency technical response within 4 hours in Nairobi", "Telematics monitoring with proactive fault alerts"],
      },
    ],
    stats: [
      { value: "200+", label: "EVs Deployed" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "40%", label: "Avg. Cost Reduction" },
      { value: "12+", label: "Cities Served" },
    ],
    benefits: [
      { icon: DollarSign, text: "Save up to 70% on energy costs vs petrol equivalents" },
      { icon: Clock, text: "Faster deployment timelines than traditional vehicle sourcing" },
      { icon: Leaf, text: "Zero tailpipe emissions for a cleaner operational footprint" },
      { icon: BarChart3, text: "Real-time reporting and ROI tracking from day one" },
    ],
    caseStudy: {
      client: "Corporate Transport Co.",
      location: "Nairobi CBD",
      result: "Reduced monthly fuel costs from KES 180,000 to KES 22,000 after deploying 12 electric sedans for executive transport. Achieved payback on additional EV cost within 18 months.",
      stats: [{ value: "12", label: "EVs deployed" }, { value: "88%", label: "Fuel cost reduction" }, { value: "18mo", label: "Cost payback" }],
    },
    galleryImages: [
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=700&h=480&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1760538978585-f82dc257ec15?w=700&h=480&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&h=480&fit=crop&auto=format",
    ],
  },
  {
    id: "charging-infrastructure",
    icon: Zap,
    title: "Charging Infrastructure",
    tagline: "Smart charging solutions for homes, offices & commercial spaces.",
    heroImage: "https://images.unsplash.com/photo-1760538978585-f82dc257ec15?w=1400&h=700&fit=crop&auto=format",
    heroAlt: "Woman plugging electric car into wall charger",
    color: "#36ac43",
    intro: "A reliable, intelligent charging network is the backbone of any successful EV operation. Whether you need a single home charger or a 50-bay commercial hub, Drivelectric Kenya designs, supplies, installs, and maintains EV charging infrastructure that is purpose-built for Kenyan conditions and connected to our eCharge Africa management platform.",
    overview: "From site assessment to commissioning, our charging infrastructure team handles every aspect of the project. We work with residential clients, commercial property owners, fleet depot operators, hotels, shopping centres, and local authorities — delivering solutions at every scale, with every type of charger, tailored to available power supply and operational requirements.",
    sections: [
      {
        heading: "Site Assessment & Electrical Design",
        body: "Every charging installation begins with a thorough site assessment. Our engineers evaluate your existing electrical infrastructure, parking layout, load requirements, and future expansion plans to design a charging system that is right-sized from day one and can scale as your EV fleet grows.",
        bullets: ["Detailed site survey and electrical capacity audit", "Load flow analysis and grid connection assessment", "Charger placement and cable routing design", "Kenya Power grid upgrade coordination if required"],
      },
      {
        heading: "AC Level 2 Charging",
        body: "Level 2 AC chargers (7–22kW) are ideal for homes, offices, hotels, and fleet depots where vehicles are parked for 4+ hours. They provide a full charge overnight and represent the best value for most applications. We supply and install single-port and dual-port units with options for basic, smart, and app-connected functionality.",
        bullets: ["7kW single-phase and 22kW three-phase options", "Single-port and dual-port configurations available", "Type 2 connector (universal for all modern EVs)", "Smart connectivity: RFID, app control, scheduling, load management"],
      },
      {
        heading: "DC Fast Charging",
        body: "DC fast chargers (50–150kW) deliver 200–300km of range in 20–45 minutes — essential for public charging locations, highway corridors, and fleet operations needing quick mid-day top-ups. We supply and install multi-connector DC chargers compatible with all EV brands.",
        bullets: ["50kW, 100kW, and 150kW DC fast charging units", "Multi-connector (CCS2 + CHAdeMO) for universal compatibility", "Three-phase grid connection with utility approval management", "Revenue management and public payment integration"],
      },
      {
        heading: "Smart Charging & Load Management",
        body: "Smart charging is not optional for serious EV operations — it is the difference between a charging system that works and one that creates grid problems and unexpected electricity bills. All Drivelectric Kenya commercial installations include our smart charging management system.",
        bullets: ["Dynamic load balancing across all chargers", "Time-of-use tariff optimisation (charge cheap, avoid peak)", "Remote monitoring, diagnostics, and remote session control", "Fleet scheduling: guarantee vehicle readiness by target time"],
      },
      {
        heading: "eCharge Africa App Integration",
        body: "Every charger we install connects to the eCharge Africa platform — Kenya's leading EV charging management app. Users can find chargers, check availability, start sessions, pay via M-Pesa or card, and review charging history. Site operators get a powerful back-office dashboard with revenue reporting and real-time diagnostics.",
        bullets: ["Session initiation via app or RFID card", "M-Pesa STK Push, card, and in-app wallet payments", "Operator dashboard: revenue, utilisation, and energy reports", "QR code fallback for users without the app"],
      },
    ],
    stats: [
      { value: "300+", label: "Chargers Installed" },
      { value: "99.2%", label: "Network Uptime" },
      { value: "24/7", label: "Remote Monitoring" },
      { value: "150kW", label: "Max DC Fast Charge" },
    ],
    benefits: [
      { icon: Zap, text: "AC and DC charging to match any operational requirement" },
      { icon: BarChart3, text: "Smart software reduces electricity costs and prevents grid overload" },
      { icon: Clock, text: "Minimal business disruption — most installations completed in 1–3 days" },
      { icon: DollarSign, text: "Monetize charging through pay-per-use for customers or staff" },
    ],
    caseStudy: {
      client: "Westlands Commercial Centre",
      location: "Westlands, Nairobi",
      result: "Installed a 20-bay dual-port charging hub generating over KES 85,000 in monthly revenue from public EV charging sessions, while attracting a measurably higher proportion of EV-driving customers.",
      stats: [{ value: "20", label: "Charging bays" }, { value: "KES 85K", label: "Monthly revenue" }, { value: "99.4%", label: "Uptime" }],
    },
    galleryImages: [
      "https://images.unsplash.com/photo-1604978812122-945ae77de4b0?w=700&h=480&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=700&h=480&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1775259928405-d3d76549cb08?w=700&h=480&fit=crop&auto=format",
    ],
  },
  {
    id: "fleet-electrification",
    icon: Truck,
    title: "Fleet Electrification",
    tagline: "Transform your fleet. Cut costs. Go green.",
    heroImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1400&h=700&fit=crop&auto=format",
    heroAlt: "Electric vehicle fleet at a commercial depot",
    color: "#36ac43",
    intro: "Fleet electrification is the single highest-impact operational decision available to Kenyan businesses today. The combination of rising petrol prices, falling EV costs, and proven operational track records means the financial case has never been stronger. Drivelectric Kenya delivers complete fleet electrification programmes — from the initial audit to the final vehicle handover — for fleets of any size.",
    overview: "We've electrified fleets across logistics, healthcare, hospitality, corporate transport, ride-hailing, and public sector sectors in Kenya. Our approach is always practical and phased — we start with the vehicles that offer the fastest financial return and build outward, minimising operational risk while maximising early savings.",
    sections: [
      {
        heading: "Fleet Audit & Readiness Assessment",
        body: "Before a single vehicle is ordered, we conduct a thorough audit of your existing fleet. We analyse daily mileage data, route types, parking patterns, and charging opportunity to identify which vehicles are best suited for immediate electrification and which should wait for Phase 2 or 3.",
        bullets: ["GPS data or driver log analysis for daily mileage patterns", "Route characterisation: urban, highway, mixed", "Overnight parking location and electrical capacity survey", "Priority vehicle selection for fastest payback"],
      },
      {
        heading: "Total Cost of Ownership Analysis",
        body: "We prepare a detailed 5-year financial model comparing the total cost of ownership of your current petrol fleet against the electric alternative. This covers vehicle cost, financing, energy, maintenance, insurance, and residual value — giving your finance team the numbers they need to build an ironclad business case.",
        bullets: ["5-year TCO modelling: petrol vs electric, vehicle by vehicle", "Fuel saving projections at current and forecast petrol prices", "Maintenance saving estimates from your specific fleet profile", "Financing structure options and cash flow analysis"],
      },
      {
        heading: "Vehicle Procurement & Phased Deployment",
        body: "We manage the sourcing, importation, and delivery of your electric vehicles, working with manufacturer partners to secure the best pricing and fastest lead times. Deployment is planned in phases — typically 10 vehicles at a time — allowing your team to learn and adapt without disrupting live operations.",
        bullets: ["Multi-brand vehicle sourcing based on needs, not brand loyalty", "Phased delivery schedule aligned to charging infrastructure readiness", "Pre-delivery inspection and driver allocation planning", "Vehicle branding, fit-out, and telematics installation"],
      },
      {
        heading: "Depot Charging Infrastructure",
        body: "Every fleet electrification project includes a depot charging installation sized precisely for your vehicle numbers, shift patterns, and electrical supply. We design managed charging schedules that guarantee all vehicles are charged for the morning shift while staying within your site's available electrical capacity.",
        bullets: ["Smart charging depot design and installation", "Managed overnight charging schedules per vehicle", "Load-balanced to avoid demand charge spikes on electricity bills", "Expandable architecture for future fleet growth"],
      },
      {
        heading: "Fleet Management Integration",
        body: "Your electric fleet generates rich data — battery status, energy consumption, route efficiency, driver behaviour, and charge status. Drivelectric Kenya integrates this data into your existing fleet management software or provides a standalone fleet management portal tailored to your reporting requirements.",
        bullets: ["API integration with existing fleet management systems", "Real-time battery and charge status for all vehicles", "Driver efficiency scoring and coaching reports", "Monthly automated cost saving and CO₂ reduction reports"],
      },
    ],
    stats: [
      { value: "50+", label: "Fleets Electrified" },
      { value: "35%", label: "Avg. Cost Savings" },
      { value: "3mo", label: "Typical Payback Start" },
      { value: "100%", label: "Uptime Guarantee" },
    ],
    benefits: [
      { icon: DollarSign, text: "Eliminate fuel costs and cut servicing expenses by up to 40%" },
      { icon: BarChart3, text: "Full visibility into fleet performance and energy usage" },
      { icon: Leaf, text: "Meet ESG and sustainability reporting targets with real data" },
      { icon: Clock, text: "Phased rollout means zero disruption to ongoing operations" },
    ],
    caseStudy: {
      client: "East Africa Logistics Ltd.",
      location: "Mombasa, Kenya",
      result: "Electrified a 50-vehicle urban delivery fleet over 5 phases in 20 weeks. Annual fuel savings of KES 4.2M and 180 tonnes of CO₂ emissions avoided per year.",
      stats: [{ value: "50", label: "Vehicles electrified" }, { value: "KES 4.2M", label: "Annual fuel savings" }, { value: "180t", label: "CO₂ avoided/yr" }],
    },
    galleryImages: [
      "https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?w=700&h=480&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1760538978585-f82dc257ec15?w=700&h=480&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1724041875334-0a6397111c7e?w=700&h=480&fit=crop&auto=format",
    ],
  },
  {
    id: "renewable-energy",
    icon: Sun,
    title: "Renewable Energy Integration",
    tagline: "Charge your fleet with the power of the sun.",
    heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&h=700&fit=crop&auto=format",
    heroAlt: "Solar panels on a large installation",
    color: "#36ac43",
    intro: "The natural complement to electric vehicles is renewable energy. When you charge your EVs from solar power, the effective energy cost drops to near zero and your operations achieve genuine carbon neutrality. Drivelectric Kenya designs, finances, and installs integrated solar-EV systems for homes, businesses, and institutions across Kenya — creating self-sustaining clean mobility ecosystems.",
    overview: "Kenya's solar resource is exceptional — 4–6 peak sun hours per day across most of the country. Combined with rapidly falling solar panel and battery costs, this makes solar-powered EV charging one of the most financially compelling investments available to Kenyan businesses. Our renewable energy team has deployed systems from 5kWp residential installations to 120kWp commercial hubs.",
    sections: [
      {
        heading: "Solar PV System Design & Installation",
        body: "Every solar installation begins with a detailed site assessment: rooftop structural analysis, shading evaluation, orientation optimisation, and energy consumption profiling. We design systems that maximise generation for your specific site conditions — not a generic off-the-shelf solution.",
        bullets: ["Rooftop structural survey and load capacity assessment", "Solar irradiance and shading analysis using site-specific data", "String inverter or microinverter system design", "Monocrystalline and bifacial panel options for maximum efficiency"],
      },
      {
        heading: "Solar + EV Charging Integration",
        body: "Integrating solar generation with EV charging requires careful system engineering. We design energy management systems (EMS) that intelligently direct solar power — first to building loads, then to EV charging, then to battery storage, then to grid export. This ensures your EVs charge from the sun whenever possible.",
        bullets: ["Intelligent EMS optimising solar → EV charging priority", "Direct solar-to-EV charging during peak generation hours", "Automatic grid fallback when solar generation is insufficient", "Time-of-use tariff optimisation for grid-supplemented charging"],
      },
      {
        heading: "Battery Energy Storage Systems (BESS)",
        body: "Battery storage bridges the gap between when solar generates (daytime) and when EVs are typically charged (evenings and overnight). Our BESS installations use lithium iron phosphate (LFP) chemistry — the safest and longest-lasting battery technology available — sized precisely for your overnight charging requirements.",
        bullets: ["LFP battery chemistry: 4,000+ cycle lifespan, inherently safe", "Sizing based on overnight charging demand and solar generation profile", "Seamless grid outage transition (island mode) for business continuity", "Remote monitoring of battery state-of-charge and health"],
      },
      {
        heading: "Off-Grid & Hybrid Configurations",
        body: "For sites with unreliable grid supply — common in parts of Kenya outside Nairobi — our off-grid solar systems provide complete energy independence. Hybrid systems maintain a grid connection for backup while prioritising solar and battery power, offering the best of both worlds.",
        bullets: ["Full off-grid systems for remote or unreliable grid locations", "Hybrid grid-tie with seamless battery backup", "Generator integration as tertiary backup for critical facilities", "Net metering registration with KPLC for revenue from grid export"],
      },
      {
        heading: "Monitoring & Performance Reporting",
        body: "Every solar installation includes a cloud-connected monitoring system providing real-time visibility into generation, consumption, battery state, and grid import/export. Monthly automated performance reports give you the data for your ESG reporting, carbon accounting, and ongoing system optimisation.",
        bullets: ["Real-time monitoring dashboard (web and mobile app)", "Automated monthly performance and energy saving reports", "CO₂ avoided tracking for ESG and sustainability reporting", "5-year performance guarantee with inverter and panel warranties"],
      },
    ],
    stats: [
      { value: "120kWp", label: "Largest Solar Install" },
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
    caseStudy: {
      client: "Kisumu Solar EV Hub",
      location: "Kisumu, Kenya",
      result: "120kWp solar array with 200kWh battery storage now powers a 12-bay public charging hub with 94% of energy from solar. Grid outage-proof — 37 outage events with zero charging interruptions.",
      stats: [{ value: "94%", label: "Solar-sourced energy" }, { value: "37", label: "Outages weathered" }, { value: "91%", label: "Cost reduction vs grid" }],
    },
    galleryImages: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=700&h=480&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1724041875334-0a6397111c7e?w=700&h=480&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1604978812122-945ae77de4b0?w=700&h=480&fit=crop&auto=format",
    ],
  },
];

export function SolutionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const solution = solutions.find((s) => s.id === id);

  if (!solution) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ fontFamily: "Poppins, sans-serif" }}>
        <p className="text-gray-400 text-lg mb-6">Solution not found.</p>
        <Link to="/solutions" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm" style={{ background: "#36ac43" }}>
          <ArrowLeft size={16} /> Back to Solutions
        </Link>
      </div>
    );
  }

  const Icon = solution.icon;
  const currentIndex = solutions.findIndex((s) => s.id === id);
  const otherSolutions = solutions.filter((s) => s.id !== id);

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* Hero */}
      <div className="relative pt-28" style={{ background: "#000", minHeight: "58vh" }}>
        <div className="absolute inset-0">
          <img src={solution.heroImage} alt={solution.heroAlt} className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.88) 55%, #000 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
          <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link>
            <span>/</span>
            <span className="text-white/70">{solution.title}</span>
          </nav>

          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "#36ac43" }}>
              <Icon size={24} color="#fff" />
            </div>
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#36ac43" }}>Solution Detail</span>
          </div>

          <h1 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1 }}>
            {solution.title}
          </h1>
          <p className="mb-8 max-w-2xl" style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", lineHeight: 1.8 }}>
            {solution.tagline}
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 hover:scale-105" style={{ background: "#36ac43" }}>
            Get a Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ background: "#36ac43" }}>
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {solution.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-white font-black" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>{s.value}</p>
              <p className="text-white/75 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="py-20" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_300px] gap-16">
          {/* Left column */}
          <div>
            {/* Overview */}
            <section className="mb-14">
              <p className="text-gray-600 leading-relaxed text-lg mb-5" style={{ lineHeight: 1.9 }}>{solution.intro}</p>
              <p className="text-gray-500 leading-relaxed" style={{ lineHeight: 1.9 }}>{solution.overview}</p>
            </section>

            {/* Gallery */}
            <section className="mb-14">
              <h2 className="mb-6 text-black" style={{ fontSize: "1.35rem", fontWeight: 800 }}>In Action</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {solution.galleryImages.map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden h-44 bg-gray-100">
                    <img src={img} alt={`${solution.title} ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </section>

            {/* Detailed sections */}
            <section className="mb-14">
              <h2 className="mb-8 text-black" style={{ fontSize: "1.35rem", fontWeight: 800 }}>What's Included</h2>
              <div className="space-y-10">
                {solution.sections.map((sec, i) => (
                  <div key={i} className="rounded-2xl p-7" style={{ background: i % 2 === 0 ? "#fdfdfd" : "rgba(54,172,67,0.04)", border: "1px solid rgba(0,0,0,0.07)" }}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0" style={{ background: "#36ac43" }}>{i + 1}</span>
                      <h3 className="text-black font-bold" style={{ fontSize: "1.05rem" }}>{sec.heading}</h3>
                    </div>
                    <p className="text-gray-600 mb-5 text-sm leading-relaxed" style={{ lineHeight: 1.8 }}>{sec.body}</p>
                    <ul className="space-y-2.5">
                      {sec.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-gray-600">
                          <CheckCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#36ac43" }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="mb-14">
              <h2 className="mb-6 text-black" style={{ fontSize: "1.35rem", fontWeight: 800 }}>Key Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {solution.benefits.map((b) => {
                  const BIcon = b.icon;
                  return (
                    <div key={b.text} className="flex items-start gap-4 p-5 rounded-2xl" style={{ background: "#fdfdfd", border: "1px solid rgba(0,0,0,0.07)" }}>
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(54,172,67,0.12)" }}>
                        <BIcon size={16} style={{ color: "#36ac43" }} />
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{b.text}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Case Study */}
            <section className="mb-14">
              <h2 className="mb-6 text-black" style={{ fontSize: "1.35rem", fontWeight: 800 }}>Client Success Story</h2>
              <div className="rounded-2xl overflow-hidden" style={{ background: "#000" }}>
                <div className="p-8">
                  <span className="text-xs font-bold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Case Study</span>
                  <p className="text-white/50 text-xs mb-1">{solution.caseStudy.client} · {solution.caseStudy.location}</p>
                  <p className="text-white leading-relaxed mb-8" style={{ lineHeight: 1.8 }}>{solution.caseStudy.result}</p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {solution.caseStudy.stats.map((s) => (
                      <div key={s.label} className="text-center p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.06)" }}>
                        <p className="font-black text-white" style={{ fontSize: "1.4rem", color: "#36ac43" }}>{s.value}</p>
                        <p className="text-white/50 text-xs mt-1">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80" style={{ color: "#36ac43" }}>
                    See All Projects <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </section>

            {/* Nav */}
            <div className="flex justify-between gap-4 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
              {currentIndex > 0 ? (
                <Link to={`/solutions/${solutions[currentIndex - 1].id}`} className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80" style={{ color: "#36ac43" }}>
                  <ArrowLeft size={16} /> {solutions[currentIndex - 1].title}
                </Link>
              ) : (
                <Link to="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80" style={{ color: "#36ac43" }}>
                  <ArrowLeft size={16} /> All Solutions
                </Link>
              )}
              {currentIndex < solutions.length - 1 && (
                <Link to={`/solutions/${solutions[currentIndex + 1].id}`} className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80 text-right" style={{ color: "#36ac43" }}>
                  {solutions[currentIndex + 1].title} <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              {/* CTA card */}
              <div className="rounded-2xl p-6 text-white" style={{ background: "linear-gradient(135deg, #36ac43, #1a7a26)" }}>
                <p className="font-bold text-lg mb-2">Ready to get started?</p>
                <p className="text-white/75 text-sm mb-5 leading-relaxed">Talk to our team about a {solution.title} solution tailored for your needs.</p>
                <Link to="/contact" className="block text-center py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90" style={{ background: "#fff", color: "#36ac43" }}>
                  Get a Free Consultation
                </Link>
              </div>

              {/* Other solutions */}
              <div>
                <p className="font-bold text-black text-sm mb-4">Other Solutions</p>
                <div className="space-y-3">
                  {otherSolutions.map((s) => {
                    const SIcon = s.icon;
                    return (
                      <Link key={s.id} to={`/solutions/${s.id}`} className="group flex items-center gap-3 p-4 rounded-xl transition-all hover:shadow-md" style={{ background: "#fdfdfd", border: "1px solid rgba(0,0,0,0.07)" }}>
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(54,172,67,0.1)" }}>
                          <SIcon size={16} style={{ color: "#36ac43" }} />
                        </div>
                        <p className="text-sm font-semibold text-black group-hover:text-[#36ac43] transition-colors leading-tight">{s.title}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Quick contact */}
              <div className="rounded-2xl p-5" style={{ background: "#fdfdfd", border: "1px solid rgba(0,0,0,0.07)" }}>
                <p className="font-bold text-black text-sm mb-1">Questions?</p>
                <p className="text-gray-500 text-xs mb-4 leading-relaxed">Our solutions team is available Monday–Friday, 8am–6pm EAT.</p>
                <a href="https://wa.me/254722953976" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90" style={{ background: "#25D366" }}>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* More solutions */}
      <div className="py-16" style={{ background: "#fdfdfd" }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="mb-8 text-black" style={{ fontSize: "1.3rem", fontWeight: 800 }}>Explore More Solutions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherSolutions.slice(0, 3).map((s) => {
              const SIcon = s.icon;
              return (
                <Link key={s.id} to={`/solutions/${s.id}`} className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl block" style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}>
                  <div className="relative h-40 overflow-hidden bg-gray-100">
                    <img src={s.heroImage} alt={s.heroAlt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.3)" }} />
                    <div className="absolute top-4 left-4 w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#36ac43" }}>
                      <SIcon size={18} color="#fff" />
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="font-bold text-black text-sm mb-1 group-hover:text-[#36ac43] transition-colors">{s.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{s.tagline}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold" style={{ color: "#36ac43" }}>Learn more <ArrowRight size={11} /></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
