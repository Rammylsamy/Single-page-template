

// on load gif 
let out;

 function timee() {

out= setTimeout(page,1000) }

function page() {

    document.getElementById('loader').style.display = "none";

    document.getElementById('landing').style.display = "block";

}


// Scroll up

let scrollupp = document.querySelector('.scrollup');


window.onscroll = function() {

  win()
}


function win(){

if(document.documentElement.scrollTop >1200) {

  scrollupp.style.display = "block"
}

else{

  scrollupp.style.display = "none"

}}


scrollupp.addEventListener('click', ()=>{

document.documentElement.scrollTop = 0;


})