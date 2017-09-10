var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15]
    }
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15]
    }
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18]
    }
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15]
    }
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0]
    }
  }
};

var EXAM_WEIGHT = 0.65;
var EXERCISE_WEIGHT = 0.35;

function getTotal(scores) {
  var total = scores.reduce(function (sum, score) {
    return sum + score;
  });
  return total;
}

function getAverage(scores) {
  var total = getTotal(scores);
  return total / scores.length;
}

function getPercentGrade(examScore, exerciseScore) {
  return Math.round((examScore * EXAM_WEIGHT) + (exerciseScore * EXERCISE_WEIGHT));
}

function getLetterGrade(percentGrade) {
  var letterGrade;

  if (percentGrade >= 93 && percentGrade <= 100) {
    letterGrade = 'A';
  } else if (percentGrade >= 85 && percentGrade <= 92) {
    letterGrade = 'B';
  } else if (percentGrade >= 77 && percentGrade <= 84) {
    letterGrade = 'C';
  } else if (percentGrade >= 69 && percentGrade <= 76) {
    letterGrade = 'D';
  } else if (percentGrade >= 60 && percentGrade <= 68) {
    letterGrade = 'E';
  } else if (percentGrade >= 0 && percentGrade <= 59) {
    letterGrade = 'F';
  } else {
    letterGrade = 'I';
  }
  return letterGrade;
}

function getFinalStudentGrades(scoreObj) {
  var finalStudentGrades = Object.keys(scoreObj).map(function (student) {
    var avgExamScore = getAverage(scoreObj[student].scores.exams);
    var totalExerciseScore = getTotal(scoreObj[student].scores.exercises);
    var percentGrade = getPercentGrade(avgExamScore, totalExerciseScore);
    var letterGrade = getLetterGrade(percentGrade);
    return percentGrade + '(' + letterGrade + ')';
  });

  return finalStudentGrades;
}

function getMin(scores) {
  return scores.reduce(function (min, score) {
    return score < min ? score : min;
  });
}

function getMax(scores) {
  return scores.reduce(function (max, score) {
    return score > max ? score : max;
  });
}

function transpose(array) {
  var result = [];
  var i;
  var j;
  for (i = 0; i < array[0].length; i += 1) {
    result[i] = [];
    for (j = 0; j < array.length; j += 1) {
      result[i][j] = array[j][i];
    }
  }
  return result;
}

function getExamScores(scoreObj) {
  var examScoresPerStudent = [];
  var scoresPerExam = [];

  Object.keys(scoreObj).forEach(function (student) {
    examScoresPerStudent.push(scoreObj[student].scores.exams);
  });

  scoresPerExam = transpose(examScoresPerStudent);
  return scoresPerExam;
}

function getExamsStats(scoreObj) {
  var examStats = [];
  var examScores = getExamScores(scoreObj);

  examStats = examScores.map(function (examScore) {
    return {
      average: getAverage(examScore),
      minimum: getMin(examScore),
      maximum: getMax(examScore)
    };
  });
  return examStats;
}

function generateClassRecordSummary(scoreObj) {
  return {
    studentGrades: getFinalStudentGrades(scoreObj),
    exams: getExamsStats(scoreObj)
  };
}

console.log(generateClassRecordSummary(studentScores));
