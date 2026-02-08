import { useState, useEffect, useRef } from "react";
import { Mail, Linkedin, Palette, Sparkles, Code, Camera, Globe, Wrench } from "lucide-react";
import graphicdesign1 from "@/assets/graphicdesign-1.jpg";
import graphicdesign2 from "@/assets/graphicdesign-2.jpg";
import graphicdesign3 from "@/assets/graphicdesign-3.jpg";
import webpages1 from "@/assets/webpages-1.jpg";
import webpages2 from "@/assets/webpages-2.jpg";
import webpages3 from "@/assets/webpages-3.jpg";
import photography1 from "@/assets/photography-1.jpg";
import photography2 from "@/assets/photography-2.jpg";
import photography3 from "@/assets/photography-3.jpg";

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1, rootMargin: "-100px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}
    >
      {children}
    </div>
  );
}

interface Project {
  url: string;
  alt: string;
  category: string;
}

export default function Index() {
  const [activeWord, setActiveWord] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  const rotatingWords = ["COLOR", "TYPOGRAPHY", "PHOTOGRAPHY", "WEB DESIGN", "VIBE CODING"];

  useEffect(() => {
    setHeaderVisible(true);
    setTimeout(() => setHeroVisible(true), 200);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const projects: Project[] = [
    { url: graphicdesign3, alt: "Color Palette", category: "Brand Identity" },
    { url: graphicdesign1, alt: "Kino Tapiola Coupons", category: "Brand Identity" },
    { url: graphicdesign2, alt: "Noisniemi Layout", category: "Brand Identity" },
    { url: webpages1, alt: "Web Design 1", category: "Web Design" },
    { url: webpages2, alt: "Web Design 2", category: "Web Design" },
    { url: webpages3, alt: "Web Design 3", category: "Web Design" },
    { url: photography1, alt: "Photography 1", category: "Photography" },
    { url: photography2, alt: "Photography 2", category: "Photography" },
    { url: photography3, alt: "Photography 3", category: "Photography" },
  ];

  const skills = [
    { icon: Palette, name: "Visual Design", description: "Photoshop, Canva, Procreate" },
    { icon: Camera, name: "Photography", description: "Visual storytelling" },
    { icon: Globe, name: "Web Design", description: "WordPress, Squarespace" },
    { icon: Code, name: "HTML & CSS", description: "Web fundamentals" },
    { icon: Sparkles, name: "AI-Assisted Dev", description: "Cursor, Claude, v0, Lovable" },
    { icon: Wrench, name: "Working with", description: "React, Tailwind, JavaScript" },
  ];

  const skillGradients = [
    "linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #8B5CF6 100%)",
    "linear-gradient(135deg, #8B5CF6 0%, #a855f7 50%, #EC4899 100%)",
    "linear-gradient(135deg, #EC4899 0%, #EC4899 100%)",
    "linear-gradient(135deg, #937B39 0%, #937B39 100%)",
    "linear-gradient(135deg, #ff8a80 0%, #ff6b6b 40%, #ff7f6e 70%, #ff9478 100%)",
    "linear-gradient(135deg, #f97b68 0%, #fb923c 50%, #F97316 100%)",
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const getLetterSpacing = (word: string) => {
    switch (word) {
      case "COLOR": return "0.73em";
      case "TYPOGRAPHY": return "-0.03em";
      case "PHOTOGRAPHY": return "-0.12em";
      case "WEB DESIGN": return "0.03em";
      case "VIBE CODING": return "-0.01em";
      default: return "-0.01em";
    }
  };

  const getScaleX = (word: string) => {
    switch (word) {
      case "TYPOGRAPHY": return "scaleX(0.92)";
      case "PHOTOGRAPHY": return "scaleX(0.73)";
      case "WEB DESIGN": return "scaleX(1.06)";
      case "VIBE CODING": return "scaleX(0.95)";
      default: return "scaleX(1)";
    }
  };

  const getAspectRatio = (category: string) => {
    switch (category) {
      case "Brand Identity": return "100%";    // 1:1
      case "Web Design": return "75%";          // 4:3
      case "Photography": return "133.33%";     // 3:4
      default: return "75%";
    }
  };

  return (
    <div style={{ minHeight: "100vh", fontFamily: "'Oswald', sans-serif", fontSize: "16px", backgroundColor: "#F5F1D3" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Oswald:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideOut {
          from { transform: translateY(0); opacity: 1; }
          to { transform: translateY(-100px); opacity: 0; }
        }
        .animated-gradient {
          background-size: 400% 400%;
          animation: gradientShift 2s ease-in-out infinite;
        }
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.2);
        }
        .skill-card:hover {
          transform: translateY(-8px) scale(1.05);
        }
        .nav-link:hover { color: #4f46e5 !important; }
        .btn-hover:hover { transform: scale(1.05); }
        .btn-hover:active { transform: scale(0.95); }
        .rotating-word-enter {
          animation: slideUp 0.4s ease-in-out forwards;
        }
      `}</style>

      {/* HEADER */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "#F5F1D3",
          borderBottom: "1px solid rgba(226, 232, 240, 0.3)",
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? "translateY(0)" : "translateY(-100px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h6 style={{
            fontWeight: "bold",
            background: "linear-gradient(to right, #4f46e5, #9333ea)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textTransform: "uppercase",
            margin: 0,
            fontSize: 20,
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "-0.5%",
          }}>
            Karo-Liina Kähkölä
          </h6>
          <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {["Works", "About", "Skills"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                style={{ color: "#334155", textDecoration: "none", fontWeight: 500, transition: "color 0.3s" }}
              >
                {item}
              </a>
            ))}
            <button
              className="btn-hover"
              onClick={scrollToContact}
              style={{
                padding: "0.625rem 1.5rem",
                background: "linear-gradient(to right, #4f46e5, #9333ea)",
                color: "white",
                borderRadius: 9999,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.3)",
                fontFamily: "'Oswald', sans-serif",
                fontSize: 14,
                transition: "transform 0.2s",
              }}
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "8rem 1.5rem", overflow: "visible" }}>
        <div style={{ display: "flex", flexDirection: "row", gap: "3rem", alignItems: "flex-start", flexWrap: "wrap", overflow: "visible" }}>
          <div
            style={{
              flex: "1 1 60%",
              minWidth: 300,
              overflow: "visible",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            }}
          >
            <div style={{ marginBottom: "3rem", overflow: "visible" }}>
              <div style={{
                fontSize: 76,
                letterSpacing: "-0.08em",
                fontFamily: "'Playfair Display', serif",
                textTransform: "uppercase",
                lineHeight: 1,
                marginBottom: "0.25rem",
                color: "#1a1a1a",
              }}>
                Visual
              </div>
              <div style={{
                fontSize: 160,
                letterSpacing: -2,
                fontWeight: 700,
                fontFamily: "'Playfair Display', serif",
                textTransform: "uppercase",
                lineHeight: 0.85,
                marginBottom: "0.25rem",
                color: "#937B39",
              }}>
                Designer
              </div>
              <div style={{
                fontSize: 160,
                letterSpacing: -2,
                fontWeight: 700,
                fontFamily: "'Playfair Display', serif",
                textTransform: "uppercase",
                lineHeight: 0.85,
                marginBottom: "0.25rem",
                background: "linear-gradient(90deg, #8B5CF6 0%, #EC4899 30%, #F97316 65%, #F97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Creating
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "0.5rem", overflow: "visible", width: "100%" }}>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "0.25rem", position: "relative", flexShrink: 0 }}>
                  <div style={{
                    fontSize: 76,
                    letterSpacing: "-0.08em",
                    fontFamily: "'Playfair Display', serif",
                    textTransform: "uppercase",
                    lineHeight: 1,
                    color: "#1a1a1a",
                  }}>
                    Impact
                  </div>
                  <div style={{
                    fontSize: 26,
                    display: "flex",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    fontFamily: "'Oswald', sans-serif",
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    color: "#1a1a1a",
                    lineHeight: 2.5,
                    alignSelf: "flex-end",
                    marginBottom: 7,
                    marginLeft: -10,
                  }}>
                    with
                  </div>
                </div>
                <div style={{ position: "relative", height: 76, marginLeft: -25, overflow: "visible", width: 2000 }}>
                  <div
                    key={activeWord}
                    className="rotating-word-enter"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 76,
                      fontWeight: 700,
                      letterSpacing: getLetterSpacing(rotatingWords[activeWord]),
                      transform: getScaleX(rotatingWords[activeWord]),
                      transformOrigin: "left center",
                      whiteSpace: "nowrap",
                      lineHeight: 1,
                      textTransform: "uppercase",
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 3000,
                      background: "linear-gradient(90deg, #8B5CF6 0%, #EC4899 35%, #F97316 60%, #F97316 100%)",
                      backgroundSize: "800px 100%",
                      backgroundRepeat: "no-repeat",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {rotatingWords[activeWord]}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ maxWidth: 600, opacity: heroVisible ? 1 : 0, transition: "opacity 0.8s ease-out 0.8s" }}>
              <p style={{
                fontSize: 20,
                color: "#1e293b",
                lineHeight: 1.8,
                marginBottom: "2rem",
                fontFamily: "'EB Garamond', serif",
                fontWeight: 500,
                letterSpacing: "0.5px",
              }}>
                Rakennan visuaalista osaamistani graafisesta suunnittelusta ja valokuvauksesta kohti digitaalista tuotekehitystä. Verkkosivu-, ui- ja ux-suunnittelua olen tehnyt CMS-alustoilla WordPress ja Squarespace. Opiskelen parhaillaan UI/UX-suunnittelua lisää ja harjoittelen frontend-kehitystä AI-avusteisella koodaamisella, jossa työskentelen React-, Tailwind- ja JavaScript-teknologioiden parissa.
              </p>
              <button
                className="btn-hover"
                onClick={scrollToContact}
                style={{
                  padding: "1rem 2.5rem",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: 50,
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow: "0 10px 30px rgba(102, 126, 234, 0.4)",
                  fontFamily: "'Oswald', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  transition: "transform 0.2s",
                }}
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="works" style={{ backgroundColor: "#F5F1D3", padding: "6rem 0" }}>
        <AnimatedSection>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
            <h2 style={{
              fontSize: 56,
              letterSpacing: "-0.08em",
              fontFamily: "'Playfair Display', serif",
              textTransform: "uppercase",
              lineHeight: 1,
              color: "#1a1a1a",
              textAlign: "center",
              margin: "0 0 4rem 0",
            }}>
              Selected Works
            </h2>

            {["Brand Identity", "Web Design", "Photography"].map((category) => (
              <div key={category} style={{ marginBottom: "4rem" }}>
                <h3 style={{
                  fontSize: 22,
                  fontFamily: "'EB Garamond', serif",
                  fontWeight: 500,
                  color: "#1e293b",
                  marginBottom: "1.5rem",
                  letterSpacing: "0.5px",
                }}>
                  {category === "Brand Identity" ? "Branding and Graphic Design" : category}
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
                  {projects.filter((p) => p.category === category).map((project, index) => (
                    <div
                      key={index}
                      className="project-card"
                      onClick={() => setSelectedProject(project)}
                      style={{
                        cursor: "pointer",
                        backgroundColor: "white",
                        borderRadius: "1rem",
                        overflow: "hidden",
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                        border: "1px solid #f1f5f9",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <div style={{ position: "relative", paddingTop: getAspectRatio(category), overflow: "hidden" }}>
                        <img
                          src={project.url}
                          alt={project.alt}
                          loading="lazy"
                          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            cursor: "pointer",
            animation: "fadeIn 0.3s ease",
          }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: 1200, maxHeight: "90vh", cursor: "default" }}>
            <img
              src={selectedProject.url}
              alt={selectedProject.alt}
              style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "1rem" }}
            />
          </div>
        </div>
      )}

      {/* ABOUT */}
      <section id="about" style={{ maxWidth: 1280, margin: "0 auto", padding: "6rem 1.5rem" }}>
        <AnimatedSection>
          <div style={{
            backgroundColor: "white",
            borderRadius: "1.5rem",
            padding: "3rem",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            border: "1px solid #f1f5f9",
          }}>
            <h2 style={{
              fontSize: 56,
              letterSpacing: "-0.08em",
              fontFamily: "'Playfair Display', serif",
              textTransform: "uppercase",
              lineHeight: 1,
              color: "#1a1a1a",
              margin: "0 0 1.5rem 0",
            }}>
              About Me
            </h2>
            <p style={{ color: "#1e293b", marginBottom: "1.5rem", fontSize: 18, fontFamily: "'EB Garamond', serif", fontWeight: 500, lineHeight: "160%", letterSpacing: "0.5px" }}>
              Rakennan visuaalista osaamistani graafisesta suunnittelusta ja valokuvauksesta kohti digitaalista tuotekehitystä. Verkkosivu-, ui- ja ux-suunnittelua olen tehnyt CMS-alustoilla WordPress ja Squarespace.
            </p>
            <p style={{ color: "#1e293b", margin: 0, fontSize: 18, fontFamily: "'EB Garamond', serif", fontWeight: 500, lineHeight: "160%", letterSpacing: "0.5px" }}>
              Opiskelen parhaillaan UI/UX-suunnittelua lisää ja harjoittelen frontend-kehitystä AI-avusteisella koodaamisella, jossa työskentelen React-, Tailwind- ja JavaScript-teknologioiden parissa.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ maxWidth: 1280, margin: "0 auto", padding: "6rem 1.5rem" }}>
        <AnimatedSection>
          <h2 style={{
            fontSize: 56,
            letterSpacing: "-0.08em",
            fontFamily: "'Playfair Display', serif",
            textTransform: "uppercase",
            lineHeight: 1,
            color: "#1a1a1a",
            textAlign: "center",
            margin: "0 0 1rem 0",
          }}>
            Skillset
          </h2>
          <p style={{ color: "#1e293b", textAlign: "center", marginBottom: "4rem", fontSize: 18, fontFamily: "'EB Garamond', serif", fontWeight: 500, lineHeight: "160%", letterSpacing: "0.5px" }}>
            Tools and expertise I bring to every project
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="skill-card animated-gradient"
                  style={{
                    background: skillGradients[index],
                    backgroundSize: "400% 400%",
                    borderRadius: "1rem",
                    padding: "2rem 1.5rem",
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                    transition: "all 0.3s",
                    minHeight: 160,
                    color: "white",
                    cursor: "default",
                  }}
                >
                  <div style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "0.75rem",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 16px -4px rgba(0, 0, 0, 0.2)",
                  }}>
                    <Icon style={{ width: "1.75rem", height: "1.75rem", color: "white" }} />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "white", lineHeight: 1.25, margin: "0 0 0.5rem 0", fontFamily: "'Playfair Display', serif" }}>
                      {skill.name}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.85)", margin: 0, lineHeight: 1.4 }}>
                      {skill.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ backgroundColor: "#F5F1D3", padding: "8rem 0" }}>
        <AnimatedSection>
          <div style={{ maxWidth: 896, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
            <h2 style={{
              fontSize: 56,
              letterSpacing: "-0.08em",
              fontFamily: "'Playfair Display', serif",
              textTransform: "uppercase",
              lineHeight: 1,
              background: "linear-gradient(to right, #4f46e5, #9333ea)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              margin: "0 0 1.5rem 0",
            }}>
              Let's Connect
            </h2>
            <p style={{ color: "#1e293b", marginBottom: "3rem", fontSize: 18, fontFamily: "'EB Garamond', serif", fontWeight: 500, lineHeight: "160%", letterSpacing: "0.5px" }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to bring your vision to life.
            </p>

            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap", marginBottom: "3rem" }}>
              <a
                href="mailto:info@karoliinak.com"
                className="btn-hover"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "1rem 2rem",
                  backgroundColor: "white",
                  borderRadius: 9999,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  border: "1px solid #e2e8f0",
                  textDecoration: "none",
                  transition: "transform 0.2s",
                }}
              >
                <Mail style={{ width: "1.25rem", height: "1.25rem", color: "#4f46e5" }} />
                <span style={{ fontWeight: 600, color: "#334155", fontFamily: "'Oswald', sans-serif" }}>info@karoliinak.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/karo-liina-k%C3%A4hk%C3%B6l%C3%A4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hover"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "1rem 2rem",
                  background: "linear-gradient(to right, #4f46e5, #9333ea)",
                  color: "white",
                  borderRadius: 9999,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  textDecoration: "none",
                  transition: "transform 0.2s",
                }}
              >
                <Linkedin style={{ width: "1.25rem", height: "1.25rem" }} />
                <span style={{ fontWeight: 600, fontFamily: "'Oswald', sans-serif" }}>LinkedIn</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#F5F1D3", color: "#475569", padding: "3rem 0", borderTop: "1px solid rgba(226, 232, 240, 0.5)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <p style={{ color: "#1e293b", margin: 0, fontSize: 18, fontFamily: "'EB Garamond', serif", fontWeight: 500, lineHeight: "160%", letterSpacing: "0.5px" }}>
            © 2026 Karo-Liina Kähkölä. Crafted with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
}
