// ===============================
// Luxury Wedding Invitation
// ===============================

// Card Animation
window.addEventListener("load", () => {
    const card = document.querySelector(".card");

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {
        card.style.transition = "1.2s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 200);
});

// Ring Animation
const ring = document.querySelector(".ring");

if (ring) {
    setInterval(() => {
        ring.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.12)" },
            { transform: "scale(1)" }
        ], {
            duration: 1500
        });
    }, 2000);
}

// Golden Sparkles
function sparkle() {

    const star = document.createElement("span");

    star.innerHTML = "✨";

    star.style.position = "fixed";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = "-30px";
    star.style.fontSize = (10 + Math.random() * 12) + "px";
    star.style.opacity = Math.random();
    star.style.pointerEvents = "none";
    star.style.zIndex = "9999";

    document.body.appendChild(star);

    let y = -30;
    const speed = 1 + Math.random() * 2;

    const move = setInterval(() => {

        y += speed;

        star.style.top = y + "px";

        if (y > window.innerHeight) {

            clearInterval(move);
            star.remove();

        }

    }, 20);

}

setInterval(sparkle, 600);

// Button Hover Effect
const button = document.querySelector(".location-btn");

if (button) {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

}
