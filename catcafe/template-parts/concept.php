<section id="concept">
 <h2 class="concept-title">CONCEPT</h2>
    <div class="concept-section">

        <!-- 上段 -->
        <div class="concept-item">
            <div class="concept-img">
                <img src="assets/img/concept1.jpg" alt="猫と過ごす時間">
            </div>
            <div class="concept-text">
                <p class="fade-up">ひだまりにゃんこかふぇは、猫たちと過ごす<br>
                ゆったりとした時間を提供する場所です。<br>
                忙しい毎日から離れ、ほっとひと息つける空間をお届けします。</p>
            </div>
        </div>

        <!-- 下段 -->
        <div class="concept-item reverse">
            <div class="concept-img">
                <img src="assets/img/concept2.jpg" alt="ぽかぽかのひだまり">
            </div>
            <div class="concept-text">
                <p class="fade-up">ねこと一緒に、ぽかぽかのひだまりのような時間を。<br>
                ふわふわの毛やあたたかい日差しとともに、<br>
                心も体もほぐれるカフェ体験をお楽しみください。</p>
            </div>
        </div>

    </div>
</section>
<script>
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show'); // 出たらクラスを外す
            }
        });
    }, { threshold: 0.2 }); // 20%表示されたら発火

    fadeElements.forEach(el => observer.observe(el));
});
</script>
