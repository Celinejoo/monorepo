import{s as o}from"./emotion-styled.browser.esm-C4boggRP.js";import{c as e}from"./emotion-react.browser.esm-Cemqn3pj.js";const n={small:e`
    font-size: var(--font-size-14);
    padding: 6px 12px;
    border-radius: 4px;
  `,medium:e`
    font-size: var(--font-size-16);
    padding: 8px 16px;
    border-radius: 8px;
  `,large:e`
    font-size: var(--font-size-18);
    padding: 12px 20px;
    border-radius: 12px;
  `,xlarge:e`
    font-size: var(--font-size-20);
    padding: 12px 20px;
    border-radius: 16px;
  `},r={primary:e`
    --button-color: 59, 130, 246;
    --button-bg-weak: 219, 234, 254;
    --button-text-color: 255, 255, 255;
  `,danger:e`
    --button-color: 239, 68, 68;
    --button-bg-weak: 254, 226, 226;
    --button-text-color: 255, 255, 255;
  `,light:e`
    --button-color: 249, 250, 251;
    --button-bg-weak: 219, 231, 235;
    --button-text-color: 59, 130, 246;
  `,dark:e`
    --button-color: 55, 65, 81;
    --button-bg-weak: 229, 231, 235;
    --button-text-color: 255, 255, 255;
  `,text:e`
    padding: 0 !important;
    background: none;
    --button-text-color: 107, 114, 128;
    &: hover {
      text-decoration: underline;
    }
  `},l={fill:e`
    background-color: rgb(var(--button-color));
    color: rgb(var(--button-text-color));
  `,weak:e`
    background-color: rgb(var(--button-bg-weak));
    color: rgb(var(--button-text-weak, var(--button-color)));
  `},a=o.button({justifyContent:"center",cursor:"pointer",border:"none",textAlign:"center",transition:"all ease 0.2s","&:active:not(:disabled)":{transform:"scale(0.97)"}},({display:t})=>t==="full"?e`
          width: 100%;
          justify-content: center;
        `:t==="block"?e`
            display: flex;
          `:e`
            display: inline-flex;
          `,({variant:t})=>l[t],({color:t})=>r[t],({size:t="medium"})=>n[t],({disabled:t})=>t?e`
          opacity: 0.5;
          cursor: not-allowed;
        `:void 0);try{a.displayName="Button",a.__docgenInfo={description:"",displayName:"Button",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"fill"'},{value:'"weak"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xlarge"'}]}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"full"'},{value:'"block"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{a as B};
