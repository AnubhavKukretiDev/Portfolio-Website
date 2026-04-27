const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(item => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    
    faqs.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});