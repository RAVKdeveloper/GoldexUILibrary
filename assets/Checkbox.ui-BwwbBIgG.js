import{j as l}from"./jsx-runtime-DQ32znRX.js";import{P as r,A as c}from"./main-D3JtRjG_.js";const d="_root_liuce_1",n="_selected_liuce_11",u="_dis_liuce_19",t={root:d,selected:n,dis:u},o=({selected:e,variant:a="plus",disabled:s=!1,onClick:i})=>l.jsxs("div",{"data-testid":"checkbox",className:`${t.root} ${e&&t.selected} ${s&&t.dis}`,onClick:()=>i(),children:[e&&a==="plus"&&l.jsx(r,{width:13,height:13,color:"black"}),e&&a==="minus"&&l.jsx(c,{width:13,height:13,color:"black"})]});try{o.displayName="Checkbox",o.__docgenInfo={description:"",displayName:"Checkbox",props:{selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"boolean"}},variant:{defaultValue:{value:"plus"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"plus"'},{value:'"minus"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}export{o as C};