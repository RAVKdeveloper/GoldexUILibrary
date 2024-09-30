import{j as e}from"./jsx-runtime-DQ32znRX.js";import{V as g}from"./main-CIqX26RN.js";import{P as a}from"./Percent.ui-CX6xMYyc.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const T="_root_1mydc_1",f="_left_1mydc_6",N="_nameProject_1mydc_10",P="_statusProject_1mydc_14",b="_blocked_1mydc_18",w="_right_1mydc_22",B="_turnoverColumn_1mydc_26",k="_turnover_1mydc_26",E="_textTurnover_1mydc_34",S="_actions_1mydc_38",V="_badgeRow_1mydc_42",C="_minus_1mydc_46",R="_plus_1mydc_50",q="_optionsBody_1mydc_54",t={root:T,left:f,nameProject:N,statusProject:P,blocked:b,right:w,turnoverColumn:B,turnover:k,textTurnover:E,actions:S,badgeRow:V,minus:C,plus:R,optionsBody:q},o=({turnover:r,minus:_,cbOptions:u,plus:j,status:v,name:x,textStatus:h,textTurnover:y})=>e.jsxs("article",{className:t.root,children:[e.jsxs("div",{className:t.left,children:[e.jsx("p",{className:t.nameProject,children:x}),e.jsx("p",{className:`${t.statusProject} 
          ${v==="blocked"&&t.blocked}`,children:h})]}),e.jsxs("div",{className:t.right,children:[e.jsxs("div",{className:t.turnoverColumn,children:[e.jsx("p",{className:t.turnover,children:r}),e.jsx("p",{className:t.textTurnover,children:y})]}),e.jsxs("div",{className:t.actions,children:[e.jsxs("div",{className:t.badgeRow,children:[e.jsx("div",{className:t.minus,children:e.jsx(a,{value:Number(_)})}),e.jsx("div",{className:t.plus,children:e.jsx(a,{value:Number(j)})})]}),e.jsx("div",{"data-testid":"options",onClick:()=>u==null?void 0:u(),className:t.optionsBody,children:e.jsx(g,{width:20,height:20,opacity:.4})})]})]})]});try{o.displayName="ProjectCard",o.__docgenInfo={description:"",displayName:"ProjectCard",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"active"'},{value:'"blocked"'}]}},turnover:{defaultValue:null,description:"",name:"turnover",required:!0,type:{name:"string | number"}},cbOptions:{defaultValue:null,description:"",name:"cbOptions",required:!1,type:{name:"(() => void)"}},minus:{defaultValue:null,description:"",name:"minus",required:!0,type:{name:"string | number"}},plus:{defaultValue:null,description:"",name:"plus",required:!0,type:{name:"string | number"}},textStatus:{defaultValue:null,description:"",name:"textStatus",required:!0,type:{name:"string"}},textTurnover:{defaultValue:null,description:"",name:"textTurnover",required:!0,type:{name:"string"}}}}}catch{}const I={title:"Design System/Entities/ProjectCard",component:o,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{padding:20,background:"#1F1F24"},children:e.jsx(r,{})})],argTypes:{name:{description:"Name project"},status:{description:"Status project",defaultValue:"active"},turnover:{description:"Turnover project"},textStatus:{description:"Text status"},textTurnover:{description:"Text turnover"},minus:{description:"Turnover minus"},plus:{description:"Turnover plus"},cbOptions:{description:"Function called on click options"}}},s={args:{name:"Test Project wrwerewjtj0ietij0eti0eiherhithier",status:"active",turnover:"3435,534,534 RUB",minus:-33,plus:50,textStatus:"Активный",textTurnover:"Оборот за сутки"}},n={args:{name:"Test Project wrwerewjtj0ietij0eti0eiherhithier",status:"blocked",turnover:"3435,534,534 RUB",minus:-33,plus:50,textStatus:"Блокировка",textTurnover:"Оборот за сутки"}};var i,c,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: "Test Project wrwerewjtj0ietij0eti0eiherhithier",
    status: "active",
    turnover: "3435,534,534 RUB",
    minus: -33,
    plus: 50,
    textStatus: "Активный",
    textTurnover: "Оборот за сутки"
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,m,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: "Test Project wrwerewjtj0ietij0eti0eiherhithier",
    status: "blocked",
    turnover: "3435,534,534 RUB",
    minus: -33,
    plus: 50,
    textStatus: "Блокировка",
    textTurnover: "Оборот за сутки"
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const z=["Basic","Blocked"];export{s as Basic,n as Blocked,z as __namedExportsOrder,I as default};
