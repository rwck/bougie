
function changeColor() {

       var hue = Math.floor(Math.random() * 360);

       if (hue >= 180) {
           var hue2 = hue - 180;
       }
       else if (hue <=180) {
           var hue2 = hue + 180;
       };

       if (hue >= 225) {
           var hue3 = hue - 225;
       }
       else if (hue <=225) {
           var hue3 = hue + 225;
       };

       if (hue >= 135) {
           var hue4 = hue - 135;
       }
       else if (hue <=135) {
           var hue4 = hue + 135;
       };

       var saturation = 100;
       var lightness = 30;
       var textLightness = lightness + 75;
       var opacity = .4;

       var hsla1 = "hsla("+hue+ ", " +saturation+ "%, " +lightness+ "%, " +opacity+ ")";
       var hsla2 = "hsla("+hue2+ ", " +saturation+ "%, " +lightness+ "%, " +opacity+ ")";
       var hsla3 = "hsla("+hue3+ ", " +saturation+ "%, " +textLightness+ "%, " +opacity+ ")";
       var hsla4 = "hsla("+hue4+ ", " +saturation+ "%, " +lightness+ "%, " +opacity+ ")";

       $(".experimental").css("background-color", hsla1);
       $(".experimental").css("border", "solid 6px "+hsla2);
       $(".experimental").css("color", hsla3); // "solid 14px "+hsla2);
       // $(".experimental").css("border", "solid 14px "+hsla2);
       // alert(hsla1, hsla2, hsla3, hsla4);

   };

   $(function() {
       changeColor();
   });
