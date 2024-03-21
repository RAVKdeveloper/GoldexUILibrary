import{j as L}from"./jsx-runtime-DQ32znRX.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const z="_root_7epo1_1",A="_lg_7epo1_13",S="_sm_7epo1_21",V="_active_7epo1_29",q="_dis_7epo1_37",e={root:z,lg:A,sm:S,active:V,dis:q},o=({sizeType:i="lg",isActive:v=!1,disabled:y=!1,text:x})=>L.jsx("div",{className:`
         ${e.root}
         ${e[i]}
         ${v&&e.active}
         ${y&&e.dis}
        `,children:x});try{o.displayName="Tab",o.__docgenInfo={description:"",displayName:"Tab",props:{sizeType:{defaultValue:{value:"lg"},description:"",name:"sizeType",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}}}catch{}const D={title:"Design System/Atoms/Tab",component:o,tags:["autodocs"],argTypes:{text:{defaultValue:"Label",description:"Text in Tab component"},isActive:{defaultValue:!1,description:"Tab is active"},sizeType:{defaultValue:"lg",description:"Size Tab component",controls:{type:"radio"}},disabled:{defaultValue:!1,description:"Component is disabled"}}},a={args:{text:"Label",sizeType:"lg"}},s={args:{text:"Label",sizeType:"sm"}},t={args:{text:"Label",isActive:!0}},r={args:{text:"Label",disabled:!0}};var l,n,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    text: 'Label',
    sizeType: 'lg'
  }
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: 'Label',
    sizeType: 'sm'
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,b,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: 'Label',
    isActive: true
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var _,f,T;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    text: 'Label',
    disabled: true
  }
}`,...(T=(f=r.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const N=["BasicLarge","BasicSmall","ActiveTab","DisabledTab"];export{t as ActiveTab,a as BasicLarge,s as BasicSmall,r as DisabledTab,N as __namedExportsOrder,D as default};
