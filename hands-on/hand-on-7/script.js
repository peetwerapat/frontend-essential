const login = async (username, password) => {
  try {
    const res = await fetch("https://api.learnhub.thanayut.in.th/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`${res.status} - ${data.message}`);
    }

    return data.accessToken;
  } catch (err) {
    alert(err);
  }
};

const getMyInformation = async () => {
  const token = localStorage.getItem("token");

  try {
    const res = await fetch("https://api.learnhub.thanayut.in.th/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(),
    });
    const data = await res.json();

    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const main = () => {
  const usernameInput = document.getElementById("username");

  const passwordInput = document.getElementById("password");

  const submitButton = document.getElementById("submit");

  const getMyInFoButton = document.getElementById("get-info");

  getMyInFoButton.addEventListener("click", getMyInformation);

  submitButton.addEventListener("click", async (e) => {
    e.preventDefault();

    if (!passwordInput.value || !usernameInput.value) {
      alert("Please input something");
      return;
    }
    console.log(usernameInput.value, passwordInput.value);
    console.log(await login(usernameInput.value, passwordInput.value));

    const accessToken = await login(usernameInput.value, passwordInput.value);

    localStorage.setItem("token", accessToken);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
