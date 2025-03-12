function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let listItem = document.createElement("li");

    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");
    editButton.onclick = function() {
        editTask(taskSpan);
    };

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function() {
        removeTask(listItem);
    };

    listItem.appendChild(taskSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    
    taskList.appendChild(listItem);
    taskInput.value = "";
}

function removeTask(listItem) {
    listItem.remove();
}

function editTask(taskSpan) {
    let newText = prompt("Edit your task:", taskSpan.textContent);
    if (newText !== null && newText.trim() !== "") {
        taskSpan.textContent = newText.trim();
    }
}
