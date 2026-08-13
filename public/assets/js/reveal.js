document.addEventListener("DOMContentLoaded", () => {
  const destra = document.querySelector(".destra");
  if (destra) {
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__fadeInLeft");
        }
      });
    });
    observer1.observe(destra);
  }

  const sinistra = document.querySelector(".sinistra");
  if (sinistra) {
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__fadeInRight");
        }
      });
    });
    observer2.observe(sinistra);
  }
});
