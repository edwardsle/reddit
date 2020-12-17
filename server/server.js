const express = require('express');
const cors = require('cors');

const app = express();
const user = require("./Auth/users")

//cookie, session, body-parser
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

//need to add {} to work with session
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

//req.body
app.use(express.json()) 

//User Login, Register, Authentication
app.use('/user',user);


//listen to port
app.listen(3001, () => {
    console.log("Server is listening on port 3001");
})