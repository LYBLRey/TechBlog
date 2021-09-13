window.onload = function () {
  // Modal Login/Signup Modal

  const loginEl = document.querySelector("#login")
  const modalBg = document.querySelector(".modal-background")
  const modalEl = document.querySelector(".modal")
  const signupEl = document.querySelector("#signup-modal")
  const modalSignup = document.querySelector(".modal-signup")

  const loginFormHandler = async (event) => {
    event.preventDefault()

    // Collect values from the login form
    const email = document.querySelector("#email-login").value.trim()
    const password = document.querySelector("#password-login").value.trim()

    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      })

      if (response.ok) {
        // If successful, redirect the browser to the article page
        document.location.replace("/")
      } else {
        alert(response.statusText)
      }
    }
  }

  loginEl.addEventListener("click", function () {
    modalEl.classList.add("is-active")
  })

  modalBg.addEventListener("click", function () {
    modalEl.classList.remove("is-active")
    modalSignup.classList.remove("is-active")
  })

  document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler)
}
