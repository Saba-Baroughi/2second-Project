// Selecting elements from the document
let $ = document;
let addTodoForm = $.querySelector("form");
let inputElem = $.querySelector("input");
let todoUlElem = $.querySelector("ul");

// Function to add a new to-do item to the list
function addNewToDo(newTodoValue) {
  // Create a new list item
  let newTodoLi = $.createElement("li");
  newTodoLi.className =
    "list-group-item d-flex justify-content-between align-items-center";

  // Create a span for the to-do title
  let newTodoTitleSpan = $.createElement("span");
  newTodoTitleSpan.textContent = newTodoValue;

  // Create icons for edit, delete, and mark as done
  let newTodoEdit = $.createElement("i");
  let newTodoTrash = $.createElement("i");
  let newTodoDone = $.createElement("i");
  //create icons through className
  newTodoEdit.className = "fa fa-pencil-square-o edit";
  newTodoTrash.className = "fa fa-trash-o delete";
  newTodoDone.className = "fa fa-check-square-o done";

  // Add event listeners for edit, delete, and mark as done

  newTodoEdit.addEventListener("click", function () {
    let editedValue = prompt("Edit todo:", newTodoValue);
    if (editedValue !== null) {
      newTodoTitleSpan.textContent = editedValue;
      updateSequenceNumbers();
    }
  });

  newTodoTrash.addEventListener("click", function () {
    newTodoLi.remove();
    updateSequenceNumbers();
  });

  newTodoDone.addEventListener("click", function () {
    newTodoTitleSpan.classList.toggle("done-item");
  });

  // Append elements to the list item and the list
  newTodoLi.append(newTodoTitleSpan, newTodoEdit, newTodoTrash, newTodoDone);
  todoUlElem.append(newTodoLi);
}

// Preventing form submission
addTodoForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

// Handling Enter key press
inputElem.addEventListener("keydown", function (event) {
  // Check if Enter key is pressed
  let newTodoValue = event.target.value.trim();
  if (event.keyCode === 13) {
    // If the input is not empty, add a new to-do item
    if (newTodoValue) {
      inputElem.value = "";
      addNewToDo(newTodoValue);
      updateSequenceNumbers();
    }
  }
});

// Function to update sequence numbers for each to-do item
function updateSequenceNumbers() {
  // Get all to-do items in the list
  let todoItems = todoUlElem.children;

  // Iterate through each item and update the sequence number
  for (let i = 0; i < todoItems.length; i++) {
    // Get the span element containing the to-do title
    let sequenceNumberSpan = todoItems[i].querySelector("span");

    // Update the sequence number in the to-do title
    sequenceNumberSpan.textContent =
      // Concatenate the new sequence number
      i +
      1 +
      // Add a dot and space after the sequence number
      ". " +
      // Extract the existing to-do title after the current sequence number
      sequenceNumberSpan.textContent.slice(
        sequenceNumberSpan.textContent.indexOf(".") + 1
      );
  }
}
