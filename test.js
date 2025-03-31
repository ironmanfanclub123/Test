alert("remote script working !");
console.log("remote script working !");
setTimeout(function() {
    console.log("loading iframe !");
    loadiframe('/tier/posts?tier=998301427263293824', '');
}, 5000);
