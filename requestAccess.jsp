<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Request Access</title>
</head>
<body>
    <h2>Request Access</h2>
    <form action="requestAccess" method="post">
        Software: <select name="softwareId">
            <!-- Dynamically populate with software from DB -->
        </select><br>
        Access Type: 
        <select name="accessType">
            <option value="Read">Read</option>
            <option value="Write">Write</option>
            <option value="Admin">Admin</option>
        </select><br>
        Reason: <textarea name="reason" required></textarea><br>
        <input type="submit" value="Request Access">
    </form>
</body>
</html>
