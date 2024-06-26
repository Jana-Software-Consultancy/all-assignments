function calculateTotalSpentByCategory(transactions) {
  var spendEstimates = {};

  for (var i = 0; i < transactions.length; i++) {
    var t = transactions[i];
    if (spendEstimates[t.category]) {
      spendEstimates[t.category] += t.price;
    } else {
      spendEstimates[t.category] = t.price;
    }
  }

  var keys = Object.keys(spendEstimates);
  var answer = [];

  for (var i = 0; i < keys.length; i++) {
    var category = keys[i];
    var obj = {
      category: category,
      totalSpent: spendEstimates[category]
    }
    answer.push(obj);
  }

  return answer;
}

module.exports = calculateTotalSpentByCategory;
