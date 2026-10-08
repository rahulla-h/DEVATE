let currentPage = 1;

const totalPages = 7;

const pages = document.querySelectorAll(".page");
const dots = document.querySelectorAll(".dot");


function showPage(pageNumber) {

    if (pageNumber < 1) {
        pageNumber = 1;
    }

    if (pageNumber > totalPages) {
        pageNumber = totalPages;
    }

    currentPage = pageNumber;

    pages.forEach((page, index) => {

        if (index === currentPage - 1) {
            page.classList.add("active");
        } else {
            page.classList.remove("active");
        }

    });

    dots.forEach((dot, index) => {

        if (index === currentPage - 1) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }

    });

    const activePage = pages[currentPage - 1];

    const content = activePage.querySelector(".page-content");

    if (content) {
        content.scrollTop = 0;
    }

}


function nextPage() {

    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }

}


function previousPage() {

    if (currentPage > 1) {
        showPage(currentPage - 1);
    }

}


function restart() {

    const video = document.getElementById("birthdayVideo");

    if (video) {
        video.pause();
        video.currentTime = 0;
    }

    showPage(1);

}


document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {
        nextPage();
    }

    if (event.key === "ArrowLeft") {
        previousPage();
    }

});


let touchStartX = 0;
let touchEndX = 0;


document.addEventListener("touchstart", function(event) {

    touchStartX = event.changedTouches[0].screenX;

});


document.addEventListener("touchend", function(event) {

    touchEndX = event.changedTouches[0].screenX;

    const distance = touchEndX - touchStartX;

    if (Math.abs(distance) < 50) {
        return;
    }

    if (distance < 0) {
        nextPage();
    } else {
        previousPage();
    }

});


showPage(1);