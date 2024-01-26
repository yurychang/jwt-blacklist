import { createClient } from 'redis';

export const redis = createClient({
  url: 'redis://localhost:6380',
});

redis.on('error', (err) => console.log('Redis Client Error', err));

redis.connect();
