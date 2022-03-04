import AddTask from "../../objects/added-task";
import "./style.css";

function InputItem() {
  window.inputItem = {};
  window.inputItem.handlleClick = () => {
    AddTask();
  };

  return /*html*/ `
    <form onSubmit='return false';>
    <input id='input-item' type='text' placeholder='Digite a tarefa'>
    <input id='submit-button' type='submit' onClick='inputItem.handlleClick()' value='Adicionar'>
    </form>
    `;
}

export default InputItem;
