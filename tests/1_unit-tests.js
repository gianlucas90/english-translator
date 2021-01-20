const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator();

suite('Unit Tests', () => {
  test('Translate Mangoes are my favorite fruit. to British English', function (done) {
    let input = 'Mangoes are my favorite fruit.';
    let output = 'Mangoes are my favourite fruit.';
    assert.equal(
      translator.stripHtml(translator.americanToBritish(input)),
      output
    );
    done();
  });

  test('Translate I ate yogurt for breakfast. to British English', function (done) {
    let input = 'I ate yogurt for breakfast.';
    let output = 'I ate yoghurt for breakfast.';
    assert.equal(
      translator.stripHtml(translator.americanToBritish(input)),
      output
    );
    done();
  });

  test("Translate We had a party at my friend's condo. to British English", function (done) {
    let input = "We had a party at my friend's condo.";
    let output = "We had a party at my friend's flat.";
    assert.equal(
      translator.stripHtml(translator.americanToBritish(input)),
      output
    );
    done();
  });

  test('Translate Can you toss this in the trashcan for me? to British English', function (done) {
    let input = 'Can you toss this in the trashcan for me?';
    let output = 'Can you toss this in the bin for me?';
    assert.equal(
      translator.stripHtml(translator.americanToBritish(input)),
      output
    );
    done();
  });

  test('Translate The parking lot was full. to British English', function (done) {
    let input = 'The parking lot was full.';
    let output = 'The car park was full.';
    assert.equal(
      translator.stripHtml(translator.americanToBritish(input)),
      output
    );
    done();
  });

  test('Translate Like a high tech Rube Goldberg machine. to British English', function (done) {
    let input = 'Like a high tech Rube Goldberg machine.';
    let output = 'Like a high tech Heath Robinson device.';
    assert.equal(
      translator.stripHtml(translator.americanToBritish(input)),
      output
    );
    done();
  });

  test('Translate To play hooky means to skip class or work. to British English', function (done) {
    let input = 'To play hooky means to skip class or work.';
    let output = 'To bunk off means to skip class or work.';
    assert.equal(
      translator.stripHtml(translator.americanToBritish(input)),
      output
    );
    done();
  });

  test('Translate No Mr. Bond, I expect you to die. to British English', function (done) {
    let input = 'No Mr. Bond, I expect you to die.';
    let output = 'No Mr Bond, I expect you to die.';
    assert.equal(
      translator.stripHtml(translator.americanToBritish(input)),
      output
    );
    done();
  });

  test('Translate Dr. Grosh will see you now. to British English', function (done) {
    let input = 'Dr. Grosh will see you now.';
    let output = 'Dr Grosh will see you now.';
    assert.equal(
      translator.stripHtml(translator.americanToBritish(input)),
      output
    );
    done();
  });

  test('Translate Lunch is at 12:15 today. to British English', function (done) {
    let input = 'Lunch is at 12:15 today.';
    let output = 'Lunch is at 12.15 today.';
    assert.equal(
      translator.stripHtml(translator.americanToBritish(input)),
      output
    );
    done();
  });

  test('Translate We watched the footie match for a while. to American English', function (done) {
    let input = 'We watched the footie match for a while.';
    let output = 'We watched the soccer match for a while.';
    assert.equal(
      translator.stripHtml(translator.britishToAmerican(input)),
      output
    );
    done();
  });

  test('Translate Paracetamol takes up to an hour to work. to American English', function (done) {
    let input = 'Paracetamol takes up to an hour to work.';
    let output = 'Tylenol takes up to an hour to work.';
    assert.equal(
      translator.stripHtml(translator.britishToAmerican(input)),
      output
    );
    done();
  });

  test('Translate First, caramelise the onions. to American English', function (done) {
    let input = 'First, caramelise the onions.';
    let output = 'First, caramelize the onions.';
    assert.equal(
      translator.stripHtml(translator.britishToAmerican(input)),
      output
    );
    done();
  });

  test('Translate I spent the bank holiday at the funfair. to American English', function (done) {
    let input = 'I spent the bank holiday at the funfair.';
    let output = 'I spent the public holiday at the carnival.';
    assert.equal(
      translator.stripHtml(translator.britishToAmerican(input)),
      output
    );
    done();
  });

  test('Translate I had a bicky then went to the chippy. to American English', function (done) {
    let input = 'I had a bicky then went to the chippy.';
    let output = 'I had a cookie then went to the fish-and-chip shop.';
    assert.equal(
      translator.stripHtml(translator.britishToAmerican(input)),
      output
    );
    done();
  });

  test("Translate I've just got bits and bobs in my bum bag. to American English", function (done) {
    let input = "I've just got bits and bobs in my bum bag.";
    let output = "I've just got odds and ends in my fanny pack.";
    assert.equal(
      translator.stripHtml(translator.britishToAmerican(input)),
      output
    );
    done();
  });

  test('Translate The car boot sale at Boxted Airfield was called off. to American English', function (done) {
    let input = 'The car boot sale at Boxted Airfield was called off.';
    let output = 'The swap meet at Boxted Airfield was called off.';
    assert.equal(
      translator.stripHtml(translator.britishToAmerican(input)),
      output
    );
    done();
  });

  test('Translate Have you met Mrs Kalyani? to American English', function (done) {
    let input = 'Have you met Mrs Kalyani?';
    let output = 'Have you met Mrs. Kalyani?';
    assert.equal(
      translator.stripHtml(translator.britishToAmerican(input)),
      output
    );
    done();
  });

  test('Translate Tea time is usually around 4 or 4.30. to American English', function (done) {
    let input = 'Tea time is usually around 4 or 4.30.';
    let output = 'Tea time is usually around 4 or 4:30.';
    assert.equal(
      translator.stripHtml(translator.britishToAmerican(input)),
      output
    );
    done();
  });

  test('Highlight translation in Mangoes are my favorite fruit.', function (done) {
    let input = 'Mangoes are my favorite fruit.';
    let output =
      'Mangoes are my <span class="highlight">favourite</span> fruit.';
    assert.equal(translator.americanToBritish(input), output);
    done();
  });

  test('Highlight translation in I ate yogurt for breakfast.', function (done) {
    let input = 'I ate yogurt for breakfast.';
    let output = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
    assert.equal(translator.americanToBritish(input), output);
    done();
  });

  test('Highlight translation in We watched the footie match for a while.', function (done) {
    let input = 'We watched the footie match for a while.';
    let output =
      'We watched the <span class="highlight">soccer</span> match for a while.';
    assert.equal(translator.britishToAmerican(input), output);
    done();
  });

  test('Highlight translation in Paracetamol takes up to an hour to work.', function (done) {
    let input = 'Paracetamol takes up to an hour to work.';
    let output =
      '<span class="highlight">Tylenol</span> takes up to an hour to work.';
    assert.equal(translator.britishToAmerican(input), output);
    done();
  });
});
