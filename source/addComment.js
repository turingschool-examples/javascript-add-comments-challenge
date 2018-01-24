$(document).ready(function(){
  $("#comments").on("click", "#new_comment_button", function(event) {
    replaceButton()
  })

  $(event).ready( function() {
    $("#comments").on("click", "[type=submit]", function(event) {
      event.preventDefault()
      showComment()
      createNewButton()
    })
  })
})

function replaceButton() {
  $("#new_comment_button").remove()

  $("#comments").append(
    "<form id=new_comment>" +
      "<textarea placeholder='Your comment here...'></textarea>" +
      "<input type='text' placeholder='author' id='authorName'>" +
      "<input type='submit' value='Submit Comment'>" +
    "</form>"
  )
  $("#new_comment").show()
}

function showComment() {
  $("#comment_list").append(
    "<li>" +
      $("#new_comment textarea").val() +
      "<span class='author'>" +
        $("#new_comment #authorName").val() +
      "</span>" +
    "</li>"
  )
};

function createNewButton() {
  $("#new_comment").remove()

  $("#comments").append(
    "<button id='new_comment_button'>New Comment</button>"
  )
}
