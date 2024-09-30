import{j as e}from"./jsx-runtime-DQ32znRX.js";import{N as p}from"./NavigationItem.ui-QyLQcXYm.js";import{P as d}from"./main-CIqX26RN.js";import{B as K}from"./Badge.ui-Dwxct_oV.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const J={title:"Design System/Atoms/NavigationItem",component:p,tags:["autodocs"],decorators:[P=>e.jsx("div",{style:{padding:20,background:"#1F1F24",height:200},children:e.jsx(P,{})})],argTypes:{text:{defaultValue:"Name item",description:"Text in navigation item"},type:{defaultValue:"main",description:"Navigation item type",controls:{type:"radio"}},disabled:{defaultValue:!1,description:"Is disabled navigation item"},isActive:{defaultValue:!1,description:"Element is active?"},keyOpen:{description:"Key for automatic opening of children"},badge:{description:"Badge in element"},Icon:{description:"Icon in element"},isEnd:{defaultValue:!1,description:"Is the item last on the list?"},listNodes:{description:"Dropdown List Subelements"}}},t={args:{text:"Name item",keyOpen:1,type:"main"}},a={args:{text:"Name item",keyOpen:1,type:"main",badge:e.jsx(K,{text:"14"})}},s={args:{text:"Name item",keyOpen:1,Icon:d,type:"main"}},n={args:{text:"Name item",keyOpen:1,Icon:d,isActive:!0,type:"main"}},i={args:{text:"Name item",keyOpen:1,isActive:!0,type:"main",isEnd:!0}},r={args:{text:"Name item",keyOpen:1,type:"list"}},o={args:{text:"Name item",keyOpen:1,type:"list",isActive:!0,Icon:d}},m={args:{text:"Name item",keyOpen:1,type:"main",isActive:!1,disabled:!0}},c={args:{text:"Name item",keyOpen:1,type:"list",Icon:d,badge:e.jsx(K,{text:"14"}),listNodes:e.jsxs(e.Fragment,{children:[e.jsx(p,{text:"Item"}),e.jsx(p,{text:"Item",isActive:!0}),e.jsx(p,{text:"Item",isEnd:!0})]})}};var u,g,l;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: 'Name item',
    keyOpen: 1,
    type: 'main'
  }
}`,...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var y,x,I;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    text: 'Name item',
    keyOpen: 1,
    type: 'main',
    badge: <Badge text='14' />
  }
}`,...(I=(x=a.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var N,v,k;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    text: 'Name item',
    keyOpen: 1,
    Icon: LeadIcon,
    type: 'main'
  }
}`,...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var O,A,f;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    text: 'Name item',
    keyOpen: 1,
    Icon: LeadIcon,
    isActive: true,
    type: 'main'
  }
}`,...(f=(A=n.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var B,b,h;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    text: 'Name item',
    keyOpen: 1,
    isActive: true,
    type: 'main',
    isEnd: true
  }
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var L,S,j;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    text: 'Name item',
    keyOpen: 1,
    type: 'list'
  }
}`,...(j=(S=r.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var E,M,W;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    text: 'Name item',
    keyOpen: 1,
    type: 'list',
    isActive: true,
    Icon: LeadIcon
  }
}`,...(W=(M=o.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var V,D,F;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    text: 'Name item',
    keyOpen: 1,
    type: 'main',
    isActive: false,
    disabled: true
  }
}`,...(F=(D=m.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var T,_,w;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    text: 'Name item',
    keyOpen: 1,
    type: 'list',
    Icon: LeadIcon,
    badge: <Badge text='14' />,
    listNodes: <>
         <NavigationItem text='Item' />
         <NavigationItem text='Item' isActive={true} />
         <NavigationItem text='Item' isEnd={true} />
        </>
  }
}`,...(w=(_=c.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const Q=["BasicMain","BasicMainWithBadge","BasicMainWithIcon","ActiveMainWithIcon","ActiveMainEnd","BasicList","ActiveList","DisabledItem","ItemsList"];export{o as ActiveList,i as ActiveMainEnd,n as ActiveMainWithIcon,r as BasicList,t as BasicMain,a as BasicMainWithBadge,s as BasicMainWithIcon,m as DisabledItem,c as ItemsList,Q as __namedExportsOrder,J as default};
