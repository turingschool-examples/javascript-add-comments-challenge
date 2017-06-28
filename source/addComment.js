$(document).ready(function(){
  // add your code here
  $("button#new_comment_button").click(function() {
    event.preventDefault();
    $("button#new_comment_button").hide();
    $("body").append("<form id=new_comment style='display: inline'></form>");
    $("#new_comment").append("<textarea id='comment_text' placeholder='your comment here'>")
                     .append("<input id='authorName' placeholder='author'>")
                     .append("<input type='submit' id='submitter'>");

    $("#new_comment input[type='submit']").click(function() {
       event.preventDefault();
       var comment = $("#comment_text").val();
       var author = $("#authorName").val();

       if(comment) {
         $("#comment_list").append("<li>" + comment + "<span class='author'>" + author + "</span></li></ul>")
       }
       $("#new_comment").remove();
       $("button#new_comment_button").show();
   })
  })
})


// <input type='textarea'>ajfdd<input type=authorName>afds<input type='submit'>
