console.log('111');


function next() {
    const Slide1 = document.getElementById('Slide1').display;
    const Slide2 = document.getElementById('Slide2').display;
    //const display = getComputedStyle(document.getElementById('menu')).display;
    
     if (Slide1 === "none") {
         document.getElementById('Slide2').style.display = "block";
         
     } else {
         document.getElementById('Slide2').style.display = "none";
     }
}  