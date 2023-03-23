const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errorElement = document.getElementById('error');
form.addEventListener('submit', (e) => {
  let messages = [];
  if (fname.value === '' || fname.value == null) {
    messages.push('First name is required');
  }
  if (lname.value === '' || lname.value == null) {
    messages.push('Last name is required');
  }
  if (email.value.indexOf('@') === -1) {
    messages.push('Email address is invalid');
  }
  if (password.value.length < 8) {
    messages.push('Password must be at least 8 characters');
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  }
});