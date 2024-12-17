(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{3949:function(e,n,t){Promise.resolve().then(t.bind(t,6931))},6530:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var i=t(7437);t(2265);var r=t(1733),o=t(7999),s=t(9806),l=t(335),a=t(9099),c=t(4477),d=t(8731),u=t(2968),x=t(2960),m=t(8433),h=t(2197),j=t(9337);function p(){let{logo:e,searchBar:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{logo:!1,searchBar:!1},t=(0,x.Z)(),r=(0,j.If)();return(0,i.jsxs)(m.ZP,{container:!0,justifyContent:"center",alignItems:"center",children:[e&&(0,i.jsx)(m.ZP,{item:!0,children:(0,i.jsx)(d.Z,{colorMode:"dark",width:180,sx:{mr:4,pt:"4px"}})}),n&&(0,i.jsx)(m.ZP,{item:!0,children:(0,i.jsx)(u.Z,{elevation:0})}),(0,i.jsx)(m.ZP,{item:!0,children:(0,i.jsx)(o.Z,{sx:{flexGrow:1}})}),(0,i.jsx)(m.ZP,{item:!0,flexGrow:1}),(0,i.jsx)(m.ZP,{item:!0,children:(0,i.jsx)(l.Z,{size:"large",edge:"start",color:"inherit",onClick:r.toggleColorMode,children:"dark"===t.palette.mode?(0,i.jsx)(a.Z,{}):(0,i.jsx)(c.Z,{})})})]})}function f(){let{searchBar:e,logo:n,elevation:t,container:l,sx:a}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{searchBar:!1,logo:!1,elevation:0,container:!1,sx:{}},c={};return 0===t&&(c={backgroundColor:"background.default",color:"text.primary"}),(0,i.jsx)(o.Z,{sx:{flexGrow:1},children:(0,i.jsx)(r.Z,{position:"static",elevation:t,sx:a,children:(0,i.jsx)(s.Z,{sx:c,children:l?(0,i.jsx)(h.Z,{children:(0,i.jsx)(p,{logo:n,searchBar:e})}):(0,i.jsx)(p,{logo:n,searchBar:e})})})})}},8731:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var i=t(7437),r=t(2960),o=t(7999),s=t(7138);function l(){let{width:e,colorMode:n,sx:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{width:350,sx:{}},l=(0,r.Z)();return n||(n=l.palette.mode),(0,i.jsx)(o.Z,{sx:t,children:(0,i.jsx)(s.default,{href:"/",children:(0,i.jsx)("img",{src:"/logo-".concat(n,".png"),width:e,alt:"Selene"})})})}},2968:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var i=t(7437),r=t(4990),o=t(335),s=t(4912),l=t(7699),a=t(559);function c(){let{elevation:e,sx:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{elevation:16,sx:{}};return(0,i.jsxs)(r.Z,{component:"form",sx:{display:"flex",alignItems:"center",width:400,borderRadius:"50px",...n},elevation:e,action:"/search",children:[(0,i.jsx)(o.Z,{sx:{p:"10px"},children:(0,i.jsx)(l.Z,{})}),(0,i.jsx)(s.ZP,{sx:{ml:1,flex:1},placeholder:"Galaxy name or position",name:"obj"}),(0,i.jsx)(o.Z,{type:"submit",sx:{p:"10px"},children:(0,i.jsx)(a.Z,{})})]})}},9337:function(e,n,t){"use strict";t.d(n,{IV:function(){return u},If:function(){return x}});var i=t(7437),r=t(2265),o=t(2555),s=t.n(o),l=t(4444),a=e=>(0,l.Z)({palette:{mode:e},typography:{fontFamily:s().style.fontFamily},components:{MuiAlert:{styleOverrides:{root:e=>{let{ownerState:n}=e;return{..."info"===n.severity&&{backgroundColor:"#60a5fa"}}}}}}}),c=t(1705);let d=(0,r.createContext)({toggleColorMode:()=>{}});function u(e){let[n,t]=(0,r.useState)("dark"),o=(0,r.useMemo)(()=>({toggleColorMode:()=>{t(e=>"light"===e?"dark":"light")}}),[]),s=(0,r.useMemo)(()=>a(n),[n]);return(0,i.jsx)(d.Provider,{value:o,children:(0,i.jsx)(c.Z,{theme:s,children:e.children})})}function x(){return(0,r.useContext)(d)}},6931:function(e,n,t){"use strict";let i;t.r(n),t.d(n,{default:function(){return K}});var r=t(7437),o=t(6463),s=t(2197),l=t(3719),a=t(2030),c=t(1136),d=t(7721),u=t(4774),x=t(6530),m=t(2126);i="http://35.209.139.248/";var h=m.Z.create({baseURL:i,timeout:2e4}),j=t(2265);function p(e,n){switch(n.type){case"setOutput":let t;return(null==e?void 0:e.output)&&((t=null==e?void 0:e.output)[n.payload.index]=n.payload.value),{...e,finishedCount:e.finishedCount+1,runningCount:e.runningCount-1,output:t};case"incrementRunning":return{...e,runningCount:e.runningCount+1};case"resetData":return{data:n.payload.data,finishedCount:0,runningCount:0,output:Array(n.payload.data.length).fill(void 0)}}}var f=t(1665),v=t(798),g=t(3742),Z=t(7999),y=t(270),b=t(4037),w=t(4696),C=t(8433),S=t(8929),_=t(8843),k=t(6171),z=t(8582),I=t(8719),R=t(3535),q=t(7109),P=t(2856),D=t(4421),L=t(2130);function E(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return null===e?null:void 0!==e?parseFloat(e).toFixed(n):void 0}function F(e){let{href:n,label:t,sx:i}=e;return(0,r.jsx)(l.Z,{component:"div",children:(0,r.jsx)(f.Z,{href:n,underline:"none",target:"_blank",children:(0,r.jsx)(v.Z,{title:"Open object in ".concat(t),children:(0,r.jsx)(g.Z,{size:"small",label:t,sx:i,deleteIcon:(0,r.jsx)(I.Z,{}),onDelete:()=>{},onClick:()=>{}})})})})}function O(e){let{obj:n}=e;return(0,r.jsxs)(Z.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",mb:.75},children:[(0,r.jsx)(k.Z,{fontSize:"small",sx:{mr:1}}),(0,r.jsx)(l.Z,{component:"span",mr:5,children:(0,r.jsx)("b",{children:"Query:"})}),(0,r.jsx)(l.Z,{component:"span",mr:1,children:n}),n&&(0,r.jsx)(F,{label:"CDS",sx:{mr:1},href:"http://cdsportal.u-strasbg.fr/?target=".concat(encodeURIComponent(n))}),n&&(0,r.jsx)(F,{label:"Simbad",sx:{mr:1},href:"http://simbad.u-strasbg.fr/simbad/sim-id?Ident=".concat(encodeURIComponent(n.toUpperCase()))}),n&&(0,r.jsx)(F,{label:"NED",href:"https://ned.ipac.caltech.edu/cgi-bin/objsearch?extend=no&hconst=73&omegam=0.27&omegav=0.73&corr_z=1&out_csys=Equatorial&out_equinox=J2000.0&obj_sort=RA+or+Longitude&of=pre_text&zv_breaker=30000.0&list_limit=5&img_stamp=YES&objname=".concat(encodeURIComponent(n.toUpperCase()))})]})}function U(e){let{ns:n}=e;return(null==n?void 0:n.ra)&&(null==n?void 0:n.dec)?(0,r.jsxs)(Z.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",mb:.75},children:[(0,r.jsx)(_.Z,{fontSize:"small",sx:{mr:1}}),(0,r.jsx)(l.Z,{component:"span",mr:3,children:(0,r.jsx)("b",{children:"Position:"})}),(0,r.jsxs)(l.Z,{component:"span",children:[null==n?void 0:n.pos," (",E(null==n?void 0:n.ra,4),"\xb0 ",E(null==n?void 0:n.dec,4),"\xb0)"]})]}):(0,r.jsx)(u.Z,{width:"90%",animation:"wave",variant:"rounded",sx:{my:1.75}})}function B(e){let{count:n,isLoading:t}=e;return(0,r.jsx)(r.Fragment,{children:t?(0,r.jsx)(u.Z,{width:"30%",animation:"wave"}):(0,r.jsx)(l.Z,{variant:"body2",sx:{mt:1},children:(0,r.jsxs)("i",{children:["Searched ",function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";return null===e?null:void 0!==e?e.toString().replace(RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),n):void 0}(n)," objects"]})})})}function M(e){let{title:n,icon:t,time:i,qSuccess:o,qLoading:s,skeletonWidth:a}=e;return s?(0,r.jsx)(u.Z,{width:a,variant:"rounded",animation:"wave",sx:{mb:1.5}}):(0,r.jsxs)(Z.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",mb:1},children:[t,(0,r.jsx)(l.Z,{component:"span",mr:1.5,ml:1,children:n}),(0,r.jsx)(l.Z,{component:"div",children:o&&i<2?(0,r.jsx)(g.Z,{size:"small",icon:(0,r.jsx)(z.Z,{}),label:"0ms | cached",color:"primary",onClick:()=>{}}):(0,r.jsx)(g.Z,{size:"small",icon:(0,r.jsx)(z.Z,{}),label:"".concat(E(i,0),"ms"),color:i>1e4?"error":i<3e3?"success":"warning",onClick:()=>{}})})]})}function N(e){let{title:n,icon:t}=e;return(0,r.jsxs)(Z.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center"},children:["info"===t?(0,r.jsx)(q.Z,{fontSize:"small",sx:{mr:1}}):(0,r.jsx)(R.Z,{fontSize:"small",sx:{mr:1}}),(0,r.jsx)(l.Z,{component:"span",children:(0,r.jsx)("b",{children:n})})]})}function A(e){var n;let{obj:t,qResult:i,qSuccess:o,qError:s,qLoading:l}=e,c=.15;return(null==i?void 0:i.conesearch.mag_r)&&i.conesearch.r50&&(null==i||i.conesearch.mag_r,null==i||i.conesearch.r50,c=.22),(0,r.jsxs)(y.Z,{elevation:2,sx:{display:"flex"},children:[(null==i?void 0:i.namesolver.ra)&&i.namesolver.dec?(0,r.jsx)(b.Z,{component:"img",sx:{width:183,height:183},image:"https://www.legacysurvey.org/viewer/cutout.jpg?ra=".concat(i.namesolver.ra,"&dec=").concat(i.namesolver.dec,"&size=300&pixscale=").concat(c,"&layer=ls-dr10-grz"),alt:""}):(0,r.jsx)(u.Z,{variant:"rectangular",width:"183px",height:"183px",animation:"wave"}),(0,r.jsx)(w.Z,{sx:{width:"100%"},style:{paddingBottom:"16px"},children:(0,r.jsxs)(C.ZP,{container:!0,sx:{width:"100%"},columnSpacing:2,children:[(0,r.jsx)(C.ZP,{item:!0,xs:12,md:8,children:(0,r.jsxs)(S.Z,{children:[(0,r.jsx)(N,{title:"Object Info",icon:"info"}),(0,r.jsx)(a.Z,{sx:{mb:1,pt:.25}}),(0,r.jsx)(O,{obj:t}),(0,r.jsx)(U,{ns:null==i?void 0:i.namesolver}),(0,r.jsx)(B,{count:null==i?void 0:i.count,isLoading:l})]})}),(0,r.jsx)(C.ZP,{item:!0,xs:12,md:4,children:(0,r.jsxs)(S.Z,{children:[(0,r.jsx)(N,{title:"Query Latency",icon:"stat"}),(0,r.jsx)(a.Z,{sx:{mb:1,pt:.25}}),(0,r.jsx)(M,{title:"Name solver",qSuccess:o,qLoading:l,time:(null==i?void 0:null===(n=i.namesolver)||void 0===n?void 0:n.time_ms)||0,icon:(0,r.jsx)(P.Z,{fontSize:"small"}),skeletonWidth:"80%"}),(0,r.jsx)(M,{title:"Crossmatch",qSuccess:o,qLoading:l,time:(null==i?void 0:i.conesearch.time_ms)||0,icon:(0,r.jsx)(D.Z,{fontSize:"small"}),skeletonWidth:"75%"}),(0,r.jsx)(M,{title:"Similarity search",qSuccess:o,qLoading:l,time:(null==i?void 0:i.similarity.time_ms)||0,icon:(0,r.jsx)(L.Z,{fontSize:"small"}),skeletonWidth:"85%"})]})})]})})]})}var G=t(5355);let W=async e=>{let{queryKey:n}=e,[t,i,r]=n,o=await h.get("/similarity",{params:{obj:i,limit:null==r?void 0:r.limit}});return null==o?void 0:o.data};var Q=t(4990);function T(e){let{sx:n}=e;return(0,r.jsxs)(Q.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",p:5,...n},children:[(0,r.jsx)(k.Z,{sx:{fontSize:85}}),(0,r.jsx)(l.Z,{variant:"h2",sx:{mt:4,mb:2},children:"Not Found"}),(0,r.jsx)(l.Z,{variant:"subtitle1",color:"grey",children:"The searched object was not found in the database"})]})}let H=async e=>{let{ra:n,dec:t,r50:i,mag_r:r}=e,o=.2;i&&r&&(o=.22);let s="/cutout.jpg?ra=".concat(n,"&dec=").concat(t,"&size=300&pixscale=").concat(o),l=await h.get(s,{responseType:"blob"});return URL.createObjectURL(l.data)};function J(){var e,n,t;let i=(0,o.useSearchParams)().get("obj"),{data:m,isSuccess:h,isError:f,isLoading:v}=(t={limit:60},(0,G.a)({queryFn:W,queryKey:["obj_similarity",i,t],enabled:!!i})),{semaphore:g}=function(e){let{data:n,concurrency:t,handler:i}=e,[r,o]=(0,j.useReducer)(p,{data:n,finishedCount:0,runningCount:0,output:n?Array(n.length).fill(void 0):void 0});if((0,j.useEffect)(()=>{n&&o({type:"resetData",payload:{data:n}})},[n]),r.data){let e=r.data.length;if(r.runningCount<t&&r.finishedCount+r.runningCount<e){let e=r.finishedCount+r.runningCount;i(r.data[e]).then(n=>o({type:"setOutput",payload:{index:e,value:n}})),o({type:"incrementRunning"})}}return{semaphore:r}}({data:null==m?void 0:null===(e=m.similarity)||void 0===e?void 0:e.result,concurrency:6,handler:H}),Z=(null==m?void 0:null===(n=m.similarity)||void 0===n?void 0:n.result)||Array(24).fill(void 0).map((e,n)=>({id:n}));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.Z,{logo:!0,searchBar:!0,container:!0,elevation:2,sx:{mb:3}}),(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(A,{obj:i,qResult:m,qSuccess:h,qError:f,qLoading:v}),(0,r.jsx)(l.Z,{variant:"h5",sx:{mt:6},children:"Similar Galaxies"}),(0,r.jsx)(a.Z,{}),(h||v)&&Z.length>0?(0,r.jsx)(c.Z,{sx:{width:"100%"},cols:6,rowHeight:200,children:Z.map((e,n)=>{var t,i;return(0,r.jsx)(d.Z,{sx:{borderRadius:2},children:(null==g?void 0:null===(t=g.output)||void 0===t?void 0:t[n])?(0,r.jsx)("img",{"data-x":"ra=".concat(g.data[n].ra,"&dec=").concat(g.data[n].dec),src:null==g?void 0:null===(i=g.output)||void 0===i?void 0:i[n],alt:"",width:150,height:150,style:{borderRadius:"4px"}}):(0,r.jsx)(u.Z,{width:"100%",height:"100%",variant:"rectangular",animation:"pulse"})},e.id)})}):(0,r.jsx)(T,{sx:{mt:6}})]})]})}function K(){return(0,r.jsx)(j.Suspense,{children:(0,r.jsx)(J,{})})}}},function(e){e.O(0,[581,292,157,249,966,282,971,23,744],function(){return e(e.s=3949)}),_N_E=e.O()}]);