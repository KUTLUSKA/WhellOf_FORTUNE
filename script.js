(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('#startButton');
  const resetButton = document.querySelector('#resetButton');
  let deg = 0;
  let spinCount = 0;
  const spinDuration = 5;
  const segmentSize = 45;

  const segments = Array.from({ length: 8 }, (_, i) => i * segmentSize);

  startButton.addEventListener('click', () => {
    startButton.style.pointerEvents = 'none';
    startButton.style.opacity = '0.5';

    if (spinCount % 10 === 0) {
      deg = Math.floor(Math.random() * segmentSize);
    } else {
      const randomSegment = segments.slice(1).sort(() => Math.random() - 0.5)[0];
      deg = Math.floor(randomSegment + Math.random() * segmentSize);
    }

    const totalRotation = deg + 360 * 5;
    wheel.style.transition = `all ${spinDuration}s ease-in-out`;
    wheel.style.transform = `rotate(${totalRotation}deg)`;
    wheel.classList.add('blur');

    spinCount++;
    console.log(`Spin Count: ${spinCount}`);
  });

  wheel.addEventListener('transitionend', () => {
    wheel.classList.remove('blur');
    resetButton.style.display = 'block';
  });

  resetButton.addEventListener('click', () => {
    wheel.style.transition = 'none';
    wheel.style.transform = `rotate(0deg)`;
    resetButton.style.display = 'none';
    startButton.style.pointerEvents = 'auto';
    startButton.style.opacity = '1';
  });
})();
