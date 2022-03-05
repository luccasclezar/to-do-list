import TaskCheck from "../../objects/task-check";
import ItemRemoval from "../../objects/task-delete";
import "./style.css";

function TaskName() {
  window.taskName = {};
  window.taskName.handdleClick = (event) => {
    const $origin = event.target;
    const $article = $origin.parentElement;
    const $h1 = $article.children[0];
    $h1.classList.toggle("task-check");
  };

  window.taskName.delete = (event) => {
    const $origin = event.target;
    const $article = $origin.parentElement;
    const $h1 = $article.children[0];
    const $section = $origin.closest(".task-div");
    console.log($section.children.length);

    if ($section.children.length == 1) {
      $article.remove();
      $section.classList.remove("task-div-active");
    } else {
      $article.remove();
    }
  };
  let $Input = document.getElementById("input-item");
  let $task = $Input.value;
  return /*html*/ `
      <article id='task-article'>
        <h1 id='task-name'>${$task}</h1>
        <img src='/to-do-list/images/check.png' alt='Completar tarefa' onclick='taskName.handdleClick(event)' id='check-icon'>
        <img src='/to-do-list/images/delete.png' alt='Deletar tarefa' onclick='taskName.delete(event)' id='delete-icon'>
      </article>
    `;
}

export default TaskName;
