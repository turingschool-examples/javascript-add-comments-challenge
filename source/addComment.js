$(document).ready(function () {
  var $button = $("#new_comment_button")
  var $form = $("#new_comment")
  var $commentText = $("#new_comment textarea")
  var $commentAuthor = $("#authorName")

  $button.on("click", function (event) {
    event.preventDefault()
    toggle($form, $button)
    $("#new_comment textarea").focus()
  })

  $form.on("submit", function (event) {
    event.preventDefault()
    $commentText.val() && $commentAuthor.val() ? commentSuccess() : commentFailure()
  })

  function commentSuccess () {
    var comment = commentItem($commentText.val(), $commentAuthor.val())

    $("#comment_list").append(comment)
    toggle($form, $button)
    clearFields($commentText, $commentAuthor)
  }

  function commentFailure () {
    !$commentText.val() && alert("Comment required!")
    !$commentAuthor.val() && alert("Name required!")
  }

  function toggle () {
    Array.from(arguments).forEach(function (arg) {
      arg.toggle()
    })
  }

  function clearFields () {
    Array.from(arguments).forEach(function (arg) {
      arg.val("")
    })
  }

  function commentItem (commentText, commentAuthor) {
    return (
      "<li>" +
        commentText + "\n" +
        "<span class='author'>" + commentAuthor + "</span>" +
      "</li"
    )
  }
})
