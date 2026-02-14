const bgm = document.getElementById("bgm");

function openInvitation() {
  document.querySelector('.opening').style.display = 'none';
  document.getElementById('mainContent').classList.remove('hidden');
  bgm.volume = 0;
  bgm.play();

  let v = 0;
  const fade = setInterval(() => {
    if (v < 1) {
      v += 0.05;
      bgm.volume = v;
    } else clearInterval(fade);
  }, 200);
}

/* SCROLL REVEAL */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

/* GUEST NAME */
const guest = new URLSearchParams(window.location.search).get('to');
if (guest) document.getElementById('guestName').innerText = guest;

/* COUNTDOWN */
const target = new Date("2026-12-12T08:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;
  if (diff < 0) return;

  document.getElementById("days").innerText = Math.floor(diff / (1000*60*60*24));
  document.getElementById("hours").innerText = Math.floor((diff / (1000*60*60)) % 24);
  document.getElementById("minutes").innerText = Math.floor((diff / (1000*60)) % 60);
  document.getElementById("seconds").innerText = Math.floor((diff / 1000) % 60);
}, 1000);

/* MODAL GALLERY */
document.querySelectorAll(".gallery img").forEach(img => {
  img.onclick = () => {
    document.getElementById("imgModal").style.display = "flex";
    document.getElementById("modalImg").src = img.src;
  };
});
document.querySelector(".close").onclick = () =>
  document.getElementById("imgModal").style.display = "none";

/* GIFT */
function toggleGift() {
  const box = document.getElementById("giftBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}
