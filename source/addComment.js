$(document).ready(function(){
  $( "#new_comment_button" ).on( "click", function() {
    $("#new_comment_button").hide();
    var commentForm = "<form id='new_comment'></form>";
    $("#comments").append(commentForm)
    $("#new_comment").show();
    $('#new_comment')
     .append('<input type="text" id="authorName" value="Author Name"> <br>')
     .append('<textarea name="post_body" value="Post Body">')
     .append('<input type="submit" id="submit_comment" name="submit_comment">')
  });

  $("#submit_comment").on( "click", function() {
    $("#comment_list").append('<li></li>');
  });
});

// var commentBody = $(new_comment[name="post_body"]).val();
// var author =  $(new_comment[id="authorName"]).val();
// var authorSpan = "<span class='author'>" + author + "</span>"

// + commentBody  + authorSpan +
// $( "#new_comment" ).remove();
// $("#new_comment_button").show();
