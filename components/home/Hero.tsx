import Container from "@/components/ui/Container";

export default function Hero() {
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
  };

  return (
    <section className="relative pt-40 pb-32 overflow-hidden selection:bg-white/20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-[-10%] right-[-5%] z-[-1] opacity-40">
        <div className="h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[100px]" />
      </div>

      <Container>
        <div className="relative z-10 max-w-4xl">
          {/* Top Tag */}
          <div className="mb-8 inline-flex items-center gap-3 rounded border border-white/10 bg-zinc-900/50 px-3 py-1.5 backdrop-blur-md shadow-lg">
            <div className="flex gap-1.5">
              <div className="h-2 w-2 rounded-full bg-red-500/80" />
              <div className="h-2 w-2 rounded-full bg-yellow-500/80" />
              <div className="h-2 w-2 rounded-full bg-green-500/80" />
            </div>
            <span className="font-mono text-xs text-zinc-400">
              spring-boot-server{" "}
              <span className="text-zinc-600">running on port 8080</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-white md:text-7xl leading-[1.1]">
            Refactoring Legacy Systems
            <br />
            <span className="text-zinc-500">into Spring Backend.</span>
          </h1>

          <div className="flex flex-col gap-12 md:flex-row md:items-start">
            {/* Description */}
            <div className="mt-5 max-w-xl">
              <span className="mb-5 block text-lg md:text-xl font-medium text-zinc-100 leading-relaxed">
                <span className="block">
                  Classic ASP / ASP.NET 기반 레거시 시스템을 운영하며
                </span>

                <span className="block">
                  운영 안정성과 구조의 중요성을 체감했고,
                </span>

                <span className="block">
                  <span className="text-blue-400">Spring Boot</span> 기반 백엔드로 재설계·구현합니다.
                </span>
              </span>

              <p className="mt-4 text-lg md:text-xl font-medium leading-relaxed text-zinc-100">
                구조를 먼저 고민하는
                <span className="text-blue-400"> 백엔드 엔지니어</span>입니다.
              </p>

            </div>

            {/* CTA */}
            <div className="mt-3 flex flex-col gap-4 rounded-xl border border-zinc-800/60 bg-zinc-950/60 p-5 backdrop-blur">
              {/* Primary */}
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, "#projects")}
                className="group flex items-center gap-4 rounded-lg bg-zinc-950 border border-zinc-800 px-6 py-3.5 transition-all hover:border-blue-500/50 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="font-mono text-sm">
                  <span className="text-purple-400">return</span>{" "}
                  <span className="text-white group-hover:text-blue-300 transition-colors">
                    projects
                  </span>
                  <span className="text-blue-400">.findAll</span>
                  <span className="text-yellow-500">()</span>;
                </div>
              </a>

              {/* Secondary */}
              <a
                href="/saebom-park-backend.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center gap-4 rounded-lg border border-transparent px-6 py-2 transition-colors hover:bg-zinc-900/50"
              >
                <div className="flex h-10 w-10 items-center justify-center text-zinc-600 group-hover:text-zinc-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </div>

                <div className="font-mono text-sm text-zinc-500 group-hover:text-zinc-300">
                  <span className="text-zinc-600 mr-2">//</span>
                  resume.pdf (KR)
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
