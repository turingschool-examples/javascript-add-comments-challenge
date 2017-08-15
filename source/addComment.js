$(document).ready(function(){

  function commentForm(){
    return `<form id='new_comment'>
      Author: <input id='authorName'><br>
      Comment: <textarea id='text'></textarea>
      <input type='submit'>
    </form>`
  };

  function buildComment(text, author){
    return `<li>
      ${text}
      <span class="author">${author}</span>
    </li>`
  };

  function listenForNewComment(){
    $('#new_comment_button').on('click', function(){
      $('#comment_list').append(commentForm());

      writeComment();
    });
  };

  function writeComment(){
    $('#new_comment').on('submit', function(){
      event.preventDefault();

      let authorName = $('#authorName').val();
      let text = $('#text').val();

      if(authorName == ''){
        authorName = 'Anonymous';
      }

      if(text == ''){
        $('#text').val('You must enter a comment!');
      } else {
        $('#new_comment').remove();
        $('#comment_list').append(buildComment(text, authorName));
      };
    });
  };

  listenForNewComment();
});