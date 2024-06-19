/**
 * @type HTMLVideoElement
 */
const video = document.getElementById('video');

window.onload = () => {
  video.play();
};

video.addEventListener('click', () => {
  video.play();
});