$(document).ready(() => {
    var text = $(".text");
    let flag = true;
    setInterval(() => {
        if (flag) {

            text.removeClass("hidden");
            flag = false;
        } else {
            flag = true;
            text.addClass("hidden");
        }
    }, 1200)
})