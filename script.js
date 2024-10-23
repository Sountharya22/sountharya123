/* style.css */

body {
	font-family:
'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	margin: 0;
	padding: 0;
	background-color: #f0f0f0;
}

#app {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

header {
	background-color: #2f8d46;
	color: white;
	text-align: center;
	padding: 1em;
}

nav {
	background-color: #4caf50;
}

nav ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
}

nav li {
	margin: 0;
}

nav a {
	text-decoration: none;
	color: #fff;
	padding: 1em;
	display: block;
	transition: background-color 0.3s ease;
}

nav a:hover {
	background-color: #45a049;
}

main {
	flex: 1;
	padding: 1em;
}

#content {
	max-width: 1000px;
	margin: 0 auto;
	background-color: #fff;
	padding: 20px;
	border-radius: 8px;
	box-shadow:
0 0 10px rgba(0, 0, 0, 0.1);
}

#content h2 {
	color: #2f8d46;
}

#content img {
	width: 400px;
	height: auto;
	margin: 0 auto;
	display: block;
	border-radius: 10px;
	box-shadow: 
2px 2px 5px rgba(0, 0, 0, 0.2);
	border: 3px solid #2F8D46;
}

form {
	max-width: 400px;
	margin: 20px auto;
	padding: 20px;
	background-color: #f0f0f0;
	border-radius: 8px;
	box-shadow: 
0 0 10px rgba(0, 0, 0, 0.1);
}

form label {
	display: block;
	margin-bottom: 8px;
}

form input,
form textarea {
	width: 100%;
	padding: 8px;
	margin-bottom: 16px;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 4px;
}

form button {
	background-color: #4caf50;
	color: #fff;
	padding: 10px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: 
background-color 0.3s ease;
}

form button:hover {
	background-color: #45a049;
}
