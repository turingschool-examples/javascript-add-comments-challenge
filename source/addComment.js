$(document).ready(() => {
  $('button[id="new_comment_button"]').click((event) => {
    event.preventDefault()

    const form    = document.createElement("form")
    const comment = document.createElement("textarea")
    const author  = document.createElement("input")
    const submit  = document.createElement("input")

    form.id             = "new_comment"
    form.style          = "display: block;"
    comment.placeholder = "Your text here"
    author.id           = "authorName"
    author.type         = "text"
    author.placeholder  = "author"
    submit.type         = "submit"
    submit.placeholder  = "Submit Comment"

    form.appendChild(comment)
    form.appendChild(author)
    form.appendChild(submit)

    document.getElementsByTagName('body')[0].appendChild(form)

    $(submit).click((event) => {
      event.preventDefault()
      if ($(comment).val()){
        $(comment_list).append(`<li>${$(comment).val()} <span class="author">${$(author).val()}</span></li>`)
        $(new_comment).toggle()
      }
    })
  })
})
