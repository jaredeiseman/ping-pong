var movingLeft = true;
var movingUp = true;

var movingXToggle = function (direction) {
  if (direction === true) {
    movingLeft = false;
  } else {
    movingLeft = true;
  }
  return;
}

var movingYToggle = function (direction) {
  if (direction === true) {
    movingUp = false;
  } else {
    movingUp = true;
  }
  return;
}

var movePaddleUp = function (currentValue) {
  result = parseInt(currentValue.substring(0, currentValue.length - 1));
  if (result >= 25) {
    result -= 25;
  } else if (result <= 25) {
    result = 5;
  }
  result = result.toString() + "px";
  return result;
}

var movePaddleDown = function (currentValue, height) {
  result = parseInt(currentValue.substring(0, currentValue.length - 1));
  if (result <= height - 105) {
    result += 25;
  } else if (height - result < 105) {
    result = height - 105;
  }
  result = result.toString() + "px";
  return result;
}

var moveBallLeft = function (currentValue) {
  result = parseInt(currentValue.substring(0, currentValue.length - 1));
  if (result >= 40) {
    result -= 10;
  } else {
    result = 35;
    movingXToggle(movingLeft);
  }
  result = result.toString() + "px";
  return result;
}

var moveBallRight = function (currentValue, width) {
  result = parseInt(currentValue.substring(0, currentValue.length - 1));
  if (result <= width - 60) {
    result += 10;
  } else {
    result = width - 60;
    movingXToggle(movingLeft);
  }
  result = result.toString() + "px";
  return result;
}

var moveBallUp = function (currentValue) {
  result = parseInt(currentValue.substring(0, currentValue.length - 1));
  if (result >= 25) {
    result -= 5;
  } else {
    result = 7;
    movingYToggle(movingUp);
    console.log('fa');
  }
  result = result.toString() + "px";
  return result;
}

var moveBallDown = function (currentValue, height) {
  result = parseInt(currentValue.substring(0, currentValue.length - 1));
  if (result <= height - 25) {
    result += 7;
  } else if (height - result < 25) {
    result = height - 25;
    movingYToggle(movingUp);
  }
  result = result.toString() + "px";
  return result;
}

$(document).ready(function() {
  var fps = 30;
  var now;
  var then = Date.now();
  var interval = 1000/fps;
  var delta;

  function update() {
      requestAnimationFrame(update);
      now = Date.now();
      delta = now - then;
      if (delta > interval) {
          then = now - (delta % interval);

          var currentValue = $('.ball').css('left');
          var verticalValue = $('.ball').css('top');
          var intValue = parseInt(currentValue.substring(0, currentValue.length - 1));
          var width = $('.game-board').width();
          var height = $('.game-board').height();
            if (movingLeft) {
              $('.ball').css('left', moveBallLeft(currentValue));
              if (movingUp) {
                $('.ball').css('top', moveBallUp(verticalValue));
              } else {
                $('.ball').css('top', moveBallDown(verticalValue, height));
              }
            } else {
              $('.ball').css('left', moveBallRight(currentValue, width));
              if (movingUp) {
                $('.ball').css('top', moveBallUp(verticalValue));
              } else {
                $('.ball').css('top', moveBallDown(verticalValue, height));
              }
            }
      }
  }

  update();

  $(window).keydown(function(e) {
    e.preventDefault();

    var leftValue = $('.left-paddle').css('top');
    var rightValue = $('.right-paddle').css('top');
    var height = $('.game-board').height();

    if (e.which === 65) {
      $('.left-paddle').css('top', movePaddleUp(leftValue));
    } else if (e.which === 90) {
      $('.left-paddle').css('top', movePaddleDown(leftValue, height));
    }

    if (e.which === 38) {
      $('.right-paddle').css('top', movePaddleUp(rightValue));
    } else if (e.which === 40) {
      $('.right-paddle').css('top', movePaddleDown(rightValue, height));
    }
  });
});
