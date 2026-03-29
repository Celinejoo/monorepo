import{j as e,a as F,F as u,c as g}from"./emotion-react.browser.esm-Cemqn3pj.js";import{s as C}from"./emotion-styled.browser.esm-C4boggRP.js";import{r as h}from"./index-ZKl5n0xc.js";import{F as s}from"./FlexLayout-ZaZjuELa.js";import{P as x}from"./Paragraph-sStRRx8F.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bhc8sTDk.js";import"./extends-CF3RwP-h.js";import"./index.esm-Dozb0q9Q.js";const T=C.input`
  font-size: var(--font-size-16);
  height: 40px;
  width: 100%;

  &:focus {
    outline: none;
  }

  ${({variant:r="outlined",error:a})=>r==="outlined"?g`
      border:none;
      border-bottom: 1px solid var(--color-gray-400);

      &:focus {
        border-bottom: 1px solid;
        border-bottom-color: ${a?"var(--color-red-500)":"var(--color-blue-500)"};
    `:g`
          border: 1px solid var(--color-gray-400);
          border-radius: 8px;
          padding:8px;

          &:focus {
            border: 1px solid;
            border-color: ${a?"var(--color-red-500)":"var(--color-blue-500)"};
        `}
`,B=({children:r,isFocused:a,error:o})=>e(x,{typography:"sub3",color:o?"red500":a?"blue500":"gray500",as:"label",children:r}),I=({children:r,error:a})=>e(x,{typography:"sub3",color:a?"red500":"blue500",children:r}),l=({label:r,id:a,error:o,helperText:m,variant:t,...f})=>{const v=a??h.useId(),[y,b]=h.useState(!1);return e(u,{children:F(s,{direction:"column",gap:4,children:[e(s.Item,{children:r&&e(B,{error:o,isFocused:y,children:r})}),e(s.Item,{children:e(T,{variant:t,id:v,error:o,"aria-invalid":o,onFocus:()=>b(!0),onBlur:()=>b(!1),...f})}),o&&e(s.Item,{children:m&&e(I,{error:o,children:m})})]})})};try{l.displayName="TextField",l.__docgenInfo={description:"",displayName:"TextField",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"filled"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}}}}}catch{}const M={title:"Components/TextField",component:l,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"input 컴포넌트"}}},args:{variant:"outlined",label:"label",error:!1,helperText:"helperText"},argTypes:{variant:{control:"radio",description:"input 모양을 결정합니다.",options:["outlined","filled"]},error:{control:"boolean"},label:{description:"input label을 입력합니다."},helperText:{description:"error가 발생했을 때 텍스트가 나옵니다."}}},n={render:r=>e(l,{...r,type:"password",placeholder:"placeholder"})},d={render:()=>e(u,{children:e(l,{label:"label",variant:"filled",type:"password",placeholder:"placeholder",error:!1})})},i={render:()=>e(u,{children:e(l,{label:"label",variant:"outlined",type:"password",placeholder:"placeholder",error:!1})})},c=()=>{const[r,a]=h.useState("");return e(u,{children:e(l,{variant:"outlined",label:"비밀번호",type:"password",placeholder:"placeholder",error:(t=>t.length>2)(r),helperText:"3글자 미만으로 입력해주세요.",value:r,onChange:t=>a(t.target.value)})})},p=()=>e("p",{children:" leading Icon, trailing Icon 추가"});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <TextField {...args} type="password" placeholder="placeholder" />
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <TextField label="label" variant="filled" type="password" placeholder="placeholder" error={false} />
    </>
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <TextField label="label" variant="outlined" type="password" placeholder="placeholder" error={false} />
    </>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [boxValue, setBoxValue] = useState("");
  const errorMessage = "3글자 미만으로 입력해주세요.";
  const handleError = (value: string) => {
    return value.length > 2;
  };
  return <>
      <TextField variant="outlined" label="비밀번호" type="password" placeholder="placeholder" error={handleError(boxValue)} helperText={errorMessage} value={boxValue} onChange={e => setBoxValue(e.target.value)} />
    </>;
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"() => <p> leading Icon, trailing Icon 추가</p>",...p.parameters?.docs?.source}}};const j=["Default","Filled","Outlined","Error","TODO"];export{n as Default,c as Error,d as Filled,i as Outlined,p as TODO,j as __namedExportsOrder,M as default};
