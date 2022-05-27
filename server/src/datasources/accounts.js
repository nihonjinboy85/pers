const { MongoDataSource } = require('apollo-datasource-mongodb');

class Accounts extends MongoDataSource {
  getAccounts() {
    return this.find();
  }

  getAccount(accountId) {
    return this.findOneById(accountId);
  }
}

module.exports = Accounts;
