function hideemail(target) {
    var email = target;
    var hiddenEmail = "";
    for (var i = 0; i < email.length; i++) {
        if (i > 2 && i < email.indexOf("@")) {
            hiddenEmail += "*";
        }
        else {
            hiddenEmail += email[i];
        }
    }
    return hiddenEmail;
}
console.log(hideemail("shubhamkeshri1997@gmail.com"));
