(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", () => {
        // ── SCROLL REVEAL (FADE-UP / FADE-LEFT) ──────
        const revealEls = document.querySelectorAll(".fade-up, .fade-left, .fade-right");
        const revealObs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add("visible");
                    revealObs.unobserve(e.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

        revealEls.forEach(el => revealObs.observe(el));

        // ── INGREDIENTS SWIPE CAROUSEL ───────────────────
        const track = document.getElementById("carTrack");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");
        const dotsWrap = document.getElementById("carDots");

        if (track && prevBtn && nextBtn && dotsWrap) {
            let curIdx = 0;
            const total = track.children.length;
            let autoTimer = null;

            function getSPV() {
                return window.innerWidth <= 991 ? 1 : 3;
            }

            function maxIdx() {
                return Math.max(0, total - getSPV());
            }

            function setSlideWidths() {
                const currentSpv = getSPV();
                Array.from(track.children).forEach(s => {
                    s.style.minWidth = `${100 / currentSpv}%`;
                    s.style.width = `${100 / currentSpv}%`;
                });
            }

            function moveCarousel() {
                curIdx = Math.min(curIdx, maxIdx());
                curIdx = Math.max(0, curIdx);

                const currentSpv = getSPV();
                track.style.transform = `translateX(-${curIdx * (100 / currentSpv)}%)`;
                refreshDots();
            }

            function refreshDots() {
                const dots = dotsWrap.querySelectorAll(".cdot");
                dots.forEach((d, i) => d.classList.toggle("active", i === curIdx));
            }

            function buildDots() {
                dotsWrap.innerHTML = "";
                const maxDots = maxIdx();
                for (let i = 0; i <= maxDots; i++) {
                    const d = document.createElement("div");
                    d.className = "cdot" + (i === curIdx ? " active" : "");
                    d.addEventListener("click", () => { curIdx = i; moveCarousel(); resetAuto(); });
                    dotsWrap.appendChild(d);
                }
            }

            function next() {
                const max = maxIdx();
                curIdx = curIdx >= max ? 0 : curIdx + 1;
                moveCarousel();
            }

            function prev() {
                const max = maxIdx();
                curIdx = curIdx <= 0 ? max : curIdx - 1;
                moveCarousel();
            }

            nextBtn.addEventListener("click", () => { next(); resetAuto(); });
            prevBtn.addEventListener("click", () => { prev(); resetAuto(); });

            let txStart = 0;
            let tyStart = 0;

            track.addEventListener("touchstart", e => {
                txStart = e.touches[0].clientX;
                tyStart = e.touches[0].clientY;
            }, { passive: true });

            track.addEventListener("touchend", e => {
                if (!e.changedTouches.length) return;
                const diffX = txStart - e.changedTouches[0].clientX;
                const diffY = tyStart - e.changedTouches[0].clientY;

                if (Math.abs(diffX) > 30 && Math.abs(diffX) > Math.abs(diffY)) {
                    if (diffX > 0) next(); else prev();
                    resetAuto();
                }
            }, { passive: true });

            function startAuto() { autoTimer = setInterval(next, 4000); }
            function resetAuto() { clearInterval(autoTimer); startAuto(); }

            window.addEventListener("resize", () => {
                setSlideWidths();
                buildDots();
                moveCarousel();
            });

            // Initial Run
            setSlideWidths();
            buildDots();
            startAuto();
        }

        // ── HERO SMOOTH PARALLAX EFFECT ──────────────
        const heroImg = document.querySelector(".hero-coffee-img");
        if (heroImg) {
            let ticking = false;
            window.addEventListener("scroll", () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        const scrolled = window.scrollY;
                        if (scrolled < window.innerHeight) {
                            heroImg.style.transform = `translateY(${scrolled * 0.12}px)`;
                        }
                        ticking = false;
                    });
                    ticking = true;
                }
            }, { passive: true });
        }
    });
})();