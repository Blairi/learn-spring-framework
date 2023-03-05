<html>
<head>
	<link href="webjars/bootstrap/5.1.3/css/bootstrap.min.css" rel="stylesheet">
	<title>Login page</title>
</head>
<body>
	<div class="container">
	<h1>Welcome to the login page!</h1>
	<pre>${invalidCredentials}</pre>
	<form method="POST">
		Name: <input type="text" name="name" />
		Password: <input type="password" name="password" />
		<input type="submit" />
	</form>
	</div>
	<script src="webjars/bootstrap/5.1.3/css/bootstrap.min.js"></script>
	<script src="webjars/jquery/3.6.0/jquey.min.js"></script>
</body>
</html>