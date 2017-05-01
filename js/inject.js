var replace_blame = function () {
    var blame_btn = $('a').filter(function(index) {
        return $(this).text() === "Blame";
    });
    $(blame_btn).text("Praise");
};

$(document).ready(function() {
    chrome.runtime.onMessage.addListener(function(msg) {
        if (msg.cmd && (msg.cmd == "replace_blame")) {
            replace_blame();
        }
    });

    replace_blame();
});
