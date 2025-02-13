const button = document.getElementById("btn");
const form = document.getElementById("form");
const title = document.getElementById("title");
const description = document.getElementById("description");
const todosDiv = document.getElementById("todos");

const todos = [];
let count = 0;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    // put the todo into array
    const titleValue = title.value;
    const descriptionValue = description.value;
    count += 1
    const todo = {
        title: titleValue,
        description: descriptionValue,
        id: count,
    }
    console.log("todo: ", todo);
    todos.push(todo);
    console.log("All todos: ", todos);
    showTodos();
});


const showTodos = () => {
    todosDiv.innerHTML = "";
    if(todos.length > 0) {
        for (let todo of todos) {
            const div = document.createElement("div");
            const deleteButton = document.createElement("button");
            deleteButton.addEventListener("click", deleteTodo(todo.id));
            const updateButton = document.createElement("button");
            deleteButton.innerText = "delete";
            updateButton.innerText = "update";
            const p = document.createElement("p");
            p.innerHTML = `${todo.title} ${todo.description}`;
            div.appendChild(p);
            div.appendChild(deleteButton);
            div.appendChild(updateButton);
            todosDiv.appendChild(div);
        }
    } else {
       
    }
}


const deleteTodo = (id) => {

}


showTodos();


// todosDiv.innerHTML = `Hi ${todos[0].title}`;

{/* <div>
    <div>
        <p></p>
        <button></button>
        <button></button>
    </div>
</div> */}