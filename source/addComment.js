$(document).ready(function(){
    //$("#comment_form").hide(300).show(300);
    $("textarea").hide();
    $("#submit_button").hide();
  $("button").on("click", function() {
    //$("#comment_form").show();
    $("textarea").show();
    $("#submit_button").show();
    //jQuery(html [, ownerDocument]);
    //let comment = e.data.val();
  });
    $("#submit_button").submit(function(e) {
      e.preventDefault();
      //debugger;
      let $data = $('textarea :input');
      let $data1 = $('comment_form :input');
      let $data2 = $('textbox :input');
      console.log($data);
      console.log($data1);
      console.log($data2);
      return $data;
    });
});
