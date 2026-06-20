<section id="contact">
    <h2 class="contact-title">CONTACT</h2>

    <div class="contact-container">
        <form action="#" method="post" class="contact-form" id="contactForm">
            <label for="name">お名前</label>
            <input type="text" id="name" name="name" placeholder="例：山田 太郎" required>

            <label for="email">メールアドレス</label>
            <input type="email" id="email" name="email" placeholder="例：example@mail.com" required>

            <label for="subject">お問い合わせ内容</label>
            <select id="subject" name="subject" required>
                <option value="">選択してください</option>
                <option value="reservation">予約について</option>
                <option value="menu">メニューについて</option>
                <option value="cat-interaction">猫とのふれあいについて</option>
                <option value="event">イベント・キャンペーンについて</option>
                <option value="other">その他</option>
            </select>

            <label for="message">詳細内容</label>
            <textarea id="message" name="message" rows="6" placeholder="ご用件をご記入ください" required></textarea>

            <button type="submit">送信</button>
        </form>
    </div>
</section>
