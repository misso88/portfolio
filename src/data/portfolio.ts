export const profile = {
  name: "김소윤",
  nameEn: "Kim SoYun",
  title: "Fullstack Developer",
  bio: "컴퓨터정보공학을 전공한 4년차 풀스택 개발자입니다. 사용자 경험을 고려한 프론트엔드와 안정적인 백엔드 설계를 함께 추구합니다.",
  about:
    "컴퓨터정보공학을 전공하며 소프트웨어 개발의 기초를 다졌습니다. 졸업 후 플랫폼 개발과 소프트웨어 개발을 아우르는 풀스택 개발자로 성장해왔으며, 삼성청년SW아카데미(SSAFY)를 수료하며 실무 역량을 강화했습니다. 새로운 기술을 배우고 적용하는 데 적극적이며, 팀원들과의 협업을 통해 더 나은 결과물을 만들어내는 것을 중요하게 생각합니다.",
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "TypeScript", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["MySQL", "MSSQL", "Redis"],
  },
  {
    category: "DevOps & Tools",
    items: [
      "Git",
      "Jira",
      "Confluence",
      "AWS (EC2, S3, CloudFront)",
    ],
  },
];

export const experiences = [
  {
    company: "에임시스템(주)",
    role: "웹 개발",
    position: "선임",
    period: "2023.09 - 현재",
    description:
      "웹 개발 업무를 담당하고 있습니다.",
    highlights: [],
  },
  {
    company: "삼성 청년 SW 아카데미 (SSAFY)",
    role: "교육생",
    position: "",
    period: "2022.07 - 2023.06",
    description:
      "삼성전자 주관 소프트웨어 집중 교육 과정을 우수 등급(상위 30%內)으로 수료했습니다.",
    highlights: [
      "공통 프로젝트 우수상 수상 (삼성전자주식회사)",
    ],
  },
  {
    company: "(주)올리고컴퍼니",
    role: "모바일 개발",
    position: "사원",
    period: "2020.12 - 2022.05",
    description:
      "모바일 개발 업무를 담당했습니다.",
    highlights: [],
  },
];

export const education = [
  {
    school: "군산대학교",
    major: "컴퓨터정보공학",
    period: "2017.03 - 2021.02",
    gpa: "4.03 / 4.5",
  },
];

export const certifications = [
  {
    name: "SQLD",
    date: "2022.12",
    issuer: "한국데이터베이스진흥원",
  },
  {
    name: "정보처리기사",
    date: "2020.08",
    issuer: "한국산업인력공단",
  },
];

export const awards = [
  {
    title: "공통 프로젝트 우수상",
    date: "2023.02",
    issuer: "삼성전자주식회사",
  },
];

export const projects = [
  // --- 에임시스템 (최신순) ---
  {
    title: "LDCS (Local Departure Control System)",
    description:
      "DCS(출발 관리 시스템) 장애 시 대체 운영을 위한 로컬 DCS. 설계 및 프론트엔드 개발을 담당했습니다.",
    techStack: ["React", "TypeScript", "MSSQL"],
    period: null,
    team: null,
    role: "프론트엔드",
    company: "에임시스템",
    github: null,
    demo: null,
    image: null,
  },
  {
    title: "공용여객처리시스템 모니터링",
    description:
      "KAC 공용여객처리시스템의 카운터 및 장비 오류를 실시간으로 모니터링하는 서비스. 설계부터 배포까지 전체를 단독 개발했습니다.",
    techStack: ["Vue.js", "Spring Boot", "MSSQL"],
    period: null,
    team: null,
    role: "풀스택 (단독 개발)",
    company: "에임시스템",
    github: null,
    demo: null,
    image: null,
  },
  {
    title: "셀프백드랍",
    description:
      "승객이 직접 수하물 위탁을 처리하는 시스템. 프론트엔드 개발을 담당했습니다.",
    techStack: ["React"],
    period: null,
    team: 2,
    role: "프론트엔드",
    company: "에임시스템",
    github: null,
    demo: null,
    image: null,
  },
  {
    title: "셀프체크인",
    description:
      "공항 키오스크 기반 셀프체크인 시스템의 유지보수를 담당하고 있습니다.",
    techStack: ["Spring Boot", "Java Swing", "MSSQL"],
    period: null,
    team: null,
    role: "유지보수",
    company: "에임시스템",
    github: null,
    demo: null,
    image: null,
  },
  // --- SSAFY 프로젝트 (최신순) ---
  {
    title: "Oreuda",
    description:
      "GitHub 활동을 기반으로 성장 식물을 키우며, 레포지토리를 폴더별로 관리하고 프로필 README를 GUI로 생성할 수 있는 개발자 성장 플랫폼. GraphQL을 활용한 GitHub 연동 및 데이터 전처리, 레포지토리 도메인 백엔드를 담당했습니다.",
    techStack: [
      "Spring Boot",
      "Spring Cloud",
      "GraphQL",
      "MySQL",
      "Redis",
      "Next.js",
      "TypeScript",
      "Jenkins",
      "Docker",
    ],
    period: "2023.04 - 2023.05",
    team: 6,
    role: "백엔드",
    company: null,
    github: "https://github.com/misso88/oreuda",
    demo: "https://oreuda.kr",
    image: null,
  },
  {
    title: "HaruPalette",
    description:
      "AI 기반 음성 다이어리 서비스. OpenAI Whisper로 음성을 텍스트로 변환하고, RoBERTa 모델로 다중 감정을 분석하여 캐릭터가 응답합니다. Three.js를 활용한 인터랙티브 UI와 위치 기반 날씨 연동을 제공합니다. Jenkins 기반 CI/CD 파이프라인 구축을 담당했습니다.",
    techStack: [
      "Spring Boot",
      "MySQL",
      "Redis",
      "Jenkins",
      "Docker",
      "Next.js",
      "TypeScript",
      "Three.js",
      "Python",
    ],
    period: "2023.02 - 2023.04",
    team: 6,
    role: "CI/CD",
    company: null,
    github: "https://github.com/misso88/harupalette",
    demo: null,
    image: null,
  },
  {
    title: "싸리질러",
    description:
      "WebRTC를 활용한 온라인 화상 노래방 서비스. 일반 모드, 가사 맞추기, 퍼펙트 스코어(푸리에 변환 음정 분석) 등 3가지 모드를 제공하며, SSE 기반 실시간 알림과 소셜 로그인을 지원합니다. 백엔드 리드를 맡아 전체 비즈니스 로직 설계 및 Redis를 활용한 캐싱 처리를 담당했습니다. SSAFY 공통 프로젝트 우수상 수상.",
    techStack: [
      "Spring Boot",
      "Redis",
      "MySQL",
      "Docker",
      "Jenkins",
      "Kubernetes",
      "Next.js",
      "TypeScript",
    ],
    period: "2023.01 - 2023.02",
    team: 6,
    role: "백엔드",
    company: null,
    github: "https://github.com/misso88/ssarijileo",
    demo: null,
    image: null,
  },
  // --- 올리고컴퍼니 (최신순) ---
  {
    title: "Doctor J.J",
    description:
      "의료 상담 예약 서비스(현 K-Cure). 크로스 플랫폼을 활용하여 모바일 개발을 담당했습니다.",
    techStack: [
      "Dart",
      "Flutter",
    ],
    period: null,
    team: 2,
    role: "모바일",
    company: "올리고컴퍼니",
    github: null,
    demo: null,
    image: null,
  },
];

export const contacts = {
  email: "soyun9812@gmail.com",
  github: "https://github.com/misso88",
  phone: "010-3107-5571",
};
