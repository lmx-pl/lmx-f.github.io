(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();(function(){var u="__lumex_url_replacer_v5";if(window[u])return;window[u]=!0;var n="https://p.lumex.cloud",d=/^(https?:\/\/)?([\w-]+\.)?lumex\.([a-z]{2,})(\/.*)?$/i,c=new RegExp("^"+n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"(/.*)?$","i");function e(r){var o=r.src||r.dataset&&r.dataset.src;if(o&&!c.test(o)){var i=o.match(d);if(i){var a=i[1]||"https://",f=i[4]||"",p=n.replace(/^https?:\/\//,""),l=a+p+f;r.src&&(r.src=l),r.dataset&&r.dataset.src&&(r.dataset.src=l)}}}function t(){for(var r=document.body?document.body.getElementsByTagName("iframe"):[],o=0;o<r.length;o++)e(r[o])}function s(){t();var r=new MutationObserver(function(o){o.forEach(function(i){i.addedNodes.forEach(function(a){a.tagName==="IFRAME"&&e(a)})})});r.observe(document.body,{childList:!0,subtree:!0})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",s):s()})();