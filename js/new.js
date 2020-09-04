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
    $("#whoWeAre").on("click", () => {
        gsap.to("#secTwo", { opacity: 1, top: 0, delay: 1.5, duration: 0, position: 'absolute' });
        gsap.to(".detail-who", { height: '80vh', delay: 2, duration: 0.5 });
        gsap.to(".detail-who .details-header", { height: 'auto', delay: 2.5, duration: 0.5 });
        gsap.to(".detail-who .details-body", { height: 'auto', delay: 3, duration: 0.5 });
        gsap.to(".detail-who i", { opacity: 1, delay: 3.5, duration: 0.5 });
        gsap.to("#secOne", { opacity: 0, top: '100vh', delay: 3.6, duration: 0 });
    })
    $("#HowToObtainIt").on("click", () => {
        gsap.to("#secThree", { opacity: 1, top: 0, delay: 0.5, duration: 0 });
        gsap.to(".details-content ", { height: '80vh', delay: 1, duration: 0.5 });
        gsap.to(".detail-obtain-it .details-header", { height: 'auto', delay: 2.5, duration: 0.5 });
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


}