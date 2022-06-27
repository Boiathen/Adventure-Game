 $(".front-house-title").hide();
 $(".front-house-flex").hide();
 $(".front-house-buttons").hide();
 $(".back-car-end-flex").hide();
 $(".back-car-end-title").hide();
 $(".inside-house-title").hide();
 $(".inside-house-flex").hide();
 $(".inside-house-buttons").hide();
 $(".lightbulb-title").hide();
 $(".lightbulb-flex").hide();
 $(".lightbulb-button").hide();
 $(".attic-start-title").hide();
 $(".attic-start-flex").hide();
 $(".attic-start-button").hide();
 $(".basement-lit-title").hide();
 $(".basement-lit-flex").hide();
 $(".basement-lit-buttons").hide();
 $(".attic-end-title").hide();
 $(".attic-end-flex").hide();
 $(".attic-end-buttons").hide();
 $(".brain-ending-title").hide();
 $(".brain-ending-flex").hide();
 $(".no-brain-ending-title").hide();
 $(".no-brain-ending-flex").hide();
 $(".inv-end-title").hide();
 $(".inv-end-flex").hide();
 $(".crossroads-title").hide();
 $(".crossroads-flex").hide();  
 $(".crossroads-buttons").hide();
 $(".final-title").hide();
 $(".final-flex").hide();
 $(".bear-title").hide();
 $(".bear-flex").hide();

$(".gate-enter").click(function() {
  $(".gate-img").fadeOut();
  $(".gate-title").fadeOut();
  $(".gate-enter").fadeOut();
  $(".front-house-title").fadeIn();
  $(".front-house-flex").fadeIn();
  $(".front-house-buttons").fadeIn();
});
$(".back-car").click(function() {
  $(".front-house-title").fadeOut();
  $(".front-house-flex").fadeOut();
  $(".front-house-buttons").fadeOut();
  $(".back-car-end-flex").fadeIn();
  $(".back-car-end-title").fadeIn();
});
$(".front-house-enter").click(function() {
  $(".front-house-title").fadeOut();
  $(".front-house-flex").fadeOut();
  $(".front-house-buttons").fadeOut();
  $(".inside-house-title").fadeIn();
  $(".inside-house-flex").fadeIn();
  $(".inside-house-buttons").fadeIn();
});
$(".basement").click(function() {
  $(".inside-house-title").fadeOut();
  $(".inside-house-flex").fadeOut();
  $(".inside-house-buttons").fadeOut();
  $(".lightbulb-title").fadeIn();
  $(".lightbulb-flex").fadeIn();
  $(".lightbulb-button").fadeIn();
});
$(".attic").click(function() {
  $(".inside-house-title").fadeOut();
  $(".inside-house-flex").fadeOut();
  $(".inside-house-buttons").fadeOut();
  $(".attic-start-title").fadeIn();
  $(".attic-start-flex").fadeIn();
  $(".attic-start-button").fadeIn();
});
$(".lightbulb-button-click").click(function() {
  $(".lightbulb-title").fadeOut();
  $(".lightbulb-flex").fadeOut();
  $(".lightbulb-button").fadeOut();
  $(".basement-lit-title").fadeIn();
  $(".basement-lit-flex").fadeIn();
  $(".basement-lit-buttons").fadeIn();
});
$(".enter-door").click(function() {
  $(".attic-start-title").fadeOut();
  $(".attic-start-flex").fadeOut();
  $(".attic-start-button").fadeOut();
  $(".attic-end-title").fadeIn();
  $(".attic-end-flex").fadeIn();
  $(".attic-end-buttons").fadeIn();
});
$(".basement-car").click(function() {
  $(".basement-lit-title").fadeOut();
  $(".basement-lit-flex").fadeOut();
  $(".basement-lit-buttons").fadeOut();
  $(".brain-ending-title").fadeIn();
  $(".brain-ending-flex").fadeIn();
});
$(".basement-door").click(function() {
  $(".basement-lit-title").fadeOut();
  $(".basement-lit-flex").fadeOut();
  $(".basement-lit-buttons").fadeOut();
  $(".no-brain-ending-title").fadeIn();
  $(".no-brain-ending-flex").fadeIn();
});
$(".investigate").click(function() {
  $(".attic-end-title").fadeOut();
  $(".attic-end-flex").fadeOut();
  $(".attic-end-buttons").fadeOut();
  $(".inv-end-title").fadeIn();
  $(".inv-end-flex").fadeIn();
});
$(".escape").click(function() {
  $(".attic-end-title").fadeOut();
  $(".attic-end-flex").fadeOut();
  $(".attic-end-buttons").fadeOut();
  $(".crossroads-title").fadeIn();
  $(".crossroads-flex").fadeIn();
  $(".crossroads-buttons").fadeIn();
});
$(".left").click(function() {
  $(".crossroads-title").fadeOut();
  $(".crossroads-flex").fadeOut();
  $(".crossroads-buttons").fadeOut();
  $(".bear-title").fadeIn();
  $(".bear-flex").fadeIn();
});
$(".right").click(function() {
  $(".crossroads-title").fadeOut();
  $(".crossroads-flex").fadeOut();
  $(".crossroads-buttons").fadeOut();
  $(".final-title").fadeIn();
  $(".final-flex").fadeIn();
});