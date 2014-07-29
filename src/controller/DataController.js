var repositoryFactory = require("../repository/repositoryFactory");
var BaseRepository = require("../repository/BaseRepository");

function DataController(infos, options) {
    this.repository = repositoryFactory.createRepositoryInstance(infos, options);
}

DataController.prototype.getAll = function(callback, additionalIdentifiers) {
    this.repository.getAll(callback, additionalIdentifiers);
};

DataController.prototype.get = function(id, callback, additionalIdentifiers) {
    this.repository.get(id, callback, additionalIdentifiers);
};

DataController.prototype.add = function(resource, callback, additionalIdentifiers) {
    this.repository.add(resource, callback, additionalIdentifiers);
};

DataController.prototype.update = function(resource, callback, additionalIdentifiers) {
    this.repository.update(resource, callback, additionalIdentifiers);
};

DataController.prototype.remove = function(id, callback, additionalIdentifiers) {
    this.repository.remove(id, callback, additionalIdentifiers);
};

module.exports = DataController;