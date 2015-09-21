function pressDown(name) {
  myClass = name.className;
  $("."+myClass).css({
    'box-shadow': '0.5px 1px 2px 0 rgba(0,0,0,0.5)',
  });

  for (i=0; i<5; i++) {
    $("."+myClass+i).css({
      'box-shadow': '0.5px 1px 2px 0 rgba(0,0,0,0.5)',
    });
  };
};

function pressUp(name) {
  myClass = name.className;
  $("."+myClass).css({
    'box-shadow': '1px 2px 4px 0px rgba(0,0,0,0.50)',
  });
  // // alert(myClass.split(""))
  for (i=0; i<5; i++) {
    $("."+myClass+i).css({
      'box-shadow': '1px 2px 4px 0px rgba(0,0,0,0.50)',
    });
  };
};
