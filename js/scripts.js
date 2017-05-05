var pingPong = function(input) {
  return input;
};

$(document).ready(function() {
  $('#user-input').submit(function(e) {
    e.preventDefault();
    //Gather user input
    var input = $('input[name="number"]').val();
    //Call business logic to process input
    var result = pingPong(input);
    //Display result to screen
    $('#results ul').append('<li>' + result + '</li>');
  });
});
