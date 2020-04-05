function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(e);

  if (!audio) return; //stop the function from running all together
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip it if it's not a transform
  this.classList.remove("playing");
  // console.log(this);
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);




/* window.addEventListener('click', function (e) { 
  if (e.target.innerText.length == 1) {
  const asciiCode = e.target.innerText.charCodeAt(0); // get the text and convert it to ascii
  const audio = document.querySelector(`audio[data-key="${asciiCode}"]`);
  const key = document.querySelector(`.key[data-key="${asciiCode}"]`);
  if (!audio) return; //stop the function from running all together
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add("playing"); }
}); 

 */


 window.addEventListener('click', function (e) { 
  const asciiCode = e.target.innerText.charCodeAt(0); // get the text and convert it to ascii
  const audio = document.querySelector(`audio[data-key="${asciiCode}"]`);
  const key = document.querySelector(`.key[data-key="${asciiCode}"]`);
  if (!audio) return; //stop the function from running all together
  if(e.target.tagName !== "KBD") return;
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add("playing"); 
});
 