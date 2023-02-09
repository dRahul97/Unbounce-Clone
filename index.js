let count = 0;
let search = document.querySelector(".search-box");
let searchBtn = document.querySelector(".search-btn");
let searchText = document.querySelector(".search-txt");

searchBtn.addEventListener("click", function () {
  count++;
  if (count % 2 == 0) {
    searchText.style.width = "0px";
  } else {
    searchText.style.width = "150px";
    searchText.style.padding = "0 6px";
    searchText.style.transition = "0.5s";
  }
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let image = document.getElementById("myLogo");
  let nav = document.querySelector("#nav-container");
  let midSection = document.querySelectorAll("#mid-section ul li a");
  let searchBtn = document.querySelector(".search-btn");
  let login = document.querySelector("#login");
  let logText = document.querySelector("#login a");
  let trial = document.querySelector("#trial");
  let trialText = document.querySelector("#trial a");

  if (document.documentElement.scrollTop > 90) {
    image.src =
      "https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon-dark.svg?v=1";
    nav.style.backgroundColor = "white";
    nav.style.height = "70px";
    nav.style.transition = "0.3s";
    nav.style.boxShadow = "11px 15px 29px 0 rgb(48 48 48 / 7%)";

    searchBtn.style.color = "#303030";
    search.style.top = "15%";
    search.style.left = "58%";

    login.style.border = "2px solid blue";
    login.style.backgroundColor = "white";
    logText.style.color = "blue";
    logText.style.fontWeight = "600";

    trial.style.border = "2px solid blue";
    trial.style.backgroundColor = "blue";
    trialText.style.color = "white";

    for (let i = 0; i < midSection.length; i++) {
      let el = midSection[i];
      el.style.color = "#303030";
    }
    //for login box
    login.onmouseover = function () {
      mouseOver();
    };
    login.onmouseout = function () {
      mouseOut();
    };

    function mouseOver() {
      login.style.backgroundColor = "blue";
      logText.style.color = "white";
    }

    function mouseOut() {
      login.style.backgroundColor = "white";
      logText.style.color = "blue";
    }
    ///for trial box
    trial.onmouseover = function () {
      mouseOver1();
    };
    trial.onmouseout = function () {
      mouseOut1();
    };

    function mouseOver1() {
      trial.style.backgroundColor = "white";
      trialText.style.color = "blue";
    }

    function mouseOut1() {
      trial.style.backgroundColor = "blue";
      trialText.style.color = "white";
    }
  } else {
    nav.style.backgroundColor = "#303030";
    nav.style.height = "90px";

    searchBtn.style.color = "white";
    search.style.top = "22%";
    search.style.left = "58%";

    login.style.border = "2px solid white";
    login.style.backgroundColor = "#303030";
    logText.style.color = "white";
    logText.style.fontWeight = "600";

    trial.style.border = "2px solid white";
    trial.style.backgroundColor = "white";
    trialText.style.color = "#303030";

    for (let i = 0; i < midSection.length; i++) {
      let el = midSection[i];
      el.style.color = "white";
    }
    login.onmouseover = function () {
      mouseOver();
    };
    login.onmouseout = function () {
      mouseOut();
    };

    function mouseOver() {
      login.style.backgroundColor = "rgb(88, 88, 88)";
      logText.style.color = "white";
    }

    function mouseOut() {
      login.style.backgroundColor = "#303030";
      logText.style.color = "white";
    }
    trial.onmouseover = function () {
      mouseOver1();
    };
    trial.onmouseout = function () {
      mouseOut1();
    };

    function mouseOver1() {
      trial.style.backgroundColor = "rgb(88, 88, 88)";
      trialText.style.color = "white";
    }

    function mouseOut1() {
      trial.style.backgroundColor = "#303030";
      trialText.style.color = "white";
    }
    image.src =
      "https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon.svg?v=1";
  }
}
