var b = ["bazoo", "bazoo2", "bazoo3", "bazoo4"];
var col = [colour1, colour2, colour3, colour4];

function printColor(a, d) {
  // a = typeof a != 'undefined' ? a : "bazoo";
  var contents = document.getElementsByClassName(a);
  contents[0].innerHTML = "Hue: " + d;
}

function printHue(b, col) {
  var b = ["bazoo", "bazoo2", "bazoo3", "bazoo4"];
  var col = [colour1, colour2, colour3, colour4];
  for (i = 0, j = 0; i < b.length; i++, j++) {
    printColor(b[i], col[j]);
  }
}

function printTheRest() {
  // var hue = hue;
  var sat = roundUp(saturation);
  var light = roundUp(lightness);
  var opac = roundUp(opacity);

  var contents = document.getElementsByClassName("bazoo5")
  // contents[0].innerHTML = "<pre>" + "Hue: " + hue + "\nSaturation: " + sat + "\nLightness: " + light +  "\nOpacity: " + opac + "</pre>";
  contents[0].innerHTML=
    // "<span class='nuggin'>" +
    // "Hue: " + hue + "<br>" +
    // "Saturation: " + sat + "<br>" +
    // "Lightness: " + light + "<br>" +
    // "Opacity: " + opac +
    // "</span>";

    "<span class='nuggin'>" +
    "<span class='dastardly'> Main hue: " + hue + "</span><br>" +
    "<span class='dastardly'> Saturation: " + sat + "</span><br>" +
    "<span class='dastardly'> Lightness: " + light + "</span><br>" +
    "<span class='dastardly'> Opacity: " + opac + "</span>"
    "</span>";

    // contents[1].innerHTML=
    //   "<span class='nuggin'>" +
    //   "<span class='dastardly'> Main hue: " + hue + "</span><br>" +
    //   "<span class='dastardly'> Saturation: " + sat + "</span><br>" +
    //   "<span class='dastardly'> Lightness: " + light + "</span><br>" +
    //   "<span class='dastardly'> Opacity: " + opac + "</span>"
    //   "</span>";
}
