$(document).ready(function(){
    $("#comment_form").hide();
    $("").hide();
    //$("textarea").hide();
    //$("#submit_button").hide();

  $("button").on("click", function() {
    $("#comment_form").show();
    //$("textarea").show();
    //$("#submit_button").show();
  });

    $("#comment_form").on('submit', function(e) {
      e.preventDefault();
      console.log('it works!');
      let data = $("#comment_form :input");
      //let data = $("#textarea :input");
      //let data1 = $("#text_box :input");
      //let data2 = $("#submit_button :input");
      console.log(data);
      //console.log(data1);
      //console.log(data2);
      //return $data;
      debugger;
    });
});
