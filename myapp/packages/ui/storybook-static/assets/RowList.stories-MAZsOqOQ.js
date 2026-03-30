import{j as e,a as c}from"./emotion-react.browser.esm-Cemqn3pj.js";import{s as d}from"./emotion-styled.browser.esm-C4boggRP.js";import{F as y}from"./FlexLayout-BHGbT5-H.js";import{P as n}from"./Paragraph-BwzewXIu.js";import{B as l}from"./Badge-BwZcwV8N.js";import"./index-ZKl5n0xc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bhc8sTDk.js";import"./extends-CF3RwP-h.js";import"./index.esm-Dozb0q9Q.js";import"./generateBackground-bMX2-9Lq.js";const r=({left:t,right:a,contents:g,withArrow:p,onClick:C,as:h="li"})=>e(m,{as:h,onClick:C,children:c(y,{alignItems:"center",gap:8,children:[t&&t,g,a&&a,p?e(f,{}):null]})}),m=d.div`
  padding: 8px 24px;
`,w=d.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 4px;
`;function B({title:t,subTitle:a}){return c(w,{children:[e(n,{typography:"sub1",fontWeight:"semibold",children:t}),a&&e(n,{typography:"sub2",children:a})]})}function f(){return e("svg",{id:"Layer_1",version:"1.1",viewBox:"0 0 64 64",width:24,height:24,xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",children:e("g",{children:e("g",{id:"Icon-Chevron-Left",transform:"translate(237.000000, 335.000000)",children:e("polyline",{className:"st0",id:"Fill-35",points:"-210.9,-289 -212.9,-291 -201.1,-302.7 -212.9,-314.4 -210.9,-316.4 -197.1,-302.7      -210.9,-289    "})})})})}r.Texts=B;try{r.displayName="RowList",r.__docgenInfo={description:"",displayName:"RowList",props:{left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ReactNode"}},contents:{defaultValue:null,description:"",name:"contents",required:!0,type:{name:"ReactNode"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ReactNode"}},withArrow:{defaultValue:null,description:"",name:"withArrow",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},as:{defaultValue:{value:"li"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"li"'}]}}}}}catch{}try{r.Texts.displayName="RowList.Texts",r.Texts.__docgenInfo={description:"",displayName:"RowList.Texts",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"ReactNode"}}}}}catch{}const v={title:"Components/RowList",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"`RowList` 컴포넌트는 좌측 요소, 텍스트 영역, 우측 요소를 한 줄로 배치하는 리스트 아이템 컴포넌트입니다."}}},argTypes:{left:{control:!1,description:"좌측에 렌더링할 요소입니다."},contents:{control:!1,description:"중앙 텍스트 영역입니다. 보통 `RowList.Texts`를 사용합니다."},right:{control:!1,description:"우측에 렌더링할 요소입니다."},withArrow:{control:"boolean",description:"우측 화살표 표시 여부를 설정합니다."}},args:{withArrow:!0}},o={render:t=>c("ul",{style:{listStyle:"none",padding:0,margin:0},children:[e(r,{...t,left:e(l,{background:"green500",size:"large",children:e(n,{color:"green100",typography:"sub4",children:"태그"})}),contents:e(r.Texts,{title:"내 자산"}),right:e(n,{color:"gray400",typography:"sub4",children:"계좌 대출 증권 카드 포인트"}),withArrow:!0}),e(r,{left:e(l,{background:"green500",size:"large",children:e(n,{color:"green100",typography:"sub4",children:"태그"})}),contents:e(r.Texts,{title:"일상",subTitle:"내 일상을 소개합니다."}),right:e(n,{color:"gray400",typography:"sub4",children:"집 취미 여행 반려동물"}),withArrow:!0}),e(r,{contents:e(r.Texts,{title:"제목만 사용하기"}),withArrow:!0}),e(r,{contents:e(r.Texts,{title:"assets 사용해서 arrow 변경도 해야될 거 같음ㅠ"}),withArrow:!0})]})},s={render:t=>e("ul",{style:{listStyle:"none",padding:0,margin:0},children:e(r,{...t,left:e(l,{background:"green500",size:"large",children:e(n,{color:"green100",typography:"sub4",children:"태그"})}),contents:e(r.Texts,{title:"일상",subTitle:"내 일상을 소개합니다."}),right:e(n,{color:"gray400",typography:"sub4",children:"집 취미 여행 반려동물"})})})},i={render:t=>e("ul",{style:{listStyle:"none",padding:0,margin:0},children:e(r,{...t,contents:e(r.Texts,{title:"제목만 사용하기"})})})},u={args:{withArrow:!1},render:t=>e("ul",{style:{listStyle:"none",padding:0,margin:0},children:e(r,{...t,left:e(l,{background:"green500",size:"large",children:e(n,{color:"green100",typography:"sub4",children:"태그"})}),contents:e(r.Texts,{title:"화살표 없이 사용하기",subTitle:"옵션 예시"}),right:e(n,{color:"gray400",typography:"sub4",children:"보조 텍스트"})})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <ul style={{
    listStyle: "none",
    padding: 0,
    margin: 0
  }}>
      <RowList {...args} left={<Badge background="green500" size="large">
            <Paragraph color="green100" typography="sub4">
              태그
            </Paragraph>
          </Badge>} contents={<RowList.Texts title="내 자산" />} right={<Paragraph color="gray400" typography="sub4">
            계좌 대출 증권 카드 포인트
          </Paragraph>} withArrow />
      <RowList left={<Badge background="green500" size="large">
            <Paragraph color="green100" typography="sub4">
              태그
            </Paragraph>
          </Badge>} contents={<RowList.Texts title="일상" subTitle="내 일상을 소개합니다." />} right={<Paragraph color="gray400" typography="sub4">
            집 취미 여행 반려동물
          </Paragraph>} withArrow />
      <RowList contents={<RowList.Texts title="제목만 사용하기" />} withArrow />
      <RowList contents={<RowList.Texts title="assets 사용해서 arrow 변경도 해야될 거 같음ㅠ" />} withArrow />
    </ul>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <ul style={{
    listStyle: "none",
    padding: 0,
    margin: 0
  }}>
      <RowList {...args} left={<Badge background="green500" size="large">
            <Paragraph color="green100" typography="sub4">
              태그
            </Paragraph>
          </Badge>} contents={<RowList.Texts title="일상" subTitle="내 일상을 소개합니다." />} right={<Paragraph color="gray400" typography="sub4">
            집 취미 여행 반려동물
          </Paragraph>} />
    </ul>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <ul style={{
    listStyle: "none",
    padding: 0,
    margin: 0
  }}>
      <RowList {...args} contents={<RowList.Texts title="제목만 사용하기" />} />
    </ul>
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    withArrow: false
  },
  render: args => <ul style={{
    listStyle: "none",
    padding: 0,
    margin: 0
  }}>
      <RowList {...args} left={<Badge background="green500" size="large">
            <Paragraph color="green100" typography="sub4">
              태그
            </Paragraph>
          </Badge>} contents={<RowList.Texts title="화살표 없이 사용하기" subTitle="옵션 예시" />} right={<Paragraph color="gray400" typography="sub4">
            보조 텍스트
          </Paragraph>} />
    </ul>
}`,...u.parameters?.docs?.source}}};const E=["Default","WithSubtitle","WithoutSubtitle","WithoutArrow"];export{o as Default,s as WithSubtitle,u as WithoutArrow,i as WithoutSubtitle,E as __namedExportsOrder,v as default};
