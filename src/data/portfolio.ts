export const profile = {
  name: "김소윤",
  nameEn: "Kim SoYun",
  title: "Fullstack Developer",
  bio: "컴퓨터정보공학을 전공한 5년차 풀스택 개발자입니다. 사용자 경험을 고려한 프론트엔드와 안정적인 백엔드 설계를 함께 추구합니다.",
  about:
    "군산대학교에서 컴퓨터정보공학을 전공하며 소프트웨어 개발의 기초를 다졌습니다. 졸업 후 플랫폼 개발과 소프트웨어 개발을 아우르는 풀스택 개발자로 성장해왔으며, 삼성 청년 SW 아카데미(SSAFY)를 수료하며 실무 역량을 강화했습니다. 새로운 기술을 배우고 적용하는 데 적극적이며, 팀원들과의 협업을 통해 더 나은 결과물을 만들어내는 것을 중요하게 생각합니다.",
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
      "Vercel",
    ],
  },
];

export const experiences = [
  {
    company: "에임시스템",
    role: "소프트웨어 개발",
    position: "선임",
    period: "2023.09 - 현재",
    description:
      "소프트웨어 개발 업무를 담당하고 있습니다.",
    highlights: [],
  },
  {
    company: "삼성 청년 SW 아카데미 (SSAFY)",
    role: "교육생",
    position: "",
    period: "2022.07 - 2023.06",
    description:
      "삼성전자 주관 소프트웨어 집중 교육 과정(총 1,600시간)을 수료했습니다.",
    highlights: [
      "공통 프로젝트 우수상 수상 (삼성전자주식회사)",
    ],
  },
  {
    company: "(주)올리고컴퍼니",
    role: "플랫폼 개발",
    position: "사원",
    period: "2020.12 - 2022.05",
    description:
      "플랫폼 개발 업무를 담당했습니다.",
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
  {
    title: "Oreuda",
    description:
      "GitHub 활동을 기반으로 성장 식물을 키우며, 리포지토리를 폴더별로 관리하고 프로필 README를 GUI로 생성할 수 있는 개발자 성장 플랫폼. Chrome 확장프로그램도 지원합니다.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Spring Boot",
      "Spring Cloud",
      "MySQL",
      "Redis",
      "Jenkins",
      "Docker",
    ],
    period: "2023.04 - 2023.05",
    team: 6,
    github: "https://github.com/misso88/oreuda",
    demo: "https://oreuda.kr",
    image: null,
  },
  {
    title: "싸리질러",
    description:
      "WebRTC(OpenVidu)를 활용한 온라인 화상 노래방 서비스. 일반 모드, 가사 맞추기, 퍼펙트 스코어(푸리에 변환 음정 분석) 등 3가지 모드를 제공하며, SSE 기반 실시간 알림과 소셜 로그인을 지원합니다. SSAFY 공통 프로젝트 우수상 수상.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Spring Boot",
      "MySQL",
      "Redis",
      "Docker",
      "Jenkins",
      "Kubernetes",
    ],
    period: "2023.01 - 2023.02",
    team: 6,
    github: "https://github.com/misso88/ssarijileo",
    demo: null,
    image: null,
  },
  {
    title: "HaruPalette",
    description:
      "AI 기반 음성 다이어리 서비스. OpenAI Whisper로 음성을 텍스트로 변환하고, RoBERTa 모델로 다중 감정을 분석하여 캐릭터가 응답합니다. Three.js를 활용한 인터랙티브 UI와 위치 기반 날씨 연동을 제공합니다.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Three.js",
      "Spring Boot",
      "Python",
      "MySQL",
      "Redis",
      "Jenkins",
      "Docker",
    ],
    period: "2023.02 - 2023.04",
    team: 6,
    github: "https://github.com/misso88/harupalette",
    demo: null,
    image: null,
  },
];

export const contacts = {
  email: "soyun9812@gmail.com",
  github: "https://github.com/soyoonkim",
  phone: "010-3107-5571",
};
