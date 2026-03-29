import{a as s,j as p,k as l}from"./emotion-react.browser.esm-Cemqn3pj.js";import{s as i}from"./emotion-styled.browser.esm-C4boggRP.js";import"./index-ZKl5n0xc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bhc8sTDk.js";import"./extends-CF3RwP-h.js";const d=l`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,t=i.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &::before {
    content: "";
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 4px solid var(--color-gray-200);
    border-top-color: var(--color-blue-500);

    animation: ${d} 900ms linear infinite;
  }
`,n=i.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`,a=({label:e,children:o})=>s(t,{role:"status","aria-live":"polite",children:[p(n,{children:e}),o&&o]});try{t.displayName="SpinnerBox",t.__docgenInfo={description:"",displayName:"SpinnerBox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}try{n.displayName="SpinnerText",n.__docgenInfo={description:"",displayName:"SpinnerText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}try{a.displayName="Spinner",a.__docgenInfo={description:"",displayName:"Spinner",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}const _={title:"Components/Spinner",component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"`Spinner` 컴포넌트는 스피너는 화면이나 요소의 다양한 처리 상태를 시각적으로 표시한 것으로 일정 시간 동안 대기해야 함을 사용자에게 안내합니다."}}},argTypes:{label:{control:"text",description:"상태 알려줘야 할 때 적용, 화면에 보여지지 않습니다."},children:{control:"text"}}},r={};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};const x=["Overview"];export{r as Overview,x as __namedExportsOrder,_ as default};
