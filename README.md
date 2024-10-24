
# Access Management System (AMS)

The Access Management System (AMS) is a web-based application for managing user access to software within an organization. It allows users to request access, and managers to approve or reject requests. Admins can create software and manage system settings, ensuring secure and efficient access control, using Java, JSP, and PostgreSQL.

The system features three main user roles: **Employees**, **Managers**, and **Admins**, each with distinct capabilities. Employees can sign up, log in, and request access to software, specifying the access level (read, write, or admin). Managers review, approve, or reject these requests, ensuring proper access control. Admins, with the highest privileges, can create new software applications and manage system settings.

## Instructions

### 1. Database Setup

#### Install PostgreSQL:
- Download and install PostgreSQL from the [official website](https://www.postgresql.org/download/).
- Follow the installation instructions for your operating system.

#### Open PostgreSQL Command Line or pgAdmin:
- Use the PostgreSQL command line (psql) or pgAdmin for a graphical interface.

#### Create a New Database:
```sql
CREATE DATABASE access_management_db;
```

#### Connect to the Database:
```sql
\c access_management_db;
```

#### Run the `create_tables.sql` Script:
- Copy the `create_tables.sql` script into a file named `create_tables.sql`.
- Execute the SQL script in PostgreSQL:
```sql
\i /path/to/create_tables.sql
```
Make sure to replace `/path/to/create_tables.sql` with the actual path to your script.

### 2. Server Setup

#### Install Apache Tomcat:
- Download Apache Tomcat from the [official website](https://tomcat.apache.org/download-90.cgi).
- Follow the installation instructions for your operating system.

#### Set Up Your Project:
- Ensure you have **Maven** installed. If not, download and install it from the [official website](https://maven.apache.org/download.cgi).
- Navigate to your project directory `UserAccessManagementSystem/`.

#### Build the Project:
- Open a terminal in your project directory and run:
```bash
mvn clean package
```
This command compiles the project and creates a `.war` file in the `target` directory.

#### Deploy the Application:
- Locate the `.war` file in `UserAccessManagementSystem/target/`.
- Copy the `.war` file (e.g., `UserAccessManagementSystem.war`) to the `webapps` directory of your Apache Tomcat installation.

#### Start Apache Tomcat:
- Navigate to the `bin` directory of your Tomcat installation.
- Start the Tomcat server:
  - On Windows: Run `startup.bat`.
  - On Linux/Mac: Run `./startup.sh`.

### 3. Running the Application

#### Access the Application:
- Open your web browser and navigate to:
```bash
http://localhost:8080/UserAccessManagementSystem/
```

#### Using the Application:
- Sign up, log in, and access various functionalities like requesting access and managing software.

### Additional Notes

#### Troubleshooting:
- If you encounter issues with starting Tomcat, check the `logs` directory in your Tomcat installation for detailed error messages.
- Ensure that PostgreSQL is running and the connection details in your Java code (e.g., database URL, username, password) are correct.

#### Database Configuration in Java:
- Example JDBC connection snippet:
```java
Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/access_management_db", "your_username", "your_password");
```

#### JDBC Driver Dependency:
- Ensure you have added the PostgreSQL JDBC driver dependency in your `pom.xml` file for database connectivity:
```xml
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <version>42.2.23</version>
</dependency>
```
