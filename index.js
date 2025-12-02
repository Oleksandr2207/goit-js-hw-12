import{a as d,S as u,i as n}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="53401349-bf79c90e9252dafda11b7b71c",p="https://pixabay.com/api/";async function m(s){const o={key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(p,{params:o})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new u(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(t=>`
      <div class="photo-card">
        <a class="gallery-item" href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="info">
          <div class="info-item">
            <b>Likes</b>
            <span>${t.likes}</span>
          </div>
          <div class="info-item">
            <b>Views</b>
            <span>${t.views}</span>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <span>${t.comments}</span>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <span>${t.downloads}</span>
          </div>
        </div>
      </div>
      `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function g(){c.innerHTML=""}function b(){l.classList.add("show")}function v(){l.classList.remove("show")}const L=document.querySelector(".form");L.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(o===""){n.error({message:"Please enter a search query!",position:"topRight"});return}g(),b();try{const t=await m(o);if(t.hits.length===0){n.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits)}catch{n.error({message:"Something went wrong. Try again later!",position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
