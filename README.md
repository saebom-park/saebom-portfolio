# saebom-portfolio

> Backend-focused portfolio showcasing production-minded projects, architectural decisions, and troubleshooting logs.

이 저장소는 기능 나열형 포트폴리오가 아니라,  
**운영 환경을 가정한 백엔드 설계 판단과 문제 해결 과정**을 중심으로 정리한 포트폴리오입니다.

---

## What this portfolio focuses on

- 단순 CRUD 구현이 아닌 **운영 시나리오를 기준으로 설계**
- 인증 / 권한 / 트랜잭션 / 상태 전이 등 **구조적 판단을 명시**
- 실제 개발 중 발생한 문제를 **원인–해결–예방 관점으로 기록**
- 기술 선택보다 **설계 의사결정의 근거를 설명**

---

## Projects

### 1. Bulletin Board (운영형 게시판 서비스)

**Stack**
- Spring Boot
- MyBatis
- MySQL
- Thymeleaf
- Spring Security

**Key Topics**
- 세션 기반 인증 → Spring Security 단계적 전환
- Owner / Admin 권한 정책 분리
- Controller–Service–Mapper 책임 고정
- 인증 전환 과정에서 발생한 사용자 식별 문제 해결
- 실사용 시나리오 기반 트러블슈팅 정리

→ 상세 페이지에서는  
Project Context / Design Principles / Troubleshooting / Notes를 통해  
설계 기준과 문제 해결 과정을 확인할 수 있습니다.

---

### 2. Keeb Station (전자상거래 도메인 설계 실습)

**Status**
- 현재 진행 중 (Active)

**Focus**
- 주문 / 결제 / 재고 도메인 설계
- 상태 전이 기반 비즈니스 로직
- 트랜잭션 경계 설정
- 동시성 이슈 대비 (Optimistic Lock)

→ 설계 노트 및 트러블슈팅은 정리 중이며,  
완료된 범위까지 공개합니다.

---

## Documentation & Notes

이 포트폴리오는 코드 외에도 다음 문서들을 함께 제공합니다.

- **Concept Notes**
  - 설계 기준
  - 핵심 개념 정리
  - 기술 선택 근거

- **Troubleshooting Logs**
  - 실제 발생한 문제
  - 원인 분석
  - 해결 방식
  - 재발 방지 기준

각 프로젝트 상세 페이지에서 관련 문서로 연결됩니다.

---

## About

저는 특정 언어나 프레임워크에 의존하기보다,  
**문제를 구조화하고 시스템의 흐름을 설계하는 데** 개발의 중심을 둡니다.

실무에서 발생하는 혼란의 대부분은  
기술 부족이 아니라 **책임 경계와 판단 기준의 부재**에서 시작된다고 믿고 있으며,  
이 포트폴리오는 그 기준을 실제 프로젝트에 적용하며 검증해온 기록입니다.

---

## Links

- Portfolio Site: https://saebom-portfolio.vercel.app
- GitHub: https://github.com/saebom-park
- Resume: https://raw.githubusercontent.com/saebom-park/saebom-portfolio/main/public/saebom-park-backend.pdf


---

> This repository is actively maintained.
