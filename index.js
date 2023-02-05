const express = require ('express');
const mongoose = require ('mongoose');
const dotenv = require ('dotenv').config();
const cors = require("cors");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5500;


app.use(cors());



const TodoItemRoute = require('./routes/todoItems')
const reservationRoute = require('./routes/reservation')


mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))


app.use('/', reservationRoute);


app.listen(PORT, ()=> console.log("Server connected"));