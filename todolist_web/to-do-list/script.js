const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");



function addTask() {
  if (inputBox.value.trim() === '') {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveDate();
  }
  inputBox.value = "";
}
const addButton = document.querySelector(".row button");
addButton.addEventListener("click", addTask);

listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveDate();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveDate();
  }
});

function saveDate() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data") ||"";
}

showTask();