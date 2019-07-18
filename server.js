const express = require('express');
const connectDB = require('./config/db');



const app = express();

// Connect DB

connectDB()

// Init Middleware

app.use(express.json({ extended: false }));



app.get('/', (req, res) => res.json({ msg: 'Hello World!' }))

// Define routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));




const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


