import{j as e}from"./jsx-runtime-DQ32znRX.js";import{u as ne,L as v,B as ae}from"./index-CVWTZ6y-.js";import{u as I,Z as P,g as L,M as U,f as E,v as R,C as te,i as ie,n as se}from"./main-CIqX26RN.js";import{B as V}from"./BalanceCard.ui-C3gEgGGs.js";import{N as m}from"./NavigationItem.ui-QyLQcXYm.js";import{B as N}from"./Badge.ui-Dwxct_oV.js";import{P as re}from"./ProfileCard.ui-Dg5a2LoM.js";import{P as oe}from"./ProfileModal.ui-Cn2LFKQw.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D9uilScg.js";import"./TextAvatar.ui-DHkt6UWU.js";import"./Dropdown.ui-CsrUYQE2.js";import"./Checkbox.ui-DBB274MM.js";import"./Toggle.ui-U11mp1PH.js";import"./LanguageModal.ui-C-6mflPn.js";const ce=[{id:1,auto:!0,name:"Dashboard",Icon:I,type:"list",lng:"en",indentity:"Dashboard",childs:[{id:10,name:"Successful",isEnd:!1,indentity:"DashboardSucces"},{id:11,name:"Unsuccessful",isEnd:!1,indentity:"DashBoardUnSucces"},{id:12,name:"Appeal",isEnd:!1,indentity:"DashBoardAppeal"},{id:13,name:"Processing",isEnd:!0,indentity:"DashboardProcessing"}]},{id:2,auto:!0,name:"Balance",Icon:P,type:"list",lng:"en",indentity:"Balance",childs:[{id:20,name:"Information",isEnd:!1,indentity:"BalanceInfo"},{id:21,name:"Transactions",isEnd:!0,indentity:"BalanceTransaction"}]},{id:3,auto:!1,name:"Projects",Icon:L,type:"main",lng:"en",indentity:"Projects"},{id:4,auto:!1,name:"Invoices",Icon:U,type:"main",lng:"en",indentity:"Invoices"},{id:5,auto:!1,name:"Transactions",Icon:E,type:"main",lng:"en",indentity:"Transactions"},{id:6,auto:!0,name:"Account",Icon:R,type:"list",lng:"en",indentity:"Account",childs:[{id:30,name:"General",isEnd:!1,indentity:"AccGeneral"},{id:21,name:"All accounts",isEnd:!0,indentity:"AccAll"}]},{id:1,auto:!0,name:"Dashboard",Icon:I,type:"list",lng:"ru",indentity:"Dashboard",childs:[{id:10,name:"Успешные",isEnd:!1,indentity:"DashboardSucces"},{id:11,name:"Неуспешные",isEnd:!1,indentity:"DashBoardUnSucces"},{id:12,name:"Апелляции",isEnd:!1,indentity:"DashBoardAppeal"},{id:13,name:"В процессе",isEnd:!0,indentity:"DashboardProcessing"}]},{id:2,auto:!0,name:"Баланс",Icon:P,type:"list",lng:"ru",indentity:"Balance",childs:[{id:20,name:"Информация",isEnd:!1,indentity:"BalanceInfo"},{id:21,name:"Транзакции",isEnd:!0,indentity:"BalanceTransaction"}]},{id:3,auto:!1,name:"Проекты",Icon:L,type:"main",lng:"ru",indentity:"Projects"},{id:4,auto:!1,name:"Счета",Icon:U,type:"main",lng:"ru",indentity:"Invoices"},{id:5,auto:!1,name:"Транзакции",Icon:E,type:"main",lng:"ru",indentity:"Transactions"},{id:6,auto:!0,name:"Аккаунт",Icon:R,type:"list",lng:"ru",indentity:"Account",childs:[{id:30,name:"Общее",isEnd:!1,indentity:"AccGeneral"},{id:21,name:"Все аккаунты",isEnd:!0,indentity:"AccAll"}]}],le="_root_13rua_1",de="_balances_13rua_5",ue="_flexBox_13rua_9",me="_list_13rua_13",pe="_childList_13rua_21",be="_bottom_13rua_25",ge="_remainingCard_13rua_29",n={root:le,balances:de,flexBox:ue,list:me,childList:pe,bottom:be,remainingCard:ge},T=({balanceUSDT:c,balanceRub:Z,notifications:l,timeRemaining:z,links:a,user:f,cbAvatar:h,isOpenModal:j,changeLanguage:H,activeLng:i,cbMyProfile:J,cbEditProfile:K,textMyProfile:Q,textEditProfile:W,cbLogOut:X,cbSupport:Y,cbTheme:ee})=>{const{pathname:d}=ne(),u={lng_ru:"Язык",lng_en:"Language",sup_ru:"Поддержка",sup_en:"Support",theme_ru:"Тема",theme_en:"Theme",log_ru:"Выйти",log_en:"Log out"};return e.jsxs("aside",{"data-testid":"sidebar",className:n.root,children:[e.jsxs("div",{className:n.top,children:[e.jsx(te,{}),e.jsxs("div",{className:n.balances,children:[e.jsx(V,{balance:Z,icon:e.jsx(ie,{}),currency:"RUB"}),e.jsx(V,{balance:c,icon:e.jsx(se,{}),currency:"USDT"})]})]}),e.jsxs("div",{className:n.flexBox,children:[e.jsx("ul",{className:n.list,children:ce.filter(({lng:r})=>r===i).map(({id:r,name:S,Icon:_,type:y,indentity:t,auto:B,childs:s})=>e.jsx("div",{children:y==="list"?e.jsx(m,{auto:B,type:y,text:S,Icon:_,isActive:d===a[t],badge:l[t]>0?e.jsx(N,{text:l[t]}):"",listNodes:s&&s.length>0?e.jsx("div",{className:n.childList,children:s.map(({name:D,indentity:o,isEnd:A,id:x})=>e.jsx(v,{to:a[o],children:e.jsx(m,{type:"main",text:D,isEnd:A,isActive:d===a[o]})},x))}):""},r):e.jsx(v,{"data-testid":"link",to:B?"#":a[t],children:e.jsx(m,{auto:B,type:y,text:S,Icon:_,isActive:d===a[t],badge:l[t]>0?e.jsx(N,{text:l[t]}):"",listNodes:s&&s.length>0?s.map(({name:D,indentity:o,isEnd:A,id:x})=>e.jsx(v,{to:a[o],children:e.jsx(m,{type:"main",text:D,isEnd:A,isActive:d===a[o]})},x)):""})},r)},r))}),e.jsxs("div",{className:n.bottom,children:[e.jsx(re,{avatarNickName:f.name,avatarRole:f.role,avatarUrl:f.url,cbOptions:()=>h==null?void 0:h(),isOpenModal:j,modal:e.jsx(oe,{cbPropSupport:Y,cbPropTheme:ee,cbPropLogout:X,cbMyProfile:J,cbEditProfile:K,textMyProfile:Q,textEditProfile:W,isDarkMode:!0,textLng:u[`lng_${i}`],textSupport:u[`sup_${i}`],textTheme:u[`theme_${i}`],textLogOut:u[`log_${i}`],activeLng:i,changeLng:H,isOpenMainModal:j})}),e.jsx("div",{className:n.remainingCard,children:z})]})]})]})};try{T.displayName="Sidebar",T.__docgenInfo={description:"",displayName:"Sidebar",props:{balanceRub:{defaultValue:null,description:"",name:"balanceRub",required:!0,type:{name:"number"}},balanceUSDT:{defaultValue:null,description:"",name:"balanceUSDT",required:!0,type:{name:"number"}},user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"UserSidebarType"}},timeRemaining:{defaultValue:null,description:"",name:"timeRemaining",required:!0,type:{name:"string | number"}},notifications:{defaultValue:null,description:"",name:"notifications",required:!0,type:{name:"NotificationsType"}},links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"ObjLinks"}},cbAvatar:{defaultValue:null,description:"",name:"cbAvatar",required:!1,type:{name:"(() => void)"}},isOpenModal:{defaultValue:null,description:"",name:"isOpenModal",required:!0,type:{name:"boolean"}},changeLanguage:{defaultValue:null,description:"",name:"changeLanguage",required:!0,type:{name:"(lng: string) => void"}},activeLng:{defaultValue:null,description:"",name:"activeLng",required:!0,type:{name:"string"}},textMyProfile:{defaultValue:null,description:"",name:"textMyProfile",required:!0,type:{name:"string"}},textEditProfile:{defaultValue:null,description:"",name:"textEditProfile",required:!0,type:{name:"string"}},cbMyProfile:{defaultValue:null,description:"",name:"cbMyProfile",required:!0,type:{name:"() => void"}},cbEditProfile:{defaultValue:null,description:"",name:"cbEditProfile",required:!0,type:{name:"() => void"}},cbLogOut:{defaultValue:null,description:"",name:"cbLogOut",required:!0,type:{name:"() => void"}},cbSupport:{defaultValue:null,description:"",name:"cbSupport",required:!1,type:{name:"(() => void)"}},cbTheme:{defaultValue:null,description:"",name:"cbTheme",required:!1,type:{name:"(() => void)"}}}}}catch{}const Ee={title:"Design System/Entities/Sidebar/Sidebar",component:T,tags:["autodocs"],decorators:[c=>e.jsx(ae,{children:e.jsx(c,{})})],argTypes:{balanceRub:{defaultValue:1e4,description:"Balance ruble"},balanceUSDT:{defaultValue:1e4,description:"Balance USDT"},user:{description:"User data located in the sidebar component"},notifications:{description:"Messages"},timeRemaining:{description:"Time remaining"},links:{description:"Links for navigation components"},activeLng:{defaultValue:"en",description:"Language sidebar",control:{type:"radio"},options:["en","ru"]},changeLanguage:{description:"Function for change language"},isOpenModal:{description:"Is open avatar modal?",defaultValue:!1},cbAvatar:{description:"Function called on click options in profile card"}}},p={args:{balanceUSDT:24243,balanceRub:24324,user:{id:1,name:"London",avatar:"test",url:"/test",role:"Operator"},notifications:{Dashboard:1,Balance:1,Projects:1,Invoices:15,Transactions:0,Account:1},timeRemaining:"Time remaining: 60 m 00s",links:{Dashboard:"/d",Balance:"/b",Projects:"/p",Invoices:"/i",Transactions:"/t",Account:"/a",DashboardSucces:"/ds",DashBoardUnSucces:"/du",DashBoardAppeal:"/da",DashboardProcessing:"/dp",BalanceInfo:"/bi",BalanceTransaction:"/bt",AccAll:"/al",AccGeneral:"/ag"},activeLng:"en"}},b={args:{balanceUSDT:24243,balanceRub:24324,user:{id:1,name:"London",avatar:"test",url:"/test",role:"Operator"},notifications:{Dashboard:1,Balance:1,Projects:1,Invoices:15,Transactions:0,Account:1},timeRemaining:"Time remaining: 60 m 00s",links:{Dashboard:"/d",Balance:"/b",Projects:"/p",Invoices:"/i",Transactions:"/t",Account:"/a",DashboardSucces:"/ds",DashBoardUnSucces:"/du",DashBoardAppeal:"/da",DashboardProcessing:"/dp",BalanceInfo:"/bi",BalanceTransaction:"/bt",AccAll:"/al",AccGeneral:"/ag"},activeLng:"ru"}},g={args:{balanceUSDT:24243,balanceRub:24324,user:{id:1,name:"London",avatar:"test",role:"Operator"},notifications:{Dashboard:1,Balance:1,Projects:1,Invoices:15,Transactions:0,Account:1},timeRemaining:"Time remaining: 60 m 00s",links:{Dashboard:"/d",Balance:"/b",Projects:"/p",Invoices:"/i",Transactions:"/t",Account:"/a",DashboardSucces:"/ds",DashBoardUnSucces:"/du",DashBoardAppeal:"/da",DashboardProcessing:"/dp",BalanceInfo:"/bi",BalanceTransaction:"/bt",AccAll:"/al",AccGeneral:"/ag"},activeLng:"ru"}};var q,O,M;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    balanceUSDT: 24243,
    balanceRub: 24324,
    user: {
      id: 1,
      name: "London",
      avatar: "test",
      url: "/test",
      role: "Operator"
    },
    notifications: {
      Dashboard: 1,
      Balance: 1,
      Projects: 1,
      Invoices: 15,
      Transactions: 0,
      Account: 1
    },
    timeRemaining: "Time remaining: 60 m 00s",
    links: {
      Dashboard: "/d",
      Balance: "/b",
      Projects: "/p",
      Invoices: "/i",
      Transactions: "/t",
      Account: "/a",
      DashboardSucces: "/ds",
      DashBoardUnSucces: "/du",
      DashBoardAppeal: "/da",
      DashboardProcessing: "/dp",
      BalanceInfo: "/bi",
      BalanceTransaction: "/bt",
      AccAll: "/al",
      AccGeneral: "/ag"
    },
    activeLng: "en"
  }
}`,...(M=(O=p.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var k,G,C;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    balanceUSDT: 24243,
    balanceRub: 24324,
    user: {
      id: 1,
      name: "London",
      avatar: "test",
      url: "/test",
      role: "Operator"
    },
    notifications: {
      Dashboard: 1,
      Balance: 1,
      Projects: 1,
      Invoices: 15,
      Transactions: 0,
      Account: 1
    },
    timeRemaining: "Time remaining: 60 m 00s",
    links: {
      Dashboard: "/d",
      Balance: "/b",
      Projects: "/p",
      Invoices: "/i",
      Transactions: "/t",
      Account: "/a",
      DashboardSucces: "/ds",
      DashBoardUnSucces: "/du",
      DashBoardAppeal: "/da",
      DashboardProcessing: "/dp",
      BalanceInfo: "/bi",
      BalanceTransaction: "/bt",
      AccAll: "/al",
      AccGeneral: "/ag"
    },
    activeLng: "ru"
  }
}`,...(C=(G=b.parameters)==null?void 0:G.docs)==null?void 0:C.source}}};var $,F,w;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    balanceUSDT: 24243,
    balanceRub: 24324,
    user: {
      id: 1,
      name: "London",
      avatar: "test",
      role: "Operator"
    },
    notifications: {
      Dashboard: 1,
      Balance: 1,
      Projects: 1,
      Invoices: 15,
      Transactions: 0,
      Account: 1
    },
    timeRemaining: "Time remaining: 60 m 00s",
    links: {
      Dashboard: "/d",
      Balance: "/b",
      Projects: "/p",
      Invoices: "/i",
      Transactions: "/t",
      Account: "/a",
      DashboardSucces: "/ds",
      DashBoardUnSucces: "/du",
      DashBoardAppeal: "/da",
      DashboardProcessing: "/dp",
      BalanceInfo: "/bi",
      BalanceTransaction: "/bt",
      AccAll: "/al",
      AccGeneral: "/ag"
    },
    activeLng: "ru"
  }
}`,...(w=(F=g.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};const Re=["BasicEn","BasicRu","NotAvatarUrl"];export{p as BasicEn,b as BasicRu,g as NotAvatarUrl,Re as __namedExportsOrder,Ee as default};
