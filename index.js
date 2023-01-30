// Get the modal hamburger icon
let modalOpen = document.getElementById('modalOpen');

// Get the modal close icon
let modalClose = document.getElementById('modalClose');

//Get the links modal
let linksModal = document.getElementById('modal');

//Add event listener that opens the links modal
modalOpen.addEventListener('click', modalOpener);

//Add event listener that closes the links modal
modalClose.addEventListener('click', modalCloser);

//Function that opens the modal
function modalOpener(){
    linksModal.style.display = "block";
    modalOpen.style.display = "none";
}

//Function that closes the modal
function modalCloser(){
    linksModal.style.display = "none";
    modalOpen.style.display = "block";
}