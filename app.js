const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTodo() {
    const noteText = inputBox.value.trim();

    if (noteText === '') {
        alert("Please enter a valid note.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = noteText;

    const deleteButton = document.createElement("span");
    deleteButton.textContent = "\u00d7";
    deleteButton.classList.add("deleteButton");
    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteButton);
    listContainer.appendChild(li);

    inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);
