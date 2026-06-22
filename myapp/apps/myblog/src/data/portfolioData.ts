export const data = [
  {
    id: 1,
    tag: "카카오페이",
    image:
      "https://res.cloudinary.com/dkvn4lmev/image/upload/v1782114458/Gemini_Generated_Image_knzq8cknzq8cknzq_ec4smj.png",
    title: "카카오페이 보험 비교 서비스",
    date: "2023.11 ~ 2024. 07",
    summary:
      "사용자가 설정한 조건에 따라 제휴 보험사의 보험료를 한눈에 비교하고 가입할 수 있는 신규 서비스",
    desc: `사용자가 설정한 조건에 따라 제휴 보험사의 보험료를 한눈에 비교하고 가입할 수 있는 신규 서비스입니다. \n가입 건당 수수료 매출을 발생시켜 보험 매출 증대에 기여했습니다.`,
    role: [
      "- SCSS @mixin, @include를 활용하여 반응형 스타일 가이드를 구축하고 미디어 쿼리 관리 일관성 확보",
      "- 서비스 주요 화면의 UI를 디자인 시스템 기반으로 공통 컴포넌트를 구현하고, 디자인 시스템에서 제공하지 않는 UI의 경우 직접 설계 및 적용했습니다.",
    ],
    skill: ["React", "TypeScript", "scss (css module)", "Storybook"],

    images: [
      "https://res.cloudinary.com/dkvn4lmev/image/upload/v1782117731/%E1%84%8C%E1%85%A1%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8E%E1%85%A11_kwzdov.png",
      "https://res.cloudinary.com/dkvn4lmev/image/upload/v1782117732/%E1%84%8C%E1%85%A1%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8E%E1%85%A12_lx43x6.png",
    ],
  },
  {
    id: 2,
    tag: "개인 프로젝트",
    title: "UI 디자인 시스템 라이브러리",
    summary: "디자인시스템 라이브러리 구축",
    image:
      "https://res.cloudinary.com/dkvn4lmev/image/upload/v1782118669/Gemini_Generated_Image_nk2jzwnk2jzwnk2j_vv475x.png",
    date: "",
    desc: "모노레포(Monorepo) 구조를 기반으로 UI 컴포넌트 라이브러리를 구축했습니다. ",
    role: [
      "컬러/ 타이포 그래피의 디자인 토큰을 CSS 변수로  변화하는 함수를 런타임에 주입하여 어떤 컴포넌트에서도 변수로 연결 될 수 있도록 구현.",
      "Apple HIG, Material Design, Viva Republica TDS Mobile 문서,  KRDS 등 UI/UX 가이드 등을 참고하여 컴포넌트의 역할과 의미를 명확히 정의",
      "토큰(@repo/tokens)과 UI(@repo/ui)를 분리하여 일관성과 확장성을 고려한 구조 설계",
      "React, TypeScript 기반으로 핵심 컴포넌트 구현 및 Emotion을 활용한 스타일링",
      " 컴포넌트 합성 패턴을 기반으로 props 중심의 확장 방식 대신, 역할 단위로 분리된 컴포넌트를 조합하는 구조로 설계",
      "`value`, `defaultValue`, `onChange`를 지원하는 컨트롤드/언컨트롤드 패턴을 적용",
      " `Storybook`  배포를 통해 컴포넌트의 역할, 사용법 예시 코드 시각화",
      "  컴포넌트에서 제공하는 인터페이스에 대한 정보 제공",
      " pnpm workspace 기반 모노레포 구성",
      "Rollup을 활용해 UI 라이브러리 번들링 및 배포 환경 구성하여 ESM/CJS 지원과 트리 셰이킹 최적화",
    ],
    skill: ["React", "TypeScript", "Emotion"],
    buttonLabel: "디자인시스템 보러가기",
    link: "https://celinejoo.github.io/monorepo/",
  },
  {
    id: 3,
    tag: "개인 프로젝트",
    title: "개발 블로그 개설 및 운영",
    summary: "개인 블로그 서비스 기획 및 구축",
    desc: `Firebase를 기반으로 한 개인 블로그 서비스를 기획·구축했습니다. \n 학습 내용한 내용을 정리하고 적용하여 구축하고자 했습니다. `,
    image:
      "https://res.cloudinary.com/dkvn4lmev/image/upload/v1782118869/Gemini_Generated_Image_w3tt49w3tt49w3tt_kzqfxb.png",
    role: [
      "- Firebase Hosting, Firestore, Authentication을 활용해 블로그 글 작성, 수정, 삭제, 목록 기능 구현 ",
      "- Firestore 데이터 비동기 요청을 TanStack Query로 관리",
      "- ErrorBoundary 를 도입하여 런타임 오류 발생 시 서비스 전체가 중단되지 않을 수 있도록 적용",

      "- Lighthouse 웹 성능 최적화",
      "- 낙관적 업데이트를 적용 해 서버에서 오류가 나더라도 화면엔 빠르게 적용할 수 있도록 반응성 강화",
    ],
    skill: ["React", "TypeScript", "Emotion", "FireBase"],
    buttonLabel: "블로그 보러가기",
    link: "https://devblog-f31ca.web.app/",
  },
  {
    id: 4,
    tag: "퍼블리시",
    title: "PUBLISHlink",
    summary: `퍼블리시와 협약된 각 언론사에게 프로젝트 핵심 요소인 ‘위젯’을 코드로 제공하여 모든 기사 페이지에 삽입하고 독자는 이를 통해 기사를 소비(읽기, 공유하기 등)할 때마다 암호화폐 리 워드를 적립 받을 수 있는 서비스`,
    desc: ``,
    image:
      "https://res.cloudinary.com/dkvn4lmev/image/upload/v1782123904/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-09-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.55.13_wnab2g.png",
    role: [
      "- Firebase Hosting, Firestore, Authentication을 활용해 블로그 글 작성, 수정, 삭제, 목록 기능 구현 ",
      "- Firestore 데이터 비동기 요청을 TanStack Query로 관리",
      "- ErrorBoundary 를 도입하여 런타임 오류 발생 시 서비스 전체가 중단되지 않을 수 있도록 적용",

      "- Lighthouse 웹 성능 최적화",
      "- 낙관적 업데이트를 적용 해 서버에서 오류가 나더라도 화면엔 빠르게 적용할 수 있도록 반응성 강화",
    ],
    skill: ["HTML5", "CSS3", "javascript", "jQuery", "volt"],
  },

  {
    id: 5,
    tag: "퍼블리시",
    title: "PUBLISHlink",
    summary: `퍼블리시와 협약된 각 언론사에게 프로젝트 핵심 요소인 ‘위젯’을 코드로 제공하여 모든 기사 페이지에 삽입하고 독자는 이를 통해 기사를 소비(읽기, 공유하기 등)할 때마다 암호화폐 리 워드를 적립 받을 수 있는 서비스`,
    desc: ``,
    image:
      "https://res.cloudinary.com/dkvn4lmev/image/upload/v1782123904/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-09-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.55.13_wnab2g.png",
    role: [
      "- Firebase Hosting, Firestore, Authentication을 활용해 블로그 글 작성, 수정, 삭제, 목록 기능 구현 ",
      "- Firestore 데이터 비동기 요청을 TanStack Query로 관리",
      "- ErrorBoundary 를 도입하여 런타임 오류 발생 시 서비스 전체가 중단되지 않을 수 있도록 적용",

      "- Lighthouse 웹 성능 최적화",
      "- 낙관적 업데이트를 적용 해 서버에서 오류가 나더라도 화면엔 빠르게 적용할 수 있도록 반응성 강화",
    ],
    skill: ["HTML5", "CSS3", "javascript", "jQuery", "volt"],
  },
];
