import{b as r,aS as i,b5 as c,_ as p,e as o,a6 as u,a7 as d,b6 as l}from"./index.885502c9.js";const m=()=>{const{pathname:t}=r(),[s,n]=i(()=>c.post("/fs/other",{path:t(),password:p(),method:"doc_preview"}));return(async()=>{const a=await n();l(a,e=>{aliyun.config({mount:document.querySelector("#office-preview"),url:e.preview_url}).setToken({token:e.access_token})})})(),o(d,{get loading(){return s()},get children(){return o(u,{w:"$full",h:"70vh",id:"office-preview"})}})};export{m as default};
