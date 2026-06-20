<section id="contact">
    <h2 class="contact-title">CONTACT</h2>

    <div class="contact-container">
        <form action="#" method="post" class="contact-form" id="contactForm">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="e.g., John Smith" required>

            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="e.g., example@mail.com" required>

            <label for="subject">Subject</label>
            <select id="subject" name="subject" required>
                <option value="">Please select</option>
                <option value="reservation">Reservation</option>
                <option value="menu">Menu</option>
                <option value="cat-interaction">Cat Interaction</option>
                <option value="event">Event / Campaign</option>
                <option value="other">Other</option>
            </select>

            <label for="message">Message</label>
            <textarea id="message" name="message" rows="6" placeholder="Please enter your message" required></textarea>

            <button type="submit">Send</button>
        </form>
    </div>
</section>
