(function(){
	"use strict";	
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	// let hamburgerMenu = () => {
	// 	burgerCon.classList.toggle("slide-toggle");
	// 	button.classList.toggle("expanded");
	// };

	button.addEventListener("click", hamburgerMenu, false);		
})();

(function () {
    "use strict";

    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;
    let interval;

    function showItem(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function startCarousel() {
        clearInterval(interval);
        interval = setInterval(function () {
            currentIndex = (currentIndex + 1) % items.length;
            showItem(currentIndex);
        }, 4000);
    }

	window.prevItem = function () {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
        startCarousel();
    };

    window.nextItem = function () {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
        startCarousel();
    };

    startCarousel();
})();
