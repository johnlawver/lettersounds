const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playSound(e.target.id);
  });
});

const playSound = (sound) => new Audio(`./sounds/${sound}.mp3`).play();

addEventListener("keydown", (e) => {
  playSound(e.key.toLocaleUpperCase());
});
