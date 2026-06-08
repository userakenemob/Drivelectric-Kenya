import { Contact } from "../components/Contact";
import { Link } from "react-router";
import { ArrowRight, Clock, Users, Award, Headphones } from "lucide-react";
import { MapPin } from "lucide-react";

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 flex items-center" style={{ background: "#000", fontFamily: "Poppins, sans-serif", minHeight: "52vh" }}>
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1775259928405-d3d76549cb08?w=1600&h=800&fit=crop&auto=format" alt="EV charging at home" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.6))" }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Contact</span>
        </nav>
        <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Let's Connect</span>
        <h1 className="text-white mb-4" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, lineHeight: 1.1 }}>Let's Power the Future Together</h1>
        <p className="text-white/60 max-w-xl" style={{ lineHeight: 1.8 }}>
          Our team is ready to help you electrify your fleet, install charging infrastructure, or explore sustainable mobility solutions.
        </p>
      </div>
    </section>
  );
}

/* ── Trust Indicators ── */
const trust = [
  { icon: Clock, title: "24h Response Time", desc: "We respond to all enquiries within one business day, guaranteed." },
  { icon: Users, title: "Dedicated Account Manager", desc: "Every client gets a named contact who guides you from first call to deployment." },
  { icon: Award, title: "Free Initial Consultation", desc: "No charge, no commitment — just an honest assessment of your needs." },
  { icon: Headphones, title: "Ongoing Support", desc: "Our relationship doesn't end at delivery. We're here for the long term." },
];

function TrustSection() {
  return (
    <section className="py-20" style={{ background: "#fdfdfd", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Why Contact Us</span>
          <h2 className="mb-3" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800, color: "#000" }}>What to Expect When You Reach Out</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trust.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.title} className="p-7 rounded-2xl text-center transition-all duration-200 hover:shadow-lg" style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(54,172,67,0.1)" }}>
                  <Icon size={22} color="#36ac43" />
                </div>
                <h3 className="font-bold text-black mb-2" style={{ fontSize: "0.95rem" }}>{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Office Map Visual ── */
function OfficeSection() {
  return (
    <section className="py-20" style={{ background: "#fff", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Visit Us</span>
            <h2 className="mb-6" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800, color: "#000" }}>Our Office in Nairobi</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              We are based at The Well Mall, Karen, Nairobi — easily accessible and close to major transport routes.
              We welcome visits for in-person consultations, product demonstrations, and project briefings.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { label: "Address", value: "The Well Mall, Karen, Nairobi, Kenya" },
                { label: "Working Hours", value: "Mon – Fri: 8:00 AM – 6:00 PM | Sat: 9:00 AM – 1:00 PM" },
                { label: "Phone", value: "+254 722 953 976" },
                { label: "Email", value: "info@drivelectric.co.ke" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="text-xs font-bold tracking-wider uppercase w-28 flex-shrink-0 mt-0.5" style={{ color: "#36ac43" }}>{item.label}</span>
                  <span className="text-gray-600 text-sm">{item.value}</span>
                </div>
              ))}
            </div>
            <a
              href="https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=ke&sa=X&geocode=KeUMm8FiGy8YMQOvEVG19Mdg&daddr=MQ54%2BMP2,+Langata+Rd,+Nairobi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: "#36ac43" }}
            >
              <MapPin size={16} />
              Get Directions
            </a>
          </div>
          <div
            className="relative rounded-2xl overflow-hidden shadow-lg"
            style={{ height: "420px" }}
          >
            <iframe
              src="https://maps.google.com/maps?q=MQ54+MP2+Langata+Road+Nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Drivelectric Kenya Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Quick Options ── */
function QuickContact() {
  const options = [
    { emoji: "💼", title: "Business Enquiry", desc: "Fleet electrification, bulk purchases, or commercial charging installation.", href: "/contact" },
    { emoji: "🚗", title: "Individual EV Purchase", desc: "Looking to buy or lease your first electric vehicle personally.", href: "/vehicles" },
    { emoji: "⚡", title: "Charging Infrastructure", desc: "Install chargers at your home, office, mall, or commercial property.", href: "/solutions" },
    { emoji: "📊", title: "Financing Application", desc: "Apply for Lease-to-Own or PayGo electric vehicle financing.", href: "/financing" },
  ];
  return (
    <section className="py-20" style={{ background: "#fdfdfd", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: "#36ac43" }}>Quick Start</span>
          <h2 className="mb-3" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800, color: "#000" }}>What Are You Looking For?</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Select the type of enquiry that best describes your needs and we'll connect you with the right specialist.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {options.map((o) => (
            <Link key={o.title} to={o.href} className="group p-6 rounded-2xl flex flex-col gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}>
              <span className="text-3xl">{o.emoji}</span>
              <h3 className="font-bold text-black group-hover:text-[#36ac43] transition-colors">{o.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{o.desc}</p>
              <span className="text-xs font-semibold flex items-center gap-1 mt-2" style={{ color: "#36ac43" }}>Get Started <ArrowRight size={12} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactPage() {
  return (
    <>
      <PageHero />
      <TrustSection />
      <QuickContact />
      <Contact />
      <OfficeSection />
    </>
  );
}
