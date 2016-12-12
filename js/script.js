// module4-solution
(function () {
    'use strict';
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (name in names) {
        var myString = names[name];
        var mylowercase = myString.toLowerCase();
        var firstLetter = mylowercase.charAt(0);
        if (firstLetter == "j") {
            myNameSpace2.speak(myString);
        }
        else {
            myNameSpace1.speak(myString);
        }
    };
}());
