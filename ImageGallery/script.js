const images = document.querySelectorAll(".gallery img");

let current = 0;

function openLightbox(index) {

    current = index;

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightbox-img").src = images[current].src;

}

function closeLightbox() {

    document.getElementById("lightbox").style.display = "none";

}

function changeImage(step) {

    current += step;

    if (current < 0)
        current = images.length - 1;

    if (current >= images.length)
        current = 0;

    document.getElementById("lightbox-img").src = images[current].src;

}

document.addEventListener("keydown", function (e) {

    if (document.getElementById("lightbox").style.display == "flex") {

        if (e.key == "ArrowRight")
            changeImage(1);

        if (e.key == "ArrowLeft")
            changeImage(-1);

        if (e.key == "Escape")
            closeLightbox();

    }

});

function filterSelection(category) {

    let items = document.querySelectorAll(".image");

    let buttons = document.querySelectorAll(".filters button");

    buttons.forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");

    items.forEach(item => {

        if (category == "all") {

            item.style.display = "block";

        }
        else {

            if (item.classList.contains(category))
                item.style.display = "block";
            else
                item.style.display = "none";

        }

    });

}
