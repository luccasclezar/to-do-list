import "./styles/generic/reset.css";
import "./styles/elements/base.css";
import "./styles/settings/colors.css";

import InputHeader from "./objects/input-header";
import TaskDiv from "./objects/task-div";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
  "beforeend",
  `
    ${InputHeader()}
    ${TaskDiv()}
    
`
);

/* ${AddTask()} */
