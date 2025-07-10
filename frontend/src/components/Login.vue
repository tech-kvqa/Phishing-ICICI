<template>
    <div class="login-page">
        <!-- <nav class="navbar">
            <div class="navbar-brand">
                <img src="Xploit2Secure.jpeg" alt="Logo" class="logo" />
                <h1>SECURE LAB</h1>
                <div class="navbar-buttons">
                    <button @click="openQuestionModal">Manage Questions</button>
                </div> 
            </div>
        </nav> -->

        <div class="login-container">
        <div class="logoBrand"><img src="Xploit2Secure.png" alt="Logo" class="logo" /></div>
            <h2>Login</h2>
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="Username">Username</label>
                    <input type="text" v-model="username" id="username" required />
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" v-model="password" id="password" required />
                </div>

                <button type="submit">Login</button>

                <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            errorMessage: null
        };
    },

    methods: {
        async login() {
            try {
                // const response = await fetch('http://127.0.0.1:5000/login', {
                const response = await fetch('http://35.182.29.153/api/login', {
                // const response = await fetch('https://phishing-application-demo.onrender.com/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: this.username,
                        password: this.password
                    }),
                });

                const result = await response.json();
                if (response.ok) {
                    localStorage.setItem('access_token', result.access_token);
                    localStorage.setItem('username', this.username);
                    this.$router.push('/admin');  // Redirect to dashboard on success
                } else {
                    this.errorMessage = result.message || 'Login failed. Please try again.';
                }
            } catch (error) {
                this.errorMessage = "An error occurred during login. Please try again.";
                console.error(error);
            }
        }
    }
}
</script>

<style scoped>
/* .login-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fb;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #2a4d85;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

input {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4df19f;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #74cff3;
}

.error {
  color: red;
  text-align: center;
  margin-top: 15px;
}

.navbar { */
    /* background-color: #1fe8d7; */
    /* background-color: #26c8bb;
    color: rgb(154, 242, 132);
    padding: 1rem;
    position: relative; */
    /* z-index: 100; */
/* }

.navbar-brand {
    display: flex;
    align-items: center;
}

.logo {
    height: 40px;
    margin-right: 1rem;
}

.navbar-buttons {
    margin-left: auto;
} */

/* General page background */
.login-page {
    background: #1f3557;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
body {
    background: #1f3557;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Navbar styling */
.navbar {
    background-color: #26c8bb;
    color: rgb(154, 242, 132);
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
    display: flex;
    align-items: center;
}

.logo {
    height: 40px;
    margin-right: 1rem;
    transition: transform 0.3s ease;
}

.logo:hover {
    transform: rotate(6deg) scale(1.1);
}

/* Container for the login form */
.login-container {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #f8f9fb;
    border-radius: 12px;
    box-shadow: 0 0px 17px rgb(0 0 0);
    transition: transform 0.3s ease;
}

.login-container:hover {
    transform: scale(1.02);
}

/* Login title */
h2 {
    text-align: center;
    color: #2a4d85;
    font-weight: bold;
    margin-bottom: 20px;
}

/* Form fields */
.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    color: #333;
    text-align: left;
}

input {
    width: 100%;
    padding: 14px;
    border-radius: 8px;
    border: 1px solid #a1a1a1;
    font-size: 14px;
    box-sizing: border-box;
    transition: border-color 0.3s ease;
}

input:focus {
    border-color: #4171bc;
    outline: none;
    box-shadow: 0 0 5px rgb(31 53 87 / 54%);
}

/* Submit button */
button {
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, #144ca0, #1f3456);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;
}

button:hover {
    background: linear-gradient(135deg, #2e486f, #285499);
    /*transform: scale(1.05);*/
}

button:active {
    transform: scale(0.98);
}

/* Error message styling */
.error {
    color: red;
    text-align: center;
    margin-top: 15px;
    font-size: 14px;
}

/* Adding transition effects */
.error, .form-group, h2 {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

</style>