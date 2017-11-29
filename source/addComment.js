$(document).ready(function(){
  $( "#new_comment_button" ).on( "click", function() {
    $("#new_comment_button").hide();
    var commentForm = "<form id='new_comment'></form>";
    $("#comments").append(commentForm)
    $("#new_comment").show();
    $('#new_comment')
     .append('<input type="text" id="authorName" value="Author Name"> <br>')
     .append('<textarea name="post_body" value="Post Body">')
     .append('<input type="submit" id="submit_comment">')
  });

  $("body").on("click", "#submit_comment", function(event) {
    var commentBody = $(new_comment[name="post_body"]).val();
    var author =  $(new_comment[id="authorName"]).val();
    var authorSpan = "<span class='author'>" + author + "</span>"
    $("#comment_list").append('<li>' + commentBody  + authorSpan + '</li>');
    event.preventDefault();
  });
});



// + commentBody  + authorSpan +
// $( "#new_comment" ).remove();
// $("#new_comment_button").show();
