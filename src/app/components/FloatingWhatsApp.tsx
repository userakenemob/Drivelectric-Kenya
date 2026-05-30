import { useState } from "react";
import { X } from "lucide-react";

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.001 2C6.477 2 2 6.477 2 12c0 1.89.525 3.658 1.438 5.168L2 22l4.978-1.41A9.956 9.956 0 0 0 12.001 22C17.524 22 22 17.523 22 12S17.524 2 12.001 2zm0 18.167a8.154 8.154 0 0 1-4.394-1.283l-.315-.187-3.254.922.888-3.377-.204-.338A8.167 8.167 0 1 1 12.001 20.167zm4.49-6.116c-.246-.123-1.457-.719-1.683-.801-.226-.082-.39-.123-.554.123-.164.246-.636.801-.78.966-.143.164-.287.185-.533.062-.246-.123-1.039-.383-1.979-1.22-.731-.652-1.225-1.458-1.368-1.704-.144-.246-.015-.379.108-.501.11-.11.246-.287.369-.431.123-.144.164-.246.246-.41.082-.164.041-.308-.02-.431-.062-.123-.555-1.338-.76-1.831-.2-.48-.404-.415-.554-.423l-.472-.008c-.164 0-.43.062-.656.308-.226.246-.862.843-.862 2.056 0 1.213.883 2.385 1.006 2.549.123.164 1.738 2.654 4.212 3.722.589.254 1.048.406 1.407.52.591.188 1.129.162 1.554.098.474-.071 1.457-.595 1.662-1.17.205-.575.205-1.068.143-1.17-.061-.103-.226-.165-.472-.288z" />
    </svg>
  );
}

const PHONE = "254722953976";
const WA_URL = `https://wa.me/${PHONE}?text=Hello%20Drivelectric%20Kenya!%20I%20would%20like%20to%20learn%20more%20about%20your%20electric%20vehicle%20solutions.`;

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Popup card */}
      {open && (
        <div
          className="rounded-2xl overflow-hidden shadow-2xl w-72"
          style={{ border: "1px solid rgba(0,0,0,0.1)" }}
        >
          {/* Header */}
          <div className="px-4 py-4 flex items-center justify-between" style={{ background: "#25D366" }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <WhatsAppIcon size={22} />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">Drivelectric Kenya</p>
                <p className="text-white/80 text-xs">Typically replies instantly</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Chat bubble */}
          <div className="p-4" style={{ background: "#f0f0f0" }}>
            <div
              className="rounded-xl rounded-tl-none p-3 text-sm leading-relaxed max-w-[90%]"
              style={{ background: "#fff", color: "#333", boxShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
            >
              👋 Hi there! Welcome to <strong>Drivelectric Kenya</strong>.<br /><br />
              How can we help you today? Ask us about EV solutions, charging infrastructure, or financing options.
            </div>
            <p className="text-xs text-gray-400 mt-2 ml-1">Just now</p>
          </div>

          {/* CTA */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 text-white font-semibold text-sm transition-all hover:opacity-90"
            style={{ background: "#25D366" }}
          >
            <WhatsAppIcon size={18} />
            Start Chat on WhatsApp
          </a>
        </div>
      )}

      {/* Pulse badge */}
      {!open && !dismissed && (
        <div className="relative cursor-pointer" onClick={() => { setOpen(true); setDismissed(true); }}>
          <div
            className="px-3 py-2 rounded-xl text-white text-xs font-medium shadow-lg flex items-center gap-2"
            style={{ background: "#25D366" }}
          >
            <span>Chat with us! 👋</span>
            <button
              onClick={(e) => { e.stopPropagation(); setDismissed(true); }}
              className="text-white/70 hover:text-white ml-1"
            >
              <X size={12} />
            </button>
          </div>
        </div>
      )}

      {/* Main FAB */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => { if (!open) { e.preventDefault(); setOpen(true); setDismissed(true); } }}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 relative"
        style={{ background: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full animate-ping opacity-25" style={{ background: "#25D366" }} />
        <WhatsAppIcon size={30} />
      </a>
    </div>
  );
}
