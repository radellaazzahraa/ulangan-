// Animasi teks muncul satu per satu
document.addEventListener("DOMContentLoaded", () => {
  const texts = document.querySelectorAll(".home .content *");
  texts.forEach((text, i) => {
    text.style.opacity = "0";
    text.style.transform = "translateY(20px)";
    setTimeout(() => {
      text.style.transition = "all 1s ease";
      text.style.opacity = "1";
      text.style.transform = "translateY(0)";
    }, i * 400);
  });
});
// Popup otomatis muncul
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

function showPopup() {
  popup.classList.add("show");
  setTimeout(() => {
    popup.classList.remove("show");
  }, 5000);
}
setTimeout(showPopup, 2000);
closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
});
  function updateClock() {
    const now = new Date();
    const jam = String(now.getHours()).padStart(2, '0');
    const menit = String(now.getMinutes()).padStart(2, '0');
    const detik = String(now.getSeconds()).padStart(2, '0');
    document.getElementById("clock").textContent = `${jam}:${menit}:${detik}`;
  }
  setInterval(updateClock, 1000);
  updateClock();

