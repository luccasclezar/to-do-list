const l=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};l();function s(){return window.taskName={},window.taskName.handdleClick=r=>{r.target.parentElement.children[0].classList.toggle("task-check")},window.taskName.delete=r=>{const i=r.target,e=i.parentElement;e.children[0];const t=i.closest(".task-div");console.log(t.children.length),t.children.length==1?(e.remove(),t.classList.remove("task-div-active")):e.remove()},`
      <article id='task-article'>
        <h1 id='task-name'>${document.getElementById("input-item").value}</h1>
        <img src='/to-do-list/images/check.png' alt='Completar tarefa' onclick='taskName.handdleClick(event)' id='check-icon'>
        <img src='/to-do-list/images/delete.png' alt='Deletar tarefa' onclick='taskName.delete(event)' id='delete-icon'>
      </article>
    `}function c(){if(document.getElementById("input-item").value=="")window.alert("Escreva uma tarefa");else{let n=document.getElementById("task-div");n.classList.add("task-div-active"),n.insertAdjacentHTML("beforeend",`${s()}`)}}function d(){return window.inputItem={},window.inputItem.handlleClick=()=>{c()},`
    <form onSubmit='return false';>
    <input id='input-item' type='text' placeholder='Digite a tarefa'>
    <input id='submit-button' type='submit' onClick='inputItem.handlleClick()' value='Adicionar'>
    </form>
    `}function u(){return`
    <header class='input-header'>
    ${d()}
    </header>`}function m(){return`
  <section id='task-div' class='task-div'></section>`}const f=document.querySelector("#root");f.insertAdjacentHTML("beforeend",`
    ${u()}
    ${m()}
    
`);
