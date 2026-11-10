(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", () => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".sec-special-menu .header-title", {
            scrollTrigger: {
                trigger: ".sec-special-menu",
                start: "top 80%",
                toggleActions: "play none none none",
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
        });

        document
            .querySelectorAll(".sec-special-menu .special-card")
            .forEach((card) => {
                const cardTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: card,
                        start: "top 75%",
                        toggleActions: "play none none none",
                    },
                });

                const isReverse = card.classList.contains("card-reverse");

                const travelDistance = isReverse ? -70 : 70;

                cardTl
                    .from(
                        card.querySelector(
                            ".menu-item img, .menu-item-b img, .menu-item-c img",
                        ),
                        {
                            y: travelDistance,
                            opacity: 0,
                            duration: 1,
                            ease: "power3.out",
                        },
                    )
                    .from(
                        card.querySelector(".item-title, .item-title-b, .item-title-c"),
                        {
                            y: travelDistance,
                            opacity: 0,
                            duration: 0.7,
                            ease: "power2.out",
                        },
                        "-=0.6",
                    )
                    .from(
                        card.querySelector(".item-desc, .item-desc-b, .item-desc-c"),
                        {
                            y: travelDistance,
                            opacity: 0,
                            duration: 0.7,
                            ease: "power2.out",
                        },
                        "-=0.6",
                    );
            });

        const menuTabsTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sec-menu-list",
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });

        menuTabsTl
            .from(".sec-menu-list .sec-ttl, .sec-menu-list .sub-title", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
            })
            .from(
                ".sec-menu-list .menu-tabs .tab-item",
                {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                },
                "-=0.3",
            )
            .from(
                ".sec-menu-list .menu-list-image-wrapper img",
                {
                    y: 50,
                    opacity: 0,
                    duration: 0.9,
                    ease: "power3.out",
                },
                "-=0.2",
            )
            .from(
                '.sec-menu-list .menu-items-price-list .price-item[data-anim="fade-up"]',
                {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                },
                "-=0.6",
            )
            .from(
                ".sec-menu-list .order-btn-wrapper",
                {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.out",
                },
                "-=0.3",
            );

        const promoTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sec-promo",
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });

        promoTl
            .from(".sec-promo .promo-img-holder img", {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            })
            .from(
                ".sec-promo .promo-content-holder > *",
                {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                },
                "-=0.6",
            );
    });
})();
