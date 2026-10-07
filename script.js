const hero = document.querySelector(".hero");

const images = [
    "images/solar.jpg",
    "images/wind.jpg",
    "images/hydro.jpg",
    "images/biomass.jpg"
];

let currentImage = 0;

function changeBackground() {
    currentImage = (currentImage + 1) % images.length;

    hero.style.backgroundImage =
        `linear-gradient(rgba(0, 80, 45, 0.45), rgba(0, 80, 45, 0.45)), url("${images[currentImage]}")`;
}

setInterval(changeBackground, 10000);
let savingSlideIndex = 1;

showSavingSlide(savingSlideIndex);

function changeSavingSlide(n) {
    showSavingSlide(savingSlideIndex += n);
}

function currentSavingSlide(n) {
    showSavingSlide(savingSlideIndex = n);
}

function showSavingSlide(n) {

    let slides = document.getElementsByClassName("saving-slide");
    let dots = document.getElementsByClassName("saving-dot");

    if (n > slides.length) {
        savingSlideIndex = 1;
    }

    if (n < 1) {
        savingSlideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[savingSlideIndex - 1].style.display = "flex";
    dots[savingSlideIndex - 1].classList.add("active");
}

setInterval(function() {
    changeSavingSlide(1);
}, 5000);
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });
}, {
    threshold: 0.2
});

cards.forEach(card => {
    observer.observe(card);
});
const habitButton = document.getElementById("checkHabits");

habitButton.addEventListener("click", function () {

    const habits = document.querySelectorAll(".habit");

    let completed = 0;

    habits.forEach(function (habit) {

        if (habit.checked) {
            completed++;
        }

    });

    const total = 6;

    const result = document.getElementById("habitResult");

    if (completed === 0) {

        result.innerHTML =
            "🌱 Start with one small habit today!";

    } 
    else if (completed <= 2) {

        result.innerHTML =
            "🌱 Good start! You are following " +
            completed + " out of " + total +
            " habits.";

    } 
    else if (completed <= 4) {

        result.innerHTML =
            "🌟 Great job! You are following " +
            completed + " out of " + total +
            " energy-saving habits.";

    } 
    else if (completed === 5) {

        result.innerHTML =
            "🔥 Almost there! You are following 5 out of 6 habits. " +
            "Just one more habit to go!";

    } 
    else if (completed === total) {

        result.innerHTML =
            "🌍 Excellent! You are following all 6 habits. " +
            "Keep protecting our planet! 🌱";

    }

});

/* =========================
   POWER SAVING ROBOT
========================= */
/* =====================================
   GREENPOWER ROBOT
===================================== */

const gpHabitBoxes = document.querySelectorAll(".habit");
const gpRobot = document.querySelector(".gp-robot");
const gpRobotMessage = document.getElementById("robotMessage");

function celebrateRobot() {

    gpRobot.classList.remove("gp-jump");
    gpRobot.classList.add("gp-celebrate");
    gpRobotMessage.textContent = "Excellent! All 6 habits complete!";

    for (let i = 0; i < 24; i++) {

        const particle = document.createElement("span");
        particle.className = "gp-confetti" +
            (Math.random() < 0.2 ? " gp-confetti-chip" : "");
        particle.style.left = Math.random() * 100 + "vw";
        const delay = 100 + Math.random() * 700;
        particle.style.animationDelay = delay + "ms";
        document.body.appendChild(particle);

        setTimeout(function () {
            particle.remove();
        }, 2500 + delay);

    }

    setTimeout(function () {
        gpRobot.classList.remove("gp-celebrate");
    }, 2500);

}


// Make sure robot exists
if (gpRobot && gpRobotMessage) {

    gpHabitBoxes.forEach(function (checkbox) {

        checkbox.addEventListener("change", function () {

            const checked =
                document.querySelectorAll(".habit:checked").length;


            // Remove old animation
            gpRobot.classList.remove("gp-jump");

            // Restart animation
            void gpRobot.offsetWidth;

            // Make robot jump
            gpRobot.classList.add("gp-jump");


            // Change message

            if (checked === 0) {

                gpRobotMessage.textContent =
                    "Let's save some energy!";

            } else if (checked === 1) {

                gpRobotMessage.textContent =
                    "Nice start! Keep going!";

            } else if (checked === 2) {

                gpRobotMessage.textContent =
                    "Great job!";

            } else if (checked === 3) {

                gpRobotMessage.textContent =
                    "You're doing amazing!";

            } else if (checked === 4) {

                gpRobotMessage.textContent =
                    "Almost there!";

            } else if (checked === 5) {

                gpRobotMessage.textContent =
                    "One more habit!";

            } else if (checked === 6) {

                celebrateRobot();

            }

        });

    });

    /* =====================================
   COMMUNITY OUTREACH SLIDESHOW
===================================== */

let outreachSlideIndex = 1;

showOutreachSlide(outreachSlideIndex);


function changeOutreachSlide(n) {

    showOutreachSlide(
        outreachSlideIndex += n
    );

}


function currentOutreachSlide(n) {

    showOutreachSlide(
        outreachSlideIndex = n
    );

}


function showOutreachSlide(n) {

    const slides =
        document.getElementsByClassName("outreach-slide");

    const dots =
        document.getElementsByClassName("outreach-dot");


    if (n > slides.length) {

        outreachSlideIndex = 1;

    }


    if (n < 1) {

        outreachSlideIndex = slides.length;

    }


    for (let i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";

    }


    for (let i = 0; i < dots.length; i++) {

        dots[i].classList.remove("active");

    }


    slides[outreachSlideIndex - 1].style.display = "block";

    dots[outreachSlideIndex - 1].classList.add("active");

}


/* AUTOMATIC SLIDESHOW */

setInterval(function () {

    changeOutreachSlide(1);

}, 5000);
}
