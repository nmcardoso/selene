(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3464:function(t,e,s){Promise.resolve().then(s.bind(s,2383))},9337:function(t,e,s){"use strict";s.d(e,{IV:function(){return c},If:function(){return d}});var i=s(7437),n=s(2265),r=s(2555),a=s.n(r),o=s(4444),u=t=>(0,o.Z)({palette:{mode:t},typography:{fontFamily:a().style.fontFamily},components:{MuiAlert:{styleOverrides:{root:t=>{let{ownerState:e}=t;return{..."info"===e.severity&&{backgroundColor:"#60a5fa"}}}}}}}),l=s(1705);let h=(0,n.createContext)({toggleColorMode:()=>{}});function c(t){let[e,s]=(0,n.useState)("dark"),r=(0,n.useMemo)(()=>({toggleColorMode:()=>{s(t=>"light"===t?"dark":"light")}}),[]),a=(0,n.useMemo)(()=>u(e),[e]);return(0,i.jsx)(h.Provider,{value:r,children:(0,i.jsx)(l.Z,{theme:a,children:t.children})})}function d(){return(0,n.useContext)(h)}},2383:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return A}});var i=s(7437),n=s(2265),r=s(2988),a=s(6309),o=s(6132),u=s(6463);function l(t){let{options:e,CacheProvider:s=o.C,children:l}=t,[h]=n.useState(()=>{var t;let s=(0,a.Z)((0,r.Z)({},e,{key:null!=(t=null==e?void 0:e.key)?t:"mui"}));s.compat=!0;let i=s.insert,n=[];return s.insert=function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];null!=e&&e.enableCssLayer&&(r[1].styles="@layer mui {".concat(r[1].styles,"}"));let[o,u]=r;return void 0===s.inserted[u.name]&&n.push({name:u.name,isGlobal:!o}),i(...r)},{cache:s,flush:()=>{let t=n;return n=[],t}}});return(0,u.useServerInsertedHTML)(()=>{let t=h.flush();if(0===t.length)return null;let s="",r=h.cache.key,a=[];return t.forEach(t=>{let{name:e,isGlobal:i}=t,n=h.cache.inserted[e];"boolean"!=typeof n&&(i?a.push({name:e,style:n}):(s+=n,r+=" ".concat(e)))}),(0,i.jsxs)(n.Fragment,{children:[a.map(t=>{let{name:s,style:n}=t;return(0,i.jsx)("style",{nonce:null==e?void 0:e.nonce,"data-emotion":"".concat(h.cache.key,"-global ").concat(s),dangerouslySetInnerHTML:{__html:n}},s)}),s&&(0,i.jsx)("style",{nonce:null==e?void 0:e.nonce,"data-emotion":r,dangerouslySetInnerHTML:{__html:s}})]})}),(0,i.jsx)(s,{value:h.cache,children:l})}var h=s(9281),c=s(1246);let d=(t,e)=>(0,r.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},e&&!t.vars&&{colorScheme:t.palette.mode}),f=t=>(0,r.Z)({color:(t.vars||t).palette.text.primary},t.typography.body1,{backgroundColor:(t.vars||t).palette.background.default,"@media print":{backgroundColor:(t.vars||t).palette.common.white}}),y=function(t){var e;let s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i={};s&&t.colorSchemes&&Object.entries(t.colorSchemes).forEach(e=>{var s;let[n,r]=e;i[t.getColorSchemeSelector(n).replace(/\s*&/,"")]={colorScheme:null==(s=r.palette)?void 0:s.mode}});let n=(0,r.Z)({html:d(t,s),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:t.typography.fontWeightBold},body:(0,r.Z)({margin:0},f(t),{"&::backdrop":{backgroundColor:(t.vars||t).palette.background.default}})},i),a=null==(e=t.components)||null==(e=e.MuiCssBaseline)?void 0:e.styleOverrides;return a&&(n=[n,a]),n};var m=function(t){let{children:e,enableColorScheme:s=!1}=(0,h.Z)({props:t,name:"MuiCssBaseline"});return(0,i.jsxs)(n.Fragment,{children:[(0,i.jsx)(c.Z,{styles:t=>y(t,s)}),e]})},p=s(6298),g=s(2459),v=s(9948),b=s(9010),C=class extends b.l{constructor(t={}){super(),this.config=t,this.#t=new Map}#t;build(t,e,s){let i=e.queryKey,n=e.queryHash??(0,p.Rm)(i,e),r=this.get(n);return r||(r=new g.A({cache:this,queryKey:i,queryHash:n,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(i)}),this.add(r)),r}add(t){this.#t.has(t.queryHash)||(this.#t.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#t.get(t.queryHash);e&&(t.destroy(),e===t&&this.#t.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){v.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#t.get(t)}getAll(){return[...this.#t.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,p._x)(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>(0,p._x)(t,e)):e}notify(t){v.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){v.V.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){v.V.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},x=s(3494),q=s(924),O=class extends x.F{#e;#s;#i;constructor(t){super(),this.mutationId=t.mutationId,this.#s=t.mutationCache,this.#e=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#e.includes(t)||(this.#e.push(t),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#e=this.#e.filter(e=>e!==t),this.scheduleGc(),this.#s.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#e.length||("pending"===this.state.status?this.scheduleGc():this.#s.remove(this))}continue(){return this.#i?.continue()??this.execute(this.state.variables)}async execute(t){this.#i=(0,q.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#n({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#n({type:"pause"})},onContinue:()=>{this.#n({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#s.canRun(this)});let e="pending"===this.state.status,s=!this.#i.canStart();try{if(!e){this.#n({type:"pending",variables:t,isPaused:s}),await this.#s.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#n({type:"pending",context:e,variables:t,isPaused:s})}let i=await this.#i.start();return await this.#s.config.onSuccess?.(i,t,this.state.context,this),await this.options.onSuccess?.(i,t,this.state.context),await this.#s.config.onSettled?.(i,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(i,null,t,this.state.context),this.#n({type:"success",data:i}),i}catch(e){try{throw await this.#s.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#s.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#n({type:"error",error:e})}}finally{this.#s.runNext(this)}}#n(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),v.V.batch(()=>{this.#e.forEach(e=>{e.onMutationUpdate(t)}),this.#s.notify({mutation:this,type:"updated",action:t})})}},P=class extends b.l{constructor(t={}){super(),this.config=t,this.#r=new Map,this.#a=Date.now()}#r;#a;build(t,e,s){let i=new O({mutationCache:this,mutationId:++this.#a,options:t.defaultMutationOptions(e),state:s});return this.add(i),i}add(t){let e=w(t),s=this.#r.get(e)??[];s.push(t),this.#r.set(e,s),this.notify({type:"added",mutation:t})}remove(t){let e=w(t);if(this.#r.has(e)){let s=this.#r.get(e)?.filter(e=>e!==t);s&&(0===s.length?this.#r.delete(e):this.#r.set(e,s))}this.notify({type:"removed",mutation:t})}canRun(t){let e=this.#r.get(w(t))?.find(t=>"pending"===t.state.status);return!e||e===t}runNext(t){let e=this.#r.get(w(t))?.find(e=>e!==t&&e.state.isPaused);return e?.continue()??Promise.resolve()}clear(){v.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...this.#r.values()].flat()}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,p.X7)(e,t))}findAll(t={}){return this.getAll().filter(e=>(0,p.X7)(t,e))}notify(t){v.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){let t=this.getAll().filter(t=>t.state.isPaused);return v.V.batch(()=>Promise.all(t.map(t=>t.continue().catch(p.ZT))))}};function w(t){return t.options.scope?.id??String(t.mutationId)}var M=s(4939),Z=s(9937);function Q(t,{pages:e,pageParams:s}){let i=e.length-1;return t.getNextPageParam(e[i],e,s[i],s)}var S=class{#o;#s;#u;#l;#h;#c;#d;#f;constructor(t={}){this.#o=t.queryCache||new C,this.#s=t.mutationCache||new P,this.#u=t.defaultOptions||{},this.#l=new Map,this.#h=new Map,this.#c=0}mount(){this.#c++,1===this.#c&&(this.#d=M.j.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#o.onFocus())}),this.#f=Z.N.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#o.onOnline())}))}unmount(){this.#c--,0===this.#c&&(this.#d?.(),this.#d=void 0,this.#f?.(),this.#f=void 0)}isFetching(t){return this.#o.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#s.findAll({...t,status:"pending"}).length}getQueryData(t){let e=this.defaultQueryOptions({queryKey:t});return this.#o.get(e.queryHash)?.state.data}ensureQueryData(t){let e=this.getQueryData(t.queryKey);if(void 0===e)return this.fetchQuery(t);{let s=this.defaultQueryOptions(t),i=this.#o.build(this,s);return t.revalidateIfStale&&i.isStaleByTime(s.staleTime)&&this.prefetchQuery(s),Promise.resolve(e)}}getQueriesData(t){return this.#o.findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,s){let i=this.defaultQueryOptions({queryKey:t}),n=this.#o.get(i.queryHash),r=n?.state.data,a=(0,p.SE)(e,r);if(void 0!==a)return this.#o.build(this,i).setData(a,{...s,manual:!0})}setQueriesData(t,e,s){return v.V.batch(()=>this.#o.findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,s)]))}getQueryState(t){let e=this.defaultQueryOptions({queryKey:t});return this.#o.get(e.queryHash)?.state}removeQueries(t){let e=this.#o;v.V.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let s=this.#o,i={type:"active",...t};return v.V.batch(()=>(s.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){let s={revert:!0,...e};return Promise.all(v.V.batch(()=>this.#o.findAll(t).map(t=>t.cancel(s)))).then(p.ZT).catch(p.ZT)}invalidateQueries(t={},e={}){return v.V.batch(()=>{if(this.#o.findAll(t).forEach(t=>{t.invalidate()}),"none"===t.refetchType)return Promise.resolve();let s={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(s,e)})}refetchQueries(t={},e){let s={...e,cancelRefetch:e?.cancelRefetch??!0};return Promise.all(v.V.batch(()=>this.#o.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,s);return s.throwOnError||(e=e.catch(p.ZT)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(p.ZT)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let s=this.#o.build(this,e);return s.isStaleByTime(e.staleTime)?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(p.ZT).catch(p.ZT)}fetchInfiniteQuery(t){var e;return t.behavior=(e=t.pages,{onFetch:(t,s)=>{let i=async()=>{let s;let i=t.options,n=t.fetchOptions?.meta?.fetchMore?.direction,r=t.state.data?.pages||[],a=t.state.data?.pageParams||[],o=!1,u=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?o=!0:t.signal.addEventListener("abort",()=>{o=!0}),t.signal)})},l=t.options.queryFn&&t.options.queryFn!==p.CN?t.options.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${t.options.queryHash}'`)),h=async(e,s,i)=>{if(o)return Promise.reject();if(null==s&&e.pages.length)return Promise.resolve(e);let n={queryKey:t.queryKey,pageParam:s,direction:i?"backward":"forward",meta:t.options.meta};u(n);let r=await l(n),{maxPages:a}=t.options,h=i?p.Ht:p.VX;return{pages:h(e.pages,r,a),pageParams:h(e.pageParams,s,a)}};if(n&&r.length){let t="backward"===n,e={pages:r,pageParams:a},o=(t?function(t,{pages:e,pageParams:s}){return t.getPreviousPageParam?.(e[0],e,s[0],s)}:Q)(i,e);s=await h(e,o,t)}else{s=await h({pages:[],pageParams:[]},a[0]??i.initialPageParam);let t=e??r.length;for(let e=1;e<t;e++){let t=Q(i,s);s=await h(s,t)}}return s};t.options.persister?t.fetchFn=()=>t.options.persister?.(i,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},s):t.fetchFn=i}}),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(p.ZT).catch(p.ZT)}resumePausedMutations(){return Z.N.isOnline()?this.#s.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#o}getMutationCache(){return this.#s}getDefaultOptions(){return this.#u}setDefaultOptions(t){this.#u=t}setQueryDefaults(t,e){this.#l.set((0,p.Ym)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#l.values()],s={};return e.forEach(e=>{(0,p.to)(t,e.queryKey)&&(s={...s,...e.defaultOptions})}),s}setMutationDefaults(t,e){this.#h.set((0,p.Ym)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#h.values()],s={};return e.forEach(e=>{(0,p.to)(t,e.mutationKey)&&(s={...s,...e.defaultOptions})}),s}defaultQueryOptions(t){if(t._defaulted)return t;let e={...this.#u.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,p.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),!0!==e.enabled&&e.queryFn===p.CN&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#u.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#o.clear(),this.#s.clear()}},_=s(3191),j=s(9337);s(6975),s(9493),s(8091),s(2534);let E=new S;function A(t){return(0,i.jsx)("html",{lang:"en",children:(0,i.jsx)("body",{children:(0,i.jsx)(l,{options:{enableCssLayer:!0},children:(0,i.jsxs)(j.IV,{children:[(0,i.jsx)(m,{}),(0,i.jsx)(_.aH,{client:E,children:t.children})]})})})})}},1246:function(t,e,s){"use strict";s.d(e,{Z:function(){return h}});var i=s(2988);s(2265);var n=s(6003),r=s(4874),a=s(7437),o=function(t){let{styles:e,themeId:s,defaultTheme:i={}}=t,o=(0,r.Z)(i),u="function"==typeof e?e(s&&o[s]||o):e;return(0,a.jsx)(n.Z,{styles:u})},u=s(7547),l=s(2737),h=function(t){return(0,a.jsx)(o,(0,i.Z)({},t,{defaultTheme:u.Z,themeId:l.Z}))}},1705:function(t,e,s){"use strict";s.d(e,{Z:function(){return b}});var i=s(2988),n=s(3950),r=s(2265);let a=r.createContext(null);function o(){return r.useContext(a)}var u="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",l=s(7437),h=function(t){let{children:e,theme:s}=t,n=o(),h=r.useMemo(()=>{let t=null===n?s:"function"==typeof s?s(n):(0,i.Z)({},n,s);return null!=t&&(t[u]=null!==n),t},[s,n]);return(0,l.jsx)(a.Provider,{value:h,children:e})},c=s(6132),d=s(4828),f=s(5158);let y={};function m(t,e,s){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return r.useMemo(()=>{let r=t&&e[t]||e;if("function"==typeof s){let a=s(r),o=t?(0,i.Z)({},e,{[t]:a}):a;return n?()=>o:o}return t?(0,i.Z)({},e,{[t]:s}):(0,i.Z)({},e,s)},[t,e,s,n])}var p=function(t){let{children:e,theme:s,themeId:i}=t,n=(0,d.Z)(y),r=o()||y,a=m(i,n,s),u=m(i,r,s,!0),p="rtl"===a.direction;return(0,l.jsx)(h,{theme:u,children:(0,l.jsx)(c.T.Provider,{value:a,children:(0,l.jsx)(f.Z,{value:p,children:e})})})},g=s(2737);let v=["theme"];function b(t){let{theme:e}=t,s=(0,n.Z)(t,v),r=e[g.Z];return(0,l.jsx)(p,(0,i.Z)({},s,{themeId:r?g.Z:void 0,theme:r||e}))}},5158:function(t,e,s){"use strict";s.d(e,{V:function(){return l}});var i=s(2988),n=s(3950),r=s(2265),a=s(7437);let o=["value"],u=r.createContext(),l=()=>{let t=r.useContext(u);return null!=t&&t};e.Z=function(t){let{value:e}=t,s=(0,n.Z)(t,o);return(0,a.jsx)(u.Provider,(0,i.Z)({value:null==e||e},s))}},6975:function(){},9493:function(){},8091:function(){},2534:function(){},2555:function(t){t.exports={style:{fontFamily:"'__Roboto_d891f1', '__Roboto_Fallback_d891f1'",fontStyle:"normal"},className:"__className_d891f1"}}},function(t){t.O(0,[581,292,966,971,23,744],function(){return t(t.s=3464)}),_N_E=t.O()}]);