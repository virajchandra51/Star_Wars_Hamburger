const container = document.querySelector(".pre-container");
const lineOne = document.querySelector(".l-1");
const lineTwo = document.querySelector(".l-2");
const lineThree = document.querySelector(".l-3");
let isOpen = false;
let a1 = {},
  a2 = {},
  a3 = {};

container.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) return openMenu();
  return closeMenu();
});

function initial() {
  a1 = gsap
    .timeline()
    .to(lineOne, {
      rotate: 80,
      x: -200,
      y: 10,
      background: "yellow",
    })
    

  a2 = gsap
    .timeline()
    .to(lineThree, {
      rotate: 100,
      background: "white",
      x: 200,
      y: -6,
    })
    
}

initial();

function openMenu() {
  a1 = gsap
    .timeline()
    .to(lineOne, {
      rotate: 130,
      x: -5,
      y: 10,
    })
    .to(lineOne, {
      rotate: 130,
      x: -5,
      y: 10,
    })
    .to(lineOne, {
      rotate: 130,
      x: -15,
      y: 10,
    })
    .to(
      lineOne,
      {
        rotate: 100,
        x: -7,
        y: 10,
      },
      "-=0.25"
    )
    .to(lineOne, {
      rotate: 110,
      x: -25,
      y: 10,
    })
    .to(lineOne, {
      rotate: 130,
      x: 0,
    })
    .to(lineOne, {
      rotate: 135,
      y: 10,
      x: 0,
      delay: 0.4,
    });

  a2 = gsap
    .timeline()
    .to(lineThree, {
      rotate: 50,
      x: 20,
      y: 0,
    })
    .to(
      lineThree,
      {
        rotate: 80,
        x: 0,
        y: 0,
        duration: 0.25,
      },
      "-=0.25"
    )
    .to(lineThree, {
      rotate: 50,
      x: 17,
      y: 0,
    })
    .to(lineThree, {
      rotate: 50,
      x: -20,
      y: 0,
    })
    .to(lineThree, {
      rotate: 420,
      y: -9,
      x: 5,
    })
    .to(lineThree, {
      rotate: 45,
      y: -6,
      x: 0,
      delay: 0.4,
    });
}

function closeMenu() {
  a1.kill();
  a2.kill();
  a3.kill();
  gsap.to(lineOne, {
    rotate: 0,
    background: "black",
    x: 0,
    y: 0,
  });
  gsap.to(lineThree, {
    rotate: 0,
    x: 0,
    background: "black",
    y: 0,
  });

}
