import{j as t}from"./jsx-runtime-DQ32znRX.js";import{P as u}from"./Percent.ui-CX6xMYyc.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./main-CIqX26RN.js";const h="_root_4dy65_1",y="_content_4dy65_5",_="_top_4dy65_9",x="_balance_4dy65_13",b="_bottom_4dy65_17",g="_chart_4dy65_21",e={root:h,content:y,top:_,balance:x,bottom:b,chart:g},n=({totalBalance:a,chart:c,term:l,profitability:d,textTotal:m,...p})=>t.jsxs("article",{...p,className:e.root,children:[t.jsxs("div",{className:e.content,children:[t.jsxs("div",{className:e.top,children:[t.jsx("span",{className:e.balance,children:a.toLocaleString("en",{minimumFractionDigits:2})}),t.jsx(u,{value:d})]}),t.jsxs("div",{className:e.bottom,children:[t.jsx("span",{children:m}),t.jsx("span",{children:l})]})]}),t.jsx("div",{className:e.chart,children:c})]});try{n.displayName="NumericCard",n.__docgenInfo={description:"",displayName:"NumericCard",props:{totalBalance:{defaultValue:null,description:"",name:"totalBalance",required:!0,type:{name:"number"}},term:{defaultValue:null,description:"",name:"term",required:!0,type:{name:"string"}},chart:{defaultValue:null,description:"",name:"chart",required:!0,type:{name:"ReactNode | ReactElement<any, string | JSXElementConstructor<any>>"}},profitability:{defaultValue:null,description:"",name:"profitability",required:!0,type:{name:"number"}},textTotal:{defaultValue:null,description:"",name:"textTotal",required:!0,type:{name:"string"}}}}}catch{}const B={title:"Design System/Entities/NumericCard",component:n,tags:["autodocs"],decorators:[a=>t.jsx("div",{style:{padding:20,background:"#1F1F24"},children:t.jsx(a,{})})],argTypes:{totalBalance:{description:"Balance in card",defaultValue:234444},profitability:{description:"Card profitability"},term:{description:"Income period"},chart:{description:"Graph in cards (visible at resolutions greater than 1024 pixels)"},textTotal:{description:"Text under balance"}}},r={args:{totalBalance:234444,profitability:10,term:"vs last month",chart:t.jsx("div",{style:{background:"red",width:329,height:80}}),textTotal:"Total"}};var o,i,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    totalBalance: 234444,
    profitability: 10,
    term: "vs last month",
    chart: <div style={{
      background: "red",
      width: 329,
      height: 80
    }} />,
    textTotal: "Total"
  }
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const C=["Basic"];export{r as Basic,C as __namedExportsOrder,B as default};
