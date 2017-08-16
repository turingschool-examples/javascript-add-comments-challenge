$(document).ready(function(){
  $('#new_comment_button').on('click', function () {
    event.preventDefault()

    $('#new_comment_button').hide()
    $('<form id="new_comment" name="new_comment" style="display: block"></form>').appendTo("body")
    $('<textarea form="new_comment" id="comment-text" placeholder="Comment here"/>').appendTo("#new_comment")
    $('<input type="text" id="authorName" placeholder="your name"/>').appendTo("#new_comment")
    $('<input type="submit" id="createComment" value="Create Comment"/>').appendTo("#new_comment")

    $('#createComment').on('click', function () {
      event.preventDefault()
      let comment = $('#comment-text').val();
      let author  = $('#authorName').val();

      $('#new_comment').remove()
      if (comment){
        $('<li>'+comment+'<span class="author">'+author+'</span>' + '</li>').appendTo("#comment_list");
      }
      $('#new_comment_button').show();
    })
  })
})
