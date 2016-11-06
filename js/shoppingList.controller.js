(function(){
  'use strict';
  angular
    .module('shoppingList')
    .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = ['ShoppingListService', '$scope'];

    function ShoppingListController(ShoppingListService, $scope) {
      var shoppingList = this;
      shoppingList.hello = "ShoppingListController";

      shoppingList.items = ShoppingListService.getItems();
      shoppingList.numOfBoughtItems = 0;
      shoppingList.showMessage = false;

      shoppingList.alreadyBought = function(index) {
        ShoppingListService.setItemAsBought(index);
        shoppingList.getNumberOfBoughtItems();
        shoppingList.checkNumberOfBoughtItems();
      }

      shoppingList.getNumberOfBoughtItems = function() {
        shoppingList.numOfBoughtItems = ShoppingListService.getNumOfBoughtItems();
        return shoppingList.numOfBoughtItems;
      }

      shoppingList.checkNumberOfBoughtItems = function() {
        if(ShoppingListService.getTotalNumOfItems() === ShoppingListService.getNumOfBoughtItems()) {
         shoppingList.showMessage = true;
        }
      }
    }
})();