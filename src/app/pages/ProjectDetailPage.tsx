import { useParams, Link } from "react-router";
import { ArrowLeft, MapPin, Calendar, Clock, CheckCircle, ArrowRight, Building2, Zap } from "lucide-react";
import { getProject, projectsData } from "../data/projectsData";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ fontFamily: "Poppins, sans-serif" }}>
        <p className="text-gray-400 text-lg mb-6">Project not found.</p>
        <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm" style={{ background: "#36ac43" }}>
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </div>
    );
  }

  const related = projectsData.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* Hero */}
      <div className="relative pt-28" style={{ background: "#000", minHeight: "60vh" }}>
        <div className="absolute inset-0">
          <img src={project.image} alt={project.alt} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.85) 60%, #000 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
          <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-white/70">{project.title}</span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="px-3 py-1.5 rounded-full text-xs font-bold" style={{ background: "#36ac43", color: "#fff" }}>{project.category}</span>
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: project.status === "Active Programme" ? "rgba(251,191,36,0.2)" : "rgba(255,255,255,0.12)", color: project.status === "Active Programme" ? "#fbbf24" : "rgba(255,255,255,0.8)" }}>
              {project.status}
            </span>
          </div>

          <h1 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.15 }}>
            {project.title}
          </h1>
          <p className="mb-8 max-w-2xl" style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", lineHeight: 1.8 }}>
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-6 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
            <span className="flex items-center gap-2"><MapPin size={14} style={{ color: "#36ac43" }} /> {project.location}</span>
            <span className="flex items-center gap-2"><Calendar size={14} style={{ color: "#36ac43" }} /> {project.year}</span>
            <span className="flex items-center gap-2"><Clock size={14} style={{ color: "#36ac43" }} /> {project.duration}</span>
            <span className="flex items-center gap-2"><Building2 size={14} style={{ color: "#36ac43" }} /> {project.client}</span>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ background: "#36ac43" }}>
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {project.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-white font-black" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>{s.value}</p>
              <p className="text-white/75 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="py-20" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_320px] gap-16">
          {/* Left */}
          <div>
            {/* Overview */}
            <section className="mb-14">
              <h2 className="mb-4 text-black" style={{ fontSize: "1.4rem", fontWeight: 800 }}>Project Overview</h2>
              <p className="text-gray-600 leading-relaxed" style={{ lineHeight: 1.9 }}>{project.overview}</p>
            </section>

            {/* Gallery */}
            <section className="mb-14">
              <h2 className="mb-6 text-black" style={{ fontSize: "1.4rem", fontWeight: 800 }}>Project Gallery</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {project.galleryImages.map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden h-44 bg-gray-100">
                    <img src={img} alt={`${project.title} gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </section>

            {/* Challenge */}
            <section className="mb-12">
              <h2 className="mb-4 text-black" style={{ fontSize: "1.4rem", fontWeight: 800 }}>The Challenge</h2>
              <div className="rounded-2xl p-6" style={{ background: "#fdfdfd", border: "1px solid rgba(0,0,0,0.07)" }}>
                <p className="text-gray-600 leading-relaxed" style={{ lineHeight: 1.9 }}>{project.challenge}</p>
              </div>
            </section>

            {/* Solution */}
            <section className="mb-12">
              <h2 className="mb-4 text-black" style={{ fontSize: "1.4rem", fontWeight: 800 }}>Our Solution</h2>
              <div className="rounded-2xl p-6" style={{ background: "rgba(54,172,67,0.04)", border: "1px solid rgba(54,172,67,0.15)" }}>
                <p className="text-gray-600 leading-relaxed" style={{ lineHeight: 1.9 }}>{project.solution}</p>
              </div>
            </section>

            {/* Outcome */}
            <section className="mb-12">
              <h2 className="mb-4 text-black" style={{ fontSize: "1.4rem", fontWeight: 800 }}>Results & Outcome</h2>
              <p className="text-gray-600 leading-relaxed" style={{ lineHeight: 1.9 }}>{project.outcome}</p>
            </section>

            {/* Deliverables */}
            <section className="mb-12">
              <h2 className="mb-5 text-black" style={{ fontSize: "1.4rem", fontWeight: 800 }}>Project Deliverables</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.deliverables.map((d) => (
                  <div key={d} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "#fdfdfd", border: "1px solid rgba(0,0,0,0.06)" }}>
                    <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: "#36ac43" }} />
                    <p className="text-gray-600 text-sm leading-snug">{d}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section className="mb-12">
              <h2 className="mb-5 text-black" style={{ fontSize: "1.4rem", fontWeight: 800 }}>Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((t) => (
                  <span key={t} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ background: "rgba(54,172,67,0.1)", color: "#1a7a26" }}>
                    <Zap size={12} /> {t}
                  </span>
                ))}
              </div>
            </section>

            {/* Testimonial */}
            {project.testimonial && (
              <section className="mb-12">
                <blockquote className="rounded-2xl p-8" style={{ background: "#000" }}>
                  <p className="text-white/80 italic leading-relaxed mb-5" style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
                    "{project.testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: "#36ac43" }}>
                      {project.testimonial.name[0]}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{project.testimonial.name}</p>
                      <p className="text-white/50 text-xs">{project.testimonial.role}</p>
                    </div>
                  </div>
                </blockquote>
              </section>
            )}

            {/* Prev/Next nav */}
            <div className="flex justify-between gap-4 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
              <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80" style={{ color: "#36ac43" }}>
                <ArrowLeft size={16} /> All Projects
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 hover:scale-105" style={{ background: "#36ac43" }}>
                Start a Similar Project <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              {/* Project details card */}
              <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                <div className="px-5 py-4" style={{ background: "#36ac43" }}>
                  <p className="text-white font-bold text-sm">Project Details</p>
                </div>
                <div className="p-5 space-y-4" style={{ background: "#fdfdfd" }}>
                  {[
                    { label: "Client", value: project.client },
                    { label: "Location", value: project.location },
                    { label: "Year", value: project.year },
                    { label: "Duration", value: project.duration },
                    { label: "Status", value: project.status },
                    { label: "Category", value: project.category },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-start gap-3 py-2" style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                      <span className="text-xs text-gray-400 font-medium">{item.label}</span>
                      <span className="text-xs text-black font-semibold text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-2xl p-6" style={{ background: "linear-gradient(135deg, #36ac43, #1a7a26)" }}>
                <p className="text-white font-bold text-base mb-2">Want a Similar Project?</p>
                <p className="text-white/75 text-xs mb-5 leading-relaxed">Our team can design and deliver a custom solution tailored to your specific requirements and budget.</p>
                <Link to="/contact" className="block text-center py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90" style={{ background: "#fff", color: "#36ac43" }}>
                  Get a Free Quote
                </Link>
              </div>

              {/* Related projects */}
              <div>
                <p className="font-bold text-black text-sm mb-4">Other Projects</p>
                <div className="space-y-4">
                  {related.map((p) => (
                    <Link key={p.slug} to={`/projects/${p.slug}`} className="group flex gap-3 items-start">
                      <img src={p.image} alt={p.alt} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold group-hover:text-[#36ac43] transition-colors text-black leading-snug line-clamp-2">{p.title}</p>
                        <p className="text-xs text-gray-400 mt-1">{p.location} · {p.year}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related projects strip */}
      <div className="py-16" style={{ background: "#fdfdfd" }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="mb-8 text-black" style={{ fontSize: "1.3rem", fontWeight: 800 }}>More Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} to={`/projects/${p.slug}`} className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl block" style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}>
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img src={p.image} alt={p.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.2)" }} />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: "#36ac43", color: "#fff" }}>{p.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-bold text-black text-sm mb-1 group-hover:text-[#36ac43] transition-colors">{p.title}</p>
                  <p className="text-xs text-gray-400">{p.location} · {p.year}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
