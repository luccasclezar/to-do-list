import TaskName from "../../components/task-name";

function AddTask() {
  let $Input = document.getElementById("input-item").value;

  if ($Input == "") {
    window.alert("Escreva uma tarefa");
  } else {
    let $emptydiv = document.getElementById("task-div");
    $emptydiv.classList.add("task-div-active");

    $emptydiv.insertAdjacentHTML("beforeend", `${TaskName()}`);
  }
}

export default AddTask;
