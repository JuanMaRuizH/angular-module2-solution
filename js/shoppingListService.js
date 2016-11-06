(function(){
  'use strict';
  angular
    .module('shoppingList')
    .service('ShoppingListService', ShoppingListService);

    function ShoppingListService() {
      var service = this;
      service.numOfBoughtItems = 0;
      service.boughtItems = [];

      var items = [
        {
          name: "cookies",
          quantity: 10,
          bought: false
        },
        {
          name: "Coke",
          quantity: 12,
          bought: false
        },
        {
          name: "Mars",
          quantity: 2,
          bought: false
        },
        {
          name: "M&M's",
          quantity: 8,
          bought: false
        }
      ];

      service.getItems = function() {
        return items;
      }

      service.setItemAsBought = function(index) {
        items[index].bought = true;
        return service.getNumOfBoughtItems();
      }

      service.getTotalNumOfItems = function() {
        return items.length;
      }

      service.getNumOfBoughtItems = function() {
        service.numOfBoughtItems = 0;
        angular.forEach(items, function(item, key) {
          if(item.bought === true){
            service.numOfBoughtItems++;
          }
        });
        return service.numOfBoughtItems;
      }

      service.getBoughtItems = function() {
        service.boughtItems = [];
        angular.forEach(items, function(item, key) {
          if(item.bought === true){
            service.boughtItems.push(item);
          }
        });
        return service.boughtItems;
      }

    };
})();