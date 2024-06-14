# Secret-Whisper
The project "Whisper" is a web application built using Node.js and Express framework. It utilizes EJS (Embedded JavaScript) for templating and Axios for making HTTP requests to an external API. Here's a brief explanation of its implementation:

1. **Dependencies Installation:**
   - It starts by installing necessary dependencies including Express, body-parser, EJS, and Axios using npm.

2. **Setting Up Express Server:**
   - Express is configured to create a server listening on port 3000.
   - Static files (like CSS) are served from a 'public' directory using `express.static`.

3. **Fetching Data from API:**
   - Axios is used to make an asynchronous GET request to an external API (`https://secrets-api.appbrewery.com/random`) which returns a random secret.
   - The fetched secret data includes fields like `secret` and `username`.

4. **Rendering with EJS:**
   - When a user visits the homepage ('/'), Express renders the `index.ejs` template.
   - The fetched secret (`result.secret`) and its author's username (`result.username`) are passed as variables to the template.

5. **Frontend (index.ejs):**
   - HTML structure with EJS tags (`<%= secret %>`, `<%= username %>`) dynamically displays the fetched secret and its author.
   - Basic CSS styles (`style.css`) enhance the visual presentation, including hover effects on the secret card.

6. **Error Handling:**
   - If there's an error in fetching data from the API, an error message is logged to the console and a 404 status is returned to the client.

7. **Run the Server:**
   - The server starts listening on port 3000 and logs a message confirming its operation (`Server running on port 3000`).

**Summary:**
Whisper demonstrates how to build a lightweight web application that fetches and displays random secrets from an external API. It emphasizes server-side rendering using EJS, asynchronous data fetching with Axios, and basic error handling. The project's simplicity and focus on displaying random secrets in a visually appealing manner make it an engaging prototype for exploring anonymous confessions.
