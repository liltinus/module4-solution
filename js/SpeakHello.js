//module4-solution - SpeakHello IIFE
(function(window) {
    'use strict';
    var myNameSpace1 = {};
    window.myNameSpace1 = myNameSpace1;
    var speakWord = "Hello";
    myNameSpace1.speak = function (name) {
        myNameSpace1.name = name;
        console.log(speakWord + " " + myNameSpace1.name);
    }
}(window));
