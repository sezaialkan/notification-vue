const timer = (element, time) => {
  let width = 1;
  let increment = 100 / (time / 10);
  let interval = setInterval(frame, 10);

  function frame() {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width += increment;
      element.style.width = width + "%";
    }
  }
};

export default timer;
