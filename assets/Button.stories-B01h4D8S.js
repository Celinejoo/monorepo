import{a as i,j as e}from"./emotion-react.browser.esm-Cemqn3pj.js";import{B as r}from"./Button-0zQvdxKb.js";import{F as a}from"./FlexLayout-DN_BzhbP.js";import"./index-ZKl5n0xc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bhc8sTDk.js";import"./emotion-styled.browser.esm-C4boggRP.js";import"./extends-CF3RwP-h.js";const v={title:"Components/Button",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"어떤 기능이나 동작을 실행하거나 기능을 사용하기 위한 상태로 변경하는 요소"}}},args:{children:"버튼",variant:"fill",color:"primary",size:"medium",disabled:!1,display:"inline"},argTypes:{variant:{control:{type:"radio"},description:"버튼의 배경 농도를 결정합니다.",options:["fill","weak"]},size:{control:{type:"radio"},description:"버튼의 사이즈를 결정합니다.",options:["small","medium","large","xlarge"]},color:{control:{type:"radio"},description:"버튼의 컬러를 결정합니다.",options:["primary","danger","light","dark","text"]},display:{control:{type:"radio"},description:"버튼의 형태를 변경합니다.",options:["block","inline","full"]},disabled:{control:"boolean",description:"버튼의 비활성화 상태를 나태닙니다."}}},n={args:{children:"버튼",variant:"fill",color:"primary",size:"medium",disabled:!1,display:"inline"}},o={name:"Color",render:()=>i(a,{gap:8,children:[e(r,{color:"primary",variant:"fill",size:"medium",children:"버튼"}),e(r,{color:"danger",variant:"fill",size:"medium",children:"버튼"}),e(r,{color:"light",variant:"fill",size:"medium",children:"버튼"}),e(r,{color:"dark",variant:"fill",size:"medium",children:"버튼"}),e(r,{color:"text",variant:"fill",size:"medium",children:"버튼"})]})},l={render:()=>i(a,{gap:8,children:[e(r,{color:"primary",variant:"fill",size:"medium",children:"버튼"}),e(r,{color:"primary",variant:"weak",size:"medium",children:"버튼"})]})},t={render:()=>i(a,{gap:8,alignItems:"center",children:[e(r,{color:"primary",variant:"fill",size:"small",children:"버튼"}),e(r,{color:"primary",variant:"weak",size:"medium",children:"버튼"}),e(r,{color:"primary",variant:"weak",size:"large",children:"버튼"}),e(r,{color:"primary",variant:"weak",size:"xlarge",children:"버튼"})]})},s={render:()=>i(a,{direction:"column",gap:8,alignItems:"center",children:[e(r,{color:"primary",variant:"fill",size:"medium",display:"inline",children:"버튼"}),e(r,{color:"primary",variant:"fill",size:"medium",display:"block",children:"버튼"}),e(r,{color:"primary",variant:"weak",size:"large",display:"full",children:"버튼"})]})},d={render:()=>i(a,{direction:"column",gap:8,alignItems:"center",children:[e(r,{color:"primary",variant:"fill",size:"medium",display:"inline",disabled:!0,children:"버튼"}),e(r,{color:"primary",variant:"fill",size:"medium",display:"block",disabled:!0,children:"버튼"}),e(r,{color:"primary",variant:"weak",size:"large",display:"full",disabled:!0,children:"버튼"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "버튼",
    variant: "fill",
    color: "primary",
    size: "medium",
    disabled: false,
    display: "inline"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Color",
  render: () => <Flex gap={8}>
      <Button color="primary" variant="fill" size="medium">
        버튼
      </Button>
      <Button color="danger" variant="fill" size="medium">
        버튼
      </Button>
      <Button color="light" variant="fill" size="medium">
        버튼
      </Button>
      <Button color="dark" variant="fill" size="medium">
        버튼
      </Button>
      <Button color="text" variant="fill" size="medium">
        버튼
      </Button>
    </Flex>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap={8}>
      <Button color="primary" variant="fill" size="medium">
        버튼
      </Button>
      <Button color="primary" variant="weak" size="medium">
        버튼
      </Button>
    </Flex>
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap={8} alignItems="center">
      <Button color="primary" variant="fill" size="small">
        버튼
      </Button>
      <Button color="primary" variant="weak" size="medium">
        버튼
      </Button>
      <Button color="primary" variant="weak" size="large">
        버튼
      </Button>
      <Button color="primary" variant="weak" size="xlarge">
        버튼
      </Button>
    </Flex>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap={8} alignItems="center">
      <Button color="primary" variant="fill" size="medium" display="inline">
        버튼
      </Button>
      <Button color="primary" variant="fill" size="medium" display="block">
        버튼
      </Button>

      <Button color="primary" variant="weak" size="large" display="full">
        버튼
      </Button>
    </Flex>
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap={8} alignItems="center">
      <Button color="primary" variant="fill" size="medium" display="inline" disabled>
        버튼
      </Button>
      <Button color="primary" variant="fill" size="medium" display="block" disabled>
        버튼
      </Button>

      <Button color="primary" variant="weak" size="large" display="full" disabled>
        버튼
      </Button>
    </Flex>
}`,...d.parameters?.docs?.source}}};const z=["Overview","color","Variant","Size","Display","Disabled"];export{d as Disabled,s as Display,n as Overview,t as Size,l as Variant,z as __namedExportsOrder,o as color,v as default};
