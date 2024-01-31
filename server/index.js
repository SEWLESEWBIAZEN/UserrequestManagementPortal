
const express = require('express');
const cors=require('cors')
const cookieparser=require('cookie-parser')

const requestRoute = require('./route/requestRoute.js'); 
const branchRoutes =require('./route/branchRoute.js')
const usercontroller=require('./controller/usercontroller.js')
const dotenv =require('dotenv')
const CONNECTDB= require( './config/db.js');
const requireAuth = require('./middleware/requireAuth.js');

dotenv.config();

const app = express();
const port = 3003;

app.use(express.json());
app.use(cookieparser())

CONNECTDB();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

//request routes
app.use('/requests', requestRoute);

//branch routes
app.use('/branch',branchRoutes)


//authentication routes
app.post('/signup',usercontroller.signup)
app.post('/login',usercontroller.login)
app.get('/logout',usercontroller.logout)
app.get('/check-auth',requireAuth,usercontroller.checkAuth)


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

