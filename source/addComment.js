$(document).ready(function(){
  // add your code here
  $("#new_comment_button").on("click", function(event){
    $("#new_comment_button").remove()
    $("body").append(
      "<div class='comment-form'>" +
      "<form>" + 
      "<h4>New Comment:</h4>" + 
      "<input type='text' name='comment-body'>" +
      "<h4>Author:</h4>" + 
      "<input type='text' name=author>" + 
      "<input type='submit' name='comment-submit'>" + 
      "</div>"
    )
  })

  $(document).on("click", "input[name='comment-submit']", function(event){
    //grab the values of the fields 
    event.preventDefault()
    var body = $("input[name='comment-body']").val()
    var author = $("input[name='author']").val()
    $("#comment_list").append(
      "<li>" + 
      body + 
      `<span class='author'> ${author}</span>` +
      "</li>"
    )
  })

})
