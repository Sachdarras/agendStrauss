import TodoList from "./Components/TodoList";
import Calculator from "./Components/Calculator";
import Agenda from "./Components/Agenda";
import Clock from "./Components/Clock";
import "../style.scss";
function App() {
  return (
    <>
      <h1>AgendStrauss</h1>
      <Clock />
      <div className="container">
        <Agenda />
        <TodoList />
        <Calculator />
      </div>
    </>
  );
}

export default App;
