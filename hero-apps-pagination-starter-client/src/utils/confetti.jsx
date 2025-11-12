import confetti from "canvas-confetti";
let end = "";
export default function frame(time) {
  if (!end) {
    end = Date.now() + time * 1000;
  }
  console.log(end);
  // go Buckeyes!
  let colors = ["#DAA520", "#392f5a"];
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors,
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors,
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  } else {
    end = "";
  }
}
