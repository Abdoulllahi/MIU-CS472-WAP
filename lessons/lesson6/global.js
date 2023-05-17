// console.log(window);

// window.open("http://127.0.0.1:5500/lesson7/index.html", "_blank", "width=900,height=600,scrollbars=1");

document.getElementById('btn').addEventListener('click', function (event) {
    console.log(this);
    alert('The port is ' + window.location.port);
    console.log(event);
    alert(history.length)
});