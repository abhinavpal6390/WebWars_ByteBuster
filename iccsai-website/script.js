document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // Check saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeIcon.src = "public/assets/icons/sun.svg";
    }

    // Theme Toggle Click Event
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const newTheme = document.body.classList.contains("dark") ? "dark" : "light";
        themeIcon.src = newTheme === "dark" ? "public/assets/icons/sun.svg" : "public/assets/icons/moon.svg";
        localStorage.setItem("theme", newTheme);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
});
