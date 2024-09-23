(()=>{"use strict";const e=window.wp.element,t=window.wp.i18n,n=window.wp.components,o=WPorgContribBlock.pages;function r({step:r,onNext:a,onPrevious:c}){const i=o.length;return r<0&&(r=o.length),(0,e.createElement)("div",{className:"wporg-contributor-orientation--actions"},r>1&&(0,e.createElement)(n.Button,{onClick:c,variant:"secondary"},(0,t.__)("Previous","wporg")),r<i&&(0,e.createElement)(n.Button,{onClick:a,variant:"primary"},(0,t.__)("Next","wporg")))}function a({headline:t,value:n,onPrevious:o}){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("h2",{className:"wporg-contributor-orientation--title"},t),n.map((t=>{const n=WPorgContribBlock.teams[t];return(0,e.createElement)("div",{key:t,className:"wporg-contributor-orientation--team"},(0,e.createElement)("h3",{className:"wporg-contributor-orientation--team-name"},(0,e.createElement)("a",{href:n.url},(0,e.createElement)("img",{alt:"",src:`data:image/svg+xml;utf8,${n.icon}`}),n.name)),(0,e.createElement)("p",{className:"wporg-contributor-orientation--team-desc"},n.description))})),(0,e.createElement)(r,{step:-1,onPrevious:o}))}const c=window.wp.htmlEntities,i=window.wp.compose,s=Object.keys(WPorgContribBlock.teams);function l({step:o,headline:a,questions:u,teamList:m,value:p,onChange:g,onNext:d,onPrevious:w}){const E=(0,i.useInstanceId)(l),[b,f]=(0,e.useState)(p),[h,v]=(0,e.useState)(""),k=`q-${o}-${E}`;return m||(m=s),(0,e.createElement)("fieldset",null,(0,e.createElement)("legend",{className:"screen-reader-text"},a),(0,e.createElement)("p",{className:"wporg-contributor-orientation--title","aria-hidden":!0},a),u.map((({teams:t,label:r},a)=>m.some((e=>t.includes(e)))?(0,e.createElement)(n.CheckboxControl,{key:`${k}-${a}`,label:(0,c.decodeEntities)(r),checked:b.includes(`q${o}:`+t.join(",")),onChange:e=>{const n=`q${o}:`+t.join(",");e&&!b.includes(n)&&f([...b,n]),!e&&b.includes(n)&&f(b.filter((e=>e!==n)))}}):null)),!!h&&(0,e.createElement)(n.Notice,{status:"warning",onRemove:()=>v("")},h),(0,e.createElement)(r,{step:o,onPrevious:()=>{v(""),g(b),w()},onNext:()=>{v(""),b.filter((e=>e.startsWith(`q${o}:`))).length?(g(b),d()):v((0,t.__)("You must select at least one option","wporg"))}}))}const u=WPorgContribBlock.pages,m=Object.keys(WPorgContribBlock.teams),p=WPorgContribBlock.pages.reduce(((e,t)=>(e.push(t.stepTitle),e)),[]);function g(){const[n,o]=(0,e.useState)(0),[r,c]=(0,e.useState)([]),[i,s]=(0,e.useState)(m),g=(0,e.useRef)(null),d=()=>{g.current&&(g.current.tabIndex=-1,g.current.focus()),o(n-1)};(0,e.useEffect)((()=>{const e=[];for(let t=0;t<=n;t++){const n=r.filter((e=>e.startsWith(`q${t}`)));if(n.length){const t=[...new Set(n.join(",").replace(/q\d:/g,"").split(","))];e.push(t)}}s(function(e=[]){return e.reduce(((e,t)=>e.filter((e=>t.includes(e)))),m)}(e))}),[r,n]);const w=n<u.length&&u[n];if(!w)return null;const E=n>=u.length-1;return(0,e.createElement)("div",{className:"wporg-contributor-orientation"},(0,e.createElement)("ul",{className:"wporg-contributor-orientation--steps"},p.map(((o,r)=>(0,e.createElement)("li",{key:r,"aria-current":r===n?"step":null},(0,e.createElement)("strong",null,(0,t.sprintf)(/* translators: %s step number */
(0,t.__)("Step %s:","wporg"),r+1)),o)))),(0,e.createElement)("div",{className:"wporg-contributor-orientation--page",ref:g},E?(0,e.createElement)(a,{...w,value:i,onPrevious:d}):(0,e.createElement)(l,{...w,teamList:i,value:r,onChange:e=>{c(e)},onPrevious:d,onNext:()=>{g.current&&(g.current.tabIndex=-1,g.current.focus()),o(n+1)}})))}window.addEventListener("load",(function(){const t=document.querySelector(".wp-block-wporg-contributor-orientation");(0,e.createRoot)(t).render((0,e.createElement)(g,null))}))})();