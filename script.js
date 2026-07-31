// ===============================
// Luxury Wedding Invitation
// ===============================

// Card Animation
window.addEventListener("load", () => {
    const card = document.querySelector(".card");

    card.style.opacity = "0";
    card.style.transform = "translateY(50px) scale(.96)";

    setTimeout(() => {
        card.style.transition = "1.5s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0) scale(1)";
    }, 300);
});

// Ring Animation
const ring = document.querySelector(".ring");

setInterval(() => {
    ring.animate([
        { transform: "rotate(0deg) scale(1)" },
        { transform: "rotate(10deg) scale(1.12)" },
        { transform: "rotate(-10deg) scale(1.12)" },
        { transform: "rotate(0deg) scale(1)" }
    ], {
        duration: 1800
    });
}, 2200);

// Countdown
const weddingDate = new Date("August 7, 2026 18:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if(distance < 0){

        document.getElementById("days").innerHTML="00";
        document.getElementById("hours").innerHTML="00";
        document.getElementById("minutes").innerHTML="00";
        return;
    }

    const days=Math.floor(distance/(1000*60*60*24));

    const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;

}

setInterval(updateCountdown,1000);

updateCountdown();

// Golden Sparkles

function sparkle(){

    const star=document.createElement("div");

    star.innerHTML="✨";

    star.style.position="fixed";

    star.style.left=Math.random()*window.innerWidth+"px";

    star.style.top="-30px";

    star.style.fontSize=(12+Math.random()*18)+"px";

    star.style.opacity=Math.random();

    star.style.pointerEvents="none";

    star.style.zIndex="9999";

    document.body.appendChild(star);

    let y=-30;

    let speed=1+Math.random()*2;

    const move=setInterval(()=>{

        y+=speed;

        star.style.top=y+"px";

        if(y>window.innerHeight){

            star.remove();

            clearInterval(move);

        }

    },20);

}

setInterval(sparkle,350);

// Smooth Scroll

document.querySelectorAll("a").forEach(link=>{

    link.addEventListener("click",function(e){

        if(this.hash!==""){

            e.preventDefault();

            document.querySelector(this.hash).scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
