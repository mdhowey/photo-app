const mongoose = require('mongoose');

const connectionStr = 'mongodb://localhost:27017/user';

mongoose.connect(connectionStr);

mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleDateString()}] - MongoDB connected...`);
});

mongoose.connection.on('error', (error) => {
    console.log(`MongoDB had an issue: ${error}`);
});

mongoose.connection.on('disconnected', () => console.log(`MongoDB disconnected`));