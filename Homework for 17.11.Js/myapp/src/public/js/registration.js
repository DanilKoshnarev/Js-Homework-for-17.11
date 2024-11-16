document.getElementById('registrationForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('/auth/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, email, password })
  });

  const result = await response.json();
  if (response.ok) {
    alert('Registration successful');
  } else {
    alert(`Error: ${result.message}`);
  }
});
