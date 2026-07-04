const button = document.querySelector(".button");
const image = document.querySelector(".image");

button.addEventListener("click", () => {
  if (image.src.match("off")) {
    image.src = "./bulb on.jpg";
    button.innerHTML = "light of";
  } else {
    image.src = "./bulb off.jpg";
    button.innerHTML = "light of";
  }
  // button.innerHTML = "light on" ? button.innerHTML = "light off" :
});
