import{j as e}from"./jsx-runtime-DQ32znRX.js";import{k as U,D as q,_ as I,V as T}from"./main-CIqX26RN.js";import{S as p}from"./Status.ui-Bq_pZCle.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const A="_root_w2ior_1",O="_left_w2ior_5",$="_iconBody_w2ior_9",L="_column_w2ior_13",W="_title_w2ior_17",z="_date_w2ior_21",G="_right_w2ior_25",H="_dekstop_w2ior_29",J="_mobile_w2ior_33",K="_content_w2ior_37",M="_sum_w2ior_41",P="_optionsBody_w2ior_45",a={root:A,left:O,iconBody:$,column:L,title:W,date:z,right:G,dekstop:H,mobile:J,content:K,sum:M,optionsBody:P},Q={inference:e.jsx(U,{width:18,height:18,opacity:1,color:"#F04438"}),exchange:e.jsx(q,{width:18,height:18,opacity:1,color:"#73E5CF"}),deposit:e.jsx(I,{width:18,height:18,opacity:1,color:"#17B26A"})},X={inference_ru:"Вывод",exchange_ru:"Обмен",deposit_ru:"Депозит",inference_en:"Inference",exchange_en:"Exchange",deposit_en:"Deposit"},l=({variant:t,date:C,status:u,sum:R,language:b,cbOptions:d})=>e.jsxs("article",{className:a.root,children:[e.jsxs("div",{className:a.left,children:[e.jsx("div",{className:a.iconBody,children:Q[t]}),e.jsxs("div",{className:a.column,children:[e.jsx("p",{className:a.title,children:X[`${t}_${b}`]}),e.jsx("p",{className:a.date,children:C})]})]}),e.jsxs("div",{className:a.right,children:[e.jsx("div",{className:a.dekstop,children:e.jsx(p,{text:u,variant:u})}),e.jsx("div",{className:a.mobile,children:e.jsx(p,{text:"",variant:u})}),e.jsxs("div",{className:a.content,children:[e.jsxs("p",{className:a.sum,children:["+ ",R," RUB"]}),e.jsx("div",{onClick:()=>d==null?void 0:d(),className:a.optionsBody,"data-testid":"clickOption",children:e.jsx(T,{width:20,height:20,opacity:.4})})]})]})]});try{l.displayName="TransactionCard",l.__docgenInfo={description:"",displayName:"TransactionCard",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"inference"'},{value:'"exchange"'},{value:'"deposit"'}]}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"paid"'},{value:'"wait"'},{value:'"rejected"'},{value:'"expired"'}]}},sum:{defaultValue:null,description:"",name:"sum",required:!0,type:{name:"string | number"}},cbOptions:{defaultValue:null,description:"",name:"cbOptions",required:!1,type:{name:"(() => void)"}},language:{defaultValue:null,description:"",name:"language",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"ru"'}]}}}}}catch{}const ne={title:"Design System/Entities/TransactionCard",component:l,tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{padding:20,background:"#1F1F24"},children:e.jsx(t,{})})],argTypes:{language:{defaultValue:"ru",description:"Language"},variant:{defaultValue:"deposit",description:"Card Option"},status:{defaultValue:"wait",description:"Transaction Status"},date:{defaultValue:"10 ноя 2023, 08:23",description:"Date transaction"},sum:{description:"Sum transaction"},cbOptions:{description:"A function that is called when you click on an option"}}},n={args:{variant:"deposit",date:"10 ноя 2023, 08:23",status:"paid",sum:3245,language:"ru"}},s={args:{variant:"deposit",date:"10 ноя 2023, 08:23",status:"paid",sum:3245,language:"en"}},r={args:{variant:"exchange",date:"10 ноя 2023, 08:23",status:"paid",sum:3245,language:"ru"}},o={args:{variant:"exchange",date:"10 ноя 2023, 08:23",status:"wait",sum:3245,language:"en"}},i={args:{variant:"inference",date:"10 ноя 2023, 08:23",status:"wait",sum:3245,language:"ru"}},c={args:{variant:"inference",date:"10 ноя 2023, 08:23",status:"paid",sum:3245,language:"en"}};var m,g,_;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "deposit",
    date: "10 ноя 2023, 08:23",
    status: "paid",
    sum: 3245,
    language: "ru"
  }
}`,...(_=(g=n.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var h,x,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "deposit",
    date: "10 ноя 2023, 08:23",
    status: "paid",
    sum: 3245,
    language: "en"
  }
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,y,j;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "exchange",
    date: "10 ноя 2023, 08:23",
    status: "paid",
    sum: 3245,
    language: "ru"
  }
}`,...(j=(y=r.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var w,E,N;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "exchange",
    date: "10 ноя 2023, 08:23",
    status: "wait",
    sum: 3245,
    language: "en"
  }
}`,...(N=(E=o.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var D,V,F;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: "inference",
    date: "10 ноя 2023, 08:23",
    status: "wait",
    sum: 3245,
    language: "ru"
  }
}`,...(F=(V=i.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var S,B,k;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "inference",
    date: "10 ноя 2023, 08:23",
    status: "paid",
    sum: 3245,
    language: "en"
  }
}`,...(k=(B=c.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};const se=["DepositRU","DepositEN","ExchangeRU","ExchangeEN","InferenceRU","InferenceEN"];export{s as DepositEN,n as DepositRU,o as ExchangeEN,r as ExchangeRU,c as InferenceEN,i as InferenceRU,se as __namedExportsOrder,ne as default};
