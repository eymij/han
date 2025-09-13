function openBirthday() {
  window.open("envelope.html", "_blank");
}


const message = "Happiest Birthday, Han! 💖🎉\n\nYou make the world brighter.\nNever stop being you. 🌸";

let index = 0;
const speed = 50;

function typeWriter() {
  if (index < message.length) {
    document.getElementById("message").textContent += message.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;


document.addEventListener("DOMContentLoaded", function () {
  const message = `Happy Birthday, Han! 🥳 I hope you’re enjoying your day! I just want to tell you that I’m happy that I met you! 
You deserve all the good things that happen to you. Proud of you always.✨🩷🎉`;

  const target = document.getElementById("typedMessage");
  let index = 0;

  function typeChar() {
    if (index < message.length) {
      target.textContent += message.charAt(index);
      index++;
      setTimeout(typeChar, 25); // speed of typing in ms
    }
  }

  typeChar();
});

//confetti
// 🎉 First: Confetti pops
confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 }
});

// 😄 Then: Falling emojis after 1.5 seconds
setTimeout(() => {
  startEmojiRain();
}, 1500);

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s"; // 2–5s
  document.getElementById("heart-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 500);




