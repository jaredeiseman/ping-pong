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

//additional validation to catch if visual feedback logic fails
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
    //additional validation to catch errors
    if (!result) {
      $('#results ul').append('<li>The number you provided is invalid, please enter a positive integer.</li>');
      return;
    }
    //Display result to screen
    result.forEach(function(element) {
      $('#results ul').append('<li>' + element + '</li>');
    });
    $('#results ul li').fadeIn(1000);
  });

  //Validate the entered number is a positive integer
  $('input[name="number"]').keydown(function(e) {
    if (e.which === 189 || e.which === 109) {
      //stops the "-" symbol to prevent negative numbers from qwerty or numpad
      e.preventDefault();
      $('input[name="number"]').parent().addClass('has-error has-feedback');
      $('.glyphicon').show();
    } else if (e.which === 48 && $('input[name="number"]').val().length === 0) {
      //stops "0" if it is the first number entered
      e.preventDefault();
      $('input[name="number"]').parent().addClass('has-error has-feedback');
      $('.glyphicon').show();
    } else if (e.which === 190 || e.which === 110) {
      //stops "." entered from either the qwerty side of the keyboard, or the numpad
      e.preventDefault();
      $('input[name="number"]').parent().addClass('has-error has-feedback');
      $('.glyphicon').show();
    } else {
      //removes the visual feedback if it already existed
      $('input[name="number"]').parent().removeClass('has-error has-feedback');
      $('.glyphicon').hide();
    }
  });
});
