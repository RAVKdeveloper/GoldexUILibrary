import{j as r}from"./jsx-runtime-DQ32znRX.js";import{o as I,w as V,p as A,I as N}from"./main-CIqX26RN.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const T="_root_1w7ij_1",W="_open_1w7ij_6",$="_standart_1w7ij_10",q="_full_1w7ij_14",z="_success_1w7ij_18",O="_info_1w7ij_22",b="_error_1w7ij_26",D="_warning_1w7ij_30",R="_text_1w7ij_34",e={root:T,open:W,standart:$,full:q,success:z,info:O,error:b,warning:D,text:R},o=({children:i,variant:c,sizeType:x="standart",isOpen:y,...S})=>{const E={success:r.jsx(I,{width:14,height:14,color:"green"}),error:r.jsx(V,{width:16,height:16,color:"red"}),warning:r.jsx(A,{sizeType:"es",width:14,height:14,variant:"warning"}),info:r.jsx(N,{width:14,height:14,color:"blue"})};return r.jsxs("article",{className:`${e.root} ${e[c]} ${e[x]} ${y&&e.open}`,...S,children:[r.jsx("span",{children:E[c]}),r.jsx("span",{className:e.text,children:i})]})};try{o.displayName="Alert",o.__docgenInfo={description:"",displayName:"Alert",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"error"'},{value:'"warning"'}]}},sizeType:{defaultValue:{value:"standart"},description:"",name:"sizeType",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"standart"'}]}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}}}}}catch{}const G={title:"Design System/Entities/Alert",component:o,tags:["autodocs"],argTypes:{variant:{description:"Varints alert",control:{type:"radio"},options:["success","info","error","warning"],defaultValue:"success"}}},s={args:{variant:"success",children:"Success"}},n={args:{variant:"error",children:"Error"}},a={args:{variant:"warning",children:"Warning"}},t={args:{variant:"info",children:"Info"}};var l,u,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Success'
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,m,_;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    children: 'Error'
  }
}`,...(_=(m=n.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};var g,f,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Warning'
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var w,v,j;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'Info'
  }
}`,...(j=(v=t.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const H=["Success","Error","Warning","Info"];export{n as Error,t as Info,s as Success,a as Warning,H as __namedExportsOrder,G as default};
