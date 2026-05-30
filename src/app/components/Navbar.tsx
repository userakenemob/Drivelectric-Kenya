import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Solutions", to: "/solutions" },
  { label: "Vehicles", to: "/vehicles" },
  { label: "Financing", to: "/financing" },
  { label: "Projects", to: "/projects" },
  { label: "Blog", to: "/blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const alwaysDark = !isHome;
  const darkBg = alwaysDark || scrolled;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: darkBg ? "rgba(0,0,0,0.95)" : "transparent",
        backdropFilter: darkBg ? "blur(12px)" : "none",
        borderBottom: darkBg ? "1px solid rgba(54,172,67,0.12)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "#36ac43" }}
          >
            <Zap size={20} color="#fff" fill="#fff" />
          </div>
          <span
            className="text-white tracking-tight"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.15rem" }}
          >
            Driv<span style={{ color: "#36ac43" }}>electric</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors ${
                    isActive ? "text-white font-semibold" : "text-white/70 hover:text-white"
                  }`
                }
                style={({ isActive }) => ({
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: isActive ? 600 : 500,
                  color: undefined,
                  borderBottom: isActive ? "2px solid #36ac43" : "2px solid transparent",
                  paddingBottom: "2px",
                })}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
          style={{ background: "#36ac43", fontFamily: "Poppins, sans-serif" }}
        >
          Contact Us
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden px-6 pb-6 pt-2"
          style={{ background: "rgba(0,0,0,0.97)" }}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className="text-white/80 hover:text-white text-base block py-1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="inline-flex items-center px-5 py-2.5 rounded-lg text-white text-sm font-semibold mt-2"
                style={{ background: "#36ac43", fontFamily: "Poppins, sans-serif" }}
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
