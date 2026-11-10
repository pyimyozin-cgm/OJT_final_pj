(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", () => {
        gsap.registerPlugin(ScrollTrigger);

        const widgetObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.id === "sec-touch") {
                        entry.target.classList.add("animate-reveal");
                    } else if (entry.target.id === "sec-community") {
                        entry.target.classList.add("animate-active");
                    } else if (entry.target.id === "sec-message") {
                        entry.target.classList.add("is-visible");
                    } else if (entry.target.id === "sec-connected") {
                        entry.target.classList.add("is-visible");
                    } else if (entry.target.classList.contains("main-site-footer")) {
                        entry.target.classList.add("is-visible");
                    }
                    widgetObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        const activeNodes = [
            document.querySelector("#sec-touch"),
            document.querySelector("#sec-community"),
            document.querySelector("#sec-message"),
            document.querySelector("#sec-connected"),
            document.querySelector(".main-site-footer")
        ];

        activeNodes.forEach(node => {
            if (node) widgetObserver.observe(node);
        });

        const contactAnimations = () => {
            gsap.from(".intro-message-box .heading-text-group", {
                scrollTrigger: {
                    trigger: ".intro-message-box",
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            gsap.from(".intro-message-box .cta-button-holder", {
                scrollTrigger: {
                    trigger: ".intro-message-box",
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                y: 35,
                opacity: 0,
                duration: 0.8,
                delay: 0.1,
                ease: "power3.out",
            });

            gsap.from(".contact-cards-stack .info-details-card", {
                scrollTrigger: {
                    trigger: ".contact-cards-stack",
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            });

            gsap.from(".map-embed-frame", {
                scrollTrigger: {
                    trigger: ".map-embed-frame",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                x: 60,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out",
            });

            gsap.from(".brand-divider-belt .marquee-heading", {
                scrollTrigger: {
                    trigger: ".brand-divider-belt",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                y: 25,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
            });

            gsap.from(".brand-divider-belt .center-graphic-container img", {
                scrollTrigger: {
                    trigger: ".brand-divider-belt",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                scale: 0.9,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out",
            });

            gsap.from(".feedback-entry-panel .heading-text-group", {
                scrollTrigger: {
                    trigger: ".feedback-entry-panel",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            gsap.from(".interactive-contact-form .input-field-wrapper", {
                scrollTrigger: {
                    trigger: ".interactive-contact-form",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                y: 30,
                opacity: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: "power2.out",
            });

            gsap.from(".interactive-contact-form .theme-custom-btn", {
                scrollTrigger: {
                    trigger: ".interactive-contact-form",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                y: 30,
                opacity: 0,
                duration: 0.7,
                delay: 0.2,
                ease: "power2.out",
            });

            gsap.from(".social-channels-panel .alt-display-title", {
                scrollTrigger: {
                    trigger: ".social-channels-panel",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                x: -40,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
            });

            gsap.from(".network-links-matrix .social-profile-card", {
                scrollTrigger: {
                    trigger: ".network-links-matrix",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power2.out",
            });
        };

        contactAnimations();

        const scrollTriggerBtn = document.querySelector("#btn-scroll-to-message");
        if (scrollTriggerBtn) {
            scrollTriggerBtn.addEventListener("click", (event) => {
                event.preventDefault();
                const formDestination = document.querySelector("#sec-message");
                if (formDestination) {
                    formDestination.scrollIntoView({ behavior: "smooth" });
                }
            });
        }
    });
})();