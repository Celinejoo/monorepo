import{j as a,a as T,c}from"./emotion-react.browser.esm-Cemqn3pj.js";import{r as E}from"./index-ZKl5n0xc.js";import{s as f}from"./emotion-styled.browser.esm-C4boggRP.js";import{P as V}from"./Paragraph-sStRRx8F.js";import{F as I}from"./FlexLayout-ZaZjuELa.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bhc8sTDk.js";import"./extends-CF3RwP-h.js";import"./index.esm-Dozb0q9Q.js";const d=f.ul`
  display: flex;
  align-items: center;
  text-align: center;

  ${({type:e})=>e==="scrollable"&&c`
      overflow-x: auto;

      &::-webkit-scrollbar {
        height: 4px;
      }
    `}
`,p=f.li`
  flex: 1 1 0;
  padding: 14px 0;
  position: relative;
  border-bottom: 1px solid;
  border-color: var(--color-gray-400);
  ${({active:e})=>e&&c`
      border-bottom: 2px inset;
      border-color: var(--color-gray-700);
    `}
  ${({type:e})=>e==="scrollable"&&c`
      white-space: nowrap;
      padding: 14px 8px;
      flex: 0 0 auto;
      width: auto;
    `}
`,F=({children:e,active:r})=>a(V,{typography:"sub2",as:"span",fontWeight:r?"bold":"regular",children:e}),n=({type:e="fixed",items:r,value:b,defaultValue:C,onChange:y,configuration:u="label"})=>{const[g,x]=E.useState(C??r[0]?.value),m=b!==void 0,h=m?b:g,_=l=>{m||x(l),y?.(l)};return a(I,{direction:"column",children:a(d,{type:e,children:r.map((l,B)=>{const v=l.value===h,D=u==="label"||u==="label-icon";return a(p,{active:v,type:e,children:T("button",{onClick:()=>_(l.value),children:[u==="icon"||u==="label-icon"?a("i",{children:l.icon}):null,D?a(F,{active:v,children:l.label}):null]})},B)})})})};try{p.displayName="TabItem",p.__docgenInfo={description:"",displayName:"TabItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}},type:{defaultValue:{value:"fixed"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"scrollable"'}]}}}}}catch{}try{d.displayName="TabList",d.__docgenInfo={description:"",displayName:"TabList",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},type:{defaultValue:{value:"fixed"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"scrollable"'}]}}}}}catch{}try{n.displayName="Tab",n.__docgenInfo={description:"",displayName:"Tab",props:{type:{defaultValue:{value:"fixed"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"scrollable"'}]}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TabItem[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},configuration:{defaultValue:{value:"label"},description:"",name:"configuration",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"icon"'},{value:'"label-icon"'}]}}}}}catch{}const $={title:"Components/Tab",component:n,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"`Tab` 컴포넌트는 `fixed`, `scrollable` 타입과 `label`, `label-icon`, `icon` 구성을 지원하는 탭 컴포넌트입니다."}}},argTypes:{type:{control:"radio",description:"탭 레이아웃 타입을 설정합니다.",options:["fixed","scrollable"]},configuration:{control:"radio",description:"탭 아이템 표시 방식을 설정합니다.",options:["label","label-icon","icon"]},items:{control:!1,description:"탭에 표시할 아이템 목록입니다."}},args:{type:"fixed",configuration:"label"}},o={args:{type:"fixed",configuration:"label"},render:e=>a(n,{...e,items:[{value:"1",label:"사과"},{value:"2",label:"바나나"},{value:"3",label:"포도"}]})},t={args:{type:"scrollable",configuration:"label"},render:e=>a(n,{...e,items:[{value:"1",label:"아주아주긴탭이름"},{value:"2",label:"배"},{value:"3",label:"바나나"},{value:"4",label:"귤"},{value:"5",label:"복숭아"},{value:"6",label:"포도"},{value:"7",label:"수박"},{value:"8",label:"파인애플"},{value:"9",label:"망고"},{value:"10",label:"딸기"},{value:"11",label:"체리"},{value:"12",label:"키위"},{value:"13",label:"블루베리"},{value:"14",label:"라임"}]})},i={args:{type:"fixed",configuration:"label-icon"},render:e=>a(n,{...e,items:[{value:"1",label:"사과",icon:"🍎"},{value:"2",label:"바나나",icon:"🍌"},{value:"3",label:"포도",icon:"🍇"}]})},s={args:{type:"fixed",configuration:"icon"},render:e=>a(n,{...e,items:[{value:"1",icon:"🍎"},{value:"2",icon:"🍌"},{value:"3",icon:"🍇"}]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: "fixed",
    configuration: "label"
  },
  render: args => <Tab {...args} items={[{
    value: "1",
    label: "사과"
  }, {
    value: "2",
    label: "바나나"
  }, {
    value: "3",
    label: "포도"
  }]} />
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: "scrollable",
    configuration: "label"
  },
  render: args => <Tab {...args} items={[{
    value: "1",
    label: "아주아주긴탭이름"
  }, {
    value: "2",
    label: "배"
  }, {
    value: "3",
    label: "바나나"
  }, {
    value: "4",
    label: "귤"
  }, {
    value: "5",
    label: "복숭아"
  }, {
    value: "6",
    label: "포도"
  }, {
    value: "7",
    label: "수박"
  }, {
    value: "8",
    label: "파인애플"
  }, {
    value: "9",
    label: "망고"
  }, {
    value: "10",
    label: "딸기"
  }, {
    value: "11",
    label: "체리"
  }, {
    value: "12",
    label: "키위"
  }, {
    value: "13",
    label: "블루베리"
  }, {
    value: "14",
    label: "라임"
  }]} />
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: "fixed",
    configuration: "label-icon"
  },
  render: args => <Tab {...args} items={[{
    value: "1",
    label: "사과",
    icon: "🍎"
  }, {
    value: "2",
    label: "바나나",
    icon: "🍌"
  }, {
    value: "3",
    label: "포도",
    icon: "🍇"
  }]} />
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: "fixed",
    configuration: "icon"
  },
  render: args => <Tab {...args} items={[{
    value: "1",
    icon: "🍎"
  }, {
    value: "2",
    icon: "🍌"
  }, {
    value: "3",
    icon: "🍇"
  }]} />
}`,...s.parameters?.docs?.source}}};const P=["Fixed","Scrollable","LabelIcon","IconOnly"];export{o as Fixed,s as IconOnly,i as LabelIcon,t as Scrollable,P as __namedExportsOrder,$ as default};
