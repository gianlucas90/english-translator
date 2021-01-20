'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  const translator = new Translator();

  app.route('/api/translate').post((req, res) => {
    const { text, locale } = req.body;
    let translation;

    if (text === '') return res.json({ error: 'No text to translate' });

    if (!text || !locale)
      return res.json({ error: 'Required field(s) missing' });

    if (locale !== 'american-to-british' && locale !== 'british-to-american')
      return res.json({ error: 'Invalid value for locale field' });

    if (locale === 'american-to-british')
      translation = translator.americanToBritish(text);

    if (locale === 'british-to-american')
      translation = translator.britishToAmerican(text);

    if (translation === text)
      return res.json({ text, translation: 'Everything looks good to me!' });

    res.json({ text, translation });
  });
};
