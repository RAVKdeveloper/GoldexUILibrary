import{j as s}from"./jsx-runtime-DQ32znRX.js";const i="_root_1q6lc_1",r="_active_1q6lc_7",d="_dis_1q6lc_11",n="_lg_1q6lc_15",_="_sm_1q6lc_19",u="_check_1q6lc_23",e={root:i,active:r,dis:d,lg:n,sm:_,check:u},t=({active:a,size:l="lg",disabled:c=!1,...o})=>s.jsx("div",{"data-testid":"toggle",...o,className:`
         ${e.root} 
         ${e[l]}
         ${a&&e.active}
         ${c&&e.dis}
        `,children:s.jsx("div",{className:`
            ${e.check} 
            ${e[l]}
            ${a&&e.active}
            `})});try{t.displayName="Toggle",t.__docgenInfo={description:"",displayName:"Toggle",props:{size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{t as T};
