$(document).ready(function() {
  // add your code here
  const new_comment_button = document.querySelector('#new_comment_button');
  new_comment_button.addEventListener('click', showCommentForm);

  const form = document.querySelector('#comment_form');
  form.addEventListener('submit', evt => {
    evt.preventDefault();
    handleComment();
    hideCommentForm();
  });
});


const hideCommentForm = () => {
  const form = document.querySelector('#comment_form');
  form.style.display = 'none';
};

const showCommentForm = () => {
  const form = document.querySelector('#comment_form');
  form.style.display = 'block';
};

const handleComment = () => {
  const body = document.querySelector('#body').value;

  if (body === '') {
    alert('You need to write a comment first!');
  } else {
    const author = document.querySelector('#author').value;

    const li = document.createElement('LI');
    const text = document.createTextNode(body);
    const name = document.createElement('SPAN');

    name.className += 'author';
    name.innerHTML = author;

    li.appendChild(text);
    li.appendChild(name);

    const comments = document.querySelector('#comment_list');

    comments.appendChild(li);
  }
};
