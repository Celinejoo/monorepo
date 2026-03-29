import{a as s,j as e}from"./emotion-react.browser.esm-Cemqn3pj.js";import{F as r}from"./FlexLayout-Bp14fDFF.js";import{C as n}from"./Card-DjJhoTu7.js";import"./index-ZKl5n0xc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bhc8sTDk.js";import"./emotion-styled.browser.esm-C4boggRP.js";import"./extends-CF3RwP-h.js";import"./generateBackground-bMX2-9Lq.js";import"./index.esm-Dozb0q9Q.js";const C={title:"Layout/Flex",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"`Flex` 컴포넌트는 flex 형태로 `Flex.Item` 컴포넌트들을 배치하는 컴포넌트에요."}}},argTypes:{direction:{control:"select",description:"flex 방향을 결정합니다.",options:["row","column","row-reverse","column-reverse"]},wrap:{control:"select",description:"flex 줄바꿈 여부를 설정합니다.",options:["nowrap","wrap","wrap-reverse"]},alignItems:{control:"select",description:"교차축 정렬을 설정합니다.",options:["stretch","flex-start","center","flex-end","baseline"]},justifyContent:{control:"select",description:"주축 정렬을 설정합니다.",options:["flex-start","center","flex-end","space-between","space-around","space-evenly"]},gap:{control:{type:"number",min:0,step:4},description:"아이템 사이 간격(px)"},children:{control:!1}},args:{direction:"row",wrap:"nowrap",alignItems:"center",justifyContent:"center",gap:8}},t={render:o=>s(r,{...o,children:[e(r.Item,{children:e(n,{children:"아이템1"})}),e(r.Item,{children:e(n,{children:"아이템2"})}),e(r.Item,{children:e(n,{children:"아이템3"})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Flex {...args}>
      <Flex.Item>
        <Card>아이템1</Card>
      </Flex.Item>
      <Flex.Item>
        <Card>아이템2</Card>
      </Flex.Item>
      <Flex.Item>
        <Card>아이템3</Card>
      </Flex.Item>
    </Flex>
}`,...t.parameters?.docs?.source}}};const f=["Overview"];export{t as Overview,f as __namedExportsOrder,C as default};
