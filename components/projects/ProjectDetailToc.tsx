"use client";

import { useEffect, useMemo, useState } from "react";
import type { Project } from "./ProjectDetailPage";

type TocItem = { id: string; label: string };

export default function ProjectDetailToc({
  project,
  isKeeb = false,
}: {
  project: Project;
  isKeeb?: boolean;
}) {
  // keeb-station일 때만 라벨 변경
  const items: TocItem[] = useMemo(
    () => [
      { id: "context", label: "Context" },
      { id: "principles", label: isKeeb ? "Decisions" : "Principles" },
      { id: "troubleshooting", label: isKeeb ? "Incident Log" : "Troubleshooting" },
      { id: "notes", label: "Notes" },
    ],
    [isKeeb]
  );

  const [activeId, setActiveId] = useState<string>("context");

  useEffect(() => {
    const elements = items
      .map((it) => document.getElementById(it.id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    // notes가 끝에서 active 안 되는 문제를 줄이기 위해 옵션 완화
    const observer = new IntersectionObserver(
      (entries) => {
        // 화면에 걸린 섹션들 중 "가장 위에 가까운 것"을 active로
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0));

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: 0.08,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -100;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="flex flex-col gap-8">
      {/* 1. Navigation */}
      <div>
        <div className="mb-4 font-mono text-xs font-bold tracking-wider text-zinc-500 uppercase">
          // Navigation
        </div>

        <ul className="relative border-l border-zinc-800">
          {items.map((it) => {
            const isActive = activeId === it.id;
            const isTrouble = it.id === "troubleshooting";

            return (
              <li key={it.id}>
                <a
                  href={`#${it.id}`}
                  onClick={(e) => handleClick(e, it.id)}
                  className={`
                    group flex items-center py-2 pl-4 text-sm transition-all duration-300 border-l-2 -ml-[1px]
                    ${
                      isActive
                        ? isTrouble
                          ? "border-amber-500 text-amber-400 font-medium bg-amber-500/5"
                          : "border-blue-500 text-blue-400 font-medium bg-blue-500/5"
                        : isTrouble
                          ? "border-transparent text-zinc-500 hover:text-amber-300 hover:border-amber-500/50"
                          : "border-transparent text-zinc-600 hover:text-zinc-300 hover:border-zinc-700"
                    }
                  `}
                >
                  <span className="font-mono flex items-center gap-2 min-w-0">
                    {/* Trouble 아이콘 유지 */}
                    {isTrouble ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={
                          isActive
                            ? "text-amber-400"
                            : "text-zinc-600 group-hover:text-amber-400"
                        }
                      >
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                        <path d="M12 9v4" />
                        <path d="M12 17h.01" />
                      </svg>
                    ) : (
                      <span className="w-[14px] text-center">
                        {isActive ? ">" : ""}
                      </span>
                    )}

                    {/* 긴 라벨 튀어나오는 것 방지 */}
                    <span className="truncate">{it.label}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 2. Source Links */}
      <div>
        <div className="mb-3 font-mono text-xs font-bold tracking-wider text-zinc-500 uppercase">
          // Source
        </div>

        <div className="flex flex-col gap-2 pl-4 border-l border-zinc-800">
          {project.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 text-xs font-mono text-zinc-500 transition-colors hover:text-white group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3 text-zinc-600 group-hover:text-blue-400"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              <span className="truncate">{l.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
