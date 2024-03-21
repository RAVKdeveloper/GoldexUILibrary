import{j as e}from"./jsx-runtime-DQ32znRX.js";import{r as y,d as o,w as q}from"./main-D3JtRjG_.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const b="_status_buqz2_1",h="_paid_buqz2_9",z="_wait_buqz2_17",D="_rejected_buqz2_25",F="_expired_buqz2_33",n={status:b,paid:h,wait:z,rejected:D,expired:F},i=({variant:u="paid",text:w="Оплачено"})=>{const E={paid:e.jsx(y,{color:"#17B26A",width:16,height:16}),wait:e.jsx(o,{color:"#F79009"}),rejected:e.jsx(q,{color:"#F04438"}),expired:e.jsx(o,{color:"#F04438"})};return e.jsxs("div",{className:`${n.status} ${n[u]}`,children:[E[u],w]})};try{i.displayName="Status",i.__docgenInfo={description:"",displayName:"Status",props:{variant:{defaultValue:{value:"paid"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"paid"'},{value:'"wait"'},{value:'"rejected"'},{value:'"expired"'}]}},text:{defaultValue:{value:"Оплачено"},description:"",name:"text",required:!1,type:{name:"string"}}}}}catch{}const R={title:"Design System/Atoms/Status",component:i,tags:["autodocs"],argTypes:{variant:{description:"Selecting a status option",defaultValue:"paid"},text:{description:"Text status",defaultValue:"Оплачено"}}},t={args:{variant:"paid"}},a={args:{variant:"wait",text:"Ожидание"}},r={args:{variant:"rejected",text:"Отмена"}},s={args:{variant:"expired",text:"Истекло"}};var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'paid'
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,l,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'wait',
    text: 'Ожидание'
  }
}`,...(x=(l=a.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};var _,g,v;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'rejected',
    text: 'Отмена'
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var S,j,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'expired',
    text: 'Истекло'
  }
}`,...(f=(j=s.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};const O=["PaidStatus","WaitStatus","RejectedStatus","ExpiredStatus"];export{s as ExpiredStatus,t as PaidStatus,r as RejectedStatus,a as WaitStatus,O as __namedExportsOrder,R as default};
