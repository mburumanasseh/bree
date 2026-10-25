
const startBtn = document.getElementById("startBtn");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("birthdayMusic");
const musicToggle = document.getElementById("musicToggle");

const surpriseBtn = document.getElementById("surpriseBtn");
const finalSection = document.getElementById("finalSection");

const intro = document.getElementById("intro");


/* ========================================
   START EXPERIENCE
======================================== */

startBtn.addEventListener("click", () => {

    intro.style.opacity = "0";
    intro.style.transition = "opacity 1s ease";

    setTimeout(() => {

        intro.classList.add("hidden");

        mainContent.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 1000);


    /*
        Music starts after the visitor clicks.
        This avoids browser autoplay restrictions.
    */

    music.play()
        .then(() => {

            musicToggle.textContent = "♫";

        })
        .catch(() => {

            console.log("Music could not start.");

        });

});


/* ========================================
   MUSIC TOGGLE
======================================== */

musicToggle.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicToggle.textContent = "♫";

    } else {

        music.pause();

        musicToggle.textContent = "🔇";

    }

});


/* ========================================
   SCROLL REVEAL
======================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* ========================================
   FINAL SURPRISE
======================================== */

surpriseBtn.addEventListener("click", () => {

    finalSection.classList.remove("hidden");

    finalSection.scrollIntoView({
        behavior: "smooth"
    });

    createConfetti();

});


/* ========================================
   CONFETTI
======================================== */

function createConfetti() {

    const symbols = [
        "🎉",
        "❤️",
        "✨",
        "🎂",
        "💗",
        "🥳",
        "🔴"
    ];


    for (let i = 0; i < 60; i++) {

        const piece =
            document.createElement("div");


        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        piece.style.position = "fixed";

        piece.style.left =
            `${Math.random() * 100}vw`;

        piece.style.top = "-50px";

        piece.style.fontSize =
            `${Math.random() * 20 + 15}px`;

        piece.style.zIndex = "9999";

        piece.style.pointerEvents = "none";

        piece.style.transition =
            `transform ${Math.random() * 2 + 2}s linear,
             top ${Math.random() * 2 + 2}s linear`;


        document.body.appendChild(piece);


        setTimeout(() => {

            piece.style.top = "110vh";

            piece.style.transform =
                `rotate(${Math.random() * 720}deg)`;

        }, 50);


        setTimeout(() => {

            piece.remove();

        }, 5000);

    }

}
