var replaceFives = function(input) {
  var result = input.map(function(element) {
    if (element % 5 === 0) {
      return "pong";
    }
    return element;
  })
  return result;
}

var replaceThrees = function(input) {
  var result = input.map(function(element) {
    if (element % 3 === 0) {
      return "ping";
    }
    return element;
  })
  return result;
}

var count = function(input) {
  var result = [];
  for (var i = 1; i <= input; i++) {
    result.push(i);
  }
  return result;
};

var validate = function(input) {
  if (input > 0) {
    return true;
  }
  return false;
};

var pingPong = function(input) {
  var output;
  if (!validate(input)) {
    return false;
  }
  output = count(input);
  output = replaceThrees(output);
  output = replaceFives(output);
  return output;
};

$(document).ready(function() {
  $('#user-input').submit(function(e) {
    e.preventDefault();
    //Gather user input
    var input = $('input[name="number"]').val();
    //Call business logic to process input
    var result = pingPong(input);
    //Clear existing results from results div
    $('#results ul li').remove();
    if (!result) {
      $('#results ul').append('<li>The number you provided is invalid, please enter a positive integer.</li>');
      return;
    }
    //Display result to screen
    result.forEach(function(element) {
      $('#results ul').append('<li>' + element + '</li>');
    });
  });
});
