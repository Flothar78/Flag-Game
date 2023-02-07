const availableColors = [
  "blue",
  "white",
  "red",
  "green",
  "orange",
  "black",
  "yellow",
];

const buttonToGetRandomColors = document.getElementById("buttonToChangeColors");
let leftStripe = document.getElementById("left-stripe");
let middleStripe = document.getElementById("middle-stripe");
let rightStripe = document.getElementById("right-stripe");

buttonToGetRandomColors.addEventListener("click", function onClick() {
  giveColorsToStripes();
  refillAvailableColorsArray();
  matchColorsAndCountry();
});

function giveColorsToStripes() {
  leftStripe.className = getRandomColor();
  middleStripe.className = getRandomColor();
  rightStripe.className = getRandomColor();
  console.log(
    leftStripe.className,
    middleStripe.className,
    rightStripe.className
  );
}

function getRandomColor() {
  let randomColor =
    availableColors[Math.floor(Math.random() * availableColors.length)];
  availableColors.splice(availableColors.indexOf(randomColor), 1);
  return randomColor;
}
function refillAvailableColorsArray() {
  availableColors.push(
    leftStripe.className,
    middleStripe.className,
    rightStripe.className
  );
}
function setGradientColorsToButton(deg) {
  buttonToGetRandomColors.style.background = `linear-gradient(${deg}deg, ${leftStripe.className}, ${middleStripe.className}, ${rightStripe.className})`;
}
function matchColorsAndCountry() {
  if (
    leftStripe.className == "blue" &&
    middleStripe.className == "white" &&
    rightStripe.className == "red"
  ) {
    alert("Pour voir la FRANCE clique sur OK");
    setGradientColorsToButton(77);
  } else if (
    leftStripe.className == "green" &&
    middleStripe.className == "white" &&
    rightStripe.className == "red"
  ) {
    alert("Pour voir l'ITALIE clique sur OK");
    setGradientColorsToButton(225);
  } else if (
    leftStripe.className == "orange" &&
    middleStripe.className == "white" &&
    rightStripe.className == "green"
  ) {
    alert("Pour voir la CÔTE-D'IVOIRE clique sur OK");
    setGradientColorsToButton(100);
  } else if (
    leftStripe.className == "green" &&
    middleStripe.className == "white" &&
    rightStripe.className == "orange"
  ) {
    alert("Pour voir l'IRLANDE clique sur OK");
    setGradientColorsToButton(45);
  } else if (
    leftStripe.className == "black" &&
    middleStripe.className == "yellow" &&
    rightStripe.className == "red"
  ) {
    alert("Pour voir la BELGIQUE clique sur OK");
    setGradientColorsToButton(125);
  } else if (
    leftStripe.className == "red" &&
    middleStripe.className == "yellow" &&
    rightStripe.className == "green"
  ) {
    alert("Pour voir la GUINEE clique sur OK");
    setGradientColorsToButton(115);
  } else if (
    leftStripe.className == "green" &&
    middleStripe.className == "yellow" &&
    rightStripe.className == "red"
  ) {
    alert("Pour voir le MALI clique sur OK");
    setGradientColorsToButton(105);
  } else if (
    leftStripe.className == "blue" &&
    middleStripe.className == "yellow" &&
    rightStripe.className == "red"
  ) {
    alert("Pour voir la ROUMANIE clique sur OK");
    setGradientColorsToButton(15);
  }
}
