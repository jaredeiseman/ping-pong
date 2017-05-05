# Ping Pong

## Created by Jared Eiseman


## Description

The Ping Pong app will take in a positive integer from a user, then process that input to count from 1 to the inputted number replacing any and all numbers divisible by three, five, or fifteen with "ping", "pong", or "ping-pong" respectively in the output. This process is repeatable regardless of page reload.


## Specs

| Behavior| Input Example | Output Example |
|:-------------:|:-------------:|:-------------:|
| Validate the entered number is a positive integer | -1 or 0 | give visual feedback to user |
| Count up to the provided number | 5 | [1,2,3,4,5] |
| Replace all numbers divisible by 3 with "ping" | [1,2,3,4,5,6] | [1,2,"ping",4,5,"ping"] |
| Replace all numbers divisible by 5 with "pong" | [1,2,3,4,5] | [1,2,3,4,"pong"] |
| Replace all numbers divisible by 15 with "ping-pong" | [1,2,3 ... 14,15] | [1,2,3 ... 14,"ping-pong"] |
| Allow user to select the order in which to display the information (ascending/descending) | [1,2,"ping",4,"pong" ... 14, "ping-pong"] | 1,2,"ping",4,"pong" ... 14, "ping-pong" OR "ping-pong",14 ... "pong",4,"ping",2,1 |


## Setup/Installation Requirements

  * Clone the github repository to your local machine.
  * Open the directory created and load "index.html" into your browser of choice.
  * Enter a positive integer into the input and click submit
  * Enjoy the magic that is JavaScript!


## Bugs
There are no known bugs at this time, but please contact the creator with questions or concerns regarding this application.


## Technologies Used

  * HTML
  * CSS (Bootstrap)
  * JavaScript (jQuery)


## Licensing
MIT

Copyright &copy; 2017 Jared Eiseman All Rights Reserved.
