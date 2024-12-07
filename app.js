// Get references to the buttons and form fields
let SignUpbtn = document.getElementById("SignUpbtn");
let SignInbtn = document.getElementById("SignInbtn");
let namechange = document.getElementById("namechange");
let title = document.getElementById("title");

// Toggle between Sign Up and Sign In views
SignInbtn.onclick = function () {
  namechange.style.maxHeight = "0"; // Hide the name field for Sign In
  title.innerHTML = "Sign In"; // Change the title to "Sign In"
  SignUpbtn.classList.add("band"); // Disable the Sign Up button
  SignInbtn.classList.remove("band"); // Enable the Sign In button
};

SignUpbtn.onclick = function () {
  namechange.style.maxHeight = "65px"; // Show the name field for Sign Up
  title.innerHTML = "Sign Up"; // Change the title to "Sign Up"
  SignUpbtn.classList.remove("band"); // Enable the Sign Up button
  SignInbtn.classList.add("band"); // Disable the Sign In button
};

// Sign Up button click event
SignUpbtn.onclick = function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  
  if (email && password) {
    // Save email and password to localStorage
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("Sign Up successful!");
    clearForm(); // Clear the form after sign-up
  } else {
    alert("Please fill in all fields!");
  }
};

// Sign In button click event
SignInbtn.onclick = function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Retrieve saved email and password from localStorage
  let savedEmail = localStorage.getItem("email");
  let savedPassword = localStorage.getItem("password");

  if (email === savedEmail && password === savedPassword) {
    alert("Login Successful!");
    window.location.href = "welcome.html"; // Redirect to welcome page
  } else {
    alert("Wrong Email or Password!");
  }
};

// Function to clear form fields after sign-up
function clearForm() {
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("name").value = "";
}
