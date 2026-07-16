document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // State Array to track learning task entries
    let tasks = [];

    // Render interface helper
    function renderTasks() {
        taskList.innerHTML = '';
        
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            if (task.completed) {
                li.classList.add('completed');
            }

            li.innerHTML = `
                <span>${task.text}</span>
                <div class="task-buttons">
                    <button class="complete-btn" onclick="toggleTask(${index})">✓</button>
                    <button class="delete-btn" onclick="deleteTask(${index})">✗</button>
                </div>
            `;
            taskList.appendChild(li);
        });
    }

    // Capture dynamic planner form submits
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = taskInput.value.trim();
        if (text) {
            tasks.push({ text, completed: false });
            taskInput.value = '';
            renderTasks();
        }
    });

    // Mark task as completed
    window.toggleTask = (index) => {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    };

    // Remove task from list arrays
    window.deleteTask = (index) => {
        tasks.splice(index, 1);
        renderTasks();
    };
});