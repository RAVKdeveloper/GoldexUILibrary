import{j as r}from"./jsx-runtime-DQ32znRX.js";import{r as V}from"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const j="_root_1exx5_1",L="_label_1exx5_9",P="_textarea_1exx5_17",v="_error_1exx5_35",D="_dis_1exx5_47",H="_text_1exx5_17",e={root:j,label:L,textarea:P,error:v,dis:D,text:H},d=({isError:a=!1,helpText:c="",label:i="",disabled:T=!1,...y})=>{const o=V.useRef(null),E=()=>{if(o.current){const n=o.current;n.style.height="5px",n.style.height=n.scrollHeight+"px"}};return r.jsxs("fieldset",{className:e.root,children:[i&&r.jsx("label",{className:e.label,children:i}),r.jsx("textarea",{ref:o,className:`
             ${e.textarea} 
             ${a&&e.error}
             ${T&&e.dis}
             `,...y,onInput:()=>E()}),c&&r.jsx("p",{className:`${e.text} ${a&&e.error}`,children:c})]})};try{d.displayName="Textarea",d.__docgenInfo={description:"",displayName:"Textarea",props:{label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},isError:{defaultValue:{value:"false"},description:"",name:"isError",required:!1,type:{name:"boolean"}},helpText:{defaultValue:{value:""},description:"",name:"helpText",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const R={title:"Design System/Atoms/Textarea",component:d,tags:["autodocs"],decorators:[a=>r.jsx("div",{style:{padding:20,background:"#1F1F24"},children:r.jsx(a,{})})],argTypes:{isError:{defaultValue:!1,description:"Does the element have an error?"},helpText:{defaultValue:"Help text",description:"Auxiliary text under the element (if there is an error, the color is red)"},label:{defaultValue:"Label",description:"Label (text above the element)"},disabled:{defaultValue:!1,description:"Is the item blocked?"},placeholder:{defaultValue:"Placeholder",description:"Placeholder textarea"}}},t={args:{helpText:"Help text",label:"Label",placeholder:"Placeholder"}},l={args:{helpText:"Error text",label:"Label",placeholder:"Placeholder",isError:!0}},s={args:{helpText:"Help text",label:"Label",placeholder:"Placeholder",disabled:!0}};var p,x,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    helpText: 'Help text',
    label: 'Label',
    placeholder: 'Placeholder'
  }
}`,...(u=(x=t.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var m,h,b;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    helpText: 'Error text',
    label: 'Label',
    placeholder: 'Placeholder',
    isError: true
  }
}`,...(b=(h=l.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,_,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    helpText: 'Help text',
    label: 'Label',
    placeholder: 'Placeholder',
    disabled: true
  }
}`,...(g=(_=s.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const S=["TextareaDefault","TextareaError","TextareaDisabled"];export{t as TextareaDefault,s as TextareaDisabled,l as TextareaError,S as __namedExportsOrder,R as default};
