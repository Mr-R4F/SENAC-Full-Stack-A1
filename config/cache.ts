import { createCache } from 'cache-manager';
import { Keyv, CacheableMemory } from 'cacheable';

export const cache = createCache({ 
    stores: [
        //  High performance in-memory cache with LRU and TTL
        new Keyv({
          store: new CacheableMemory({ ttl: 60000, lruSize: 5000 }),
        }),
    ]
});

