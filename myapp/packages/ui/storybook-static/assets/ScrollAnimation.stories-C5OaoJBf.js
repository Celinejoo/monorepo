import{k as o,a as n,j as a}from"./emotion-react.browser.esm-Cemqn3pj.js";import{s as i}from"./emotion-styled.browser.esm-C4boggRP.js";import{b as s}from"./generateBackground-bMX2-9Lq.js";import"./index-ZKl5n0xc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bhc8sTDk.js";import"./extends-CF3RwP-h.js";import"./index.esm-Dozb0q9Q.js";const l=o`
   from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  `,t=i.div`
  &::after {
    content: "";
    height: 3px;
    width: 100%;
    left: 0;
    top: 0;
    position: fixed;

    animation-name: ${l};
    animation-timeline: scroll();

    ${({background:e="gray900"})=>s[e]};
  }
`;try{t.displayName="ScrollAnimation",t.__docgenInfo={description:"",displayName:"ScrollAnimation",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"string"}}}}}catch{}const f={title:"Components/ScrollAnimation",component:t,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"`ScrollAnimation` 컴포넌트는 사용자가 페이지를 스크롤할 때 그 위치나 진행도에 맞춰 애니메이션이 동작하는 컴포넌트입니다. "}}},argTypes:{background:{control:"select",description:"스크롤 애니메이션의 배경을 선택할 수 있습니다.",options:["gray500","blue500","red500","pink500"]}},args:{background:"blue500"}},r={render:e=>n("div",{style:{height:"1000px"},children:["스크롤을 해보세요.",a(t,{...e})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    height: "1000px"
  }}>
      스크롤을 해보세요.
      <ScrollAnimation {...args} />
    </div>
}`,...r.parameters?.docs?.source}}};const h=["Overview"];export{r as Overview,h as __namedExportsOrder,f as default};
