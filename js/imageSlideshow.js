let slideIndex = 0;
        let slideTimer;

        showSlidesAuto();

        function plusSlides(n) {
            showSlides(slideIndex += n);
            resetTimer();
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
            resetTimer();
        }

        function resetTimer() {
            clearTimeout(slideTimer);
            slideTimer = setTimeout(showSlidesAuto, 5000);
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1; }
            if (n < 1) { slideIndex = slides.length; }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
           
            slides[slideIndex - 1].style.display = "block";
            resetTimer();
        }

        function showSlidesAuto() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1; }
            
            slides[slideIndex - 1].style.display = "block";
            resetTimer(); 
        }

        slideTimer = setTimeout(showSlidesAuto, 5000);
        