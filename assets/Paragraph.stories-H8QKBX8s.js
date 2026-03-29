import{a as e,j as r,F as C}from"./emotion-react.browser.esm-Cemqn3pj.js";import{P as a}from"./Paragraph-w7JEoODi.js";import"./index-ZKl5n0xc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bhc8sTDk.js";import"./emotion-styled.browser.esm-C4boggRP.js";import"./extends-CF3RwP-h.js";import"./index.esm-Dozb0q9Q.js";const c={title:"Components/Paragraph",component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"텍스트를 표시하기 위한 기본 컴포넌트입니다. `typography`, `color`, `fontWeight`, `textAlign` 등의 속성으로 스타일을 제어할 수 있으며, `as` prop으로 렌더링 태그를 변경할 수 있습니다."}}},args:{typography:"sub2",color:"gray700",fontWeight:"regular",textAlign:"left",display:"block",as:"p"},argTypes:{typography:{control:"radio",description:"텍스트의 크기와 계층을 설정합니다.",options:["t1","t2","t3","t4","sub1","sub2","sub3","sub4"]},color:{control:"radio",description:"텍스트 색상을 설정합니다. 디자인 토큰에 정의된 컬러 값을 사용할 수 있습니다.",options:["gray700","gry500","pink500","red500"]},display:{control:"radio",description:"텍스트 요소의 display 속성을 설정합니다.",options:["block","inline-block","inline"]},textAlign:{control:"radio",description:"텍스트 정렬을 설정합니다.",options:["left","center","right"]},fontWeight:{control:"radio",description:"텍스트 굵기를 설정합니다.",options:["light","regular","medium","semibold","bold"]}}},p={name:"기본 예시",render:u=>e(C,{children:[r(a,{...u,children:"Controls를 통해 Paragraph의 주요 속성을 변경해볼 수 있습니다."}),r(a,{typography:"t2",as:"p",children:"텍스트를 표시하기 위한 기본 컴포넌트입니다."}),r(a,{typography:"sub2",as:"span",display:"inline",children:"as prop을 사용하면 렌더링되는 HTML 태그를 유연하게 변경할 수 있습니다."})]})},n={name:"Typography",render:u=>e(C,{children:[r(a,{...u,typography:"t1",children:"t1 텍스트"}),r(a,{...u,typography:"t2",children:"t2 텍스트"}),r(a,{...u,typography:"t3",children:"t3 텍스트"}),r(a,{...u,typography:"t4",children:"t4 텍스트"}),r(a,{...u,typography:"sub1",children:"sub1 텍스트"}),r(a,{...u,typography:"sub2",children:"sub2 텍스트"}),r(a,{...u,typography:"sub3",children:"sub3 텍스트"}),r(a,{...u,typography:"sub4",children:"sub4 텍스트"})]})},o={name:"사용 예시",render:()=>e(C,{children:[r(a,{typography:"t2",children:"Paragraph 컴포넌트는 텍스트를 표시하는 데 사용됩니다."}),r(a,{typography:"t2",as:"span",display:"inline",children:"as prop을 사용하면 의미에 맞는 태그로 렌더링할 수 있습니다."}),r(a,{typography:"t2",fontWeight:"bold",children:"굵은 텍스트 예시"}),r(a,{typography:"sub2",fontWeight:"light",children:"얇은 텍스트 예시"})]})},t={name:"Dark Mode",render:()=>e(C,{children:[r("div",{"data-theme":"dark",children:r(a,{typography:"t2",color:"pink500",children:"다크 모드에서의 pink500 텍스트 예시입니다."})}),r(a,{typography:"t2",color:"pink500",children:"라이트 모드에서의 pink500 텍스트 예시입니다."})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "기본 예시",
  render: args => <>
      <Paragraph {...args}>
        Controls를 통해 Paragraph의 주요 속성을 변경해볼 수 있습니다.
      </Paragraph>
      <Paragraph typography="t2" as="p">
        텍스트를 표시하기 위한 기본 컴포넌트입니다.
      </Paragraph>
      <Paragraph typography="sub2" as="span" display="inline">
        as prop을 사용하면 렌더링되는 HTML 태그를 유연하게 변경할 수 있습니다.
      </Paragraph>
    </>
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Typography",
  render: args => <>
      <Paragraph {...args} typography="t1">
        t1 텍스트
      </Paragraph>
      <Paragraph {...args} typography="t2">
        t2 텍스트
      </Paragraph>
      <Paragraph {...args} typography="t3">
        t3 텍스트
      </Paragraph>
      <Paragraph {...args} typography="t4">
        t4 텍스트
      </Paragraph>
      <Paragraph {...args} typography="sub1">
        sub1 텍스트
      </Paragraph>
      <Paragraph {...args} typography="sub2">
        sub2 텍스트
      </Paragraph>
      <Paragraph {...args} typography="sub3">
        sub3 텍스트
      </Paragraph>
      <Paragraph {...args} typography="sub4">
        sub4 텍스트
      </Paragraph>
    </>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "사용 예시",
  render: () => <>
      <Paragraph typography="t2">
        Paragraph 컴포넌트는 텍스트를 표시하는 데 사용됩니다.
      </Paragraph>

      <Paragraph typography="t2" as="span" display="inline">
        as prop을 사용하면 의미에 맞는 태그로 렌더링할 수 있습니다.
      </Paragraph>

      <Paragraph typography="t2" fontWeight="bold">
        굵은 텍스트 예시
      </Paragraph>

      <Paragraph typography="sub2" fontWeight="light">
        얇은 텍스트 예시
      </Paragraph>
    </>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Dark Mode",
  render: () => <>
      <div data-theme="dark">
        <Paragraph typography="t2" color="pink500">
          다크 모드에서의 pink500 텍스트 예시입니다.
        </Paragraph>
      </div>
      <Paragraph typography="t2" color="pink500">
        라이트 모드에서의 pink500 텍스트 예시입니다.
      </Paragraph>
    </>
}`,...t.parameters?.docs?.source}}};const l=["Overview","Typography","Usage","DarkMode"];export{t as DarkMode,p as Overview,n as Typography,o as Usage,l as __namedExportsOrder,c as default};
