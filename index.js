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

// WORKS SECTION
const workSection = document.querySelector('#work-section');

// DYNAMICALLY POPULATE PORTFOLIO SECTION

const portfolioItems = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'static/images/work-image-5.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: '',
    sourceLink: '',
    category: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
  },
  {
    name: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    featuredImage: 'static/images/work-image-4.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveLink: '',
    sourceLink: '',
    category: 'FACEBOOK',
    stack: 'Full Stack Dev',
    year: '2015',
  },
  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    featuredImage: 'static/images/work-image-1.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveLink: '',
    sourceLink: '',
    category: 'FACEBOOK',
    stack: 'Full Stack Dev',
    year: '2015',
  },
  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    featuredImage: 'static/images/work-image-6.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveLink: '',
    sourceLink: '',
    category: 'Uber',
    stack: 'Lead Developer',
    year: '2018',
  },
];

let portfolioSection = '';
portfolioItems.forEach((item, index) => {
  let technologies = '';
  item.technologies.forEach((tech) => {
    technologies += `<li class="stackbar-item">${tech}</li>`;
  });
  const portfolioItem = `
    <div class="card">
      <img src="${item.featuredImage}" alt="Tonic" />
      <div class="card-description">
        <h2>${item.name}</h2>
        <div class="work-item-bar">
          <span>${item.category}</span>
          <ul>
            <li>${item.stack}</li>
            <li>${item.year}</li>
          </ul>
        </div>
        <p class="color-dark">${item.description}</p>
        <ul class="stackbar">
          ${technologies}
        </ul>
        <button id="portfolio-button-${index}" class="see-project-button button-style-1">See Project</button>
      </div>
    </div>`;
  portfolioSection += portfolioItem;
});

workSection.innerHTML += portfolioSection;

// POPUP MENU
const seeProjectButtons = document.querySelectorAll('.see-project-button');
const popupMenuContainer = document.querySelector('#popup-menu-container');
seeProjectButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const buttonIndex = Number(e.target.id.split('-')[2]);
    const portfolioItem = portfolioItems[buttonIndex];

    let technologies = '';
    portfolioItem.technologies.forEach((tech) => {
      technologies += `<li class="stackbar-item">${tech}</li>`;
    });

    popupMenuContainer.innerHTML = `
    <div id="popup-menu">
      <div id="popup-menu-header">
        <h2>${portfolioItem.name}</h2>
        <span class="material-symbols-outlined" id="close-popup-menu">
          &times;
        </span>
      </div>
      <ul>
        <li><strong>${portfolioItem.category}</strong></li>
        <li>${portfolioItem.stack}</li>
        <li>${portfolioItem.year}</li>
      </ul>
      <img src="${portfolioItem.featuredImage}">
      <div id="popup-menu-footer">
        <p>${portfolioItem.description}</p>
        <div id="popup-menu-footer-right">
          <ul class="stackbar">
            ${technologies}
          </ul>
          <hr>
          <div id="popup-buttons">
            <button class="button-style-1">
              See Live
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
            <button class="button-style-1">
              See Source
              <i class="fa-brands fa-github"></i>
            </button>
          </div>
        </div>
      </div>
    </div>`;

    popupMenuContainer.style.display = 'flex';
    document.querySelector('#close-popup-menu').addEventListener('click', () => {
      popupMenuContainer.style.display = 'none';
    });
  });
});

// FORM VALIDATION

const email = document.querySelector('.form-email');


function validateForm(e) {

  if (email.value !== email.value.toLowerCase()) {
    document.querySelector('#errorMessage').style.display = 'block';
    e.preventDefault();
    e.stopPropagation();
  }
}

const contactForm = document.forms['contact-form'];
contactForm.addEventListener('submit', validateForm);