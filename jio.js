let slideindex = -1;
let slides = document.querySelectorAll(".slide");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let middle = document.querySelector(".middle");

function showslide(n) {
  slides.forEach(function (elem, idx) {
    elem.classList.toggle("active", idx === n);
  });
  slideindex = n;
}

next.addEventListener("click", function () {
  slideindex = (slideindex + 1) % slides.length;
  showslide(slideindex);
});

prev.addEventListener("click", function () {
  slideindex = (slideindex - 1 + slides.length) % slides.length;
  showslide(slideindex);
});

setInterval(() => {
  if (slideindex <= 6) {
    slideindex++;
    showslide(slideindex);
    console.log(slideindex);
  }
  if (slideindex == 6) {
    slideindex = -1;
  }
}, 3000);

var mousefollower = document.createElement("div");
mousefollower.classList.add("mousefollower");

document.querySelector("main").appendChild(mousefollower);

window.addEventListener("mousemove", function (elem) {
  mousefollower.style.left = elem.clientX + "px";
  mousefollower.style.top = elem.clientY + "px";
});

function isOverlapping(div1, div2) {
  const rect1 = div1.getBoundingClientRect();
  const rect2 = div2.getBoundingClientRect();

  console.log(rect1.right);
  console.log(rect2.left);

  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

middle.addEventListener("mouseover", function (elem) {
  if (elem.target != middle) {
    mousefollower.style.height = "20px";
    mousefollower.style.width = "20px";
    // mousefollower.style.transform = "translate(-50%,-50%)"
  }
});
middle.addEventListener("mouseout", function (elem) {
  if (elem.target != middle) {
    mousefollower.style.height = "10px";
    mousefollower.style.width = "10px";
  }
});
let right = document.querySelector(".right");

right.addEventListener("mouseover", function (elem) {
  if (elem.target != right) {
    mousefollower.style.height = "20px";
    mousefollower.style.width = "20px";
  }
});
right.addEventListener("mouseout", function (elem) {
  if (elem.target != right) {
    mousefollower.style.height = "10px";
    mousefollower.style.width = "10px";
  }
});

let hindi = document.querySelector("#hindi");
let english = document.querySelector("#english");
let malayalam = document.querySelector("#malayalam");
let tamil = document.querySelector("#tamil");
let telugu = document.querySelector("#telugu");
let marathi = document.querySelector("#marathi");

hindi.addEventListener("mouseover", function (det) {
  if (det.target != hindi) {
    mousefollower.style.height = "40px";
    mousefollower.style.width = "40px";
    mousefollower.textContent = "Hindi";
    mousefollower.style.border = "none";
    mousefollower.style.fontSize = "1.5rem";
  }
});
hindi.addEventListener("mouseout", function (det) {
  if (det.target != img6) {
    mousefollower.style.height = "10px";
    mousefollower.style.width = "10px";
    mousefollower.style.border = "1px solid white";
    mousefollower.textContent = ``;
    mousefollower.style.fontSize = "3rem";
  }
});
english.addEventListener("mouseover", function (det) {
  if (det.target != english) {
    mousefollower.style.height = "40px";
    mousefollower.style.width = "40px";
    mousefollower.textContent = "English";
    mousefollower.style.border = "none";
    mousefollower.style.fontSize = "1.5rem";
  }
});
english.addEventListener("mouseout", function (det) {
  if (det.target != img6) {
    mousefollower.style.height = "10px";
    mousefollower.style.width = "10px";
    mousefollower.style.border = "1px solid white";
    mousefollower.textContent = ``;
    mousefollower.style.fontSize = "3rem";
  }
});
tamil.addEventListener("mouseover", function (det) {
  if (det.target != tamil) {
    mousefollower.style.height = "40px";
    mousefollower.style.width = "40px";
    mousefollower.textContent = "Tamil";
    mousefollower.style.border = "none";
    mousefollower.style.fontSize = "1.5rem";
  }
});
tamil.addEventListener("mouseout", function (det) {
  if (det.target != img6) {
    mousefollower.style.height = "10px";
    mousefollower.style.width = "10px";
    mousefollower.style.border = "1px solid white";
    mousefollower.textContent = ``;
    mousefollower.style.fontSize = "3rem";
  }
});
telugu.addEventListener("mouseover", function (det) {
  if (det.target != telugu) {
    mousefollower.style.height = "40px";
    mousefollower.style.width = "40px";
    mousefollower.textContent = "Telugu";
    mousefollower.style.border = "none";
    mousefollower.style.fontSize = "1.5rem";
  }
});
telugu.addEventListener("mouseout", function (det) {
  if (det.target != img6) {
    mousefollower.style.height = "10px";
    mousefollower.style.width = "10px";
    mousefollower.style.border = "1px solid white";
    mousefollower.textContent = ``;
    mousefollower.style.fontSize = "3rem";
  }
});

let romance = document.querySelector("#romance");
let drama = document.querySelector("#drama");
let family = document.querySelector("#family");
let reality = document.querySelector("#reality");
let comedy = document.querySelector("#comedy");
let crime = document.querySelector("#crime");

romance.addEventListener("mouseover", function (det) {
  if (det.target != romance) {
    mousefollower.style.height = "40px";
    mousefollower.style.width = "40px";
    mousefollower.textContent = "Romance";
    mousefollower.style.border = "none";
    mousefollower.style.fontSize = "1.5rem";
  }
});
romance.addEventListener("mouseout", function (det) {
  if (det.target != romance) {
    mousefollower.style.height = "10px";
    mousefollower.style.width = "10px";
    mousefollower.style.border = "1px solid white";
    mousefollower.textContent = ``;
    mousefollower.style.fontSize = "3rem";
  }
});

drama.addEventListener("mouseover", function (det) {
  if (det.target != drama) {
    mousefollower.style.height = "40px";
    mousefollower.style.width = "40px";
    mousefollower.textContent = "Drama";
    mousefollower.style.border = "none";
    mousefollower.style.fontSize = "1.5rem";
  }
});
drama.addEventListener("mouseout", function (det) {
  if (det.target != drama) {
    mousefollower.style.height = "10px";
    mousefollower.style.width = "10px";
    mousefollower.style.border = "1px solid white";
    mousefollower.textContent = ``;
    mousefollower.style.fontSize = "3rem";
  }
});

family.addEventListener("mouseover", function (det) {
  if (det.target != family) {
    mousefollower.style.height = "40px";
    mousefollower.style.width = "40px";
    mousefollower.textContent = "Family";
    mousefollower.style.border = "none";
    mousefollower.style.fontSize = "1.5rem";
  }
});
family.addEventListener("mouseout", function (det) {
  if (det.target != family) {
    mousefollower.style.height = "10px";
    mousefollower.style.width = "10px";
    mousefollower.style.border = "1px solid white";
    mousefollower.textContent = ``;
    mousefollower.style.fontSize = "3rem";
  }
});

reality.addEventListener("mouseover", function (det) {
  if (det.target != reality) {
    mousefollower.style.height = "40px";
    mousefollower.style.width = "40px";
    mousefollower.textContent = "Reality";
    mousefollower.style.border = "none";
    mousefollower.style.fontSize = "1.5rem";
  }
});
reality.addEventListener("mouseout", function (det) {
  if (det.target != reality) {
    mousefollower.style.height = "10px";
    mousefollower.style.width = "10px";
    mousefollower.style.border = "1px solid white";
    mousefollower.textContent = ``;
    mousefollower.style.fontSize = "3rem";
  }
});

comedy.addEventListener("mouseover", function (det) {
  if (det.target != comedy) {
    mousefollower.style.height = "40px";
    mousefollower.style.width = "40px";
    mousefollower.textContent = "Comedy";
    mousefollower.style.border = "none";
    mousefollower.style.fontSize = "1.5rem";
  }
});
comedy.addEventListener("mouseout", function (det) {
  if (det.target != comedy) {
    mousefollower.style.height = "10px";
    mousefollower.style.width = "10px";
    mousefollower.style.border = "1px solid white";
    mousefollower.textContent = ``;
    mousefollower.style.fontSize = "3rem";
  }
});

let newshow = document.querySelectorAll(".newshow");
let searchinput = document.querySelector(".searchinput");

newshow.forEach((newshow) => {
  newshow.addEventListener("mouseover", function () {
    mousefollower.style.height = "60px";
    mousefollower.style.width = "60px";
    mousefollower.style.backgroundColor = "rgba(27, 27, 152, 1)";
    mousefollower.innerHTML = `<i class="ri-play-fill"></i>`;
  });
  newshow.addEventListener("mouseout", function (det) {
    mousefollower.style.height = "5px";
    mousefollower.style.width = "5px";
    mousefollower.style.backgroundColor = "transparent";
    mousefollower.innerHTML = ``;
  });
});

let search1 = document.querySelector("#search1");

search1.addEventListener("click", function () {
  searchinput.style.display = "initial";
  search1.style.display = "none";
});

let searchbtn = document.querySelector(".searchbtn");

searchbtn.addEventListener("click", function () {
  searchinput.style.display = "none";
  search1.style.display = "initial";
});
