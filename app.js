$("h1").addClass("title"); //to add class to selected element
$("h1").text("hey there"); //to change/update
$("h1").html("<i>no</i>"); //to change the tag, like how innerHTML works in Javascript
// $("a").attr("href"); //for getting the attribute of the element
$("a").attr("href", "https://facebook.com"); //for setting a new attribute of the element

$("button").click(function () {
  //adding a event listener
  $("h1").css("color", "red");
});
$(document).keypress(function (e) {
  //add key press event listener
  $("h1").text(e.key);
});

$("h1").before("<h2>Before</h2>"); //adding html elements before the h1

$("button").click(function (e) {
  e.preventDefault();
  $("h1").slideToggle(); //adding animation ex:- sliding toggle
});
$("button").click(function (e) {
  e.preventDefault();
  $("h1").animate({ opacity: 0.5 }); //adding custom animation but only numeric value css can be used here
});
