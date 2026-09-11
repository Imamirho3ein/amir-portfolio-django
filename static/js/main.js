const themeToggle = document.getElementById("themeToggle");


// Load saved theme

const savedTheme = localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light-mode");

}


// Toggle theme

themeToggle.addEventListener("click", () => {


    document.body.classList.toggle("light-mode");


    if (document.body.classList.contains("light-mode")) {


        localStorage.setItem(
            "theme",
            "light"
        );


    } else {


        localStorage.setItem(
            "theme",
            "dark"
        );


    }


});
const reveals = document.querySelectorAll(".reveal");


function revealOnScroll() {


    reveals.forEach((element) => {


        const windowHeight =
            window.innerHeight;


        const elementTop =
            element.getBoundingClientRect().top;


        const visiblePoint = 100;


        if (elementTop < windowHeight - visiblePoint) {


            element.classList.add("active");


        }


    });


}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();