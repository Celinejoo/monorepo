import{s as p}from"./emotion-styled.browser.esm-C4boggRP.js";import{c as a}from"./emotion-react.browser.esm-Cemqn3pj.js";import{b as r,h as u,l as m}from"./index.esm-Dozb0q9Q.js";const d={t1:u.t1,t2:u.t2,t3:u.t3,t4:u.t4,sub1:r.sub1,sub2:r.sub2,sub3:r.sub3,sub4:r.sub4},v={light:a`
    font-weight: var(--font-weight-light);
  `,regular:a`
    font-weight: var(--font-weight-regular);
  `,medium:a`
    font-weight: var(--font-weight-medium);
  `,semibold:a`
    font-weight: var(--font-weight-semibold);
  `,bold:a`
    font-weight: var(--font-weight-bold);
  `},c=e=>{const t={};for(const l in e){const n=e[l];if(typeof n=="object"&&n!==null)for(const i in n){const s=`${l}${i}`;t[s]=a`
          color: var(--color-${l}-${i});
        `}else t[l]=a`
        color: var(--color-${l});
      `}return t},f=c(m),o=p.p({margin:0,whiteSpace:"pre-line"},({typography:e="sub2"})=>d[e],({fontWeight:e="regular"})=>v[e],({color:e="gray700"})=>f[e],({display:e,textAlign:t})=>({display:e,textAlign:t}));try{o.displayName="Paragraph",o.__docgenInfo={description:"",displayName:"Paragraph",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},typography:{defaultValue:null,description:"",name:"typography",required:!0,type:{name:"enum",value:[{value:'"t1"'},{value:'"t2"'},{value:'"t3"'},{value:'"t4"'},{value:'"sub1"'},{value:'"sub2"'},{value:'"sub3"'},{value:'"sub4"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"medium"'},{value:'"regular"'},{value:'"semibold"'},{value:'"bold"'}]}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"Display"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"end"'},{value:'"start"'},{value:'"-webkit-match-parent"'},{value:'"justify"'},{value:'"match-parent"'}]}}}}}catch{}export{o as P};
