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
    title: "ヾ(•ω•`)o",
    timer: 1900,
    width: "250px",
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    showConfirmButton: false,
    showCancelButton: false,
  });
}
