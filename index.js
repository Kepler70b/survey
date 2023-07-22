var loginName = ``;

let inp = document.getElementById("login-input");
inp.addEventListener("input", (e) => {
  let val = e.target.value;
  if (val.length > 5 && val.includes("@")) {
    loginName = val.substring(0, 4);
  } else {
    loginName = val;
  }
  //   console.log(val);
});

$("#next-btn").on("click", (e) => {
  $(".ffade-in").removeClass("show");

  setTimeout(() => {
    $(".ffade-in").css("display", "none");
    $("#survey-form-main").css("display", "block");
  }, 1000);
});

const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  let x = date.getDate();
  if (x >= 24) {
    myStopFunction();
    showCelebrate();
  }
  //   document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}

function myStopFunction() {
  clearInterval(myInterval);
}

function showCelebrate() {
  $(".ffade-in").css("display", "none");
  $("#survey-form-main").css("display", "none");
  $(".cake-container-hidden")
    .addClass("cake-container")
    .removeClass("cake-container-hidden");
  $("body").css("background-color", "var(--custpurple)");
  setInterval(function () {
    lines();
  }, 200);
}

function lines() {
  let sizeW = Math.random() * 12;
  let duration = Math.random() * 3;
  let e = document.createElement("div");
  e.setAttribute("class", "circle");
  document.body.appendChild(e);
  e.style.width = 2 + sizeW + "px";
  e.style.left = Math.random() * +innerWidth + "px";
  e.style.animationDuration = 2 + duration + "s";

  setTimeout(function () {
    document.body.removeChild(e);
  }, 5000);
}
