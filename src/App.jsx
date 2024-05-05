import TodoList from "./Components/TodoList";
import Calculator from "./Components/Calculator";
import "../style.scss";
function App() {
  return (
    <>
      <h1>AgendStrauss</h1>
      <div className="container">
        <TodoList />
        <Calculator />
      </div>
    </>
  );
}

export default App;
