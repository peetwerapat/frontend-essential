const main = () => {
  const taskInput = document.getElementById("task");

  const taskButton = document.getElementById("add-task");

  const taskList = document.getElementById("all-task");

  taskButton.addEventListener("click", (e) => {
    e.preventDefault();

    const newList = document.createElement("li");

    if (!taskInput.value) {
      alert("Please input something!");
      return;
    }

    newList.textContent = taskInput.value;

    taskList.appendChild(newList);

    taskInput.value = "";
  });

  taksList.addEventListener("click", (e) => {
    if (e.target.tagName === "ul") {
      e.target.classList.toggle("checked");
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
