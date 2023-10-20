function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
      const li = document.createElement('li');
      li.innerHTML = `
        ${taskText}
        <button class="delete-button" onclick="removeTask(this)">Delete</button>
      `;
      taskList.appendChild(li);
      taskInput.value = '';
    }
  }
  
  function removeTask(button) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(button.parentElement);
  }
  