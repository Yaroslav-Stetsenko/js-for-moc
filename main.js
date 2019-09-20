var fruits = ["Banana", "Apple", "Orange", "Lemon"];
var div = document.getElementById('test-moc');
fruits.forEach(function (item) {
    if (item == "Apple") {item = "Only Apple"};
    div.innerHTML += item+'<br />';
});