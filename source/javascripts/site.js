// This is where it all goes :)
function validateForm() {
    var x = document.forms["sosci"]["eid"].value;
    if (x == "") {
        alert("Please select ID type");
        return false;
    }
}
