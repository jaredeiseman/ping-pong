////////////////////////////////////////////////////////////////////////////////
//                              BUSINESS LOGIC                                //
////////////////////////////////////////////////////////////////////////////////

//Run business logic
var pingPong = function(input, order) {
  var output;
  if (!validate(input)) {
    return false;
  }
  output = count(input);
  output = replaceThrees(output);
  output = replaceFives(output);
  output = replaceFifteens(output);
  if (order === -1) {
    output = output.reverse();
  }
  return output;
};

//Validate the entered number is a positive integer
var validate = function(input) {
  if (input > 0) {
    return true;
  }
  return false;
};

//Count up to the provided number
var count = function(input) {
  var result = [];
  for (var i = 1; i <= input; i++) {
    result.push(i);
  }
  return result;
};

//Replace all numbers divisible by 3 with "ping"
var replaceThrees = function(input) {
  var result = input.map(function(element, index) {
    if ((index + 1) % 3 === 0) {
      return "ping";
    }
    return element;
  })
  return result;
};

//Replace all numbers divisible by 5 with "pong"
var replaceFives = function(input) {
  var result = input.map(function(element, index) {
    if ((index + 1) % 5 === 0) {
      return "pong";
    }
    return element;
  })
  return result;
};

//Replace all numbers divisible by 15 with "ping-pong"
var replaceFifteens = function(input) {
  var result = input.map(function(element, index) {
    if ((index + 1) % 15 === 0) {
      return "ping-pong";
    }
    return element;
  })
  return result;
};


////////////////////////////////////////////////////////////////////////////////
//                           USER INTERFACE LOGIC                             //
////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
  $('#user-input').submit(function(e) {
    e.preventDefault();
    //Gather user input
    var input = $('input[name="number"]').val();
    var order = parseInt($('#order').val());
    //Call business logic to process input
    var result = pingPong(input, order);
    //Clear existing results from results div
    $('#results ul li').remove();
    //Display error message when validation fails
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
