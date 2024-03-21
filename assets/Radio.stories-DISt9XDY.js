import{j as d}from"./jsx-runtime-DQ32znRX.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const b="_root_14iuk_1",C="_selected_14iuk_11",y="_dis_14iuk_19",x="_dot_14iuk_27",s={root:b,selected:C,dis:y,dot:x},r=({selected:e,disabled:g=!1,onClick:k})=>d.jsx("div",{"data-testid":"radio",onClick:()=>k(),className:`${s.root} ${e&&s.selected} ${g&&s.dis}`,children:e&&d.jsx("div",{className:s.dot})});try{r.displayName="Radio",r.__docgenInfo={description:"",displayName:"Radio",props:{selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const S={title:"Design System/Atoms/SmallComponents/Radio",component:r,tags:["autodocs"],argTypes:{selected:{defaultValue:!1,description:"Radio is selected?"},disabled:{defaultValue:!1,description:"Radio is disabled"},onClick:{description:"Function click on component"}},decorators:[e=>d.jsx("div",{style:{padding:20,background:"#1F1F24"},children:d.jsx(e,{})})]},a={args:{selected:!1,onClick:()=>{},disabled:!1}},o={args:{selected:!0,onClick:()=>{},disabled:!1}},t={args:{selected:!1,onClick:()=>{},disabled:!0}};var i,c,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    selected: false,
    onClick: () => {},
    disabled: false
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var n,u,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    selected: true,
    onClick: () => {},
    disabled: false
  }
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,_,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    selected: false,
    onClick: () => {},
    disabled: true
  }
}`,...(f=(_=t.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};const V=["Basic","Active","Disabled"];export{o as Active,a as Basic,t as Disabled,V as __namedExportsOrder,S as default};
