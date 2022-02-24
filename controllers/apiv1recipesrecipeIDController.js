'use strict'

var varapiv1recipesrecipeIDController = require('./apiv1recipesrecipeIDControllerService');

module.exports.findRecipeByrecipeID = function findRecipeByrecipeID(req, res, next) {
  varapiv1recipesrecipeIDController.findRecipeByrecipeID(req.swagger.params, res, next);
};

module.exports.deleteRecipe = function deleteRecipe(req, res, next) {
  varapiv1recipesrecipeIDController.deleteRecipe(req.swagger.params, res, next);
};

module.exports.updateRecipe = function updateRecipe(req, res, next) {
  varapiv1recipesrecipeIDController.updateRecipe(req.swagger.params, res, next);
};