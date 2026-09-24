// Trade Avata auth entry point. The production build loads Firebase through src/lib/firebase.js.
// This tiny browser module stays dormant until Firebase configuration is present.
const form = document.querySelector('#login-form') || document.querySelector('#register-form');
const message = document.querySelector('#auth-message');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (message) message.textContent = 'Firebase is not connected in this preview yet. Add the project environment variables, then this form can use Firebase Authentication.';
});
