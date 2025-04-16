import { createCache,  } from 'cache-manager';
import { Keyv } from 'keyv';

export const setCache = createCache({ 
    ttl: 120 * 120,
    refreshThreshold: 120 * 120,
});

