const ytBtn = document.getElementById("ytBtn");
const status = document.getElementById("status");
const unlock = document.getElementById("unlock");

// link VIP thay đổi tuỳ trang
const targetUrl = document.body.getAttribute("data-target");

ytBtn.onclick = () => {
  window.open("https://www.youtube.com/@khoindvnmodios", "_blank");

  ytBtn.classList.add("done");
  let timeLeft = 15;
  status.textContent = `⏳ Vui lòng chờ ${timeLeft}s...`;

  const countdown = setInterval(() => {
    timeLeft--;
    if (timeLeft > 0) {
      status.textContent = `⏳ Vui lòng chờ ${timeLeft}s...`;
    } else {
      clearInterval(countdown);
      status.textContent = "✔️ Đã mở khoá!";
      unlock.style.display = "block"; // hiện nút
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 1000);
    }
  }, 1000);
};
