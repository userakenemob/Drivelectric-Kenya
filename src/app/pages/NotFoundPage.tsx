import { Link } from "react-router";
import { Zap, ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: "#000", fontFamily: "Poppins, sans-serif" }}
    >
      <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8" style={{ background: "rgba(54,172,67,0.15)" }}>
        <Zap size={40} color="#36ac43" fill="#36ac43" />
      </div>
      <h1 style={{ fontSize: "6rem", fontWeight: 900, color: "#36ac43", lineHeight: 1 }}>404</h1>
      <p className="text-white text-2xl font-bold mt-4 mb-3">Page Not Found</p>
      <p className="text-white/50 mb-10 max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold transition-all hover:opacity-90 hover:scale-105"
        style={{ background: "#36ac43" }}
      >
        <ArrowLeft size={18} /> Back to Home
      </Link>
    </div>
  );
}
