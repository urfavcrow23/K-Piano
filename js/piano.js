// Select all keys, note display, and hints
const keys = document.querySelectorAll(".key"),
  note = document.querySelector(".nowplaying"),
  hints = document.querySelectorAll(".hints");

// Function to play the corresponding note when a key is pressed
function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // If no key is found, exit the function
  if (!key) return;

  const keyNote = key.getAttribute("data-note");

  // Add 'playing' class, set note text, and play audio
  key.classList.add("playing");
  note.innerHTML = keyNote;
  audio.currentTime = 0; // Reset audio to start
  audio.play();
}

// Function to remove the 'playing' class when the transition ends
function removeTransition(e) {
  if (e.propertyName !== "transform") return; // Ensure the transition is for 'transform'
  this.classList.remove("playing");
}

// Function to set transition delays for hint elements
function hintsOn(e, index) {
  e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

// Add transition delays to each hint
hints.forEach(hintsOn);

// Remove 'playing' class when the transition ends on each key
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// Listen for keydown events to trigger the playNote function
window.addEventListener("keydown", playNote);
