var validate = function(input) {
  if (input > 0) {
    return true;
  }
  return false;
}

var pingPong = function(input) {
  if (!validate(input)) {
    return false;
  }
  return input;
};

$(document).ready(function() {
  $('#user-input').submit(function(e) {
    e.preventDefault();
    //Gather user input
    var input = $('input[name="number"]').val();
    //Call business logic to process input
    var result = pingPong(input);
    if (!result) {
      $('#results ul li').remove();
      $('#results ul').append('<li>The number you provided is invalid, please enter a positive integer.</li>');
      return;
    }
    //Display result to screen
    $('#results ul').append('<li>' + result + '</li>');
  });
});
