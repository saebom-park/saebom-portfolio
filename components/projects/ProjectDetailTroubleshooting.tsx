import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Project } from "./ProjectDetailPage";

type Case = {
  title: string;
  cause: string;
  fix: string;
  prevent: string;
  tags?: string[];
};

const cases: Case[] = [
  {
    title: "AJAX 중복체크가 JSON 파싱 에러로 터지던 문제 (Unexpected token '<')",
    cause: "API가 Security에 의해 차단되면서 JSON 대신 /login HTML이 내려왔고, 프론트에서 response.json()을 시도하며 파싱이 실패함",
    fix: "SecurityConfig에서 중복체크/회원가입/로그인 관련 경로를 permitAll로 명시해 API 응답 타입을 보장",
    prevent: "AJAX 엔드포인트는 '인증 예외 경로'를 먼저 확정하고, 파싱 에러에 '<'가 보이면 HTML 응답부터 의심",
    tags: ["Spring Security", "AJAX", "permitAll"],
  },
  {
    title: "Security 전환 후 로그인한 것 같은데 '로그인 안 된 것처럼' 보이던 문제",
    cause: "세션 기반 조회와 SecurityContext 기반 조회가 혼용되면서 사용자 식별이 일관되지 않음",
    fix: "세션 의존 유틸 제거 후 CurrentUser/CurrentUserId로 사용자 식별을 단일화",
    prevent: "인증 전환에서 가장 위험한 구간은 '혼용'이라, 식별 경로를 1곳으로 고정하고 전 계층에서 통일",
    tags: ["Auth Migration", "SecurityContext", "CurrentUser"],
  },
  {
    title: "로그인 후 원래 페이지로 복귀가 깨지던 문제 (returnUrl)",
    cause: "Interceptor가 복귀 URL을 생성했지만 login.html hidden 전달이 누락되어 POST /login에서 유실됨",
    fix: "복귀 흐름을 3단계(생성→전달→적용)로 정리하고, POST는 hidden input을 싱글 소스로 사용",
    prevent: "복귀 URL은 상태값이 아니라 보안 이슈(오픈 리다이렉트)라 공통 유틸/검증으로 강제",
    tags: ["Interceptor", "Redirect", "Security"],
  },
  {
    title: "MyBatis constructor 매핑에서 Enum 변환이 실패하던 문제",
    cause: "<constructor> 매핑은 엄격한데 Enum 변환 규칙(TypeHandler)이 지정되지 않아 매핑 단계에서 실패",
    fix: "DB 값 규격은 유지하고(Role=ROLE_*), DTO/Service/View는 Enum을 끝까지 유지 + TypeHandler로 변환 책임을 단일화",
    prevent: "중간에 String으로 타협하면 타입 책임이 분산되어 더 큰 오류(ClassCastException)로 돌아옴",
    tags: ["MyBatis", "TypeHandler", "Enum"],
  },
  {
    title: "비밀번호 변경에서 검증 실패인데 DB update가 먼저 실행되던 버그",
    cause: "검증(validate)과 저장(update)을 한 POST에서 처리하면서 실행 순서/원자성 문제가 발생",
    fix: "2단계 화면(현재 비밀번호 검증 → 새 비밀번호 저장)으로 분리해 '검증 성공 이후에만 변경'을 보장",
    prevent: "중요 상태 변경은 '한 요청에서 검증+저장'을 피하고, 단계 분리로 정책을 구조로 고정",
    tags: ["Transaction", "Validation", "Flow Design"],
  },
];

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded border border-zinc-700/70 bg-zinc-900/40 px-2 py-0.5 text-[11px] font-mono text-zinc-400">
      {children}
    </span>
  );
}

export default function ProjectDetailTroubleshooting() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeader title="TROUBLESHOOTING" subtitle="Selected real-world cases" />

        <div className="mt-10 space-y-6 max-w-4xl">
          {cases.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6 backdrop-blur"
            >
              {/* header */}
              <div className="flex items-start justify-between gap-6">
                <h4 className="text-base md:text-lg font-semibold text-white leading-snug">
                  {c.title}
                </h4>

                {c.tags?.length ? (
                  <div className="hidden sm:flex flex-wrap gap-2 justify-end">
                    {c.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* CAUSE / FIX / PREVENT */}
              <div className="mt-4 grid gap-2 text-xs md:text-sm font-mono leading-relaxed">
                <div className="text-zinc-500">
                  <span className="text-red-400/80">CAUSE</span>
                  <span className="text-zinc-700"> — </span>
                  {c.cause}
                </div>

                <div className="text-zinc-500">
                  <span className="text-emerald-400/80">FIX</span>
                  <span className="text-zinc-700"> — </span>
                  {c.fix}
                </div>

                <div className="text-zinc-500">
                  <span className="text-blue-400/80">PREVENT</span>
                  <span className="text-zinc-700"> — </span>
                  {c.prevent}
                </div>
              </div>

              {/* tiny footer line (developer vibe) */}
              <div className="mt-5 border-t border-zinc-800/70 pt-3 text-[11px] font-mono text-zinc-600">
                $ postmortem --format cause,fix,prevent
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
