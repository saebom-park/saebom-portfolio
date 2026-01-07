"use client";

import Container from "@/components/ui/Container";

export default function Nav() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Log", href: "#log" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 68;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: y, behavior: "smooth" });
    history.replaceState(null, "", href);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/70 backdrop-blur-xl supports-[backdrop-filter]:bg-black/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="text-sm font-bold text-white font-mono tracking-wider">
            DEV.SAEBOM<span className="animate-pulse text-blue-500">_</span>
          </a>

          <div className="flex gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-xs font-mono text-zinc-500 hover:text-white transition-colors uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}
