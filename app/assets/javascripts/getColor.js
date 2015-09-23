var saturation, lightness, opacity, printSat
var colour1, colour2, colour3, colour4

function getColor() {
  // alert("Kaboom!")

  hue = document.getElementsByName("hue")[0].value;
  saturation = document.getElementsByName("saturation")[0].value;
  lightness = document.getElementsByName("lightness")[0].value;
  opacity = document.getElementsByName("opacity")[0].value / 100;
  hsla = [hue, saturation, lightness, opacity];
  // alert(hsla);
  // alert([hue, saturation, lightness, opacity]);

  if (lightness >= 50 || opacity < 0.3) {
    textLightness = lightness - 75;
  }
  else if (lightness < 50) {
    textLightness = lightness + 75;
  }

  textOpacity = opacity + 0.8; // make the text more opaque so it's legible


  // alert(hsla);
  // return hsla;
  hue = parseInt(hue);
  hue2 = hue + 180;
  hue3 = hue + 135;
  hue4 = hue + 225;

  hsla1 = "hsla("+hue+ ", " +saturation+ "%, " +lightness+ "%, " +opacity+ ")";
  hsla2 = "hsla("+hue2+ ", " +saturation+ "%, " +lightness+ "%, " +opacity+ ")";
  hsla3 = "hsla("+hue3+ ", " +saturation+ "%, " +lightness+ "%, " +opacity+ ")";
  hsla301 = "hsla("+hue3+ ", " +saturation+ "%, " +textLightness+ "%, " +textOpacity+ ")";
  hsla4 = "hsla("+hue4+ ", " +saturation+ "%, " +lightness+ "%, " +opacity+ ")";

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

    colour1 = roundUp(hue);
    colour2 = roundUp(hue2);
    colour3 = roundUp(hue3);
    colour4 = roundUp(hue4);

    if (colour1 > 360) {
      colour1 -= 360;
    }
    if (colour2 > 360) {
      colour2 -= 360;
    }
    if (colour3 > 360) {
      colour3 -= 360;
    }
    if (colour4 > 360) {
      colour4 -= 360;
    }

    saturation = parseInt(saturation);
    lightness = parseInt(lightness);
    // opacity = parseInt(opacity);

    printHue();
    printTheRest();


    console.log(typeof(saturation));

    // printColor();
    // printHue(b);
    // console.log(col);

    // var contents = document.getElementsByClassName("bazoo");
    // // contents[0].innerHTML += colour1;
    // // alert(contents[0].innerHTML);
    // // contents[0].innerHTML += [colour1, colour2, colour3, colour4];
    // contents[0].innerHTML = "Your colours are: " + [colour1, colour2, colour3, colour4];
};
