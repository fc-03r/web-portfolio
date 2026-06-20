const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    hamburger.style.display = "none"; // ハンバーガー非表示
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    hamburger.style.display = "flex"; // ハンバーガー再表示
});
