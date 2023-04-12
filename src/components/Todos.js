import { useQuery } from '@tanstack/react-query'
import { getTodos } from "../queryFunctions";


function Todos() {
    const {isLoading, error, data: todos} = useQuery({
        queryKey: ['todos'],
        queryFn: getTodos,
        // refetchInterval: 5 * 1000 // 5 seconds
    })

    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="loading">Loading...</div>
            );
        }

        if (error) {
            return (
                <div className="error">An error occurred. Please try again later.</div>
            );
        }

        if (todos.length === 0) {
            return <div className="no-todos">No tasks to complete today. 🙌</div>
        }

        return todos.map((todo, i) => <div className="todo" key={todo.id}><span>{i+1}</span>{todo.task}</div>)
    }

    return (
        <div className="todos-container">
            {renderContent()}
        </div>
    )
}

export default Todos;