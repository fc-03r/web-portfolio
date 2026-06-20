<section id="concept">
 <h2 class="concept-title">CONCEPT</h2>
    <div class="concept-section">

        <!-- 上段 -->
        <div class="concept-item">
            <div class="concept-img">
                <img src="assets/img/concept1.jpg" alt="Cozy time with cats">
            </div>
            <div class="concept-text">
                <p class="fade-up">Hidamari Nyan Cat Café is a place where you can spend<br>relaxing time with cats.
Escape from your busy daily life<br>and enjoy a cozy space to unwind.
</p>
            </div>
        </div>

        <!-- 下段 -->
        <div class="concept-item reverse">
            <div class="concept-img">
                <img src="assets/img/concept2.jpg" alt="Spend warm, sunny moments together with our cats.
">
            </div>
            <div class="concept-text">
                <p class="fade-up">Spend warm, sunny moments together with our cats.<br>
Enjoy the soft fur and gentle sunlight,<br>
and relax both your mind and body in our cozy café experience.
</p>
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
