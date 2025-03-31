alert("remote script working !");
console.log("remote script working !");
setTimeout(function() {
    console.log("loading iframe !");
    window.location.href = '/fan-home';
}, 5000);
