const transactions = require('../../../data/transactions');
export default function (app) {

  app.get(`/api/transactions/`, (req, res) => {
    res.json(transactions);
  });
}
