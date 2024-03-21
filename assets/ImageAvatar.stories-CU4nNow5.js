import{j as e}from"./jsx-runtime-DQ32znRX.js";import{U as j}from"./main-D3JtRjG_.js";import{a as l}from"./chunk-WFFRPTHA-B5TewAtn.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";const U="_root_1sgoy_1",I="_lg_1sgoy_9",N="_sm_1sgoy_17",V="_md_1sgoy_25",q="_es_1sgoy_33",E="_img_1sgoy_41",T="_close_1sgoy_49",a={root:U,lg:I,sm:N,md:V,es:q,img:E,close:T},m=({url:r,size:i="md",altText:z,removeFn:S,...h})=>e.jsxs("div",{className:`${a.root} ${a[i]}`,...h,children:[(i==="lg"||i==="md")&&e.jsx("div",{"data-testid":"remove",onClick:S,className:a.close,children:e.jsx(j,{width:20,height:20,opacity:1})}),e.jsx("img",{className:a.img,src:r,alt:z})]});try{m.displayName="ImageAvatar",m.__docgenInfo={description:"",displayName:"ImageAvatar",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'},{value:'"sm"'},{value:'"es"'}]}},altText:{defaultValue:null,description:"",name:"altText",required:!0,type:{name:"string"}},removeFn:{defaultValue:null,description:"",name:"removeFn",required:!1,type:{name:"(() => void)"}}}}}catch{}const c=""+new URL("Rectangle 1886testAvatar-Cde98kcs.svg",import.meta.url).href,$={title:"Design System/Atoms/Avatars/ImageAvatar",component:m,tags:["autodocs"],argTypes:{size:{description:"Size image",control:{type:"radio"},options:["lg","sm","md","es"]},url:{description:"Url avatar image"},removeFn:{description:"Delete callback"},altText:{defaultValue:"Alt text",description:"Alt text avatar"}},decorators:[r=>e.jsx("div",{style:{padding:20,background:"#1F1F24"},children:e.jsx(r,{})})]},s={args:{url:c,removeFn:l("on-click"),size:"lg"}},t={args:{url:c,removeFn:l("on-click"),size:"md"}},o={args:{url:c,removeFn:l("on-click"),size:"sm"}},n={args:{url:c,removeFn:l("on-click"),size:"es"}};var d,u,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    url: testUrl,
    removeFn: action('on-click'),
    size: 'lg'
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var p,v,_;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    url: testUrl,
    removeFn: action('on-click'),
    size: 'md'
  }
}`,...(_=(v=t.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var y,x,A;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    url: testUrl,
    removeFn: action('on-click'),
    size: 'sm'
  }
}`,...(A=(x=o.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var f,F,k;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    url: testUrl,
    removeFn: action('on-click'),
    size: 'es'
  }
}`,...(k=(F=n.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};const O=["LargeAvatar","MiddleAvatar","SmallAvatar","ExtraSmallAvatar"];export{n as ExtraSmallAvatar,s as LargeAvatar,t as MiddleAvatar,o as SmallAvatar,O as __namedExportsOrder,$ as default};
