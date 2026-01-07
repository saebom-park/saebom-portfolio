import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Project } from "./types";


type Paragraph = {
  text: React.ReactNode;
};

export default function ProjectDetailContext({ project }: { project: Project }) {
  const isBulletin = project.slug === "bulletin-board";
  const isKeeb = project.slug === "keeb-station";

  const paragraphs: Paragraph[] = isBulletin
    ? [
        {
          text: (
            <>
              이 프로젝트는 게시판 기능 구현 자체보다,
              <span className="text-white">
                {" "}
                운영 환경에서 발생하는 인증·권한·구조 전환 문제를 직접 겪고 해결 방식
              </span>
              을 검증하기 위해 설계되었습니다.
            </>
          ),
        },
        {
          text: (
            <>
              초기에는 세션 기반 인증과 인터셉터 구조로 구현을 시작했고, 이후 서비스 확장을
              가정해 Spring Security 기반 인증 구조로 단계적 전환을 진행했습니다.
            </>
          ),
        },
        {
          text: (
            <>
              전환 과정에서 발생한 사용자 식별 붕괴, 권한 판단 위치 혼란, 세션 의존 로직 제거
              문제를 단순 수정이 아닌
              <span className="text-white"> 구조 재정립 관점</span>에서 해결하는 데 집중했습니다.
            </>
          ),
        },
        {
          text: (
            <>
              이 페이지는 기능 목록이 아니라, 프로젝트를 운영 관점에서 구현하며
              <span className="text-white"> 고정한 설계 기준과 대표적인 문제 해결 사례</span>만을
              선별해 요약합니다.
            </>
          ),
        },
      ]
    : isKeeb
      ? [
          {
            text: (
              <>
                이 프로젝트는 “커머스 기능 만들기”보다,
                <span className="text-white"> 주문–결제–재고 흐름을 도메인 기준으로 설계</span>하고
                운영 시나리오에서 깨지지 않는 구조를 검증하기 위해 시작했습니다.
              </>
            ),
          },
          {
            text: (
              <>
                특히 옵션 단위(ProductOption) 판매를 전제로{" "}
                <span className="text-white">재고(Stock)의 정합성</span>이 어떻게 보장되어야 하는지,
                트랜잭션 경계와 상태 전이를 먼저 확정한 뒤 기능을 붙이는 방식으로 진행했습니다.
              </>
            ),
          },
          {
            text: (
              <>
                동시 주문 같은 현실 조건에서는 충돌이 발생할 수밖에 없기 때문에,
                <span className="text-white"> @Version 기반 Optimistic Lock</span>과 예외 처리(409)를
                “장애”가 아니라 “정책”으로 다루는 기준을 고정했습니다.
              </>
            ),
          },
          {
            text: (
              <>
                이 페이지는 기능 설명보다, 개발 과정에서 내려진
                <span className="text-white"> 핵심 결정(Decisions)과 인시던트 로그(Incident Log)</span>
                를 중심으로 설계 의도를 기록합니다.
              </>
            ),
          },
        ]
      : [
          // fallback (다른 프로젝트용 기본 텍스트)
          {
            text: (
              <>
                이 페이지는 기능 나열이 아니라, 운영 관점에서 프로젝트를 구현하며 고정한 기준과
                대표 문제 해결을 요약합니다.
              </>
            ),
          },
          {
            text: (
              <>
                아래 섹션은 <span className="text-white">설계 기준</span>과{" "}
                <span className="text-white">대표 트러블슈팅</span>만 선별해 보여줍니다.
              </>
            ),
          },
        ];

  return (
    <section className="py-24">
      <Container>
        <SectionHeader title="PROJECT CONTEXT" subtitle="Why this project exists" />

        <div className="max-w-3xl text-zinc-400 leading-relaxed space-y-4">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p.text}</p>
          ))}
        </div>

        {/* 요약 bullet 재활용 */}
        <ul className="mt-10 max-w-3xl space-y-3">
          {project.summaryBullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
              <span className="font-mono text-green-500/70 mt-0.5">+</span>
              <span className="text-zinc-300">{b}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
