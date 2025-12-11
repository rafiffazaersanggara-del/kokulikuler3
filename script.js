// =====================================
// SMOOTH SCROLL UNTUK NAVIGASI
// =====================================
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});


// =====================================
// SCROLL REVEAL ANIMATION (FADE-IN)
// =====================================

// Ambil semua elemen dengan class fade
const fadeElements = document.querySelectorAll('.fade');

// Observer: memantau elemen saat masuk viewport
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running";
            observer.unobserve(entry.target);  // hentikan observasi setelah tampil
        }
    });
}, { threshold: 0.2 });

// Daftarkan semua .fade ke observer
fadeElements.forEach(el => observer.observe(el));


// =====================================
// OPTIONAL: Animasi klik pada navigasi
// =====================================
document.querySelectorAll("nav a").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.add("active-click");
        setTimeout(() => btn.classList.remove("active-click"), 300);
    });
});