$(document).ready(function(){

  $(document.body).append(
   $('<form/>').prop('id', 'new_comment').append(
     $("<textarea/>", {
       type: 'text',
       id: 'textArea',
       placeholder: 'Your comment here...'
       }),
     $("<br/>"),
     $("<input/>", {
       type: 'text',
       id: 'authorName',
       placeholder: 'Author Name'
       }),
       $("<input/>", {
         type: 'submit',
         id: 'submit',
         value: 'Submit'
       })
   )
  )

   $('#new_comment').submit(function() {
    var comment = $('#textArea').val()
    var author = $('#authorName').val()
    $("#comment_list").append('<li>' + comment + '<br>' + '<span class="author">' + author + '</span>' + '</li>')
    $(this).hide()
    $('#new_comment_button').show()
    return false;
  })

   $('#new_comment_button').click('New Comment', function(e) {
     e.preventDefault
     $(this).hide()
     $('#new_comment').show()
    })

});
