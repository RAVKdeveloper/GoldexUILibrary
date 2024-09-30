import{j as e}from"./jsx-runtime-DQ32znRX.js";import{M as i}from"./ModalHeader.ui-BrNQAOSy.js";import{M as p}from"./ModalActions.ui-CGdZF0vr.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./main-CIqX26RN.js";const d="_wrapper_18fyw_1",m="_root_18fyw_6",u="_open_18fyw_10",r={wrapper:d,root:m,open:u},s=({children:o,isOpen:l=!1})=>e.jsx("div",{className:`${r.wrapper} ${l&&r.open}`,children:e.jsx("article",{className:r.root,children:o})});try{s.displayName="Modal",s.__docgenInfo={description:"",displayName:"Modal",props:{isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}}}}}catch{}const b={title:"Design System/Atoms/Modal/Popup",component:s,tags:["autodocs"],argTypes:{isOpen:{defaultValue:!1,description:"Is open modal?"},children:{description:"Children components"}},decorators:[o=>e.jsx("div",{style:{background:"#1F1F24",height:"100vh"},children:e.jsx(o,{})})]},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Modal",paragraph:"This Modal",cbClose:()=>confirm("close")}),e.jsx(p,{btnTextAction:"action",btnTextCancel:"cansel",cbAction:()=>{},cbCansel:()=>{}})]}),isOpen:!0}};var t,n,c;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: <>
        <ModalHeader title="Modal" paragraph="This Modal" cbClose={() => confirm('close')} />
        <ModalActions btnTextAction="action" btnTextCancel="cansel" cbAction={() => {}} cbCansel={() => {}} />
      </>,
    isOpen: true
  }
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const y=["Defult"];export{a as Defult,y as __namedExportsOrder,b as default};
