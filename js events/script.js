var buttonK = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}
function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));

  var btn = document.createElement("button");

  btn.innerHTML = "Delete";
  li.appendChild(btn);
  ul.appendChild(li);
  btn.addEventListener("click", deleteListItem);
  input.value = "";
}

function deleteListItem(event) {
  var listItem = event.target.parentElement;
  ul.removeChild(listItem);
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

buttonK.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
