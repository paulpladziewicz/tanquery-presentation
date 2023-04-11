import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postTodo } from '../queryFunctions';
import { v4 as uuid } from 'uuid';

function TodoInput() {
    const [task, setTask] = useState('');
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: postTodo,
        onMutate: async (newTodo) => {
            await queryClient.cancelQueries({ queryKey: ['todos'] });
            const previousTodos = queryClient.getQueryData(['todos']);
            queryClient.setQueryData(['todos'], (old) => [...old, newTodo]);
            return { previousTodos };
        },
        onError: (err, newTodo, context) => {
            queryClient.setQueryData(['todos'], context.previousTodos);
        }
    });

    const onSubmit = () => {
        if (!task) return;

        const addTodoRequestBody = { id: uuid(), task };
        mutate(addTodoRequestBody);
    };

    return (
        <div>
            <input type="text" onChange={(e) => setTask(e.target.value)} />
            <button onClick={onSubmit}>Add Todo</button>
        </div>
    );
}

export default TodoInput;
