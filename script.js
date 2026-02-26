const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealItems.forEach((item) => observer.observe(item));

const contactForm = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");

if (contactForm instanceof HTMLFormElement && formNote) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = String(contactForm.elements.namedItem("name")?.value || "").trim();
    const email = String(contactForm.elements.namedItem("email")?.value || "").trim();
    const message = String(contactForm.elements.namedItem("message")?.value || "").trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    formNote.textContent = "Opening your email client...";
    window.location.href = `mailto:cjlomax@iu.edu?subject=${subject}&body=${body}`;
  });
}
