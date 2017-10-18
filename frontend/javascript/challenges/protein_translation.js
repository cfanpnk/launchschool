function convert(codon) {
  var CODON_TO_PROTEIN = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP'
  };
  return CODON_TO_PROTEIN[codon] || 'NON-EXIST';
}

function translate(strand) {
  var codonsArray = strand.match(/.{3}/g);
  var proteinsArray = [];
  for (var i = 0; i < codonsArray.length; i++) {
    var protein = convert(codonsArray[i]);
    if (protein === 'STOP' || protein === 'NON-EXIST') {
      break;
    } else {
      proteinsArray.push(protein);
    }
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