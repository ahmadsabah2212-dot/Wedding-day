// Animation when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {
        card.style.transition = "all 1.2s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 200);
});

// Heart animation
const heart = document.querySelector(".heart");

if (heart) {
    setInterval(() => {
        heart.animate(
            [
                { transform: "scale(1)" },
                { transform: "scale(1.2)" },
                { transform: "scale(1)" }
            ],
            {
                duration: 1200,
                easing: "ease-in-out"
            }
        );
    }, 1300);
}

// Gold sparkle effect
function createSparkle() {
    const sparkle = document.createElement("span");

    sparkle.innerHTML = "✨";
    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = "-30px";
    sparkle.style.fontSize = (10 + Math.random() * 18) + "px";
    sparkle.style.opacity = Math.random();
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "9999";

    document.body.appendChild(sparkle);

    let y = -30;

    const fall = setInterval(() => {
        y += 2;
        sparkle.style.top = y + "px";

        if (y > window.innerHeight) {
            sparkle.remove();
            clearInterval(fall);
        }
    }, 25);
}

// Generate sparkles continuously
setInterval(createSparkle, 500);
