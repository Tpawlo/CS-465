# CS-465

Architecture
Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?

  In the full stack project, we used Express HTML, JavaScript, and a SPA to develop the frontend of the application. Originally, the web application was static, with much of the information hard-coded into it. Then, we used handlebars to make it make it dynamic, which helps with load times and user-friendliness. We used Angular to build a single page application, or SPA. This loads the initial content of the webpage when the user first logs on, and then reloads new data within the webpage without needing to reload entirely again. Lastly, we used a NoSQL MongoDB database since it is uses JSON values and is flexible with many different types of data. With NoSQL, we were able to handle both structured and unstructured data within our webpage.


  
Functionality
How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

  JSON is used to communicate between frontend and backend development by sending requests using HTTP methods, such as get, post, or delete. It is text-based and usually is sent as strings, whereas JavaScript is its own programming language that performs operations on these requests. The backend then communicates with the database, seeking data that can help satisfy the request, and then sending the data as JSON strings back to the user. We used components to help improve functionality and efficiency. By using components, such as the navbar, trip-listing, and add-trip components, we were able to limit the amount of code we had to write, make it more organized, as well as make it more maintainable in the future. This helps lessen the chances of bugs, make the code more organized, and make the webpage scalable. 



Testing
Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

  Methods tell the code to perform some sort of operation. In a full stack application, methods such as GET or POST tell the endpoints to accept and answer the requests. Endpoints are the URLS where requests are sent to the back-end and responses are sent to the front-end. Security is another important aspect of full stack application. In this webpage application, we used authentication to ensure that the data being entered would not threaten the webpage in any way and that the user is able to enter that data in. In this webpage, we created username and password checks, as well as used JWTs to transmit secure information. 
  


Reflection
How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has taught me a lot about full stack application and all the components that make up the MEAN software stack. In my professional goal of becoming a data anaylst, this course helped me learn how to use multiple different languages, frameworks, and software platforms together to create one project. I learned about how to apply authentication to a webpage, as well as how to send requests to a database and get responses back. I also saw how I can display, edit, and add data in a way that is interactive for the user, which will be crucial in my role as a data analyst. If I would make one change, I would like to go through the guide again to get a better understanding of how all the parts worked together, or go through the steps with another project to see how it is applicable in different settings. 
