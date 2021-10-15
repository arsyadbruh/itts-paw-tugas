var typed = new Typed(".typed", {
  strings: ["Hai...", "My Name...", "Welcome Boy"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

function yahalo() {
  document.getElementById("player").play();
  Swal.fire({
    imageUrl: "./assets/img/yuigahama-yahallo.gif",
    timer: 1900,
    width: "250px",
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    showConfirmButton: false,
    showCancelButton: false,
    background: "transparent",
    backdrop: "rgba(27, 27, 27, 0.9)",
  });
}

function darkMode() {
  var element = document.body;
  var btnDarkmode = document.getElementById("btn-darkmode");
  element.classList.toggle("dark-mode");

  if (element.classList.contains("dark-mode")) {
    btnDarkmode.innerHTML = `
        <i class="bi bi-brightness-high fs-2 text-light"></i>
      `;
  } else {
    btnDarkmode.innerHTML = `
      <i class="bi bi-moon-stars-fill fs-2"></i>
    `;
  }
}
