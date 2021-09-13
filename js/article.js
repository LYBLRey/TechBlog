const newFormHandler = async (event) => {
  event.preventDefault()

  const name = document.querySelector("#article-name").value.trim()
  const content = document.querySelector("#article-content").value.trim()

  if (name && content) {
    const response = await fetch(`/api/articles`, {
      method: "POST",
      body: JSON.stringify({ name, content }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      document.location.replace("/articles")
    } else {
      alert("Failed to create article")
    }
  }
}

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id")

    const response = await fetch(`/api/articles/${id}`, {
      method: "DELETE",
    })

    if (response.ok) {
      document.location.replace("/articles")
    } else {
      alert("Failed to delete article")
    }
  }
}

window.onload = function () {
  var newArticle = document.querySelector(".new-article-form")
  if (newArticle) {
    newArticle.addEventListener("click", newFormHandler, false)
  }
  // document
  //   .querySelector('.new-article-form')
  //   .addEventListener('submit', newFormHandler);

  var deleteBtn = document.querySelector(".article-list")
  if (deleteBtn) {
    deleteBtn.addEventListener("click", delButtonHandler, false)
  }
  // document
  //   .querySelector('.article-list')
  //   .addEventListener('click', delButtonHandler);
}
