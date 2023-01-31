// Get the modal hamburger icon
let modalOpen = document.getElementById('modalOpen');

// Get the modal close icon
let modalClose = document.getElementById('modalClose');

//Get the links modal
let linksModal = document.getElementById('modal');

let backgroundBlur = document.querySelector("body");

//Add event listener that opens the links modal
modalOpen.addEventListener('click', modalOpener);

//Add event listener that closes the links modal
modalClose.addEventListener('click', modalCloser);

