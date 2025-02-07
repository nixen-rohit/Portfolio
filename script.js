const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

gsap.ticker.lagSmoothing(0);

function gsapAnimation() {
  var t1 = gsap.timeline();

  t1.from(".brand h1 ", {
    y: -100,
    duration: 1,
    delay: -0.1,
    opacity: 0,
  });

  t1.from(".nav-list a", {
    y: -100,
    delay: 0.1,
    opacity: 0,
    stagger: 0.3,
  });

  gsap.from(".left", {
    x: -40,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.3,
  });

  gsap.from(".right", {
    x: 40,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.3,
  });

  var copy = document.querySelector(".list").cloneNode(true);
  document.querySelector(".item").appendChild(copy);
  var copy2 = document.querySelector(".list2").cloneNode(true);
  document.querySelector(".item2").appendChild(copy2);
  
  let scroll = document.querySelector("#skill");

  scroll.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
      console.log(dets.deltaY);
      gsap.to("#scroll", {
        transform: "translateX(-100%)",
        repeat: -1,
        duration: 6,
        ease: "none",
        yoyo: true,
      });
      gsap.to("#scroll-bar", {
        transform: "translateX(0%)",
        repeat: -1,
        duration: 6,
        ease: "none",
        yoyo: true,
      });
    } else {
      gsap.to("#scroll", {
        transform: "translateX(0%)",
        repeat: -1,
        duration: 6,
        ease: "none",
        yoyo: true,
      });

      gsap.to("#scroll-bar", {
        transform: "translateX(-100%)",
        repeat: -1,
        duration: 6,
        ease: "none",
        yoyo: true,
      });
    }
  });

}

 
function hamburger() {
  const hamburger = document.querySelector(
    ".header .nav-bar .nav-list .hamburger"
  );
  const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
  const menu_item = document.querySelectorAll(
    ".header .nav-bar .nav-list ul li a"
  );

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });

  menu_item.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobile_menu.classList.toggle("active");
    });
  });
}

function mode() {
  //dark / light mode

  var body = document.getElementById("body");
  var theme = document.getElementById("theme");

  theme.addEventListener("click", function () {
    theme.classList.toggle("ri-sun-fill");
    document.body.classList.toggle("light-theme");

    if (this.classList.toggle("ri-moon-fill")) {
      body.style.transition = "1s";
    } else {
      body.style.transition = "1s";
    }
  });

  // document.getElementById('night-mode-button').addEventListener('click', function() {
  //   document.body.classList.toggle('night-mode');
  // });
}

function downloadPDF() {
  const link = document.createElement("a");
  link.href = "rohit-resume.pdf";

  link.download = "Rohit-Chuhan-CV.pdf";
  link.target = "blank";
  link.click();
}

gsapAnimation();
hamburger();
mode();


