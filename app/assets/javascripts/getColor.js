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

  textOpacity = opacity + 0.8;


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
    // alert([hsla1, hsla2]);
    nob = "nob";
    printcolor1 = hue.toString();
};
