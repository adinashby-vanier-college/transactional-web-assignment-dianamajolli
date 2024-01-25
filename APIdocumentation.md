 API Documentation 

Overview
This Express server is a simple web application designed to provide basic web pages and a contact card API. 

Endpoints

 Contact Card API
- URL: `/contactcard`
- Method: `GET`
- Description: Provides a JSON response containing contact information.
- Content-Type: `application/json`
- Body: 
    ```json
    {
      "Linkedin": "https://www.linkedin.com/in/diana-majolli-andre/",
      "GitHub": "https://github.com/dianamajolli"
    }
    ```

