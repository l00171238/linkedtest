const  express = require('express')
const app = express();
const connectDB = require('./config/db');

//connect  Database  
connectDB();
//running the sever on the default port , by default port  5000
const port = process.env.PORT || 5000
//sending the req and res is the http req is conneted  
app.get('/', (req, res) => res.send('API Running !'));
app.listen(port, () => console.log(` Server listening on port ${port}!`));