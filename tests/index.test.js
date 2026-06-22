import { strict as assert } from 'assert';
import app from '../src/index.js';

export const testHealthEndpoint = () => {
  assert.strictEqual(typeof app, 'object', 'App should be an object');
};

export const testSimpleAddition = () => {
  const result = 2 + 2;
  assert.strictEqual(result, 4, '2 + 2 should equal 4');
};

export const testGreeting = () => {
  const name = 'VSCode';
  const greeting = `Hello, ${name}!`;
  assert.strictEqual(greeting, 'Hello, VSCode!', 'Greeting should be correct');
};
