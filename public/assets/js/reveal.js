document.querySelector('#year').textContent = new Date().getFullYear()

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.dataset.visible = 'true'
      observer.unobserve(entry.target)
    })
  }, { threshold: 0.12 })
  document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))
}
