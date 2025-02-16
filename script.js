
document.addEventListener("DOMContentLoaded", function () {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    new Sortable(document.getElementById("grid"), {
      animation: 150,
      ghostClass: "sortable-ghost",
      handle: isMobile ? ".drag-handle" : undefined,
      filter: isMobile ? ".non-draggable" : undefined
    });

    document.querySelectorAll(".small-grid").forEach(grid => {
      new Sortable(grid, {
        animation: 150,
        ghostClass: "sortable-ghost",
        handle: isMobile ? ".drag-handle" : undefined
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const gifImage = document.querySelector(".gif-hover");

    gifImage.addEventListener("mouseenter", function () {
      this.dataset.static = this.src;
      this.src = this.dataset.gif;
    });

    gifImage.addEventListener("mouseleave", function () {
      this.src = this.dataset.static;
    });
  });

  function updateDateWidget() {
    const dateWidget = document.getElementById("date-widget");
    const dayElement = document.getElementById("day");
    const monthElement = document.getElementById("month");

    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('es-ES', { month: 'short' });

    dayElement.textContent = day;
    monthElement.textContent = month.charAt(0).toUpperCase() + month.slice(1); 
  }

  updateDateWidget();

  document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio");
    const playButton = document.querySelector(".play-button");
    const widget = document.getElementById("spotify-widget");

    let isPlaying = false;

    playButton.addEventListener("click", function () {
        if (isPlaying) {
            audio.pause();
            resetPlayer();
        } else {
            audio.play();
            playButton.innerHTML = '<i class="fa-solid fa-pause"></i>'; 
            widget.classList.add("playing");
            isPlaying = true;
        }
    });

    // Evento cuando termina la canción
    audio.addEventListener("ended", function () {
        resetPlayer();
    });

    // Función para resetear el player
    function resetPlayer() {
        playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
        widget.classList.remove("playing");
        isPlaying = false;
    }
});

