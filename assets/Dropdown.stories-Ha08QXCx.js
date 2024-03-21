import{j as e}from"./jsx-runtime-DQ32znRX.js";import{P as G,T as z}from"./main-D3JtRjG_.js";import{C as H}from"./Checkbox.ui-BwwbBIgG.js";import{T as J}from"./Toggle.ui-ZkDkqHm8.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const K="_root_11foy_1",M="_left_11foy_9",Q="_text_11foy_17",x={root:K,left:M,text:Q},y=({icon:a,iconEnd:s,isCheckbox:r,isSuccess:g,isToggle:l,cbCheckbox:o,cbToggle:i,placeholder:h="",active:b=!1,isActiveCheckbox:c=!1,isActiveToggle:v=!1})=>e.jsxs("div",{className:x.root,children:[e.jsxs("div",{className:x.left,children:[a&&!r&&a,!a&&r&&e.jsx(H,{selected:c,onClick:()=>o==null?void 0:o()}),e.jsx("span",{className:x.text,children:h})]}),s&&!l&&s,!s&&l&&e.jsx(J,{active:v,onClick:()=>i==null?void 0:i(),size:"sm"}),!s&&!l&&b&&g&&e.jsx(G,{width:18,height:18,color:"green"})]});try{y.displayName="PlaceholderDropdown",y.__docgenInfo={description:"",displayName:"PlaceholderDropdown",props:{placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},isCheckbox:{defaultValue:null,description:"",name:"isCheckbox",required:!1,type:{name:"boolean"}},isToggle:{defaultValue:null,description:"",name:"isToggle",required:!1,type:{name:"boolean"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"ReactNode"}},isSuccess:{defaultValue:null,description:"",name:"isSuccess",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},isActiveCheckbox:{defaultValue:{value:"false"},description:"",name:"isActiveCheckbox",required:!1,type:{name:"boolean"}},isActiveToggle:{defaultValue:{value:"false"},description:"",name:"isActiveToggle",required:!1,type:{name:"boolean"}},cbCheckbox:{defaultValue:null,description:"",name:"cbCheckbox",required:!1,type:{name:"(() => void)"}},cbToggle:{defaultValue:null,description:"",name:"cbToggle",required:!1,type:{name:"(() => void)"}}}}}catch{}const U="_root_8dxcq_1",X="_active_8dxcq_11",Y="_wrapper_8dxcq_19",Z="_dis_8dxcq_19",n={root:U,active:X,wrapper:Y,dis:Z},_=({icon:a,iconEnd:s,isCheckbox:r,isSuccess:g,isToggle:l,cbCheckbox:o,disabled:i=!1,cbToggle:h,placeholder:b,active:c=!1,isActiveCheckbox:v=!1,isActiveToggle:O=!1,...B})=>e.jsx("div",{className:`${n.wrapper} ${i&&n.dis}`,children:e.jsx("div",{...B,className:`${n.root} ${c&&n.active}`,children:e.jsx(y,{icon:a,placeholder:b,iconEnd:s,isCheckbox:r,isSuccess:g,isToggle:l,cbCheckbox:o,cbToggle:h,active:c,isActiveCheckbox:v,isActiveToggle:O})})});try{_.displayName="InputDropdown",_.__docgenInfo={description:"",displayName:"InputDropdown",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},isCheckbox:{defaultValue:null,description:"",name:"isCheckbox",required:!1,type:{name:"boolean"}},isToggle:{defaultValue:null,description:"",name:"isToggle",required:!1,type:{name:"boolean"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"ReactNode"}},isSuccess:{defaultValue:null,description:"",name:"isSuccess",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},isActiveCheckbox:{defaultValue:{value:"false"},description:"",name:"isActiveCheckbox",required:!1,type:{name:"boolean"}},isActiveToggle:{defaultValue:{value:"false"},description:"",name:"isActiveToggle",required:!1,type:{name:"boolean"}},cbCheckbox:{defaultValue:null,description:"",name:"cbCheckbox",required:!1,type:{name:"(() => void)"}},cbToggle:{defaultValue:null,description:"",name:"cbToggle",required:!1,type:{name:"(() => void)"}}}}}catch{}const V=a=>e.jsx("fieldset",{children:e.jsx(_,{...a})});try{V.displayName="Dropdown",V.__docgenInfo={description:"",displayName:"Dropdown",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},isCheckbox:{defaultValue:null,description:"",name:"isCheckbox",required:!1,type:{name:"boolean"}},isToggle:{defaultValue:null,description:"",name:"isToggle",required:!1,type:{name:"boolean"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"ReactNode"}},isSuccess:{defaultValue:null,description:"",name:"isSuccess",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},isActiveCheckbox:{defaultValue:null,description:"",name:"isActiveCheckbox",required:!1,type:{name:"boolean"}},isActiveToggle:{defaultValue:null,description:"",name:"isActiveToggle",required:!1,type:{name:"boolean"}},cbCheckbox:{defaultValue:null,description:"",name:"cbCheckbox",required:!1,type:{name:"(() => void)"}},cbToggle:{defaultValue:null,description:"",name:"cbToggle",required:!1,type:{name:"(() => void)"}}}}}catch{}const re={title:"Design System/Atoms/Dropdown",component:V,tags:["autodocs"],decorators:[a=>e.jsx("div",{style:{padding:20,background:"#1F1F24"},children:e.jsx(a,{})})],argTypes:{active:{defaultValue:!1,description:"Is active dropdown"},isSuccess:{defaultValue:!1,description:"Is success icon in dropdown"},isCheckbox:{defaultValue:!1,description:"Does the component have a checkbox?"},isToggle:{defaultValue:!1,description:"Does the component have a toggle?"},isActiveCheckbox:{defaultValue:!1,description:"Is active checkbox"},isActiveToggle:{defaultValue:!1,description:"Is active toggle"},disabled:{defaultValue:!1,description:"Dropdown is disabled"},icon:{description:"Icon in dropdown(start, before text)"},iconEnd:{description:"Icon in dropdown(end, after text)"},cbCheckbox:{description:"Function called when a checkbox is clicked"},cbToggle:{description:"Function called when a toggle is clicked"}}},t={args:{placeholder:"Placeholder",active:!1,isSuccess:!1,isToggle:!1,isCheckbox:!1}},d={args:{placeholder:"Placeholder",active:!0,isSuccess:!0,isToggle:!1,isCheckbox:!1}},u={args:{placeholder:"Placeholder",active:!1,isSuccess:!1,isToggle:!1,isCheckbox:!1,icon:e.jsx(z,{width:20,height:20})}},p={args:{placeholder:"Placeholder",active:!1,isSuccess:!1,isToggle:!0,isCheckbox:!1,isActiveToggle:!0}},f={args:{placeholder:"Placeholder",active:!1,isSuccess:!1,isToggle:!1,isCheckbox:!0,isActiveCheckbox:!0,iconEnd:e.jsx(z,{width:20,height:20})}},m={args:{placeholder:"Placeholder",disabled:!0}};var k,q,w;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    active: false,
    isSuccess: false,
    isToggle: false,
    isCheckbox: false
  }
}`,...(w=(q=t.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var C,T,D;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    active: true,
    isSuccess: true,
    isToggle: false,
    isCheckbox: false
  }
}`,...(D=(T=d.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var S,A,j;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    active: false,
    isSuccess: false,
    isToggle: false,
    isCheckbox: false,
    icon: <LeadIcon width={20} height={20} />
  }
}`,...(j=(A=u.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var N,I,P;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    active: false,
    isSuccess: false,
    isToggle: true,
    isCheckbox: false,
    isActiveToggle: true
  }
}`,...(P=(I=p.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var E,R,W;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    active: false,
    isSuccess: false,
    isToggle: false,
    isCheckbox: true,
    isActiveCheckbox: true,
    iconEnd: <LeadIcon width={20} height={20} />
  }
}`,...(W=(R=f.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var $,F,L;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    disabled: true
  }
}`,...(L=(F=m.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};const ce=["Default","DefaultActive","DropdownWithIcon","DropdownWithToggle","DropdownWithCheckbox","DropdownDisabled"];export{t as Default,d as DefaultActive,m as DropdownDisabled,f as DropdownWithCheckbox,u as DropdownWithIcon,p as DropdownWithToggle,ce as __namedExportsOrder,re as default};
