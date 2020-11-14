import redis from 'redis';

const client = redis.createClient();

export { client, redis };
