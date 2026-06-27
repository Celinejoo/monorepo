export const data = [
  {
    id: "myinsurance",
    tag: "카카오페이",
    image:
      "https://res.cloudinary.com/dkvn4lmev/image/upload/v1782205898/Gemini_Generated_Image_yjgfn7yjgfn7yjgf_tzrcl2.webp",
    title: "카카오페이 내 보험 상세내역 개편",
    date: "2023.11 ~ 2024. 07",
    summary: "사용자가 보유한 보험의 정보를 확인할 수 있는 상세 화면 서비스",
    contribution: "UI 컴포넌트 개발 80%",
    desc: `사용자가 보유한 보험의 정보를 확인할 수 있는 상세 화면 서비스입니다.\n 아웃바운드 메시지 유입 사용자를 대상으로 보험 진단, 병원비 청구, 보험 콘텐츠 등 다양한 보험 서비스로 자연스럽게 확장 유도하는 허브 역할을 수행하며,\n서비스 이용률 및 매출 증대를 목표로 UI/UX 개편이 진행되었습니다.`,
    role: [
      {
        category: "디자인 프로세스 개선",
        details: [
          `해당 상세 내역 페이지는 과거에 구축되어 사내 디자인 시스템이 적용되어 있지 않았습니다. 이로 인해 타 서비스와 UI 파편화가 발생하며 전체 프로덕트의 시각적 일관성이 떨어지는 문제가 있었습니다.
          또한, 스타일 코드가 하드 코딩되어 있어 컬러나 여백 수정과 같은 스타일을 수정 시 소요 시간이 길어져 개발 효율성이 낮았습니다.
          개편 프로젝트를 진행하며 사내 디자인 시스템을 적용하고, 서비스 내에 사용 되는 공통 컴포넌트를 별도로 제작하여 디자인 프로세스를 개선했습니다.
          이를 통해 제품 전체의 시각적 동기화를 100% 달성하여 사용자 경험(UX)의 일관성을 확보했으며, 유지보수 효율성을 대폭 향상시켰습니다.`,
        ],
      },
      {
        category: "사용자 경험 개선",
        details: [
          "시멘틱 태그 사용 및 웹 접근성(WAI-ARIA) 준수를 통해 보조 공학 기기 사용자까지 고려한 사용자 경험 제공하고자 했습니다.",
          `상세 정보 영역에서 <dl>, <dt>, <dd> <ul>, <li> 등 의미에 맞는 적절한 시멘틱 태그를 활용하여 정보 구조를 명확히 할 수 있도록 구현하고,
          버튼 태그를 사용하고 있지 않지만 버튼 역할을 수행하는 요소에 role="button"을 명시하여 접근성 개선했습니다.`,
        ],
      },
      {
        category: "반응형 UI/UX 개선",
        details: [
          `기존 모바일 환경 (375px)으로 구현된 디자인시스템 컴포넌트가 최신기기(ex.갤럭시 폴드 접힙 화면)의 280px 해상도에서 컨텐츠가 잘리거나, 말줄임 및 레이아웃이 깨지는 현상이 발생했습니다.
          이슈 해결을 위해 최소 280px 대응하기 위한 미디워쿼리 분기점(@meida (max-width:280px))을 추가 정의하고,
          고정 단위 px 사용 대신 유연한 단위(ex. vw, flex-wrap)를 사용하여 모든 디바이스에서 일관된 사용자 경험 제공하여 왜곡 없는 반응형 UI를 구현했습니다.`,
        ],
      },
      {
        category: "FSD (Feature-Sliced Design) 아키텍처 도입",
        details: [
          `프로젝트 개편을 진행하며 의존성 복잡도를 해결하기 위해 FSD 아키텍처를 적용하여 UI 컴포넌트,비즈니스 로직, API를 엄격히 분리하여 코드 재사용성 및 안정성을 확보했습니다.`,
        ],
      },
      {
        category:
          "MSW(Mock Service Worker) 기반 테스트와 Storybook을 활용한 컴포넌트 테스트",
        details: [
          `실제 API 개발 전후의 병목 현상을 방지하기 위해 네트워크 레벨에서 API를 모킹하고, 관심사가 분리된 독립적인 테스트 코드 작성 환경 마련했습니다.`,
          `서비스 내에서 사용왼 모든 컴포넌트를 Storybook에 컴포넌트에 대한 역할, 사용법에 대하여 문서화하여 타 팀과의 커뮤니케이션을 효율성있게 변경햇습니다.`,
        ],
      },
    ],
    skill: [
      "React",
      "TypeScript",
      "scss (css module)",
      "React-Query",
      "Recoil",
      "Storybook",
    ],
    images: [
      "https://res.cloudinary.com/dkvn4lmev/image/upload/v1782314261/%E1%84%82%E1%85%A2%E1%84%8B%E1%85%A7%E1%86%A8%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A6_gwbcfe.webp",
    ],
  },
  {
    id: "insurancereview",
    tag: "카카오페이",
    title: "카카오페이 보험 진단 개편",
    summary:
      "카카오페이 보험 서비스 중 보험 진단 서비스 방문자의 상담률 전환을 위하여 UI/UX 개편",
    contribution: "UI 컴포넌트 개발 100%",
    image:
      "https://res.cloudinary.com/dkvn4lmev/image/upload/v1782206030/Gemini_Generated_Image_87xg7q87xg7q87xg_aic4th.png",
    date: "2024.04 - 2024.07",
    desc: `보험 진단 방문자의 상담 전환율을 극대화하기 위한 프로젝트입니다.,
     사용자의 보험 보장 금액 및 가입 금액의 비교 시각화 차트를 통해 이해도를 높여 보험 상담으로 전환 해 매출을 증대를 목표로 합니다.
    프로젝트 오픈 후 하루 최대 3,000건 상담 연결, 매출 10배 이상 증가 성과를 달성 했습니다.`,
    images: [
      "https://res.cloudinary.com/dkvn4lmev/image/upload/v1782314387/%E1%84%87%E1%85%A9%E1%84%92%E1%85%A5%E1%86%B7%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB_bbs5tf.webp",
    ],
    role: [
      {
        category: "UI 구현 주도",
        details: [
          `서비스 주요 화면의 UI를 디자인 시스템 기반으로 공통 컴포넌트를 구현하고, 디자인 시스템에서 제공하지 않는 UI의 경우 직접 설계 및 적용했습니다.`,
          `직접 설계 시 props 의 확장성과 일관성을 지키기 위해서 공통으로 쓰이는 타입(Variant, Size 등)의 네이밍을 디자인 시스템과 일치시켜 별도의 문서 없이도 쉽게 컴포넌트를 재사용할 수 있는 환경을 만들었습니다.`,
        ],
      },
      {
        category: "객체 매핑을 통한 조건 분기",
        details: [
          `비교 시각화 차트의 UI 상태가 다양해짐에 따라 if-else 나 switch 문이 늘어나게 되면서 새로운 조건이 추가될 때마다 핵심 로직을 수정해야 하고, 코드 가독성이 떨어지는 문제가 발생하게 되었습니다. 
          복잡한 분기 로직을 제거하고 상태에 따라 텍스트나 컬러를 변경할 수 있는 객체 매핑 패턴을 도입하여 변경에 유연한 구조로 설계했습니다.`,
        ],
      },
      {
        category: "framer-motion을 활용한 애니메이션 적용",
        details: [
          `직관적이고 선언적인 코드로 관리하고자 framer-motion 라이브러리를 적용하여 애니메이션 효과를 극대화 했습니다.
          spring 등 인터랙션에 적절한 transition 옵션을 적용하여 자연스러운 애니메이션을 적용하여 완성도를 높이고,
          웹 접근성과 시선 흐름을 고려하여 ref 기반의 초점 이동 시 애니메이션이 실행되도록 하여 몰입도를 향상 시키고 체류 시간 증가에 기여했습니다.`,
        ],
      },
      {
        category: "마이데이터 기반 API 연동",
        details: [
          `마이데이터 기반의 API를 연동하여 사용자 상태에 따른 분기 처리를 통해 적절한 바텀시트가 나올 수 있도록 구현하여
          카카오페이손해보험으로 가입을 유도 해 매출을 증대에 기여했습니다.`,
        ],
      },
    ],
    skill: [
      "React",
      "TypeScript",
      "scss (css module)",
      "React-Query",
      "Recoil",
      "Storybook",
    ],
  },
  {
    id: "compare",
    tag: "카카오페이",
    image:
      "https://res.cloudinary.com/dkvn4lmev/image/upload/v1782205167/Gemini_Generated_Image_knzq8cknzq8cknzq_dao8zv.webp",
    title: "카카오페이 보험 비교 서비스",
    date: "2023.11 - 2024. 07",
    summary:
      "사용자가 설정한 조건에 따라 제휴 보험사의 보험료를 한눈에 비교하고 가입할 수 있는 신규 서비스",
    contribution: "UI 컴포넌트 개발 100%",
    desc: `사용자가 설정한 조건에 따라 제휴 보험사의 보험료를 한눈에 비교하고 가입할 수 있는 신규 서비스입니다.
    가입 건당 수수료 매출을 발생시켜 보험 매출 증대에 기여할 수 있는 서비스 입니다.`,
    role: [
      {
        category: "Lottie 기반 애니메이션 적용",
        details: [
          `온보딩 페이지에 Lottie 기반 애니메이션을 적용하여 사용자의 몰입도를 높여 서비스 전환률을 높이고자 했습니다.
          웹 성능 향상을 위해 대용량 JSON 파일을 차세대 압축 아카이브인 '.lottie' 포맷으로 변환하여 초기 로딩 속도를 최소화하고,
          사용자가 화면을 스크롤할 때 애니메이션 요소가 자연스럽게 나타나도록 스크롤 트리거(Scroll Trigger)기반의 인터랙션 구현했습니다.`,
        ],
      },
      {
        category: "Swiper 활용",
        details: [
          `자바스크립트 기반의 부드러운 롤링 효과와 자동 재생(Autoplay) 기능을 컴팩트하게 구현하고, 리액트의 로딩 상태(State)와 애니메이션 타이밍을 정밀하게 동기화하고자 Swiper 라이브러리를 사용했습니다. 
          대기 시간 동안 서비스 핵심 정보를 순차적으로 노출하는 세로형 자동 재생 슬라이딩 UI(로딩 가이드 컴포넌트) 주도적 구현하고,
          첫 슬라이드와 마지막 슬라이드가 자연스럽게 이어지도록 'loop' 모드를 활성화하고,
          사용자가 직접 제어할 필요가 없는 로딩 화면 특성에 맞춰, 스와이프 제스처 및 터치 이벤트를 완전히 차단하여 오작동 없는 시각적 효과 본연의 가이드 목적에 집중했습니다.`,
        ],
      },
      {
        category: "스크롤 인터랙션 성능 최적화",
        details: [
          `기존 window scroll 이벤트와 offset 계산 기반의 스크롤 감지 방식을 인터섹션 옵저버(Intersection Observer) API로 전환 해 성능 최적화에 기여했습니다.
          브라우저의 불필요한 리플로우(Reflow)를 차단하여 화면 버벅임 현상을 해결하고,
          특정 UI 요소들이 화면에 노출되는 교차 시점을 비동기적으로 정밀하게 포착하여, 부드럽고 안정적인 스크롤 트리거 애니메이션 및 인터랙션 구현하고자 했습니다.`,
        ],
      },
      {
        category: "Framer-motion 기반 인터랙션 구현",
        details: [
          `컴포넌트의 상태 변화에 따른 선언적 애니메이션 제어 및 UI/UX 생동감 부여를 위해 Framer-motion을 사용했습니다. ,
          플립 카드(Flip Card) UI 구현 시 'rotateY'속성과 'transform-style' 속성을 활용하여 카드가 뒤집히는 회전 효과를 자연스럽게 구현했으며,
          미세한 상하 유동 모션이 무한 루프되는 부드러운 플로팅 애니메이션(Floating Animation) 구현했습니다.
          애니메이션 컴포넌트의 마운트/언마운트 및 트랜지션 타이밍을 정밀하게 조율하여 브라우저 프레임 드랍 없이 고품질의 시각적 피드백 제공할 수 있었습니다.`,
        ],
      },
      {
        category: "품질 개선",
        details: [
          "QA 결과 기반 UI/UX 정합성 개선 및 품질 확보를 했으며 기존 UI 관련 QA 이슈 50% 감소를 통한 서비스 안정성 향상해 기여했습니다.",
        ],
      },
    ],
    skill: [
      "React",
      "TypeScript",
      "scss (css module)",
      "React-Query",
      "recoil",
      "Storybook",
    ],

    images: [
      "https://res.cloudinary.com/dkvn4lmev/image/upload/v1782207159/%E1%84%8C%E1%85%A1%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8E%E1%85%A11_kwzdov_dagc5m.webp",
      "https://res.cloudinary.com/dkvn4lmev/image/upload/v1782207160/%E1%84%8C%E1%85%A1%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8E%E1%85%A12_lx43x6_lptaic.webp",
    ],
  },
  {
    id: "publishlink",
    tag: "퍼블리시",
    title: "PUBLISHlink(서비스종료)",
    summary: `퍼블리시와 협약된 각 언론사에게 프로젝트 핵심 요소인 ‘위젯’을 코드로 제공하여 모든 기사 페이지에 삽입하고 독자는 이를 통해 기사를 소비(읽기, 공유하기 등)할 때마다 암호화폐 리워드를 적립 받을 수 있는 서비스`,
    contribution: "웹 퍼블리싱 80%",
    desc: `대부분의 언론사들이 광고 수익에 지나치게 의존하고 있는 문제점과 대다수의 독자들의 포털 사이트를 통해 뉴스를 소비하기 때문에 자체 플랫폼에서 직접 광고를 통해 수익을 창출 하는 어려움이 있었습니다. 언론사 플랫폼에 방문해서 뉴스를 소비할 시 현금화 할 수 있는 암호화폐를 보상을 제공해 독자를 활보하고 방문률 증가를 목표로 서비스를 출시했습니다. 퍼블리시와 협약된 각 언론사에게 위젯을 코드로 제공하고, 기사 페이지에 삽입하여 기사가 소비 될 때 암호화폐를 적립받을 수 있는 서비스 입니다.`,
    image:
      "https://res.cloudinary.com/dkvn4lmev/image/upload/v1782205311/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-09-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.55.13_uccfpd.webp",
    role: [
      {
        category: "비즈니스 로직을 고려한 UI 설계",
        details: [
          `다양한 사용자 시나리오와 비즈니스 로직을 고려하여 UI를 설계했습니다. 데이터 유무, 권한, 로딩, 오류, 완료 상태 등 다양한 분기 상황에 대응하는 화면을 구현하여 사용자가 현재 상태를 명확하게 인지할 수 있도록 했으며, 일관된 사용자 경험과 서비스 신뢰성을 높였습니다.`,
        ],
      },
      {
        category: "개발 환경 및 공통 스타일 시스템 구축",
        details: [
          `프로젝트 초기 CSS 아키텍처를 설계하여 공통 스타일을 관리하여 UI 일관성을 확보하고, 유지보수성과 개발 효율을 향싱 시키고자 했습니다.reset.css를 통해 브라우저 기본 스타일을 초기화하고, font.css에서 웹 폰트와 타이포그래피 스타일을 정의했습니다. common.css에는 버튼, 입력폼 등 공통 UI 스타일을 정의했으며, utility.css를 작성하여 자주 사용하는 스타일을 클래스화해 재사용성을 높였습니다. 이를 통해 중복 스타일 작성이 감소하고 신규 화면 개발 및 디자인 변경을 보다 효율적으로 진행할 수 있었습니다. `,
        ],
      },
      {
        category: "화면 요소 모듈화",
        details: [
          `PHP Volt Template Engine을 환경에서 반복되는 화면 요소인 Header, Footer, Header, Footer, Contents, Background, Navigation 등을 컴포넌트화하고 include 및 extends 구조를 활용하여 공통 레이아웃 관리했습니다. 중복 마크업이 감소하고, 공통 블록만 수정하면 전체에 반영되어 개발 속도 향상에 기여했습니다.`,
        ],
      },
      {
        category: "반응형 UI 구현",
        details: [
          `해상도 점유율과 디자인 가이드를 기반으로 Desktop(1920px), Tablet(768px), Mobile(360px)을 기준으로 반응형 UI를 구현했습니다. CSS Media Query와 유동적인 레이아웃을 적용해 화면 크기에 따라 콘텐츠와 컴포넌트를 최적화했으며, 다양한 디바이스 환경에서도 일관된 사용자 경험을 제공할 수 있도록 개발했습니다`,
        ],
      },
      {
        category: "Swiper, Datepicker 등 다양한 라이브러리 활용 및 적용",
        details: [
          `Swiper, Datepicker 등 다양한 UI 라이브러리를 프로젝트 요구사항에 맞게 적용하고 커스터마이징하여 슬라이더, 날짜 선택 등 인터랙션 기능을 구현했습니다. 기존 UI와 일관성을 유지하도록 스타일을 조정하고, 재사용 가능한 형태로 적용하여 사용자 경험과 개발 생산성을 향상시켰습니다.`,
        ],
      },
      {
        category: "Bootstrap을 활용한 Admin/SuperAdmin 구축",
        details: [
          `Bootstrap을 활용해 Admin 및 SuperAdmin 페이지를 구축하고 공통 UI 컴포넌트를 표준화했습니다. 반응형 레이아웃을 적용하여 다양한 관리 화면을 구현했으며, 공통 스타일과 컴포넌트 재사용을 통해 일관된 사용자 경험과 유지보수 효율을 높였습니다.`,
        ],
      },
    ],
    images: [
      "https://res.cloudinary.com/dkvn4lmev/image/upload/v1782205311/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-09-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.55.13_uccfpd.webp",
      "https://res.cloudinary.com/dkvn4lmev/image/upload/v1782314935/%E1%84%91%E1%85%A5%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5%E1%84%89%E1%85%B5_ywierz.webp",
    ],

    skill: ["HTML5", "CSS3", "javascript", "jQuery", "volt"],
  },
  // {
  //   id: 5,
  //   tag: "퍼블리시",
  //   title: "뉴스토마스(서비스종료)",
  //   summary: ``,
  //   desc: ``,
  //   image:
  //     "https://res.cloudinary.com/dkvn4lmev/image/upload/v1782206492/Gemini_Generated_Image_52nstj52nstj52ns_g3g6fc.png",
  //   role: [],
  //   skill: ["HTML5", "CSS3", "javascript", "jQuery", "volt"],
  // },
  {
    id: 6,
    tag: "개인 프로젝트",
    title: "UI 디자인 시스템 라이브러리",
    summary: "디자인시스템 라이브러리 구축",
    image:
      "https://res.cloudinary.com/dkvn4lmev/image/upload/v1782206602/Gemini_Generated_Image_nk2jzwnk2jzwnk2j_dygxnd.webp",
    desc: "모노레포(Monorepo) 구조를 기반으로 UI 컴포넌트 라이브러리를 구축했습니다. ",
    role: [],
    skill: ["React", "TypeScript", "Emotion"],
    buttonLabel: "디자인시스템 보러가기",
    link: "https://celinejoo.github.io/monorepo/",
  },
  {
    id: 7,
    tag: "개인 프로젝트",
    title: "개발 블로그 개설 및 운영",
    summary: "개인 블로그 서비스 기획 및 구축",
    desc: `Firebase를 기반으로 한 개인 블로그 서비스를 기획·구축했습니다. \n 학습 내용한 내용을 정리하고 적용하여 구축하고자 했습니다. `,
    image:
      "https://res.cloudinary.com/dkvn4lmev/image/upload/v1782206603/Gemini_Generated_Image_w3tt49w3tt49w3tt_bhm43u.webp",
    role: [],
    skill: ["React", "TypeScript", "Emotion", "FireBase"],
    buttonLabel: "블로그 보러가기",
    link: "https://devblog-f31ca.web.app/",
  },
];
