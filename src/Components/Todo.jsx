import PropTypes from "prop-types";
import Checkbox from "./Checkbox";
import trash from "../assets/icone/icons8-trash-30.png";

function Todo({ children, onDelete }) {
  return (
    <div className="todo-wrapper">
      <Checkbox />
      <label className="todo-text">{children}</label>
      <button onClick={onDelete} className="todo-delete">
        <img src={trash} alt="delete" />
      </button>
    </div>
  );
}

Todo.propTypes = {
  children: PropTypes.node.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Todo;
