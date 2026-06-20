document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const answer = item.querySelector(".faq-answer");
    const isOpen = item.classList.contains("open");

    // 他を閉じる
    document.querySelectorAll(".faq-item.open").forEach(openItem => {
      if (openItem !== item) {
        const openAnswer = openItem.querySelector(".faq-answer");
        closeAccordion(openItem, openAnswer);
      }
    });

    if (isOpen) {
      closeAccordion(item, answer);
    } else {
      openAccordion(item, answer);
    }
  });
});

function openAccordion(item, answer) {
  item.classList.add("open");

  answer.style.display = "block";
  const height = answer.scrollHeight + "px";

  answer.style.height = "0px";
  answer.style.opacity = "0";

  requestAnimationFrame(() => {
    answer.style.height = height;
    answer.style.opacity = "1";
  });

  // 終了後に auto に戻す
  answer.addEventListener("transitionend", function handler(e) {
    if (e.propertyName === "height") {
      answer.style.height = "auto";
      answer.removeEventListener("transitionend", handler);
    }
  });
}

function closeAccordion(item, answer) {
  const height = answer.scrollHeight + "px";
  answer.style.height = height;

  requestAnimationFrame(() => {
    answer.style.height = "0px";
    answer.style.opacity = "0";
  });

  answer.addEventListener("transitionend", function handler(e) {
    if (e.propertyName === "height") {
      answer.style.display = "none";
      item.classList.remove("open");
      answer.removeEventListener("transitionend", handler);
    }
  });
}
