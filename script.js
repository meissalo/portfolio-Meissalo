document.addEventListener("DOMContentLoaded", () => {


  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (!scrollBtn) return;
    scrollBtn.style.opacity = window.scrollY > 300 ? "1" : "0";
    scrollBtn.style.pointerEvents = window.scrollY > 300 ? "auto" : "none";
  });

  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const form = document.getElementById("contactForm");
  const formMsg = document.getElementById("formMsg");

  if (form && formMsg) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        formMsg.style.color = "#ff5555";
        formMsg.textContent = "⚠️ Veuillez remplir tous les champs.";
        return;
      }

      formMsg.style.color = "#00e0ff";
      formMsg.textContent = `✅ Merci ${name}, votre message a bien été envoyé.`;
      form.reset();
    });
  }

  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));

});
