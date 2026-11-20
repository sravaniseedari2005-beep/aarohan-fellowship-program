/* =========================================
   AAROHAN AI FELLOWSHIP
   JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (window.Vue && document.querySelector("#vue-brand")) {
        Vue.createApp({
            data: function () {
                return {
                    brand: "AAROHAN"
                };
            }
        }).mount("#vue-brand");
    }

    /* =====================================
       NAVBAR ACTIVE LINK
    ===================================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });
    }

    window.addEventListener("scroll", updateActiveLink);


    /* =====================================
       SMOOTH SCROLL
    ===================================== */

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {

                event.preventDefault();

                const targetSection = document.querySelector(targetId);

                if (targetSection) {

                    const navbarHeight = document.querySelector(".navbar")
                        .offsetHeight;

                    const targetPosition =
                        targetSection.offsetTop - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });

                }
            }

        });

    });


    /* =====================================
       APPLY NOW BUTTON
    ===================================== */

    const applyButton = document.querySelector(".apply-btn");

    if (applyButton) {

        applyButton.addEventListener("click", function () {

            const contactSection =
                document.querySelector("#contact");

            if (contactSection) {

                contactSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }


    /* =====================================
       TRAINING CARD ANIMATION
    ===================================== */

    const trainingCards =
        document.querySelectorAll(".training-card");

    const observerOptions = {
        threshold: 0.15
    };

    const cardObserver =
        new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        }, observerOptions);


    trainingCards.forEach(function (card) {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.7s ease, transform 0.7s ease";

        cardObserver.observe(card);

    });


    /* =====================================
       ELIGIBILITY CARD ANIMATION
    ===================================== */

    const eligibilityCards =
        document.querySelectorAll(".eligibility-card");

    const eligibilityObserver =
        new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        }, {
            threshold: 0.15
        });


    eligibilityCards.forEach(function (card) {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        eligibilityObserver.observe(card);

    });


    /* =====================================
       COUNTER EFFECT
    ===================================== */

    const statElements =
        document.querySelectorAll(".mini-stats strong");

    statElements.forEach(function (element) {

        element.addEventListener("mouseenter", function () {

            this.style.transform = "scale(1.1)";
            this.style.transition = "0.3s";

        });

        element.addEventListener("mouseleave", function () {

            this.style.transform = "scale(1)";

        });

    });


    /* =====================================
       HERO AI CARD INTERACTION
    ===================================== */

    const heroCard =
        document.querySelector(".hero-card");

    if (heroCard) {

        heroCard.addEventListener("mouseenter", function () {

            this.style.animationPlayState = "paused";

        });

        heroCard.addEventListener("mouseleave", function () {

            this.style.animationPlayState = "running";

        });

    }


    /* =====================================
       CONTACT CARD INTERACTION
    ===================================== */

    const contactCards =
        document.querySelectorAll(".contact-card");

    contactCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const text =
                this.querySelector("p");

            if (text) {

                const value =
                    text.innerText.trim();

                if (value.includes("@")) {

                    window.location.href =
                        "mailto:" + value;

                }

                else if (
                    value.match(/\d{10}/)
                ) {

                    const number =
                        value.match(/\d{10}/)[0];

                    window.location.href =
                        "tel:" + number;

                }

            }

        });

    });


    /* =====================================
       NAVBAR BACKGROUND ON SCROLL
    ===================================== */

    const navbar =
        document.querySelector(".navbar");

    function changeNavbar() {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(3, 30, 49, 0.98)";

            navbar.style.boxShadow =
                "0 5px 20px rgba(0,0,0,0.2)";

        }

        else {

            navbar.style.background =
                "rgba(4, 32, 58, 0.96)";

        }

    }

    window.addEventListener("scroll", changeNavbar);


    /* =====================================
       ABOUT PAGE INTERACTIONS
    ===================================== */

    const aboutPage = document.querySelector(".about-hero");

    if (aboutPage) {

        const revealItems = document.querySelectorAll(
            ".content-section, .why-section, .vision-section, " +
            ".activities-section, .future-section, .closing-section"
        );

        revealItems.forEach(function (item) {
            item.classList.add("about-reveal");
        });

        const revealObserver = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.12
        });

        revealItems.forEach(function (item) {
            revealObserver.observe(item);
        });

        const selectableCards = document.querySelectorAll(
            ".activity-card, .future-card"
        );

        selectableCards.forEach(function (card) {

            card.addEventListener("click", function () {
                selectableCards.forEach(function (otherCard) {
                    if (otherCard !== card) {
                        otherCard.classList.remove("is-selected");
                    }
                });

                card.classList.toggle("is-selected");
            });

        });

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            aboutPage.addEventListener("pointermove", function (event) {
                const x = (event.clientX / window.innerWidth - 0.5) * 8;
                const y = (event.clientY / window.innerHeight - 0.5) * 5;
                const heroContent = aboutPage.querySelector(".hero-content");

                if (heroContent) {
                    heroContent.style.transform =
                        "translate3d(" + x + "px, " + y + "px, 0)";
                }
            });

            aboutPage.addEventListener("pointerleave", function () {
                const heroContent = aboutPage.querySelector(".hero-content");

                if (heroContent) {
                    heroContent.style.transform = "translate3d(0, 0, 0)";
                }
            });
        }
    }


    /* =====================================
       WELCOME MESSAGE
    ===================================== */

    console.log(
        "AAROHAN AI & Digital Skills Fellowship website loaded successfully."
    );

});