const express = require('express');
const connectDB = require('./config/db');
const path = require('path')


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

// Serve Static Assets in production

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));


}


const PORT = process.env.PORT || 4001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


