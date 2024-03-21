import{j as o}from"./jsx-runtime-DQ32znRX.js";import{r as d}from"./index-DH5ua8nC.js";import{B as x}from"./Button-C-F0eSBk.js";import{a as i}from"./chunk-WFFRPTHA-B5TewAtn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";const N=(e,t)=>{const[c,n]=d.useState(!1),[u,a]=d.useState(!1),l=()=>{e>=t?(a(!1),n(!0)):e<t&&(e===1?(a(!0),n(!1)):(n(!0),a(!0)))};return d.useEffect(()=>{l()},[e,t]),{isBack:c,isNext:u}},B="_root_mg7ux_1",v="_content_mg7ux_9",V="_btnRow_mg7ux_17",p={root:B,content:v,btnRow:V},m=({currentPage:e,pages:t,btnPrev:c="Back",btnNext:n="Next",textContent:u,next:a,back:l})=>{const{isBack:P,isNext:y}=N(e,t);return o.jsxs("article",{className:p.root,children:[o.jsx("div",{className:p.content,children:u}),o.jsxs("div",{className:p.btnRow,children:[o.jsx(x,{variant:"secondary",size:"sm",disabled:!P,onClick:l,children:c}),o.jsx(x,{variant:"secondary",size:"sm",disabled:!y,onClick:a,children:n})]})]})};try{m.displayName="Pagination",m.__docgenInfo={description:"",displayName:"Pagination",props:{currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},pages:{defaultValue:null,description:"",name:"pages",required:!0,type:{name:"number"}},btnPrev:{defaultValue:{value:"Back"},description:"",name:"btnPrev",required:!1,type:{name:"string"}},btnNext:{defaultValue:{value:"Next"},description:"",name:"btnNext",required:!1,type:{name:"string"}},textContent:{defaultValue:null,description:"",name:"textContent",required:!0,type:{name:"string"}},next:{defaultValue:null,description:"",name:"next",required:!0,type:{name:"() => void"}},back:{defaultValue:null,description:"",name:"back",required:!0,type:{name:"() => void"}}}}}catch{}const I={title:"Design System/Entities/Pagination",component:m,tags:["autodocs"],parameters:{actions:{argTypesRegex:"^on.*"}},argTypes:{currentPage:{defaultValue:1,description:"Current page"},pages:{defaultValue:10,description:"All pages"},textContent:{defaultValue:"Page 1 of 10",description:"Text in pagination component"},next:{description:"Function called when clicking the Next button"},back:{description:"Function called when clicking the Back button"},btnPrev:{defaultValue:"Back",description:"Button text back"},btnNext:{defaultValue:"Next",description:"Button text next"}}},r={args:{currentPage:1,pages:10,textContent:"Page 1 of 10",next:i("onClick"),back:i("onClick")}},s={args:{currentPage:10,pages:10,textContent:"Page 1 of 10",next:i("onClick"),back:i("onClick")}};var g,f,k;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    pages: 10,
    textContent: 'Page 1 of 10',
    next: action('onClick'),
    back: action('onClick')
  }
}`,...(k=(f=r.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var b,C,_;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    currentPage: 10,
    pages: 10,
    textContent: 'Page 1 of 10',
    next: action('onClick'),
    back: action('onClick')
  }
}`,...(_=(C=s.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const T=["Basic","MaxCount"];export{r as Basic,s as MaxCount,T as __namedExportsOrder,I as default};
