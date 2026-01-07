import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Project } from "./types";


type NoteCard = {
  label: string;
  title: string;
  desc: string;
  href: string; // 임시 링크
  tone?: "blue" | "amber";
};

function NoteLinkCard({ c }: { c: NoteCard }) {
    const tone = c.tone ?? "blue";
    const hover =
        c.tone === "blue" ? "hover:border-blue-500/50" : "hover:border-amber-500/50";

    return (
        <a
        href={c.href}
        target="_blank"
        rel="noreferrer noopener"
        className={`group rounded-xl border border-zinc-800 bg-zinc-950/40 p-5 transition ${hover}`}
        >
        <div className="font-mono text-xs text-zinc-500 mb-2">{c.label}</div>
        <div className="text-white font-semibold mb-1">{c.title}</div>
        <p className="text-zinc-500 text-xs">{c.desc}</p>
        </a>
    );
}

export default function ProjectDetailNotes({ project }: { project: Project }) {
    const isBulletin = project.slug === "bulletin-board";
    const isKeeb = project.slug === "keeb-station";

    // 프로젝트별 notes 카드 세트
    const cards: NoteCard[] = isBulletin
        ? [
            {
            label: "CONCEPT NOTES",
            title: "Design & Architecture Notes",
            desc: "설계 기준, 개념 정리, 판단 근거",
            href: "https://www.notion.so/Master-Concept-Note-bulletin-board-2e1d84f8cc0c800fbbd5eafe3fa302b3",
            tone: "blue",
            },
            {
            label: "INCIDENT LOG",
            title: "Troubleshooting & Fix Records",
            desc: "실제 장애·버그 해결 기록",
            href: "https://www.notion.so/bulletin-board-2e1d84f8cc0c8026a811fca9e4f97681",
            tone: "amber",
            },
        ]
        : isKeeb
        ? [
            {
                label: "DECISION LOG",
                title: "Architecture Decisions",
                desc: "도메인/테이블/상태전이 기준과 선택 근거",
                href: "https://www.notion.so/Master-Concept-Note-keeb-station-2e1d84f8cc0c804490d6d5f957db20c2",
            },
            {
                label: "INCIDENT LOG",
                title: "Concurrency & Error Handling Notes",
                desc: "락 충돌/예외 처리/정합성 이슈 대응 기록",
                href: "https://www.notion.so/keep-station-2e1d84f8cc0c80cd9579db7649c021c5",
                tone: "amber",
            },
            ]
        : [];

    return (
        <section className="py-24 border-t border-dashed border-zinc-800 bg-zinc-900/20">
        <Container>
            <SectionHeader title="NOTES" subtitle="Deep dives, decisions, and references" />

            <div className="mt-10 max-w-3xl space-y-6 text-zinc-400 text-sm leading-relaxed">
            <p>
                이 페이지에는 핵심만 남겼습니다. 더 자세한 설계 판단과 시행착오, 전체 사고 흐름은
                아래 노트에 정리되어 있습니다.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
                {cards.map((c) => (
                <NoteLinkCard key={c.label} c={c} />
                ))}
            </div>
            </div>
        </Container>
        </section>
    );
}
