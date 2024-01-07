let $ = document;
let inputElem = $.querySelector("input");
let addTodoForm = $.querySelector(".add");
let todoUlElem = $.querySelector(".todos");
//parameter allows to add as much as you can otherwise we could not add more than once
function addNewTodo(newTodoValue) {
  let newTodoLi = $.createElement("li");
  newTodoLi.className =
    "list-group-item d-flex justify-content-between align-items-center";

  let newTodoTitleSpan = $.createElement("span");
  newTodoTitleSpan.innerHTML = newTodoValue;

  let newTodoTrash = $.createElement("i");
  newTodoTrash.className = "fa fa-trash-o delete";

  newTodoTrash.addEventListener("click", function (event) {
    event.target.parentElement.remove(); //remove ul
  });

  newTodoLi.append(newTodoTitleSpan, newTodoTrash);

  todoUlElem.append(newTodoLi);

  console.log(newTodoLi);
}

addTodoForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

inputElem.addEventListener("keydown", function (event) {
  let newTodoValue = event.target.value.trim();
  //Enter=13,
  //if there is value in input so firstly clear it
  if (event.keyCode === 13) {
    if (newTodoValue) {
      inputElem.value = ""; // to erase the input to help user dont clean the input
      addNewTodo(newTodoValue);
    }
  }
});
