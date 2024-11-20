
        const todoForm = document.getElementById('todo-form');
        const taskInput = document.getElementById('task-input');
        const todoList = document.getElementById('todo-list');

        todoForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const taskText = taskInput.value.trim();
            if (taskText === '') return;

            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-btn';
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(listItem);
            });

            listItem.appendChild(deleteButton);
            todoList.appendChild(listItem);

            taskInput.value = '';
        });
    