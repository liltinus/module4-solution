//module4-solution - SpeakGoodBye IIFE
(function(window) {
    'use strict';
    var myNameSpace2 = {};
    window.myNameSpace2 = myNameSpace2;
    var speakWord = "Good Bye";
    myNameSpace2.speak = function (name) {
        myNameSpace2.name = name;
        console.log(speakWord + " " + myNameSpace2.name);
    }
}(window));
