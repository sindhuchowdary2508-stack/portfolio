document.addEventListener("DOMContentLoaded", () => {

  // Mobile menu
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("open");

      const icon = menuBtn.querySelector("i");

      if (nav.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    });

    document.querySelectorAll(".nav nav a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      });
    });
  }

  // Reveal animation
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  // Back to top button
  const topButton = document.getElementById("top");

  if (topButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        topButton.classList.add("show");
      } else {
        topButton.classList.remove("show");
      }
    });

    topButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Current year
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Active navigation
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll(".nav nav a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

});
