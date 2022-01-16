let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let sabir = document.querySelector('.sabir');

window.onscroll = function () {
    let value = scrollY;

    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value *3 + 'px';
    sabir.style.fontSize = value + 'px';

    if (scrollY >= 100){
        sabir.style.fontSize = '100px';
        sabir.style.position = 'fixed';
        if (scrollY >= 400){
            sabir.style.display = 'none';
        }
        else{
            sabir.style.display = 'block';
        }
        if (scrollY >= 200){
            document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)';
        }
        else{
            document.querySelector('.main').style.background = 'linear-gradient(#49076c, #e204ff)';
        }
    }
    
}