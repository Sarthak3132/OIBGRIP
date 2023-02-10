    
    const todoInput = document.querySelector('#todoInput');
    const addTodoBtn = document.querySelector('#addTodoBtn');
    
    const todoList = document.querySelector('#todoList');
    
    const categorizedTodoList = document.querySelector('#categorizedTodoList');
    
    addTodoBtn.addEventListener('click', function() {
      const todoValue = todoInput.value;
      
      const newTodo = document.createElement('li'); 
      newTodo.innerHTML = `
        ${todoValue}
        <button type="button" class="edit-todo-btn edt">Edit 🖊</button>
        <button type="button" class="mark-as-read-btn mrk">Mark as Read ✔</button>
        <button type="button" class="delete-todo-btn dlt">Delete 🥫</button>
      `;
      todoList.appendChild(newTodo);
      
      todoInput.value = '';
    });
    
    todoList.addEventListener('click', function(e) {
      if (e.target.classList.contains('delete-todo-btn')) {
        e.target.parentElement.remove();
      }
    });
    
    todoList.addEventListener('click', function(e) {
      if (e.target.classList.contains('edit-todo-btn')) {
        const todoText = e.target.parentElement.firstChild.textContent;
        todoInput.value = todoText;
        e.target.parentElement.remove();
      }
    });
    
    todoList.addEventListener('click', function(e) {
      if (e.target.classList.contains('mark-as-read-btn')) {
        const markedTodo = e.target.parentElement.firstChild.textContent;
        
        const markedTodoItem = document.createElement('li');
        markedTodoItem.textContent = markedTodo;
        categorizedTodoList.appendChild(markedTodoItem);
        
        e.target.parentElement.remove();
      }
    });
    
 
   