import {writable} from 'svelte/store';

export const todos = writable([]);

export const addTodo = (newTodo) => {
    todos.update(currentTodos => {
        return [
            ...currentTodos,
            {
                newTodo,
                completed: false,
                id: Date.now(),
            }
        ]
    })
};

export const deleteTodo = (todoToDelete) => {
    todos.update(currentTodos => {
        return currentTodos.filter(todo => todo.id !== todoToDelete.id);
    })
};

export const toggleTodoCompleted = (id) => {
    todos.update(currentTodos => {
        const index = currentTodos.findIndex(todo => todo.id === todo.id);
        if (index === -1) throw {message: 'element not found in array... it cant be...'};
        currentTodos[index].completed = !currentTodos[index].completed;
        return currentTodos;
    })
};
