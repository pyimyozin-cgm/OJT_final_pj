document.addEventListener("DOMContentLoaded", function () {

    const header = document.getElementById("main-header");
    const hamburger = document.getElementById("hamburger");
    const mobileNav = document.getElementById("mobile-nav");

    function animateHeader() {
        if (!header) return;
        gsap.from(header, {
            yPercent: -100,
            duration: 0.7,
            ease: "power3.out",
            clearProps: "transform"
        });
    }

    if (header && !document.body.classList.contains("has-hero")) {
        animateHeader();
    }

    window.animateHeader = animateHeader;

    if (hamburger && mobileNav) {
        hamburger.addEventListener("click", function (e) {
            e.stopPropagation(); 
            hamburger.classList.toggle("is-open");
            mobileNav.classList.toggle("is-open");
            const isOpen = hamburger.classList.contains("is-open");
            hamburger.setAttribute("aria-expanded", String(isOpen));
            mobileNav.setAttribute("aria-hidden", String(!isOpen));
        });

        document.addEventListener("click", function (e) {
            if (header && !header.contains(e.target)) {
                hamburger.classList.remove("is-open");
                mobileNav.classList.remove("is-open");
                hamburger.setAttribute("aria-expanded", "false");
                mobileNav.setAttribute("aria-hidden", "true");
            }
        });
    }

    const footerTriggerConfig = { trigger: ".main-footer", start: "top 85%", once: true };

    const footerBrand = document.querySelector(".footer-brand");
    if (footerBrand) {
        gsap.set(footerBrand, { opacity: 0, y: 30 });
        gsap.to(footerBrand, {
            scrollTrigger: footerTriggerConfig,
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out"
        });
    }

    const footerNavLinks = document.querySelectorAll(".footer-nav-link");
    footerNavLinks.forEach(function (link, i) {
        gsap.set(link, { opacity: 0, y: 20 });
        gsap.to(link, {
            scrollTrigger: footerTriggerConfig,
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.1 + i * 0.08,
            ease: "power3.out"
        });
    });

    const footerNewsletter = document.querySelector(".footer-newsletter");
    if (footerNewsletter) {
        gsap.set(footerNewsletter, { opacity: 0, y: 20 });
        gsap.to(footerNewsletter, {
            scrollTrigger: footerTriggerConfig,
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.5,
            ease: "power3.out"
        });
    }

    const footerSocials = document.querySelector(".footer-socials");
    if (footerSocials) {
        gsap.set(footerSocials, { opacity: 0, y: 20 });
        gsap.to(footerSocials, {
            scrollTrigger: footerTriggerConfig,
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.65,
            ease: "power3.out"
        });
    }

});
