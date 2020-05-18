const _ = require('lodash');
const replaceAccentedCharacters = require('./replaceAccentedCharacters');


module.exports = (prefixOrPath, path) => {
  return path ?
    prefixOrPath + _.kebabCase(replaceAccentedCharacters(path)) :
    '/' + _.kebabCase(replaceAccentedCharacters(prefixOrPath));
};
