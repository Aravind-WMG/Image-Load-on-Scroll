var imageList = [];
window.addEventListener("load", mainFunctionCall);

function mainFunctionCall() {
    imageList = document.querySelectorAll("#img-section img");
    imageLoad(imageList);
}

window.addEventListener('scroll', function () {
    imageLoad(imageList);
});

//Iterate througth the image array
function imageLoad(imageListArray) {
    //or Array.prototype.forEach.call
    [].forEach.call(imageListArray, function (img, imgIndex) {
        var imgaePosition = img.parentElement.getBoundingClientRect();
        if (inViewPort(imgaePosition) && !img.classList.contains("imgLoaded")) {
            var orginalImgSrc = img.getAttribute("data-src");
            img.onload = function () {
                img.classList.add("imgLoaded");
            }
            img.src = orginalImgSrc;
        }
    });
}

//Find whether the image is in Viewport
function inViewPort(imgaePositionVar) {
    return imgaePositionVar.bottom > 0 &&
        imgaePositionVar.right > 0 &&
        imgaePositionVar.left < (window.innerWidth || document.documentElement.clientWidth) &&
        imgaePositionVar.top < (window.innerHeight || document.documentElement.clientHeight);
}
