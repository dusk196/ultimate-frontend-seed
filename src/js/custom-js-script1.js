/**
 * Check the `dist` folder after `build` regarding what happens
 * to those reallyLongNames & how to ignore some of these
 */

 
var aReallyLongVariableName = "This is custom-js-script1.js!";
var anotherReallyLongVariableName = "Now calling a function that resides in custom-js-script2.js";

function initJs() {
  alert(aReallyLongVariableName);
  aReallyLongFunctionName();
}

function aReallyLongFunctionName() {
  alert(anotherReallyLongVariableName);
  anotherReallyLongFunctionName();
}