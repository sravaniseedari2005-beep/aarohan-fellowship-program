document.addEventListener("DOMContentLoaded", () => {
  // Scroll reveal
  const revealItems = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => revealObserver.observe(item));

  // Smooth scrolling for programme dropdown anchors
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        // Close Bootstrap mobile navigation after selecting a programme.
        const nav = document.getElementById("mainNav");
        if (nav && nav.classList.contains("show") && window.bootstrap) {
          bootstrap.Collapse.getOrCreateInstance(nav).hide();
        }
      }
    });
  });

  // Language selector UI
  const selectedLanguage = document.getElementById("selectedLanguage");
  document.querySelectorAll(".language-option").forEach(option => {
    option.addEventListener("click", () => {
      selectedLanguage.textContent = option.dataset.lang;
      if (option.dataset.lang !== "English") {
        showNotice(`${option.dataset.lang} selected. Add translated page content or JSON language files for full multilingual support.`);
      }
    });
  });

  // Back to top
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 600);
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Highlight a programme when a user opens a location section.
  const cards = document.querySelectorAll(".programme-card");
  const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cards.forEach(card => card.classList.remove("in-view"));
        entry.target.classList.add("in-view");
      }
    });
  }, { threshold: 0.35 });

  cards.forEach(card => cardObserver.observe(card));

  // Small accessible notice
  function showNotice(message) {
    let notice = document.getElementById("programmeNotice");
    if (!notice) {
      notice = document.createElement("div");
      notice.id = "programmeNotice";
      notice.setAttribute("role", "status");
      notice.style.cssText = `
        position:fixed;right:20px;bottom:78px;max-width:350px;z-index:2000;
        padding:13px 16px;border-radius:14px;background:#073d2b;color:#dff8e8;
        box-shadow:0 16px 35px rgba(0,0,0,.18);font-size:.75rem;line-height:1.5;
      `;
      document.body.appendChild(notice);
    }
    notice.textContent = message;
    clearTimeout(window.noticeTimer);
    window.noticeTimer = setTimeout(() => notice.remove(), 3500);
  }

  document.getElementById("year").textContent = new Date().getFullYear();
});
