import{c as a,a as v,j as r}from"./emotion-react.browser.esm-Cemqn3pj.js";import{s as d}from"./emotion-styled.browser.esm-C4boggRP.js";import{P as y}from"./Paragraph-CMHWJ8rr.js";const g={small:a`
    font-size: var(--font-size-14);
    padding: 6px;
  `,medium:a`
    font-size: var(--font-size-16);
    padding: 8px;
  `,large:a`
    font-size: var(--font-size-18);
    padding: 12px;
  `,xlarge:a`
    font-size: var(--font-size-20);
    padding: 14px;
  `},b={small:a`
    width: 16px;
    height: 16px;
  `,medium:a`
    width: 20px;
    height: 20px;
  `,large:a`
    width: 24px;
    height: 24px;
  `,xlarge:a`
    width: 28px;
    height: 28px;
  `},_={fill:a`
    background: var(--color-gray-300);
    color: var(--color-white-0);
    border-radius: 8px;
  `,clear:a`
    background: transparent;
  `,border:a`
    border: 1px solid;
    border-radius: 8px;
    border-color: var(--color-gray-300);
  `},i=d.button({display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"6px",transition:"all ease 0.2s",cursor:"pointer","&:active:not(:disabled)":{transform:"scale(0.97)"},"&:disabled":{opacity:.5,cursor:"not-allowed"}},({variant:e="fill"})=>_[e],({size:e="medium"})=>g[e]),t=({text:e,variant:l})=>r(y,{typography:"sub3",color:l==="border"||l==="clear"?"gray700":"white0",children:e}),x=d.div({display:"flex",alignItems:"center",justifyContent:"center"},({size:e})=>b[e]),u=({children:e,size:l="medium"})=>r(x,{size:l,children:e}),o=({configuration:e="label-icon",variant:l="border",size:s="medium",icon:c,iconSize:p,label:n,disabled:m,onClick:f})=>v(i,{variant:l,size:s,disabled:m,onClick:f,"aria-label":n,children:[r(u,{size:p,children:c}),e==="label-icon"&&n&&r(t,{text:n,variant:l})]});try{i.displayName="ButtonBase",i.__docgenInfo={description:"",displayName:"ButtonBase",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},variant:{defaultValue:{value:"border"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"clear"'},{value:'"border"'},{value:'"fill"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xlarge"'}]}},iconSize:{defaultValue:null,description:"",name:"iconSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xlarge"'}]}},configuration:{defaultValue:{value:"label-icon"},description:"",name:"configuration",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"label-icon"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((() => void) & MouseEventHandler<HTMLButtonElement>)"}}}}}catch{}try{t.displayName="Label",t.__docgenInfo={description:"",displayName:"Label",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"border"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"clear"'},{value:'"border"'},{value:'"fill"'}]}}}}}catch{}try{u.displayName="Icon",u.__docgenInfo={description:"",displayName:"Icon",props:{size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xlarge"'}]}}}}}catch{}try{o.displayName="IconButton",o.__docgenInfo={description:"",displayName:"IconButton",props:{variant:{defaultValue:{value:"border"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"clear"'},{value:'"border"'},{value:'"fill"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xlarge"'}]}},iconSize:{defaultValue:null,description:"",name:"iconSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xlarge"'}]}},configuration:{defaultValue:{value:"label-icon"},description:"",name:"configuration",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"label-icon"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{o as I};
