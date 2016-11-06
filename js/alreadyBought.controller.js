(function(){
  'use strict';
  angular
    .module('shoppingList')
    .controller('AlreadyBoughtController', AlreadyBoughtController);

    AlreadyBoughtController.$inject = ['ShoppingListService', '$scope']

    function AlreadyBoughtController(ShoppingListService, $scope) {
      var alreadyBought = this;
      alreadyBought.hello = "AlreadyBoughtController";
      alreadyBought.numOfBoughtItems = ShoppingListService.getNumOfBoughtItems();
      alreadyBought.showMessage = ShoppingListService.getNumOfBoughtItems() === 0 ? true : false;

      alreadyBought.items = ShoppingListService.getItems();

      $scope.$watch('alreadyBought.numOfBoughtItems', function(current, previous) {
        console.log("Current: " + current + "\nPrevious: " + previous);
      });

    }
})();