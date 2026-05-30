import { useParams, Link } from "react-router";
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from "lucide-react";
import { getArticle, articles, type Section } from "../data/blogArticles";

function RenderSection({ section }: { section: Section }) {
  if (section.type === "paragraph") {
    return (
      <p className="text-gray-600 leading-relaxed mb-5" style={{ fontSize: "1rem", lineHeight: 1.9 }}>
        {section.content}
      </p>
    );
  }
  if (section.type === "heading") {
    return (
      <h2 className="mt-10 mb-4 text-black" style={{ fontSize: "1.35rem", fontWeight: 800, lineHeight: 1.3 }}>
        {section.content}
      </h2>
    );
  }
  if (section.type === "subheading") {
    return (
      <h3 className="mt-7 mb-3 text-black" style={{ fontSize: "1.1rem", fontWeight: 700 }}>
        {section.content}
      </h3>
    );
  }
  if (section.type === "quote") {
    return (
      <blockquote
        className="my-8 pl-6 py-4 pr-6 rounded-xl italic text-gray-700"
        style={{ borderLeft: "4px solid #36ac43", background: "rgba(54,172,67,0.06)", fontSize: "1.05rem", lineHeight: 1.8 }}
      >
        "{section.content}"
      </blockquote>
    );
  }
  if (section.type === "list" && section.items) {
    return (
      <ul className="my-6 space-y-3">
        {section.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-600 text-sm" style={{ lineHeight: 1.7 }}>
            <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#36ac43" }} />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  if (section.type === "stats" && section.stats) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
        {section.stats.map((s) => (
          <div key={s.label} className="p-5 rounded-2xl text-center" style={{ background: "#fdfdfd", border: "1px solid rgba(0,0,0,0.08)" }}>
            <p className="font-black mb-1" style={{ fontSize: "1.4rem", color: "#36ac43" }}>{s.value}</p>
            <p className="text-gray-500 text-xs leading-snug">{s.label}</p>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

export function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticle(slug) : undefined;

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ fontFamily: "Poppins, sans-serif" }}>
        <p className="text-gray-400 text-lg mb-6">Article not found.</p>
        <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm" style={{ background: "#36ac43" }}>
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    );
  }

  const currentIndex = articles.findIndex((a) => a.slug === article.slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;
  const related = articles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3);
  const fallbackRelated = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* Hero */}
      <div className="relative pt-28 pb-0" style={{ background: "#000", minHeight: "55vh" }}>
        <div className="absolute inset-0">
          <img src={article.image} alt={article.alt} className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.85) 60%, #000 100%)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
          <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white/70 truncate max-w-xs">{article.title}</span>
          </nav>

          <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold mb-4" style={{ background: "#36ac43", color: "#fff" }}>
            {article.category}
          </span>

          <h1 className="text-white mb-6" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15 }}>
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
            <span className="flex items-center gap-2"><User size={14} /> {article.author}</span>
            <span className="flex items-center gap-2"><Calendar size={14} /> {article.date}</span>
            <span className="flex items-center gap-2"><Clock size={14} /> {article.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="py-16" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto px-6 lg:grid lg:grid-cols-[1fr_280px] lg:gap-16">
          {/* Main content */}
          <article>
            <p className="text-gray-500 mb-8 pb-8 italic" style={{ borderBottom: "1px solid rgba(0,0,0,0.08)", fontSize: "1.1rem", lineHeight: 1.8 }}>
              {article.excerpt}
            </p>
            {article.body.map((section, i) => (
              <RenderSection key={i} section={section} />
            ))}

            {/* Author card */}
            <div className="mt-14 pt-8 flex items-start gap-4" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
              <div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg" style={{ background: "linear-gradient(135deg, #36ac43, #1a7a26)" }}>
                {article.author.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-bold text-black text-sm">{article.author}</p>
                <p className="text-gray-400 text-xs mb-2">{article.authorRole}</p>
                <p className="text-gray-500 text-sm leading-relaxed">Expert contributor at Drivelectric Kenya, helping businesses and individuals navigate the transition to electric mobility across East Africa.</p>
              </div>
            </div>

            {/* Prev / Next navigation */}
            <div className="mt-12 flex justify-between gap-4">
              {prevArticle ? (
                <Link to={`/blog/${prevArticle.slug}`} className="flex-1 max-w-xs group flex items-start gap-3 p-4 rounded-xl transition-all hover:shadow-md" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                  <ArrowLeft size={16} className="flex-shrink-0 mt-1" style={{ color: "#36ac43" }} />
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Previous</p>
                    <p className="text-sm font-semibold text-black group-hover:text-[#36ac43] transition-colors line-clamp-2">{prevArticle.title}</p>
                  </div>
                </Link>
              ) : <div />}
              {nextArticle ? (
                <Link to={`/blog/${nextArticle.slug}`} className="flex-1 max-w-xs group flex items-start gap-3 p-4 rounded-xl transition-all hover:shadow-md text-right ml-auto" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Next</p>
                    <p className="text-sm font-semibold text-black group-hover:text-[#36ac43] transition-colors line-clamp-2">{nextArticle.title}</p>
                  </div>
                  <ArrowRight size={16} className="flex-shrink-0 mt-1" style={{ color: "#36ac43" }} />
                </Link>
              ) : <div />}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-8">
              {/* CTA */}
              <div className="rounded-2xl p-6 text-white" style={{ background: "linear-gradient(135deg, #36ac43 0%, #1a7a26 100%)" }}>
                <p className="font-bold text-lg mb-2">Ready to Go Electric?</p>
                <p className="text-white/80 text-sm mb-5 leading-relaxed">Talk to our team about EV solutions tailored for your business or home.</p>
                <Link to="/contact" className="block text-center py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90" style={{ background: "#fff", color: "#36ac43" }}>
                  Get a Free Consultation
                </Link>
              </div>

              {/* Related articles */}
              <div>
                <p className="font-bold text-black text-sm mb-4">Related Articles</p>
                <div className="space-y-4">
                  {(related.length > 0 ? related : fallbackRelated).map((a) => (
                    <Link key={a.slug} to={`/blog/${a.slug}`} className="group flex gap-3 items-start">
                      <img src={a.image} alt={a.alt} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold group-hover:text-[#36ac43] transition-colors text-black leading-snug line-clamp-2">{a.title}</p>
                        <p className="text-xs text-gray-400 mt-1">{a.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter mini */}
              <div className="rounded-2xl p-6" style={{ background: "#fdfdfd", border: "1px solid rgba(0,0,0,0.07)" }}>
                <p className="font-bold text-black text-sm mb-2">Get EV insights in your inbox</p>
                <p className="text-gray-500 text-xs mb-4 leading-relaxed">Join our bi-weekly newsletter on electric mobility in Africa.</p>
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
                  <input type="email" required placeholder="your@email.com" className="px-3 py-2.5 rounded-lg text-sm outline-none" style={{ border: "1px solid rgba(0,0,0,0.1)", fontFamily: "Poppins, sans-serif" }} onFocus={(e) => (e.target.style.borderColor = "#36ac43")} onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")} />
                  <button type="submit" className="py-2.5 rounded-lg text-white text-sm font-semibold transition-all hover:opacity-90" style={{ background: "#36ac43" }}>Subscribe Free</button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Back to blog */}
      <div className="py-10 text-center" style={{ background: "#fdfdfd" }}>
        <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 hover:scale-105" style={{ background: "#36ac43", color: "#fff" }}>
          <ArrowLeft size={16} /> Back to All Articles
        </Link>
      </div>
    </div>
  );
}
