function print_time() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time)
}

var duration = setInterval(function(){ 
  print_time();
}, 1000);
setTimeout(function() { 
  clearInterval(duration); 
}, 10000); // set duration time out after 10s