const TODO_SERVICE_ENDPOINT = 'https://phys43jlwi.execute-api.us-east-2.amazonaws.com/Prod/';

export const getTodos = async () => {
    const response = await fetch(TODO_SERVICE_ENDPOINT);
    return response.json();
}

export const postTodo = (body) => {
    fetch(TODO_SERVICE_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    });
}