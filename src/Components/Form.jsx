import PropTypes from "prop-types";
import Button from "./Button";

function Form({ addTodo }) {
  const onSubmit = (event) => {
    event.preventDefault();

    const todoText = event.currentTarget.elements.todo.value;
    addTodo(todoText);
    event.currentTarget.reset();
  };

  return (
    <form className="form-wrapper" onSubmit={onSubmit}>
      <input
        id="todo"
        className="input"
        type="text"
        placeholder="Ajoute une tache"
      />
      <Button>Submit</Button>
    </form>
  );
}

Form.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default Form;
