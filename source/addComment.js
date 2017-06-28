$(document).ready(function(){


  $("#new_comment_button").click( function() {
    $("#new_comment_button").toggle()
    // $("form#new_comment").removeProp("display")

    // $("h4").append("Add this text here")
    if (!f) { var f = document.createElement("form");}

    $("form").css("display", "inline-block")
    f.setAttribute("id", "new_comment")
    var i = document.createElement("input");
    i.setAttribute('type', 'text');
    i.setAttribute('name', 'comment_field')
    i.setAttribute('placeholder', 'Your comment here...')

    var a = document.createElement("input");
    a.setAttribute("id", "authorName")
    a.setAttribute("type", "text")
    a.setAttribute("placeholder", "author")
    // document.getElementById("new_comment").appendChild(a)

    var s = document.createElement("input"); //input element, Submit button
    s.setAttribute('type',"submit");
    s.setAttribute('value',"Submit");

    f.appendChild(i);
    f.appendChild(s);

    //and some more input elements here
    //and dont forget to add a submit button

    document.getElementsByTagName('body')[0].appendChild(f);
  });


// prevent submit?
  // $("#new_comment input[type='submit']").submit(function( event) {
  //   event.preventDefault();
  // });




})
