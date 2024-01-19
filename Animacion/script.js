var pj = document.getElementById("pj");
var particles = document.getElementById("particles");
var buttons = document.getElementById("buttons");
var infinite = document.getElementById("infinite");
var gota = document.getElementById("gota");
var currentRotation = 0;
var clickable = true;
var velocity= 5;

pj.addEventListener("click", function(event) {
    if (!clickable) {
        return;
    }

    clickable = false;
    setTimeout(function() {
        clickable = true;
    }, 650);

    particles.style.animation = "op-particles-down 0.3s linear";
    setTimeout(() => {
        particles.style.opacity = "0";
    }, 300);

    if(currentRotation == 0){
        pj.style.animation = "jump 0.6s ease-in-out";
        if(velocity==10){
            gota.style.animation = "op-particles-down 0.3s linear";
            setTimeout(() => {
                gota.style.opacity = "0";
            }, 300);
        }
    }else if(currentRotation == 180){
        pj.style.animation = "jump2 0.6s ease-in-out";

        if(velocity==10){
            gota.style.animation = "op-particles-up 0.3s linear";
            setTimeout(() => {
                gota.style.opacity = "1";
            }, 300);
        }
    }
    currentRotation = (currentRotation === 0) ? 180 : 0;
    pj.style.transform = "rotateZ(" + currentRotation + "deg)";
    
    setTimeout(() => {
        pj.style.animation = "shake 0.3s ease-in-out infinite";
    }, 600);
    setTimeout(() => {
        particles.style.animation = "op-particles-up 0.3s linear";
        setTimeout(() => {
            particles.style.opacity = "1";
        }, 300);
    }, 600);

});

buttons.addEventListener("click", function(event) {
    if (velocity == 5) {
        infinite.classList.add("fast-animation");
        if(currentRotation!=180){
            gota.style.animation = "op-particles-up 0.3s linear";
            setTimeout(() => {
                gota.style.opacity = "1";
            }, 300);
        }
        velocity = 10;
    } else {
        infinite.classList.remove("fast-animation");
        gota.style.animation = "op-particles-down 0.3s linear";
        setTimeout(() => {
            gota.style.opacity = "0";
        }, 300);
        velocity = 5;
    }
});
