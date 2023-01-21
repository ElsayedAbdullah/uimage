const maleBtn = document.querySelector('.male');
const femaleBtn = document.querySelector('.female');
const picture = document.querySelector('.image-wrapper');
const colorInput = document.querySelector('input[type="color"]');
const coloredCircles = document.querySelectorAll('.color-circle');

maleBtn.addEventListener('click', () => {
  clikingGender();
});

femaleBtn.addEventListener('click', () => {
  clikingGender();
});

function clikingGender() {
  maleBtn.classList.toggle('active');
  femaleBtn.classList.toggle('active');

  if (maleBtn.classList.contains('active') == true) {
    picture.innerHTML = `<img id="display-picture" src="images/male-1.png" alt="">`;
  }

  if (femaleBtn.classList.contains('active') == true) {
    picture.innerHTML = `<img id="display-picture" src="images/female-1.png" alt="">`;
  }
}

// change the background for the image when clicking on default colors
coloredCircles.forEach((circle, idx) => {
  circle.addEventListener('click', () => {
    // remove picked class from all circles
    coloredCircles.forEach((circle) => {
      circle.classList.remove('picked');
    });

    // add picked class to clicked circle
    coloredCircles[idx].classList.add('picked');

    let pickedColor = circle.style.background;
    if (idx == 0) {
      picture.style.backgroundImage = 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.2)), url(/images/pattern.png)';
    } else if (idx > 1) {
      //   picture.style.background = 'none';
      picture.style.background = pickedColor;
    }
  });
});

// change the background color of the image when clikcing on color palettes
colorInput.addEventListener('change', () => {
  picture.style.background = colorInput.value;
});
