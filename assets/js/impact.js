const expandButtons = document.querySelectorAll('.expand-button');
const infoContainer = document.querySelector('.info-impact');
const infoContent = document.querySelector('.info-content');

expandButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const infoText = button.getAttribute('data-info');
    infoContent.innerText = infoText;
    infoContent.classList.add('active');
    expandButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Scroll to the expanded content with a transition
    const containerRect = infoContainer.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    const offset = buttonRect.top - containerRect.top;
    infoContainer.style.transition = 'transform 1s';
    infoContainer.style.transform = `translateY(-${offset}px)`;
  });
});

// Set the first button's info as active initially
expandButtons[0].click();

// ScrollReveal initialization
ScrollReveal().reveal('.button-impact', {
  distance: '20px',
  origin: 'left',
  interval: 100,
});
ScrollReveal().reveal('.info-impact', {
  distance: '20px',
  origin: 'right',
});
