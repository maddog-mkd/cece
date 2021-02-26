// SHOWING ELEMENTS
window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}







// ZGOLEMUVANE NA BROJ
const broj = document.querySelectorAll('.broj')

broj.forEach(broj => {
    broj.innerText = '0'

    const updateBroj = () => {
        const target = +broj.getAttribute('data-target')
        const c = +broj.innerText

        const increment = target / 200

        if(c < target) {
            broj.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateBroj, 1)
        } else{
            broj.innerText = target
        }
    }

    updateBroj()
});















