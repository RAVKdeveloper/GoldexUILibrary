import{j as e}from"./jsx-runtime-DQ32znRX.js";import{X as o,N as l}from"./main-D3JtRjG_.js";const i="_root_rz6an_1",u="_content_rz6an_9",d="_balance_rz6an_17",_="_currency_rz6an_25",m="_bgIcon_rz6an_33",a={root:i,content:u,balance:d,currency:_,bgIcon:m},c=({variant:n="rub",balance:r=0})=>{const s={usdt:"USDT",rub:"RUB"},t={usdt:e.jsx(o,{}),rub:e.jsx(l,{})};return e.jsxs("article",{className:a.root,children:[e.jsxs("div",{className:a.content,children:[e.jsx("span",{className:a.balance,children:r<1e9?r.toLocaleString("en",{minimumFractionDigits:2}):"1e"}),e.jsx("span",{className:a.currency,children:s[n]})]}),e.jsx("div",{className:a.bgIcon,children:t[n]})]})};try{c.displayName="BalanceCard",c.__docgenInfo={description:"",displayName:"BalanceCard",props:{balance:{defaultValue:{value:"0"},description:"",name:"balance",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"rub"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"usdt"'},{value:'"rub"'}]}}}}}catch{}export{c as B};
