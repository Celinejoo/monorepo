import{j as a}from"./emotion-react.browser.esm-Cemqn3pj.js";import{B as o}from"./Badge-BwZcwV8N.js";import{P as n}from"./Paragraph-BwzewXIu.js";import"./index-ZKl5n0xc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bhc8sTDk.js";import"./emotion-styled.browser.esm-C4boggRP.js";import"./extends-CF3RwP-h.js";import"./generateBackground-bMX2-9Lq.js";import"./index.esm-Dozb0q9Q.js";const h={title:"Components/Badge",component:o,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`데이터의 상태 정보를 사용자가 알고 있는 것이 좋을 때 사용합니다. background 컬러와 children의 명도 대비를 주의해야한다.
 예) 신청 서비스의 진행 상태(접수 중, 마감됨, 모집 완료) 등`}}},args:{children:"뱃지",size:"small",background:"green500"},argTypes:{children:{description:"배지를 통해 전달하고자 하는 내용을 입력합니다. Paragrph 컴포넌트를 사용해서 텍스트의 크기를 결정합니다."},size:{control:"radio",description:"뱃지의 사이즈를 결정합니다.",options:["small","large"]},background:{control:"radio",description:"뱃지 배경 색상을 설정합니다. 디자인 토큰에 정의된 컬러 값을 사용할 수 있습니다.",options:["gray500","green500","pink500","red500","blue500"]}}},r={name:"기본 예시",render:s=>a(o,{...s,children:a(n,{typography:"sub3",as:"span",color:"white0",children:"뱃지"})})},e={name:"라지 사이즈",render:()=>a(o,{size:"large",background:"green500",children:a(n,{typography:"sub3",as:"span",color:"white0",children:"뱃지"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "기본 예시",
  render: args => <Badge {...args}>
      <Paragraph typography="sub3" as="span" color="white0">
        뱃지
      </Paragraph>
    </Badge>
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "라지 사이즈",
  render: () => <Badge size="large" background="green500">
      <Paragraph typography="sub3" as="span" color="white0">
        뱃지
      </Paragraph>
    </Badge>
}`,...e.parameters?.docs?.source}}};const C=["Overview","LargeBadge"];export{e as LargeBadge,r as Overview,C as __namedExportsOrder,h as default};
