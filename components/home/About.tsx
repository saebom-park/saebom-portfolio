import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-32 border-t border-dashed border-zinc-800"
    >
      <Container>
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          {/* LEFT: Intro */}
          <div className="md:sticky md:top-24">
            <SectionHeader title="ABOUT ME" subtitle="Legacy to Modern" />
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p>
                <strong className="text-white">I start from data flow.</strong>
                <br />
                기능 구현보다 먼저, 데이터가 생성되고 저장되며 변경되는 흐름을
                정리합니다. 테이블 구조, 도메인 경계, 트랜잭션 단위를 기준으로
                변경 시 영향을 받는 범위를 먼저 확인합니다.
              </p>

              <p>
                <strong className="text-white">
                  Experience across environments.
                </strong>
                <br />
                의료 환경에서는 보안과 안정성을, 교육 서비스 환경에서는 빠른 변경과
                운영 효율을 요구받으며 서로 다른 조건의 시스템을 운영·개선해왔습니다.
                두 환경 모두에서 구조가 명확할수록 운영과 변경이 수월해진다는 것을
                경험했습니다.
              </p>
            </div>
          </div>

          {/* RIGHT: Timeline */}
          <div className="relative border-l border-zinc-800 pl-8 space-y-12">
            {/* Timeline Item 1 */}
            <div className="relative group">
              <span className="absolute -left-[41px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 border border-zinc-700 group-hover:border-blue-500 transition-colors">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 group-hover:bg-blue-500 transition-colors" />
              </span>

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">대아정보시스템(주)</h3>
                <span className="font-mono text-xs text-zinc-500">
                  2020.10 - 2023.03
                </span>
              </div>

              <div className="text-zinc-500 text-sm font-mono mb-4">
                System Developer
              </div>

              <p className="text-zinc-400 leading-relaxed text-sm">
                의료 데이터 환경에서 ISMS 관련 점검·감사 대응 업무를 수행했습니다.
                <br />
                접근 제어, 권한 관리, 로그/이력 관리 같은 보안 요구사항을 기준으로
                그룹웨어 및 예약 시스템 운영과 유지보수를 담당했습니다.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative group">
              <span className="absolute -left-[41px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 border border-zinc-700 group-hover:border-blue-500 transition-colors">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 group-hover:bg-blue-500 transition-colors" />
              </span>

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">메가스터디교육(주)</h3>
                <span className="font-mono text-xs text-zinc-500">
                  2023.06 - 2025.10
                </span>
              </div>

              <div className="text-zinc-500 text-sm font-mono mb-4">
                Backend Developer
              </div>

              <p className="text-zinc-400 leading-relaxed text-sm">
                교육 서비스 백엔드와 어드민 시스템 개발을 담당했습니다.
                <br />
                설명회, 콘텐츠, 이벤트, 신규 서비스 등 다양한 서비스의 오픈과 운영에 참여하며 데이터 구조
                개선과 운영 자동화를 함께 진행했습니다. 하드코딩에 의존하던 구조를 DB 기반
                설정으로 전환해 변경 대응과 운영 관리 부담을 줄였습니다.
              </p>
            </div>

            {/* Timeline Item 3 (Current) */}
            <div className="relative">
              <span className="absolute -left-[41px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-blue-900/30 border border-blue-500">
                <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              </span>

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-blue-400">
                  Spring Boot Transition
                </h3>
                <span className="font-mono text-xs text-blue-400">
                  CURRENT FOCUS
                </span>
              </div>

              <div className="text-zinc-500 text-sm font-mono mb-4">
                Applying Production Experience
              </div>

              <p className="text-zinc-300 leading-relaxed text-sm bg-zinc-900/50 p-4 border border-zinc-800 rounded-lg">
                ASP.NET 기반 레거시 시스템을 운영하며 반복적으로 마주쳤던 문제들을 정리하고,
                현재는 Java / Spring Boot 환경에서 같은 기준으로 다시 구현해보고 있습니다.
                <br />
                단순한 기술 학습이 아니라, 테스트 단위, 책임 분리, 트랜잭션 경계를 기준으로
                기존 구조를 어떻게 옮기고 개선할 수 있는지를 검증하는 과정입니다.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
