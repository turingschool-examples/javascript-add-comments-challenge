$(document).ready(function(){
    $('#new_comment_button').click(function(){
      event.preventDefault();
      $('#new_comment_button').hide();
      $('#comments').append('<div id="form"><textarea rows="5" cols="70" name="commenttext" placeholder="comment text here"/><br><input type="text" name="poster" placeholder="author"/><input type="submit" value="create comment"</div>')
        $('#comments input[type="submit"]').click(function(){
          event.preventDefault();
          var commenttext = $(this).parent().find('textarea').val()
          var author = $(this).parent().find('input[name="poster"]').val()
          if (commenttext) {
            $('#comment_list').append('<li>' + commenttext + '<span class="author">' + author + '</span></li>')
            $('#form').remove();
            $('#new_comment_button').show();
          }
          else{
            alert("You must enter comment text!")
          }
        })
    })
})
