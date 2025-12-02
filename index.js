import{a as w,S as v,i as n}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const q="https://pixabay.com/api/",S="53401349-bf79c90e9252dafda11b7b71c";async function f(s,o=1){const e={key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};return(await w.get(q,{params:e})).data}const p=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more"),R=new v(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const o=s.map(e=>`
    <a class="gallery-item" href="${e.largeImageURL}">
      <div class="photo-card">
        <img src="${e.webformatURL}" alt="${e.tags}" />

        <div class="info">
          <p class="info-item"><b>Likes</b> ${e.likes}</p>
          <p class="info-item"><b>Views</b> ${e.views}</p>
          <p class="info-item"><b>Comments</b> ${e.comments}</p>
          <p class="info-item"><b>Downloads</b> ${e.downloads}</p>
        </div>
      </div>
    </a>
  `).join("");p.insertAdjacentHTML("beforeend",o),R.refresh()}function $(){p.innerHTML=""}function g(){m.classList.add("show")}function L(){m.classList.remove("show")}function b(){h.classList.add("show")}function l(){h.classList.remove("show")}const M=document.querySelector(".form"),B=document.querySelector(".load-more");let d="",a=1,u=0;M.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){n.error({message:"Please enter a search query!",position:"topRight"});return}d=o,a=1,$(),l(),g();try{const e=await f(d,a);if(u=e.totalHits,e.hits.length===0){n.warning({message:"No images found. Try another query!",position:"topRight"});return}y(e.hits),a*15<u&&b()}catch{n.error({message:"Something went wrong. Try again later!",position:"topRight"})}finally{L()}});B.addEventListener("click",async()=>{a+=1,g(),l();try{const s=await f(d,a);y(s.hits),a*15>=u?(n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),l()):b()}catch{n.error({message:"Error loading more images.",position:"topRight"})}finally{L()}});
//# sourceMappingURL=index.js.map
