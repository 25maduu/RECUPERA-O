

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        document.getElementById('errorMessage').style.display = 'block';
    } else {
        
        document.getElementById('errorMessage').style.display = 'none';

       
        const li = document.createElement('li');
        li.textContent = taskValue;

        document.getElementById('taskList').appendChild(li);

      
        taskInput.value = "";
    }
});

