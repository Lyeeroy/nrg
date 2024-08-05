document.addEventListener("DOMContentLoaded", function () {
  const faqs = document.querySelectorAll(".border-b");

  faqs.forEach((faq) => {
    faq.addEventListener("click", function () {
      const answer = faq.querySelector("#faq-answer");
      const icon = faq.querySelector("svg");

      if (answer.classList.contains("hidden")) {
        answer.classList.remove("hidden");
        icon.classList.add("rotate-180");
        icon.style.transition = "transform 0.3s ease";
      } else {
        answer.classList.add("hidden");
        icon.classList.remove("rotate-180");
        icon.style.transition = "transform 0.3s ease";
      }
    });
  });
});
