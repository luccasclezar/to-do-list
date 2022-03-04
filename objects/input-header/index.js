import InputItem from "../../components/input-item";
import "./style.css";

function InputHeader() {
  return `
    <header class='input-header'>
    ${InputItem()}
    </header>`;
}

export default InputHeader;
