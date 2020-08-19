/**
 * Check the `dist` folder after `build` regarding what happens
 * to those reallyLongNames & how to ignore some of these
 */


const aReallyLongVariableNameInTs = "This is custom-ts-script1.ts!";
const anotherReallyLongVariableNameInTs = "Now calling a function that resides in custom-ts-script2.ts";

function initTs() {
    alert(aReallyLongVariableNameInTs);
    aReallyLongFunctionNameInTs();
}

function aReallyLongFunctionNameInTs() {
    alert(anotherReallyLongVariableNameInTs);
    anotherReallyLongFunctionNameInTs();
}