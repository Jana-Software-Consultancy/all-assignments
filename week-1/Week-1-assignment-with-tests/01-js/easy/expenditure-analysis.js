function solve(transactions) {
  var spendEstimates = {};
  for (var i = 0; i < transactions.length; i++) {
    var t = transactions[i];
    if (spendEstimates[t.category]) {
      spendEstimates[t.category] = spendEstimates[t.category] + t.price;
    } else {
      spendEstimates[t.category] = t.price;
    }
  }
  console.log(spendEstimates);
}
var transactions = [
  {
    itemName: "kachori",
    category: "food",
    price: 100,
    timestamp: "04-April-2024",
  },
  {
    itemName: "Biscuits",
    category: "food",
    price: 100,
    timestamp: "04-April-2024",
  },
  {
    itemName: "Flight Bills",
    category: "travel",
    price: 100,
    timestamp: "04-April-2024",
  },
  {
    itemName: "Petrol",
    category: "travel",
    price: 100,
    timestamp: "04-April-2024",
  },
  {
    itemName: "Samosa",
    category: "food",
    price: 100,
    timestamp: "04-April-2024",
  },
  
];

function calculateTotalSpentByCategory(transactions) {
  return [];
}

module.exports = calculateTotalSpentByCategory;
