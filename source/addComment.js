$(document).ready(function(){

  $('#new_comment_button').on('click',function(e){
    e.preventDefault();
    $list = $("#comment_list");

    commentForm = $list.append('<form name="new_comment_form" id="new_comment_form">\
        Name: <input type="text" name="name"><br>\
        Comment: <textarea name="comment" form="new_comment_form"></textarea><br>\
        <input type="submit" value="Submit">\
        </form>');

    $(commentForm).on('submit', function(e){
      e.preventDefault();
      attributes = ( $("#new_comment_form").serializeArray() );
      let name = attributes[0]["value"];
      let comment = attributes[1]["value"];

      if (comment == "") {
        event.preventDefault();
      } else {
        $('#new_comment_form').remove();
        $list.append('<li>' + `${comment}` + '<span class="author">' + `${name}` + '</span>')
      }
    });
  });
})
