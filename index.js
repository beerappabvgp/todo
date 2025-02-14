const button = document.getElementById("btn");
const form = document.getElementById("form");
const title = document.getElementById("title");
const description = document.getElementById("description");
const todosDiv = document.getElementById("todos");

let todos = [];
let count = 0;
let editingTodoId = null;

// Show todos on the UI
const showTodos = () => {
    todosDiv.innerHTML = ""; // Clear the display
    if (todos.length > 0) {
        todos.forEach((todo) => {
            const div = document.createElement("div");
            const deleteButton = document.createElement("button");
            const updateButton = document.createElement("button");
            div.classList.add("showTodo")
            deleteButton.innerText = "Delete";
            updateButton.innerText = "Update";

            // Add event listeners
            deleteButton.addEventListener("click", () => deleteTodo(todo.id));
            updateButton.addEventListener("click", () => updateTodo(todo.id));

            const p = document.createElement("p");
            p.innerHTML = `Title: ${todo.title}`;
            const p1 = document.createElement("p");
            p1.innerHTML = `Description: ${todo.description}`;

            div.appendChild(p);
            div.appendChild(p1);
            div.appendChild(deleteButton);
            div.appendChild(updateButton);
            todosDiv.appendChild(div);
        });
    } else {
        todosDiv.innerHTML = "<p>No todos yet!</p>";
    }
};

// Add a new todo
const addTodo = (e) => {
    e.preventDefault();
    const titleValue = title.value.trim();
    const descriptionValue = description.value.trim();

    if (!titleValue || !descriptionValue) {
        alert("Both title and description are required!");
        return;
    }

    if (editingTodoId !== null) {
        // Update the existing todo
        const todo = todos.find((t) => t.id === editingTodoId);
        if (todo) {
            todo.title = titleValue;
            todo.description = descriptionValue;
        }
        editingTodoId = null;
        button.innerText = "Add Todo";
    } else {
        // Add a new todo
        count++;
        todos.push({ id: count, title: titleValue, description: descriptionValue });
    }

    title.value = "";
    description.value = "";
    showTodos();
};

// Delete a todo
const deleteTodo = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
    showTodos();
};

// Prepare to update a todo
const updateTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
        title.value = todo.title;
        description.value = todo.description;
        editingTodoId = id;
        button.innerText = "Update Todo";
    }
};

// Attach event listener
form.addEventListener("submit", addTodo);

// Initial display
showTodos();