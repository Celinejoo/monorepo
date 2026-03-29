import{j as n,a as l,c as w}from"./emotion-react.browser.esm-Cemqn3pj.js";import{s as u}from"./emotion-styled.browser.esm-C4boggRP.js";import{P as p}from"./Paragraph-rX68Yw9Y.js";import{r as i}from"./index-ZKl5n0xc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bhc8sTDk.js";import"./extends-CF3RwP-h.js";import"./index.esm-Dozb0q9Q.js";const I=i.createContext(null),b=()=>{const e=i.useContext(I);if(!e)throw new Error("AccordionHeader and AccordionPanel must be used within Accordion");return e},m=u.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 12px;
  background: var(--color-white-500);
  cursor: pointer;
`,y=u.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,_=u.span`
  transition: all 0.3s ease;
  ${({isOpen:e})=>e&&w`
      transform: rotate(180deg);
    `}
`,h=u.div`
  padding: 10px 12px;
`,g=({children:e,defaultOpen:r=!1})=>{const[t,o]=i.useState(r),d=i.useId(),f=()=>{o(N=>!N)},A=`accordion-header-${d}`,O=`accordion-panel-${d}`,v=i.useMemo(()=>({isOpen:t,toggle:f,headerId:A,panelId:O}),[t,A,O]);return n(I.Provider,{value:v,children:n("div",{children:e})})},x=({title:e,prefix:r})=>{const{isOpen:t,toggle:o,headerId:d,panelId:f}=b();return l(m,{id:d,type:"button","aria-expanded":t,"aria-controls":f,onClick:o,children:[l(y,{children:[r&&n(p,{typography:"sub3",as:"span",children:r}),n(p,{typography:"sub3",as:"span",children:e})]}),n(_,{isOpen:t,children:n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:n("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.47243 8.39766C4.80494 8.10671 5.31035 8.1404 5.60129 8.47291L11.9992 15.7848L18.3972 8.47291C18.6881 8.1404 19.1935 8.10671 19.526 8.39766C19.8585 8.6886 19.8922 9.19401 19.6013 9.52652L11.9992 18.2146L4.39717 9.52652C4.10622 9.19401 4.13992 8.6886 4.47243 8.39766Z",fill:"#2D2D2D"})})})]})},C=({children:e})=>{const{isOpen:r,headerId:t,panelId:o}=b();return n(h,{id:o,role:"region","aria-labelledby":t,hidden:!r,children:e})},a=Object.assign(g,{Header:x,Content:C});try{m.displayName="StyledHeader",m.__docgenInfo={description:"",displayName:"StyledHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}try{y.displayName="LeftSection",y.__docgenInfo={description:"",displayName:"LeftSection",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}try{_.displayName="Arrow",_.__docgenInfo={description:"",displayName:"Arrow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}}}}}catch{}try{h.displayName="StyledPanel",h.__docgenInfo={description:"",displayName:"StyledPanel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}try{g.displayName="AccordionRoot",g.__docgenInfo={description:"",displayName:"AccordionRoot",props:{defaultOpen:{defaultValue:{value:"false"},description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}}}}}catch{}try{x.displayName="AccordionHeader",x.__docgenInfo={description:"",displayName:"AccordionHeader",props:{prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}}}}}catch{}try{C.displayName="AccordionContent",C.__docgenInfo={description:"",displayName:"AccordionContent",props:{}}}catch{}try{a.displayName="Accordion",a.__docgenInfo={description:"",displayName:"Accordion",props:{defaultOpen:{defaultValue:{value:"false"},description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}}}}}catch{}const T={title:"Components/Accordion",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"한 페이지에서 관련 있는 여러 콘텐츠 섹션을 확인할 수 있도록 하는 컴포넌트로, 콘텐츠 섹션의 헤더 목록이 수직으로 쌓여 있는 형태로 표현됩니다. 하위 콘텐츠 섹션을 표시하거나 숨길 수 있습니다."}}},argTypes:{defaultOpen:{control:"boolean",description:"초기 열림 상태를 설정합니다."},prefix:{control:"text",description:"헤더 왼쪽에 표시되는 prefix 요소입니다."},title:{control:"text",description:"아코디언 헤더 제목입니다."},content:{control:"text",description:"아코디언 본문 내용입니다. children 속성으로 Paragraph 컴포넌트 사용이 가능합니다."}},args:{defaultOpen:!1,prefix:"Q",title:"아코디언 헤더에는 보통 질문이 들어갑니다.",content:"아코디언의 컨텐츠에는 보통 답변이 들어갑니다."}},c={render:({defaultOpen:e,prefix:r,title:t,content:o})=>l(a,{defaultOpen:e,children:[n(a.Header,{title:t,prefix:r||void 0}),n(a.Content,{children:n(p,{typography:"sub3",children:o})})]})},s={args:{defaultOpen:!1,prefix:"",title:"prefix 없이 사용하는 아코디언",content:"prefix가 없어도 정상적으로 동작합니다."},render:({defaultOpen:e,prefix:r,title:t,content:o})=>l(a,{defaultOpen:e,children:[n(a.Header,{title:t,prefix:r||void 0}),n(a.Content,{children:n(p,{typography:"sub3",children:o})})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: ({
    defaultOpen,
    prefix,
    title,
    content
  }) => <Accordion defaultOpen={defaultOpen}>
      <Accordion.Header title={title} prefix={prefix || undefined} />
      <Accordion.Content>
        <Paragraph typography="sub3">{content}</Paragraph>
      </Accordion.Content>
    </Accordion>
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: false,
    prefix: "",
    title: "prefix 없이 사용하는 아코디언",
    content: "prefix가 없어도 정상적으로 동작합니다."
  },
  render: ({
    defaultOpen,
    prefix,
    title,
    content
  }) => <Accordion defaultOpen={defaultOpen}>
      <Accordion.Header title={title} prefix={prefix || undefined} />
      <Accordion.Content>
        <Paragraph typography="sub3">{content}</Paragraph>
      </Accordion.Content>
    </Accordion>
}`,...s.parameters?.docs?.source}}};const L=["Overview","WithoutPrefix"];export{c as Overview,s as WithoutPrefix,L as __namedExportsOrder,T as default};
