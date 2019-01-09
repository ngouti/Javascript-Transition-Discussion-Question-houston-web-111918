// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

function test(){

  let x = document.getElementById("interval").value
  // console.log(x)
  
  // let y = document.getElementById("foreground")
  var y = document.querySelector("#foreground");

  var fade = setInterval(function () {
    if(x === NaN){
      x = 10000
    }
    //  1 is default value = fully opaque
    //  0 = full transparent
    if (!y.style.opacity) {
        y.style.opacity = 1;
    }
    if (y.style.opacity = 0) {
      clearInterval(fade);
  } 
   
}, x);

    
}


