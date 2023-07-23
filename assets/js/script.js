const expandButtons = document.querySelectorAll('.expand-button');
const infoImpact = document.querySelector('.info-impact');
const infoContent = document.querySelector('.info-content');

expandButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const infoText = button.getAttribute('data-info');
    infoContent.innerText = infoText;
    infoContent.classList.add('active');
    expandButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// Set the first button's info as active initially
expandButtons[0].click();
