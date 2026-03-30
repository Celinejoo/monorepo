import{a as q,j as r,F as B}from"./emotion-react.browser.esm-Cemqn3pj.js";import{s as n}from"./emotion-styled.browser.esm-C4boggRP.js";import{r as d}from"./index-ZKl5n0xc.js";import{P as b}from"./Paragraph-CMHWJ8rr.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bhc8sTDk.js";import"./extends-CF3RwP-h.js";import"./index.esm-Dozb0q9Q.js";const C=n.label`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 4px;
`,I=n.div`
  width: 185px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--color-gray-300);
  background-color: ${({disabled:e})=>e&&"var(--color-gray-200)"};
  opacity: ${({disabled:e})=>e&&.5};
  cursor: pointer;
`,w=n.ul`
  width: 185px;
  padding: 8px 0;
  border: 1px solid var(--color-gray-300);
  margin-top: 4px;
  border-radius: 8px;
`,k=n.li`
  padding: 8px;
  cursor: pointer;
  transition: all ease 0.2s;
  &:hover {
    background: var(--color-gray-100);
    border-radius:4px;
    transform: scale(0.97);
  }
  &:active {
    transform: scale(0.97;
  }
`,t=({id:e,label:c,value:p,defaultValue:x,onChange:y,options:s,disabled:i=!1,...v})=>{const u=e??d.useId(),[m,g]=d.useState(!1),[h,S]=d.useState(x??s[0]?.value),f=p!==void 0,V=f?p:h,_=s.find(a=>a.value===V),O=a=>{i||(f||S(a),y?.(a),g(!1))};return q(B,{children:[c&&r(C,{htmlFor:u,children:c}),r(I,{id:u,disabled:i,onClick:()=>!i&&g(!m),...v,children:r(b,{typography:"sub3",as:"span",children:_?.label})}),m&&r(w,{children:s.map(a=>r(k,{onClick:()=>O(a.value),children:r(b,{typography:"sub3",as:"span",children:a.label})},a.value))})]})};try{t.displayName="SelectBox",t.__docgenInfo={description:"",displayName:"SelectBox",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"OptionItem[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const $={title:"Components/SelectBox",component:t,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"`SelectBox` 컴포넌트는 메뉴형태로 항목을 선택하거나 상태를 확인하고 바꿀 수 있습니다. "}}},argTypes:{label:{control:"text",description:"셀렉트 박스 라벨"},options:{control:!1,description:"선택 가능한 옵션 배열"},value:{control:"text",description:"현재 선택된 값 (controlled)"},defaultValue:{control:"text",description:"초기 선택 값 (uncontrolled)"},disabled:{control:"boolean",description:"비활성화 여부"},onChange:{action:"changed",description:"값 변경 이벤트"}},args:{label:"과일",options:[{label:"사과",value:"apple"},{label:"바나나",value:"banana"},{label:"딸기",value:"strawberry"}],defaultValue:"apple",disabled:!1}},o={render:e=>r(t,{...e})},l={args:{disabled:!0},render:e=>r(t,{...e})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <SelectBox {...args} />
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <SelectBox {...args} />
}`,...l.parameters?.docs?.source}}};const z=["Overview","Disabled"];export{l as Disabled,o as Overview,z as __namedExportsOrder,$ as default};
