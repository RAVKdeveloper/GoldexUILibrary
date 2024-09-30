import{j as e}from"./jsx-runtime-DQ32znRX.js";import{u as C,f as d,g as y}from"./index-B35TOHsr.js";import{H as T}from"./Header.ui-BZ6kKODB.js";import{e as l,t as c}from"./main-CIqX26RN.js";import{C as t}from"./Cell.ui-DstAg0m_.js";import{S as r}from"./Status.ui-Bq_pZCle.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const g="_wrapper_1af0k_1",f="_root_1af0k_5",w="_cell_1af0k_25",n={wrapper:g,root:f,cell:w},i=({data:u,columns:p})=>{const{getHeaderGroups:j,getRowModel:b}=C({columns:p,data:u,getCoreRowModel:y()});return e.jsx("div",{className:n.wrapper,children:e.jsxs("table",{className:n.root,"data-testid":"table",children:[e.jsx("thead",{children:j().map(s=>e.jsx("tr",{children:s.headers.map(a=>e.jsx(T,{children:d(a.column.columnDef.header,a.getContext())},a.id))},s.id))}),e.jsx("tbody",{children:b().rows.map(s=>e.jsx("tr",{children:s.getVisibleCells().map(a=>e.jsx("td",{className:n.cell,children:d(a.getContext().cell.getValue(),a.getContext())},a.id))},s.id))})]})})};try{i.displayName="Table",i.__docgenInfo={description:"",displayName:"Table",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"Columns[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"unknown"}}}}}catch{}const k={title:"Design System/Entities/Table",component:i,tags:["autodocs"],argTypes:{data:{description:"The cell data, the key in the objects, must be bound (have the same name) to the header accessorKey. Docs https://react-table-v7-docs.netlify.app/docs/installation"},columns:{description:`An array of objects describing, counting, and meaning of headings. The object should look like this:  
        <pre> 
        [ 
            { 
                header: 'header name', 
                accessorKey: 'Key header' 
            } 
        ]
        </pre>
        Cells are bound by the value of the key (accessorKey). `}},decorators:[u=>e.jsx("div",{style:{padding:20,background:"#343741"},children:e.jsx(u,{})})]},o={args:{data:[{col1:e.jsx(t,{text:"#1011"}),col2:e.jsx(t,{text:"Мозолевский Даниил Сергеевич",icon:e.jsx(l,{width:22,height:22})}),col3:e.jsx(t,{text:"#15"}),col4:e.jsx(t,{text:"Mastercard",icon:e.jsx(c,{})}),col5:e.jsx(t,{text:"10 ноября 2023, 08:23"}),status:e.jsx(t,{text:e.jsx(r,{text:"Wait",variant:"wait"})}),sum:e.jsx(t,{text:"22 500 RUB"})},{col1:e.jsx(t,{text:"#1011"}),col2:e.jsx(t,{text:"Мозолевский Даниил Сергеевич",icon:e.jsx(l,{width:22,height:22})}),col3:e.jsx(t,{text:"#15"}),col4:e.jsx(t,{text:"Mastercard",icon:e.jsx(c,{})}),col5:e.jsx(t,{text:"10 ноября 2023, 08:23"}),status:e.jsx(t,{text:e.jsx(r,{text:"Wait",variant:"wait"})}),sum:e.jsx(t,{text:"22 500 RUB"})},{col1:e.jsx(t,{text:"#1011"}),col2:e.jsx(t,{text:"Мозолевский Даниил Сергеевич",icon:e.jsx(l,{width:22,height:22})}),col3:e.jsx(t,{text:"#15"}),col4:e.jsx(t,{text:"Mastercard",icon:e.jsx(c,{})}),col5:e.jsx(t,{text:"10 ноября 2023, 08:23"}),status:e.jsx(t,{text:e.jsx(r,{text:"Wait",variant:"wait"})}),sum:e.jsx(t,{text:"22 500 RUB"})}],columns:[{header:"ID",accessorKey:"col1"},{header:"Банк клиента",accessorKey:"col2"},{header:"ID клиента",accessorKey:"col3"},{header:"Метод",accessorKey:"col4"},{header:"Дата и время",accessorKey:"col5"},{header:"Статус",accessorKey:"status"},{header:"Сумма",accessorKey:"sum"}]}};var x,h,m;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    data: [{
      col1: <CellTable text="#1011" />,
      col2: <CellTable text="Мозолевский Даниил Сергеевич" icon={<UserInvoiceIcon width={22} height={22} />} />,
      col3: <CellTable text="#15" />,
      col4: <CellTable text="Mastercard" icon={<VisaIcon />} />,
      col5: <CellTable text="10 ноября 2023, 08:23" />,
      status: <CellTable text={<Status text="Wait" variant="wait" />} />,
      sum: <CellTable text="22 500 RUB" />
    }, {
      col1: <CellTable text="#1011" />,
      col2: <CellTable text="Мозолевский Даниил Сергеевич" icon={<UserInvoiceIcon width={22} height={22} />} />,
      col3: <CellTable text="#15" />,
      col4: <CellTable text="Mastercard" icon={<VisaIcon />} />,
      col5: <CellTable text="10 ноября 2023, 08:23" />,
      status: <CellTable text={<Status text="Wait" variant="wait" />} />,
      sum: <CellTable text="22 500 RUB" />
    }, {
      col1: <CellTable text="#1011" />,
      col2: <CellTable text="Мозолевский Даниил Сергеевич" icon={<UserInvoiceIcon width={22} height={22} />} />,
      col3: <CellTable text="#15" />,
      col4: <CellTable text="Mastercard" icon={<VisaIcon />} />,
      col5: <CellTable text="10 ноября 2023, 08:23" />,
      status: <CellTable text={<Status text="Wait" variant="wait" />} />,
      sum: <CellTable text="22 500 RUB" />
    }],
    columns: [{
      header: "ID",
      accessorKey: "col1"
    }, {
      header: "Банк клиента",
      accessorKey: "col2"
    }, {
      header: "ID клиента",
      accessorKey: "col3"
    }, {
      header: "Метод",
      accessorKey: "col4"
    }, {
      header: "Дата и время",
      accessorKey: "col5"
    }, {
      header: "Статус",
      accessorKey: "status"
    }, {
      header: "Сумма",
      accessorKey: "sum"
    }]
  }
}`,...(m=(h=o.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const M=["InvoicesTable"];export{o as InvoicesTable,M as __namedExportsOrder,k as default};
