/*jshint esversion: 6 */

$('button').on('click', function() {
  $('button').hide();

  $('body').append('<form id=new_comment name="new_comment" style="display: block"></form>');

  var commentInput = '<textarea name="comment_input" placeholder="Your comment here..."></textarea>';
  var authorInput = '<input type="text" name="author_input" id="authorName" placeholder="author"/>';
  var commentSubmit = '<input type="submit" id="comment_submit" value="Submit Comment"/>';

  $('form').append(commentInput).append(authorInput).append(commentSubmit);

  $('#comment_submit').on('click', function(e) {
    e.preventDefault();

    $('button').show();

    var form = document.querySelector('form');

    var comment = form.elements[0].value;
    var author = form.elements[1].value;

    if(comment) {
      $('#comment_list').append(`<li>${comment}
        <span class="author">${author}</span>
        </li>`);
    }

    form.remove();
  });
});
