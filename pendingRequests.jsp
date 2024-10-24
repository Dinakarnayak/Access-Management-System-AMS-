<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pending Requests</title>
</head>
<body>
    <h2>Pending Requests</h2>
    <!-- Display list of pending requests from DB -->
    <form action="approveRequest" method="post">
        <!-- For each request -->
        Request ID: <input type="text" name="requestId" required>
        <input type="radio" name="action" value="Approved" required> Approve
        <input type="radio" name="action" value="Rejected" required> Reject
        <input type="submit" value="Submit">
    </form>
</body>
</html>
