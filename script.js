const element6 = document.getElementById("element6");


const element7 = document.querySelector(".element7");


element6.addEventListener("click", function () {
    element6.classList.toggle("active");
});



element7.addEventListener("click", function () {
    element7.classList.toggle("active");
});


const gallery = document.getElementById("gallery");


const photoTemplate = gallery.querySelector(".photo-link").cloneNode(true);


const defaultWidth = 400;
const step = 40;
const minWidth = 160;
const maxWidth = 800;


function getLastPhoto() {
    const photos = gallery.querySelectorAll(".city-photo");

    if (photos.length === 0) {
        return null;
    }

    return photos[photos.length - 1];
}


function getPhotoWidth(photo) {
    return parseInt(photo.style.width, 10) || defaultWidth;
}


document.getElementById("addPhoto").addEventListener("click", function () {
    const newPhoto = photoTemplate.cloneNode(true);

    gallery.appendChild(newPhoto);
});


document.getElementById("increasePhoto").addEventListener("click", function () {
    const photo = getLastPhoto();

    if (photo !== null) {
        const newWidth = Math.min(
            getPhotoWidth(photo) + step,
            maxWidth
        );

        photo.style.width = newWidth + "px";
    }
});


document.getElementById("decreasePhoto").addEventListener("click", function () {
    const photo = getLastPhoto();

    if (photo !== null) {
        const newWidth = Math.max(
            getPhotoWidth(photo) - step,
            minWidth
        );

        photo.style.width = newWidth + "px";
    }
});


document.getElementById("removePhoto").addEventListener("click", function () {
    const lastPhoto = gallery.lastElementChild;

    if (lastPhoto !== null) {
        lastPhoto.remove();
    }
});
