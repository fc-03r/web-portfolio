function startHeroSlide() {
    const heroImages = document.querySelectorAll("#hero img");
    if (!heroImages || heroImages.length === 0) return;

    let current = 0;

    // 最初の画像だけ表示
    heroImages.forEach((img, i) => {
        img.style.opacity = i === 0 ? 1 : 0;
        img.style.transition = "opacity 1s ease-in-out";
    });

    setInterval(() => {
        heroImages[current].style.opacity = 0;
        current = (current + 1) % heroImages.length;
        heroImages[current].style.opacity = 1;
    }, 4000);
}
