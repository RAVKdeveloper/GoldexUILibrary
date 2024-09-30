import{j as e}from"./jsx-runtime-DQ32znRX.js";import{r as I}from"./index-DH5ua8nC.js";import{u as K,f as p,g as N,a as B}from"./index-B35TOHsr.js";import{H as D}from"./Header.ui-BZ6kKODB.js";import{P as E}from"./Pagination.ui-DBdIG1df.js";import{e as r,t as l}from"./main-CIqX26RN.js";import{C as t}from"./Cell.ui-DstAg0m_.js";import{S as c}from"./Status.ui-Bq_pZCle.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SelectInput-D8ko4Zwl.js";import"./Dropdown.ui-CsrUYQE2.js";import"./Checkbox.ui-DBB274MM.js";import"./Toggle.ui-U11mp1PH.js";import"./Button-C-3nF5yc.js";const R="_wrapper_1af0k_1",M="_root_1af0k_5",k="_cell_1af0k_25",o={wrapper:R,root:M,cell:k},i=({data:a,columns:b,activeLng:j,btnNextText:T,btnPrevText:C})=>{const{getHeaderGroups:y,getRowModel:v,getState:x,previousPage:f,nextPage:P,getCanNextPage:w,getCanPreviousPage:_}=K({columns:b,data:a,getCoreRowModel:N(),getPaginationRowModel:B()}),d=I.useMemo(()=>Array.isArray(a)?Math.ceil(Number(a.length)/10):1,[a]);return e.jsxs("div",{className:o.withPagination,"data-testid":"rootComponent",children:[e.jsx("div",{className:o.wrapper,children:e.jsxs("table",{className:o.root,children:[e.jsx("thead",{children:y().map(s=>e.jsx("tr",{children:s.headers.map(n=>e.jsx(D,{children:p(n.column.columnDef.header,n.getContext())},n.id))},s.id))}),e.jsx("tbody",{children:v().rows.map(s=>e.jsx("tr",{children:s.getVisibleCells().map(n=>e.jsx("td",{className:o.cell,children:p(n.getContext().cell.getValue(),n.getContext())},n.id))},s.id))})]})}),e.jsx(E,{pages:10,currentPage:2,textContent:j==="en"?`Page ${x().pagination.pageIndex+1} of ${d} pages`:`Страница ${x().pagination.pageIndex+1} из ${d}`,next:P,back:f,btnNext:T,btnPrev:C,disabledNext:!w(),disabledPrev:!_()})]})};try{i.displayName="TableWithPagination",i.__docgenInfo={description:"",displayName:"TableWithPagination",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"Columns[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"unknown"}},activeLng:{defaultValue:null,description:"",name:"activeLng",required:!0,type:{name:"string"}},btnNextText:{defaultValue:null,description:"",name:"btnNextText",required:!0,type:{name:"string"}},btnPrevText:{defaultValue:null,description:"",name:"btnPrevText",required:!0,type:{name:"string"}}}}}catch{}const Q={title:"Design System/Entities/TableWithPagination",component:i,tags:["autodocs"],argTypes:{data:{description:"The cell data, the key in the objects, must be bound (have the same name) to the header accessorKey. Docs https://react-table-v7-docs.netlify.app/docs/installation"},columns:{description:`An array of objects describing, counting, and meaning of headings. The object should look like this:  
        <pre> 
        [ 
            { 
                header: 'header name', 
                accessorKey: 'Key header' 
            } 
        ]
        </pre>
        Cells are bound by the value of the key (accessorKey). `},activeLng:{options:["ru","en"],control:{type:"radio"},description:"Text language in pagination component"},btnNextText:{description:"Text in button next"},btnPrevText:{description:"Text in button prev"}},decorators:[a=>e.jsx("div",{style:{padding:20,background:"#343741"},children:e.jsx(a,{})})]},u={args:{data:[{col1:e.jsx(t,{text:"#1011"}),col2:e.jsx(t,{text:"Мозолевский Даниил Сергеевич",icon:e.jsx(r,{width:22,height:22})}),col3:e.jsx(t,{text:"#15"}),col4:e.jsx(t,{text:"Mastercard",icon:e.jsx(l,{})}),col5:e.jsx(t,{text:"10 ноября 2023, 08:23"}),status:e.jsx(t,{text:e.jsx(c,{text:"Wait",variant:"wait"})}),sum:e.jsx(t,{text:"22 500 RUB"})},{col1:e.jsx(t,{text:"#1011"}),col2:e.jsx(t,{text:"Мозолевский Даниил Сергеевич",icon:e.jsx(r,{width:22,height:22})}),col3:e.jsx(t,{text:"#15"}),col4:e.jsx(t,{text:"Mastercard",icon:e.jsx(l,{})}),col5:e.jsx(t,{text:"10 ноября 2023, 08:23"}),status:e.jsx(t,{text:e.jsx(c,{text:"Wait",variant:"wait"})}),sum:e.jsx(t,{text:"22 500 RUB"})},{col1:e.jsx(t,{text:"#1011"}),col2:e.jsx(t,{text:"Мозолевский Даниил Сергеевич",icon:e.jsx(r,{width:22,height:22})}),col3:e.jsx(t,{text:"#15"}),col4:e.jsx(t,{text:"Mastercard",icon:e.jsx(l,{})}),col5:e.jsx(t,{text:"10 ноября 2023, 08:23"}),status:e.jsx(t,{text:e.jsx(c,{text:"Wait",variant:"wait"})}),sum:e.jsx(t,{text:"22 500 RUB"})}],columns:[{header:"ID",accessorKey:"col1"},{header:"Банк клиента",accessorKey:"col2"},{header:"ID клиента",accessorKey:"col3"},{header:"Метод",accessorKey:"col4"},{header:"Дата и время",accessorKey:"col5"},{header:"Статус",accessorKey:"status"},{header:"Сумма",accessorKey:"sum"}],activeLng:"en",btnNextText:"Next",btnPrevText:"Back"}};var m,h,g;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    }],
    activeLng: "en",
    btnNextText: "Next",
    btnPrevText: "Back"
  }
}`,...(g=(h=u.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const X=["InvoicesTable"];export{u as InvoicesTable,X as __namedExportsOrder,Q as default};
