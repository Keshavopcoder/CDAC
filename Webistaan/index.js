const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  //Allows any domain to access the server(cross origin resourse sharing)
const db = require('./config/databaseconfig');  // Separate file for database config
const examRoutes = require('./routes/examRoutes');  // Separate file for exam routes

// Initialize express app
const app = express();
const PORT = 3000;

// Middleware(a bridge tht connects diff technologies db and tool into sinlge system)
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

// Routes
app.use('/api/exams', examRoutes);  // Routes for exam-related requests //(1)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
