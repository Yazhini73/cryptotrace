const navItems = document.querySelectorAll('.nav-item');
const screens = document.querySelectorAll('.screen');

navItems.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.screen;

    navItems.forEach((item) => item.classList.toggle('active', item === button));
    screens.forEach((screen) => {
      screen.classList.toggle('active', screen.dataset.screen === target);
    });
  });
});

const countdownEl = document.querySelector('.countdown');
if (countdownEl) {
  let remaining = 3 * 3600 + 14 * 60 + 52;

  const updateCountdown = () => {
    const hours = String(Math.floor(remaining / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((remaining % 3600) / 60)).padStart(2, '0');
    const seconds = String(remaining % 60).padStart(2, '0');
    countdownEl.textContent = `${hours}:${minutes}:${seconds}`;
    remaining = remaining > 0 ? remaining - 1 : 0;
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);
}
