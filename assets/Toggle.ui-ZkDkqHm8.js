import{j as t}from"./jsx-runtime-DQ32znRX.js";const c="_root_i32m7_1",r="_active_i32m7_13",d="_dis_i32m7_21",n="_lg_i32m7_29",_="_sm_i32m7_37",m="_check_i32m7_45",e={root:c,active:r,dis:d,lg:n,sm:_,check:m},i=({active:a,size:s="lg",disabled:o=!1,...l})=>t.jsx("div",{"data-testid":"toggle",...l,className:`
         ${e.root} 
         ${e[s]}
         ${a&&e.active}
         ${o&&e.dis}
        `,children:t.jsx("div",{className:`
            ${e.check} 
            ${e[s]}
            ${a&&e.active}
            `})});try{i.displayName="Toggle",i.__docgenInfo={description:"",displayName:"Toggle",props:{size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{i as T};
