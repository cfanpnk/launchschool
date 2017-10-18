function convert(codon) {
  if (codon === 'AUG') {
    return 'Methionine';
  } else if (codon === 'UUU' || codon === 'UUC') {
    return 'Phenylalanine';
  } else if (codon === 'UUA' || codon === 'UUG') {
    return 'Leucine';
  } else if (codon === 'UCU' || codon === 'UCC' || codon === 'UCA' || codon === 'UCG') {
    return 'Serine';
  } else if (codon === 'UAU' || codon === 'UAC') {
    return 'Tyrosine';
  } else if (codon === 'UGU' || codon === 'UGC') {
    return 'Cysteine';
  } else if (codon === 'UGG') {
    return 'Tryptophan';
  } else if (codon === 'UAA' || codon === 'UAG' || codon === 'UGA') {
    return 'STOP';
  }
  return 'NON-EXIST';
}

function translate(strand) {
  var codonsArray = [];
  var proteinsArray = [];
  var indexOfStop;
  codonsArray = strand.match(/.{3}/g);
  proteinsArray = codonsArray.map(function (codon) {
    return convert(codon);
  });
  if (proteinsArray.indexOf('NON-EXIST') >= 0) {
    return [];
  }
  indexOfStop = proteinsArray.indexOf('STOP');
  if (indexOfStop >= 0) {
    return proteinsArray.slice(0, indexOfStop);
  }
  return proteinsArray;
}

console.log(translate('AUG')); // ['Methionine']
console.log(translate('UUU')); // ['Phenylalanine']
console.log(translate('UUC')); // ['Phenylalanine']
console.log(translate('UUA')); // ['Leucine']
console.log(translate('AUGUUUUGG')); // ['Methionine', 'Phenylalanine', 'Tryptophan']
console.log(translate('AUGUUUUAA')); // ['Methionine', 'Phenylalanine']
console.log(translate('UGGUGUUAUUAAUGGUUU')); // ['Tryptophan', 'Cysteine', 'Tyrosine']
console.log(translate('CARROT')); // []
