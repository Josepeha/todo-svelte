<script>
    let todo = '';
    import {addTodo} from "../stores/todoStore.js"
    function handleSubmit() {
        addTodo(todo);
        emptyTodo();
    }
    function emptyTodo() {
        todo = '';
    }
</script>

<form on:submit|preventDefault={handleSubmit} class="my-6">
    <div class="flex flex-col text-sm mb-2">
        <label for="todo">Todo</label>
        <input bind:value={todo}
               type="text" id="todo" name="todo"
               placeholder="What needs doing?"
               class="appearance-none shadow-smrounded-lg
                      border-gray-200 p-2 focus:outline-none">
    </div>
    <button type="submit"
            class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600"
    >Add Todo</button>
</form>
