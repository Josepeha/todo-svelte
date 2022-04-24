import {writable} from 'svelte/store';

export const todos = writable([]);

export const addTodo = (newTodo) => {
    todos.update(currentTodos => {
        return [
            ...currentTodos,
            {
                text: newTodo,
                completed: false,
                id: Date.now(),
            }
        ]
    })
};

export const deleteTodo = (todoToDeleteId) => {
    todos.update(currentTodos => {
        return currentTodos.filter(todo => todo.id !== todoToDeleteId);
    })
};

export const toggleTodoCompleted = (completedId) => {
    todos.update(currentTodos => {
        const index = currentTodos.findIndex(todo => todo.id === completedId);
        if (index === -1) throw {message: 'element not found in array... it cant be...'};
        currentTodos[index].completed = !currentTodos[index].completed;
        return currentTodos;
    })
};
