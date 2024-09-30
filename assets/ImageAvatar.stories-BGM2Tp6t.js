import{j as e}from"./jsx-runtime-DQ32znRX.js";import{U as w}from"./main-CIqX26RN.js";import{a as l}from"./chunk-WFFRPTHA-B5TewAtn.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";const h="_root_1uwmq_1",j="_lg_1uwmq_5",U="_sm_1uwmq_9",I="_md_1uwmq_13",N="_es_1uwmq_17",V="_img_1uwmq_21",E="_close_1uwmq_25",a={root:h,lg:j,sm:U,md:I,es:N,img:V,close:E},i=({url:r,size:c="md",altText:q,removeFn:z,...S})=>e.jsxs("div",{className:`${a.root} ${a[c]}`,...S,children:[(c==="lg"||c==="md")&&e.jsx("div",{"data-testid":"remove",onClick:z,className:a.close,children:e.jsx(w,{width:20,height:20,opacity:1})}),e.jsx("img",{className:a.img,src:r,alt:q})]});try{i.displayName="ImageAvatar",i.__docgenInfo={description:"",displayName:"ImageAvatar",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"es"'}]}},altText:{defaultValue:null,description:"",name:"altText",required:!0,type:{name:"string"}},removeFn:{defaultValue:null,description:"",name:"removeFn",required:!1,type:{name:"(() => void)"}}}}}catch{}const m=""+new URL("Rectangle 1886testAvatar-Cde98kcs.svg",import.meta.url).href,$={title:"Design System/Atoms/Avatars/ImageAvatar",component:i,tags:["autodocs"],argTypes:{size:{description:"Size image",control:{type:"radio"},options:["lg","sm","md","es"]},url:{description:"Url avatar image"},removeFn:{description:"Delete callback"},altText:{defaultValue:"Alt text",description:"Alt text avatar"}},decorators:[r=>e.jsx("div",{style:{padding:20,background:"#1F1F24"},children:e.jsx(r,{})})]},t={args:{url:m,removeFn:l("on-click"),size:"lg"}},s={args:{url:m,removeFn:l("on-click"),size:"md"}},o={args:{url:m,removeFn:l("on-click"),size:"sm"}},n={args:{url:m,removeFn:l("on-click"),size:"es"}};var d,u,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    url: testUrl,
    removeFn: action('on-click'),
    size: 'lg'
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,v,_;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    url: testUrl,
    removeFn: action('on-click'),
    size: 'md'
  }
}`,...(_=(v=s.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var x,A,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    url: testUrl,
    removeFn: action('on-click'),
    size: 'sm'
  }
}`,...(f=(A=o.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var y,F,k;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    url: testUrl,
    removeFn: action('on-click'),
    size: 'es'
  }
}`,...(k=(F=n.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};const O=["LargeAvatar","MiddleAvatar","SmallAvatar","ExtraSmallAvatar"];export{n as ExtraSmallAvatar,t as LargeAvatar,s as MiddleAvatar,o as SmallAvatar,O as __namedExportsOrder,$ as default};
