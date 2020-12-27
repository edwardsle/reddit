const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const { sequelize, User, Post } = require('./models')
const PORT = process.env.PORT || 5000;
const authorize = require("./middleware/authorize");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen({ port: PORT }, async () => {
  console.log(`Server up on http://localhost:${PORT}`)
  await sequelize.authenticate()
  console.log('Database Connected!')
})

async function main() {
  await sequelize.sync({ alter: true})
}
main()

// Routes
// app.use('/api/users', require('./routes/usersRoute'));
// app.use('/api/posts', authorize, require('./routes/postsRoute'));