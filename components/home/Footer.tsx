import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-900 bg-black">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-600 text-xs font-mono">
            © {new Date().getFullYear()} SAEBOM PARK — Backend Engineering
          </div>

          <div className="flex gap-6 text-xs font-mono text-zinc-500">
            <a href="mailto:saebom.backend@gmail.com" className="hover:text-white transition-colors">
              EMAIL
            </a>
            <a href="https://github.com/saebom-park" target="_blank" rel="noreferrer noopener" className="hover:text-white transition-colors">
              GITHUB
            </a>
            <a href="/saebom-park-backend.pdf" target="_blank" rel="noreferrer noopener" className="hover:text-white transition-colors">
              RESUME
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
