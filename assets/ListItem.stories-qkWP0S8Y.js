import{a as i,j as e,F as m,c as l}from"./emotion-react.browser.esm-Cemqn3pj.js";import{s as h}from"./emotion-styled.browser.esm-C4boggRP.js";import{P as a}from"./Paragraph-sStRRx8F.js";import{F as o}from"./FlexLayout-ZaZjuELa.js";import{B as y}from"./Border-E1DlRLSq.js";import{B as d}from"./Badge-BwZcwV8N.js";import"./index-ZKl5n0xc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bhc8sTDk.js";import"./extends-CF3RwP-h.js";import"./index.esm-Dozb0q9Q.js";import"./generateBackground-bMX2-9Lq.js";const L=h.div({display:"flex",flexDirection:"row",alignItems:"center",gap:"8px"},({gap:n=24})=>n&&l`
      gap: 0 ${n}px;
    `,({padding:n=24})=>n&&l`
      padding: 0 ${n}px;
    `,({margin:n})=>n&&l`
      margin: ${n}px 0;
    `),C=({onClick:n,as:t,children:g,showDivider:p,padding:u,margin:c})=>i(m,{children:[e(L,{onClick:n,as:t,showDivider:p,padding:u,margin:c,children:g}),p&&e(y,{varient:"padding24"})]}),b=({children:n})=>e("div",{children:n}),f=({children:n})=>e("div",{style:{marginLeft:"auto"},children:n}),v=({title:n,subtitle:t})=>i(o,{direction:"column",gap:4,children:[e(o.Item,{children:e(a,{typography:"sub2",fontWeight:"bold",children:n})}),t&&e(o.Item,{children:e(a,{typography:"sub3",children:t})})]}),r=Object.assign(C,{Leading:b,Contents:v,Trailing:f});try{r.displayName="List",r.__docgenInfo={description:"",displayName:"List",props:{showDivider:{defaultValue:null,description:"",name:"showDivider",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"li"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"16"'},{value:'"24"'}]}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"number"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}}}}}catch{}const V={title:"Components/ListItem",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"`List` 컴포넌트는 `Leading`, `Contents`, `Trailing` 영역으로 구성된 리스트 아이템 컴포넌트입니다."}}},argTypes:{as:{control:"radio",options:["div","li"],description:"렌더링할 HTML 요소를 지정합니다."},showDivider:{control:"boolean",description:"하단 구분선 표시 여부를 설정합니다."},padding:{control:"text",description:"내부 여백 값을 설정합니다."},margin:{control:{type:"number"},description:"바깥 여백 값을 설정합니다."},gap:{control:{type:"number"},description:"내부 영역 사이 간격을 설정합니다."},children:{control:!1}},args:{as:"li",showDivider:!0,padding:"24",margin:16,gap:12}},s={render:n=>i("ul",{style:{listStyle:"none",padding:0,margin:0},children:[i(r,{...n,children:[e(r.Leading,{children:e(a,{typography:"sub1",children:"1"})}),e(r.Contents,{title:"첫 번째 아이템",subtitle:"2026.03.24"}),e(r.Trailing,{children:e(d,{size:"small",background:"green500",children:e(a,{color:"green100",typography:"sub4",children:"완료"})})})]}),i(r,{...n,children:[e(r.Leading,{children:e(a,{typography:"sub1",children:"2"})}),e(r.Contents,{title:"두 번째 아이템",subtitle:"2026.03.25"}),e(r.Trailing,{children:e(d,{size:"small",background:"green500",children:e(a,{color:"green100",typography:"sub4",children:"진행중"})})})]}),i(r,{padding:"24",margin:16,gap:12,as:"li",children:[e(r.Leading,{children:e(a,{typography:"sub1",children:"3"})}),e(r.Contents,{title:"세 번째 아이템",subtitle:"2026.03.26"}),e(r.Trailing,{children:e(d,{size:"small",background:"green500",children:e(a,{color:"green100",typography:"sub4",children:"대기중"})})})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <ul style={{
    listStyle: "none",
    padding: 0,
    margin: 0
  }}>
      <List {...args}>
        <List.Leading>
          <Paragraph typography="sub1">1</Paragraph>
        </List.Leading>
        <List.Contents title="첫 번째 아이템" subtitle="2026.03.24" />
        <List.Trailing>
          <Badge size="small" background="green500">
            <Paragraph color="green100" typography="sub4">
              완료
            </Paragraph>
          </Badge>
        </List.Trailing>
      </List>
      <List {...args}>
        <List.Leading>
          <Paragraph typography="sub1">2</Paragraph>
        </List.Leading>
        <List.Contents title="두 번째 아이템" subtitle="2026.03.25" />
        <List.Trailing>
          <Badge size="small" background="green500">
            <Paragraph color="green100" typography="sub4">
              진행중
            </Paragraph>
          </Badge>
        </List.Trailing>
      </List>
      <List padding="24" margin={16} gap={12} as="li">
        <List.Leading>
          <Paragraph typography="sub1">3</Paragraph>
        </List.Leading>
        <List.Contents title="세 번째 아이템" subtitle="2026.03.26" />
        <List.Trailing>
          <Badge size="small" background="green500">
            <Paragraph color="green100" typography="sub4">
              대기중
            </Paragraph>
          </Badge>
        </List.Trailing>
      </List>
    </ul>
}`,...s.parameters?.docs?.source}}};const I=["Overview"];export{s as Overview,I as __namedExportsOrder,V as default};
