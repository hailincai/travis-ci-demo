'use strict';

function getGreeting(){
  return "Hello Node";
}

function hello(){
  return getGreeting();
}

module.exports = hello;
