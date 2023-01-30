// Get the modal hamburger icon
let modalOpen = document.getElementById('modalOpen');

//GEt the links modal
let linksModal = document.getElementsByClassName('modal');

//Add event listener that opens the links modal
modalOpen.addEventListener('click', modalOpener);

//Function that opens the modal
function modalOpener(){
    linksModal.style.display = "block";
}