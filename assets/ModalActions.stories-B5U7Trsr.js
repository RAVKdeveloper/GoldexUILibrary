import{j as e}from"./jsx-runtime-DQ32znRX.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const z="_root_oe3vy_1",V="_horizontal_oe3vy_9",j="_vertical_oe3vy_17",$="_btn_oe3vy_25",D="_cansel_oe3vy_33",k="_confirm_oe3vy_41",n={root:z,horizontal:V,vertical:j,btn:$,cansel:D,confirm:k,delete:"_delete_oe3vy_49"},l=({variant:t="confirm",btnTextCancel:c,btnTextAction:s,cbCansel:d,cbAction:m,align:u="horizontal"})=>e.jsx("div",{className:`${n.root} ${n[u]}`,children:u==="horizontal"?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:d,className:`${n.btn} ${n.cansel}`,children:c}),e.jsx("button",{onClick:m,className:`${n.btn} ${n[t]}`,children:s})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:m,className:`${n.btn} ${n[t]}`,children:s}),e.jsx("button",{onClick:d,className:`${n.btn} ${n.cansel}`,children:c})]})});try{l.displayName="ModalActions",l.__docgenInfo={description:"",displayName:"ModalActions",props:{variant:{defaultValue:{value:"confirm"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"confirm"'},{value:'"delete"'}]}},align:{defaultValue:{value:"horizontal"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},btnTextAction:{defaultValue:null,description:"",name:"btnTextAction",required:!0,type:{name:"string"}},btnTextCancel:{defaultValue:null,description:"",name:"btnTextCancel",required:!0,type:{name:"string"}},cbAction:{defaultValue:null,description:"",name:"cbAction",required:!0,type:{name:"() => void"}},cbCansel:{defaultValue:null,description:"",name:"cbCansel",required:!0,type:{name:"() => void"}}}}}catch{}const M={title:"Design System/Atoms/Modal/ModalActions",component:l,tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{background:"#1F1F24"},children:e.jsx(t,{})})],argTypes:{align:{defaultValue:"horizontal",controls:{type:"radio"},options:["horizontal","vertical"],description:"Axis alignment"},variant:{defaultValue:"confirm",controls:{type:"radio"},options:["confirm","delete"],description:"Action option"},btnTextAction:{defaultValue:"Action",description:"Text in the action button(confirm or delete)"},btnTextCancel:{defaultValue:"Cansel",description:"Text in the cansel button"},cbAction:{description:"Function called when an action button is clicked"},cbCansel:{description:"Function called when an cansel button is clicked"}}},a={args:{align:"horizontal",variant:"confirm",btnTextCancel:"Cansel",btnTextAction:"Confirm"}},o={args:{align:"vertical",variant:"confirm",btnTextCancel:"Cansel",btnTextAction:"Confirm"}},r={args:{align:"horizontal",variant:"delete",btnTextCancel:"Cansel",btnTextAction:"Delete"}},i={args:{align:"vertical",variant:"delete",btnTextCancel:"Cansel",btnTextAction:"Delete"}};var p,b,v;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    align: 'horizontal',
    variant: 'confirm',
    btnTextCancel: 'Cansel',
    btnTextAction: 'Confirm'
  }
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var f,x,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    align: 'vertical',
    variant: 'confirm',
    btnTextCancel: 'Cansel',
    btnTextAction: 'Confirm'
  }
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var C,_,h;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    align: 'horizontal',
    variant: 'delete',
    btnTextCancel: 'Cansel',
    btnTextAction: 'Delete'
  }
}`,...(h=(_=r.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var T,y,A;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    align: 'vertical',
    variant: 'delete',
    btnTextCancel: 'Cansel',
    btnTextAction: 'Delete'
  }
}`,...(A=(y=i.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const S=["ConfirmHorizontal","ConfirmVertical","DeleteHorizontal","DeleteVertical"];export{a as ConfirmHorizontal,o as ConfirmVertical,r as DeleteHorizontal,i as DeleteVertical,S as __namedExportsOrder,M as default};
