var userInput = document.getElementById("uinput");
var addbtn = document.getElementsByClassName("adbtn")[0];
var tasks = document.getElementsByClassName("todos")[0];

const addTodo = () => {
  var item = document.createElement("DIV");
  item.innerHTML = userInput.value + '<i class="fa-regular fa-trash-can"></i>';
  item.classList.add("itemlist");
  tasks.appendChild(item);
  userInput.value = "";
  item.style.display = "flex";
  item.addEventListener("click", function () {
    this.remove();
  });
};
addbtn.addEventListener("click", addTodo);
