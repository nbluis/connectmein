// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function() {
  $('#console').terminal(function(command, term) {
    console.log(command);
  }, {
    greetings: new Date(),
    name: 'Terminal',
    height:600,
    width:800,
    prompt:'user@machinename$ '
  });
});