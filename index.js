// Get the modal hamburger icon
const modalOpen = document.getElementById('modalOpen');

// Get the modal close icon
const modalClose = document.getElementById('modalClose');

// Get the links modal
const linksModal = document.getElementById('modal');

const backgroundBlur = document.querySelector('body');

// Get nav page links
const about = document.getElementById('about-1');
const contact = document.getElementById('contact-1');
const portfolio = document.getElementById('portfolio-1');

// Function that opens the modal
function modalOpener() {
  linksModal.classList.remove('hidden');
  linksModal.classList.add('overlay');
  modalOpen.classList.add('hidden');
  backgroundBlur.classList.add('background-blur');
}

// Function that closes the modal
function modalCloser() {
  linksModal.classList.add('hidden');
  linksModal.classList.remove('overlay');
  modalOpen.classList.remove('hidden');
  backgroundBlur.classList.remove('background-blur');
}

// Function to close the modal if outside is clicked
function outsideClick(e) {
  if (e.target === linksModal) {
    linksModal.classList.add('hidden');
    modalOpen.classList.remove('hidden');
    backgroundBlur.classList.remove('background-blur');
  }
}

// Function for about blur removal
function removeBlur() {
  backgroundBlur.classList.remove('background-blur');
}

// Add event listener that opens the links modal
modalOpen.addEventListener('click', modalOpener);

// Add event listener that closes the links modal
modalClose.addEventListener('click', modalCloser);

// Listen for outside click
window.addEventListener('click', outsideClick);

// Listen for about link click
about.addEventListener('click', removeBlur);
about.addEventListener('click', modalCloser);

// Listen for contact link click
contact.addEventListener('click', removeBlur);
contact.addEventListener('click', modalCloser);

// Listen for portfolio link click
portfolio.addEventListener('click', removeBlur);
portfolio.addEventListener('click', modalCloser);
