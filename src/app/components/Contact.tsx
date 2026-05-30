import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.001 2C6.477 2 2 6.477 2 12c0 1.89.525 3.658 1.438 5.168L2 22l4.978-1.41A9.956 9.956 0 0 0 12.001 22C17.524 22 22 17.523 22 12S17.524 2 12.001 2zm0 18.167a8.154 8.154 0 0 1-4.394-1.283l-.315-.187-3.254.922.888-3.377-.204-.338A8.167 8.167 0 1 1 12.001 20.167zm4.49-6.116c-.246-.123-1.457-.719-1.683-.801-.226-.082-.39-.123-.554.123-.164.246-.636.801-.78.966-.143.164-.287.185-.533.062-.246-.123-1.039-.383-1.979-1.22-.731-.652-1.225-1.458-1.368-1.704-.144-.246-.015-.379.108-.501.11-.11.246-.287.369-.431.123-.144.164-.246.246-.41.082-.164.041-.308-.02-.431-.062-.123-.555-1.338-.76-1.831-.2-.48-.404-.415-.554-.423l-.472-.008c-.164 0-.43.062-.656.308-.226.246-.862.843-.862 2.056 0 1.213.883 2.385 1.006 2.549.123.164 1.738 2.654 4.212 3.722.589.254 1.048.406 1.407.52.591.188 1.129.162 1.554.098.474-.071 1.457-.595 1.662-1.17.205-.575.205-1.068.143-1.17-.061-.103-.226-.165-.472-.288z" />
    </svg>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const services = ["EV Solutions", "Charging Infrastructure", "Fleet Electrification", "Renewable Energy Integration", "Lease to Own", "PayGo Model"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-24" style={{ background: "#fff", fontFamily: "Poppins, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <span
              className="text-sm font-semibold tracking-widest uppercase mb-3 block"
              style={{ color: "#36ac43" }}
            >
              Get In Touch
            </span>
            <h2
              className="mb-4 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, color: "#000" }}
            >
              Let's Power the Future Together
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed" style={{ lineHeight: 1.8 }}>
              Whether you are looking to electrify your fleet, install EV charging infrastructure,
              or explore sustainable mobility solutions, our team is ready to help.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { icon: Phone, label: "Phone", value: "+254 700 000 000" },
                { icon: Mail, label: "Email", value: "info@drivelectric.co.ke" },
                { icon: MapPin, label: "Office", value: "Westlands, Nairobi, Kenya" },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex items-center gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(54,172,67,0.1)" }}
                    >
                      <Icon size={18} color="#36ac43" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">{c.label}</p>
                      <p className="text-black font-medium text-sm">{c.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl text-white font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: "#25D366" }}
            >
              <WhatsAppIcon size={20} />
              Chat on WhatsApp
            </a>

            {/* Image */}
            <div className="mt-10 rounded-2xl overflow-hidden h-48 bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1775259928405-d3d76549cb08?w=800&h=400&fit=crop&auto=format"
                alt="Electric car charging at modern home"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right — form */}
          <div
            className="rounded-2xl p-8"
            style={{ background: "#fdfdfd", border: "1px solid rgba(0,0,0,0.08)" }}
          >
            <h3 className="font-bold text-black text-xl mb-6">Send Us a Message</h3>

            {sent && (
              <div
                className="mb-6 p-4 rounded-xl flex items-center gap-3"
                style={{ background: "rgba(54,172,67,0.1)", border: "1px solid rgba(54,172,67,0.3)" }}
              >
                <span style={{ color: "#36ac43" }}>✓</span>
                <p className="text-sm font-medium" style={{ color: "#36ac43" }}>
                  Message sent! We'll be in touch within 24 hours.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Full Name *</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.1)", fontFamily: "Poppins, sans-serif" }}
                    onFocus={(e) => (e.target.style.borderColor = "#36ac43")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Company</label>
                  <input
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Company Name"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.1)", fontFamily: "Poppins, sans-serif" }}
                    onFocus={(e) => (e.target.style.borderColor = "#36ac43")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Email *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.1)", fontFamily: "Poppins, sans-serif" }}
                    onFocus={(e) => (e.target.style.borderColor = "#36ac43")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Phone</label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+254 700 000 000"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.1)", fontFamily: "Poppins, sans-serif" }}
                    onFocus={(e) => (e.target.style.borderColor = "#36ac43")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Service Needed</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all appearance-none"
                  style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.1)", fontFamily: "Poppins, sans-serif", color: form.service ? "#000" : "#9ca3af" }}
                  onFocus={(e) => (e.target.style.borderColor = "#36ac43")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")}
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project or requirements..."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                  style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.1)", fontFamily: "Poppins, sans-serif" }}
                  onFocus={(e) => (e.target.style.borderColor = "#36ac43")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                style={{ background: "#36ac43" }}
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
