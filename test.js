// Get elements
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');

// Function to open modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
  modal.style.display = 'none';
}

// Event listeners
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// Optional: close modal when clicking outside content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});