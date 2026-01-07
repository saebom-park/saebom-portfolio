// lib/portfolio-data.ts

export type Slide = {
  src: string;
  alt: string;
  caption?: string;
  clickable?: boolean;
};

export type Project = {
  slug: "keeb-station" | "bulletin-board";
  name: string;
  badge?: "IN PROGRESS";
  tagline: string;
  summaryBullets: string[];
  stack: string[];
  links: { label: "Repo" | "README"; href: string }[];
  slides: Slide[];
};

export const PROJECTS: Project[] = [
  {
    slug: "bulletin-board",
    name: "bulletin-board",
    tagline: "회원 · 게시글 · 댓글 도메인을 중심으로 구성한 운영형 게시판 서비스",
    summaryBullets: [
      "유스케이스 단위 책임 분리를 기준으로 Controller–Service–Mapper 구조 설계",
      "세션 기반 인증 흐름을 먼저 검증한 뒤 Spring Security 전환 흐름 비교",
      "작성자(Owner)와 관리자(Admin) 권한을 분리해 정책을 코드로 고정",
    ],
    stack: ["Java 17", "Spring Boot", "MyBatis", "MySQL", "Thymeleaf", "Spring Security"],
    links: [
      { label: "Repo", href: "https://github.com/saebom-park/bulletin-board" },
      { label: "README", href: "https://github.com/saebom-park/bulletin-board#readme" },
    ],
    slides: [
      {
        src: "/shots/board-01.gif",
        alt: "관리 기능",
        caption: "관리자 권한 기반 게시글 / 회원 관리",
      },
      {
        src: "/shots/board-02.png",
        alt: "내 정보",
        caption: "마이 페이지",
        clickable: true,
      },
      {
        src: "/shots/board-03.png",
        alt: "상세/댓글",
        caption: "상세 페이지 / 댓글",
        clickable: true,
      },
    ],
  },
  {
    slug: "keeb-station",
    name: "keeb-station",
    badge: "IN PROGRESS",
    tagline: "주문–결제–재고 흐름을 도메인 기준으로 설계한 커머스 백엔드",
    summaryBullets: [
      "주문–주문상품–재고 관계를 기준으로 도메인 모델과 저장 구조 설계",
      "서비스 단위 트랜잭션 경계를 정의해 결제/재고 상태 전이를 예측 가능하게 설계",
      "동시 주문 시 재고 정합성 확보: @Version 기반 Optimistic Lock + 충돌 처리 전략 적용",
    ],
    stack: ["Java 17", "Spring Boot", "JPA", "MySQL", "AWS EC2", "Nginx", "GitHub Actions"],
    links: [
      { label: "Repo", href: "https://github.com/saebom-park/keeb-station" },
      { label: "README", href: "https://github.com/saebom-park/keeb-station#readme" },
    ],
    slides: [],
  },
];

export const DOCS = {
  name: "spring-dev-journey",
  tagline: "학습/실습 과정을 문서로 정리한 레포지토리 (개념/질문/트러블슈팅 기록)",
  links: [
    { label: "spring-dev-journey" as const, href: "https://github.com/saebom-park/spring-dev-journey#readme" },
    { label: "curriculum" as const, href: "https://www.notion.so/2e1d84f8cc0c80609a59cbf1a5acc442" },
    { label: "lecture-notes" as const, href: "https://www.notion.so/2e1d84f8cc0c80559143d64c5323417b" },
  ],
  bullets: [
    "학습 내용을 문서화해 재현 가능한 형태로 정리",
    "트러블슈팅은 원인–해결–재발 방지 기준으로 기록",
    "프로젝트 결정/설계 기준을 README로 남기는 습관 유지",
  ],
};

export const SKILLS: Record<string, string[]> = {
  Backend: ["Java 17", "Spring Boot", "Spring MVC", "Spring Security"],
  Data: ["JPA/Hibernate", "MyBatis", "MySQL", "MSSQL/Oracle"],
  Infra: ["AWS EC2", "Nginx", "GitHub Actions", "Linux"],
  Front: ["Thymeleaf", "Vue"],
  Tooling: ["Git", "Gradle", "IntelliJ", "Postman/Swagger"],
};
