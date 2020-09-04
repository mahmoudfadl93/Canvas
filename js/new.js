window.onload = () => {

    gsap.to(".paragraph-content", { opacity: 1, duration: 1, delay: 0.5 });
    gsap.to(".paragraph-content span", { scale: 1, ease: Power4.easeOut, opacity: 1, width: '80vw', height: '80vh', duration: 1.5, delay: 0.8, background: "rgba(255, 255, 255, 0.200)", });
    gsap.to(".paragraph-content button", { opacity: 1, duration: 1, delay: 1, });
    $(".paragraph-content button").on("mouseenter", () => {
        gsap.to(".paragraph-content span", { scale: 1.1, background: "rgba(255, 255, 255, 0.100)" });
    });
    $(".paragraph-content button").on("mouseleave", () => {
        gsap.to(".paragraph-content span", { scale: 1.0, background: "rgba(255, 255, 255, 0.200)" });
    });
    $(".paragraph-content button").on("click", () => {
        gsap.to(".paragraph-content span", { scale: 1, ease: Power3.easeOut, opacity: 0, delay: 0.5, width: '0vw', height: '0vh', duration: 1, background: "rgba(255, 255, 255, 0.0)", });
        gsap.to(".paragraph-content h2", { opacity: 0.1, duration: 0.5, ease: Power3.easeOut, delay: 0.5, fontSize: '13vw' });
        gsap.to(".paragraph-content button", { opacity: 0, height: 0, duration: 0.5, ease: Power2.easeOut, delay: 1 });
        gsap.to(".paragraph-content button", { delay: 1.2, visibility: 'hidden' });
        gsap.to("#secOne", { opacity: 1, top: 0, delay: 1.5, duration: 0, });

        gsap.to(".hexagon-yellew .hexagon.hexagon-median", { delay: 1.2, scale: 1 });
        gsap.to(".hexagon-yellew .hexagon.hexagon-large.with-prag", { delay: 1.3, scale: 1 });
        gsap.to(".hexagon-yellew .hexagon.hexagon-small", { delay: 1.3, scale: 1 });
        gsap.to(".hexagon-orange .hexagon.hexagon-large.empty", { delay: 1.5, scale: 1 });
        gsap.to(".hexagon-orange .hexagon.hexagon-large.with-prag", { delay: 1.4, scale: 1 });
        gsap.to(".hexagon-green .hexagon.hexagon-large.with-prag", { delay: 1.6, scale: 1 });
        gsap.to(".hexagon-green .hexagon.hexagon-large.empty", { delay: 1.7, scale: 1 });
        gsap.to(".hexagon-blue .hexagon.hexagon-large.with-prag", { delay: 1.8, scale: 1 });
        gsap.to(".hexagon-blue .hexagon.hexagon-large.empty", { delay: 1.9, scale: 1 });
        gsap.to(".hexagon-red .hexagon.hexagon-median", { delay: 2.0, scale: 1 });
        gsap.to(".hexagon-red .hexagon.hexagon-large.with-prag", { delay: 2.1, scale: 1 });
        gsap.to(".hexagon-red .hexagon.hexagon-small", { delay: 2.2, scale: 1 });
    });

    $(".hexagon-large.with-prag").on("click", () => {
        gsap.to(".hexagon-yellew .hexagon.hexagon-median", { delay: 0.2, scale: 0 });
        gsap.to(".hexagon-yellew .hexagon.hexagon-large.with-prag", { delay: 0.3, scale: 0 });
        gsap.to(".hexagon-yellew .hexagon.hexagon-small", { delay: 0.4, scale: 0 });
        gsap.to(".hexagon-orange .hexagon.hexagon-large.empty", { delay: 0.5, scale: 0 });
        gsap.to(".hexagon-orange .hexagon.hexagon-large.with-prag", { delay: 0.4, scale: 0 });
        gsap.to(".hexagon-green .hexagon.hexagon-large.with-prag", { delay: 0.6, scale: 0 });
        gsap.to(".hexagon-green .hexagon.hexagon-large.empty", { delay: 0.7, scale: 0 });
        gsap.to(".hexagon-blue .hexagon.hexagon-large.with-prag", { delay: 0.8, scale: 0 });
        gsap.to(".hexagon-blue .hexagon.hexagon-large.empty", { delay: 0.9, scale: 0 });
        gsap.to(".hexagon-red .hexagon.hexagon-median", { delay: 1.0, scale: 0 });
        gsap.to(".hexagon-red .hexagon.hexagon-large.with-prag", { delay: 1.1, scale: 0 });
        gsap.to(".hexagon-red .hexagon.hexagon-small", { delay: 1.2, scale: 0 });
        gsap.to("#secOne", { opacity: 1, top: 0, delay: 1.3, duration: 0, height: 0, margin: 0 });

    })

    // view who we are Slide
    $("#whoWeAre").on("click", () => {
        gsap.to("#secTwo", { opacity: 1, top: 0, delay: 1.5, duration: 0, position: 'absolute' });
        gsap.to(".detail-who", { height: '80vh', delay: 2, duration: 0.5 });
        gsap.to(".detail-who .details-header", { height: 'auto', delay: 2.5, duration: 0.5 });
        gsap.to(".detail-who .details-body", { height: 'auto', delay: 3.5, duration: 0.5 });
        gsap.to(".detail-who i", { opacity: 1, delay: 3.5, duration: 0.5 });
        gsap.to("#secOne", { opacity: 0, top: '100vh', delay: 3.6, duration: 0 });
    })

    // view How To Obtain It Slide
    $("#HowToObtainIt").on("click", () => {
        gsap.to("#secThree", { opacity: 1, top: 0, delay: 0.5, duration: 0 });
        gsap.to(".details-content ", { height: '80vh', delay: 1, duration: 0.5 });
        gsap.to(".detail-obtain-it .details-header", { height: 'auto', delay: 1.5, duration: 0.5 });
        gsap.to(".content-body .image-with-title.Service", { opacity: 1, delay: 3.0, duration: 0.5 });
        gsap.to(".content-body .image-with-title.Software", { opacity: 1, delay: 3.4, duration: 0.5 });
        gsap.to(".content-body .image-with-title.Hybrid", { opacity: 1, delay: 3.8, duration: 0.5 });

        gsap.to(".detail-obtain-it i", { opacity: 1, delay: 3.5, duration: 0.5 });
        gsap.to("#secOne", { opacity: 0, top: '100vh', delay: 3.6, duration: 0 });
    })
    $("#secTwo .detail-who i").on("click", () => {
        gsap.to(".detail-who i", { opacity: 0, duration: 0.5, scale: 1.5 });
        gsap.to(".details-body", { height: 0, delay: 0.6, duration: 0.5 });
        gsap.to(".details-header", { height: 0, delay: 1.0, duration: 0.5 });
        gsap.to(".detail-who", { height: '0vh', delay: 1.2, duration: 0.5 });
        gsap.to("#secTwo", { opacity: 0, top: '100vh', delay: 1.5, duration: 0 });

        gsap.to("#secOne", { opacity: 1, top: 0, height: '100vh', delay: 1.5, duration: 0, });
        gsap.to(".hexagon-yellew .hexagon.hexagon-median", { delay: 1.2, scale: 1 });
        gsap.to(".hexagon-yellew .hexagon.hexagon-large.with-prag", { delay: 1.3, scale: 1 });
        gsap.to(".hexagon-yellew .hexagon.hexagon-small", { delay: 1.3, scale: 1 });
        gsap.to(".hexagon-orange .hexagon.hexagon-large.empty", { delay: 1.5, scale: 1 });
        gsap.to(".hexagon-orange .hexagon.hexagon-large.with-prag", { delay: 1.4, scale: 1 });
        gsap.to(".hexagon-green .hexagon.hexagon-large.with-prag", { delay: 1.6, scale: 1 });
        gsap.to(".hexagon-green .hexagon.hexagon-large.empty", { delay: 1.7, scale: 1 });
        gsap.to(".hexagon-blue .hexagon.hexagon-large.with-prag", { delay: 1.8, scale: 1 });
        gsap.to(".hexagon-blue .hexagon.hexagon-large.empty", { delay: 1.9, scale: 1 });
        gsap.to(".hexagon-red .hexagon.hexagon-median", { delay: 2.0, scale: 1 });
        gsap.to(".hexagon-red .hexagon.hexagon-large.with-prag", { delay: 2.1, scale: 1 });
        gsap.to(".hexagon-red .hexagon.hexagon-small", { delay: 2.2, scale: 1 });


    })

    $("#secThree .detail-obtain-it i").on("click", () => {

        gsap.to("#secThree", { opacity: 1, top: 0, delay: 0.5, duration: 0 });
        gsap.to(".content-body .image-with-title.Service", { opacity: 0, delay: 0.2, duration: 0.5 });
        gsap.to(".content-body .image-with-title.Software", { opacity: 0, delay: 0.4, duration: 0.5 });
        gsap.to(".content-body .image-with-title.Hybrid", { opacity: 0, delay: 0.6, duration: 0.5 });
        gsap.to(".detail-obtain-it .details-header", { height: 0, delay: 1.0, duration: 0.5 });
        gsap.to(".details-content ", { height: '0vh', delay: 1.5, duration: 0.5 });
        gsap.to("#secThree ", { top: "100vh", delay: 2, duration: 0.5 });




        gsap.to("#secOne", { opacity: 1, top: 0, height: '100vh', delay: 1.5, duration: 0, });
        gsap.to(".hexagon-yellew .hexagon.hexagon-median", { delay: 1.2, scale: 1 });
        gsap.to(".hexagon-yellew .hexagon.hexagon-large.with-prag", { delay: 1.3, scale: 1 });
        gsap.to(".hexagon-yellew .hexagon.hexagon-small", { delay: 1.3, scale: 1 });
        gsap.to(".hexagon-orange .hexagon.hexagon-large.empty", { delay: 1.5, scale: 1 });
        gsap.to(".hexagon-orange .hexagon.hexagon-large.with-prag", { delay: 1.4, scale: 1 });
        gsap.to(".hexagon-green .hexagon.hexagon-large.with-prag", { delay: 1.6, scale: 1 });
        gsap.to(".hexagon-green .hexagon.hexagon-large.empty", { delay: 1.7, scale: 1 });
        gsap.to(".hexagon-blue .hexagon.hexagon-large.with-prag", { delay: 1.8, scale: 1 });
        gsap.to(".hexagon-blue .hexagon.hexagon-large.empty", { delay: 1.9, scale: 1 });
        gsap.to(".hexagon-red .hexagon.hexagon-median", { delay: 2.0, scale: 1 });
        gsap.to(".hexagon-red .hexagon.hexagon-large.with-prag", { delay: 2.1, scale: 1 });
        gsap.to(".hexagon-red .hexagon.hexagon-small", { delay: 2.2, scale: 1 });


    })

    let SVG = ` <svg viewBox="0 0 477.862 477.862" >
		<path d="M187.722,102.856V17.062C187.719,7.636,180.076-0.003,170.65,0c-4.834,0.001-9.44,2.053-12.676,5.644L4.375,176.311 c-5.617,6.256-5.842,15.67-0.529,22.187l153.6,187.733c5.968,7.295,16.72,8.371,24.016,2.403c3.952-3.233,6.249-8.066,6.26-13.172 v-85.043c134.827,4.386,218.965,62.02,256.888,175.787c2.326,6.96,8.841,11.653,16.179,11.656c0.92,0.003,1.84-0.072,2.748-0.222 c8.256-1.347,14.319-8.479,14.319-16.845C477.855,259.818,356.87,112.174,187.722,102.856z"/>
    </svg> `
    let backIcon = document.querySelectorAll(".icon--placeholder");
    for (var i = 0; i < backIcon.length; i++) {
        backIcon[i].innerHTML = SVG;
    }


}