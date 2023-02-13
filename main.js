
//SLIDER SKILLS
let slider = document.querySelector('.skills__slider');
let iconleft = document.querySelector('.skills__arrowleft');
let iconRigth = document.querySelector('.skills__arrowrigth');
let contador = 0;
let images = document.querySelectorAll('.skils__img').length;

function moveSlider(){
    if( contador > images -1){
        contador = 0;
    }else if( contador < 0){
        contador = images - 1;
    }    
    slider.style.transition = "all 1s ease";
    slider.style.marginLeft = `-${contador * 100}%`;
}

function moveRight(){
    contador++;
    moveSlider();
}

iconRigth.addEventListener('click', moveRight);

function moveLeft(){
    contador--;
    moveSlider();
}

iconleft.addEventListener('click', moveLeft);


//SLIDER PROYECTS
let sliderP = document.querySelector('.proyects__slider');
let iconleftP = document.querySelector('.proyects__arrowleft');
let iconRigthP = document.querySelector('.proyects__arrowrigth');
let contadorP = 0;
let imagesP = document.querySelectorAll('.proyects__img').length;

function moveSliderP(){
    if( contadorP > imagesP -1){
        contadorP = 0;
    }else if( contadorP < 0){
        contadorP = imagesP - 1;
    }    
    sliderP.style.transition = "all 1s ease";
    sliderP.style.marginLeft = `-${contadorP * 100}%`;
}

function moveRightP(){
    contadorP++;
    moveSliderP();
}

iconRigthP.addEventListener('click', moveRightP);

function moveLeftP(){
    contadorP--;
    moveSliderP();
}

iconleftP.addEventListener('click', moveLeftP);


//SLIDER work
let sliderW = document.querySelector('.work__slider');
let iconleftW = document.querySelector('.work__arrowleft');
let iconRigthW = document.querySelector('.work__arrowrigth');
let contadorW = 0;
let imagesW = document.querySelectorAll('.work__img').length;

function moveSliderW(){
    if( contadorW > imagesW -1){
        contadorW = 0;
    }else if( contadorW < 0){
        contadorW = imagesW - 1;
    }    
    sliderW.style.transition = "all 1s ease";
    sliderW.style.marginLeft = `-${contadorW * 100}%`;
}

function moveRightW(){
    contadorW++;
    moveSliderW();
}

iconRigthW.addEventListener('click', moveRightW);

function moveLeftW(){
    contadorW--;
    moveSliderW();
}

iconleftW.addEventListener('click', moveLeftW);

//TYPING H1

let i = 0;
let txt = 'BIENVENIDO JUGADOR 1';
let speed = 150;

function typing(){
   if (i < txt.length){
    document.getElementById('home__typing').innerHTML += txt.charAt(i);
    i++
    setTimeout(typing,speed);
}
}

typing();

// AUDIO
    
    let audio = new Audio();
    audio.src = "songmario.mp3"