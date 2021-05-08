// Requirements
const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
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
const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DB_URL, {
			useNewUrlParser: true,
			useFindAndModify: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		console.log('MongoDB Connection successful');
	} catch (error) {
		console.log('MongoDB Connection failed');
		process.exit(1);
	}
};

connectDB();

// Middlewares
app.use(express.json());

// Route Middlewares
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/review', reviewRoutes);

// Check for development or production
if (process.env.NODE_ENV == 'production') {
	// get build files in server
	app.use(express.static(path.join(__dirname, '/client/build')));

	// every get request is send to index.html in /client/build
	// react will handle rest
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
	});
} else {
	app.use('/', (req, res) => {
		res.send('App is running in development mode');
	});
}

// Listen
const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`app is listning at http://localhost:${port}`);
});
