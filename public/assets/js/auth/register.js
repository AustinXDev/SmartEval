import {notify} from '../../../../resources/components/notify.js';

document.addEventListener("DOMContentLoaded", () => {
  const showConfirmToggle = document.getElementById('showConfirm');
  const hideConfirmToggle = document.getElementById('hideConfirm');
  const showToggle = document.getElementById('show');
  const hiddenToggle = document.getElementById('hidden');
  const inputPassword = document.getElementById('inputPassword');
  const inputConfirmPassword = document.getElementById('inputConfirmPassword');

  // main password
  if (showToggle && hiddenToggle && inputPassword) {
    showToggle.addEventListener('click', () => {
      inputPassword.type = 'password';
      showToggle.classList.add('hidden');
      hiddenToggle.classList.remove('hidden');
    });

    hiddenToggle.addEventListener('click', () => {
      inputPassword.type = 'text';
      hiddenToggle.classList.add('hidden');
      showToggle.classList.remove('hidden');
    });
  }

  // confirm password
  if (showConfirmToggle && hideConfirmToggle && inputConfirmPassword) {
    showConfirmToggle.addEventListener('click', () => {
      inputConfirmPassword.type = 'password';
      showConfirmToggle.classList.add('hidden');
      hideConfirmToggle.classList.remove('hidden');
    });

    hideConfirmToggle.addEventListener('click', () => {
      inputConfirmPassword.type = 'text';
      hideConfirmToggle.classList.add('hidden');
      showConfirmToggle.classList.remove('hidden');
    });
  }
});