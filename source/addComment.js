$(document).ready(function(){
  // on click of New Comment replace button with form
  $("#new_comment_button").on("click", function(event) {
    event.preventDefault()
    replaceButton()
  })
  // on click of Submit Comment (on form), replace form with
  // form content and new button
})

function replaceButton() {
  $("#new_comment_button").remove()

  $("#comments").append(
    "<form id=new_comment>" +
      "<p><input type='textarea'></p>" +
      "<input type='text' value='author' id='authorName'>" +
      "<input type='submit' value='Submit Comment'>" +
    "</form>"
  )
  $("#new_comment").show()
}
