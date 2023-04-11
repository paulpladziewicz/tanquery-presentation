import Todos from "./components/Todos";
import TodoInput from "./components/TodoInput";

function App() {
    return (
        <div className="app-container">
            <h1>Todo List</h1>
            <TodoInput/>
            <Todos/>
        </div>
    );
}

export default App;
