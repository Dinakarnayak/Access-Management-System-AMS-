# Access-Management-System-AMS-
The Access Management System (AMS) is a web-based application for managing user access to software within an organization. It allows users to request access, and managers to approve or reject requests. Admins can create software and manage system settings, ensuring secure and efficient access control, using Java, JSP, and PostgreSQL

The Access Management System (AMS) is a web-based application designed to streamline and manage user access requests for software applications within an organization. Built using Java Servlets and JavaServer Pages (JSP), AMS provides a secure and efficient platform for handling user registrations, access requests, and approvals, ensuring that the right individuals have the appropriate level of access to company software.

AMS incorporates three main user roles: Employees, Managers, and Admins, each with distinct capabilities. Employees can sign up, log in, and submit requests to access software, specifying the desired access level such as read, write, or admin permissions. Managers can review these requests, approving or rejecting them based on necessity and adherence to internal policies. Admins, with the highest privileges, can not only manage access requests but also create and manage software applications and configure system settings.
#Instructions

1. Database Setup
Install PostgreSQL:

Download and install PostgreSQL from the official website.
Follow the installation instructions for your operating system.
Open PostgreSQL Command Line or pgAdmin:

Open the PostgreSQL command line interface (psql) or use pgAdmin for a graphical interface.
Create a New Database:

sql
Copy code
CREATE DATABASE access_management_db;
Connect to the Database:

sql
Copy code
\c access_management_db;
Run the create_tables.sql Script:

Copy the create_tables.sql script provided in the earlier section into a file named create_tables.sql.
Execute the SQL script in your PostgreSQL command line:
sql
Copy code
\i /path/to/create_tables.sql
Make sure to replace /path/to/create_tables.sql with the actual path to your script.
2. Server Setup
Install Apache Tomcat:

Download Apache Tomcat from the official website.
Follow the installation instructions for your operating system.
Set Up Your Project:

Ensure you have Maven installed on your machine. If not, download and install it from the official website.
Navigate to your project directory UserAccessManagementSystem/.
Build the Project:

Open a terminal (or command prompt) in your project directory and run:
bash
Copy code
mvn clean package
This command compiles the project and creates a .war file in the target directory.
Deploy the Application:

Locate the .war file in UserAccessManagementSystem/target/.
Copy the .war file (e.g., UserAccessManagementSystem.war) to the webapps directory of your Apache Tomcat installation (e.g., C:\apache-tomcat-x.x.x\webapps\ on Windows or /usr/local/tomcat/webapps/ on Linux/Mac).
Start Apache Tomcat:

Navigate to the bin directory of your Tomcat installation.
Start the Tomcat server:
On Windows, run startup.bat.
On Linux/Mac, run ./startup.sh.
3. Running the Application
Access the Application:

Open your web browser and navigate to:
arduino
Copy code
http://localhost:8080/UserAccessManagementSystem/
Using the Application:

You should see the home page of your Access Management System.
Use the Sign Up page to create new users, log in, and access the various functionalities of your application.
Additional Notes
Troubleshooting:

If you encounter issues with starting Tomcat, check the logs directory in your Tomcat installation for detailed error messages.
Ensure that PostgreSQL is running and the connection details in your Java code (e.g., database URL, username, password) are correct.
Database Configuration in Java:

In your servlets, you will need to add JDBC code to connect to the PostgreSQL database. Here’s an example connection snippet:
java
Copy code
Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/access_management_db", "your_username", "your_password");
JDBC Driver Dependency:

Ensure that you have added the PostgreSQL JDBC driver dependency in your pom.xml file (as shown in the previous sections) so that your application can connect to the PostgreSQL database.
