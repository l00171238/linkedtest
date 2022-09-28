const  express = require('express')
const app = express();
const connectDB = require('./config/db');
const router = express.Router();

//connect  Database  
connectDB();
//running the sever on the default port , by default port  5000
const port = process.env.PORT || 5000
//sending the req and res is the http req is conneted  
app.get('/', (req, res) => res.send('API Running !'));

//Define Routes  
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profiles', require('./routes/api/profiles'));
app.use('/api/posts', require('./routes/api/posts'));

app.listen(port, () => console.log(` Server listening on port ${port}!`));