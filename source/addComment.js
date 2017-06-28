$(document).ready(function(){
  $('#new_comment_button').on('click', function() {

    $("#new_comment_button").hide();

    $('body').append('<form id="new_comment" name="new_comment" style= "display: block" ></form>')

    $('#new_comment').append('<textarea form="new_comment" id="text" placeholder="Your comment here...">')
    $('#new_comment').append('<input type="text" id="authorName" placeholder="author" />')
    $('#new_comment').append('<input type="submit" id="comment_submit" value="Submit Comment!" /> ')

    $('#comment_submit').on('click',function() {
      event.preventDefault();
      $("#new_comment_button").show();
      var text = $('#text').val();
      var author = $('#authorName').val();
        if (text) {
          $('#comment_list').append('<li>' + text + '<span class="author">' + author + '</span>' + '</li>')
        }
      $('#new_comment').remove();
    });
  });
});
