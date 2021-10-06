const mongoose = require('mongoose');

const database = 'user';

const connectionStr = `mongodb://localhost:27017/${database}`;

mongoose.connect(connectionStr);

mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleDateString()}] - MongoDB connected...🙌 🙌 🙌`);
    console.log(`Connected to ${database} database`);
});

mongoose.connection.on('error', (error) => {
    console.log(`MongoDB had an issue 😥`, error);
});

mongoose.connection.on('disconnected', () => console.log(`MongoDB disconnected ⚡️ 🔌 ⚡️`));