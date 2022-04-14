//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create List item
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Add todo item to local storage
    saveLocalTodos(todoInput.value);
    //checkmark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check" </i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash" </i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    //Append todo list item
    todoList.appendChild(todoDiv);
    //Clear input value
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    // Delete todo
    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        // Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });

    }

    // Check mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function saveLocalTodos(todo) {
    // check for files
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }else{ 
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    }
