import{j as d}from"./jsx-runtime-DQ32znRX.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const k="_root_1nnqh_1",C="_selected_1nnqh_6",y="_dis_1nnqh_10",x="_dot_1nnqh_14",s={root:k,selected:C,dis:y,dot:x},r=({selected:e,disabled:g=!1,onClick:b})=>d.jsx("div",{"data-testid":"radio",onClick:()=>b(),className:`${s.root} ${e&&s.selected} ${g&&s.dis}`,children:e&&d.jsx("div",{className:s.dot})});try{r.displayName="Radio",r.__docgenInfo={description:"",displayName:"Radio",props:{selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const R={title:"Design System/Atoms/SmallComponents/Radio",component:r,tags:["autodocs"],argTypes:{selected:{defaultValue:!1,description:"Radio is selected?"},disabled:{defaultValue:!1,description:"Radio is disabled"},onClick:{description:"Function click on component"}},decorators:[e=>d.jsx("div",{style:{padding:20,background:"#1F1F24"},children:d.jsx(e,{})})]},a={args:{selected:!1,onClick:()=>{},disabled:!1}},o={args:{selected:!0,onClick:()=>{},disabled:!1}},t={args:{selected:!1,onClick:()=>{},disabled:!0}};var n,c,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    selected: false,
    onClick: () => {},
    disabled: false
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,p,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    selected: true,
    onClick: () => {},
    disabled: false
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,_,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    selected: false,
    onClick: () => {},
    disabled: true
  }
}`,...(f=(_=t.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};const j=["Basic","Active","Disabled"];export{o as Active,a as Basic,t as Disabled,j as __namedExportsOrder,R as default};
