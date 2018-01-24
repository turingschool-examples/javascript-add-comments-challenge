$(document).ready(function(){
	$("#new_comment_button").on("click", function() {
		$("#comments").append('<form id="new_comment">' +
      '<textarea></textarea >' +
      '<input id="authorName" type="text" placeholder="author name">' +
      '<input type="submit" value="Submit Comment">' +
      '</form>');
    $("#new_comment, #new_comment_button").toggle();
    formControls();
  });
  
  function formControls() {
    var comment_form = $("#new_comment");
    comment_form.find("input[type=submit]").on("click", function (event) {
      event.preventDefault();

      var text = comment_form.find("textarea").val(),
          author = comment_form.find("#authorName").val();
          
      if (text != "") {
        $("#comment_list").append(`<li> ${text} <span class="author">${author}</span></li>`);
        comment_form.remove();
        $("#new_comment_button").show();
      }
    });
  }
});
