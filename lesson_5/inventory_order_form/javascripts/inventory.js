"use strict";

let inventory = (function() {
  return {
    lastId: 0,
    collection: [],
    setDate() {
      let date = new Date();
      let orderDate = document.querySelector("#order_date");
      orderDate.textContent = date.toUTCString();
    },

    cacheTemplate() {
      let iTempl = document.querySelector("#inventory_item");
      this.template = Handlebars.compile(iTempl.innerHTML);
      iTempl.remove();
    },

    add() {
      this.lastId++;

      let item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1,
      };
      this.collection.push(item);

      return item;
    },

    remove(id) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== id;
      });
    },

    get(id) {
      let foundItem;
      this.collection.forEach((item) => {
        if (item.id === id) {
          foundItem = item;
        }
      });

      return foundItem;
    },

    update(updatedItem) {
      let id = this.findID(updatedItem);
      let item = this.get(id);

      item.name = updatedItem.querySelector("[name^=item_name]").value;
      item.stock_number = updatedItem.querySelector("[name^=item_stock_number]").value;
      item.quantity = updatedItem.querySelector("[name^=item_quantity]").value;
    },

    newItem(e) {
      e.preventDefault();
      let item = this.add();
      document.querySelector('#inventory')
              .insertAdjacentHTML('beforeend', this.template({ id: item.id }));
    },

    findParent(e) {
      return e.target.closest("tr");
    },

    findID(item) {
      return item.querySelector("input[type=hidden]").value;
    },

    deleteItem(e) {
      e.preventDefault();
      if (e.target.classList.contains('delete')) {
        let item = this.findParent(e);
        this.remove(this.findID(item));
        item.remove();
      }
    },

    updateItem(e) {
      if (String(event.target.tagname).toUpperCase() === "INPUT") {
        let item = this.findParent(e);
        this.update(item);
      }
    },

    bindEvents() {
      document.querySelector("#add_item")
              .addEventListener('click', this.newItem.bind(this));
      let inventory = document.querySelector("#inventory");
      inventory.addEventListener("click", this.deleteItem.bind(this));
      inventory.addEventListener("focusout", this.updateItem(this));

    },

    init() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

document.addEventListener('DOMContentLoaded', (e) => {
  inventory.init.bind(inventory)()
});