"use strict";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const charArray = characters.split("");
const maxLen = 2048;

const ID = (len = 6) => {
  len = parseInt(len);
  if(typeof len !== 'number') len = 6;
  if(len > maxLen) return new Error("[thrust.js]: length cannot be greater than 2048.");
  var Value = "";
  for(let x = len; x > 0; x--)
    Value += `${charArray[Math.floor(Math.random() * charArray.length)]}`;
  return Value;
}

module.exports = ID;