const eyes = document.querySelectorAll('.eye');
const container = document.querySelector('.container');
const containerRect = container.getBoundingClientRect();
const containerX = containerRect.left + containerRect.width / 2;
const containerY = containerRect.top + containerRect.height / 2;
let currentRedColorNumber = 255;
let currentWhiteColorNumber = 255;

window.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const angle = calculateAngle(mouseX, mouseY, containerX, containerY)
  eyes.forEach(eye => {
    eye.style.transform = 'rotate(' + angle + 'deg)'
    currentRedColorNumber = currentRedColorNumber - 0.1
    currentWhiteColorNumber = currentWhiteColorNumber
    container.style.backgroundColor = `rgb(${currentWhiteColorNumber}, ${currentRedColorNumber}, ${currentRedColorNumber})`
    eye.style.backgroundColor = `rgb(${currentWhiteColorNumber}, ${currentRedColorNumber}, ${currentRedColorNumber})`
    const pupil = eye.querySelector('.pupil');
    pupil.style.filter = `hue-rotate(${angle}deg)`
  })
})

function calculateAngle(mouseX, mouseY, containerX, containerY) {
  const dy = mouseY - containerY;
  const dx = mouseX - containerX;
  const angle = Math.atan2(dy, dx) * 180 / Math.PI
  return angle;
}