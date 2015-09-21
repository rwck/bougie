function changeColor() {
  var hue = Math.floor(Math.random() * 360);

  var hue2 = hue + 180
  var hue3 = hue + 135
  var hue4 = hue + 225

  // if (hue >= 180) {
  //   var hue2 = hue - 180;
  // }
  // else if (hue <180) {
  //   var hue2 = hue + 180;
  // }
  //
  // if (hue >= 225) {
  //   var hue3 = hue - 225; // this maths could be wrong
  // }
  // else if (hue <225) {
  //   var hue3 = hue + 135; // this maths could be wrong
  // }
  // if (hue >= 135) {
  //   var hue4 = hue - 135; // this maths could be wrong
  // }
  // else if (hue <135) {
  //   var hue4 = hue + 225; // this maths could be wrong
  // }

  var saturation = 70;
  var lightness = 50;
  var opacity = 0.3;
  var textLightness;
  if (lightness >= 50 || opacity < 0.3) {
    textLightness = lightness - 75;
  }
  else if (lightness < 50) {
    textLightness = lightness + 75;
  }
  // var textLightness = lightness - 100;
  var textOpacity = opacity + 0.8;


  var hsla1 = "hsla("+hue+ ", " +saturation+ "%, " +lightness+ "%, " +opacity+ ")";
  var hsla2 = "hsla("+hue2+ ", " +saturation+ "%, " +lightness+ "%, " +opacity+ ")";
  var hsla3 = "hsla("+hue3+ ", " +saturation+ "%, " +lightness+ "%, " +opacity+ ")";
  var hsla301 = "hsla("+hue3+ ", " +saturation+ "%, " +textLightness+ "%, " +textOpacity+ ")";
  var hsla4 = "hsla("+hue4+ ", " +saturation+ "%, " +lightness+ "%, " +opacity+ ")";



  // $(".experimental").css({
  //  "background-color": hsla1;
  //   // "box-shadow": 0 0 0 0;
  // });
    // $(".experimental").css("box-shadow", 0 0 0 0);
    // $(".experimental").css("background-color", hsla1);
    $(".experimental").css({
      'background-color': hsla1,
      'color': hsla301,
    });

    $(".experimental2").css({
        'background-color': hsla2,
        'color': hsla301,
    });

    $(".experimental3").css({
        'background-color': hsla3,
        'color': hsla301,
    });

    $(".experimental4").css({
      'background-color': hsla4,
      'color': hsla301,
    });
      //'box-shadow': "0 0 0 0",

    // }"background-color", hsla1);
    //   // "box-shadow": 0 0 0 0;
    // $(".experimental").css("border", "solid 2px "+hsla2);
    $(".experimental").css("color", hsla301); // "solid 14px "+hsla2);
    // $(".experimental").css("color", hsla3); // "solid 14px "+hsla2);
    // $(".experimental").css("box-shadow", 0px 0px 0px 0px); // rgba(0,0,0,0.50);

    // $(".experimental").css("border", "solid 14px "+hsla2);

    // This gives a useful alert as to what colours are being pumped out.
    //alert([hsla1, hsla2, hsla3, hsla4]);

};

$(function() {
  changeColor();
});
