import{j as n}from"./jsx-runtime-DQ32znRX.js";import{r as v}from"./index-DH5ua8nC.js";const y=a=>{const[t,s]=v.useState({isOpen:!1,keyOpen:null});return{open:()=>{s({isOpen:!t.isOpen,keyOpen:a})},isOpen:t}},N="_wrapper_105k1_1",k="_root_105k1_9",b="_middleBorder_105k1_25",g="_endBorder_105k1_37",x="_content_105k1_49",O="_main_105k1_57",q="_active_105k1_57",V="_list_105k1_65",h="_dis_105k1_73",j="_badge_105k1_81",B="_listNodes_105k1_89",$="_open_105k1_97",e={wrapper:N,root:k,middleBorder:b,endBorder:g,content:x,main:O,active:q,list:V,dis:h,badge:j,listNodes:B,open:$},c=({Icon:a,listNodes:t,badge:s,isEnd:l=!1,text:u,isActive:o=!1,disabled:m=!1,type:_="main",keyOpen:r=0,auto:d=!1})=>{const{open:f,isOpen:p}=y(r),i=p.keyOpen===r&&p.isOpen;return n.jsxs("li",{onClick:f,className:e.wrapper,children:[n.jsxs("div",{className:`
         ${e.root} 
         ${e[_]}
         ${o&&e.active}
         ${d&&i&&e.active}
         ${m&&e.dis}
         ${a?"":l?e.endBorder:e.middleBorder}
         `,children:[n.jsxs("div",{className:e.content,children:[a&&n.jsx(a,{width:20,height:20,opacity:o||i&&d?1:.4}),u]}),n.jsx("div",{className:e.badge,children:s&&s})]}),t&&n.jsx("ul",{className:`${e.listNodes} ${i&&e.open}`,children:t})]})};try{c.displayName="NavigationItem",c.__docgenInfo={description:"",displayName:"NavigationItem",props:{listNodes:{defaultValue:null,description:"",name:"listNodes",required:!1,type:{name:"ReactNode"}},badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"ReactNode"}},Icon:{defaultValue:null,description:"",name:"Icon",required:!1,type:{name:"FC<Props>"}},isEnd:{defaultValue:{value:"false"},description:"",name:"isEnd",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"main"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"main"'}]}},keyOpen:{defaultValue:{value:"0"},description:"",name:"keyOpen",required:!1,type:{name:"number"}},auto:{defaultValue:{value:"false"},description:"",name:"auto",required:!1,type:{name:"boolean"}}}}}catch{}export{c as N};