const express = require('express');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/api/book')

const app = express();

app.use(express.json());

// Connect Database
connectDB();


app.use('/api/books', bookRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});