function getGrade(score1, score2, score3) {
  var totalScores = score1 + score2 + score3;
  var averageScore = totalScores / 3;
  if (averageScore >= 90 && averageScore <= 100) {
    return 'A';
  } else if (averageScore >= 80 && averageScore < 90) {
    return 'B';
  } else if (averageScore >= 70 && averageScore < 80) {
    return 'C';
  } else if (averageScore >= 60 && averageScore < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(50, 50, 95)); // "D"