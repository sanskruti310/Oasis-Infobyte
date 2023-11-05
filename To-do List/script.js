document.addEventListener("DOMContentLoaded", function() {
    // Function to initialize the to-do list from local storage
    function initializeList() {
        const savedData = localStorage.getItem("data");
        if (savedData) {
            listContainer.innerHTML = savedData;
        }
    }

    // Function to add a new task
    function addTask() {
        const taskText = inputBox.value.trim();
        if (taskText === "") {
            alert("You must write something!");
        } else {
            const li = document.createElement("li");
            li.innerHTML = taskText;

            const closeBtn = document.createElement("span");
            closeBtn.innerHTML = "\u00d7";
            closeBtn.classList.add("close");

            li.appendChild(closeBtn);
            listContainer.appendChild(li);

            closeBtn.addEventListener("click", function() {
                listContainer.removeChild(li);
                saveData();
            });

            inputBox.value = "";
            saveData();
        }
    }

    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list");
    const addButton = document.getElementById("add-button");

    addButton.addEventListener("click", addTask);

    listContainer.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.classList.contains("close")) {
            e.target.parentElement.remove();
            saveData();
        }
    }, false);

    function saveData() {
        localStorage.setItem("data", listContainer.innerHTML);
    }

    initializeList();
});
