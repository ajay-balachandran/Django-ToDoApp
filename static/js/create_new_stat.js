$(document).ready(function() {
  $('#color_dropdown').change(function (e) { 
    var color = $('#color_dropdown').val();
    console.log(color);
    $("#id_selected_color").html(color);
    $('#clr_badge').css('background-color',color);
    $('#clr_badge').attr('value',color);
  });
  $("#id_new_status_btn").click(function () {
    $("#myForm").show();
    $("#id_content").css('min-height', 'auto')
  });
  $("#new_status_close_btn").click(function () {
    $("#myForm").hide();
    $("#id_content").css('min-height', '100vh')
   
  });
});

