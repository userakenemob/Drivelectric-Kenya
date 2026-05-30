import { Zap, Twitter, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const columns = [
  {
    title: "Company",
    links: ["About Us", "Projects", "Solutions", "Contact"],
    hrefs: ["/about", "/projects", "/solutions", "/contact"],
  },
  {
    title: "Solutions",
    links: ["EV Solutions", "Charging Infrastructure", "Fleet Electrification", "Renewable Energy"],
    hrefs: ["/solutions", "/solutions", "/solutions", "/solutions"],
  },
  {
    title: "Financing",
    links: ["Lease to Own", "PayGo Model", "Apply Now", "Vehicles"],
    hrefs: ["/financing", "/financing", "/contact", "/vehicles"],
  },
];

const socials = [
  { Icon: Twitter, href: "#" },
  { Icon: Linkedin, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: Facebook, href: "#" },
  { Icon: Youtube, href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer style={{ background: "#000", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 w-fit">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "#36ac43" }}
              >
                <Zap size={20} color="#fff" fill="#fff" />
              </div>
              <span
                className="text-white tracking-tight"
                style={{ fontWeight: 700, fontSize: "1.15rem" }}
              >
                Driv<span style={{ color: "#36ac43" }}>electric</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Kenya's leading electric vehicle and clean energy company. Accelerating the future of sustainable mobility across East Africa.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mb-8">
              {socials.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(54,172,67,0.15)", border: "1px solid rgba(54,172,67,0.2)" }}
                >
                  <Icon size={16} color="#36ac43" />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <p className="text-white/60 text-xs mb-3 font-medium tracking-wider uppercase">Newsletter</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-2.5 rounded-lg text-sm outline-none text-white placeholder-white/30"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", fontFamily: "Poppins, sans-serif" }}
                onFocus={(e) => (e.target.style.borderColor = "#36ac43")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-lg text-white text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: "#36ac43", flexShrink: 0 }}
              >
                {subscribed ? "✓" : "Join"}
              </button>
            </form>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4
                className="text-white font-semibold text-sm mb-5 tracking-wider uppercase"
                style={{ color: "#36ac43" }}
              >
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link, i) => (
                  <li key={link}>
                    <Link
                      to={col.hrefs[i]}
                      className="text-white/50 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © 2026 Drivelectric Kenya. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <Link key={l} to="/contact" className="text-white/30 text-xs hover:text-white/60 transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
