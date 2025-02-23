document.addEventListener("DOMContentLoaded", function () {
    // Efeito de fade-in ao carregar a página
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        setTimeout(() => {
            section.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, 500);
    });

    // Reproduzir música de fundo
    const audio = new Audio("clair-de-lune.mp3");
    const playButton = document.createElement("button");
    audio.volume = 1.0;
    playButton.innerText = "🎵 Reproduzir Música";
    playButton.style.position = "fixed";
    playButton.style.bottom = "20px";
    playButton.style.right = "20px";
    playButton.style.background = "#8b5e83";
    playButton.style.color = "white";
    playButton.style.border = "none";
    playButton.style.padding = "10px 15px";
    playButton.style.borderRadius = "8px";
    playButton.style.cursor = "pointer";
    document.body.appendChild(playButton);

    let isPlaying = false;
    playButton.addEventListener("click", () => {
        if (!isPlaying) {
            audio.play();
            playButton.innerText = "⏸️ Pausar Música";
        } else {
            audio.pause();
            playButton.innerText = "🎵 Reproduzir Música";
        }
        isPlaying = !isPlaying;
    });
});
