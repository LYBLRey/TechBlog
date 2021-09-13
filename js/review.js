async function reviewFormHandler(event) {
  event.preventDefault()

  const comment = document.querySelector(".review-textarea").value.trim()

  const article_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ]

  if (comment) {
    // console.log(review trails_id);
    const response = await fetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify({
        article_id,
        comment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      order: [["id", "DESC"]],
    })

    if (response.ok) {
      document.location.reload()
    } else {
      document.location.reload()
    }
  }
}
;(function () {
  "use strict"
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("review-form")
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault()
              event.stopPropagation()
            }
            form.classList.add("was-validated")
            event.preventDefault()
            reviewFormHandler(event)
          },
          false
        )
      })
    },
    false
  )
})()
