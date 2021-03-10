// Requirements
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Routes Import
const userRoutes = require('./src/Routes/UserRoutes');
const productRoutes = require('./src/Routes/ProductRoutes');
const reviewRoutes = require('./src/Routes/ReviewRoutes');

const app = express();
app.use(cors());
dotenv.config();

// Connect to Database
mongoose.connect(
	process.env.DB_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log('Database Connected')
);

// Middlewares
app.use(express.json());

// Route Middlewares
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/review', reviewRoutes);

// Listen
const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log('app is listning at http://localhost:' + port);
});
