$(document).ready(function(){
  $('#new_comment_button').click(function(e){
    e.preventDefault();
    $('body').append('<form id=new_comment style="display: inline;"></form>')
    $('#new_comment').append("<input").append("<textarea type='textarea' placeholder='Your Comment'")
    // var f = document.createElement("form");
    // f.setAttribute('id',"banana");
    // f.setAttribute('method',"post");
    // $(f).css('display','none');
    //
    //
    //
    // var author = document.createElement("input"); //author element, text
    // author.setAttribute('placeholder','Your Name');
    // author.setAttribute('type',"authorName");
    // author.setAttribute('name',"author");
    //
    // var body = document.createElement("textarea"); //body element, text
    // body.setAttribute('placeholder','Comment Body');
    // body.setAttribute('type',"textarea");
    // body.setAttribute('name',"body");
    //
    // var submit = document.createElement("input"); //body element, Submit button
    // submit.setAttribute('type',"submit");
    // submit.setAttribute('value',"Submit");
    //
    // f.appendChild(author);
    // f.appendChild(body);
    // f.appendChild(submit);
    //
    // document.getElementsByTagName('body')[0].appendChild(f);
    //
    // $(submit).click(function(e){
    //   e.preventDefault();
    //   $('#comment_list').append($('input[name="submit"]').val());
    //   var new_comment = document.createElement("li");
    //   new_comment.setAttribute('body',$(body).val());
    //   $('ul#comment_list').append(new_comment)
    // });
  });
});
