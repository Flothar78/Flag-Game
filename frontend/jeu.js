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
const leftStripe = document.getElementById("left-stripe");
const middleStripe = document.getElementById("middle-stripe");
const rigthStripe = document.getElementById("right-stripe");

buttonToGetRandomColors.addEventListener("click", function onClick() {
  giveColorsToStripes();
  refillArray();
  resultOfColors();
});
function getRandomColors() {
  const randomColor =
    availableColors[Math.floor(Math.random() * availableColors.length)];
  const indexOfRandomColor = availableColors.indexOf(randomColor);
  availableColors.splice(indexOfRandomColor, 1);
  return randomColor;
}
function giveColorsToStripes() {
  leftStripe.className = getRandomColors();
  middleStripe.className = getRandomColors();
  rigthStripe.className = getRandomColors();
}
function refillArray() {
  availableColors.push(
    leftStripe.className,
    middleStripe.className,
    rigthStripe.className
  );
}
function setGradientColorsToButton(deg) {
  buttonToGetRandomColors.style.background = `linear-gradient(${deg}deg, ${leftStripe.className}, ${middleStripe.className}, ${rigthStripe.className})`;
}
function resultOfColors() {
  // matching colors to a country
  if (
    leftStripe.className == "blue" &&
    middleStripe.className == "white" &&
    rigthStripe.className == "red"
  ) {
    alert("Pour voir la FRANCE clique sur OK");
    setGradientColorsToButton(77);
  } else if (
    leftStripe.className == "green" &&
    middleStripe.className == "white" &&
    rigthStripe.className == "red"
  ) {
    alert("Pour voir l'ITALIE clique sur OK");
    setGradientColorsToButton(177);
  } else if (
    leftStripe.className == "orange" &&
    middleStripe.className == "white" &&
    rigthStripe.className == "green"
  ) {
    alert("Pour voir la CÔTE-D'IVOIRE clique sur OK");
    setGradientColorsToButton(45);
  } else if (
    leftStripe.className == "green" &&
    middleStripe.className == "white" &&
    rigthStripe.className == "orange"
  ) {
    alert("Pour voir l'IRLANDE clique sur OK");
    setGradientColorsToButton(100);
  } else if (
    leftStripe.className == "black" &&
    middleStripe.className == "yellow" &&
    rigthStripe.className == "red"
  ) {
    alert("Pour voir la BELGIQUE clique sur OK");
    setGradientColorsToButton(2);
  } else if (
    leftStripe.className == "red" &&
    middleStripe.className == "yellow" &&
    rigthStripe.className == "green"
  ) {
    alert("Pour voir la GUINEE clique sur OK");
    setGradientColorsToButton(125);
  } else if (
    leftStripe.className == "green" &&
    middleStripe.className == "yellow" &&
    rigthStripe.className == "red"
  ) {
    alert("Pour voir le MALI clique sur OK");
    setGradientColorsToButton(103);
  } else if (
    leftStripe.className == "blue" &&
    middleStripe.className == "yellow" &&
    rigthStripe.className == "red"
  ) {
    alert("Pour voir la ROUMANIE clique sur OK");
    setGradientColorsToButton(56);
  }
}
