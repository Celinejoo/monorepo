import{c as n,a as g,j as e,F as f}from"./emotion-react.browser.esm-Cemqn3pj.js";import{s as v}from"./emotion-styled.browser.esm-C4boggRP.js";import{P as C}from"./Paragraph-BwzewXIu.js";import"./index-ZKl5n0xc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bhc8sTDk.js";import"./extends-CF3RwP-h.js";import"./index.esm-Dozb0q9Q.js";const _={small:n`
    font-size: var(--font-size-14);
    padding: 6px;
  `,medium:n`
    font-size: var(--font-size-16);
    padding: 8px;
  `,large:n`
    font-size: var(--font-size-18);
    padding: 12px;
  `,xlarge:n`
    font-size: var(--font-size-20);
    padding: 14px;
  `},B={small:n`
    width: 16px;
    height: 16px;
  `,medium:n`
    width: 20px;
    height: 20px;
  `,large:n`
    width: 24px;
    height: 24px;
  `,xlarge:n`
    width: 28px;
    height: 28px;
  `},I={fill:n`
    background: var(--color-gray-300);
    color: var(--color-white-0);
    border-radius: 8px;
  `,clear:n`
    background: transparent;
  `,border:n`
    border: 1px solid;
    border-radius: 8px;
    border-color: var(--color-gray-300);
  `},d=v.button({display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"6px",transition:"all ease 0.2s",cursor:"pointer","&:active:not(:disabled)":{transform:"scale(0.97)"},"&:disabled":{opacity:.5,cursor:"not-allowed"}},({variant:a="fill"})=>I[a],({size:a="medium"})=>_[a]),m=({text:a,variant:l})=>e(C,{typography:"sub3",color:l==="border"||l==="clear"?"gray700":"white0",children:a}),S=v.div({display:"flex",alignItems:"center",justifyContent:"center"},({size:a})=>B[a]),p=({children:a,size:l="medium"})=>e(S,{size:l,children:a}),i=({configuration:a="label-icon",variant:l="border",size:b="medium",icon:y,iconSize:x,label:s,disabled:z,onClick:h})=>g(d,{variant:l,size:b,disabled:z,onClick:h,"aria-label":s,children:[e(p,{size:x,children:y}),a==="label-icon"&&s&&e(m,{text:s,variant:l})]});try{d.displayName="ButtonBase",d.__docgenInfo={description:"",displayName:"ButtonBase",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},variant:{defaultValue:{value:"border"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"clear"'},{value:'"border"'},{value:'"fill"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"xlarge"'}]}},iconSize:{defaultValue:null,description:"",name:"iconSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"xlarge"'}]}},configuration:{defaultValue:{value:"label-icon"},description:"",name:"configuration",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"label-icon"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((() => void) & MouseEventHandler<HTMLButtonElement>)"}}}}}catch{}try{m.displayName="Label",m.__docgenInfo={description:"",displayName:"Label",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"border"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"clear"'},{value:'"border"'},{value:'"fill"'}]}}}}}catch{}try{p.displayName="Icon",p.__docgenInfo={description:"",displayName:"Icon",props:{size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"xlarge"'}]}}}}}catch{}try{i.displayName="IconButton",i.__docgenInfo={description:"",displayName:"IconButton",props:{variant:{defaultValue:{value:"border"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"clear"'},{value:'"border"'},{value:'"fill"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"xlarge"'}]}},iconSize:{defaultValue:null,description:"",name:"iconSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"xlarge"'}]}},configuration:{defaultValue:{value:"label-icon"},description:"",name:"configuration",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"label-icon"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const j={title:"Components/IconButton",component:i,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"`IconButton` 컴포넌트는 버튼에 아이콘과 텍스트가 함게 사용되거나 아이콘만 있는 경우를 나타냅니다."}}},argTypes:{variant:{control:{type:"radio"},description:"버튼의 배경색을 조정합니다.",options:["fill","clear","border"]},size:{control:{type:"radio"},description:"버튼의 사이즈를 결정합니다.",options:["small","medium","large","xlarge"]},iconSize:{control:{type:"radio"},description:"아이콘의 사이즈를 결정합니다.",options:["small","medium","large","xlarge"]},configuration:{control:{type:"radio"},description:"아이콘 버튼의 label 유무를 선택할 수 있습니다.",options:["icon","label-icon"]},icon:{control:!1,description:"icon 모양을 넣어줍니다."},label:{control:"text",description:"아이콘의 상태를 텍스트로 설명해줍니다."},disabled:{control:"boolean",description:"버튼의 비활성화 상태를 나태닙니다."}},args:{variant:"fill",size:"medium",iconSize:"medium",label:"알림",configuration:"icon",disabled:!1}},r=()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24px",height:"24px",children:g("g",{fill:"#92969b",children:[e("path",{d:"m15.466 19.466c0 1.855-1.563 3.418-3.418 3.418-1.953 0-3.418-1.563-3.418-3.418z"}),e("path",{d:"m12 1.022c1.145 0 2.101.812 2.322 1.893 3.302.997 5.703 4.046 5.703 7.649v2.294s1.583 2.564 1.583 2.564c.634 1.027-.105 2.352-1.312 2.352h-8.295s-8.295 0-8.295 0c-1.207 0-1.946-1.324-1.312-2.352l1.583-2.564v-2.294c0-3.603 2.401-6.653 5.703-7.649.221-1.081 1.177-1.893 2.322-1.893z"})]})}),o={render:a=>e(i,{icon:e(r,{}),...a})},t={args:{configuration:"icon",label:"알림"},render:a=>e(f,{children:e(i,{size:"medium",iconSize:"medium",icon:e(r,{}),...a})})},u=()=>g(f,{children:[e("p",{children:" 버튼 사이즈와 이이콘 사이즈 맞추기를 권장."}),e(i,{size:"small",iconSize:"small",icon:e(r,{}),configuration:"icon"}),e("div",{style:{height:"8px"}}),e(i,{size:"medium",iconSize:"medium",icon:e(r,{}),configuration:"label-icon",label:"알림"}),e("div",{style:{height:"8px"}}),e(i,{size:"large",iconSize:"large",icon:e(r,{}),configuration:"label-icon",label:"알림"}),e("div",{style:{height:"8px"}}),e(i,{size:"xlarge",iconSize:"xlarge",icon:e(r,{}),configuration:"label-icon",label:"알림"})]}),c=()=>e(i,{size:"xlarge",iconSize:"xlarge",icon:e(r,{}),configuration:"label-icon",disabled:!0});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <IconButton icon={<Icon />} {...args} />
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    configuration: "icon",
    label: "알림"
  },
  render: args => <>
      <IconButton size="medium" iconSize="medium" icon={<Icon />} {...args} />
    </>
}`,...t.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <>
      <p> 버튼 사이즈와 이이콘 사이즈 맞추기를 권장.</p>

      <IconButton size="small" iconSize="small" icon={<Icon />} configuration="icon" />
      <div style={{
      height: "8px"
    }}></div>
      <IconButton size="medium" iconSize="medium" icon={<Icon />} configuration="label-icon" label="알림" />
      <div style={{
      height: "8px"
    }}></div>
      <IconButton size="large" iconSize="large" icon={<Icon />} configuration="label-icon" label="알림" />
      <div style={{
      height: "8px"
    }}></div>
      <IconButton size="xlarge" iconSize="xlarge" icon={<Icon />} configuration="label-icon" label="알림" />
    </>;
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <IconButton size="xlarge" iconSize="xlarge" icon={<Icon />} configuration="label-icon" disabled />;
}`,...c.parameters?.docs?.source}}};const A=["Overview","Configuration","Size","Disabled"];export{t as Configuration,c as Disabled,o as Overview,u as Size,A as __namedExportsOrder,j as default};
