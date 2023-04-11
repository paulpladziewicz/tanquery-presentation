import { useQuery } from '@tanstack/react-query'
import { getTodos } from "../queryFunctions";


function Todos() {
    const {isLoading, error, data: todos} = useQuery({
        queryKey: ['todos'],
        queryFn: getTodos,
        // placeholderData: [],
        //refetchInterval: 10 * 1000 // 10 seconds
    })

    const renderContent = () => {
        if (isLoading) {
            return (
                <div>Loading...</div>
            );
        }

        if (error) {
            return (
                <div>An error occurred. Please try again later.</div>
            );
        }

        return todos.map(todo => <div className="todo" key={todo.id}>{todo.task}</div>)
    }

    return (
        <div className="todos-container">
            {renderContent()}
        </div>
    )
}

export default Todos;