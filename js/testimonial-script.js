let testIndex = 0;
showTest(testIndex);

function plusTest(n) {
    showTest(testIndex += n);
}

function currentTest(n) {
    showTest(testIndex = n);
}

function showTest(n) {
    const slides = document.getElementsByClassName("testimonial");
    const dots = document.getElementsByClassName("dot");
    
    if (n >= slides.length) { testIndex = 0 }
    if (n < 0) { testIndex = slides.length - 1 }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[testIndex].style.display = "flex";
    dots[testIndex].className += " active";
}

