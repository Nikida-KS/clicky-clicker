'use strict';

$(document).ready(function() {

  var data = {
  totalCups:0,
  totalCurrent:0,
  totalCPS: 0
};

setInterval(goGo,1000);

function goGo() {
  data.totalCups += data.totalCPS;
  data.totalCurrent += data.totalCPS;
  $("#wheel").css({ 'transform': 'rotate(' + data.totalCups + 'deg)'});
  updateReport();
}

function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalCurrent));
  $("#cps").text((data.totalCPS/70.4).toFixed(3));
}


$("#cup").click(function (){
  data.totalCups ++;
  data.totalCurrent ++;
  console.log(data.totalCups);
  updateReport();
});

$(".button").click(function (){
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) < data.totalCurrent ) {
    data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.totalCPS += parseFloat($(this).data( "val" ));
    $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15));
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) );
  }
  updateReport();
});

});
