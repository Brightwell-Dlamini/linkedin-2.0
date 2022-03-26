// find all images without alternate text
// and give them a red border
function process() {
  const images = document.querySelectorAll('img:not([alt])');
  images.forEach((image) => {
    image.style.border = '1px solid red';
  });
}
