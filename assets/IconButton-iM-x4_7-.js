import{c as a,a as y,j as r}from"./emotion-react.browser.esm-Cemqn3pj.js";import{s as d}from"./emotion-styled.browser.esm-C4boggRP.js";import{P as g}from"./Paragraph-CIJKptAx.js";const b={small:a`
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
  `},_={small:a`
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
  `},x={fill:a`
    background: var(--color-gray-300);
    color: var(--color-white-0);
    border-radius: 8px;
  `,clear:a`
    background: transparent;
  `,border:a`
    border: 1px solid;
    border-radius: 8px;
    border-color: var(--color-gray-300);
  `},n=d.button({display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"6px",transition:"all ease 0.2s",cursor:"pointer","&:active:not(:disabled)":{transform:"scale(0.97)"},"&:disabled":{opacity:.5,cursor:"not-allowed"}},({variant:e="fill"})=>x[e],({size:e="medium"})=>b[e]),i=({text:e,variant:l})=>r(g,{typography:"sub3",color:l==="border"||l==="clear"?"gray700":"white0",children:e}),h=d.div({display:"flex",alignItems:"center",justifyContent:"center"},({size:e})=>_[e]),t=({children:e,size:l="medium"})=>r(h,{size:l,children:e}),o=({configuration:e="label-icon",variant:l="border",size:s="medium",icon:c,iconSize:p,label:u,disabled:m,ariaLabel:f,onClick:v})=>y(n,{variant:l,size:s,disabled:m,onClick:v,"aria-label":f,children:[r(t,{size:p,children:c}),e==="label-icon"&&u&&r(i,{text:u,variant:l})]});try{n.displayName="ButtonBase",n.__docgenInfo={description:"",displayName:"ButtonBase",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},variant:{defaultValue:{value:"border"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"clear"'},{value:'"border"'},{value:'"fill"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"xlarge"'}]}},iconSize:{defaultValue:null,description:"",name:"iconSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"xlarge"'}]}},configuration:{defaultValue:{value:"label-icon"},description:"",name:"configuration",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"label-icon"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((() => void) & MouseEventHandler<HTMLButtonElement>)"}}}}}catch{}try{i.displayName="Label",i.__docgenInfo={description:"",displayName:"Label",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:{value:"border"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"clear"'},{value:'"border"'},{value:'"fill"'}]}}}}}catch{}try{t.displayName="Icon",t.__docgenInfo={description:"",displayName:"Icon",props:{size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"xlarge"'}]}}}}}catch{}try{o.displayName="IconButton",o.__docgenInfo={description:"",displayName:"IconButton",props:{variant:{defaultValue:{value:"border"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"clear"'},{value:'"border"'},{value:'"fill"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"xlarge"'}]}},iconSize:{defaultValue:null,description:"",name:"iconSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"xlarge"'}]}},configuration:{defaultValue:{value:"label-icon"},description:"",name:"configuration",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"label-icon"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{o as I};
