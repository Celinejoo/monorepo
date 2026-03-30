import{j as t,F as r,a as c,c as n}from"./emotion-react.browser.esm-Cemqn3pj.js";import{s as d}from"./emotion-styled.browser.esm-C4boggRP.js";import{P as b}from"./Paragraph-BwzewXIu.js";import{I as a}from"./IconButton-BPb5Wlzr.js";import"./index-ZKl5n0xc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bhc8sTDk.js";import"./extends-CF3RwP-h.js";import"./index.esm-Dozb0q9Q.js";const h={top:n`
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
  `,bottom:n`
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
  `,left:n`
    right: calc(100% + 8px);
    top: 50%;
    transform: translateY(-50%);
  `,right:n`
    left: calc(100% + 8px);
    top: 50%;
    transform: translateY(-50%);
  `},f={top:n`
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px 6px 0 6px;
    border-style: solid;
    border-color: var(--color-gray-800) transparent transparent transparent;
  `,bottom:n`
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0 6px 6px 6px;
    border-style: solid;
    border-color: transparent transparent var(--color-gray-800) transparent;
  `,left:n`
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    border-width: 6px 0 6px 6px;
    border-style: solid;
    border-color: transparent transparent transparent var(--color-gray-800);
  `,right:n`
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border-width: 6px 6px 6px 0;
    border-style: solid;
    border-color: transparent var(--color-gray-800) transparent transparent;
  `},C=d.div`
  position: relative;
  display: inline-flex;

  &:hover .tooltip-content {
    opacity: 1;
    visibility: visible;
  }
`,x=d.div({position:"absolute",zIndex:1e3,padding:"8px 10px",minWidth:"max-content",maxWidth:"240px",borderRadius:"8px",background:"var(--color-gray-800)",boxSizing:"border-box",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",pointerEvents:"none",wordBreak:"keep-all",whiteSpace:"normal"},({placement:o})=>h[o]),y=d.span({position:"absolute",width:0,height:0},({placement:o})=>f[o]),e=({content:o,children:u,placement:m="top",disabled:g=!1})=>g?t(r,{children:u}):c(C,{children:[u,c(x,{className:"tooltip-content",placement:m,role:"tooltip",children:[t(b,{typography:"sub3",color:"white0",children:o}),t(y,{placement:m})]})]});try{e.displayName="Tooltip",e.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const F={title:"Components/Tooltip",component:e,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"`Tooltip` 컴포넌트는 사용자가 특정 요소에 hover 또는 focus 할 때 추가 정보를 제공합니다."}}},argTypes:{placement:{control:"select",description:"툴팁 방향을 결정합니다.",options:["top","bottom","left","right"]},content:{control:"text"}}},i={args:{content:"좋아요 눌러주세요",placement:"bottom"},render:o=>t(e,{...o,children:t(a,{label:"0",icon:t(r,{children:"♥️"})})})},s={render:()=>c("div",{style:{display:"flex",gap:20},children:[t(e,{content:"top",placement:"top",children:t(a,{icon:t(r,{children:"↑"})})}),t(e,{content:"bottom",placement:"bottom",children:t(a,{icon:t(r,{children:"↓"})})}),t(e,{content:"left",placement:"left",children:t(a,{icon:t(r,{children:"←"})})}),t(e,{content:"right",placement:"right",children:t(a,{icon:t(r,{children:"→"})})})]})},l={args:{content:"안보여야 함",disabled:!0},render:o=>t(e,{...o,children:t(a,{icon:t(r,{children:"🚫"})})})},p={args:{content:`이것은 매우 긴 Tooltip 텍스트입니다. 
      여러 줄로 잘 보이는지 확인합니다.
      3줄째`},render:o=>t(e,{...o,children:t(a,{icon:t(r,{children:"💬"})})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    content: "좋아요 눌러주세요",
    placement: "bottom"
  },
  render: args => <Tooltip {...args}>
      <IconButton label="0" icon={<>♥️</>} />
    </Tooltip>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 20
  }}>
      <Tooltip content="top" placement="top">
        <IconButton icon={<>↑</>} />
      </Tooltip>
      <Tooltip content="bottom" placement="bottom">
        <IconButton icon={<>↓</>} />
      </Tooltip>
      <Tooltip content="left" placement="left">
        <IconButton icon={<>←</>} />
      </Tooltip>
      <Tooltip content="right" placement="right">
        <IconButton icon={<>→</>} />
      </Tooltip>
    </div>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    content: "안보여야 함",
    disabled: true
  },
  render: args => <Tooltip {...args}>
      <IconButton icon={<>🚫</>} />
    </Tooltip>
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    content: \`이것은 매우 긴 Tooltip 텍스트입니다. 
      여러 줄로 잘 보이는지 확인합니다.
      3줄째\`
  },
  render: args => <Tooltip {...args}>
      <IconButton icon={<>💬</>} />
    </Tooltip>
}`,...p.parameters?.docs?.source}}};const A=["Default","Placements","Disabled","LongText"];export{i as Default,l as Disabled,p as LongText,s as Placements,A as __namedExportsOrder,F as default};
