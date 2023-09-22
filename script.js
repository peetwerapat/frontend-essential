const main = () => {
  // * Frontend List
  const frontendInput = document.getElementById("frontend");

  const frontendButton = document.getElementById("add-front");

  const frontendMileStonesList = document.getElementById("frontend-milestone");

  frontendButton.addEventListener("click", (e) => {
    e.preventDefault();

    const newList = document.createElement("li");

    newList.textContent = frontendInput.value;

    frontendMileStonesList.appendChild(newList);
  });

  // * Backend List
  const backendInput = document.getElementById("backend");

  const backendButton = document.getElementById("add-back");

  const backendMileStonesList = document.getElementById("backend-milestone");

  backendButton.addEventListener("click", (e) => {
    e.preventDefault();

    const newList = document.createElement("li");

    newList.textContent = backendInput.value;

    backendMileStonesList.appendChild(newList);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
