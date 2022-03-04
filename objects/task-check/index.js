function TaskCheck() {
  const $Task = document.querySelectorAll("h1");
  $Task.forEach((e) => {
    e.classList.toggle("task-check");
  });
}

export default TaskCheck;
