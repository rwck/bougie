
/*
function mouseDown() {
  var className = (this.attr('class'));
  className({
    'box-shadow': '0 0 0 0',
  });
};
*/

function pressDown() {
  $(".experimental").css({
    'box-shadow': '0.5px 1px 2px 0 rgba(0,0,0,0.5)',
  });
};

function pressUp() {
  $(".experimental").css({
    'box-shadow': '1px 2px 4px 0px rgba(0,0,0,0.50)',
  });
  // alert("poop");
};
