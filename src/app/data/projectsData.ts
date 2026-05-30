export interface ProjectDetail {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  client: string;
  duration: string;
  status: string;
  image: string;
  galleryImages: string[];
  alt: string;
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
  stats: { value: string; label: string }[];
  deliverables: string[];
  technologies: string[];
  testimonial?: { quote: string; name: string; role: string };
}

export const projectsData: ProjectDetail[] = [
  {
    slug: "commercial-ev-charging-sarit-centre",
    title: "Commercial EV Charging Installation",
    category: "Infrastructure",
    location: "Westlands, Nairobi",
    year: "2024",
    client: "Sarit Centre",
    duration: "14 weeks",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1760538978585-f82dc257ec15?w=1200&h=700&fit=crop&auto=format",
    galleryImages: [
      "https://images.unsplash.com/photo-1604978812122-945ae77de4b0?w=700&h=480&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=700&h=480&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=700&h=480&fit=crop&auto=format",
    ],
    alt: "EV charging station at a commercial property",
    tagline: "Nairobi's largest publicly accessible EV charging hub, serving 85+ sessions daily.",
    overview: "Drivelectric Kenya partnered with Sarit Centre — one of Nairobi's premier retail and lifestyle destinations — to design and commission a 20-station dual-port EV charging hub in their basement and open-air parking levels. The project included both AC Level 2 and DC fast charging units, making it the most comprehensive public charging installation in Westlands at the time of launch.",
    challenge: "Sarit Centre's existing electrical infrastructure was sized for conventional retail loads and had not anticipated the surge in on-site EV charging demand as Nairobi's EV population grew. The key engineering challenge was designing a charging system that could handle peak load (all 20 stations simultaneously) without requiring a prohibitively expensive utility connection upgrade, while ensuring seamless integration with the centre's access control and revenue management systems.",
    solution: "Drivelectric Kenya's engineering team implemented a smart load-balancing management system that dynamically allocates available power capacity across active charging sessions. By staggering peak draw and prioritising fast-charge sessions, the system delivers maximum throughput within the existing 3-phase 400A supply. The stations are fully integrated with the eCharge Africa app for session initiation, real-time status, and cashless payment — with QR code fallback for walk-up users without the app.",
    outcome: "The hub launched in Q4 2024 and within 60 days was recording an average of 85 charging sessions per day across the 20 stations. Monthly energy delivered exceeded 28,000 kWh, displacing an estimated 12 tonnes of CO₂ per month compared to petrol equivalent driving. Sarit Centre has commissioned a Phase 2 expansion of 10 additional DC fast chargers, scheduled for Q3 2025.",
    stats: [
      { value: "20", label: "Dual-port charging stations" },
      { value: "85+", label: "Charging sessions per day" },
      { value: "28,000 kWh", label: "Energy delivered monthly" },
      { value: "12t", label: "CO₂ avoided per month" },
    ],
    deliverables: [
      "Site survey, load assessment, and electrical design",
      "Supply and installation of 15 × 22kW AC Level 2 dual-port chargers",
      "Supply and installation of 5 × 50kW DC fast charger units",
      "Smart load management system with real-time grid monitoring",
      "eCharge Africa app integration with QR code session initiation",
      "Cashless payment processing (M-Pesa, card, in-app wallet)",
      "Remote monitoring dashboard for facility management team",
      "12-month preventative maintenance agreement",
    ],
    technologies: ["22kW AC Level 2 (Type 2)", "50kW DC Fast Charge (CCS2 + CHAdeMO)", "Smart Load Balancing", "eCharge Africa Platform", "M-Pesa STK Push Integration", "OCPP 1.6J Protocol"],
    testimonial: {
      quote: "Drivelectric Kenya delivered a world-class charging facility that has become a genuine draw for our EV-driving customers. The installation was seamless, the technology is reliable, and the support has been outstanding.",
      name: "Operations Director",
      role: "Sarit Centre, Nairobi",
    },
  },
  {
    slug: "corporate-fleet-electrification-mombasa",
    title: "Corporate Fleet Electrification",
    category: "Fleet",
    location: "Mombasa, Kenya",
    year: "2024",
    client: "Coastal Logistics Group",
    duration: "20 weeks",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&h=700&fit=crop&auto=format",
    galleryImages: [
      "https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?w=700&h=480&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1724041875334-0a6397111c7e?w=700&h=480&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1760538978585-f82dc257ec15?w=700&h=480&fit=crop&auto=format",
    ],
    alt: "Fleet of electric vehicles at a depot",
    tagline: "50 vehicles electrified, 38% cost reduction achieved — Kenya's largest coastal fleet conversion.",
    overview: "Coastal Logistics Group engaged Drivelectric Kenya to lead the full electrification of their 50-vehicle urban delivery fleet operating across Mombasa Island, Nyali, and Likoni. The project encompassed vehicle procurement, depot charging infrastructure installation, fleet management system integration, and a comprehensive driver transition programme — all executed within a live operational environment to minimise business disruption.",
    challenge: "Coastal Logistics Group operates two daily shifts across seven days, with vehicles in constant use from 6am to 10pm. This left a narrow charging window and ruled out any solution that would require vehicles to be off the road during business hours. Additionally, the Mombasa depot's electrical infrastructure needed significant upgrading to support 50 simultaneous overnight charging sessions, and the company's existing fleet management software needed to integrate with EV charging and telematics data.",
    solution: "Drivelectric Kenya implemented a phased approach: vehicles were replaced in batches of 10 over five phases, allowing the team to refine the process and minimise operational disruption. At the depot, a 400kW grid connection upgrade was coordinated with Kenya Power alongside installation of 50 smart AC Level 2 chargers with managed charging schedules. A custom API integration was developed to pull charging data, battery status, and energy consumption into the client's existing fleet management software dashboard.",
    outcome: "The project completed on schedule and within budget. The electrified fleet now records an average total cost of ownership 38% below the petrol baseline, with fuel savings of KES 4.2 million per month across the 50 vehicles. Driver satisfaction scores — measured via internal quarterly surveys — improved from 6.1/10 to 8.4/10 following the transition, driven primarily by the smoother, quieter driving experience.",
    stats: [
      { value: "50", label: "Vehicles electrified" },
      { value: "38%", label: "TCO reduction vs petrol" },
      { value: "KES 4.2M", label: "Monthly fuel savings" },
      { value: "8.4/10", label: "Driver satisfaction score" },
    ],
    deliverables: [
      "Fleet audit and phased replacement roadmap",
      "Procurement and delivery of 50 electric light commercial vehicles",
      "50-bay smart charging depot installation (400kW capacity)",
      "Kenya Power grid connection upgrade management",
      "Fleet management software EV data integration",
      "Driver training programme (50 drivers over 5 cohorts)",
      "Real-time telematics and route optimisation setup",
      "24-month fleet maintenance and support agreement",
    ],
    technologies: ["BYD T3 Electric Van", "22kW AC Level 2 Smart Chargers", "OCPP 2.0 Fleet Protocol", "Real-time Telematics Platform", "Custom Fleet ERP Integration", "Smart Charging Schedule Management"],
    testimonial: {
      quote: "We were skeptical about making such a large transition at once, but Drivelectric Kenya's phased approach meant we never missed a delivery. The savings are real — better than projected — and our drivers actually prefer the new vehicles.",
      name: "Fleet Manager",
      role: "Coastal Logistics Group, Mombasa",
    },
  },
  {
    slug: "solar-integrated-charging-hub-kisumu",
    title: "Solar Integrated Charging Hub",
    category: "Renewable Energy",
    location: "Kisumu, Kenya",
    year: "2023",
    client: "Kisumu County Government",
    duration: "18 weeks",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=700&fit=crop&auto=format",
    galleryImages: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=700&h=480&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1604978812122-945ae77de4b0?w=700&h=480&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=700&h=480&fit=crop&auto=format",
    ],
    alt: "Solar panels on a rooftop adjacent to EV charging stations",
    tagline: "120kWp solar + EV charging integration delivering near-zero-cost clean mobility in Western Kenya.",
    overview: "In partnership with Kisumu County Government and a development finance grant from a regional clean energy fund, Drivelectric Kenya designed and installed Western Kenya's first fully solar-powered EV charging hub at the Kisumu Mega Sports Complex. The facility serves county government fleet vehicles, private EV owners, and boda boda electric motorcycle operators — while generating surplus energy that is exported back to the KPLC grid under a net metering arrangement.",
    challenge: "Kisumu's grid reliability has historically been lower than Nairobi's, with frequent outages disrupting business operations. Any charging facility designed for the region needed to function independently of the grid during outages, while also being commercially viable without continuous subsidy. The project also needed to accommodate a diverse mix of vehicle types — from compact electric cars to electric tuk-tuks and motorcycles — each with different charging connectors and power requirements.",
    solution: "Drivelectric Kenya engineered a fully off-grid-capable system comprising a 120kWp rooftop solar array, 200kWh lithium iron phosphate (LFP) battery storage bank, and an intelligent energy management system (EMS) that optimises power flow between solar generation, battery storage, the EV charging stations, and the grid. During normal operation, the system charges EVs primarily from solar, stores surplus in the battery bank, and exports any remaining excess to the grid. During grid outages, the system seamlessly transitions to island mode with no interruption to charging services.",
    outcome: "Since commissioning in late 2023, the Kisumu hub has delivered over 180,000 kWh of clean energy to EV users — 94% of it generated from solar. The facility has been operational during 37 grid outage events without a single charging service interruption. Monthly operating costs are 91% below a comparable grid-only facility. The success of the project has led to three additional county governments in Western Kenya issuing similar tenders.",
    stats: [
      { value: "120kWp", label: "Solar generation capacity" },
      { value: "200kWh", label: "Battery storage capacity" },
      { value: "94%", label: "Energy from solar" },
      { value: "91%", label: "Operating cost reduction vs grid" },
    ],
    deliverables: [
      "Solar site assessment and irradiance modelling",
      "120kWp rooftop solar array design and installation",
      "200kWh LFP battery storage system with BMS",
      "Intelligent Energy Management System (EMS)",
      "12 × multi-connector EV charging stations (Type 2, CCS2, CHAdeMO, GB/T)",
      "Grid-tie inverter with seamless island mode transition",
      "Net metering registration with KPLC",
      "Public-access payment system (M-Pesa + card)",
      "Remote monitoring and performance reporting portal",
    ],
    technologies: ["120kWp Monocrystalline Solar PV", "200kWh LFP Battery Storage", "Hybrid Grid-Tie Inverter", "Intelligent EMS", "Multi-connector Charging Stations", "KPLC Net Metering"],
    testimonial: {
      quote: "This facility has transformed how Kisumu thinks about clean transport. We are proud to be leading Western Kenya's EV transition, and Drivelectric Kenya delivered a system that genuinely exceeds our expectations.",
      name: "County Executive Committee Member",
      role: "Kisumu County Government",
    },
  },
  {
    slug: "paygyo-boda-boda-electrification-nairobi",
    title: "PayGo Boda Boda Electrification",
    category: "Fleet",
    location: "Nairobi, Kenya",
    year: "2024",
    client: "Independent Rider Network",
    duration: "Ongoing",
    status: "Active Programme",
    image: "https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?w=1200&h=700&fit=crop&auto=format",
    galleryImages: [
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=700&h=480&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1760538978585-f82dc257ec15?w=700&h=480&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1724041875334-0a6397111c7e?w=700&h=480&fit=crop&auto=format",
    ],
    alt: "Electric motorcycle on a Nairobi street",
    tagline: "200+ electric motorcycles on Nairobi's roads under a zero-deposit PayGo model.",
    overview: "Drivelectric Kenya's PayGo Boda Boda programme is an ongoing initiative to bring electric motorcycle ownership within reach of independent riders who cannot access traditional financing. Under the programme, riders receive a new electric motorcycle with no upfront deposit, paying a per-kilometre usage fee collected automatically via M-Pesa integration with the vehicle's telematics system. Riders build equity over time and own the motorcycle outright after completing their payment milestones.",
    challenge: "Kenya's boda boda sector employs over 1.5 million riders, most of whom operate on tight margins with no access to formal credit and no collateral for asset financing. Traditional lease or loan products require deposits of KES 30,000–80,000 — amounts that most riders simply cannot raise. At the same time, the fuel cost burden falls disproportionately on boda boda operators, who typically cover 100–150km per day and spend KES 400–600 on petrol daily.",
    solution: "The PayGo model uses telematics-enabled asset tracking and remote deactivation to provide sufficient asset security for Drivelectric Kenya to offer motorcycles with zero deposit. Riders pay a per-kilometre fee of KES 12–15 (well below petrol equivalent cost) via automatic M-Pesa deduction. Battery swap stations at strategic locations around Nairobi eliminate range anxiety — a fully charged swap takes under 3 minutes. Riders who maintain consistent payment history qualify for an accelerated ownership pathway.",
    outcome: "As of mid-2025, the programme has 200+ active riders with a collective monthly saving of over KES 15 million in fuel costs compared to petrol motorcycle equivalents. Programme default rates are below 3% — significantly better than industry benchmarks for informal sector asset financing. Rider net monthly income has increased by an average of KES 8,000 after the switch to electric.",
    stats: [
      { value: "200+", label: "Active PayGo riders" },
      { value: "KES 15M", label: "Monthly fuel savings (collective)" },
      { value: "<3%", label: "Programme default rate" },
      { value: "KES 8,000", label: "Avg monthly income increase" },
    ],
    deliverables: [
      "PayGo product design and financial modelling",
      "Electric motorcycle procurement and quality certification",
      "Telematics and remote management system integration",
      "M-Pesa per-kilometre payment automation",
      "Battery swap station network (8 locations across Nairobi)",
      "Rider onboarding, safety training, and orientation",
      "Ongoing rider support via dedicated WhatsApp helpline",
      "Monthly performance and repayment reporting",
    ],
    technologies: ["IoT Telematics & GPS Tracking", "Remote Asset Management", "M-Pesa API Automation", "Battery Swap Stations", "Rider Mobile App", "Credit Scoring Engine"],
    testimonial: {
      quote: "Before this programme, I was spending KES 500 on fuel every day. Now I spend less than KES 200 and I'm building towards owning my bike. This has changed my life and my family's life.",
      name: "Rider",
      role: "PayGo Programme Participant, Nairobi",
    },
  },
  {
    slug: "workplace-solar-ev-charging-upperhill",
    title: "Workplace Solar & EV Charging",
    category: "Renewable Energy",
    location: "Upper Hill, Nairobi",
    year: "2024",
    client: "Leading Insurance Firm",
    duration: "10 weeks",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1724041875334-0a6397111c7e?w=1200&h=700&fit=crop&auto=format",
    galleryImages: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&h=480&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=700&h=480&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1760538978585-f82dc257ec15?w=700&h=480&fit=crop&auto=format",
    ],
    alt: "Solar panels on a corporate office building rooftop",
    tagline: "80kWp rooftop solar + 30 employee EV charging bays — a flagship corporate sustainability installation.",
    overview: "A leading insurance company in Upper Hill commissioned Drivelectric Kenya to design and install an integrated workplace sustainability solution: an 80kWp rooftop solar array combined with 30 employee EV charging bays. The project was driven by the company's 2030 ESG commitment to achieve net-zero Scope 2 emissions and was designed to serve as a visible, flagship demonstration of the company's sustainability credentials to staff, clients, and investors.",
    challenge: "The client's eight-storey office building presented structural and electrical challenges: the rooftop had multiple HVAC and telecoms installations limiting available solar footprint, and the building's electrical riser capacity required careful assessment to determine how many EV chargers could be energised simultaneously without upgrading the main incomer. The client also required the project to be installed and commissioned without any disruption to office operations.",
    solution: "Drivelectric Kenya's structural and electrical engineers conducted a detailed rooftop survey and building load assessment, optimising solar panel placement around existing rooftop equipment to achieve 80kWp within the available area. A tiered smart charging system was designed for the basement car park, with 10 chargers on a priority circuit (for the company's EV pool vehicles) and 20 employee chargers on a dynamic load-managed circuit that automatically scales available power based on building load. All charging costs are tracked per employee for salary deduction or reimbursement processing.",
    outcome: "The system generates approximately 340 kWh of solar electricity per day, offsetting the equivalent of 60% of the building's daytime electricity consumption. Employee EV charging is fully solar-powered during business hours. The company has reported the installation in its annual ESG report as a flagship Scope 2 emissions reduction initiative, contributing to a 42% reduction in Scope 2 emissions year-on-year.",
    stats: [
      { value: "80kWp", label: "Rooftop solar capacity" },
      { value: "30", label: "Employee EV charging bays" },
      { value: "340 kWh", label: "Daily solar generation" },
      { value: "42%", label: "Scope 2 emissions reduction" },
    ],
    deliverables: [
      "Structural rooftop survey and solar feasibility study",
      "80kWp solar array design, supply, and installation",
      "Building electrical riser assessment and load planning",
      "30-bay smart EV charging system in basement car park",
      "Employee charging cost management and reporting module",
      "ESG reporting data integration (monthly automated reports)",
      "Building Energy Management System (BEMS) integration",
      "5-year solar performance monitoring and O&M agreement",
    ],
    technologies: ["80kWp Bifacial Solar PV", "Dynamic Load Management", "BEMS Integration", "Employee Charge Cost Tracking", "22kW AC Dual-Port Chargers", "Solar Export Monitoring"],
    testimonial: {
      quote: "Our staff love the free solar charging — it's a benefit that has made EVs a serious consideration for employees who were on the fence. And our ESG team finally has a flagship project to lead with in investor presentations.",
      name: "Head of Sustainability",
      role: "Corporate Client, Upper Hill Nairobi",
    },
  },
  {
    slug: "hotel-ev-charging-safari-circuit",
    title: "Hotel EV Charging — Safari Circuit",
    category: "Infrastructure",
    location: "Naivasha & Nanyuki, Kenya",
    year: "2024",
    client: "Luxury Safari Lodge Group",
    duration: "12 weeks",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1604978812122-945ae77de4b0?w=1200&h=700&fit=crop&auto=format",
    galleryImages: [
      "https://images.unsplash.com/photo-1760538978585-f82dc257ec15?w=700&h=480&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&h=480&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=700&h=480&fit=crop&auto=format",
    ],
    alt: "EV charging station at a luxury safari lodge",
    tagline: "Enabling EV road trips on Kenya's safari circuit — charging infrastructure for premium hospitality.",
    overview: "A group of luxury safari lodges in the Naivasha and Nanyuki circuits engaged Drivelectric Kenya to install EV charging facilities at four properties, enabling guests to undertake fully electric road trips between Nairobi and Kenya's iconic game reserves without range anxiety. The project was part of the lodge group's broader sustainability strategy and their positioning as East Africa's first EV-friendly luxury hospitality brand.",
    challenge: "The lodge properties present unique infrastructure challenges: they are located 2–4 hours from Nairobi on mixed road surfaces, have limited grid connectivity (one property relies entirely on generator power), and receive guests who arrive with a diverse range of EV models from different manufacturers — requiring maximum charging connector flexibility. Guest experience expectations are exceptionally high, requiring charging solutions that are architecturally sympathetic and require zero technical interaction from guests.",
    solution: "Drivelectric Kenya designed a bespoke solution for each property based on its specific power supply and guest volume. At three grid-connected properties, smart Level 2 AC chargers were installed with custom timber canopies designed by the lodge's architect to blend with the natural surroundings. At the off-grid fourth property, a 30kWp solar array with 60kWh battery storage was installed, providing fully solar-powered charging with no generator dependency. All four sites use the eCharge Africa platform with automatic room charge integration — guests simply tap their room key card to initiate a charging session.",
    outcome: "Within six months of launch, the lodge group reported a 23% increase in EV-driving guests citing the charging facilities as a key factor in their booking decision. Online review sentiment around sustainability improved significantly. The off-grid solar installation at the fourth property also eliminated generator fuel costs of approximately KES 180,000 per month.",
    stats: [
      { value: "4", label: "Lodge properties equipped" },
      { value: "23%", label: "Increase in EV-driving guests" },
      { value: "KES 180K", label: "Monthly generator savings (off-grid site)" },
      { value: "100%", label: "Solar-powered (off-grid property)" },
    ],
    deliverables: [
      "Multi-site survey and bespoke design for each property",
      "Architectural integration of charging canopies and signage",
      "Grid-tied smart AC charging stations (3 properties)",
      "30kWp solar + 60kWh battery off-grid charging system (1 property)",
      "eCharge Africa platform with room charge key card integration",
      "Multi-connector compatibility (Type 2, CCS2, CHAdeMO)",
      "Guest welcome pack and EV route planning guides",
      "Remote monitoring across all four sites via single dashboard",
    ],
    technologies: ["22kW AC Smart Chargers", "30kWp Off-grid Solar", "60kWh LFP Battery", "Room Key Card NFC Integration", "eCharge Africa Platform", "Multi-connector Universal Compatibility"],
    testimonial: {
      quote: "Our guests who drive EVs have been asking for this for years. Drivelectric Kenya made it happen beautifully — the chargers look like they were always meant to be there. Our sustainability story is now something our guests actively want to tell.",
      name: "General Manager",
      role: "Luxury Safari Lodge Group, Naivasha",
    },
  },
];

export function getProject(slug: string): ProjectDetail | undefined {
  return projectsData.find((p) => p.slug === slug);
}
