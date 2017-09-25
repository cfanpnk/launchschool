var positiveRegex = /(fortunes?)|(dream(s|t|ed)?)|(love(s|d)?)|(respect(s|ed)?)|(patien(ce|t)?)|(devout(ly)?)|(nobler?)|(resolut(e|ion)?)/gi;
var negativeRegex = /(die(s|d)?)|(heartached?)|(death)|(despise(s|d)?)|(scorn(s|ed)?)|(weary)|(troubles?)|(oppress(es|ed|or('s)?)?)/gi;
var textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

function sentiment(text) {
  var words = text.toLowerCase().replace(/[\n-]/g, ' ').replace(/[:\.\!\,\?\\]/g, '').split(' ');
  var positiveCount = 0;
  var negativeCount = 0;
  var positiveResult = [];
  var negativeResult = [];
  var result;
  positiveResult = words.filter(function(word) {
    return !!word.match(positiveRegex);
  });
  negativeResult = words.filter(function(word) {
    return !!word.match(negativeRegex);
  });
  positiveCount = positiveResult.length;
  negativeCount = negativeResult.length;
  result = positiveCount > negativeCount ? 'Positive' : 'Negative';
  if (positiveCount > negativeCount) {
    result = 'Positive';
  } else if (positiveCount < negativeCount) {
    result = 'Negative';
  } else {
    result = 'Neutral';
  }
  console.log('There are ' + positiveCount.toString() + ' positive words in the text.');
  console.log('Positive sentiments: ' + positiveResult.join(', '));
  console.log('There are ' + negativeCount.toString() + ' negative words in the text.');
  console.log('Negative sentiments: ' + negativeResult.join(', '));
  console.log('The sentiment of the text is ' + result);
}

sentiment(textExcerpt);
