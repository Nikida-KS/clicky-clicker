'use strict';

$(document).ready(function() {

// these are used in multiple functions so I used var instead of let
  var data = {
  totalCups:0,
  totalCurrent:0,
  totalCPS: 0
};

// updates the coffee every 1000 milliseconds aka every second
setInterval(moreCoffee,1000);

function moreCoffee() {
  data.totalCups += data.totalCPS;
  data.totalCurrent += data.totalCPS;
  updateReport();
}

//displays the update on the div for it to one decimal
function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalCurrent));
  $("#cps").text((data.totalCPS).toFixed(1));
}

//adds a cup to the total and current every time cuppy is clicked
$("#cup").click(function (){
  data.totalCups ++;
  data.totalCurrent ++;
  updateReport();
});


$(".button").click(function (){
  //checks if we have enough points
  if ($(this).data( "cost" ) < data.totalCurrent ) {
    //takes the points out of the current total
    data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    //adds to the auto coffee maker
    data.totalCPS += parseFloat($(this).data( "val" ));
    $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15));
    //increases the cost of the button clicked
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) );
  }
  updateReport();
});

});
