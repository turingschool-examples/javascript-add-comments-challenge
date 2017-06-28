$(document).ready(function(){

  function addCommentBox() {
    $('#comments').append('<form id="new_comment"></form>')
    $('#new_comment').append('<textarea placeholder="Your comment here..."></textarea>')
    $('#new_comment').append('<input id="authorName" placeholder="author" />')
    $('#new_comment').append('<input type="submit" value="Submit Comment" />')
  }

  $('#new_comment_button').on('click', function(){
    event.preventDefault();
    $(this).hide();
    addCommentBox();

    $('#new_comment').submit(function(event){
      event.preventDefault();
      var comment_body = $('textarea').val()
      if (comment_body.length) {
        var author_name = '\n<span class="author">' + $('#authorName').val() + '</span>'
        $('#comment_list').append('<li>' + comment_body + author_name + '</li>')
        $('#new_comment_button').show();
        $('#new_comment').remove();
      }
    })
  })

})
