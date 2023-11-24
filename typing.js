document.addEventListener("DOMContentLoaded", function () {
    var textH1 = "Hello there! My name is Inuka Silva.";
    var indexH1 = 0;
    var typingAreaH1 = document.getElementById("typing-text-h1");

    var textH3 = "Welcome to my constantly evolving portfolio!";
    var indexH3 = 0;
    var typingAreaH3 = document.getElementById("typing-text-h3");

    function typeH1() {
        if (indexH1 < textH1.length) {
            typingAreaH1.textContent += textH1.charAt(indexH1);
            indexH1++;
            setTimeout(typeH1, 100); // Adjust the typing speed here (milliseconds)
        }
    }

    function typeH3() {
        if (indexH3 < textH3.length) {
            typingAreaH3.textContent += textH3.charAt(indexH3);
            indexH3++;
            setTimeout(typeH3, 100); // Adjust the typing speed here (milliseconds)
        }
    }

    setTimeout(function () {
        typeH1(); // Start the typing effect for h1 after a delay
        setTimeout(typeH3, textH1.length * 110); // Start the typing effect for h3 after a delay
    }, 1000); // Adjust the delay before the typing starts (milliseconds)
});

