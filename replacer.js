(function () {
    'use strict';

    var replacer = function () {
        var allLinks = document.getElementsByTagName('a');

        for (var i=0; i < allLinks.length; i++) {
            var currentLink = allLinks[i];
            var text = currentLink.innerText;
            if (text && text.trim().toLowerCase() == 'blame') {
                currentLink.innerText = 'Praise';
            }
        }
    };

    if (
        document.readyState === "complete" ||
        (document.readyState !== "loading" && !document.documentElement.doScroll)
    ) {
        replacer();
    } else {
      document.addEventListener("DOMContentLoaded", callback);
    }
    
}());
