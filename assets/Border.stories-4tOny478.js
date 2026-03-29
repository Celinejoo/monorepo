import{j as r,a as d,F as n}from"./emotion-react.browser.esm-Cemqn3pj.js";import{B as e}from"./Border-D7kcvc-C.js";import"./index-ZKl5n0xc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bhc8sTDk.js";import"./emotion-styled.browser.esm-C4boggRP.js";import"./extends-CF3RwP-h.js";const B={title:"Components/Border",component:e,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"'Border' 컴포넌트는 선을 나타냅니다. 요소와 요소에서의 구분이 필요할 때 사용합니다."}}},args:{height:"1",varient:"full"},argTypes:{height:{control:"radio",description:"굵기를 선택할 수 있어요, heigth16을 선택하면 굵게 표현됩니다.",options:["1","16"]},varient:{control:"radio",description:"양 옆의 간격을 선택할 수 있어요, padding24를 사용하면 왼쪽 오른쪽 여백이 24px 적용됩니다.",options:["full","padding24"]}}},o={render:c=>r(e,{...c})},t=()=>r(n,{children:r(e,{height:"1"})}),a=()=>r(n,{children:r(e,{height:"16"})}),s=()=>d(n,{children:[r(e,{height:"16",varient:"padding24"}),r("div",{style:{marginBottom:"16px"}}),r(e,{height:"1",varient:"padding24"})]}),i=()=>d(n,{children:[r(e,{height:"16",varient:"full"}),r("div",{style:{marginBottom:"16px"}}),r(e,{height:"1",varient:"full"})]});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Border {...args} />
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <>
    <Border height="1" />
  </>`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <>
    <Border height="16" />
  </>`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <>
    <Border height="16" varient="padding24" />
    <div style={{
    marginBottom: "16px"
  }}></div>
    <Border height="1" varient="padding24" />
  </>`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <>
    <Border height="16" varient="full" />
    <div style={{
    marginBottom: "16px"
  }}></div>
    <Border height="1" varient="full" />
  </>`,...i.parameters?.docs?.source}}};const v=["Default","LightBorder","HeightBorder","Padding24","Full"];export{o as Default,i as Full,a as HeightBorder,t as LightBorder,s as Padding24,v as __namedExportsOrder,B as default};
