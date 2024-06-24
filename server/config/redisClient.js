const redis = require('redis');
const  { createClient } = require('redis');


// Create a new Redis client

const redisClient = createClient({
    password: process.env.PASSWORD,
    socket: {
        host: process.env.HOST,
        port: process.env.REDISPORT
    },
    legacyMode: true
});

redisClient.connect();

// Handle Redis client connection events
redisClient.on('connect', () => {
    console.log('Connected to Redis');
});

redisClient.on('error', (err) => {
    console.error('Redis error:', err);
});


module.exports = redisClient;
