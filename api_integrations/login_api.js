function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

const form = $("#login-form");
const errorMessage = $("#error-message");
const loginButton = $("#login-button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loginButton.textContent = "Please Wait ...";
  const data = new FormData(form);
  const formData = Object.fromEntries(data);

  fetch(`https://api.cognospheredynamics.com/api/auth/adminlogin`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      loginButton.textContent = "Login";
      if (data.error) {
        errorMessage.classList.remove("hidden");
      }
      window.location.href = "dashboard.html";
    })
    .catch((error) => console.log(error));
});
