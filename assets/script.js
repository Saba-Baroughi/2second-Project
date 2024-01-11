let $ = document;
let addTodoForm = $.querySelector("form");
let inputElem = $.querySelector("input");
let todoUlElem = $.querySelector("ul");
// Adding row to the list
function addNewToDo(newTodoValue) {
  let newTodoLi = $.createElement("li");
  newTodoLi.className =
    "list-group-item d-flex justify-content-between align-items-center";
  console.log(newTodoLi);

  let newTodoTitleSpan = $.createElement("span");
  newTodoTitleSpan.textContent = newTodoValue;
  // Update items
  let newTodoEdit = $.createElement("i");
  newTodoEdit.className = "fa fa-pencil-square-o edit";
  newTodoEdit.addEventListener("click", function () {
    let editedValue = prompt("Edit todo:", newTodoValue);
    if (editedValue !== null) {
      newTodoTitleSpan.textContent = editedValue;
      updateSequenceNumbers();
    }
  });
  // Delete icon
  let newTodoTrash = $.createElement("i");
  newTodoTrash.className = "fa fa-trash-o delete";
  newTodoTrash.addEventListener("click", function () {
    newTodoLi.remove();
    updateSequenceNumbers();
  });
  // Check done
  let newTodoDone = $.createElement("i");
  newTodoDone.className = "fa fa-check-square-o done";
  newTodoDone.addEventListener("click", function () {
    newTodoTitleSpan.classList.toggle("done-item");
  });
  // appending to the li and Ul
  newTodoLi.append(newTodoTitleSpan, newTodoEdit, newTodoTrash, newTodoDone);
  todoUlElem.append(newTodoLi);
}

addTodoForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

// Enter key
inputElem.addEventListener("keydown", function (event) {
  let newTodoValue = event.target.value.trim();
  if (event.keyCode === 13) {
    if (newTodoValue) {
      inputElem.value = "";
      addNewToDo(newTodoValue);
      updateSequenceNumbers();
    }
  }
});
// Sequence numbers
function updateSequenceNumbers() {
  let todoItems = todoUlElem.children;
  for (let i = 0; i < todoItems.length; i++) {
    let sequenceNumberSpan = todoItems[i].querySelector("span");
    sequenceNumberSpan.textContent =
      i +
      1 +
      ". " +
      sequenceNumberSpan.textContent.slice(
        sequenceNumberSpan.textContent.indexOf(".") + 1
      );
  }
}
