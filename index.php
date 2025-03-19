<?php
// Check for POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = filter_input(INPUT_POST, "username");
    $mail = filter_input(INPUT_POST, "email",FILTER_SANITIZE_EMAIL);
    
    // Initialize error array
    $error = [];
    
    // Validate username
    if (strtolower($user) == "admin") {
        $error[] = "You don't have access to use this name.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <link rel="stylesheet" href="form.css">
</head>

<body>
    <form id="form" class="for" action="" method="post">
        <h1>LOGIN</h1>
        <p style="margin-bottom: 10px; color: red;">
            <?php 
            if (isset($error)) {
                foreach ($error as $message) {
                    echo htmlspecialchars($message) . "<br>";
                }
            } 
            ?>
        </p>
        <input id="user" type="text" name="username" placeholder="Username">
        <p id="error_user" style="margin-bottom: 10px; color: red;"></p>
        <input id="email" type="email" name="email" placeholder="Email">
        <p id="error_email" style="margin-bottom: 10px; color: red;"></p>
        <input id="submit" type="submit" value="SEND" style="background-color: #ff8906;">
    </form>
    <!-- JavaScript -->
    <script src="form.js"></script>
</body>

</html>