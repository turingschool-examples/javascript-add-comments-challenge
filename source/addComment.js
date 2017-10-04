$(document).ready(function(){
  $(".new-user-comment").hide();

  $("#new_comment_button").on("click", function(event){
    $(".new-user-comment").show();
  });

  $(".new-user-comment").on("submit", function(event) {
    var comment = $("#comment").val();
    var authorName = $("#authorName").val();
    $('#comment_list').append(
      '<li>' + comment +
      "<span class='author'>" +
      authorName + "</span></li>"
    );
    $(".new-user-comment").hide();
    
    event.preventDefault();
  });
})
