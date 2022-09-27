const  express = require('express')
const app = express();
const connectDB = require('./config/db');

//connect  Database  
connectDB();
const port = process.env.PORT || 5000
app.get('/', (req, res) => res.send('API Running !'));

app.listen(port, () => console.log(` Server listening on port ${port}!`));