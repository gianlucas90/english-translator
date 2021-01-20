const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
  americanToBritish(string) {
    let translation = string;

    for (const word in americanToBritishSpelling) {
      const regex = new RegExp(`\\b${word}\\b`, 'i');
      // console.log(regex);
      if (regex.test(string)) {
        // console.log('object');
        translation = string.replace(
          regex,
          this.getSpan(americanToBritishSpelling[word])
        );
      }
    }
    // console.log(translation);

    for (const word in americanOnly) {
      const regex = new RegExp(`\\b${word}\\b`, 'i');
      if (regex.test(string)) {
        translation = string.replace(regex, this.getSpan(americanOnly[word]));
      }
    }
    // console.log(translation);

    for (const word in americanToBritishTitles) {
      const regex = new RegExp(word, 'i');
      if (regex.test(string)) {
        // Replacement
        let repl = americanToBritishTitles[word];
        // Capitalize replacement
        let capRepl = repl.charAt(0).toUpperCase() + repl.slice(1);
        // Replace in string
        translation = string.replace(regex, this.getSpan(capRepl));
      }
    }

    // Match Time
    const timeRegex = new RegExp('\\d{1,2}:\\d{1,2}', 'ig');
    const match = translation.match(timeRegex);
    if (match) {
      let changedformat = match.join('').replace(':', '.');
      translation = translation.replace(timeRegex, this.getSpan(changedformat));
    }

    return translation;
  }

  britishToAmerican(string) {
    let translation = string;

    for (const word in americanToBritishSpelling) {
      const regex = new RegExp(`\\b${americanToBritishSpelling[word]}\\b`, 'i');
      if (regex.test(string)) {
        translation = translation.replace(regex, this.getSpan(word));
      }
    }
    // console.log(translation);

    for (const word in britishOnly) {
      const regex = new RegExp(`\\b${word}\\b`, 'i');
      if (regex.test(string)) {
        translation = translation.replace(
          regex,
          this.getSpan(britishOnly[word])
        );
      }
    }
    // console.log(translation);

    for (const word in americanToBritishTitles) {
      const regex = new RegExp(`\\b${americanToBritishTitles[word]}\\b`, 'i');
      if (regex.test(string)) {
        // Replacement
        let repl = word;
        // Capitalize replacement
        let capRepl = repl.charAt(0).toUpperCase() + repl.slice(1);
        // Replace in string
        translation = translation.replace(regex, this.getSpan(capRepl));
      }
    }

    // Match Time
    const timeRegex = new RegExp('\\d{1,2}.\\d{1,2}', 'ig');
    const match = translation.match(timeRegex);
    if (match) {
      let changedformat = match.join('').replace('.', ':');
      translation = translation.replace(timeRegex, this.getSpan(changedformat));
    }

    return translation;
  }

  getSpan(word) {
    return `<span class="highlight">${word}</span>`;
  }

  stripHtml(originalString) {
    return originalString.replace(/(<([^>]+)>)/gi, '');
  }
}

module.exports = Translator;
