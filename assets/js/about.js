document.addEventListener("DOMContentLoaded", () => {
    const animationObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2,
        },
    );
    const chefTitle = document.querySelector(".chef-header-wrap .sec-ttl");
    const chefDesc = document.querySelector(".chef-header-wrap .chef-lead");
    if (chefTitle) animationObserver.observe(chefTitle);
    if (chefDesc) animationObserver.observe(chefDesc);
    const chefCards = document.querySelectorAll(".chef-card");
    chefCards.forEach((card) => animationObserver.observe(card));
    const historyTitle = document.querySelector(".sec-history .sec-ttl");
    if (historyTitle) animationObserver.observe(historyTitle);
    const timelineLine = document.querySelector(".timeline-line");
    if (timelineLine) animationObserver.observe(timelineLine);

    const timelineTrack = document.querySelector(".history-timeline");
    if (timelineTrack) animationObserver.observe(timelineTrack);

    const timelineContents = document.querySelectorAll(".timeline-content");
    timelineContents.forEach((content) => animationObserver.observe(content));
});
