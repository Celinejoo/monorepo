import{a as n,j as e}from"./emotion-react.browser.esm-Cemqn3pj.js";import{C as r}from"./Card-FoZcSBPz.js";import"./index-ZKl5n0xc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bhc8sTDk.js";import"./emotion-styled.browser.esm-C4boggRP.js";import"./extends-CF3RwP-h.js";import"./generateBackground-bMX2-9Lq.js";import"./index.esm-Dozb0q9Q.js";const g={title:"Components/Card",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked",description:"actions 패널에서 확인 가능합니다."},as:{control:"radio",description:"카드의 HTML 태그를 변경합니다.",options:["div","li"]},outlined:{control:"boolean",description:"border 유무를 선택합니다."},background:{control:"select",description:"카드의 배경 색을 결정합니다. border 컬러 변경이 지원 되지 않아 outlined false 해주세요.",options:["gray100","gray200","gray300","gray400","white"]},children:{control:!1}},args:{as:"div",outlined:!1,background:"gray100"}},d={render:a=>n(r,{...a,children:[e(r.Header,{children:"카드 헤더"}),e(r.Contents,{children:"기본 카드 콘텐츠입니다."})]})},C={args:{outlined:!0},render:a=>n(r,{...a,children:[e(r.Header,{children:"Outlined Card"}),e(r.Contents,{children:"outlined 옵션이 적용된 카드입니다."})]})},s={render:a=>n(r,{...a,children:[e(r.Header,{children:"클릭 여부의 확인"}),e(r.Contents,{children:"클릭하면 Actions 패널에서 이벤트를 확인할 수 있습니다."})]})},t={args:{as:"li"},render:a=>n("ul",{children:[n(r,{...a,children:[e(r.Header,{children:"List Item Card"}),e(r.Contents,{children:'as="li"로 렌더링한 예시입니다.'})]}),e("div",{style:{marginTop:"8px"}}),n(r,{...a,children:[e(r.Header,{children:"List Item Card"}),e(r.Contents,{children:'as="li"로 렌더링한 예시입니다.'})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <Card.Header>카드 헤더</Card.Header>
      <Card.Contents>기본 카드 콘텐츠입니다.</Card.Contents>
    </Card>
}`,...d.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    outlined: true
  },
  render: args => <Card {...args}>
      <Card.Header>Outlined Card</Card.Header>
      <Card.Contents>outlined 옵션이 적용된 카드입니다.</Card.Contents>
    </Card>
}`,...C.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <Card.Header>클릭 여부의 확인</Card.Header>
      <Card.Contents>
        클릭하면 Actions 패널에서 이벤트를 확인할 수 있습니다.
      </Card.Contents>
    </Card>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    as: "li"
  },
  render: args => <ul>
      <Card {...args}>
        <Card.Header>List Item Card</Card.Header>
        <Card.Contents>as="li"로 렌더링한 예시입니다.</Card.Contents>
      </Card>
      <div style={{
      marginTop: "8px"
    }}></div>
      <Card {...args}>
        <Card.Header>List Item Card</Card.Header>
        <Card.Contents>as="li"로 렌더링한 예시입니다.</Card.Contents>
      </Card>
    </ul>
}`,...t.parameters?.docs?.source}}};const D=["Overview","Outlined","Clickable","ListCard"];export{s as Clickable,t as ListCard,C as Outlined,d as Overview,D as __namedExportsOrder,g as default};
