// Add event listener to the form
document.querySelector('form').addEventListener('submit', handleSubmitForm);

//Ensure that submit form has contents
function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        console.log(input.value);
        addTodo(input.value);
    input.value = '';
}

//function to add todo list item
function addTodo(todo){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton" ><i class="fas fa-trash"></i></button>
    `;
    li.classList.add('todo-list-item');
    ul.appendChild(li);
}
// Helpers


//Add event listener to unordered list of items
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);

//Set up conditional function for delete or check
function handleClickDeleteOrCheck(e) {
    if (e.target.name == 'checkButton') {
        checkTodo(e);
    }
    if (e.target.name == 'deleteButton'){
        deleteTodo(e);
    }
}

function checkTodo (e) {
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through') {
        item.style.textDecoration = 'none';
    } else {
        item.style.textDecoration = 'line-through';
    }
}

function deleteTodo (e) {
    let item = e.target.parentNode;
    item.addEventListener('transitioned', function () {
        item.remove();
    });
    item.classList.add('todo-list-item-fall');
}

document.getElementById('clearAll').addEventListener('click', handleClearAll);

function handleClearAll(e) {
    document.querySelector('ul').innerHTML = '';
}