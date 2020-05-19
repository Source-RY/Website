class Replacement {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
}

const replacements = ([
  ['ö', 'o'],
  ['ä', 'a']
])
  .map(([from, to]) => new Replacement(from, to));

module.exports = str => {
  let result = str;

  for (const replacement of replacements)
    // Ain't nobody got time to learn Regex
    result = result.split(replacement.from).join(replacement.to);

  return result;
};
