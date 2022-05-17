const colors = [
  "blue",
  "white",
  "red",
  "green",
  "orange",
  "black",
  "yellow",
  "cobalt",
];

const Btn = document.getElementById("btn");
const stripeLeft = document.getElementById("stripeLeft");
const stripeMiddle = document.getElementById("stripeMiddle");
const stripeRight = document.getElementById("stripeRight");

Btn.addEventListener("click", function onClick() {
  function getRandomColors() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let index = colors.indexOf(randomColor);
    colors.splice(index, 1);
    return randomColor;
  }
  function giveColors() {
    stripeLeft.className = getRandomColors() + "-stripe";
    stripeMiddle.className = getRandomColors() + "-stripe";
    stripeRight.className = getRandomColors() + "-stripe";
  }
  giveColors();
  function refillArray() {
    const left = stripeLeft.className.slice(0, -7);
    const middle = stripeMiddle.className.slice(0, -7);
    const right = stripeRight.className.slice(0, -7);
    colors.push(left, middle, right);
    function setGradientColors() {
      Btn.style.background =
        "linear-gradient(to right, " +
        left +
        ", " +
        middle +
        ", " +
        right +
        ")";
    }
    setGradientColors();
  }
  refillArray();
  function resultOfColors() {
    if (
      stripeLeft.className == "blue-stripe" &&
      stripeMiddle.className == "white-stripe" &&
      stripeRight.className == "red-stripe"
    ) {
      alert("Pour voir la FRANCE clique sur OK");
      const classButton = Btn;
      classButton.className = stripeMiddle.className;
    } else if (
      stripeLeft.className == "green-stripe" &&
      stripeMiddle.className == "white-stripe" &&
      stripeRight.className == "red-stripe"
    ) {
      alert("Pour voir l'ITALIE clique sur OK");
      const classButton = Btn;
      classButton.className = stripeMiddle.className;
    } else if (
      stripeLeft.className == "orange-stripe" &&
      stripeMiddle.className == "white-stripe" &&
      stripeRight.className == "green-stripe"
    ) {
      alert("Pour voir la CÔTE-D'IVOIRE clique sur OK");
      const classButton = Btn;
      classButton.className = stripeMiddle.className;
    } else if (
      stripeLeft.className == "green-stripe" &&
      stripeMiddle.className == "white-stripe" &&
      stripeRight.className == "orange-stripe"
    ) {
      alert("Pour voir l'IRLANDE clique sur OK");
      const classButton = Btn;
      classButton.className = stripeMiddle.className;
    } else if (
      stripeLeft.className == "black-stripe" &&
      stripeMiddle.className == "yellow-stripe" &&
      stripeRight.className == "red-stripe"
    ) {
      alert("Pour voir la BELGIQUE clique sur OK");
      const classButton = Btn;
      classButton.className = stripeMiddle.className;
    } else if (
      stripeLeft.className == "red-stripe" &&
      stripeMiddle.className == "yellow-stripe" &&
      stripeRight.className == "green-stripe"
    ) {
      alert("Pour voir la GUINEE clique sur OK");
      const classButton = Btn;
      classButton.className = stripeMiddle.className;
    } else if (
      stripeLeft.className == "green-stripe" &&
      stripeMiddle.className == "yellow-stripe" &&
      stripeRight.className == "red-stripe"
    ) {
      alert("Pour voir le MALI clique sur OK");
      const classButton = Btn;
      classButton.className = stripeMiddle.className;
    } else if (
      stripeLeft.className == "cobalt-stripe" &&
      stripeMiddle.className == "yellow-stripe" &&
      stripeRight.className == "red-stripe"
    ) {
      alert("Pour voir la ROUMANIE clique sur OK");
      const classButton = Btn;
      classButton.className = stripeMiddle.className;
    }
  }
  resultOfColors();
});
