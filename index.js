import"./assets/vendor-C6pSGDEb.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const n={email:"",message:""};function l(e){try{localStorage.setItem("feedback-form-state",JSON.stringify(e))}catch(r){console.error("Error saving to localStorage",r)}}function i(){try{const e=localStorage.getItem("feedback-form-state");return e?JSON.parse(e):null}catch(e){return console.error("Error loading from localStorage",e),null}}function u(e){try{document.querySelector('input[name="email"]').value=e.email,document.querySelector('textarea[name="message"]').value=e.message}catch(r){console.error("Error updating form fields",r)}}function d(e){try{e.reset()}catch(r){console.error("Error resetting form",r)}}document.querySelector(".feedback-form").addEventListener("input",e=>{try{const{name:r,value:a}=e.target;n[r]=a,l(n)}catch(r){console.error("Error handling input event",r)}});document.addEventListener("DOMContentLoaded",()=>{try{const e=i();e&&(Object.assign(n,e),u(n))}catch(e){console.error("Error on DOMContentLoaded",e)}});document.querySelector(".feedback-form").addEventListener("submit",e=>{e.preventDefault();try{if(!n.email||!n.message){alert("Fill please all fields");return}console.log(n),localStorage.removeItem("feedback-form-state"),n.email="",n.message="",d(e.target)}catch(r){console.error("Error handling form submission",r)}});
//# sourceMappingURL=index.js.map
