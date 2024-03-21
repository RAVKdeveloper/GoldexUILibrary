import{j as e}from"./jsx-runtime-DQ32znRX.js";import{u as h,L as x,B as v}from"./index-DXeUumf4.js";import{a as T,u as y,Z as B,g as S,M as I,f as N,z as R}from"./main-D3JtRjG_.js";import{B as d}from"./BalanceCard.ui-2rpOyhCt.js";import{N as D}from"./NavigationItem.ui-BanwgXP2.js";import{B as k}from"./Badge.ui-D0VHRE18.js";import{P as U}from"./ProfileCard.ui-DFya-UWI.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D9uilScg.js";const V=[{id:1,name:"Dashboard",Icon:T},{id:2,name:"Balance",Icon:y},{id:3,name:"Projects",Icon:B},{id:4,name:"Invoices",Icon:S},{id:5,name:"Transactions",Icon:I},{id:6,name:"Account",Icon:N}],q="_root_1jeh4_1",L="_balances_1jeh4_9",P="_list_1jeh4_17",C="_bottom_1jeh4_25",O="_remainingCard_1jeh4_33",a={root:q,balances:L,list:P,bottom:C,remainingCard:O},o=({balanceUSDT:i,balanceRub:b,notifications:c,timeRemaining:f,links:l,user:s,cbAvatar:r})=>{const{pathname:j}=h();return e.jsxs("aside",{"data-testid":"sidebar",className:a.root,children:[e.jsxs("div",{className:a.top,children:[e.jsx(R,{}),e.jsxs("div",{className:a.balances,children:[e.jsx(d,{balance:b,variant:"rub"}),e.jsx(d,{balance:i,variant:"usdt"})]}),e.jsx("ul",{className:a.list,children:V.map(({id:g,name:n,Icon:_})=>e.jsx(x,{"data-testid":"link",to:l[n],children:e.jsx(D,{text:n,Icon:_,isActive:j===l[n],badge:c[n]>0?e.jsx(k,{text:c[n]}):""})},g))})]}),e.jsxs("div",{className:a.bottom,children:[e.jsx(U,{avatarNickName:s.name,avatarRole:s.role,avatarUrl:s.url,cbOptions:()=>r==null?void 0:r()}),e.jsx("div",{className:a.remainingCard,children:f})]})]})};try{o.displayName="Sidebar",o.__docgenInfo={description:"",displayName:"Sidebar",props:{balanceRub:{defaultValue:null,description:"",name:"balanceRub",required:!0,type:{name:"number"}},balanceUSDT:{defaultValue:null,description:"",name:"balanceUSDT",required:!0,type:{name:"number"}},user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"UserSidebarType"}},timeRemaining:{defaultValue:null,description:"",name:"timeRemaining",required:!0,type:{name:"string | number"}},notifications:{defaultValue:null,description:"",name:"notifications",required:!0,type:{name:"NotificationsType"}},links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"ObjLinks"}},cbAvatar:{defaultValue:null,description:"",name:"cbAvatar",required:!1,type:{name:"(() => void)"}}}}}catch{}const K={title:"Design System/Entities/Sidebar/Sidebar",component:o,tags:["autodocs"],decorators:[i=>e.jsx(v,{children:e.jsx(i,{})})],argTypes:{balanceRub:{defaultValue:1e4,description:"Balance ruble"},balanceUSDT:{defaultValue:1e4,description:"Balance USDT"},user:{description:"User data located in the sidebar component"},notifications:{description:"Messages"},timeRemaining:{description:"Time remaining"},links:{description:"Links for navigation components"}}},t={args:{balanceUSDT:24243,balanceRub:24324,user:{id:1,name:"London",avatar:"test",url:"/test",role:"Operator"},notifications:{Dashboard:1,Balance:1,Projects:1,Invoices:15,Transactions:0,Account:1},timeRemaining:"Time remaining: 60 m 00s",links:{Dashboard:"/d",Balance:"/b",Projects:"/p",Invoices:"/i",Transactions:"/t",Account:"/a"}}};var m,u,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    balanceUSDT: 24243,
    balanceRub: 24324,
    user: {
      id: 1,
      name: 'London',
      avatar: 'test',
      url: '/test',
      role: 'Operator'
    },
    notifications: {
      Dashboard: 1,
      Balance: 1,
      Projects: 1,
      Invoices: 15,
      Transactions: 0,
      Account: 1
    },
    timeRemaining: 'Time remaining: 60 m 00s',
    links: {
      Dashboard: '/d',
      Balance: '/b',
      Projects: '/p',
      Invoices: '/i',
      Transactions: '/t',
      Account: '/a'
    }
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const Q=["Basic"];export{t as Basic,Q as __namedExportsOrder,K as default};
