window.onload = () => {
  //  define actions

  ///         show sec one ------------------------
  let showsecone = function () {
    gsap.to("#secOne", {
      opacity: 1,
      top: 0,
      height: "100vh",
      delay: 1.5,
      duration: 0,
    });
    gsap.to(".hexagon-yellew .hexagon.hexagon-median", {
      delay: 1.2,
      scale: 1,
    });
    gsap.to(".hexagon-yellew .hexagon.hexagon-large.with-prag", {
      delay: 1.3,
      scale: 1,
    });
    gsap.to(".hexagon-yellew .hexagon.hexagon-small", {
      delay: 1.3,
      scale: 1,
    });
    gsap.to(".hexagon-orange .hexagon.hexagon-large.empty", {
      delay: 1.5,
      scale: 1,
    });
    gsap.to(".hexagon-orange .hexagon.hexagon-large.with-prag", {
      delay: 1.4,
      scale: 1,
    });
    gsap.to(".hexagon-green .hexagon.hexagon-large.with-prag", {
      delay: 1.6,
      scale: 1,
    });
    gsap.to(".hexagon-green .hexagon.hexagon-large.with-prag", {
      delay: 1.7,
      scale: 1,
    });
    gsap.to(".hexagon-blue .hexagon.hexagon-large.with-prag:nth-child(1)", {
      delay: 1.8,
      scale: 1,
    });
    gsap.to(".hexagon-blue .hexagon.hexagon-large.with-prag:nth-child(2)", {
      delay: 1.9,
      scale: 1,
    });
    gsap.to(".hexagon-red .hexagon.hexagon-median", {
      delay: 2.0,
      scale: 1,
    });
    gsap.to(".hexagon-red .hexagon.hexagon-large.with-prag", {
      delay: 2.1,
      scale: 1,
    });
    gsap.to(".hexagon-red .hexagon.hexagon-small", {
      delay: 2.2,
      scale: 1,
    });
  };
  ///         show sec one ------------------------

  ///         show sec Three ------------------------
  let showsecThree = function () {
    gsap.to("#secThree", {
      opacity: 1,
      top: 0,
      delay: 0.5,
      duration: 0,
    });
    gsap.to("#secThree .details-content ", {
      height: "80vh",
      delay: 1,
      duration: 0.5,
    });
    gsap.to(".detail-obtain-it .details-header", {
      height: "auto",
      delay: 1.5,
      duration: 0.5,
    });
    gsap.to(".content-body .image-with-title.Service", {
      opacity: 1,
      height: "31vh",
      delay: 3.0,
      duration: 0.5,
    });
    gsap.to(".content-body .image-with-title.Software", {
      opacity: 1,
      height: "31vh",
      delay: 3.4,
      duration: 0.5,
    });
    gsap.to(".content-body .image-with-title.Hybrid", {
      opacity: 1,
      height: "31vh",
      delay: 3.8,
      duration: 0.5,
    });

    gsap.to(".detail-obtain-it i", {
      opacity: 1,
      delay: 3.5,
      duration: 0.5,
    });
    gsap.to(".detail-obtain-it p.title-back", {
      opacity: 1,
      delay: 3.5,
      duration: 0.5,
    });
    gsap.to("#secOne", {
      opacity: 0,
      top: "100vh",
      delay: 3.6,
      duration: 0,
    });
  };
  ///         show sec Three ------------------------

  ///         show sec Four  ------------------------
  let showsecFour = function () {
    gsap.to("#secFour", {
      opacity: 1,
      top: 0,
      delay: 0.5,
      duration: 0,
    });
    gsap.to("#secFour .details-content ", {
      height: "80vh",
      delay: 1,
      duration: 0.5,
    });
    gsap.to(".Outsource-Payroll .details-header", {
      height: "auto",
      delay: 1.5,
      duration: 0.5,
    });
    gsap.to(".Outsource-Payroll .details-body", {
      height: "270px",
      delay: 2.0,
      duration: 1.5,
    });
    gsap.to(".Outsource-Payroll .details-body .Outsource-img-svg", {
      delay: 2.0,
      duration: 1.5,
      opacity: 1,
    });

    gsap.to(".Outsource-Payroll i", {
      opacity: 1,
      delay: 3.5,
      duration: 0.5,
    });
  };
  ///         show sec Four  ------------------------

  ///         show sec five  ------------------------

  let showsecFive = function () {
    gsap.to("#secFive", {
      opacity: 1,
      top: 0,
      delay: 1.5,
      duration: 0,
      position: "absolute",
    });
    gsap.to(".detail-whosjourney", {
      height: "80vh",
      delay: 2,
      duration: 0.5,
    });
    gsap.to(".detail-whosjourney .details-header", {
      height: "auto",
      delay: 2.5,
      duration: 0.5,
    });
    gsap.to(".detail-whosjourney .details-body", {
      height: "auto",
      delay: 3.5,
      duration: 0.5,
    });
    gsap.to(".detail-whosjourney i", {
      opacity: 1,
      delay: 3.5,
      duration: 0.5,
    });
    // gsap.to(".detail-whosjourney p.title-back", {
    //   opacity: 1,
    //   delay: 3.5,
    //   duration: 0.5,
    // });
  };
  ///         show sec five  ------------------------

  ///         show sec Eight  ------------------------

  let showsecEight = function () {
    gsap.to("#secEight", {
      opacity: 1,
      top: 0,
      delay: 1.5,
      duration: 0,
      position: "absolute",
    });

    gsap.to("#secEight i", {
      opacity: 1,
      delay: 0.5,
      duration: 1.5,
    });

    gsap.to("#secEight .business-body-prag", {
      opacity: 1,
      delay: 2,
      duration: 3,
    });
  };

  ///         show sec Eight  ------------------------

  ///         show sec Eight Second Part  ------------------------
  let showsecEightSecondPart = function () {
    gsap.to("#secEightSecondPart", {
      opacity: 1,
      top: 0,
      delay: 1.5,
      duration: 0,
      position: "absolute",
    });

    gsap.to("#secEightSecondPart i", {
      opacity: 1,
      delay: 0.5,
      duration: 1.5,
    });
    gsap.to(".shapes-circle-body.shapes-circle-yellew .shapes-circle-content", {
      scale: 1,
      delay: 1.7,
      ease: Elastic.easeOut,
      duration: 1.5,
    });
    gsap.to(".shapes-circle-body.shapes-circle-orange .shapes-circle-content", {
      scale: 1,
      delay: 1.9,
      ease: Elastic.easeOut,
      duration: 1.5,
    });
    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(1) .Post-Processing-circle",
      {
        opacity: 1,
        scale: 1,
        delay: 2,
        ease: Elastic.easeOut,
        duration: 1.5,
      }
    );
    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(1) .line-with-dot",
      {
        opacity: 1,
        left: 0,
        delay: 2.2,
        duration: 1.5,
      }
    );
    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(1) .rule-point",
      {
        opacity: 1,
        left: 0,
        delay: 2.4,
        duration: 2.5,
      }
    );
    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(2) .Post-Processing-circle",
      {
        opacity: 1,
        scale: 1,
        delay: 2.4,
        ease: Elastic.easeOut,
        duration: 1.5,
      }
    );
    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(2) .line-with-dot",
      {
        opacity: 1,
        left: 0,
        delay: 2.4,
        duration: 2.5,
      }
    );
    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(2) .rule-point",
      {
        opacity: 1,
        left: 0,
        delay: 2.6,
        duration: 2.5,
      }
    );

    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(3) .Post-Processing-circle",
      {
        opacity: 1,
        scale: 1,
        delay: 2.6,
        ease: Elastic.easeOut,
        duration: 1.5,
      }
    );
    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(3) .line-with-dot",
      {
        opacity: 1,
        left: 0,
        delay: 2.6,
        duration: 2.5,
      }
    );
    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(3) .rule-point",
      {
        opacity: 1,
        left: 0,
        delay: 2.8,
        duration: 2.5,
      }
    );

    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(4) .Post-Processing-circle",
      {
        opacity: 1,
        scale: 1,
        delay: 2.8,
        ease: Elastic.easeOut,
        duration: 1.5,
      }
    );
    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(4) .line-with-dot",
      {
        opacity: 1,
        left: 0,
        delay: 2.8,
        duration: 2.5,
      }
    );
    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(4) .rule-point",
      {
        opacity: 1,
        left: 0,
        delay: 3,
        duration: 2.5,
      }
    );
  };
  ///         show sec Eight Second Part  ------------------------

  ///         hide sec five  ------------------------
  let hidesecFive = function () {
    gsap.to(".detail-whosjourney i", {
      opacity: 0,
      duration: 0.5,
    });
    // gsap.to(".detail-whosjourney p.title-back", {
    //   opacity: 0,
    //   duration: 0.5,
    // });
    gsap.to(".details-body", {
      height: 0,
      delay: 0.6,
      duration: 0.5,
    });
    gsap.to(".details-header", {
      height: 0,
      delay: 1.0,
      duration: 0.5,
    });
    gsap.to(".detail-whosjourney", {
      height: "0vh",
      delay: 1.2,
      duration: 0.5,
    });
    gsap.to("#secFive", {
      opacity: 0,
      top: "100vh",
      delay: 1.5,
      duration: 0,
    });
  };

  ///         hide sec five  ------------------------

  ///         hide sec Eight ------------------------
  let hidesecEight = function () {
    gsap.to("#secEight i", {
      opacity: 1,
      delay: 0.5,
      duration: 1.5,
    });

    gsap.to("#secEight .business-body-prag", {
      opacity: 0,
      delay: 0.2,
      duration: 3,
    });
    gsap.to("#secEight", {
      opacity: 0,
      top: "100vh",
      delay: 1.5,
      duration: 0,
    });
  };
  ///         hide sec Eight  ------------------------
  ///         hide sec Eight Second Part  ------------------------

  let hidesecEightSecondPart = function () {
    gsap.to("#secEightSecondPart i", {
      opacity: 0,
      delay: 0.5,
      duration: 1.5,
    });
    gsap.to(".shapes-circle-body.shapes-circle-yellew .shapes-circle-content", {
      scale: 0,
      delay: 0.1,
      ease: Elastic.easeOut,
      duration: 1.5,
    });
    gsap.to(".shapes-circle-body.shapes-circle-orange .shapes-circle-content", {
      scale: 0,
      delay: 0.2,
      ease: Elastic.easeOut,
      duration: 1.5,
    });
    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(1) .Post-Processing-circle",
      {
        opacity: 0,
        scale: 0,
        delay: 0.3,
        ease: Elastic.easeOut,
        duration: 1.5,
      }
    );
    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(1) .line-with-dot",
      {
        opacity: 0,
        left: "150%",
        delay: 0.7,
        duration: 1.5,
      }
    );

    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(1) .rule-point",
      {
        opacity: 0,
        left: "150%",
        delay: 0.6,
        duration: 1.5,
      }
    );
    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(2) .Post-Processing-circle",
      {
        opacity: 0,
        scale: 0,
        delay: 0.4,
        ease: Elastic.easeOut,
        duration: 1.5,
      }
    );
    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(2) .line-with-dot",
      {
        opacity: 0,
        left: "150%",
        delay: 0.7,
        duration: 1.5,
      }
    );
    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(2) .rule-point",
      {
        opacity: 0,
        left: "150%",
        delay: 0.6,
        duration: 1.5,
      }
    );

    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(3) .Post-Processing-circle",
      {
        opacity: 0,
        scale: 0,
        delay: 0.5,
        ease: Elastic.easeOut,
        duration: 1.5,
      }
    );
    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(3) .line-with-dot",
      {
        opacity: 0,
        left: "150%",
        delay: 0.7,
        duration: 1.5,
      }
    );
    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(3) .rule-point",
      {
        opacity: 0,
        left: "150%",
        delay: 0.6,
        duration: 1.5,
      }
    );

    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(4) .Post-Processing-circle",
      {
        opacity: 0,
        scale: 0,
        delay: 0.6,
        ease: Elastic.easeOut,
        duration: 1.5,
      }
    );
    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(4) .line-with-dot",
      {
        opacity: 0,
        left: "150%",
        delay: 0.7,
        duration: 1.5,
      }
    );
    gsap.to(
      ".shapes-circle .image-content .Post-Processing-steps .Post-Processing-step-container:nth-child(4) .rule-point",
      {
        opacity: 0,
        left: "150%",
        delay: 0.6,
        duration: 1.5,
      }
    );
    gsap.to("#secEightSecondPart", {
      opacity: 0,
      top: "100vh",
      delay: 1.5,
      duration: 0,
    });
  };
  ///         hide sec Eight Second Part  ------------------------

  ///         hide sec five second part ------------------------
  let hidesecFivesecondpart = function () {
    gsap.to("#secFiveSecondPart .my-journey", {
      height: 0,
      delay: 1.6,
      duration: 1,
    });

    gsap.to("#secFiveSecondPart i", {
      opacity: 0,
      delay: 1.5,
      duration: 1.5,
    });

    gsap.to("#secFiveSecondPart", {
      opacity: 0,
      top: "100vh",
      delay: 1,
      duration: 1.5,
    });
  };

  ///         hide sec five second part  ------------------------
  ///         hide Obtain Childs Container ------------------------
  let hideObtainChildsContainer = function () {
    gsap.to(".obtain-childs-container i", {
      opacity: 0,
      delay: 0.2,
      duration: 1.5,
    });
    gsap.to(".obtain-childs-container p.title-back", {
      opacity: 0,
      delay: 0.2,
      duration: 1.5,
    });
    gsap.to(".obtain-childs-container .details-content ", {
      height: 0,
      delay: 2.5,
      duration: 1,
    });
    gsap.to(".obtain-childs-container img", {
      opacity: 0,
      width: 0,
      height: 0,
      delay: 0.5,
      duration: 1.5,
    });
    gsap.to(".obtain-childs-container .side-content .content-header", {
      opacity: 0,
      left: "150%",
      delay: 0.1,
      duration: 1.5,
    });
    gsap.to(".obtain-childs-container .side-content .content-body", {
      opacity: 0,
      height: 0,
      delay: 0.2,
      duration: 1.5,
    });
    gsap.to(".obtain-childs-container", {
      opacity: 0,
      top: "100vh",
      delay: 2,
      duration: 1,
    });
  };
  ///         hide Obtain Childs Container  ------------------------

  ///         hide Image With Title ------------------------
  let hideImageWithTitle = function () {
    gsap.to("#secThree i", {
      opacity: 0,
      duration: 1.5,
    });

    gsap.to("#secThree p.title-back", {
      opacity: 0,
      duration: 1.5,
    });
    gsap.to(".detail-obtain-it .details-header", {
      height: "0",
      delay: 0.3,
      duration: 1.5,
    });

    gsap.to("#secThree .content-body .image-with-title.Service", {
      height: 0,
      opacity: 0,
      delay: 0.6,
      duration: 1.5,
    });
    gsap.to("#secThree .content-body .image-with-title.Software", {
      height: 0,
      opacity: 0,
      delay: 0.9,
      duration: 1.5,
    });
    gsap.to("#secThree .content-body .image-with-title.Hybrid", {
      height: 0,
      opacity: 0,
      delay: 1.2,
      duration: 1.5,
    });
    gsap.to("#secThree .details-content ", {
      height: "0",
      delay: 2,
      duration: 1.5,
    });
    gsap.to("#secThree", {
      opacity: 0,
      top: "100vh",
      delay: 3.5,
      duration: 1.5,
    });
  };
  ///         hide Image With Title  ------------------------

  ///      hide   Why Outsource Your Payroll  ------------------------
  let hideOutsourcePayroll = function () {
    gsap.to(".Outsource-Payroll i", {
      opacity: 0,
      duration: 1.0,
    });
    gsap.to(".Outsource-Payroll p.title-back", {
      opacity: 0,
      duration: 1.0,
    });
    gsap.to("#secFour", {
      opacity: 0,
      top: "100vh",
      delay: 3.5,
      duration: 0,
    });
    gsap.to(".Outsource-Payroll.details-content ", {
      height: "0vh",
      delay: 1.5,
      duration: 0.5,
    });
    gsap.to(".Outsource-Payroll .details-header", {
      height: 0,
      delay: 1.5,
      duration: 1.5,
    });
    gsap.to(".Outsource-Payroll .details-body", {
      height: "130px",
      delay: 0.7,
      duration: 2,
    });
    gsap.to(".Outsource-Payroll .details-body .Outsource-img-svg", {
      delay: 0.3,
      duration: 0.5,
      opacity: 0,
    });

    gsap.to(".Outsource-Payroll .details-header", {
      height: 0,
      delay: 1.0,
      duration: 0.5,
    });
  };
  ///       hide  Why Outsource Your Payroll  ------------------------

  ///       hide  Why Outsource Your Payroll  Childern------------------------
  let hideOutsourcePayrollChildern = function () {
    gsap.to(".Outsource-Payrolls-container i", {
      opacity: 0,
      delay: 0.3,
      duration: 1.5,
    });
    gsap.to(".Outsource-Payrolls-container p.title-back", {
      opacity: 0,
      delay: 0.6,
      duration: 1.5,
    });

    gsap.to(".Outsource-Payrolls-container  .details-body", {
      height: "auto",
      delay: 0.9,
      duration: 1.5,
    });

    gsap.to(".Outsource-Payrolls-container .details-content ", {
      height: 0,
      delay: 1.2,
      duration: 1.5,
    });
    gsap.to(".Outsource-Payrolls-container  .details-body .Outsource-img-svg", {
      delay: 0.3,
      duration: 0.5,
      opacity: 0,
    });

    gsap.to(".Outsource-Payrolls-container", {
      opacity: 0,
      top: "100vh",
      delay: 1.5,
      duration: 1.5,
    });
  };
  ///       hide  Why Outsource Your Payroll Childern ------------------------

  let SVG_close = `<svg viewBox="0 0 512.001 512.001" >
            <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717 L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859 c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287 l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285 L284.286,256.002z"/>
    </svg>
    `;
  let SVG_next = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z"/></svg>`;
  let SVG_pre = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z"/></svg>`;
  const SVG_home = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h18v-10h3zm-5 8h-14v-10.26l7-6.912 7 6.99v10.182zm-5-1h-4v-6h4v6z"/></svg>`;
  let SVG = ` <svg viewBox="0 0 477.862 477.862" >
		<path d="M187.722,102.856V17.062C187.719,7.636,180.076-0.003,170.65,0c-4.834,0.001-9.44,2.053-12.676,5.644L4.375,176.311 c-5.617,6.256-5.842,15.67-0.529,22.187l153.6,187.733c5.968,7.295,16.72,8.371,24.016,2.403c3.952-3.233,6.249-8.066,6.26-13.172 v-85.043c134.827,4.386,218.965,62.02,256.888,175.787c2.326,6.96,8.841,11.653,16.179,11.656c0.92,0.003,1.84-0.072,2.748-0.222 c8.256-1.347,14.319-8.479,14.319-16.845C477.855,259.818,356.87,112.174,187.722,102.856z"/>
    </svg> `;

  let backIcon = document.querySelectorAll(".icon--placeholder-back");
  for (let i = 0; i < backIcon.length; i++) {
    backIcon[i].innerHTML = SVG;
  }
  let nextIcon = document.querySelectorAll(".icon--placeholder-next");
  for (let i = 0; i < nextIcon.length; i++) {
    nextIcon[i].innerHTML = SVG_next;
  }
  let preIcon = document.querySelectorAll(".icon--placeholder-pre");
  for (let i = 0; i < preIcon.length; i++) {
    preIcon[i].innerHTML = SVG_pre;
  }
  let homeIcon = document.querySelectorAll(".icon--placeholder-home");
  for (let i = 0; i < homeIcon.length; i++) {
    homeIcon[i].innerHTML = SVG_home;
  }

  gsap.to(".paragraph-content", {
    opacity: 1,
    duration: 1,
    delay: 0.5,
  });
  gsap.to(".paragraph-content span", {
    scale: 1,
    ease: Power4.easeOut,
    opacity: 1,
    width: "80vw",
    height: "80vh",
    duration: 1.5,
    delay: 0.8,
    background: "rgba(255, 255, 255, 0.200)",
  });
  gsap.to(".paragraph-content button", {
    opacity: 1,
    duration: 1,
    delay: 1,
  });
  $(".paragraph-content button").on("mouseenter", () => {
    gsap.to(".paragraph-content span", {
      scale: 1.1,
      background: "rgba(255, 255, 255, 0.100)",
    });
  });
  $(".paragraph-content button").on("mouseleave", () => {
    gsap.to(".paragraph-content span", {
      scale: 1.0,
      background: "rgba(255, 255, 255, 0.200)",
    });
  });
  $(".paragraph-content button").on("click", () => {
    gsap.to(".paragraph-content span", {
      scale: 1,
      ease: Power3.easeOut,
      opacity: 0,
      border: "none",
      delay: 0.5,
      width: "0vw",
      height: "0vh",
      duration: 1,
      background: "rgba(255, 255, 255, 0.0)",
    });
    gsap.to(".paragraph-content h2", {
      opacity: 0.1,
      duration: 0.5,
      ease: Power3.easeOut,
      delay: 0.5,
      fontSize: "13vw",
    });
    gsap.to(".paragraph-content button", {
      opacity: 0,
      height: 0,
      duration: 0.5,
      ease: Power2.easeOut,
      delay: 1,
    });
    gsap.to(".paragraph-content button", {
      delay: 1.2,
      visibility: "hidden",
    });
    gsap.to("#secOne", {
      opacity: 1,
      top: 0,
      delay: 1.5,
      duration: 0,
    });

    gsap.to(".hexagon-yellew .hexagon.hexagon-median", {
      delay: 1.2,
      scale: 1,
    });
    gsap.to(".hexagon-yellew .hexagon.hexagon-large.with-prag", {
      delay: 1.3,
      scale: 1,
    });
    gsap.to(".hexagon-yellew .hexagon.hexagon-small", {
      delay: 1.3,
      scale: 1,
    });
    gsap.to(".hexagon-orange .hexagon.hexagon-large.empty", {
      delay: 1.5,
      scale: 1,
    });
    gsap.to(".hexagon-orange .hexagon.hexagon-large.with-prag", {
      delay: 1.4,
      scale: 1,
    });
    gsap.to(".hexagon-green .hexagon.hexagon-large.with-prag", {
      delay: 1.6,
      scale: 1,
    });
    gsap.to(".hexagon-green .hexagon.hexagon-large.with-prag", {
      delay: 1.7,
      scale: 1,
    });
    gsap.to(".hexagon-blue .hexagon.hexagon-large.with-prag:nth-child(1)", {
      delay: 1.8,
      scale: 1,
    });
    gsap.to(".hexagon-blue .hexagon.hexagon-large.with-prag:nth-child(2)", {
      delay: 1.9,
      scale: 1,
    });
    gsap.to(".hexagon-red .hexagon.hexagon-median", {
      delay: 2.0,
      scale: 1,
    });
    gsap.to(".hexagon-red .hexagon.hexagon-large.with-prag", {
      delay: 2.1,
      scale: 1,
    });
    gsap.to(".hexagon-red .hexagon.hexagon-small", {
      delay: 2.2,
      scale: 1,
    });
  });

  $(".hexagon-large.with-prag").on("click", () => {
    gsap.to(".hexagon-yellew .hexagon.hexagon-median", {
      delay: 0.2,
      scale: 0,
    });
    gsap.to(".hexagon-yellew .hexagon.hexagon-large.with-prag", {
      delay: 0.3,
      scale: 0,
    });
    gsap.to(".hexagon-yellew .hexagon.hexagon-small", {
      delay: 0.4,
      scale: 0,
    });
    gsap.to(".hexagon-orange .hexagon.hexagon-large.empty", {
      delay: 0.5,
      scale: 0,
    });
    gsap.to(".hexagon-orange .hexagon.hexagon-large.with-prag", {
      delay: 0.4,
      scale: 0,
    });
    gsap.to(".hexagon-green .hexagon.hexagon-large.with-prag", {
      delay: 0.6,
      scale: 0,
    });
    gsap.to(".hexagon-green .hexagon.hexagon-large.with-prag", {
      delay: 0.7,
      scale: 0,
    });
    gsap.to(".hexagon-blue .hexagon.hexagon-large.with-prag:nth-child(1)", {
      delay: 0.8,
      scale: 0,
    });
    gsap.to(".hexagon-blue .hexagon.hexagon-large.with-prag:nth-child(2)", {
      delay: 0.9,
      scale: 0,
    });
    gsap.to(".hexagon-red .hexagon.hexagon-median", {
      delay: 1.0,
      scale: 0,
    });
    gsap.to(".hexagon-red .hexagon.hexagon-large.with-prag", {
      delay: 1.1,
      scale: 0,
    });
    gsap.to(".hexagon-red .hexagon.hexagon-small", {
      delay: 1.2,
      scale: 0,
    });
    gsap.to("#secOne", {
      opacity: 1,
      top: 0,
      delay: 1.3,
      duration: 0,
      height: 0,
      margin: 0,
    });
  });

  // view who we are Slide
  $("#whoWeAre").on("click", () => {
    gsap.to("#secTwo", {
      opacity: 1,
      top: 0,
      delay: 1.5,
      duration: 0,
      position: "absolute",
    });
    gsap.to(".detail-who", {
      height: "80vh",
      delay: 2,
      duration: 0.5,
    });
    gsap.to(".detail-who .details-header", {
      height: "auto",
      delay: 2.5,
      duration: 0.5,
    });
    gsap.to(".detail-who .details-body", {
      height: "auto",
      delay: 3.5,
      duration: 0.5,
    });
    gsap.to(".detail-who i", {
      opacity: 1,
      delay: 3.5,
      duration: 0.5,
    });
    gsap.to(".detail-who p.title-back", {
      opacity: 1,
      delay: 3.5,
      duration: 0.5,
    });
    gsap.to("#secOne", {
      opacity: 0,
      top: "100vh",
      delay: 3.6,
      duration: 0,
    });
  });

  // view How To Obtain It Slide
  $("#HowToObtainIt").on("click", () => {
    gsap.to("#secThree", {
      opacity: 1,
      top: 0,
      delay: 0.5,
      duration: 0,
    });
    gsap.to("#secThree .details-content ", {
      height: "80vh",
      delay: 1,
      duration: 0.5,
    });
    gsap.to(".detail-obtain-it .details-header", {
      height: "auto",
      delay: 1.5,
      duration: 0.5,
    });
    gsap.to("#secThree .content-body .image-with-title.Service", {
      opacity: 1,
      height: "31vh",
      delay: 3.0,
      duration: 0.5,
    });
    gsap.to("#secThree .content-body .image-with-title.Software", {
      opacity: 1,
      height: "31vh",
      delay: 3.4,
      duration: 0.5,
    });
    gsap.to("#secThree .content-body .image-with-title.Hybrid", {
      opacity: 1,
      height: "31vh",
      delay: 3.8,
      duration: 0.5,
    });

    gsap.to(".detail-obtain-it i", {
      opacity: 1,
      delay: 3.5,
      duration: 0.5,
    });
    gsap.to(".detail-obtain-it p.title-back", {
      opacity: 1,
      delay: 3.5,
      duration: 0.5,
    });
    gsap.to("#secOne", {
      opacity: 0,
      top: "100vh",
      delay: 3.6,
      duration: 0,
    });
  });

  // view Outsource Our Payroll Slide
  $("#OutsourceOurPayroll").on("click", () => {
    showsecFour();
    gsap.to("#secOne", {
      opacity: 0,
      top: "100vh",
      delay: 3.6,
      duration: 0,
    });
  });

  // view How's my journey
  $("#HowsMyJourney").on("click", () => {
    showsecFive();
    gsap.to("#secOne", {
      opacity: 0,
      top: "100vh",
      delay: 3.6,
      duration: 0,
    });
  });

  // view How's my journey

  // view How's my journey second
  $("#secFive i.icon--placeholder-next").on("click", () => {
    hidesecFive();

    gsap.to("#secFiveSecondPart", {
      opacity: 1,
      top: 0,
      delay: 1.5,
      duration: 0,
      position: "absolute",
    });

    gsap.to("#secFiveSecondPart .my-journey", {
      height: "85vh",
      delay: 1.6,
      duration: 1.5,
    });

    gsap.to("#secFiveSecondPart i", {
      opacity: 1,
      delay: 3.5,
      duration: 1.5,
    });
  });

  $("#secFiveSecondPart i.icon--placeholder-pre").on("click", () => {
    hidesecFivesecondpart();

    setTimeout(() => {
      showsecFive();
    }, 1500);
  });
  // view How's my journey second

  // view Whats Your Commitment
  $("#WhatsYourCommitment").on("click", () => {
    gsap.to("#secSix", {
      opacity: 1,
      top: 0,
      delay: 1.5,
      duration: 0,
      position: "absolute",
    });

    gsap.to("#secSix i", {
      opacity: 1,
      delay: 4,
      duration: 0.5,
    });

    gsap.to("#secSix p.title-back", {
      opacity: 1,
      delay: 4,
      duration: 0.5,
    });

    gsap.to(".commitment-content p", {
      opacity: 1,
      delay: 3,
      duration: 0.5,
    });

    gsap.to(".commitment-circle.commitment-circle-white", {
      scale: 1,
      delay: 2.0,
      ease: Elastic.easeOut,
      duration: 1.5,
    });
    gsap.to("#secSix .commitments-body .right-content", {
      width: "auto",
      delay: 3.5,
      duration: 0.5,
    });
    gsap.to("#secSix .commitments-body .small-circle", {
      width: "85px",
      delay: 3.5,
      duration: 0,
    });
    gsap.to("#secSix .commitments-body .small-circle", {
      opacity: "1",
      delay: 3.6,
      duration: 0.5,
    });
    gsap.to("#secSix .commitments-body .mediam-circle", {
      width: "200px",
      delay: 2.0,
      duration: 0,
    });
    gsap.to("#secSix .commitments-body .mediam-circle", {
      opacity: "1",
      delay: 3.6,
      duration: 0.5,
    });

    gsap.to(
      "#secSix .commitments-body .right-content .commitment-rule:nth-child(1) .rule-point",
      {
        opacity: "1",
        width: "450px",
        delay: 4.7,
        duration: 0.5,
      }
    );
    gsap.to(
      "#secSix .commitments-body .right-content .commitment-rule:nth-child(1) .rule-point",
      {
        opacity: "1",
        height: "auto",
        delay: 5.2,
        duration: 0.5,
      }
    );
    gsap.to(
      "#secSix .commitments-body .right-content .commitment-rule:nth-child(1) .rule-point > div",
      {
        opacity: "1",
        width: "450px",
        delay: 5.7,
        duration: 0.5,
      }
    );

    gsap.to(
      "#secSix .commitments-body .right-content .commitment-rule:nth-child(2) .rule-point",
      {
        opacity: "1",
        width: "450px",
        delay: 5.0,
        duration: 0.5,
      }
    );
    gsap.to(
      "#secSix .commitments-body .right-content .commitment-rule:nth-child(2) .rule-point",
      {
        opacity: "1",
        height: "auto",
        delay: 5.5,
        duration: 0.5,
      }
    );
    gsap.to(
      "#secSix .commitments-body .right-content .commitment-rule:nth-child(2) .rule-point > div",
      {
        opacity: "1",
        width: "450px",
        delay: 6,
        duration: 0.5,
      }
    );

    gsap.to(
      "#secSix .commitments-body .right-content .commitment-rule:nth-child(3) .rule-point",
      {
        opacity: "1",
        width: "450px",
        delay: 5.3,
        duration: 0.5,
      }
    );
    gsap.to(
      "#secSix .commitments-body .right-content .commitment-rule:nth-child(3) .rule-point",
      {
        opacity: "1",
        height: "auto",
        delay: 5.8,
        duration: 0.5,
      }
    );
    gsap.to(
      "#secSix .commitments-body .right-content .commitment-rule:nth-child(3) .rule-point > div",
      {
        opacity: "1",
        width: "450px",
        delay: 6.3,
        duration: 0.5,
      }
    );
    // gsap.to("#secSix .commitments-body .right-content .rule-point", { opacity: '1', delay: 4, duration: 0.5 });
    // gsap.to(".commitments-body i", { opacity: 1, delay: 3.5, duration: 0.5 });
    gsap.to("#secOne", {
      opacity: 0,
      top: "100vh",
      delay: 3.6,
      duration: 0,
    });
  });

  // view How's my journey
  $("#contactUs").on("click", () => {
    gsap.to("#secSeven", {
      opacity: 1,
      top: 0,
      delay: 1.5,
      duration: 0,
      position: "absolute",
    });
    gsap.to("#secSeven i", {
      opacity: 1,
      delay: 4,
      duration: 0.5,
    });

    gsap.to("#secSeven .contact-us h1", {
      opacity: "1",
      delay: 2,
      duration: 2.5,
      left: "0",
    });
    gsap.to("#secSeven .contact-us .contact-us-item:nth-child(1)", {
      opacity: "1",
      delay: 2,
      duration: 2.5,
      top: "0",
    });
    gsap.to("#secSeven .contact-us .contact-us-item:nth-child(2)", {
      opacity: "1",
      delay: 2.5,
      duration: 2.5,
      top: "0",
    });
    gsap.to("#secSeven .contact-us .contact-us-item:nth-child(3)", {
      opacity: "1",
      delay: 3,
      duration: 2.5,
      top: "0",
    });
    gsap.to("#secSeven .contact-us .map-body", {
      opacity: "1",
      delay: 2,
      duration: 3,
      top: "0",
    });

    gsap.to("#secOne", {
      opacity: 0,
      top: "100vh",
      delay: 3.6,
      duration: 0,
    });
  });

  $("#BUSINESSOFPAYING").on("click", () => {
    showsecEight();
    gsap.to("#secOne", {
      opacity: 0,
      top: "100vh",
      delay: 3.6,
      duration: 0,
    });
  });

  $("#secEight i.icon--placeholder-next").on("click", () => {
    hidesecEight();
    showsecEightSecondPart();
  });

  $("#secEightSecondPart i.icon--placeholder-pre").on("click", () => {
    hidesecEightSecondPart();
    setTimeout(() => {
      showsecEight();
    }, 1000);
  });

  $("#secTwo .detail-who i.icon--placeholder-home").on("click", () => {
    gsap.to(".detail-who i", {
      opacity: 0,
      duration: 0.5,
    });
    gsap.to(".detail-who p.title-back", {
      opacity: 0,
      duration: 0.5,
    });
    gsap.to(".details-body", {
      height: 0,
      delay: 0.6,
      duration: 0.5,
    });
    gsap.to(".details-header", {
      height: 0,
      delay: 1.0,
      duration: 0.5,
    });
    gsap.to(".detail-who", {
      height: "0vh",
      delay: 1.2,
      duration: 0.5,
    });
    gsap.to("#secTwo", {
      opacity: 0,
      top: "100vh",
      delay: 1.5,
      duration: 0,
    });

    setTimeout(() => {
      showsecone();
    }, 500);
  });

  $("#secThree .detail-obtain-it i.icon--placeholder-home").on("click", () => {
    hideImageWithTitle();
    setTimeout(() => {
      showsecone();
    }, 1500);
  });

  $("#secFour .Outsource-Payroll i.icon--placeholder-home").on("click", () => {
    hideOutsourcePayroll();
    setTimeout(() => {
      showsecone();
    }, 500);
  });

  $("#secFive .detail-whosjourney i.icon--placeholder-home").on("click", () => {
    hidesecFive();
    setTimeout(() => {
      showsecone();
    }, 500);
  });

  $("#secFiveSecondPart i.icon--placeholder-home").on("click", () => {
    hidesecFivesecondpart();
    setTimeout(() => {
      showsecone();
    }, 1500);
  });

  // view How's my journey
  $("#secSix i.icon--placeholder-home").on("click", () => {
    gsap.to(".commitment-content p", {
      opacity: 0,
      delay: 0.1,
      duration: 1.5,
    });
    gsap.to(".commitment-circle.commitment-circle-white", {
      scale: 0,
      delay: 0.2,
      ease: Elastic.easeOut,
      duration: 1.5,
    });
    gsap.to("#secSix .commitments-body .right-content", {
      delay: 0.3,
      duration: 1.5,
    });
    gsap.to("#secSix .commitments-body .small-circle", {
      opacity: 0,
      delay: 0.4,
      duration: 1.5,
    });
    gsap.to("#secSix .commitments-body .mediam-circle", {
      opacity: 0,
      delay: 0.6,
      duration: 1.5,
    });

    gsap.to(
      "#secSix .commitments-body .right-content .commitment-rule:nth-child(1) .rule-point",
      {
        opacity: 0,
        delay: 0.8,
        duration: 1.5,
      }
    );
    gsap.to(
      "#secSix .commitments-body .right-content .commitment-rule:nth-child(1) .rule-point",
      {
        opacity: 0,
        delay: 0.9,
        duration: 1.5,
      }
    );
    gsap.to(
      "#secSix .commitments-body .right-content .commitment-rule:nth-child(1) .rule-point > div",
      {
        opacity: 0,
        delay: 1,
        duration: 1.5,
      }
    );

    gsap.to(
      "#secSix .commitments-body .right-content .commitment-rule:nth-child(2) .rule-point",
      {
        opacity: 0,
        delay: 1.1,
        duration: 1.5,
      }
    );
    gsap.to(
      "#secSix .commitments-body .right-content .commitment-rule:nth-child(2) .rule-point",
      {
        opacity: 0,
        delay: 1.2,
        duration: 1.5,
      }
    );
    gsap.to(
      "#secSix .commitments-body .right-content .commitment-rule:nth-child(2) .rule-point > div",
      {
        opacity: 0,
        delay: 1.3,
        duration: 1.5,
      }
    );

    gsap.to(
      "#secSix .commitments-body .right-content .commitment-rule:nth-child(3) .rule-point",
      {
        opacity: 0,
        delay: 1.3,
        duration: 1.5,
      }
    );
    gsap.to(
      "#secSix .commitments-body .right-content .commitment-rule:nth-child(3) .rule-point",
      {
        opacity: 0,
        delay: 1.3,
        duration: 1.5,
      }
    );
    gsap.to(
      "#secSix .commitments-body .right-content .commitment-rule:nth-child(3) .rule-point > div",
      {
        opacity: 0,
        delay: 1.5,
        duration: 1.5,
      }
    );
    gsap.to("#secSix", {
      opacity: 0,
      top: "100vh",
      delay: 1.5,
      duration: 1.5,
    });
    setTimeout(() => {
      showsecone();
    }, 1000);
  });

  $("#secSeven i.icon--placeholder-home").on("click", () => {
    gsap.to("#secSeven", {
      opacity: 0,
      top: "100vh",
      delay: 4,
      duration: 0,
    });
    gsap.to("#secSeven i", {
      opacity: 0,
      delay: 0.2,
      duration: 1.5,
    });
    gsap.to("#secSeven .contact-us h1", {
      opacity: 0,
      delay: 0.4,
      duration: 1.5,
      left: "113%",
    });
    gsap.to("#secSeven .contact-us .contact-us-item:nth-child(1)", {
      opacity: 0,
      delay: 1.2,
      duration: 1.5,
      top: "155%",
    });
    gsap.to("#secSeven .contact-us .contact-us-item:nth-child(2)", {
      opacity: 0,
      delay: 1,
      duration: 1.5,
      top: "155%",
    });
    gsap.to("#secSeven .contact-us .contact-us-item:nth-child(3)", {
      opacity: 0,
      delay: 0.8,
      duration: 1.5,
      top: "155%",
    });
    gsap.to("#secSeven .contact-us .map-body", {
      opacity: 0,
      delay: 1.2,
      duration: 1.5,
      top: "155%",
    });

    setTimeout(() => {
      showsecone();
    }, 700);
  });

  $("#secEight i.icon--placeholder-home").on("click", () => {
    hidesecEight();
    setTimeout(() => {
      showsecone();
    }, 1500);
  });

  $("#secEightSecondPart i.icon--placeholder-home").on("click", () => {
    hidesecEightSecondPart();
    setTimeout(() => {
      showsecone();
    }, 1500);
  });

  //   Child Elements
  //     -                        -        go Home From Child of Children      -----------------
  $(".obtain-childs-container i.icon--placeholder-home").on("click", () => {
    hideObtainChildsContainer();
    setTimeout(() => {
      showsecone();
    }, 1500);
  });

  $(".Outsource-Payrolls-container i.icon--placeholder-home").on(
    "click",
    () => {
      hideOutsourcePayrollChildern();
      setTimeout(() => {
        showsecone();
      }, 1500);
    }
  );

  //     -                        -        go Home From Child of Children      -----------------
  //   how we can obtain childs -------------------------------------

  let showobtainChildFirst = function () {
    gsap.to("#obtainChildFirst", {
      opacity: 1,
      top: 0,
      delay: 1,
      duration: 1.2,
      position: "absolute",
    });
    gsap.to("#obtainChildFirst i", {
      opacity: 1,
      delay: 1.3,
      duration: 1.5,
    });

    gsap.to("#obtainChildFirst p.title-back", {
      opacity: 1,
      delay: 1.3,
      duration: 1.5,
    });

    gsap.to("#obtainChildFirst .details-content ", {
      height: "80vh",
      delay: 1,
      duration: 1.5,
    });
    gsap.to("#obtainChildFirst img", {
      opacity: 1,
      width: "400px",
      height: "380px",
      delay: 1.9,
      duration: 1.5,
    });

    gsap.to("#obtainChildFirst .side-content .content-header", {
      opacity: 1,
      left: 0,
      delay: 2.6,
      duration: 1.5,
    });
    gsap.to("#obtainChildFirst .side-content .content-body", {
      opacity: 1,
      height: "auto",
      delay: 2.8,
      duration: 2,
    });
  };

  // ManagedService
  $("#ManagedService").on("click", () => {
    hideImageWithTitle();
    setTimeout(() => {
      showobtainChildFirst();
    }, 2000);
  });

  let showobtainChildSecond = function () {
    gsap.to("#obtainChildSecond", {
      opacity: 1,
      top: 0,
      delay: 1,
      duration: 1.2,
      position: "absolute",
    });
    gsap.to("#obtainChildSecond i", {
      opacity: 1,
      delay: 1.3,
      duration: 1.5,
    });
    gsap.to("#obtainChildSecond p.title-back", {
      opacity: 1,
      delay: 1.3,
      duration: 1.5,
    });
    gsap.to("#obtainChildSecond .details-content ", {
      height: "80vh",
      delay: 1,
      duration: 1.5,
    });
    gsap.to("#obtainChildSecond img", {
      opacity: 1,
      width: "400px",
      height: "380px",
      delay: 1.9,
      duration: 1.5,
    });

    gsap.to("#obtainChildSecond .side-content .content-header", {
      opacity: 1,
      left: 0,
      delay: 2.6,
      duration: 1.5,
    });
    gsap.to("#obtainChildSecond .side-content .content-body", {
      opacity: 1,
      height: "auto",
      delay: 2.8,
      duration: 2,
    });
  };

  // Software
  $("#Software").on("click", () => {
    hideImageWithTitle();
    setTimeout(() => {
      showobtainChildSecond();
    }, 2000);
  });

  let showobtainChildThird = function () {
    gsap.to("#obtainChildThird", {
      opacity: 1,
      top: 0,
      delay: 1,
      duration: 1.2,
      position: "absolute",
    });
    gsap.to("#obtainChildThird i", {
      opacity: 1,
      delay: 1.3,
      duration: 1.5,
    });
    gsap.to("#obtainChildThird p.title-back", {
      opacity: 1,
      delay: 1.3,
      duration: 1.5,
    });
    gsap.to("#obtainChildThird .details-content ", {
      height: "80vh",
      delay: 1,
      duration: 1.5,
    });
    gsap.to("#obtainChildThird img", {
      opacity: 1,
      width: "400px",
      height: "380px",
      delay: 1.9,
      duration: 1.5,
    });

    gsap.to("#obtainChildThird .side-content .content-header", {
      opacity: 1,
      left: 0,
      delay: 2.6,
      duration: 1.5,
    });
    gsap.to("#obtainChildThird .side-content .content-body", {
      opacity: 1,
      height: "auto",
      delay: 2.8,
      duration: 2,
    });
  };
  // Hybrid
  $("#Hybrid").on("click", () => {
    hideImageWithTitle();
    setTimeout(() => {
      showobtainChildThird();
    }, 2000);
  });

  //  obtain-childs-container hide
  $(".obtain-childs-container .title-back").on("click", () => {
    hideObtainChildsContainer();
    setTimeout(() => {
      showsecThree();
    }, 1500);
  });

  //            obtain-childs-container next prev
  //           show   obtainChildSecond
  //            obtain-childs-container next

  $("#obtainChildFirst i.icon--placeholder-next").on("click", () => {
    hideObtainChildsContainer();
    setTimeout(() => {
      showobtainChildSecond();
    }, 1500);
  });

  //           show   obtainChildThird
  $("#obtainChildSecond i.icon--placeholder-next").on("click", () => {
    hideObtainChildsContainer();
    setTimeout(() => {
      showobtainChildThird();
    }, 1500);
  });

  //        show   obtainChildThird
  $("#obtainChildThird i.icon--placeholder-next").on("click", () => {
    hideObtainChildsContainer();
    setTimeout(() => {
      showobtainChildFirst();
    }, 1500);
  });

  //            obtain-childs-container next
  //        show   showobtainChildThird
  $("#obtainChildFirst i.icon--placeholder-pre").on("click", () => {
    hideObtainChildsContainer();
    setTimeout(() => {
      showobtainChildThird();
    }, 1500);
  });

  //           show   showobtainChildFirst
  $("#obtainChildSecond i.icon--placeholder-pre").on("click", () => {
    hideObtainChildsContainer();
    setTimeout(() => {
      showobtainChildFirst();
    }, 1500);
  });

  //        show   showobtainChildSecond
  $("#obtainChildThird i.icon--placeholder-pre").on("click", () => {
    hideObtainChildsContainer();
    setTimeout(() => {
      showobtainChildSecond();
    }, 1500);
  });
  //            obtain-childs-container next prev

  //   how we can obtain childs -------------------------------------

  //   Why Outsource Your Payroll? -------------------------------------

  let showOutsourcePayrollFirst = function () {
    gsap.to("#OutsourcePayrollFirst", {
      opacity: 1,
      top: 0,
      delay: 1,
      duration: 1.2,
      position: "absolute",
    });

    gsap.to("#OutsourcePayrollFirst i", {
      opacity: 1,
      delay: 1.3,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollFirst p.title-back", {
      opacity: 1,
      delay: 1.3,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollFirst .details-content ", {
      height: "80vh",
      delay: 1.1,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollFirst .details-header", {
      height: "auto",
      delay: 2.1,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollFirst .details-header", {
      height: 0,
      delay: 4.5,
      duration: 2,
    });
    gsap.to("#OutsourcePayrollFirst  .details-body", {
      height: "auto",
      delay: 3.5,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollFirst .details-body .Outsource-img-svg", {
      delay: 2.0,
      duration: 1.5,
      opacity: 1,
    });
  };
  let showOutsourcePayrollSecond = function () {
    gsap.to("#OutsourcePayrollSecond", {
      opacity: 1,
      top: 0,
      delay: 1,
      duration: 1.2,
      position: "absolute",
    });

    gsap.to("#OutsourcePayrollSecond i", {
      opacity: 1,
      delay: 1.3,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollSecond p.title-back", {
      opacity: 1,
      delay: 1.3,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollSecond .details-content ", {
      height: "80vh",
      delay: 1.1,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollSecond .details-header", {
      height: "auto",
      delay: 2.1,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollSecond .details-header", {
      height: 0,
      delay: 4.5,
      duration: 2,
    });
    gsap.to("#OutsourcePayrollSecond  .details-body", {
      height: "auto",
      delay: 3.5,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollSecond .details-body .Outsource-img-svg", {
      delay: 2.0,
      duration: 1.5,
      opacity: 1,
    });
  };
  let showOutsourcePayrollThird = function () {
    gsap.to("#OutsourcePayrollThird", {
      opacity: 1,
      top: 0,
      delay: 1,
      duration: 1.2,
      position: "absolute",
    });

    gsap.to("#OutsourcePayrollThird i", {
      opacity: 1,
      delay: 1.3,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollThird p.title-back", {
      opacity: 1,
      delay: 1.3,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollThird .details-content ", {
      height: "80vh",
      delay: 1.1,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollThird .details-header", {
      height: "auto",
      delay: 2.1,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollThird .details-header", {
      height: 0,
      delay: 4.5,
      duration: 2,
    });
    gsap.to("#OutsourcePayrollThird  .details-body", {
      height: "auto",
      delay: 3.5,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollThird .details-body .Outsource-img-svg", {
      delay: 2.0,
      duration: 1.5,
      opacity: 1,
    });
  };
  let showOutsourcePayrollFourth = function () {
    gsap.to("#OutsourcePayrollFourth", {
      opacity: 1,
      top: 0,
      delay: 1,
      duration: 1.2,
      position: "absolute",
    });

    gsap.to("#OutsourcePayrollFourth i", {
      opacity: 1,
      delay: 1.3,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollFourth p.title-back", {
      opacity: 1,
      delay: 1.3,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollFourth .details-content ", {
      height: "80vh",
      delay: 1.1,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollFourth .details-header", {
      height: "auto",
      delay: 2.1,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollFourth .details-header", {
      height: 0,
      delay: 4.5,
      duration: 2,
    });
    gsap.to("#OutsourcePayrollFourth  .details-body", {
      height: "auto",
      delay: 3.5,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollFourth .details-body .Outsource-img-svg", {
      delay: 2.0,
      duration: 1.5,
      opacity: 1,
    });
  };
  let showOutsourcePayrollFifth = function () {
    gsap.to("#OutsourcePayrollFifth", {
      opacity: 1,
      top: 0,
      delay: 1,
      duration: 1.2,
      position: "absolute",
    });

    gsap.to("#OutsourcePayrollFifth i", {
      opacity: 1,
      delay: 1.3,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollFifth p.title-back", {
      opacity: 1,
      delay: 1.3,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollFifth .details-content ", {
      height: "80vh",
      delay: 1.1,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollFifth .details-header", {
      height: "auto",
      delay: 2.1,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollFifth .details-header", {
      height: 0,
      delay: 4.5,
      duration: 2,
    });
    gsap.to("#OutsourcePayrollFifth  .details-body", {
      height: "auto",
      delay: 3.5,
      duration: 1.5,
    });
    gsap.to("#OutsourcePayrollFifth .details-body .Outsource-img-svg", {
      delay: 2.0,
      duration: 1.5,
      opacity: 1,
    });
  };

  $("#BusinessGrowthEnsured").on("click", () => {
    hideOutsourcePayroll();
    setTimeout(() => {
      showOutsourcePayrollFirst();
    }, 1000);
  });
  $("#TechnologicalAdvantage").on("click", () => {
    hideOutsourcePayroll();
    setTimeout(() => {
      showOutsourcePayrollSecond();
    }, 1000);
  });
  $("#CostEffective").on("click", () => {
    hideOutsourcePayroll();
    setTimeout(() => {
      showOutsourcePayrollThird();
    }, 1000);
  });
  $("#MoreSafetysecurity").on("click", () => {
    hideOutsourcePayroll();
    setTimeout(() => {
      showOutsourcePayrollFourth();
    }, 1000);
  });
  $("#BetterCompliance").on("click", () => {
    hideOutsourcePayroll();
    setTimeout(() => {
      showOutsourcePayrollFifth();
    }, 1000);
  });

  //  Why Outsource Your Payroll? -------------------------------------

  $(".Outsource-Payrolls-container .title-back").on("click", () => {
    hideOutsourcePayrollChildern();
    setTimeout(() => {
      showsecFour();
    }, 1500);
  });

  //           Why Outsource Your Payroll? next prev

  //           show   Why Outsource Your Payroll?  next
  //            showOutsourcePayrollSecond
  $("#OutsourcePayrollFirst i.icon--placeholder-next").on("click", () => {
    hideOutsourcePayrollChildern();
    setTimeout(() => {
      showOutsourcePayrollSecond();
    }, 1500);
  });

  //           show   showOutsourcePayrollThird
  $("#OutsourcePayrollSecond i.icon--placeholder-next").on("click", () => {
    hideOutsourcePayrollChildern();
    setTimeout(() => {
      showOutsourcePayrollThird();
    }, 1500);
  });

  //        show   showOutsourcePayrollFourth
  $("#OutsourcePayrollThird i.icon--placeholder-next").on("click", () => {
    hideOutsourcePayrollChildern();
    setTimeout(() => {
      showOutsourcePayrollFourth();
    }, 1500);
  });

  //        show   showOutsourcePayrollFifth
  $("#OutsourcePayrollFourth i.icon--placeholder-next").on("click", () => {
    hideOutsourcePayrollChildern();
    setTimeout(() => {
      showOutsourcePayrollFifth();
    }, 1500);
  });

  //        show   showOutsourcePayrollFirst
  $("#OutsourcePayrollFifth i.icon--placeholder-next").on("click", () => {
    hideOutsourcePayrollChildern();
    setTimeout(() => {
      showOutsourcePayrollFirst();
    }, 1500);
  });

  //           show   Why Outsource Your Payroll?  next

  //           show   Why Outsource Your Payroll?  prev

  //            showOutsourcePayrollFifth
  $("#OutsourcePayrollFirst i.icon--placeholder-pre").on("click", () => {
    hideOutsourcePayrollChildern();
    setTimeout(() => {
      showOutsourcePayrollFifth();
    }, 1500);
  });

  //           show   showOutsourcePayrollFirst
  $("#OutsourcePayrollSecond i.icon--placeholder-pre").on("click", () => {
    hideOutsourcePayrollChildern();
    setTimeout(() => {
      showOutsourcePayrollFirst();
    }, 1500);
  });

  //        show   showOutsourcePayrollSecond
  $("#OutsourcePayrollThird i.icon--placeholder-pre").on("click", () => {
    hideOutsourcePayrollChildern();
    setTimeout(() => {
      showOutsourcePayrollSecond();
    }, 1500);
  });

  //        show   showOutsourcePayrollThird
  $("#OutsourcePayrollFourth i.icon--placeholder-pre").on("click", () => {
    hideOutsourcePayrollChildern();
    setTimeout(() => {
      showOutsourcePayrollThird();
    }, 1500);
  });

  //        show   showOutsourcePayrollFourth
  $("#OutsourcePayrollFifth i.icon--placeholder-pre").on("click", () => {
    hideOutsourcePayrollChildern();
    setTimeout(() => {
      showOutsourcePayrollFourth();
    }, 1500);
  });

  //           show   Why Outsource Your Payroll?  prev

  //           show   Why Outsource Your Payroll?  next prev

  //  Why Outsource Your Payroll? -------------------------------------
};
