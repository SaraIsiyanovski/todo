const mainDiv = document.getElementById("list");
const input = document.getElementById("add");
const box = document.getElementById("box");

let index = 0;
let toDoList = [];

const showList = (array = toDoList) => {
  box.innerHTML = ``;
  array.forEach((element) => {
    console.log(element);

    const inputBox = document.createElement("p");
    inputBox.classList.add("input-p");

    box.appendChild(inputBox);

    const inputDiv = document.createElement("div");
    inputDiv.classList.add("input-div");
    inputBox.appendChild(inputDiv);

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.classList.add(element.done ? "done" : "do");
    inputDiv.appendChild(circle);
    circle.onclick = () => {
      element.done = !element.done;
      showList();
    };

    const paragraph = document.createElement("p");
    paragraph.innerHTML = element.name;
    inputDiv.appendChild(paragraph);

    const buttonDiv = document.createElement("div");
    const button = document.createElement("button");
    button.classList.add("btn-big");
    button.innerHTML = `Remove`;
    buttonDiv.appendChild(button);
    inputBox.appendChild(buttonDiv);
    button.onclick = () => {
      const newArr = toDoList.filter((toDo) => toDo.id !== element.id);
      toDoList = newArr;
      showList();
    };
  });
};

showList();

const addToList = () => {
  toDoList.push({ id: index, name: input.value, done: false });
  index++;
  console.log(toDoList);
  showList();
};

const filterList = (e) => {
  const search = document.getElementById("search");
  if (e.target.value === "") return showList();

  const searchList = toDoList.filter((item) => {
    return item.name.toLowerCase().includes(search.value);
  });

  showList(searchList);
};
