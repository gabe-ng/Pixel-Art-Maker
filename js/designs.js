// grid creation
$("#sizePicker").submit(function(event) {
  let height = $("#input_height").val();
  let width = $("#input_width").val();
  $("#input").next().text();

  event.preventDefault();

  makeGrid();

  function makeGrid() {

    $("#pixel_canvas").empty();

    for (let row = 0; row < width; row++) {
      $("#pixel_canvas").append("<tr></tr>");
      for (let col = 0; col < height; col++) {
        $("tr").last().append("<td></td>");
      }
    }
  };

  // grid color - single click
  $("td").click(function() {
    $(this).css("backgroundColor", $("#colorPicker").val());
  });

  // grid color - click & hold
  let isDown = false;

  $(document).mousedown(function() {
    isDown = true; //check if mouse is pressed
  });

  $(document).mouseup(function() {
    isDown = false;
  });

  $("td").mouseover(function() {
    if (isDown) { // only change css if mouse is down
      $(this).css("backgroundColor", $("#colorPicker").val());
    }
  });

  // eraser - right click
  $("td").on("contextmenu", function(e) {
    e.preventDefault();
    $(this).css("backgroundColor", "");
  });

  // grid color reset
  $("#clear_canvas").click(function() {
    $("td").css("backgroundColor", "");
  });

});
