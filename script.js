function heart() {
    const icons = ["🍃", "🌻", "🍂"];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.innerText = randomIcon;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

setInterval(heart, 200);
