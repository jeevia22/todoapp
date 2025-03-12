function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let listItem = document.createElement("li");

    // Create task text span
    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.classList.add("task-text");

    // Create Edit button
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");
    editButton.onclick = function() {
        editTask(taskSpan);
    };

    // Create Delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function() {
        listItem.remove();
    };

    // Append elements
    listItem.appendChild(taskSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    
    taskList.appendChild(listItem);
    taskInput.value = "";
}

function editTask(taskSpan) {
    let input = document.createElement("input");
    input.type = "text";
    input.value = taskSpan.textContent;
    input.classList.add("edit-input");

    // Replace the text with an input box
    taskSpan.replaceWith(input);
    input.focus();

    // Save the updated text on blur or Enter key
    input.addEventListener("blur", function() {
        saveTask(input, taskSpan);
    });

    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            saveTask(input, taskSpan);
        }
    });
}

function saveTask(input, taskSpan) {
    taskSpan.textContent = input.value;
    input.replaceWith(taskSpan);
}
