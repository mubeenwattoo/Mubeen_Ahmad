/* JS for the Navbar*/
document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.querySelector(".open");
  const switchList = document.querySelector(".SwitchButton ul");
  const closeBtn = document.querySelector(".close");
  const menuItems = document.querySelectorAll("ul li");

  openBtn.addEventListener("click", function () {
    switchList.classList.add("toggle");
    switchList.style.transition = "all 1s ease-in-out";
  });

  closeBtn.addEventListener("click", function () {
    switchList.classList.remove("toggle");
  });

  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      switchList.classList.remove("toggle");
      switchList.style.transition = "all 5s ease-in-out";
    });
  });
});
/* JS for the dots that are in the header part*/

let container = document.querySelector(".content");
for (let i = 1; i <= 100; i++) {
  let dot = document.createElement("div");
  dot.classList.add("element");
  container.appendChild(dot);
}

let dotAll = document.querySelectorAll(".element");
let animation = anime.timeline({
  targets: dotAll,
  easing: "easeInOutExpo",
  loop: true,
  delay: anime.stagger(100, { grid: [10, 10], from: "center" }),
});

animation
  .add({
    rotateZ: 180,
    translateY: anime.stagger(-1, {
      grid: [10, 10],
      from: "center",
      axis: "y",
    }),
    translateX: anime.stagger(-1, {
      grid: [10, 10],
      from: "center",
      axis: "x",
    }),
    opacity: 1,
  })

  .add({
    borderRadius: 50,
  })
  .add({
    scale: 0.2,
    opacity: 0.2,
  });
animation
  .add({
    rotateZ: 180,
    translateY: anime.stagger(0, { grid: [10, 10], from: "center", axis: "y" }),
    translateX: anime.stagger(0, { grid: [10, 10], from: "center", axis: "x" }),
    opacity: 1,
  })
  .add({
    scale: 1,
    borderRadius: 0,
  })
  .add({
    rotateZ: -90,
  });

document.addEventListener("DOMContentLoaded", function () {
  var dots = document.querySelectorAll(".Skills .percent .dot-Skills");
  var skillsSection = document.querySelector(".Skills");

  function handleScroll() {
    if (window.scrollY >= skillsSection.offsetTop - 200) {
      dots.forEach(function (dot) {
        dot.classList.add("dots");
      });
    }
  }

  window.addEventListener("scroll", handleScroll);

  // Optional: Cleanup function to remove the event listener when it's no longer needed
  window.cleanupSkillsScroll = function () {
    window.removeEventListener("scroll", handleScroll);
  };
});

//JS for the Animation of projects and contact section titles
function animateTitle(id) {
  // Select the element with the specified id
  let sectionTitle = document.getElementById(id);

  // If the element exists
  if (sectionTitle) {
    // Get the title and text content
    let title = sectionTitle.textContent;

    // Replace the text content of the title with spans wrapping each character
    sectionTitle.innerHTML = title.replace(/\S/g, "<span>$&</span>");

    // Set up animation timeline
    anime
      .timeline({
        loop: true,
      })
      .add({
        targets: "#" + id + " span",
        translateY: [-80, 0],
        scale: [10, 1],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 3000,
        delay: anime.stagger(100),
      })
      .add({
        targets: "#" + id + " span",
        translateX: [0, -1000],
        scale: [1, 1],
        opacity: [1, 0],
        easing: "easeOutExpo",
        duration: 4000,
        delay: anime.stagger(100),
      })
      .add({
        targets: "#" + id + " span",
        translateX: [1000, 0],
        scale: [1, 1],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 4000,
        delay: anime.stagger(100),
      })
      .add({
        targets: "#" + id + " span",
        translateX: [0, 0],
        scale: [1, 5],
        opacity: [1, 0],
        easing: "easeOutExpo",
        duration: 4000,
        delay: anime.stagger(100),
      });
  }
}

// Call the function for each title
animateTitle("projects-title");
animateTitle("contact-title");
