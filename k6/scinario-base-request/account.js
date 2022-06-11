// account.js
import { SharedArray } import "k6/data";

const accounts = new SharedArray('accounts', function() {
  return JSON.parse(open('./account.json'));
});

export function getAccount() {
  return accounts[Math.floor(Math.random() * accounts.length)];

