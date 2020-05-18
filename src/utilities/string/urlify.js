const _ = require('lodash');
const replaceAccentedCharacters = require('./replaceAccentedCharacters');


module.exports = str => {
  return _.kebabCase(replaceAccentedCharacters(str));
};
