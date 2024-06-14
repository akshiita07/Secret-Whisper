// 1. Import axios and ejs      npm i ejs axios
import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static('public'));  //public folder for static files.
app.use(bodyParser.urlencoded({ extended: true }));

const apiURL = 'https://secrets-api.appbrewery.com/random';

// When the user goes to the home page it should render the index.ejs file.
app.get('/', async (req, res) => {
    // Use axios to get a random secret and pass it to index.ejs to display the secret and the username of the secret.
    try {
        const response = await axios.get(apiURL);
        const result = response.data;
        // console.log(result); op:{id: 2,secret: 'I pretend to be on important conference calls just so I can have some alone time in my home office and nap.',emScore: 6,username: 'secretsnacker',timestamp: '2023-06-25 13:45:17 utc'}
        
        res.render("index.ejs", {
            secret:result.secret,
            username:result.username
        });
    } catch (error) {
        console.error(error.result);
        res.status(404);
    }

})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})



