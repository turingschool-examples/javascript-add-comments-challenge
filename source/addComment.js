$(document).ready(function(){
  // When the user clicks on the `New Comment` button, the new comment form should appear.
  var $button = $("#new_comment_button");
  $button.on('click', function(){
    var input  = document.createElement("INPUT");
    var submit  = document.createElement("INPUT");
    submit.setAttribute("type", "submit");
    input.setAttribute("type", "textarea");
    input.setAttribute("id", "comment-field");
    input.setAttribute("placeholder", "Enter Comment");
    // var inputSubmit = document.createElement("button", {id: "submit-button"});
    $("#comments").prepend(input, submit);

  })
})
