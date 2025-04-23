import { createInterface } from 'readline';
import { checkPasswordStrength } from './function.js';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please write your password: ', (userPassw) => {
    console.log('Checking password strength...');
    console.log(`Your password is, ${checkPasswordStrength(userPassw)}!`);
    rl.close();
});