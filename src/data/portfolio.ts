export const profile = {
  name: "김소윤",
  nameEn: "Soyoon Kim",
  title: "Fullstack Developer",
  bio: "컴퓨터공학을 전공한 4년차 풀스택 개발자입니다. 사용자 경험을 고려한 프론트엔드와 안정적인 백엔드 설계를 함께 추구합니다.",
  about:
    "대학에서 컴퓨터공학을 전공하며 소프트웨어 개발의 기초를 다졌습니다. 졸업 후 프론트엔드와 백엔드를 아우르는 풀스택 개발자로 성장해왔으며, 복잡한 비즈니스 로직을 깔끔한 코드로 풀어내는 것을 좋아합니다. 새로운 기술을 배우고 적용하는 데 적극적이며, 팀원들과의 협업을 통해 더 나은 결과물을 만들어내는 것을 중요하게 생각합니다.",
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Spring Boot", "Java", "REST API"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "Docker", "AWS", "Vercel", "Figma"],
  },
];

export const experiences = [
  {
    company: "테크스타트업",
    role: "Fullstack Developer",
    period: "2024.01 - 현재",
    description:
      "SaaS 플랫폼의 프론트엔드·백엔드 개발을 담당하고 있습니다. React와 Spring Boot 기반의 서비스를 개발하며, 성능 최적화와 사용자 경험 개선에 집중하고 있습니다.",
    highlights: [
      "대시보드 페이지 로딩 속도 40% 개선",
      "결제 시스템 연동 및 구독 관리 기능 구현",
      "CI/CD 파이프라인 구축으로 배포 자동화",
    ],
  },
  {
    company: "웹에이전시",
    role: "Frontend Developer",
    period: "2022.03 - 2023.12",
    description:
      "다양한 클라이언트 프로젝트의 프론트엔드 개발을 담당했습니다. React와 Next.js를 활용한 웹 애플리케이션 개발 경험을 쌓았습니다.",
    highlights: [
      "10개 이상의 클라이언트 프로젝트 성공적 런칭",
      "공통 컴포넌트 라이브러리 구축으로 개발 생산성 30% 향상",
      "웹 접근성(WCAG 2.1) 가이드라인 준수",
    ],
  },
];

export const projects = [
  {
    title: "TaskFlow",
    description:
      "팀 협업을 위한 프로젝트 관리 도구. 칸반 보드, 실시간 채팅, 일정 관리 기능을 제공합니다.",
    techStack: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL", "WebSocket"],
    github: "https://github.com",
    demo: "https://example.com",
    image: null,
  },
  {
    title: "DevLog",
    description:
      "마크다운 기반의 개발 블로그 플랫폼. SSR과 SEO 최적화를 적용했습니다.",
    techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com",
    image: null,
  },
  {
    title: "EcoTracker",
    description:
      "개인 탄소 발자국을 추적하고 줄이기 위한 모바일 웹 앱. 시각적 대시보드로 데이터를 제공합니다.",
    techStack: ["React", "Express", "MySQL", "Chart.js", "Docker"],
    github: "https://github.com",
    demo: null,
    image: null,
  },
  {
    title: "OpenAPI Hub",
    description:
      "공공 데이터 API를 쉽게 탐색하고 테스트할 수 있는 개발자 도구입니다.",
    techStack: ["React", "TypeScript", "Node.js", "Redis"],
    github: "https://github.com",
    demo: "https://example.com",
    image: null,
  },
];

export const contacts = {
  email: "soyoon.dev@example.com",
  github: "https://github.com/soyoonkim",
  linkedin: "https://linkedin.com/in/soyoonkim",
  blog: "https://blog.example.com",
};
