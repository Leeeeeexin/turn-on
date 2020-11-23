
$(function() {
  let i = 0;
  $(".button").click(function() {
    console.log(i);
    let colors = ["#000000", "#242424", "#404040", "#636363", "#7E7E7E", "#A5A5A5", "#CACACA", "#FFFFFF"];
    $("body").css("background-color", colors[i]);
    i++;
    if (i >= colors.length) {
      i = 0;
    }
  });
});


// $(function() {
//  $('.button').click(function(){
//      $('.button').animate({transform:"scale(5)"}, 5000, 'linear');
//  });