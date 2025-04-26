import * as dotenv from 'dotenv';
dotenv.config();


import bodyParser from 'body-parser';
import app from './server'


// Add these middleware before your routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3001, () => {
  console.log("Server is running on port http://localhost:3001");
});







// Then your routes...