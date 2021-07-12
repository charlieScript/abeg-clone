const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')




// ENVIROMENT VARIABLES
dotenv.config()
// express app
const app = express()
// port
const PORT = process.env.PORT || 4000

// additional dtuff
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())


mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  .then(() => app.listen(PORT, console.log(`server started on port ${PORT}`)))
  .catch((err) => console.log(err));

// Routes
const UserRoutes = require('./routes/User.Route')
const transactionsRoutes = require('./routes/Transactions.Route')
app.use(UserRoutes)
app.use(transactionsRoutes)